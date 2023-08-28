import React from 'react';
import { works as worksFunction } from '../data/works';
import { useLoaderData, Link } from 'react-router-dom';
import styled from 'styled-components';
import texts from '../data/texts';
import styles from '../styles/styles';

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
        scroll-snap-align: start;

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

const Desc = styled.p`
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

function Work() {
    const [works, workName] = useLoaderData();
    const work = works.find((w) => w.title === workName);

    return work ? (
        <Section>
            <Container>
                <Left>
                    <Title>{work.title}</Title>
                    <Img src={work.screenshot}></Img>
                </Left>
                <Right>
                    <Desc> {work.description} </Desc>
                    <Tech>{work.tech.join(' - ')}</Tech>

                    <Buttons>
                        {work.flowchart && (
                            <Link
                                target='_blank'
                                rel='noopener noreferrer'
                                to={work.flowchart}>
                                <Button2>
                                    <i className='fa-solid fa-signs-post'></i>{' '}
                                    {texts.workButtonFlowChart}
                                </Button2>
                            </Link>
                        )}
                        <Link
                            target='_blank'
                            rel='noopener noreferrer'
                            to={work.liveDemo}>
                            <Button2>
                                <i className='fa-solid fa-laptop-code'></i>{' '}
                                {texts.workButtonLiveDemo}
                            </Button2>
                        </Link>

                        <Link
                            target='_blank'
                            rel='noopener noreferrer'
                            to={work.gitHub}>
                            <Button2>
                                <i className='fa-brands fa-square-github'></i>{' '}
                                {texts.workButtonGitHub}
                            </Button2>
                        </Link>
                    </Buttons>
                </Right>
            </Container>

            <BackButtonWrapper>
                <Link to={'/'}>
                    {' '}
                    <Button>
                        <i className='fa-solid fa-square-caret-left'></i>{' '}
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
                    <Link to={'/'}>
                        {' '}
                        <Button>
                            <i className='fa-solid fa-square-caret-left'></i>{' '}
                            {texts.workButtonBack}
                        </Button>
                    </Link>
                </BackButtonWrapper>
            </ErrorWrapper>
        </Section>
    );
}

export default Work;
