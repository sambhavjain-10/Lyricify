import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
	key: "search",
});

const search = atom({
	key: "search",
	default: "",
	effects_UNSTABLE: [persistAtom],
});

export default search;
