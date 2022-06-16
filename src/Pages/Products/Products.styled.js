import styled from "styled-components";

export const MainBox=styled.div`
width: 95%;
margin:1% 1% 0% 1%;
border:1px solid transparent;
display: flex;
gap: 50px;

`;

export const Head=styled.div`
margin: 10% 0% 2% 1%;
font-size:xx-large;


`;


export const LeftBox=styled.div`
border: 2px solid transparent;
width: 25%;
overflow: scroll;
height: 450px;
scroll-behavior: smooth;
overflow-x: hidden;


`;

export const RightBox=styled.div`
border:2px solid transparent;
width: 70%;
`;


export const MainGrid6=styled.div`
display:grid;
grid-template-columns: repeat(3,1fr);
/* height: 450px; */
border: 2px solid transparent;

`

export const ImageBox=styled.img` 
width: 90%;
height: 330px;
margin:5%;
`;

export const InnerGrid=styled.div` 
 border:1px solid lightgray;
 margin: 2%;
 height:"400px";
`;

export const Price=styled.p` 
 margin: 10px;
 font-size: larger;
`;


export const Name=styled.p` 
margin: 10px;

`;

export const StarList=styled.img` 
width: 20px;
margin:4px 5px 3px 0px;
cursor: pointer;
&:hover{
   filter: grayscale(0);
  transform: scale(1.3)
 }
`;


export const Stars=styled.p` 
margin:2% 0% 2% 1% ;
display: flex;
`;
