import Header from "../header/Header";
import RandomChar from "../../randomChar/RandomChar";
import CharList from "../../charList/CharList";
import CharInfo from "../../charInfo/CharInfo";

import decoration from '../../../images/ned-stark.png';

const App = () => {

	return (
		<div className="wrapper">
			{/* background-video  */}
			<div className="full-screen">
				<div className="full-screen__body">
					{/* <div className="full-screen__title">TEST</div> */}
						{/* Use a button to pause/play the video with JavaScript  */}
						{/* <button id="myBtn" onClick="myFunction()">Pause</button> */}
						{/* <button id="myBtn2" onClick="myAudio()">Play</button> */}
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
			</div>
			<video autoPlay muted loop preload="auto" className="background-video" id="myVideo">
				<source src="resources/videos/background-video.webm" type="video/webm"></source>
				<source src="resources/videos/background-video.mp4" type="video/mp4"></source>
			</video>
			{/* <audio autoPlay loop id="myAudio">
				<source src="resources/audio/main-theme-got.mp3" type="audio/mp3"></source>
			</audio> */}
		</div>
	)
};

export default App;
