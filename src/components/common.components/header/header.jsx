import './header.scss';

import imageHeader from '../../../images/got-header.png';

const Header = () => {
	return (
		<header className="app__header">
			<img src={imageHeader} alt="" />
			<div className="app__nav">
				<h1 className="app__title">
					<a href="#">
						<span>GoT</span> information portal
					</a>
				</h1>
				<nav className="app__menu">
					<ul>
						<li><a href="#">Characters</a></li>
						/
						<li><a href="#">Series</a></li>
					</ul>
				</nav>
			</div>

		</header>
	)
};

export default Header;
