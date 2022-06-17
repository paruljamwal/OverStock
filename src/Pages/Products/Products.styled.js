import styled from "styled-components";

export const MainBox=styled.div`
width: 98%;
margin:1% 1% 0% 1%;
border:1px solid transparent;
display: flex;
gap: 30px;

`;

export const Head=styled.div`
margin: 10% 0% 2% 1%;
font-size:40px;


`;

export const Color=styled.button`
height: 30px;
width: 30px;
border: none;
border-radius: 25px;


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
border: 2px solid transparent;

`

export const ImageBox=styled.img` 
width: 100%;
height: 330px;
cursor: pointer;

`;

export const InnerGrid=styled.div` 
 border:1px solid lightgray;
 margin: 2%;
 height:"400px";
 border-radius: 5px;
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

export const Red=styled.button` 
background-color: red;
margin:5px;
width: 50px;
height: 50px;
border: none;
border-radius: 45px;
`;

export const Brown=styled.button` 
background-color: Brown;
width: 50px;
margin:5px;
height: 50px;
border: none;
border-radius: 45px;
`;

export const Pink=styled.button` 
 background-color:Pink;
width: 50px;
height: 50px;
margin:5px;
border: none;
border-radius: 45px;
`;

export const Green=styled.button` 
background-color:lightgreen;
width: 50px;
margin:5px;
height: 50px;
border: none;
border-radius: 45px;
`;

export const Yellow=styled.button` 
background-color:yellow;
width: 50px;
margin:5px;
height: 50px;
border: none;
border-radius: 45px;
`;

export const Sky=styled.button` 
background-color:skyblue;
width: 50px;
margin:5px;
height: 50px;
border: none;
border-radius: 45px;
`;

export const Black=styled.button` 
background-color:Black;
width: 50px;
height: 50px;
margin:5px;
border: none;
border-radius: 45px;
`;

export const Blue=styled.button` 
background-color:blue;
width: 50px;
margin:5px;
height: 50px;
border: none;
border-radius: 45px;
`;

export const White=styled.button` 
background-color:silver;
width: 50px;
height: 50px;
margin:5px;
border: none;
border-radius: 45px;
`;

export const Btn=styled.button` 
 height: 30px;
 width: 150px;
 margin:2px 4px 5px 55px;
 border: 1px solid transparent;
`;