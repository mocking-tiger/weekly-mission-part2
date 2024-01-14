import "./HomePage.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styled from "styled-components";

const Intro = styled.img``;

function HomePage() {
  return (
    <>
      <Header />
      <div className="tempIndex">
        <h6>임시 인덱스페이지 입니다.</h6>
        <Intro
          src="https://lh3.googleusercontent.com/proxy/5vLXWmUGg_S3M8l3TfqSCXNtHYxIT0-utEk0kmEUkhXX0yfLyBw5r1AjPvv5vkMEilNbtHFbsu4uDHB3o2TgZnoLUwjkvrXLAgYBg5ZouAnseTGVfHkN901_3nP_"
          alt="대문"
        />
        <br />
        <a href="/shared">/shared로 이동(6주차 과제)</a>
        <br />
        <a href="/folder">/folder로 이동(7~8주차 과제)</a>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
