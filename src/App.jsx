import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "@components";
import Search from "./pages/Search/Search";
import Song from "./pages/Song/Song";
import Artist from "./pages/Artist/Artist";

const App = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/artist/:id" exact element={<Artist />} />
					<Route path="/song/:id" exact element={<Song />} />
					<Route path="/" exact element={<Search />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;
