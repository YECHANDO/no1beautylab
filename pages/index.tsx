import type {NextPage} from "next";
import styles from "../styles/Home.module.css";
import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <LogoBox className={styles.logobox}>
      <div>
      <img src="/logo.svg" alt="Vercel Logo" />
      <P>준비중...</P>
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
    max-width: 500px;
    width: 100%;
  }
`;
const P = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  text-align: center;

`