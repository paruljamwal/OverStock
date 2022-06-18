import React from 'react'
import styled from 'styled-components'
const Sales = () => {
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
  `;
  return (
    <div>
          <Box>
      <Box1></Box1>
      <Img src='https://c.tenor.com/Ni-VQYLUk74AAAAd/cry-baby.gif' alt="dummy img" />
      <Box1></Box1>
    </Box>
    </div>
  )
}

export default Sales