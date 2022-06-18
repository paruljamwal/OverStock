import styled from "styled-components";

export const MainBox=styled.div`
width: 98%;
margin:1% 1% 0% 1%;
border:1px solid transparent;
display: flex;
gap: 30px;

`;

export const ProductContainer=styled.div` 
margin-top:0% ;

`;

export const Dabba=styled.div` 
margin-top:0% ;
height: 150px;
`;

export const Head=styled.div`
margin: 0% 0% 2% 1%;
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
background-color:orange;
width: 50px;
height: 50px;
margin:5px;
border: none;
border-radius: 45px;
`;

export const Blue=styled.button` 
background-color:whitesmoke;
width: 50px;
margin:5px;
height: 50px;
border: 1px solid gray;
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

export const Btn=styled.option` 
 height: 30px;
 width: 150px;
 margin:2px 4px 5px 55px;
 cursor: pointer;
 border: 1px solid transparent;
`;

export const Button=styled.button` 
 height: 50px;
 border-radius: 40px;
 width: 50px;
 margin:6px 0px 1px 55px;
 border: 1px solid transparent;
 cursor: pointer;
`;

export const Select=styled.select` 
width: 100px;
height: 40px;
color: gray;
border-radius: 4px;
border:1px solid lightgray;
margin: 1% 2% 1% 70%;
`;