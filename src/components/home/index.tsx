import React, { useState } from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Body>
      <Header>
        <h1>
          <span>HUB</span>usca
        </h1>
      </Header>
      <Nav>
        <h1>Buscar usuário do GitHub:</h1>
        <input placeholder="exemplo: João Silva..."></input>
      </Nav>
      <SectionContainer>
        <Section></Section>
        <Aside></Aside>
      </SectionContainer>
    </Body>
  );
}

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
  input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: border-color 0.3s ease;
    &:focus {
      border-color: #202124;
    }
  }
  h1 {
    color: #202124;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const Section = styled.section`
  background-color: red;
  width: 100%;
  height: 100px;
  margin-right: 20px;
  margin-left: 20px;
`;

const Aside = styled.aside`
  background-color: red;
  width: 60%;
  height: 100px;
`;
