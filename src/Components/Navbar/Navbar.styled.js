import styled from "styled-components";

export const Container = styled.div`
width: 100%;
position: fixed;
`;
export const India = styled.img`
height: 25px;
position: absolute;
padding: 2px;
left:5%
`;
export const Ship = styled.span`
color: #b7b5b5;
margin-top: 3px;
position: absolute;
`;
export const Country = styled.span`
position: absolute;
margin-top:6px;
left: 8%;
`;
export const Logo = styled.img`
box-sizing: border-box;
height: 100%;
padding: 17px;
`;

export const Inputbar = styled.input`
background-color: #fafbfd;
border: 1px solid lightgray;
height: 30px;
width: 45%;
position: absolute;
border-radius: 5px;
top: 48px;
left: 15%;
padding-left: 10px;
`;
export const SearchBttn = styled.button`
background-color: rgb(255,31,44);
border-radius: 5px;
position: absolute;
border: none;
height: 33px;
width: 40px;
left: 60%;
top: 48px;
`;
export const Search = styled.img`
width: 20px;
`;

export const Smallnav = styled.div`
margin:3px 0px 1px 43px;
color: gray;
font-size: 30;
`;

export const RightBox=styled.div`
border: 1px solid transparent;
position: absolute;
left: 66%;
top: 38px;
width: 32%; 
height: 40px;
display: flex;
`;


export const Btn=styled.button`
width: 26%;
border:none ;
background-color:rgb(45,48,52);
color: whitesmoke;
height: 34px;
position: absolute;
top: 8px;
cursor: pointer;
left:72%;
border-radius: 4px;
`;

export const Img=styled.img` 
width: 20px;
cursor: pointer;
&:hover{
   filter: grayscale(0);
  transform: scale(1.1)
}
`;

export const Name=styled.p`
cursor: pointer; 
&:hover{
    filter:grayscaly(0);
    transform:scale(1.1);
}
`;

export const  Div=styled.div` 
border: 1px solid transparent;
width: 90px;
text-align: center;
`;