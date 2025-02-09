import React from 'react'
import './Home.css'
import bghome from '../../assets/bghome.png'

const Home = () => {
  return (
    <div className='home'>
       <div style={{
            backgroundImage: `url(${bghome})`,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            height: "625px",
            width: "100%",
        }}>
            <h1 className='line1'>Where Luxury Meets Radiance,</h1>
            <h1 className='line2'>Every Piece a Masterpiece.</h1>

            <div className="buttons">
                <button className='button'>Shop Now</button>
            </div>
        </div> 
    </div>
  )
}

export default Home