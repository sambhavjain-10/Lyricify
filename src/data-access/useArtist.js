import { useQuery } from "react-query";
import { DataApi } from "./api";

export const useArtist = id => {
	const fetchArtist = () => DataApi.get(`/artists/${id}`).then(res => res.data.response.artist);

	const { data: artistData, isLoading: artistLoading, error: artistError } = useQuery(["artist", { id }], fetchArtist);

	const fetchArtistSongs = () => DataApi.get(`/artists/${id}/songs`).then(res => res.data.response.songs);

	const {
		data: artistSongs,
		isLoading: artistSongsLoading,
		error: artistSongsError,
	} = useQuery(["artist-songs", { id }], fetchArtistSongs);

	return {
		artistData,
		artistSongs,
		artistLoading,
		artistSongsLoading,
		artistError,
		artistSongsError,
	};
};
