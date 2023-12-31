import styled from 'styled-components';
import { Link } from 'react-router-dom';
import texts from '../data/texts';
import styles from '../styles/styles';

const Section = styled.div`
    height: 100%;
    padding: 0% 1.5%;
    margin: 5%;
    display: flex;
    flex-direction: column;
    scroll-behaviour: smooth;

    @media only screen and (max-width: 768px) {
        margin: 20% 5%;
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
        padding-top: 7rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Title = styled.h2`
    text-shadow: 1.2px 1.2px 2px black;
`;

const TitleMain = styled.h1`
    text-shadow: 1.2px 1.2px 2px black;
`;

const Job = styled.span`
    font-weight: bold;
`;

const Date = styled.span`
    font-style: italic;
`;

const Desc = styled.span`
    margin-top: 2%;
`;

const Item = styled.div`
    text-align: left;
    padding-left: 3%;
    margin: 2%;
    line-height: 1.5;
`;

const Button = styled.button`
    background-color: ${styles.color.bubblegum};
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    padding: 0.8rem;
    box-shadow: 10px 5px 5px black;
    font-family: 'Quicksand', sans-serif;
    text-shadow: 0.8px 0.8px 2px black;
`;

const Buttons = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        margin: 4rem;
    }
`;

const Icon = styled.i`
    vertical-align: middle;
    padding-right: 10px;
`;

const IconSvg = styled.svg`
    filter: invert(58%) saturate(276%) hue-rotate(238deg) brightness(180%)
        contrast(119%) drop-shadow(0.8px 0.8px 1px black);
`;

function AboutMe() {
    return (
        <Section>
            <Container>
                <Left>
                    <TitleMain>{texts.workExperienceTitle}</TitleMain>
                    {texts.workExperienceList.map((work) => (
                        <Item key={work.job}>
                            <Job>{work.job}</Job> |<Date> {work.date}</Date>
                            <br></br>
                            <Desc>{work.desc}</Desc>
                        </Item>
                    ))}
                </Left>
                <Right>
                    <Title>{texts.aboutMeTitle}</Title>
                    <Item>
                        <Desc>{texts.aboutMeDesc}</Desc>
                    </Item>
                    <Title>{texts.studiesTitle}</Title>

                    {texts.studiesList.map((study) => (
                        <Item key={study}>{study}</Item>
                    ))}
                </Right>
            </Container>
            <Buttons>
                <Link
                    to={texts.CVLink}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Button>
                        <Icon>
                            <IconSvg
                                xmlns='http://www.w3.org/2000/svg'
                                height='1em'
                                viewBox='0 0 512 512'>
                                {' '}
                                <path d='M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z' />
                            </IconSvg>
                        </Icon>
                        {texts.downloadCVButtonLabel}
                    </Button>
                </Link>
            </Buttons>
        </Section>
    );
}

export default AboutMe;
