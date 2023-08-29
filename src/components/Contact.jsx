import { useState, useRef, Suspense } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import {
    OrbitControls,
    MeshDistortMaterial,
    Sphere,
    Preload,
} from '@react-three/drei';
import { Link } from 'react-router-dom';
import texts from '../data/texts';
import styles from '../styles/styles';
import CanvasLoader from './Loader';

const Section = styled.div`
    height: 100%;
    margin: 5%;
    padding: 0% 1.5%;
    overflow: hidden;

    @media only screen and (max-width: 768px) {
        height: 200vh;
        // scroll-snap-align: start;
    }
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px) {
        flex: 1;
        justify-content: center;
    }

    @media only screen and (max-width: 1024px) {
        flex: 1;
        justify-content: center;
    }
`;

const Title = styled.h1`
    font-weight: bold;
`;

const Input = styled.input`
    padding: 0.8rem;
    background-color: lightgray;
    border: none;
    border-radius: 5px;
`;

const TextArea = styled.textarea`
    padding: 0.8rem;
    background-color: lightgray;
    border: none;
    border-radius: 5px;
`;

const Button = styled.button`
    background-color: ${styles.color.turquoise};
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    padding: 0.5rem;
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
    margin: 2rem 4rem 4rem 4rem;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        margin: 4rem;
    }

    @media only screen and (max-width: 1024px) {
        margin: 4rem;
    }
`;

const Form = styled.form`
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media only screen and (max-width: 768px) {
        width: 95%;
    }
`;

const Right = styled.div`
    flex: 1;
    position: relative;
    max-width: 50vw;

    @media only screen and (max-width: 1024px) {
        flex: 1;
        align-items: center;
    }

    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
        width: 80%;
        height: fit-content;
        max-width: 80vw;
    }
`;

const CanvasWrapper = styled.div`
    display: initial;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const Img = styled.img`
    height: 40vh;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    filter: hue-rotate(135deg);
    animation: animate 2s infinite ease alternate;

    @media only screen and (max-width: 768px) {
        height: 40vh;
    }

    @media only screen and (max-width: 1024px) {
        height: 40vh;
    }

    @keyframes animate {
        to {
            transform: translateY(20px);
        }
    }
`;

const ImgCircle = styled.img`
    display: none;
    height: 40vh;
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
        width: 250px;
        display: initial;
    }

    @media only screen and (max-width: 1024px) {
        height: 40vh;
    }

    @keyframes animate {
        to {
            transform: translateY(20px);
        }
    }
`;

const Img2 = styled.img`
    height: 200px;
    object-fit: contain;
`;

const MessageSent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Alert = styled.p`
    color: rgb(245 81 150);
`;

const TitleWrapper = styled.div`
    text-align: left;
    width: 100%;
`;

const Icon = styled.i`
    vertical-align: middle;
    padding-right: 10px;
`;

const IconSvg = styled.svg`
    filter: invert(58%) saturate(276%) hue-rotate(238deg) brightness(180%)
        contrast(119%) drop-shadow(0.8px 0.8px 1px black);
`;

function Contact() {
    const [sent, setSent] = useState(null);
    const [sending, setSending] = useState(null);
    const [incompleteForm, setIncompleteForm] = useState(null);
    const [nameForm, setNameForm] = useState('');
    const [mailForm, setMailForm] = useState('');
    const [mailMessage, setMailMessage] = useState('');

    const [scale, setScale] = useState(window.innerWidth > 900 ? 1.9 : 1);

    const ref = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameForm && mailForm && mailMessage) {
            setSending(true);
            setIncompleteForm(false);
            emailjs
                .sendForm(
                    'service_oe5vdy4',
                    'template_6mbdcgk',
                    ref.current,
                    'obkN9WKoWxdlaEYxo'
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setSent(true);
                        setTimeout(() => {
                            setSent(false);
                        }, 3000);
                    },
                    (error) => {
                        console.log(error.text);
                        setSent(false);
                    }
                )
                .finally(() => {
                    setMailMessage('');
                    setNameForm('');
                    setMailForm('');
                    setSending(false);
                });
        } else {
            setIncompleteForm(true);
        }
    };

    return (
        <Section>
            <Container>
                <Left>
                    {sent || (
                        <TitleWrapper>
                            <Title>{texts.contactTitle}</Title>
                        </TitleWrapper>
                    )}
                    <Form ref={ref} onSubmit={handleSubmit}>
                        {sent ? (
                            <MessageSent>
                                <h2>{texts.contactMessageSentTitle}</h2>
                                <h2>{texts.contactMessageSentSubTitle}</h2>
                                <Img2 src='./robot-wave.gif'></Img2>
                            </MessageSent>
                        ) : (
                            <>
                                {incompleteForm && (
                                    <Alert>{texts.contactAlert}</Alert>
                                )}
                                <Input
                                    placeholder={texts.contactFormName}
                                    name='from_name'
                                    type='text'
                                    value={nameForm}
                                    onChange={(e) =>
                                        setNameForm(e.target.value)
                                    }></Input>
                                <Input
                                    placeholder={texts.contactFormEmail}
                                    name='email'
                                    type='email'
                                    value={mailForm}
                                    onChange={(e) =>
                                        setMailForm(e.target.value)
                                    }></Input>
                                <TextArea
                                    placeholder={texts.contactFormMessage}
                                    name='message'
                                    type='text'
                                    rows={10}
                                    value={mailMessage}
                                    onChange={(e) =>
                                        setMailMessage(e.target.value)
                                    }></TextArea>
                                <Button type='submit' value='Send'>
                                    {sending
                                        ? texts.contactFormButtonSending
                                        : texts.contactFormButtonSend}
                                </Button>
                            </>
                        )}
                    </Form>
                    <br></br>
                    <Buttons>
                        <Link
                            target='_blank'
                            rel='noopener noreferrer'
                            to={texts.LinkedInLink}>
                            <Button2>
                                <Icon>
                                    <IconSvg
                                        xmlns='http://www.w3.org/2000/svg'
                                        height='1em'
                                        viewBox='0 0 448 512'>
                                        <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                                    </IconSvg>
                                </Icon>
                                {texts.LinkedIn}
                            </Button2>
                        </Link>
                    </Buttons>
                </Left>
                <Right>
                    <CanvasWrapper>
                        <Canvas>
                            <Suspense fallback={<CanvasLoader />}>
                                <OrbitControls enableZoom={false} autoRotate />
                                <ambientLight intensity={1}></ambientLight>
                                <directionalLight
                                    intensity={1}></directionalLight>
                                <Sphere args={[1, 100, 200]} scale={scale}>
                                    <MeshDistortMaterial
                                        color='rgba(0,255,238,1)'
                                        attach='material'
                                        distort={0.5}
                                        speed={2}></MeshDistortMaterial>
                                </Sphere>
                            </Suspense>
                            <Preload all />
                        </Canvas>
                    </CanvasWrapper>
                    <ImgCircle src='./circle.png'></ImgCircle>
                    <Img src='./3drobot.png'></Img>
                </Right>
            </Container>
        </Section>
    );
}

export default Contact;
