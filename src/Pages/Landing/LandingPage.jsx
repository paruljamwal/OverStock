import React from "react";
import { Grid, Limited, MainGrid, Poster, Poster2, MainGrid2, Poster4, MainGrid3, Triplet, Flex, MainGrid4, Hori } from "./Pages.styled";
import './Page.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
const LandingPage = () => {
  const data = [
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/05302022_HB_DOMESTIC_1_20_off.svg?imwidth=1200",
      name: "Select Rugs",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/06062022_HB_DOMESTIC_2_pt_3.svg?imwidth=1200",
      name: "Select Living Room Furniture",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/06062022_HB_DOMESTIC_3_pt_3.svg?imwidth=1200",
      name: "Select Dining Room Furniture",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/06102022_HB_DOMESTIC_6.svg?imwidth=1200",
      name: "Select Lighting & Ceiling Fans",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/06062022_HB_DOMESTIC_5_pt_3.svg?imwidth=1200",
      name: "Select Home Decor",
    },
    {
      image:
        "https://ak1.ostkcdn.com/img/mxc/05302022_HB_DOMESTIC_6.svg?imwidth=1920",
      name: "Save on Top-Rated Items",
    },
  ];

  const data2=[
    {image:"https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920",name:"Furniture"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920",name:"Area Rugs"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920",name:"Bedding"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920",name:"Home Decor"},
    {image:"https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920",name:"Window Treatments"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920",name:"Kitchen"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920",name:"Outdoor"},
    {image:"https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920",name:"Home Improvement"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920",name:"Storage"},
    {image:"https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920",name:"Mattresses"},
    {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920",name:"Lighting"},
    {image:"https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920",name:"Shop All Deals"},
  ]
  
   const data3=[
    { image:"https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_27037529.jpg?imwidth=1920",offer:"Extra 20% off",name:"Select Rugs by Artistic Weavers & More"},
    { image:"https://ak1.ostkcdn.com/img/mxc/HP_C_Mod_30806359.jpg?imwidth=1920",offer:"Save On",name:"Select Furniture by Middlebrook Designs"},
    { image:"https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_39032511.jpg?imwidth=1920",offer:"Extra 15% off",name:"Select Mattresses by Sealy"},
    { image:"https://ak1.ostkcdn.com/img/mxc/C-Mod_HP_C_Mod_27417542.jpg?imwidth=1920",offer:"Save On",name:"Select Home Goods By Bush Furniture"},
   ]

   const data4=[
    {image:"https://ak1.ostkcdn.com/img/mxc/030822-SBS-Farmhouse.jpg?imwidth=1920",name:"Farnhouse",Way:"Country comforts abound in this take on rustic home decor."},
    {image:"https://ak1.ostkcdn.com/img/mxc/030822-SBS-MidCenMod.jpg?imwidth=1920",name:"Retro meets modern chic in these clean lines and vibrant tones",Way:"Mid-Centuary Modern"},
    {image:"https://ak1.ostkcdn.com/img/mxc/030822-SBS-Traditional.jpg?imwidth=1920",name:"Cozy designs, clean and classic, give this style it's signature appeal.",Way:"Traditional"},
   ]

   const data5=["Outdoor Rugs","Wallpaper","Patio Furniture","Mattresses","TV Stands","Outdoor Lighting","Outdoor Dining Sets","Mirrors","Portable air Conditionors","Bathroom Vanities","Computer Desks","Area Rugs"]

   return (
    <div>
      <>
       <Link to="/kids" ><Poster src="https://ak1.ostkcdn.com/img/mxc/05302022-HP-A1-INTL-1400x550.jpg" /></Link> 
        {/* <Poster1 src="https://ak1.ostkcdn.com/img/mxc/05302022-HP-A1-INTL-1400x550.svg" alt="" /> */}
      </>

      <Limited>
        <h2>Limited Time Deals</h2>
      </Limited>
      <MainGrid>
        {data.map((e) => (
          <Grid>
            <Link to="/kids" > <img className="gridbox" src={e.image} alt="" /></Link>
            <p className="gridName">{e.name}</p>
          </Grid>
        ))}
      </MainGrid>
      <>
      <Link to="/kids" >  <Poster2 src="https://ak1.ostkcdn.com/img/mxc/05302022_BedroomFurniture_Desktop.jpg?imwidth=1080" alt="" /></Link>
        {/* <Poster3 src="https://ak1.ostkcdn.com/img/mxc/05302022_BedroomFurniture_Desktopv2.svg?imwidth=3840" ></Poster3> */}
      </> 
      
      <Limited>Fresh Find In Each Category</Limited>
       <MainGrid2>
        {data2.map((e)=>(
          <div>
            <Link to="/kids" > <img className="gridbox" src={e.image} /></Link>
            <p className="gridName">{e.name}</p>
          </div>
        ))}      
      </MainGrid2>
      <Limited>New Ways To Bring Home Spring</Limited>
      {/* swiper */}

      <div>
      <Link to="/kids" >  <Poster4  src="https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=120%20120w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=200%20200w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=320%20320w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=400%20400w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=480%20480w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=640%20640w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=750%20750w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=828%20828w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=1080%201080w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=1200%201200w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=1920%201920w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=2048%202048w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=3840%203840w"  alt="" /></Link>
      </div>
      <Limited>Overstock Limited Stock</Limited>
      <MainGrid3>
        {data3.map((e)=>(
          <Grid>
            <div>
              <div>
                <img className="gridbox1" src={e.image} alt="" />
              </div>
              <div>
                <h5  className="gridName1">{e.offer}</h5>
              </div>
              <div>
                <p  className="gridName2">{e.name}</p>
              </div>
            </div>
          </Grid>
        ))}
      </MainGrid3>
      <Triplet>
          
          <img className="gridbox1" src='https://ak1.ostkcdn.com/img/mxc/030822-RIUpdate-Dsk.jpg?imwidth=3840'/>
          <img className="gridbox2" src="https://ak1.ostkcdn.com/img/mxc/030822-RIUpdate-Dsk.svg?imwidth=1920" />
      </Triplet>
      <div>
      <Limited>We've Got Your Style</Limited>
       <Flex>
        {data4.map((e)=>(
          <div className="MainGrid3">
               <Link to="/kids" ><img className="gridbox3"  src={e.image} alt="" /></Link> 
             <h3 className="grid3">{e.Way}</h3>
             <p className="grid4" >{e.name}</p>
          </div>
        ))}
       </Flex>
      </div>
      
      <button variant="contained" className="btnstyle" >See all styles</button>
    
      <Limited>Trending Searches</Limited>
      <MainGrid4>
          {data5.map((e)=>(
          <div className="grid5">
            <h2 className="gray">{e}</h2>
          </div>
            
          ))}
      </MainGrid4>

       <Hori></Hori>
    </div>
  );
};

export default LandingPage;
