import React, { useState, Suspense } from 'react';
import { styled } from 'styled-components';

import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import CanvasLoader from './Loader';

import Robotgbc from './Robotgbc';
import texts from '../data/texts';
import styles from '../styles/styles';

const Section = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    background-image: linear-gradient(
            to bottom,
            // rgba(245, 246, 252, 0.52),
            // rgba(117, 19, 93, 0.73)
            rgba(7, 36, 37, 0.8),
            rgba(88, 25, 95, 0.8)
        ),
        url('https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
    background-size: cover;

    box-shadow: inset 0 0 1rem rgb(14 12 58);

    @media only screen and (max-width: 768px) {
        height: 200vh;
        //scroll-snap-align: start;
    }

    &:before {
        opacity: 0.9;
    }
`;

const Container = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    @media only screen and (max-width: 1024px) {
        flex: 1;
    }

    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
        width: 90%;
        text-align: center;
    }
`;

const Right = styled.div`
    flex: 3;
    position: relative;

    @media only screen and (max-width: 1024px) {
        flex: 2;
    }

    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
        width: 50%;
        height: fit-content;
        max-width: 50vw;
    }
`;

const Title = styled.div`
    font-size: 3rem;
    font-weight: 500;

    font-family: ${styles.fontAlt};

    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid ${styles.color.bubblegum}; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */

    margin: initial;
    letter-spacing: 0.15em; /* Adjust as needed */

    animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: ${styles.color.bubblegum};
        }
    }

    @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
        white-space: normal;
    }

    @media only screen and (max-width: 1024px) {
        font-size: 2.5rem;
        white-space: normal;
    }
`;

const Subtitle = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
    margin: initial;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid ${styles.color.bubblegum}; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    text-align: left;
    max-width: max-content;
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typingSubtitle 3s steps(80, end) infinite,
        blink-caretSubtitle 0.75s step-end infinite;

    /* The typing effect */
    @keyframes typingSubtitle {
        0% {
            width: 0;
        }
        50% {
            width: 100%;
        }
        90% {
            width: 100%;
        }
        100% {
            width: 0%;
        }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caretSubtitle {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: ${styles.color.bubblegum};
        }
    }

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
        max-width: max-content;
    }
`;

const Desc = styled.p`
    font-weight: 500;
`;

const Img = styled.img`
    height: 22rem;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    filter: blur(54px);
    opacity: 50%;
    animation: animate 2s infinite ease alternate;

    @media only screen and (max-width: 768px) {
        height: 14rem;
    }

    @keyframes animate {
        to {
            transform: translateY(20px);
        }
    }
`;

function Hero() {
    const [scale, setScale] = useState(window.innerWidth > 900 ? 0.3 : 0.15);

    const [position, setPosition] = useState(
        window.innerWidth > 900 ? [0, -0.5, 0] : [0, -0.3, 0]
    );

    return (
        <Section>
            <Container>
                <Left>
                    <Title>{texts.heroName}</Title>
                    <Subtitle>{texts.heroTitle}</Subtitle>
                    <Desc>
                        {'< '}
                        {texts.heroTech}
                        {' >'}
                    </Desc>
                </Left>

                <Right>
                    <Canvas
                        camera={{ fov: 35, zoom: 1.3, near: 1, far: 1000 }}
                        style={{ zIndex: '1' }}>
                        <Suspense fallback={<CanvasLoader />}>
                            <OrbitControls enableZoom={false} autoRotate />
                            <ambientLight intensity={1} />
                            <directionalLight intensity={1} />
                            <Robotgbc scale={scale} position={position} />
                        </Suspense>
                        <Preload all />
                    </Canvas>

                    <Img src='./circle.png'></Img>
                </Right>
            </Container>
        </Section>
    );
}

export default Hero;
