import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { AiOutlineGithub, AiOutlineRight } from "react-icons/ai";

interface UserData {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
}

export default function Home() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [searchHistory, setSearchHistory] = useState<UserData[]>([]);

  async function search(e) {
    e.preventDefault();

    if (searchHistory.length >= 1 && username == searchHistory[0].login) {
      return;
    }

    try {
      const response = await axios.get<UserData>(
        `https://api.github.com/users/${username}`
      );

      setUserData(response.data);
      setSearchHistory((prevSearchHistory) => {
        const newHistory = [response.data, ...prevSearchHistory];
        return newHistory.slice(0, 7);
      });
      console.log(searchHistory);
    } catch (error) {
      console.error("Erro ao buscar usuário do GitHub:", error);
    }
  }

  return (
    <Body>
      <Header>
        <h1>
          <AiOutlineGithub />
          <span>HUB</span>usca
        </h1>
      </Header>
      <Nav>
        <h1>Buscar usuário do GitHub:</h1>
        <Form onSubmit={search}>
          <input
            placeholder="exemplo: breno-aredes..."
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button>
            <AiOutlineRight />
          </button>
        </Form>
      </Nav>
      <SectionContainer>
        {userData ? (
          <Section>
            <UserContainer>
              <img src={userData.avatar_url}></img>
              <InfoContainer>
                <h1>{userData.name}</h1>
                <h2>{userData.login}</h2>
                {userData.location && <h3>Localização: {userData.location}</h3>}
              </InfoContainer>
            </UserContainer>
          </Section>
        ) : (
          <Section></Section>
        )}
        {searchHistory.length >= 2 ? (
          <Aside>
            <H1>Histórico de buscas:</H1>
            {searchHistory.slice(1).map((historic, index) => (
              <HistoricContainer key={index}>
                <img src={historic.avatar_url}></img>
                <InfoContainerHistoric>
                  <h1>{historic.name}</h1>
                  <h2>{historic.login}</h2>
                  <h3>{historic.location}</h3>
                </InfoContainerHistoric>
              </HistoricContainer>
            ))}
          </Aside>
        ) : (
          <Aside>
            <H1>Histórico de buscas:</H1>
            <h1>você ainda não possui um historico de buscas</h1>
          </Aside>
        )}
      </SectionContainer>
    </Body>
  );
}

const UserContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #e3e3e3;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #202124;
  box-sizing: border-box;
  img {
    width: 150px;
    height: 150px;
    border-radius: 100px;
  }
`;

const HistoricContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #e3e3e3;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #202124;
  margin-bottom: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;

const InfoContainer = styled.div`
  height: vh;
  margin-left: 30px;

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
    color: #202124;
    margin-top: 6px;
  }
  h3 {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    margin-top: 15px;
  }
`;

const InfoContainerHistoric = styled.div`
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
    color: #202124;
    margin-top: 4px;
  }
  h3 {
    font-size: 10px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    margin-top: 6px;
  }
`;

const Form = styled.form`
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 2px;
  display: flex;
  input {
    font-size: 18px;
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
    background-color: transparent;
    border: none;
    width: 40px;
    border-radius: 40px;
    cursor: pointer;
    background-color: #f0f0f0;
  }
`;

const SectionContainer = styled.div`
  display: flex;
`;

const Body = styled.div`
  padding: 0% 5% 0% 5%;
  margin-top: 40px;
`;

const Header = styled.header`
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

const Nav = styled.nav`
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
`;

const Section = styled.section`
  box-sizing: border-box;
  width: 63%;
  margin-right: 20px;
  margin-left: 20px;
`;

const Aside = styled.aside`
  background-color: #e3e3e3;
  width: 40%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #202124;
  min-height: 150px;
`;

const H1 = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: #202124;
  font-weight: bold;
`;
