import React from "react";
import { works as worksFunction } from "../data/works";
import { useLoaderData, Link } from "react-router-dom";

import styled from "styled-components";
import texts from "../data/texts";
import styles from "../styles/styles";

export async function loader({ params }) {
  const works = await worksFunction();
  const workName = params.workName;
  return [works, workName];
}

const Section = styled.div`
  height: 100vh;
  padding: 0% 1.5%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    min-height: fit-content;
    align-items: center;
    justify-content: space-evenly;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media only screen and (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    width: 100%;
  }
`;

const Title = styled.h2`
  text-shadow: 1.2px 1.2px 2px black;
  align-self: flex-start;

  @media only screen and (max-width: 768px) {
    align-self: center;
  }
`;

const Img = styled.img`
  width: 80%;
  object-fit: cover;

  @media only screen and (max-width: 768px) {
    height: 40vh;
  }
`;

const Button = styled.button`
  background-color: ${styles.color.turquoise};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 0.8rem;
  box-shadow: 10px 5px 5px black;
  font-family: ${styles.fontMain};
  text-shadow: 0.8px 0.8px 2px black;
`;

const Button2 = styled.button`
  background-color: ${styles.color.bubblegum};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  padding: 0.8rem;
  box-shadow: 10px 5px 5px black;
  font-family: ${styles.fontMain};
  text-shadow: 0.8px 0.8px 2px black;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: start;
`;

const Desc = styled.div`
  margin-bottom: 2rem;
  text-shadow: 0.8px 0.8px 2px black;
`;

const Tech = styled.p`
  margin-bottom: 2rem;
  color: rgba(0, 255, 238, 1);
  font-style: italic;
  text-shadow: 0.8px 0.8px 2px black;
`;

const BackButtonWrapper = styled.div`
  margin: 1rem;
`;

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Icon = styled.i`
  vertical-align: middle;
  padding-right: 10px;
`;

const IconSvg = styled.svg`
  filter: invert(58%) saturate(276%) hue-rotate(238deg) brightness(180%)
    contrast(119%) drop-shadow(0.8px 0.8px 1px black);
`;

function Work() {
  const [works, workName] = useLoaderData();
  const work = works.find((w) => w.urlName === workName);

  return work ? (
    <Section>
      <Container>
        <Left>
          <Title>{work.title}</Title>
          <Img src={work.screenshot}></Img>
        </Left>
        <Right>
          <Desc> {work.fullDescription} </Desc>
          <Tech>{work.tech.join(" - ")}</Tech>

          <Buttons>
            {work.flowchart && (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={work.flowchart}
              >
                <Button2>
                  <Icon>
                    <IconSvg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M224 32H64C46.3 32 32 46.3 32 64v64c0 17.7 14.3 32 32 32H441.4c4.2 0 8.3-1.7 11.3-4.7l48-48c6.2-6.2 6.2-16.4 0-22.6l-48-48c-3-3-7.1-4.7-11.3-4.7H288c0-17.7-14.3-32-32-32s-32 14.3-32 32zM480 256c0-17.7-14.3-32-32-32H288V192H224v32H70.6c-4.2 0-8.3 1.7-11.3 4.7l-48 48c-6.2 6.2-6.2 16.4 0 22.6l48 48c3 3 7.1 4.7 11.3 4.7H448c17.7 0 32-14.3 32-32V256zM288 480V384H224v96c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
                    </IconSvg>
                  </Icon>
                  {texts.workButtonFlowChart}
                </Button2>
              </Link>
            )}

            <Link target="_blank" rel="noopener noreferrer" to={work.liveDemo}>
              <Button2>
                <Icon>
                  <IconSvg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 640 512"
                  >
                    <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
                  </IconSvg>
                </Icon>
                {texts.workButtonLiveDemo}
              </Button2>
            </Link>

            <Link target="_blank" rel="noopener noreferrer" to={work.gitHub}>
              <Button2>
                <Icon>
                  <IconSvg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </IconSvg>
                </Icon>
                {texts.workButtonGitHub}
              </Button2>
            </Link>

            {work.docs && (
              <Link target="_blank" rel="noopener noreferrer" to={work.docs}>
                <Button2>
                  <Icon>
                    <IconSvg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
                    </IconSvg>
                  </Icon>
                  {texts.docsButton}
                </Button2>
              </Link>
            )}
          </Buttons>
        </Right>
      </Container>

      <BackButtonWrapper>
        <Link to={"/"}>
          {" "}
          <Button>
            <Icon>
              <IconSvg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 256 512"
              >
                {" "}
                <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
              </IconSvg>
            </Icon>
            {texts.workButtonBack}
          </Button>
        </Link>
      </BackButtonWrapper>
    </Section>
  ) : (
    <Section>
      <ErrorWrapper>
        <Title>{texts.workNonExistant}</Title>
        <BackButtonWrapper>
          <Link to={"/"}>
            {" "}
            <Button>
              <Icon>
                <IconSvg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 256 512"
                >
                  {" "}
                  <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
                </IconSvg>
              </Icon>
              {texts.workButtonBack}
            </Button>
          </Link>
        </BackButtonWrapper>
      </ErrorWrapper>
    </Section>
  );
}

export default Work;
