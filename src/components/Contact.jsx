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
        scroll-snap-align: start;
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
                                <i className='fa-brands fa-linkedin'></i>{' '}
                                {texts.LinkedIn}
                            </Button2>
                        </Link>
                    </Buttons>
                </Left>
                <Right>
                    <Canvas>
                        <Suspense fallback={<CanvasLoader />}>
                            <OrbitControls enableZoom={false} autoRotate />
                            <ambientLight intensity={1}></ambientLight>
                            <directionalLight
                                position={[3, 5, 1]}></directionalLight>
                            <Sphere args={[1, 100, 200]} scale={scale}>
                                <MeshDistortMaterial
                                    color='rgba(0,255,238,1);'
                                    attach='material'
                                    distort={0.5}
                                    speed={2}></MeshDistortMaterial>
                            </Sphere>
                        </Suspense>
                        <Preload all />
                    </Canvas>
                    <Img src='./3drobot.png'></Img>
                </Right>
            </Container>
        </Section>
    );
}

export default Contact;
