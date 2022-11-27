import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: red;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 5px; 
    font-size: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

const RedButton = ({ children }: { children: React.ReactNode }) => (
    <StyledButton>{children}</StyledButton>
)

export default RedButton;