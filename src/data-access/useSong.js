import { useQuery } from "react-query";
import { DataApi, LyricsApi } from "./api";

export const useSong = id => {
	const fetchSongApi = () => DataApi.get(`/songs/${id}`).then(res => res.data.response.song);

	const { data: songData, isLoading: songLoading, error: fetchSongError } = useQuery(["song", { id }], fetchSongApi);

	// const fetchLyricsApi = () => sample.response.lyrics;
	const fetchLyricsApi = () =>
		LyricsApi.get(`/song/lyrics`, {
			params: {
				id,
			},
		}).then(res => res.data.response.lyrics);

	const {
		data: lyricsData,
		isLoading: lyricsLoading,
		error: fetchLyricsError,
	} = useQuery(["lyrics", { id }], fetchLyricsApi);

	return {
		songData,
		songLoading,
		fetchSongError,
		lyricsData,
		lyricsLoading,
		fetchLyricsError,
	};
};

const sample = {
	meta: {
		status: 200,
	},
	response: {
		lyrics: {
			_type: "lyrics",
			api_path: "/songs/2396871/lyrics",
			lyrics: {
				body: {
					html: '<p>[Verse 1]<br>\n<a href="/9234498/Alan-walker-faded/You-were-the-shadow-to-my-light-did-you-feel-us" data-id="9234498" class="has_comments" data-editorial-state="accepted" data-classification="accepted">You were the shadow to my light<br>\nDid you feel us?</a><br>\n<a href="/8550469/Alan-walker-faded/Another-star-you-fade-away" data-id="8550469" class="has_pinned_annotation has_verified_annotation" data-editorial-state="accepted" data-classification="verified">Another star, you fade away</a><br>\n<a href="/8803010/Alan-walker-faded/Afraid-our-aim-is-out-of-sight-wanna-see-us-alight" data-id="8803010" data-editorial-state="accepted" data-classification="accepted">Afraid our aim is out of sight<br>\nWanna see us alight</a><br>\n<br>\n[Pre-Chorus 1]<br>\n<a href="/8774219/Alan-walker-faded/Where-are-you-now-where-are-you-now-where-are-you-now-was-it-all-in-my-fantasy-where-are-you-now-were-you-only-imaginary" data-id="8774219" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br>\nWhere are you now?<br>\nWhere are you now?<br>\nWas it all in my fantasy?<br>\nWhere are you now?<br>\nWere you only imaginary?</a><br>\n<br>\n[Chorus]<br>\n<a href="/8803037/Alan-walker-faded/Where-are-you-now-atlantis-under-the-sea-under-the-sea-where-are-you-now-another-dream" data-id="8803037" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br>\nAtlantis, under the sea, under the sea<br>\nWhere are you now? Another dream</a><br>\n<a href="/8774227/Alan-walker-faded/The-monsters-running-wild-inside-of-me" data-id="8774227" data-editorial-state="accepted" data-classification="accepted">The monster\'s running wild inside of me</a><br>\n<a href="/8550463/Alan-walker-faded/Im-faded-im-faded-so-lost-im-faded-im-faded-so-lost-im-faded" data-id="8550463" class="has_comments has_pending_edits has_pinned_annotation has_verified_annotation" data-editorial-state="needs_exegesis" data-classification="verified">I\'m faded, I\'m faded<br>\nSo lost, I\'m faded, I\'m faded<br>\nSo lost, I\'m faded</a><br>\n<br>\n[Verse 2]<br>\n<a href="/8894966/Alan-walker-faded/These-shallow-waters-never-met-what-i-needed-im-letting-go-a-deeper-dive-eternal-silence-of-the-sea-im-breathing-alive" data-id="8894966" data-editorial-state="accepted" data-classification="accepted">These shallow waters never met what I needed<br>\nI\'m letting go, a deeper dive<br>\nEternal silence of the sea<br>\nI\'m breathing, alive</a><br>\n<br>\n[Pre-Chorus 2]<br>\n<a href="/9066587/Alan-walker-faded/Where-are-you-now-where-are-you-now" data-id="9066587" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br>\nWhere are you now?</a><br>\n<a href="/8920001/Alan-walker-faded/Under-the-bright-but-faded-lights" data-id="8920001" data-editorial-state="accepted" data-classification="accepted">Under the bright but faded lights</a><br>\n<a href="/9066597/Alan-walker-faded/You-set-my-heart-on-fire" data-id="9066597" data-editorial-state="accepted" data-classification="accepted">You set my heart on fire</a><br>\n<a href="/9066587/Alan-walker-faded/Where-are-you-now-where-are-you-now" data-id="9066587" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br>\nWhere are you now?</a><br>\n<br>\n[Chorus]<br>\n<a href="/8803037/Alan-walker-faded/Where-are-you-now-atlantis-under-the-sea-under-the-sea-where-are-you-now-another-dream" data-id="8803037" data-editorial-state="accepted" data-classification="accepted">Where are you now?<br>\nAtlantis, under the sea, under the sea<br>\nWhere are you now? Another dream</a><br>\n<a href="/8774227/Alan-walker-faded/The-monsters-running-wild-inside-of-me" data-id="8774227" data-editorial-state="accepted" data-classification="accepted">The monster\'s running wild inside of me</a><br>\n<a href="/8550463/Alan-walker-faded/Im-faded-im-faded-so-lost-im-faded-im-faded-so-lost-im-faded" data-id="8550463" class="has_comments has_pending_edits has_pinned_annotation has_verified_annotation" data-editorial-state="needs_exegesis" data-classification="verified">I\'m faded, I\'m faded<br>\nSo lost, I\'m faded, I\'m faded<br>\nSo lost, I\'m faded</a></p>\n\n',
					children: [
						{
							children: [
								"[Verse 1]",
								{
									tag: "br",
								},
								"",
								{
									children: [
										"You were the shadow to my light",
										{
											tag: "br",
										},
										"Did you feel us?",
									],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "9234498",
									},
									attributes: {
										class: "has_comments",
										href: "/9234498/Alan-walker-faded/You-were-the-shadow-to-my-light-did-you-feel-us",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									children: ["Another star, you fade away"],
									data: {
										classification: "verified",
										editorialState: "accepted",
										id: "8550469",
									},
									attributes: {
										class: "has_pinned_annotation has_verified_annotation",
										href: "/8550469/Alan-walker-faded/Another-star-you-fade-away",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									children: [
										"Afraid our aim is out of sight",
										{
											tag: "br",
										},
										"Wanna see us alight",
									],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "8803010",
									},
									attributes: {
										href: "/8803010/Alan-walker-faded/Afraid-our-aim-is-out-of-sight-wanna-see-us-alight",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									tag: "br",
								},
								"[Pre-Chorus 1]",
								{
									tag: "br",
								},
								"",
								{
									children: [
										"Where are you now?",
										{
											tag: "br",
										},
										"Where are you now?",
										{
											tag: "br",
										},
										"Where are you now?",
										{
											tag: "br",
										},
										"Was it all in my fantasy?",
										{
											tag: "br",
										},
										"Where are you now?",
										{
											tag: "br",
										},
										"Were you only imaginary?",
									],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "8774219",
									},
									attributes: {
										href: "/8774219/Alan-walker-faded/Where-are-you-now-where-are-you-now-where-are-you-now-was-it-all-in-my-fantasy-where-are-you-now-were-you-only-imaginary",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									tag: "br",
								},
								"[Chorus]",
								{
									tag: "br",
								},
								"",
								{
									children: [
										"Where are you now?",
										{
											tag: "br",
										},
										"Atlantis, under the sea, under the sea",
										{
											tag: "br",
										},
										"Where are you now? Another dream",
									],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "8803037",
									},
									attributes: {
										href: "/8803037/Alan-walker-faded/Where-are-you-now-atlantis-under-the-sea-under-the-sea-where-are-you-now-another-dream",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									children: ["The monster's running wild inside of me"],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "8774227",
									},
									attributes: {
										href: "/8774227/Alan-walker-faded/The-monsters-running-wild-inside-of-me",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									children: [
										"I'm faded, I'm faded",
										{
											tag: "br",
										},
										"So lost, I'm faded, I'm faded",
										{
											tag: "br",
										},
										"So lost, I'm faded",
									],
									data: {
										classification: "verified",
										editorialState: "needs_exegesis",
										id: "8550463",
									},
									attributes: {
										class: "has_comments has_pending_edits has_pinned_annotation has_verified_annotation",
										href: "/8550463/Alan-walker-faded/Im-faded-im-faded-so-lost-im-faded-im-faded-so-lost-im-faded",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									tag: "br",
								},
								"[Verse 2]",
								{
									tag: "br",
								},
								"",
								{
									children: [
										"These shallow waters never met what I needed",
										{
											tag: "br",
										},
										"I'm letting go, a deeper dive",
										{
											tag: "br",
										},
										"Eternal silence of the sea",
										{
											tag: "br",
										},
										"I'm breathing, alive",
									],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "8894966",
									},
									attributes: {
										href: "/8894966/Alan-walker-faded/These-shallow-waters-never-met-what-i-needed-im-letting-go-a-deeper-dive-eternal-silence-of-the-sea-im-breathing-alive",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									data: {
										name: "primis_desktop_song_player",
									},
									tag: "inread-ad",
								},
								"[Pre-Chorus 2]",
								{
									tag: "br",
								},
								"",
								{
									children: [
										"Where are you now?",
										{
											tag: "br",
										},
										"Where are you now?",
									],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "9066587",
									},
									attributes: {
										href: "/9066587/Alan-walker-faded/Where-are-you-now-where-are-you-now",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									children: ["Under the bright but faded lights"],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "8920001",
									},
									attributes: {
										href: "/8920001/Alan-walker-faded/Under-the-bright-but-faded-lights",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									children: ["You set my heart on fire"],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "9066597",
									},
									attributes: {
										href: "/9066597/Alan-walker-faded/You-set-my-heart-on-fire",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									children: [
										"Where are you now?",
										{
											tag: "br",
										},
										"Where are you now?",
									],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "9066587",
									},
									attributes: {
										href: "/9066587/Alan-walker-faded/Where-are-you-now-where-are-you-now",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									tag: "br",
								},
								"[Chorus]",
								{
									tag: "br",
								},
								"",
								{
									children: [
										"Where are you now?",
										{
											tag: "br",
										},
										"Atlantis, under the sea, under the sea",
										{
											tag: "br",
										},
										"Where are you now? Another dream",
									],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "8803037",
									},
									attributes: {
										href: "/8803037/Alan-walker-faded/Where-are-you-now-atlantis-under-the-sea-under-the-sea-where-are-you-now-another-dream",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									children: ["The monster's running wild inside of me"],
									data: {
										classification: "accepted",
										editorialState: "accepted",
										id: "8774227",
									},
									attributes: {
										href: "/8774227/Alan-walker-faded/The-monsters-running-wild-inside-of-me",
									},
									tag: "a",
								},
								{
									tag: "br",
								},
								"",
								{
									children: [
										"I'm faded, I'm faded",
										{
											tag: "br",
										},
										"So lost, I'm faded, I'm faded",
										{
											tag: "br",
										},
										"So lost, I'm faded",
									],
									data: {
										classification: "verified",
										editorialState: "needs_exegesis",
										id: "8550463",
									},
									attributes: {
										class: "has_comments has_pending_edits has_pinned_annotation has_verified_annotation",
										href: "/8550463/Alan-walker-faded/Im-faded-im-faded-so-lost-im-faded-im-faded-so-lost-im-faded",
									},
									tag: "a",
								},
							],
							tag: "p",
						},
						"",
					],
					tag: "root",
					plain:
						"[Verse 1]\nYou were the shadow to my light\nDid you feel us?\nAnother star, you fade away\nAfraid our aim is out of sight\nWanna see us alight\n\n[Pre-Chorus 1]\nWhere are you now?\nWhere are you now?\nWhere are you now?\nWas it all in my fantasy?\nWhere are you now?\nWere you only imaginary?\n\n[Chorus]\nWhere are you now?\nAtlantis, under the sea, under the sea\nWhere are you now? Another dream\nThe monster's running wild inside of me\nI'm faded, I'm faded\nSo lost, I'm faded, I'm faded\nSo lost, I'm faded\n\n[Verse 2]\nThese shallow waters never met what I needed\nI'm letting go, a deeper dive\nEternal silence of the sea\nI'm breathing, alive\n\n[Pre-Chorus 2]\nWhere are you now?\nWhere are you now?\nUnder the bright but faded lights\nYou set my heart on fire\nWhere are you now?\nWhere are you now?\n\n[Chorus]\nWhere are you now?\nAtlantis, under the sea, under the sea\nWhere are you now? Another dream\nThe monster's running wild inside of me\nI'm faded, I'm faded\nSo lost, I'm faded, I'm faded\nSo lost, I'm faded",
				},
			},
			path: "/Alan-walker-faded-lyrics",
			song_id: 2396871,
			trackingData: {
				"Song ID": 2396871,
				Title: "Faded",
				"Primary Artist": "Alan Walker",
				"Primary Artist ID": 456537,
				"Primary Album": "Different World",
				"Primary Album ID": 368574,
				Tag: "pop",
				"Primary Tag": "pop",
				"Primary Tag ID": 16,
				"Music?": true,
				"Annotatable Type": "Song",
				"Annotatable ID": 2396871,
				featured_video: true,
				cohort_ids: [11],
				has_verified_callout: true,
				has_featured_annotation: true,
				created_at: "2015-12-26T02:05:44Z",
				created_month: "2015-12-01",
				created_year: 2015,
				song_tier: "C",
				"Has Recirculated Articles": false,
				"Lyrics Language": "en",
				"Has Apple Match": true,
				"Release Date": "2015-12-03",
				"NRM Tier": 2,
				"NRM Target Date": "2018-12-14",
				"Has Description": true,
				"Has Youtube URL": true,
				"Has Translation Q&A": true,
				"Comment Count": 315,
				hot: false,
				web_interstitial_variant: "interstitial",
				two_column_song_page: true,
				platform_variant: "desktop_react_2_column",
			},
		},
	},
};
