import styled from "styled-components";

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
    width: 150px;
    height: 150px;
    border-radius: 100px;
    border: 2px solid #d4d5d7;
  }

  @media (max-width: 700px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const HistoricContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #d4d5d7;
  margin-bottom: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 2px solid #d4d5d7;
  }
`;

export const InfoContainer = styled.div`
  height: vh;
  margin-left: 15px;
  padding: 20px;
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
    h1 {
      font-size: 20px;
    }
    h2 {
      font-size: 17px;
    }
    h3 {
      font-size: 13;
    }
  }
`;

export const InfoContainerHistoric = styled.div`
  height: vh;
  margin-left: 15px;
  h1 {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    font-weight: bold;
  }
  h2 {
    font-size: 12px;
    font-family: "Roboto", sans-serif;
    color: #8f8f8f;
    margin-top: 2px;
    margin-bottom: 5px;
  }
  h3 {
    font-size: 10px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    margin-top: 6px;
  }
`;

export const Form = styled.form`
  background-color: white;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 2px;
  display: flex;
  border: 1px solid #d4d5d7;
  padding-left: 10px;
  input {
    font-size: 15px;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #202124;
    }
  }
  button {
    border: none;
    width: 40px;
    border-radius: 40px;
    cursor: pointer;
    background-color: #f3f4f6;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Body = styled.div`
  padding: 0% 5% 0% 5%;
  margin-top: 40px;
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    display: flex;
    font-family: "Roboto", sans-serif;
    color: #202124;
    font-size: 40px;
    font-weight: bold;
    padding: 10px;
    border-width: 5px;
    border-style: double;
    border-color: #202124;
    border-radius: 10px;
    box-shadow: 0px 0px 3px #202124;
  }
  span {
    margin-left: 10px;
    -webkit-text-stroke: 2px #202124;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 30px white, 0px 0px 5px white;
  }
`;

export const Nav = styled.nav`
  margin-bottom: 20px;
  padding: 20px;
  font-family: "Roboto", sans-serif;
  width: 60%;
  box-sizing: border-box;
  h1 {
    color: #202124;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 0px;
    padding: 10px 13px 10px 0px;
  }
`;

export const Section = styled.section`
  box-sizing: border-box;
  width: 63%;
  margin-right: 20px;
  margin-left: 20px;
  @media (max-width: 700px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const Aside = styled.div`
  background-color: #ffffff;
  width: 40%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #d4d5d7;
  min-height: 150px;
  @media (max-width: 700px) {
    margin-top: 15px;
    width: 100%;
    box-sizing: border-box;
    margin-right: 20px;
  }
`;

export const H1 = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: #202124;
  font-weight: bold;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
  margin-left: 10px;
`;
