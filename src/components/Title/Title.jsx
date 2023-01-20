import styles from "./Title.module.scss";

const Title = ({ children }) => {
	return <span className={styles.title}>{children}</span>;
};

export default Title;
