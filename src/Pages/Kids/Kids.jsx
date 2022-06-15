import React from 'react'
import { Head, MainBox, LowerBox } from './Kids.styled'
import "./Kids.css"
const Kids = () => {
  const data6=[
    {image:"",name:"Kids Beds"},
    {image:"",name:"Kids Comforter Sets"},
    {image:"",name:"Kids Rugs & Decor"},
    {image:"",name:"Kids Storage"},
    {image:"",name:"Bean Bags"},
    {image:"",name:"Shop All Kids & Toddler Furniture"},

  ]

  const data7=[
    {image:"",name:"Nursery Furniture"},
    {image:"",name:"Baby Crib Bedding"},
    {image:"",name:"Storage and Organisation"},
    {image:"",name:"Gliders & Ottomans"},
    {image:"",name:"Nursery Decor"},
    {image:"",name:"Shop All Baby & Nursery"},

  ]

  const data8=[
    {image:"",name:"Cribs"},
    {image:"",name:"Kids Beds"},
    {image:"",name:"Kids Mattresses"},
    {image:"",name:"Kids Bedding"},
    {image:"",name:"Outdoor Play"},
    {image:"",name:"Kids Rugs & Decor"},

  ]

  const data9=[
    {image:"",name:"Swing Sets"},
    {image:"",name:"Trampolines"},
    {image:"",name:"Playhouses"},
    {image:"",name:"Water Toys"},
    {image:"",name:"Kids Outdoor Furniture"},
    {image:"",name:"Shop All Outdoor Play"},

  ]

  const data10=[
    {image:"",name:"Shop by Kids Room"},
    {image:"",name:"Shop by Nursery"},
    {image:"",name:"Playroom Ideas"},
    {image:"",name:"How to Buy Kids Furniture"},
    {image:"",name:"Newborn Baby Essentials"},
    {image:"",name:"How to find Cute Girls Bedding"},

  ]
  return (
    <div>
      <h1>Kids Store</h1>
      <MainBox>
        <div className='leftbox'>
          <p className='left'>Baby & Nursery</p>
          <p className='left'>Kids & Toddler Furniture</p>
          <p className='left'>Kids Toys</p>
          <p className='left'>Kids Outdoor Play</p>
          <p className='left'>Gifts for Kids</p>
        </div>
        <div className='rightbox'></div>

        </MainBox>
        <LowerBox>
         <div>
          <Head>Kids</Head>
          <div className='box'>
            <div className='innerbox'>asdfa</div>
            <div className='innerbox'>asdfa</div>
            <div className='innerbox'>asdfa</div>
            <div className='innerbox'>asdfa</div>
            <div className='innerbox'>asdfa</div>
            <div className='innerbox'>asdfa</div>
          </div>
         </div>

         <div>
          <Head>Baby</Head>
          <div>
            <div className='innerbox'>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
          </div>
         </div>

         <div>
          <Head>Top Rated Products</Head>
          <div>
            <div className='innerbox'>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
          </div>
         </div>

         <div>
          <Head>Kids Outdoor</Head>
          <div>
            <div className='innerbox'>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
          </div>
         </div>

         <div>
          <Head>Tips & Inspirations</Head>
          <div>
            <div className='innerbox'>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
            <div>asdfa</div>
          </div>
         </div>
            
         <p>About Kids at Overstock</p>
         <h5>Make Overstock your first stop for kids’ furniture and nursery decor. Save big on every stage of childhood when you decorate your child’s bedroom with kids’ beds, comforter sets, and mattresses from Overstock. Or give your playroom a style boost with comfy rugs and bean bags. We sell toys for every age, as well as kids’ storage to keep them organized. And from swing sets to trampolines, shop outdoor play for an affordable way to entertain your children. If you have a new child on the way, get yourself fully prepared with baby furniture, such as cribs and gliders. At Overstock, enjoy huge savings on everything you need for your little ones.</h5>

         <div>
          <Head>Kids Buyong Guides</Head>
          <p>When it comes to your kids, you want everything to be perfect. Our guides will make everything from bringing baby home to creating the perfect spot for playtime easy as 1, 2, 3.</p>
         </div>
          <div>
            <div>
              <img src='' ></img>
            </div>
            <div>
              <p>Create a special place for your child to play, explore, learn and most of all have fun.</p>
            </div>
            <p>Read More</p>
          </div>
         
          </LowerBox>
    </div>
  )
}

export default Kids