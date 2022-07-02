import React from 'react'
import {Box,Box1,Image,Button} from './Search.style'
import searchItems from '../../Components/Navbar/utils/db';
import { useNavigate, useParams } from 'react-router-dom';
const SearchItem = () => {
    const navigate=useNavigate()
    // console.log(searchItems)
    const {name}=useParams()
    // console.log(name)
     const data=searchItems.filter((e)=>e.name===name)
    //  console.log(data,"a")
    const gotohome=()=>{
        navigate('/')
    }
  return (
    <div>
        <Box>
            {
                data.map((e)=>(
                    <>
                    <Image src={e.image}  />
                    <Box1>
                    <h1>{e.name}</h1> 
                    <h3>Color : {e.color}</h3>
                    <h3>Brands : {e.brands}</h3>
                    <h3>Assembly :  {e.assembly}</h3>
                    <h3>Material : {e.material}</h3>
                    <h3>Features :  {e.features}</h3>
                    <h3>Availability :  {e.availabilty}</h3>
                    <Button onClick={gotohome} >Go Back</Button>
                    </Box1>
                    </>
                ))
            }
        </Box>
    </div>
  )
}

export default SearchItem