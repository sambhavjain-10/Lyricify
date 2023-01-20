import styles from "./Error.module.scss";

const Error = ({ children }) => {
	return <div className={styles.error}>{children}</div>;
};

export default Error;
