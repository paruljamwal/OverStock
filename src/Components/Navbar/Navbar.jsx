import { Box} from "@mui/system";
// import Button from "@mui/material/Button";
import React from "react";
import india from "../../assests/india.png";
import logo from "../../assests/download.png";
import search from "../../assests/search.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Country, Logo, Search, Ship, Smallnav,Inputbar,Container,SearchBttn, India} from "./Navbar.styled";
const Navbar = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            bgcolor: "rgb(249,250,251)",
            height: "5vh",
            borderBottom: "1px solid lightgray",
          }}
        >
          <Ship>Ships to:</Ship>
          <Link to='/'><India alt="Cindy Baker" src={india} /></Link> 
          <Country>India</Country>
        </Box>
        <Box
          sx={{
            height: "10vh",
            borderBottom: "1px solid lightgray",
            bgcolor: "rgb(249,250,251)",
            display: "flex",
          }}
        >
         <Link to='/'><Logo src={logo} alt="logo" /></Link> 
          <Inputbar placeholder="Search" />
          <SearchBttn>
            <Search src={search}></Search>
          </SearchBttn>
        </Box>

        <Box
          sx={{ bgcolor: "rgb(249,250,251)", height: "5vh", display: "flex" }}
        >
          <Smallnav>
            <Link className="link" to="/kids">
              Kids & Baby
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/furniture">
              Furniture
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/rugs">
              Rugs
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/decor">
              Decor
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/bedding">
              Bedding
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/homeimprove">
              HomeImprovement
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/kitchen">
              Kitchen
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/outdoor">
              Outdoor
            </Link>
          </Smallnav>

          <Smallnav>
            <Link className="link" to="/lightning">
              Lighting
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/more">
              More
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/idea">
              Ideas
            </Link>
          </Smallnav>
          <Smallnav>
            <Link
              style={{ color: "rgb(255,31,44)" }}
              className="link"
              to="/sales"
            >
              Sales & Deals
            </Link>
          </Smallnav>
        </Box>
      </Container>
    </div>
  );
};

export default Navbar;
