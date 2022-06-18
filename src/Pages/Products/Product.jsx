import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import  { useEffect, useState } from "react";
import FullStar from "../../assests/FullStar.png";
import Star from "../../assests/star.png";
import "./Products.css";
import { Link } from "react-router-dom";
import {
  Head,
  LeftBox,
  Stars,
  Name,
  MainBox,
  Price,
  InnerGrid,
  RightBox,
  MainGrid6,
  ImageBox,
  StarList,
  Red,
  Green,
  Brown,
  Pink,
  Yellow,
  Sky,
  Black,
  White,
  Select,
  Blue,
  Btn,
  Button,
  Dabba,
  ProductContainer
} from "./Products.styled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { getDataAPI, getProducts } from "../../Redux/Product/action";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Product = () => {
  const [age, setAge] = React.useState("");
  const [page,setPage]=useState(1)
  const [limit,setLimit]=useState(10)

  const {loading,error,products} = useSelector((store) => store.product);
  const dispatch = useDispatch();
  // console.log(products);

  const handelpage=(p)=>{
    setPage(page+p)
    dispatch(getDataAPI(page));
  
  }
  // console.log(page,limit)
   

  useEffect(() => {
    
      dispatch(getDataAPI(page));
    
  }, [dispatch,page]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handelprice=(e)=>{
    
    
    if(e.target.value==="Low"){
       const ascarr = products.sort((a,b)=>{
                    return a.price-b.price
       })
      dispatch(getProducts(ascarr))
    }
  
      if(e.target.value==="High"){
        const descarr = products.sort((a,b)=>{
          return b.price-a.price
})
              dispatch(getProducts(descarr))
      }
      else if(e.target.value==""){
        dispatch(getDataAPI())
      }
    
  }

  const handelcolor=(e)=>{
  //  console.log(e.target.value)
   let colorproduct= products.filter((el)=>el.color==e.target.value)
   dispatch(getProducts(colorproduct))
  }

   const handelbrand=(e)=>{
    // console.log(e.target.value)
    let brands=products.filter((el)=>el.brands==e.target.value)
    dispatch(getProducts(brands))
   }

   const handelMaterial=(e)=>{
    console.log(e.target.value)
    let material=products.filter((el)=>el.material==e.target.value)
    dispatch(getProducts(material))
   }

   const handelave=(e)=>{
    console.log(e.target.value)
    let ava=products.filter((el)=>el.availabilty==e.target.value)
    dispatch(getProducts(ava))
   }


   const handelfeature=(e)=>{
    console.log(e.target.value)
    let fea=products.filter((el)=>el.features==e.target.value)
    dispatch(getProducts(fea))
   }

   const handelage=(e)=>{
    console.log(e.target.value)
    let age=products.filter((el)=>el.age==e.target.value)
    dispatch(getProducts(age))
   }

   const handeltype=(e)=>{
    console.log(e.target.value)
    let type=products.filter((el)=>el.type==e.target.value)
    dispatch(getProducts(type))
   }
  // if(loading) return <h1>Loading.....</h1>
  // if(error) return <h1>Error.......</h1>
  return (
    <ProductContainer>
      <Dabba></Dabba>
      <Head>Outdoor Playhouses & Play Tents</Head>
      <Select onChange={handelprice} >
        <option value="">Select Price</option>
        <option value="High" >High To Low</option>
        <option value="Low" >Low To High</option>
      </Select>
      <Button disabled={page===1} onClick={()=>handelpage(-1)} >{`<`}</Button  >  <Button onClick={()=>handelpage(+1)} >{`>`}</Button>
      <MainBox>
        <LeftBox>
        
          <Accordion>
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Colors</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography onClick={handelcolor} >
                <Red value="red" ></Red>
                <Green value="GREEN" ></Green>
                <Pink value="Pink" ></Pink>
                <Brown value="brown" ></Brown>
                <Yellow value="yellow"></Yellow>
                <Sky value="skyblue"></Sky>
                <Black value="orange"></Black>
                <White value="gray"></White>
                <Blue value="white"></Blue>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Brands</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography onClick={handelbrand} >
                <Btn value="Dimple" >Dimple</Btn>
                <Btn value="KidKraft" >KidsKraft</Btn>
                <Btn value="LivEditor" >LivEditor</Btn>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Materials</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography onClick={handelMaterial}>
                <Btn value="plastic">Plastic</Btn>
                <Btn value="wooden">Wood</Btn>
                <Btn value="cotton">Cotton</Btn>
                <Btn value="net">Net</Btn>
                <Btn value="nylon">Nylon</Btn>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Availability</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography onClick={handelave} >
                <Btn value="available">Available</Btn>
                <Btn value="not available">Not Available</Btn>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Product Features</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography onClick={handelfeature} >
                <Btn value="Indoor">Indoor</Btn>
                <Btn value="Outdoor">Outdoor</Btn>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Ages</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography onClick={handelage} >
                <Btn value="2">2</Btn>
                <Btn value="3">3</Btn>
                <Btn value="4">4</Btn>
                <Btn value="5">5</Btn>
                <Btn value="6">6</Btn>
                <Btn value="7">7</Btn>
                <Btn value="8">8</Btn>
            
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Types</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography onClick={handeltype} >
                <Btn value="Diy Kits">Diy Kits</Btn>
                <Btn value="Ever green">Ever green</Btn>
                <Btn value="Dimple">Dimple</Btn>
                <Btn value="Backyard discovery">Backyard discovery</Btn>
                <Btn value="Hanging Tents">Hanging Tents</Btn>
                
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Sales & Promotions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Customer Ratings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </LeftBox>
        <RightBox>
          <MainGrid6>
            { products.map((e) => (
              <>
                <InnerGrid>
                  <div>
                    <Link to={`/products/${e._id}`}>
                      <ImageBox src={e.image} />
                    </Link>
                  </div>
                  <div>
                    <Price>PRICE: {e.price}</Price>
                  </div>
                  <Stars>
                  <Stack spacing={1}>
                <Rating name="size-large" defaultValue={2} size="large" />
               </Stack>
                  </Stars>
                  <div>
                    <Name>{e.name}</Name>
                  </div>
                </InnerGrid>
              </>
            ))}
          </MainGrid6>
        </RightBox>
      </MainBox>
      
      
     </ProductContainer>
  );
};

export default Product;
