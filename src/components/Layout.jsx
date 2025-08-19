import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Container = styled.div`
    scroll-behaviour: smooth;

    color: white;

    background: linear-gradient(to bottom right, rgb(14 12 58), #4a0f4a);

    &::-webkit-scrollbar {
        color: blue;
        width: 10px;
    }

    scrollbar-width: thin;
    scrollbar-color: rgba(0, 255, 238, 1) transparent;

    /* width */
    &::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 255, 238, 1);
        border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: rgb(5 182 170);
    }
`;

function Layout() {
    return (
        <Container>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </Container>
    );
}

export default Layout;
