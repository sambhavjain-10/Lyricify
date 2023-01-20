import { useQuery } from "react-query";
import { DataApi } from "./api";

export const useSong = id => {
	const fetchSongApi = () =>
		DataApi.get(`/song/lyrics`, {
			params: {
				id,
			},
		}).then(res => res.data.lyrics);

	const { data: songData, isLoading: songLoading, error: fetchSongError } = useQuery(["lyrics", { id }], fetchSongApi);

	return {
		songData,
		songLoading,
		fetchSongError,
	};
};
