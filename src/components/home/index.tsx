import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineGithub, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import {
  UserContainer,
  HistoricContainer,
  InfoContainer,
  InfoContainerHistoric,
  Form,
  SectionContainer,
  Body,
  Header,
  Nav,
  Section,
  Aside,
  H1,
  ErrorMessage,
} from "./style";

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
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    const storedSearchHistory =
      JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedSearchHistory);
  }, []);

  async function search(e) {
    e.preventDefault();

    if (searchHistory.length >= 1 && username == searchHistory[0].login) {
      return;
    }

    try {
      const response = await axios.get<UserData>(
        `https://api.github.com/users/${username}`
      );

      setCount(1);

      setUserData(response.data);

      const newHistory = [response.data, ...searchHistory].slice(0, 7);

      console.log(newHistory);
      setError(false);
      setSearchHistory(newHistory);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    } catch (error) {
      setError(true);
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
        {error ? <ErrorMessage>*Usuário não encontrado</ErrorMessage> : <></>}
      </Nav>

      <SectionContainer>
        {userData ? (
          <Section>
            <Link
              href={`/${userData.login}`}
              style={{ textDecoration: "none" }}
            >
              <UserContainer>
                <img src={userData.avatar_url}></img>
                <InfoContainer>
                  <h1>{userData.name}</h1>
                  <h2>{userData.login}</h2>
                  {userData.location && (
                    <h3>Localização: {userData.location}</h3>
                  )}
                </InfoContainer>
              </UserContainer>
            </Link>
          </Section>
        ) : (
          <Section></Section>
        )}
        {searchHistory.length >= 1 ? (
          <Aside>
            <H1>Histórico de buscas:</H1>
            {searchHistory.slice(count).map((historic, index) => (
              <Link
                href={`${historic.login}`}
                passHref
                style={{ textDecoration: "none" }}
                key={index}
              >
                <HistoricContainer>
                  <img src={historic.avatar_url}></img>
                  <InfoContainerHistoric>
                    <h1>{historic.name}</h1>
                    <h2>{historic.login}</h2>
                    <h3>{historic.location}</h3>
                  </InfoContainerHistoric>
                </HistoricContainer>
              </Link>
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
