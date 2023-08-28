import { Link } from 'react-router-dom';
import styled from 'styled-components';
import texts from '../data/texts';

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    background-color: transparent;
    color: white;
    padding: 0.5rem 1rem;

    a {
        color: white;
        text-decoration: none;
    }
`;

const Logo = styled.img`
    width: 1rem;
    height: auto;
    filter: invert(58%) sepia(149%) saturate(276%) hue-rotate(120deg)
        brightness(158%) contrast(119%);
`;

const Name = styled.div`
    display: flex;
    font-size: 1rem;
    align-items: center;
    gap: 1rem;

    @media only screen and (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

const Links = styled.div`
    a {
        color: white;
        text-decoration: none;
        margin-left: 20px;
        font-size: 1rem;
    }

    a:hover {
        text-decoration: underline;
    }

    @media only screen and (max-width: 768px) {
        a {
            font-size: 0.7rem;
        }
    }
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <Link to={'/'} rel='noopener noreferrer'>
                <Name>
                    <Logo src='/robot-solid.svg ' alt='Logo'></Logo>
                    {texts.navbarTitle}
                </Name>
            </Link>

            <Links>
                <Link
                    to={texts.LinkedInLink}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {texts.LinkedIn}
                </Link>
                <Link
                    to={texts.CVLink}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {texts.GetCV}
                </Link>
            </Links>
        </StyledNavbar>
    );
};

export default Navbar;
