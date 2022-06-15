import React from 'react'
import './Products.css'
import { Head, LeftBox,Stars,Name, MainBox,Price, InnerGrid, RightBox,MainGrid6, ImageBox } from './Products.styled'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Product = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div>Product
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


        </LeftBox>
        <RightBox>
          <MainGrid6>
            <InnerGrid>
              <div>
                <ImageBox src="https://ak1.ostkcdn.com/images/products/30567641/Princess-Castle-Play-Tent-for-Girls-with-LED-Star-String-Lights-Pink-1-4678722b-257c-4bf6-bd2c-001768d22875_600.jpg?imwidth=480&impolicy=medium" />
              </div>
              <div>
               <Price>PRICE</Price>
              </div>
              <Stars>
                STARS
              </Stars>
              <div>
                <Name>NAME</Name>
              </div>
            </InnerGrid>
            
          </MainGrid6>
        </RightBox>
      </MainBox>
    </div>
  )
}

export default Product