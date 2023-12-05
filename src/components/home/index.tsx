import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { AiOutlineGithub, AiOutlineRight } from "react-icons/ai";

interface UserData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export default function Home() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);

  async function search(e) {
    e.preventDefault();

    try {
      const response = await axios.get<UserData>(
        `https://api.github.com/users/${username}`
      );

      setUserData(response.data);
      console.log(response.data);
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
              <img src={`${userData.avatar_url}`}></img>
              <InfoContainer>
                <h1>{userData.name}</h1>
                <h2>{userData.login}</h2>
                <h3>Localização: {userData.location}</h3>
              </InfoContainer>
            </UserContainer>
          </Section>
        ) : (
          <Section></Section>
        )}

        <Aside></Aside>
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
  img {
    width: 150px;
    height: 150px;
    border-radius: 100px;
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
    margin-top: 10px;
  }
  h3 {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    margin-top: 20px;
  }
`;

const Form = styled.form`
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  padding: 2px;
  display: flex;
  input {
    font-size: 14px;
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
    width: 30px;
    border-radius: 30px;
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
  h1 {
    color: #202124;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const Section = styled.section`
  width: 65%;
  margin-right: 20px;
  margin-left: 20px;
`;

const Aside = styled.aside`
  background-color: red;
  width: 40%;
  height: 100px;
`;
