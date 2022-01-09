import type {NextPage} from "next";
import styles from "../styles/Home.module.css";
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <LogoBox className={styles.logobox}>
      <div>
      <img src="/logo.svg" alt="Vercel Logo" />
      <div>준비중...</div>
      </div>
    </LogoBox>
  );
};

export default Home;

const LogoBox = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  img {
    width: 500px;
  }
  div {
    font-size: 1.25rem;
    font-weight: 500;
    text-align: center;
    padding: 20px;
  }
`