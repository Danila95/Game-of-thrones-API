import './randomChar.scss';
import jonSnow from '../../images/jon-snow.jpg';
import arms from '../../images/arms.png';

const RandomChar = () => {
	return (
		<div className="randomchar">
			<div className="randomchar__block">
				<img src={jonSnow} alt="Random character" className="randomchar__img"/>
				<div className="randomchar__info">
					<p className="randomchar__name">John Snow</p>
					<p className="randomchar__descr">
						Lord Commander of the Night's Watch
					</p>
					<div className="randomchar__btns">
						<a href="#" className="button button__main">
							<div className="inner">homepage</div>
						</a>
						<a href="#" className="button button__secondary">
							<div className="inner">Wiki</div>
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

export default RandomChar;