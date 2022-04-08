import Header from "../header/Header";
import RandomChar from "../../randomChar/RandomChar";
import CharList from "../../charList/CharList";
import CharInfo from "../../charInfo/CharInfo";

import decoration from '../../../images/vision.png';

const App = () => {

	return (
		<div className="wrapper">
			{/* <div className="app">
				<Header/>
				<main>
					<RandomChar/>
					<div className="char__content">
						<CharList/>
						<CharInfo/>
					</div>
					<img className="bg-decoration" src={decoration} alt="vision"/>
				</main>
			</div> */}
			{/* background-video  */}
			<div class="full-screen">
				<div class="full-screen__body">
					<div class="full-screen__title">TEST</div>
						{/* Use a button to pause/play the video with JavaScript  */}
						<button id="myBtn" onClick="myFunction()">Pause</button>
						<button id="myBtn2" onClick="myAudio()">Play</button>
				</div>
			</div>
			<video autoplay muted loop preload="auto" class="background-video" id="myVideo">
				<source src="videos/background-video.webm" type="video/webm"></source>
				<source src="videos/background-video.mp4" type="video/mp4"></source>
			</video>
			<audio autoplay loop id="myAudio">
				<source src="audio/main-theme-got.mp3" type="audio/mp3"></source>
			</audio>
		</div>
	)
};

export default App;
