import styled from "styled-components";

export const RepositoriesContainer = styled.div`
  margin-top: 10px;
  padding-top: 20px;
  font-family: "Roboto", sans-serif;
  border-top: 1px solid black;
  min-width: 550px;
  width: 48%;
  margin-right: 20px;
  h2 {
    font-size: 20px;
    font-weight: bold;
    color: #0969da;
    margin-bottom: 10px;
  }
  h2:hover {
    text-decoration: underline;
  }
  p {
    font-size: 16px;
  }
  h3 {
    font-size: 14px;
    width: 50%;
    margin-bottom: 8px;
  }

  @media (max-width: 700px) {
    min-width: 100%;
    width: 100%;
    h2 {
      font-size: 17px;
    }
    p {
      font-size: 13px;
    }
    h3 {
      font-size: 12px;
    }
  }
`;

export const RepoData = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const Section = styled.section`
  margin: 30px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  h1 {
    font-size: 30px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    font-weight: bold;
    width: 100%;
  }
  @media (max-width: 700px) {
    margin-top: 10px;
    h1 {
      font-size: 20px;
    }
  }
`;

export const DataContainer = styled.div`
  display: flex;
  p {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    margin-top: 10px;
    margin-left: 20px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    p {
      font-size: 12px;
      margin-left: 0px;
    }
  }
`;

export const Body = styled.div`
  padding: 0% 5% 0% 5%;
  margin: 40px 20px 0px 20px;
  @media (max-width: 700px) {
    margin: 20px 0px;
  }
`;

export const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
`;

export const UserContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #d4d5d7;
  box-sizing: border-box;
  img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border: 2px solid #d4d5d7;
  }
  @media (max-width: 700px) {
    padding: 10px;
  }
`;

export const InfoContainer = styled.div`
  height: vh;
  margin-left: 15px;
  padding: 20px;
  width: 100%;

  h1 {
    font-size: 30px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    font-weight: bold;
  }
  h2 {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    color: #8f8f8f;
    margin-top: 2px;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    margin-top: 10px;
  }
  @media (max-width: 700px) {
    margin-left: 10px;
    padding: 0px;
    h3 {
      font-size: 12px;
    }
    h2 {
      font-size: 15px;
    }
    h1 {
      font-size: 20px;
    }
  }
`;
