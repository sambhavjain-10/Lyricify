import { useQuery } from "react-query";
import { LyricsApi } from "./api";

export const useLyrics = id => {
	const fetchLyricsApi = () =>
		LyricsApi.get(`/song/lyrics`, {
			params: {
				id,
			},
		}).then(res => res.data);

	const {
		data: lyricsData,
		isLoading: lyricsLoading,
		error: fetchLyricsError,
	} = useQuery(["lyrics", { id }], fetchLyricsApi);

	return {
		lyricsData,
		lyricsLoading,
		fetchLyricsError,
	};
};
