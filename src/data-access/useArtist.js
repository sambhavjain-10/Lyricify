import { useQuery } from "react-query";
import { DataApi } from "./api";

export const useArtist = id => {
	const fetchArtist = () => DataApi.get(`/artist/details`, { params: { id } }).then(res => res.data.artist);

	const { data: artistData, isLoading: artistLoading, error: artistError } = useQuery(["artist", { id }], fetchArtist);

	const fetchArtistSongs = () => DataApi.get(`/artist/songs`, { params: { id } }).then(res => res.data.songs);

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
