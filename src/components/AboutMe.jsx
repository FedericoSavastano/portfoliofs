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

    @media only screen and (max-width: 768px) {
        scroll-snap-align: start;
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
                        <i className='fa-solid fa-download'></i>{' '}
                        {texts.downloadCVButtonLabel}
                    </Button>
                </Link>
            </Buttons>
        </Section>
    );
}

export default AboutMe;
