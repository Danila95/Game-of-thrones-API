import { useRef, useState } from 'react'
import Header from "../header/Header";
import RandomChar from "../../randomChar/RandomChar";
import CharList from "../../charList/CharList";
import CharInfo from "../../charInfo/CharInfo";

import decoration from '../../../images/ned-stark.png';
import VideoBackground from "../VideoBackground";
import AudioBackground from "../AudioBackground";


const App = () => {
	const [show, setShow] = useState(true);
	const vidRef = useRef(null);
	console.log(vidRef);
	const handlePlayVideo = () => {
		if (show) {
			setShow(true)
			vidRef.current.play();
		}
		else {
			vidRef.current.pause();
			setShow(false)
		}
	}

function MyComponent() {
  return (
	<video ref={vidRef} autoPlay muted loop preload="auto" className="background-video" id="background-video">
	  <source src="resources/videos/background-video.webm" type="video/mp4"></source>
	  {/* <source src="resources/videos/background-video.mp4" type="video/mp4"></source> */}
	</video>
  )
}

	return (
		<div className="wrapper">
			<div className="full-screen">
				<div className="full-screen__body">
					{/* <div className="full-screen__title">TEST</div> */}
						{/* Use a button to pause/play the video with JavaScript  */}
						<button id="myBtn" onClick={handlePlayVideo}>Pause</button>
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
			<MyComponent />
			{/* <VideoBackground /> */}
			{/* <AudioBackground /> */}
		</div>
	)
};

export default App;


