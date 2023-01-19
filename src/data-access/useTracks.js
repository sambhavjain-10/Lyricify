import { useQuery } from "react-query";
import { DataApi } from "./api";

export const useTracks = (searchValue = "") => {
	const fetchTracksApi = () =>
		DataApi.get("/search", {
			params: {
				q: searchValue,
			},
		}).then(res => res.data.response.hits);

	const {
		data: tracksData,
		isLoading: tracksLoading,
		error: fetchTracksError,
	} = useQuery(["tracks", { searchValue }], fetchTracksApi, {
		enabled: searchValue.length > 0,
	});

	return {
		tracksData,
		tracksLoading,
		fetchTracksError,
	};
};
