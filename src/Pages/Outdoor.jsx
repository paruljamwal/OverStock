import React from 'react'
import styled from 'styled-components'
const Outdoor = () => {
  const Box=styled.div` 
  width: 60%;
  height: 600px;
  margin:0% 50% 0% 40%;
  `;

  const Box1=styled.div` 
   height: 170px;
  `;
 const Img=styled.img` 
 border-radius: 50px;
 height: 400px;
`;
  return (
    <div>
          <Box>
      <Box1></Box1>
      <Img src='https://i.pinimg.com/originals/cb/16/5d/cb165d4a8a452d2bc0e942a95922d449.gif' alt="dummy img" />
      <Box1></Box1>
    </Box>
    </div>
  )
}

export default Outdoor