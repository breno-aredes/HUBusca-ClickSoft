import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";

interface UserData {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  followers: number;
  public_repos: number;
  id: number;
}

export default function Profile() {
  const router = useRouter();
  const { username } = router.query;
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get<UserData>(
          `https://api.github.com/users/${username}`
        );
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuário do GitHub:", error);
      }
    }

    getUser();
  }, [username]);

  return (
    <Body>
      <Header>
        {userData && (
          <UserContainer>
            <img src={userData.avatar_url} alt="User Avatar" />
            <InfoContainer>
              <h1>{userData.name}</h1>
              <h2>{userData.login}</h2>
              <h3>id: {userData.id}</h3>
              <h3>Localização: {userData.location}</h3>

              <DataContainer>
                <h3>Seguidores: {userData.followers}</h3>
                <p>Repositórios públicos: {userData.public_repos}</p>
              </DataContainer>
            </InfoContainer>
          </UserContainer>
        )}
      </Header>
      <Section>
        <h1>Repositorios:</h1>
      </Section>
    </Body>
  );
}

const Section = styled.section`
  margin: 30px 0px 0px 30px;
  h1 {
    font-size: 30px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    font-weight: bold;
  }
`;

const DataContainer = styled.div`
  display: flex;
  p {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    margin-top: 10px;
    margin-left: 20px;
  }
`;

const Body = styled.div`
  padding: 0% 5% 0% 5%;
  margin: 40px 20px 0px 20px;
`;

const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
`;

const UserContainer = styled.div`
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
`;

const InfoContainer = styled.div`
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
    color: #202124;
    margin-top: 5px;
  }
  h3 {
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #202124;
    margin-top: 10px;
  }
`;
