import styled from "styled-components";

export const MainBox=styled.div`
width: 95%;
margin:1% 1% 0% 1%;
border:1px solid red;
display: flex;
gap: 50px;

`;

export const Head=styled.div`
margin: 10% 0% 2% 1%;
font-size:xx-large;


`;


export const LeftBox=styled.div`
border: 2px solid greenyellow;
width: 25%;
overflow: scroll;
height: 450px;
scroll-behavior: smooth;
overflow-x: hidden;


`;

export const RightBox=styled.div`
border:2px solid pink;
width: 70%;
`;


export const MainGrid6=styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
height: 450px;

`

export const ImageBox=styled.img` 
width: 100%;
height: 330px;
`;

export const InnerGrid=styled.div` 
 border:1px solid gray;
 height:"400px";
`;

export const Price=styled.p` 
 margin: 10px;
 font-size: larger;
`;

export const Stars=styled.p` 
 margin: 10px;

`;

export const Name=styled.p` 
margin: 10px;

`;