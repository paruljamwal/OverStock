

import styled from "styled-components";

export const Box=styled.div` 
margin-left: 4%;
`;

export const MainCart=styled.div` 
padding-top:13% ;
width: 98%;
border: 1px solid transparent;
height: 500px;
display: flex;
`;

export const Slider=styled.div` 
width: 40%;
border: 1px solid lightgray;
height: 450px;
margin: 10px 10px 0px 30px;
`;

export const SliderImg=styled.img` 
width: 100%;
height: 100%;
cursor:zoom-out;

&:hover{
   filter: grayscale(0);
  transform: scale(1.1)
}
`;

export const Details=styled.div` 
border: 1px solid transparent;
width: 40%;
height: 400px;
margin: 10px 10px 0px 30px;
padding: 15px;
`

export const Red1=styled.p` 
margin-top:15px ;
color: rgb(172,59,72);
font-size: larger;

`;


export const Red2=styled.p` 
color:rgb(172,59,72);
font-size: larger;
`;

export const Name=styled.p` 
   font-size: larger;
   color: gray;

`;



export const Stars=styled.p` 
margin:2% 0% 2% 1% ;
display: flex;
`;



export const Blue=styled.p` 
color:blue;
`;


export const SelectBox=styled.select` 
 margin:10% 6% 0% 1%;
 width: 40%;
 cursor: pointer;
 height: 35px;
 border-radius: 4px;
 border: lightgray 1px solid;
 padding-left: 10px;
`;

export const Button=styled.button` 
background-color: rgb(39,134,95);
color: whitesmoke;
text-align: center;
margin:10% 6% 0% 1%;
cursor: pointer;
width: 40%;
height:35px;
border: none;
border-radius: 4px;

`;

export const Flex=styled.div` 
display: flex;

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

export const Favorite=styled.button` 
border: 1px solid lightgray;
cursor: pointer;
border-radius: 3px;
text-align: center;
margin:20px -1px 0px 5px;
width: 168px;
height: 37px;

`;

export const Heart=styled.img` 
 border:1px solid lightgray;
 border-radius: 3px;
 margin:20px -5px 0px 5px;
 height: 35px;
 text-align: center;
 cursor: pointer;
 &:hover{
   filter: grayscale(0);
  transform: scale(1.3)
 }
`;

export const MidBox=styled.div`
display: flex;
margin: 2% 0% 0% 0%;
border: 0px solid transparent;

`;

export const Icons=styled.div`
border-radius:30px ;
display: flex;
margin-left:3vh;

`;


export const Head=styled.p`
margin-left:5vh;

`;


export const IconImage=styled.img`
width: 40px;
height: 40px;
padding: 10px;

&:hover{
   filter: grayscale(0);
  transform: scale(1.3)
 }

`;


export const PARA=styled.p`
 margin:1% 0% 0% 2%;

`;


export const Stars1=styled.p` 
margin:1% 0% 2% 2% ;
display: flex;
`;

export const Title=styled.p` 
font-size: larger;
margin:1% 0% 2% 2% ;
`;

export const Customer=styled.div`
  height: 400px;
  border: 1px solid gray;
  margin:1% 0% 2% 2% ;
  width: 80%;
`;