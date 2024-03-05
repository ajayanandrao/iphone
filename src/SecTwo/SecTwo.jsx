import React from 'react'
import "./SecTwo.scss";


const SecTwo = () => {
    return (
        <div className='SecTwo-container'>
            <div className="title-div">
                <div className="title">
                    A camera that captures your wildest imagination.
                </div>
                <h1 className="titleSub">
                    From dramatic framing flexibility to next-generation portraits,
                    see what you can do with our most powerful iPhone camera system.
                </h1>
            </div>

            <div className="secTwo-colRight-div">
                <div className="secTwo-colRight">
                    <img src="https://www.apple.com/v/iphone-15-pro/c/images/overview/camera/camera__bo5k5tfk6cmu_large.jpg" 
                    className='secTwo-colRight-img'
                    alt="" />
                </div>
            </div>

        </div>
    )
}

export default SecTwo