import { useLyrics } from "@data-access";
import { useParams } from "react-router-dom";

const Lyrics = () => {
	const { id } = useParams();

	const { lyricsData, lyricsLoading, fetchLyricsError } = useLyrics(id);
	return <div>Lyrics</div>;
};

export default Lyrics;
