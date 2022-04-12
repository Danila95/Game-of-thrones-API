import './charInfo.scss';
import jonSnow from '../../images/jon-snow.jpg';

const CharInfo = () => {
	return (
		<div className="char__info">
			<div className="char__basics">
				<img src={jonSnow} alt="abyss"/>
				<div>
					<div className="char__info-name">Jon Snow</div>
					<div className="char__btns">
						<a href="#" className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href="#" className="button button__secondary">
							<div className="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className="char__descr">
			Lord Commander of the Night's Watch
			</div>
			<div className="char__comics">Aliases:</div>
			<ul className="char__comics-list">
				<li className="char__comics-item">
					Lord Snow
				</li>
				<li className="char__comics-item">
					Ned Stark's Bastard
				</li>
				<li className="char__comics-item">
					The Snow of Winterfell
				</li>
				<li className="char__comics-item">
					The Crow-Come-Over
				</li>
				<li className="char__comics-item">
					The 998th Lord Commander of the Night's Watch
				</li>
				<li className="char__comics-item">
					The Black Bastard of the Wall
				</li>
				<li className="char__comics-item">
					Lord Crow
				</li>
			</ul>
		</div>
	)
}

export default CharInfo;