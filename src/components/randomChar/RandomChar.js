import { Component } from 'react';

import './randomChar.scss';

import arms from '../../images/arms.png';
import GotService from "../../services/GotService";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';

class RandomChar extends Component {

	state = {
		char: {},
		loading: true,
		error: false
	};

	gotService = new GotService();

	componentDidMount() {
		this.updateChar();
	};

	onCharLoaded = (char) => {
		this.setState({
			char,
			loading: false,
			error: false
		});
	}

	onCharLoading = () => {
        this.setState({
            loading: true,
            error: false
        })
    }

	onError = () => {
		this.setState({
			loading: false,
			error: true
		});
	}

	updateChar = () => {
		if (!this.state.error) {
			this.onCharLoading();
		}
		const id = Math.floor(Math.random() * (53 - 1) + 1);
		this.gotService
			.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError);
	}

	render() {
		const {char, loading, error} = this.state;
		const errorMessage = error ? <ErrorMessage /> : null;
		const spiner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? <View char={char} /> : null;

		return (
			<div className="randomchar">
				{errorMessage}
				{spiner}
				{content}
				<div className="randomchar__static">
					<p className="randomchar__title">
						Random character for today!<br/>
						Do you want to get to know him better?
					</p>
					<p className="randomchar__title">
						Or choose another one
					</p>
					<button className="button button__main" onClick={this.updateChar}>
						<div className="inner">try it</div>
					</button>
					<img src={arms} alt="arms" className="randomchar__decoration"/>
				</div>
			</div>
		)
	}
}

const View = ({char}) => {
	const {id, fullName, title, family, imageUrl} = char;

	return (
		<div className="randomchar__block">
			<img src={imageUrl} alt="Random character" className="randomchar__img"/>
			<div className="randomchar__info">
				<p className="randomchar__name">{fullName}</p>
				<p className="randomchar__descr">
					<span>Title:&nbsp;{title}</span>
					<span>Family:&nbsp;{family}</span>
				</p>
				<div className="randomchar__btns">
					<a href={`https://thronesapi.com/api/v2/Characters/${id}`} target="_blank" className="button button__main">
						<div className="inner">api page</div>
					</a>
					<a href={imageUrl} target="_blank" className="button button__secondary">
						<div className="inner">Full image</div>
					</a>
				</div>
			</div>
		</div>
	)
};

export default RandomChar;