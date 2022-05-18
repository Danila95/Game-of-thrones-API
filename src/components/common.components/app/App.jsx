import { useRef, useState } from 'react'
import Header from "../header/Header";
import RandomChar from "../../randomChar/RandomChar";
import CharList from "../../charList/CharList";
import CharInfo from "../../charInfo/CharInfo";

import decoration from '../../../images/ned-stark.png';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';


const App = () => {
	const [playing, setPlaying] = useState(true);
	const [audioPlaying, setAudioPlaying] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const audioRef = useRef(null);
	const videoRef = useRef(null);
	
	const startVideo = () => {
		videoRef.current.pause();
		setPlaying(false);
	  }
	
	  const pauseVideo = () => {
		videoRef.current.play();
		setPlaying(true);
	  }

	  const handleVideoPress = (e) => {
		e.preventDefault();
		if (playing) {
		  startVideo();
		} else {
		  pauseVideo();
		}
	  };
	
	  const startAudio = () => {
		audioRef.current.pause();
		setAudioPlaying(false);
		console.log('pause');
	  }
	
	  const pauseAudio = () => {
		audioRef.current.play();
		setAudioPlaying(true);
		console.log('play');
	  }

	  const handleAudioPress = (e) => {
		e.preventDefault();
		if (audioPlaying) {
		  startAudio();
		} else {
		  pauseAudio();
		}
	  };

	  const handleOpenMenu = (e) => {
		  e.preventDefault();
		  if (openMenu) {
			setOpenMenu(false);
		  } else {
			setOpenMenu(true);
		  }
	  };

	return (
		<div className="wrapper">
			<div className="full-screen">
				<div className="full-screen__body">
					<div className="section">
						<div className="menu-block">
							<nav className={openMenu ? "menu-nav menu-nav_active" : "menu-nav"}>
								<a href="#" onClick={handleVideoPress}>
									{ playing ? <FaPause size="20" /> : <FaPlay size="20" /> }
								</a>
								<a href="#" onClick={handleAudioPress}>
									{ audioPlaying ? <FaVolumeUp size="20" /> : <FaVolumeMute size="20" /> }
								</a>
							</nav>
							
							<a href="#" onClick={handleOpenMenu} className={openMenu ? "menu-btn menu-btn_active" : "menu-btn"}>
							<span></span>
							</a>
							
						</div>
					</div>
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
			<video ref={videoRef} autoPlay muted loop preload='true'  className="background-video" id="background-video">
				<source src="resources/videos/background-video.webm" type="video/mp4"></source>
				<source src="resources/videos/background-video.mp4" type="video/mp4"></source>
			</video>
			<audio ref={audioRef} autoPlay loop id="myAudio">
				<source src="resources/audio/main-theme-got.mp3" type="audio/mp3"></source>
			</audio>
		</div>
	)
};

export default App;


