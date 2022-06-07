import useSound from 'use-sound';
const soundHoverUrl = 'resources/audio/sounds/menu2.wav';

const HoverButtonSound = ({children}) => {
	const [playHover] = useSound( soundHoverUrl, {
		playbackRate: 0.8,
		volume: 0.25 
	});
	return (
		<button // оборачиваем в кнопку со звуком
			onMouseEnter={() => {
				playHover();
			}}
			// onMouseLeave={() => stop() }
		>
			{children}
		</button>
	);
};

export default HoverButtonSound;