import { styled } from 'styled-components';
import texts from '../data/texts';
import WorkCard from './WorkCard';

const WorksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1%;
    justify-content: center;
    scroll-behaviour: smooth;
`;

const Section = styled.div`
    height: 100%;
    display: flex;
    padding: 0% 1.5%;
    margin: 5%;
    flex-direction: column;
`;

const TitleMain = styled.h1`
    text-shadow: 1.2px 1.2px 2px black;
`;

const Works = ({ works }) => {
    return (
        <Section>
            <TitleMain>{texts.worksTitle}</TitleMain>
            <WorksContainer>
                {works.map((work) => (
                    <WorkCard key={work.id} work={work} />
                ))}
            </WorksContainer>
        </Section>
    );
};

export default Works;
