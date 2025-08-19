import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    bottom: 0;
    padding: 1px 0;
    background-color: #333;
    margin-top: auto;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                &copy; {new Date().getFullYear()} Federico Savastano. Web Dev.
            </div>
        </StyledFooter>
    );
};

export default Footer;
