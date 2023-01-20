import styles from "./Loader.module.scss";

const Loader = () => {
	return (
		<div className={styles["lds-roller"]}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;
