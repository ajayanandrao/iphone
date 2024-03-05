import React from 'react'
import "./SecFour.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);


const SecFour = () => {
    const tl = gsap.timeline();
    
    return (
        <div className='secFour-container'>
            <div className="title-div">
                <div className="title">
                    Gigablast
                    your gigabits.
                </div>
            </div>
            <div className='secFour-img-div'>
                <img className='secFour-img' src="https://www.apple.com/in/iphone-15-pro/images/overview/usb-c/usbc__dqdn0phay4mu_large.jpg" alt="" />
            </div>
            <div className="secFour-desc-div">
                <div className="secFour-colOne">

                    <div className="secFour-colOne-one">
                        iPhone 15 Pro is the first iPhone to support USB 3,4 for a
                        <span style={{ color: "white" }}> huge leap in data transfer speeds </span>
                        and faster pro workflows than ever before.
                    </div>

                    <div className="secFour-colOne-two">
                        Up to
                        <span style={{ color: "white", fontSize: "60px", fontWeight: "bold", margin: "1rem 0" }}>
                            20x faster
                        </span>
                        file transfers
                    </div>

                </div>

                <div className="secFour-colTwo">

                    <div className="secFour-colTwo-one">
                        The new USB‑C connector lets you
                        <span style={{ color: "white" }}>
                            charge your Mac or iPad with the same cable you use to charge iPhone 15 Pro.
                        </span>
                        Bye‑bye, cable clutter.
                    </div>

                    <div className="secFour-colTwo-two">
                        And with all‑new Wi‑Fi 6E5 you'll get two
                        <span style={{ color: "white" }}>
                            times faster wireless speeds.
                        </span>
                        So you can upload, download, and transfer files in a flash.
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SecFour

