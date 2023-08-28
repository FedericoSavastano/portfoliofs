import { useLoaderData } from 'react-router-dom';
import { works as worksFunction } from '../data/works';
import { styled } from 'styled-components';

import Hero from '../components/Hero';
import Works from '../components/Works';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';

export function loader() {
    const works = worksFunction();
    return works;
}

const StyledContainer = styled.div`
    scroll-behaviour: smooth;
`;

function Home() {
    const works = useLoaderData();

    return (
        <StyledContainer>
            <Hero></Hero>
            <Works works={works}></Works>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </StyledContainer>
    );
}

export default Home;
