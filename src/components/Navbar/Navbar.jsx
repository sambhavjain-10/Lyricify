import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.container} onClick={() => navigate("/")}>
			Lyricify
		</div>
	);
};

export default Navbar;
