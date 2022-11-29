import React from 'react';
import styled from 'styled-components';

interface ButtonInterface {
    color: string,
    backgroundcolor: string,
  }

const styleButton = styled.button`
padding: 10px;
border: 0;
border-radius: 5px;
font-size: 20px;
cursor: pointer;

&:hover {
    opacity: 0.8;
}
`

const Button = (props:ButtonInterface):  => {
    return <>
    <styleButton></styleButton>
    </>
}

export default Button