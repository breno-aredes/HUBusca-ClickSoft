import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import {
  RepositoriesContainer,
  RepoData,
  Section,
  DataContainer,
  Body,
  Header,
  UserContainer,
  InfoContainer,
} from "./style";

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
