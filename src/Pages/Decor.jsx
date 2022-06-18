import React from 'react'

const Decor = () => {
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
      <Img src='https://i.pinimg.com/originals/0b/64/40/0b6440879558edded7973f342fc55e7f.gif' alt="dummy img" />
      <Box1></Box1>
    </Box>
    </div>
  )
}

export default Decor