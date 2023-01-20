import { useSong } from "@data-access";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Song.module.scss";
import RHP from "react-html-parser";

const Song = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { songData, songLoading, fetchSongError, lyricsData, lyricsLoading, fetchLyricsError } = useSong(id);

	console.log(songData, lyricsData);
	return (
		<div className={styles.container}>
			<button onClick={() => navigate(-1)}>{"<"} back</button>
			<div className={styles.song}>
				<img src={songData?.song_art_image_url} />
				<div>
					<span>{songData?.title}</span>
				</div>
			</div>
			<iframe
				id="ytplayer"
				type="text/html"
				width="100%"
				height="300"
				src={`${
					songData?.media.find(media => media.provider === "youtube")?.url
				}?autoplay=1&origin=http://localhost:5173/lyricify/`}
				frameborder="0"
			></iframe>
			<div className={styles.lyrics}>
				<span>{songData?.title} Lyrics</span>
				<div>{RHP(lyricsData?.lyrics?.body?.html)}</div>
			</div>
		</div>
	);
};

export default Song;
