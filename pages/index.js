
import React from 'react'
import {FooterBanner , Product, HeroBanner} from '../components'
import {client} from '../lib/client';

const Home = ({products,bannerData}) => {

  const heroBanner = bannerData.length > 0 ? bannerData[0] : null;
  const heroBannerImage = heroBanner?.image?.asset;

  console.log(heroBanner); // Debug log to check the structure of heroBanner
  console.log(heroBannerImage);
 
  return (
    <>
   {heroBanner && (
        <HeroBanner heroBanner={{ ...heroBanner, image: heroBannerImage }} />
      )}

    
    <div className='products-heading'>
      <h2>Shop from our wide range of products!</h2>
      <p> Premium quality speakers</p>
    </div>

    <div className='products-container'>
      {products?.map((product)=><Product key={product._id} product={product}/>)}
    </div>

    <FooterBanner bannerData={bannerData.length && bannerData[0]}/>
    </>
  );

 
}

export const getServerSideProps =async()=>{
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);

  const bannerQuery ='*[_type=="banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props:{products,bannerData}
  }
}

export default Home