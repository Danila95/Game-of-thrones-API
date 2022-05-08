

const VideoBackground = () => {
    // Get the video
    // const video = document.getElementById("background-video");

    
	return (
		<video autoPlay muted loop preload="auto" className="background-video" id="background-video">
			<source src="resources/videos/background-video.webm" type="video/webm"></source>
			<source src="resources/videos/background-video.mp4" type="video/mp4"></source>
		</video>
        
	)
}

export default VideoBackground;