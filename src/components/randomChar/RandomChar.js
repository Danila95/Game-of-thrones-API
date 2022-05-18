import { Component } from 'react';

import './randomChar.scss';

import arms from '../../images/arms.png';
import GotService from "../../services/GotService";

class RandomChar extends Component {
	constructor(props) {
		super(props);
		this.updateChar();
	}

	state = {
		char: {}
	};

	gotService = new GotService();

	onCharLoaded = (char) => {
		this.setState({char});
	}

	updateChar = () => {
		const id = Math.floor(Math.random() * (53 - 1) + 1);
		this.gotService
			.getCharacter(id)
			.then(this.onCharLoaded)
	}

	render() {
		const {char: {id, firstName, lastName, fullName, title, family, image, imageUrl}} = this.state;
		return (
			<div className="randomchar">
				<div className="randomchar__block">
					<img src={imageUrl} alt="Random character" className="randomchar__img"/>
					<div className="randomchar__info">
						<p className="randomchar__name">{fullName}</p>
						<p className="randomchar__descr">
							<span>Aliases:&nbsp;{title}</span>
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
				<div className="randomchar__static">
					<p className="randomchar__title">
						Random character for today!<br/>
						Do you want to get to know him better?
					</p>
					<p className="randomchar__title">
						Or choose another one
					</p>
					<button className="button button__main">
						<div className="inner">try it</div>
					</button>
					<img src={arms} alt="arms" className="randomchar__decoration"/>
				</div>
			</div>
		)
	}
}

export default RandomChar;