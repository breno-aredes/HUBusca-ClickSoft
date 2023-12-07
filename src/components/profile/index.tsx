import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";
import Link from "next/link";

interface UserData {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
  followers: number;
  public_repos: number;
  id: number;
}

interface UserRepos {
  name: string;
  language: string;
  description: string | null;
  created_at: string;
  pushed_at: string;
  html_url: string;
}

export default function Profile() {
  const router = useRouter();
  const { username } = router.query;
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userRepos, setUserRepos] = useState<UserRepos[]>([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get<UserData>(
          `https://api.github.com/users/${username}`
        );

        const responseRepos = await axios.get<UserRepos[]>(
          `https://api.github.com/users/${username}/repos`
        );

        const reorderRepos = responseRepos.data.sort((a, b) => {
          const dateA = new Date(a.pushed_at).getTime();
          const dateB = new Date(b.pushed_at).getTime();
          return dateB - dateA;
        });

        setUserData(response.data);
        setUserRepos(reorderRepos);
      } catch (error) {
        console.error("Erro ao buscar usuário do GitHub:", error);
      }
    }

    getUser();
  }, [username]);

  function formatDate(isoDate) {
    const date = new Date(isoDate);

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  return (
    <>
      {userData && (
        <Body>
          <Header>
            <UserContainer>
              <img src={userData.avatar_url} alt="User Avatar" />
              <InfoContainer>
                <h1>{userData.name}</h1>
                <h2>{userData.login}</h2>
                <h3>id: {userData.id}</h3>
                {userData.location && <h3>Localização: {userData.location}</h3>}

                <DataContainer>
                  <h3>Seguidores: {userData.followers}</h3>
                  <p>Repositórios públicos: {userData.public_repos}</p>
                </DataContainer>
              </InfoContainer>
            </UserContainer>
          </Header>
          <Section>
            <h1>Repositórios:</h1>
            {userRepos.map((repo, i) => (
              <RepositoriesContainer key={i}>
                <Link href={repo.html_url} style={{ textDecoration: "none" }}>
                  <h2>{repo.name}</h2>
                </Link>
                <p>Descrição: {repo.description}</p>
                <RepoData>
                  <h3>Linguagem: {repo.language}</h3>
                  <h3>Criado:{formatDate(repo.created_at)}</h3>
                  <h3>UpDate:{formatDate(repo.pushed_at)}</h3>
                </RepoData>
              </RepositoriesContainer>
            ))}
          </Section>
        </Body>
      )}
    </>
  );
}

const RepositoriesContainer = styled.div`
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

const RepoData = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  justify-content: space-between;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const Section = styled.section`
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

const DataContainer = styled.div`
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

const Body = styled.div`
  padding: 0% 5% 0% 5%;
  margin: 40px 20px 0px 20px;
  @media (max-width: 700px) {
    margin: 20px 0px;
  }
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
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border: 2px solid #d4d5d7;
  }
  @media (max-width: 700px) {
    padding: 10px;
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
