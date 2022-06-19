import React from 'react'
import {Link} from 'react-router-dom'
import { Head, MainBox, LowerBox, ImgPoster, Para, Blue, GridCard, CardImg, CardBox } from './Kids.styled'
import "./Kids.css"
import { AuthContext } from '../../Context/AuthContext'
const Kids = () => {

  const data6=[
    {image:"http://ak1.ostkcdn.com/images/products/17960745/Avenue-Greene-Nola-Mocha-Triple-Bunk-Bed-8637f807-600a-4eaa-88cc-29a8452e6ac5.jpg",name:"Kids Beds"},
    {image:"http://ak1.ostkcdn.com/images/products/22528931/Dinoland-Comforter-Set-83f44770-372f-49cb-bffc-c64e66848a0c.jpg",name:"Kids Comforter Sets"},
    {image:"http://ak1.ostkcdn.com/images/products/16600895/Safavieh-Kids-Transitional-Geometric-Hand-Tufted-Wool-Grey-Ivory-Area-Rug-5-x-7-d9e43075-b79e-4e75-9039-0fb08f8defb8.jpg",name:"Kids Rugs & Decor"},
    {image:"http://ak1.ostkcdn.com/images/products/13992332/Riley-Modular-Stacking-Storage-Bins-by-iNSPIRE-Q-Junior-beca1d26-61ea-4471-a5c8-4660aa655979.jpg",name:"Kids Storage"},
    {image:"http://ak1.ostkcdn.com/images/products/15389741/Marilyn-Faux-Fur-2.75-ft.-Lounge-Beanbag-Chair-by-Christopher-Knight-Home-4968df0c-03d9-4d94-a115-5c7aedcab0e5.jpg",name:"Bean Bags"},
    {image:"http://ak1.ostkcdn.com/images/products/13213081/Simple-Living-Hayden-Kids-Table-and-Chair-Set-a1adabe3-9a48-40f6-939c-618c07573eb7.jpg",name:"Shop All Kids & Toddler Furniture"},

  ]

  const data7=[
    {image:"http://ak1.ostkcdn.com/images/products/18235968/Avenue-Greene-Ollie-Natural-4-in-1-Convertible-Crib-4e088cf9-2381-44b1-9d6d-6039ac6c8ffe.jpg",name:"Nursery Furniture"},
    {image:"http://ak1.ostkcdn.com/images/products/13935993/My-Baby-Sam-Rosebud-Lane-3-piece-Crib-Bedding-Set-58b3724f-3173-47e5-ba72-12bba506e82b.jpg",name:"Baby Crib Bedding"},
    {image:"http://ak1.ostkcdn.com/images/products/14229835/RiverRidge-Kids-3-Cubby-2-Veggie-Bin-Floor-Cabinet-023b33d6-8742-4d44-9ac4-8846c73b07aa_1000.jpg",name:"Storage and Organisation"},
    {image:"http://ak1.ostkcdn.com/images/products/13471036/Pearcy-Velvet-Sheep-Ottoman-by-Christopher-Knight-Home-2ea51162-ed0d-475d-86e4-2e0f45c4f095_1000.jpg?",name:"Gliders & Ottomans"},
    {image:"http://ak1.ostkcdn.com/images/products/9489586/Lush-Decor-Riley-Window-Curtain-Panel-5c1afdc3-be18-4d04-af17-588a9d616ca4.jpg",name:"Nursery Decor"},
    {image:"http://ak1.ostkcdn.com/images/products/10914974/Baxton-Studio-Agatha-Mid-century-Modern-Light-Beige-Fabric-Upholstered-Button-tufted-Rocking-Chair-cb066623-c0cc-4a18-bc19-4abee3f409fe.jpg",name:"Shop All Baby & Nursery"},

  ]

  const data8=[
    {image:"http://ak1.ostkcdn.com/images/products/23386113/South-Shore-Cotton-Candy-Baby-Crib-4-Heights-with-Toddler-Rail-661e98e7-c8c6-45e6-a5bc-deb9b3286f82.jpg",name:"Cribs"},
    {image:"http://ak1.ostkcdn.com/images/products/20186914/Avenue-Green-Randall-Wood-Twin-over-Full-Bunk-Bed-6a7420ea-c190-4381-bd0a-d19ad529b1eb.jpg",name:"Kids Beds"},
    {image:"http://ak1.ostkcdn.com/images/products/11405611/Aveline-8-inch-Gel-Infused-Memory-Foam-Twin-size-Mattress-ae2715ca-2f47-41b8-a7f0-06bfb6789055.jpg",name:"Kids Mattresses"},
    {image:"http://ak1.ostkcdn.com/images/products/11454272/Intelligent-Design-Mona-Comforter-Set-1856d343-23fd-4a01-8f00-215fc4e9187f.jpg",name:"Kids Bedding"},
    {image:"http://ak1.ostkcdn.com/images/products/is/images/direct/2a4ad631e7bf95c17568fc0e6110f7315dda8db0/Backyard-Discovery-Skyfort-II-All-Cedar-Swingset.jpg",name:"Outdoor Play"},
    {image:"http://ak1.ostkcdn.com/images/products/is/images/direct/331869e95079f3f94e836fbdf624ef708330c8e6/Taylor-%26-Olive-Tuscaloosa-Handmade-Wool-Trellis-Area-Rug.jpg",name:"Kids Rugs & Decor"},

  ]

  const data9=[
    {image:"http://ak1.ostkcdn.com/images/products/6800086/Backyard-Discovery-Montpelier-All-Cedar-Swing-Set-81674fb4-faea-4b37-954c-a65a3b6bcea0.jpg",name:"Swing Sets"},
    {image:"http://ak1.ostkcdn.com/images/products/14626826/Skywalker-Trampolines-Green-12-Round-Trampoline-with-Enclosure-1d34285c-cdc3-48b0-8d7d-dfeb7b7555f4.jpg",name:"Trampolines"},
    {image:"http://ak1.ostkcdn.com/images/products/10763382/Backyard-Discovery-Timberlake-All-Cedar-Playhouse-dd8c7ac9-0886-4929-a2f5-9d8873a1c7f8.jpg",name:"Playhouses"},
    {image:"http://ak1.ostkcdn.com/images/products/21134353/Intex-Mystic-Unicorn-Spray-Pool-72871ac0-75d3-4da2-8800-9ca988eca9bd.jpg",name:"Water Toys"},
    {image:"http://ak1.ostkcdn.com/images/products/18066059/Double-Chaise-Lounger-Navy-and-White-Stripes-09f78287-b52f-4eec-aa28-bb798a351803.jpg",name:"Kids Outdoor Furniture"},
    {image:"http://ak1.ostkcdn.com/images/products/5314750/Lifetime-Ace-Flyer-Multi-color-Airplane-Outdoor-Teeter-totter-795059ae-ba44-4dcf-98f5-1fc6de323442.jpg",name:"Shop All Outdoor Play"},

  ]

  const data10=[
    {image:"http://ak1.ostkcdn.com/images/products/14427935/Giselle-II-Metal-Bed-iNSPIRE-Q-Modern-12405934-e72c-491c-8f51-8ce670324241.jpg",name:"Shop by Kids Room"},
    {image:"http://ak1.ostkcdn.com/images/products/10001948/Kolcraft-3-drawer-Transitional-Dresser-c175841e-1afd-41e2-bacc-40353a80d0f4.jpg",name:"Shop by Nursery"},
    {image:"http://ak1.ostkcdn.com/images/products/22731827/Mohawk-Home-Prismatic-States-Map-Area-Rug-5x-8-5e225e7f-6b3e-4252-ab4f-9d28a141c347.jpg",name:"Playroom Ideas"},
    {image:"http://ak1.ostkcdn.com/images/products/13253016/South-Shore-Savannah-39-inch-3-drawer-Laminated-Twin-Bed-Set-3b24684a-40ab-4015-ae21-d8bc83ca4ab9.jpg",name:"How to Buy Kids Furniture"},
    {image:"http://ak1.ostkcdn.com/images/products/19843554/Carters-LILY-3pc-Crib-Set-5d47279d-fd66-49e4-84b4-c7bd16f5d7fc.jpg",name:"Newborn Baby Essentials"},
    {image:"http://ak1.ostkcdn.com/images/products/17403487/Urban-Playground-Heart-5-piece-Quilt-Set-097a7540-fbc9-43c2-b9c2-67c7e130beed.jpg",name:"How to find Cute Girls Bedding"},

  ]

  const data11=[
    {image:"http://ak1.ostkcdn.com/img/mxc/BabyNurseryIdeas6_29_2017seo.jpg",title:"Use these nursery ideas as inspiration to create an adorable space for your little one",more:"Read More"},
    {image:"http://ak1.ostkcdn.com/img/mxc/NewbornBabyEssentials6_29_2017seo.jpg",title:"Use these nursery ideas as inspiration to create an adorable space for your little one",more:"Read More"},
    {image:"http://ak1.ostkcdn.com/img/mxc/Playroomideas6_29_2017seo.jpg",title:"Use these nursery ideas as inspiration to create an adorable space for your little one",more:"Read More"},
    {image:"http://ak1.ostkcdn.com/img/mxc/04192018_SP_Kids_Store_BG4.jpg",title:"Use these nursery ideas as inspiration to create an adorable space for your little one",more:"Read More"},
   
  ]
  return (
    <div>
      <h1>Kids Store</h1>
      <MainBox>
        <div className='leftbox'>
         <Link to="/products"> <p className='left'>Baby & Nursery</p></Link>
         <Link to="/products"><p className='left'>Kids & Toddler Furniture</p></Link> 
         <Link to="/products"><p className='left'>Kids Toys</p></Link> 
         <Link to="/products"> <p className='left'>Kids Outdoor Play</p></Link>
         <Link to="/products"><p className='left'>Gifts for Kids</p></Link> 
        </div>
        <div className='rightbox'>
          <ImgPoster src="https://ak1.ostkcdn.com/img/mxc/Q3_2018_1900x950_030-KidsStore-STATIC.jpg" alt="" />
        </div>

        </MainBox>
        <LowerBox>
         <div>
          <Head>Kids</Head>
          <div className='box'>
            {data6.map((e)=>(
            <div className='innerbox'>
            <Link to='/products'><img className='InnerBox1' src={e.image} alt="" /></Link>  
              <p className='InnerBox2'>{e.name}</p> 
            </div>
            ))}
          </div>
         </div>

         <div>
          <Head>Baby</Head>
          <div className='box'>
           {data7.map((e)=>(
             <div className='innerbox'>
               <img className='InnerBox1' src={e.image} alt="" />
              <p className='InnerBox2'>{e.name}</p> 
             </div>
             
           ))}
          </div>
         </div>

         <div>
          <Head>Top Rated Products</Head>
          <div  className='box'>
            {data8.map((e)=>(
                 <div className='innerbox'>
                 <img className='InnerBox1' src={e.image} alt="" />
                <p className='InnerBox2'>{e.name}</p> 
               </div>

           ) )}
          </div>
         </div>

         <div>
          <Head>Kids Outdoor</Head>
          <div  className='box'>
            {data9.map((e)=>(
                 <div className='innerbox'>
                 <img className='InnerBox1' src={e.image} alt="" />
                <p className='InnerBox2'>{e.name}</p> 
               </div>

           ) )}
          </div>
         </div>

         <div>
          <Head>Tips & Inspirations</Head>
          <div  className='box'>
            {data10.map((e)=>(
                 <div className='innerbox'>
                 <img className='InnerBox1' src={e.image} alt="" />
                <p className='InnerBox2'>{e.name}</p> 
               </div>

           ) )}
          </div>
         </div>
            
         <Head>About Kids at Overstock</Head>
         <Para>Make Overstock your first stop for kids’ furniture and nursery decor. Save big on every stage of childhood when you decorate your child’s bedroom with kids’ beds, comforter sets, and mattresses from Overstock. Or give your playroom a style boost with comfy rugs and bean bags. We sell toys for every age, as well as kids’ storage to keep them organized. And from swing sets to trampolines, shop outdoor play for an affordable way to entertain your children. If you have a new child on the way, get yourself fully prepared with baby furniture, such as cribs and gliders. At Overstock, enjoy huge savings on everything you need for your little ones.</Para>

         <div>
          <Head>Kids Buyong Guides</Head>
          <Para>When it comes to your kids, you want everything to be perfect. Our guides will make everything from bringing baby home to creating the perfect spot for playtime easy as 1, 2, 3.</Para>
         </div>
          <GridCard>
              {data11.map((e)=>(
                <>
                <CardBox>
                <div>
                  <CardImg src={e.image} />
                </div>
                <div>
                  <Para>{e.title}</Para>
                </div>
                <Blue>More</Blue>
                </CardBox>
                </>
              ))}

          </GridCard>
         
          </LowerBox>
    </div>
  )
}

export default Kids