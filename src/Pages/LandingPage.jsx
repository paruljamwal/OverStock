import React from "react";
import { Grid, Limited, MainGrid, Poster, Poster2, MainGrid2, Poster4, MainGrid3 } from "./Pages.styled";
import './Page.css'

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
  return (
    <div>
      <>
        <Poster src="https://ak1.ostkcdn.com/img/mxc/05302022-HP-A1-INTL-1400x550.jpg" />
        {/* <Poster1 src="https://ak1.ostkcdn.com/img/mxc/05302022-HP-A1-INTL-1400x550.svg" alt="" /> */}
      </>

      <Limited>
        <h2>Limited Time Deals</h2>
      </Limited>
      <MainGrid>
        {data.map((e) => (
          <Grid>
            <img className="gridbox" src={e.image} alt="" />
            <p className="gridName">{e.name}</p>
          </Grid>
        ))}
      </MainGrid>
      <>
        <Poster2 src="https://ak1.ostkcdn.com/img/mxc/05302022_BedroomFurniture_Desktop.jpg?imwidth=1080" alt="" />
        {/* <Poster3 src="https://ak1.ostkcdn.com/img/mxc/05302022_BedroomFurniture_Desktopv2.svg?imwidth=3840" ></Poster3> */}
      </> 
      
      <Limited>Fresh Find In Each Category</Limited>
       <MainGrid2>
        {data2.map((e)=>(
          <div>
            <img className="gridbox" src={e.image} />
            <p className="gridName">{e.name}</p>
          </div>
        ))}      
      </MainGrid2>
      <Limited>New Ways To Bring Home Spring</Limited>
      {/* swiper */}

      <div>
        <Poster4  src="https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=120%20120w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=200%20200w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=320%20320w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=400%20400w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=480%20480w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=640%20640w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=750%20750w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=828%20828w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=1080%201080w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=1200%201200w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=1920%201920w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=2048%202048w,%20https://ak1.ostkcdn.com/img/mxc/05302022_SummerDecor_Desktop.jpg?imwidth=3840%203840w"  alt="" />
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
    </div>
  );
};

export default LandingPage;
