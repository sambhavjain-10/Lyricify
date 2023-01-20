import { searchAtom } from "@atoms";
import { Input, Loader, Title, Error } from "@components";
import { useTracks } from "@data-access";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styles from "./Search.module.scss";

const Search = () => {
	const navigate = useNavigate();
	const searchRef = useRef(null);

	//states
	const [value, setValue] = useRecoilState(searchAtom);
	const [searchValue, setSearchValue] = useState("");
	const [songs, setSongs] = useState([]);
	const [artists, setArtists] = useState([]);

	//api
	const { tracksData, tracksLoading, fetchTracksError } = useTracks(searchValue);

	//functions
	const handleSearch = () => setSearchValue(value);

	//side effects

	useEffect(() => {
		searchRef?.current?.focus();
	}, [searchRef]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (value?.length > 0 && typeof handleSearch === "function") handleSearch(value);
		}, 500);
		return () => clearTimeout(timer);
	}, [value]);

	useEffect(() => {
		if (tracksData) {
			setSongs(tracksData.map(track => ({ ...track.result })));
			let artists = [];
			tracksData.forEach(track => {
				artists.push(track.result.primary_artist, ...track.result.featured_artists);
			});
			artists = artists.filter(
				artist => artist.header_image_url !== "https://assets.genius.com/images/default_avatar_300.png?1674059861"
			);
			setArtists([...new Set(artists)]);
		}
	}, [tracksData]);

	return (
		<div className={styles.container}>
			<div className={styles.input}>
				<Input value={value} setValue={setValue} placeholder="Type Song, Artist, Album" ref={searchRef} />
			</div>
			{fetchTracksError && <Error>Something went wrong while fetching songs, Please come back later</Error>}
			{tracksLoading ? (
				<div className={styles.loader}>
					<Loader />
				</div>
			) : (
				tracksData && (
					<div className={styles.results}>
						<div className={styles.tracks}>
							<Title>Songs</Title>
							<div>
								{songs?.map(track => (
									<div className={styles.track} onClick={() => navigate(`/song/${track.id}`)}>
										<img src={track.song_art_image_thumbnail_url} alt="" />
										<div>
											<span>{track.title}</span>
											<div>
												<span onClick={() => navigate(`/artist/${track.primary_artist.id}`)}>
													{track.primary_artist.name}
												</span>
												{track.featured_artists.map(fa => (
													<>
														, <span onClick={() => navigate(`/artist/${fa.id}`)}>{fa.name}</span>
													</>
												))}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className={styles.artists}>
							<Title>Artists</Title>
							<div>
								{artists?.map(artist => (
									<div className={styles.artist} onClick={() => navigate(`/artist/${artist.id}`)}>
										<img src={artist.image_url} />
										<span>{artist.name}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				)
			)}
		</div>
	);
};

export default Search;
