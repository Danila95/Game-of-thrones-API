import {useState, useEffect, useRef} from 'react';

import './charList.scss';
import GotService from "../../services/GotService";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';

const CharList = (props) => {

	const [charList, setCharList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(210);
	const [charEnded, setCharEnded] = useState(false);
	const [soundPlayingMenu2, setSoundPlayingMenu2] = useState(false);

	const soundMenu2Ref = useRef(null);

	const gotService = new GotService();

	useEffect(() => {
		onRequest();
	}, []);

	const onRequest = (offset) => {
		onCharListLoading();
		gotService.getAllCharacters(offset)
			.then(onCharListLoaded)
			.catch(onError)
	}

	const SoundMenu2 = () => {
		soundMenu2Ref.current.pause();
		soundMenu2Ref.current.play();
		setSoundPlayingMenu2(true);
	}

	const onCharListLoading = () => {
		setNewItemLoading(true);
	}

	const onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList.length >= 53) {
			ended = true;
		}

		setCharList([ ...newCharList]);
		setLoading(loading => false);
		setNewItemLoading(newItemLoading => false);
		setOffset(offset => offset + 9);
		setCharEnded(charEnded => ended);
	}

	const onError = () => {
		setError(true);
		setLoading(loading => false);
	}

	const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

	// Этот метод создан для оптимизации, 
	// чтобы не помещать такую конструкцию в метод render
	const renderItems = (arr) => {
		const items =  arr.map((item, i) => {
			return (
				<li 
					className="char__item"
					tabIndex={0}
                    ref={el => itemRefs.current[i] = el}
					key={item.id}
					onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
						SoundMenu2();
                    }}
					onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}>
						<img src={item.imageUrl} alt={item.fullName} />
						<div className="char__name">{item.fullName}</div>
				</li>
			)
		});
		// А эта конструкция вынесена для центровки спиннера/ошибки
		return (
			<>
				<ul className="char__grid">
					{items}
				</ul>
				<audio ref={soundMenu2Ref} id="myAudio">
					<source src="resources/audio/sounds/menu2.wav" type="audio/wav"></source>
				</audio>
			</>
		)
	}

	const items = renderItems(charList);

	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading ? <Spinner/> : null;
	const content = !(loading || error) ? items : null;

	return (
		<div className="char__list">
			{errorMessage}
			{spinner}
			{content}
			<button
				className="button button__main button__long"
				disabled={newItemLoading}
				style={{'display': charEnded ? 'none' : 'block'}}
				onClick={() => onRequest(offset)}>
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

export default CharList;