import React from 'react';
import styled from 'styled-components';

interface ButtonInterface {
    color: string,
    backgroundcolor: string,
    text: string
  }

const StyleButton = styled.button`
padding: 10px;
border: 0;
border-radius: 5px;
font-size: 20px;
cursor: pointer;

&:hover {
    opacity: 0.8;
}
`

const ButtonPuss = ({color, backgroundcolor, text}: ButtonInterface): JSX.Element  => {
    return <>
    <StyleButton style={{ color: color, backgroundColor: backgroundcolor }}>{text}</StyleButton>
    </>
}

export default ButtonPuss