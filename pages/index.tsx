import type {NextPage} from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.logo}>
      <img src="/logo.svg" alt="Vercel Logo" />
    </div>
  );
};

export default Home;
