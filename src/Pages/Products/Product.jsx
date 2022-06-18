import React, { useEffect, useState } from "react";
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
  Blue,
  Btn,
  Button
} from "./Products.styled";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { getDataAPI } from "../../Redux/Product/action";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Product = () => {
  const [age, setAge] = React.useState("");

  const {loading,error,products} = useSelector((store) => store.product);
  const dispatch = useDispatch();
  // console.log(products);

  useEffect(() => {
    if(products?.length===0){
      dispatch(getDataAPI());
    }
  }, [products?.length,dispatch]);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  if(loading) return <h1>Loading.....</h1>
  if(error) return <h1>Error.......</h1>
  return (
    <div>
    
      <Head>Outdoor Playhouses & Play Tents</Head>
      <FormControl classname="sort" sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Sort</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Price Low-High</MenuItem>
          <MenuItem value={20}>Price High-Low</MenuItem>
          <MenuItem value={30}>Customer Rating</MenuItem>
          <MenuItem value={30}>New Arrivals</MenuItem>
        </Select>
      </FormControl>
      <Button>{`<`}</Button>  <Button>{`>`}</Button>
      <MainBox>
        <LeftBox>
          <Accordion>
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Price</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Btn>High To Low</Btn>
                <Btn>Low To High</Btn>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={"+"}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Colors</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Red></Red>
                <Green></Green>
                <Pink></Pink>
                <Brown></Brown>
                <Yellow></Yellow>
                <Sky></Sky>
                <Black></Black>
                <White></White>
                <Blue></Blue>
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
              <Typography>
                <Btn>Dimple</Btn>
                <Btn>KidsKraft</Btn>
                <Btn>Evergreen</Btn>
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
              <Typography>
                <Btn>Plastic</Btn>
                <Btn>Wood</Btn>
                <Btn>Silk</Btn>
                <Btn>Cotton</Btn>
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
              <Typography>
                <Btn>Available</Btn>
                <Btn>Not Available</Btn>
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
              <Typography>
                <Btn>Indoor</Btn>
                <Btn>Outdoor</Btn>
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
              <Typography>
                <Btn>1</Btn>
                <Btn>2</Btn>
                <Btn>3</Btn>
                <Btn>4</Btn>
                <Btn>5</Btn>
                <Btn>6</Btn>
                <Btn>7</Btn>
                <Btn>8</Btn>
                <Btn>9</Btn>
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
              <Typography>
                <Btn>Outdoor</Btn>
                <Btn>Indoor</Btn>
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
            {products.length && products.map((e) => (
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
                    <div>
                      <StarList src={FullStar} />
                    </div>
                    <div>
                      <StarList src={FullStar} />
                    </div>
                    <div>
                      <StarList src={FullStar} />
                    </div>
                    <div>
                      <StarList src={Star} />
                    </div>
                    <div>
                      <StarList src={Star} />
                    </div>
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
      
      
    </div>
  );
};

export default Product;
