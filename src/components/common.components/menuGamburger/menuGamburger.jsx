import './menuGamburger.scss';

const menuGamburger = ({active}) => {
	return (
		<div className="section">
			<div className="menu-block">
				<nav className={active ? "menu-nav menu-nav_active" : "menu-nav"}>
				<a href="#">Main</a>
				<a href="#">Porfolio</a>
				<a href="#">About</a>
				<a href="#">Contacts</a>
				</nav>
				
				<a href="#" className={active ? "menu-btn menu-btn_active" : "menu-btn"}>
				<span></span>
				</a>
				
			</div>
		</div>
	);
};

export default menuGamburger;