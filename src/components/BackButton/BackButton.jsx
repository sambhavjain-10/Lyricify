import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.scss";

const BackButton = ({ ...rest }) => {
	const navigate = useNavigate();
	return (
		<button onClick={() => navigate(-1)} className={styles.button} {...rest}>
			{" < "} Back
		</button>
	);
};

export default BackButton;
