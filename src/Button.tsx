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

const Button = (props:ButtonInterface): JSX.Element => {
    return  <button style={color:props.color}></button>
}

export default Button