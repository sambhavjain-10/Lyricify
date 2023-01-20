import { BackButton, Error, Loader } from "@components";
import { useSong } from "@data-access";
import RHP from "react-html-parser";
import { useParams } from "react-router-dom";
import styles from "./Song.module.scss";

const Song = () => {
	const { id } = useParams();

	const { songData, songLoading, fetchSongError } = useSong(id);

	return (
		<div className={styles.container}>
			<BackButton />
			{fetchSongError && <Error>Something went wrong while fetching song lyrics, Please come back later</Error>}
			{songLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
				<>
					<div className={styles.song}>
						{/* <img src={songData?.tracking_data?.song_art_image_url} /> */}
						<div>
							<span>{songData?.tracking_data?.title}</span>
						</div>
					</div>
					<div className={styles.lyrics}>
						<span>{songData?.tracking_data?.title} Lyrics</span>
						<div>{RHP(songData?.lyrics?.body?.html)}</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Song;
