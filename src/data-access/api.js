import axios from "axios";

export const DataApi = axios.create({
	baseURL: "https://genius.p.rapidapi.com",
	headers: {
		"X-RapidAPI-Key": "33362ce81dmshd6ba172044c8d10p12e31fjsn5a5017e5ceba",
		"X-RapidAPI-Host": "genius.p.rapidapi.com",
	},
});

export const LyricsApi = axios.create({
	baseURL: "https://genius-song-lyrics1.p.rapidapi.com",
	headers: {
		"X-RapidAPI-Key": "33362ce81dmshd6ba172044c8d10p12e31fjsn5a5017e5ceba",
		"X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
	},
});
