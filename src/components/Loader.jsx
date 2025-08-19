import React from 'react';
import { Html, useProgress } from '@react-three/drei';
import { styled } from 'styled-components';

const Spinner = styled.span`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: rotate 0.3s linear infinite;

    &::before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: 5px solid #fff;
        animation: prixClipFix 2s linear infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes prixClipFix {
        0% {
            clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
        }
        25% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
        }
        50% {
            clip-path: polygon(
                50% 50%,
                0 0,
                100% 0,
                100% 100%,
                100% 100%,
                100% 100%
            );
        }
        75% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
        }
        100% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
        }
    }
`;

function CanvasLoader() {
    const { progress } = useProgress();
    return (
        <Html>
            <Spinner></Spinner>
            <p>{progress.toFixed(2)}%</p>
        </Html>
    );
}

export default CanvasLoader;
