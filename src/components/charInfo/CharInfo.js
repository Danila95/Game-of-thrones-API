import { Component } from 'react';
import './charInfo.scss';

import Skeleton from "../skeleton/Skeleton";
import GotService from "../../services/GotService";
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';

class CharInfo extends Component {

	state = {
		char: null,
		loading: false,
		error: false
	};

	gotService = new GotService();

	componentDidMount() {
		this.updateChar();
	}

	componentDidUpdate(prevProps) {
		if (this.props.charId !== prevProps.charId) {
			this.updateChar();
		}
	}

	updateChar = () => {
		const {charId} = this.props;

		if (charId === null) {
			return;
		}

		this.onCharLoading();

		this.gotService
			.getCharacter(charId)
			.then(this.onCharLoaded)
			.catch(this.onError);
	}

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
        })
    }

	onError = () => {
		this.setState({
			loading: false,
			error: true
		});
	}

	render() {
		const {char, loading, error} = this.state;

		const skeleton = char || loading || error ? null : <Skeleton />;
		const errorMessage = error ? <ErrorMessage /> : null;
		const spiner = loading ? <Spinner /> : null;
		const content = !(loading || error || !char) ? <View char={char} /> : null;

		return (
			<div className="char__info">
				{skeleton}
				{errorMessage}
				{spiner}
				{content}
			</div>
		)
	}
}

const View = ({char}) => {
	const {id, fullName, title, family, imageUrl} = char;

	return (
		<>
			<div className="char__basics">
					<img src={imageUrl} alt={fullName}/>
					<div>
						<div className="char__info-name">{fullName}</div>
						<div className="char__btns">
							<a href={`https://thronesapi.com/api/v2/Characters/${id}`} target="_blank" className="button button__main">
								<div className="inner">api page</div>
							</a>
							<a href={imageUrl} target="_blank" className="button button__secondary">
								<div className="inner">Full image</div>
							</a>
						</div>
					</div>
			</div>
			<div className="char__descr">
				<span>Title:&nbsp;{title}</span>
				<span>Family:&nbsp;{family}</span>
			</div>
		</>
	)
}

export default CharInfo;