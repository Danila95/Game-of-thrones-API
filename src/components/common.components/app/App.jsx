import Header from "../header/Header";
import RandomChar from "../../randomChar/RandomChar";
import CharList from "../../charList/CharList";
import CharInfo from "../../charInfo/CharInfo";

import decoration from '../../../images/vision.png';

const App = () => {

	return (
		<div className="wrapper">
			<div className="app">
				<Header/>
				<main>
					<RandomChar/>
					<div className="char__content">
						<CharList/>
						<CharInfo/>
					</div>
					<img className="bg-decoration" src={decoration} alt="vision"/>
				</main>
			</div>
		</div>
	)
};

export default App;
