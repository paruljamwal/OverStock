import styled from "styled-components";


export const Box=styled.div` 
height: 600px;
border: 2px solid lightgray;
margin: auto;
width: 70%;
overflow: hidden;
`;

export const Image=styled.img` 
margin-top: 100px;
width: 100%;
height: 500px;
position: static;
`;


export const Box1=styled.div` 
position: absolute;
top: 230px;
left: 300px;
color: red;
& :nth-child(n+1){
padding: 10px;
position: static;
}

`;


export const Button=styled.button` 
width: 80%;
height: 40px;
cursor: pointer;
border-radius: 5px;
border: 1px solid gray;

& :hover{
    background-color: black;
    color: whitesmoke;
}

`;