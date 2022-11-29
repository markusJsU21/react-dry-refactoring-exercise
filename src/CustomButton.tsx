import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px;
    border: 0;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`
interface ButtonProps {
    color: string,
    background: string,
    children: React.ReactNode
}

// const BlueButton = ({ children }: { children: React.ReactNode }) => (
//     <StyledButton>{children}</StyledButton>
// )
const CustomButton = ({color, background, children}: ButtonProps): JSX.Element => (
    <StyledButton style={{color: color, backgroundColor: background}}>{children}</StyledButton>
)

export default CustomButton;