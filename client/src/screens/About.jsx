import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContentWrapper = styled.div``;

const About = () => {
  return (
    <div>
      <Header showAuth={false} />
      <Container>
        <ContentWrapper>
          <h1>GreenBay</h1>
          <h3>
            Is a place where you can find anything you think of at anytime you
            want to.
          </h3>
        </ContentWrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
