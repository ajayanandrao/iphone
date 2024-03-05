import React from 'react'
import "./SecOne.scss";
import { FaApple } from "react-icons/fa";
import { motion } from "framer-motion";
import img from "./../assets/one.png";

const SecOne = () => {

    return (
        <div className='SecOne-Container'>
            <div className="calOne">
                <div className='title-div'>

                    <motion.div
                        transition={{
                            type: "spring",
                            duration: 3
                        }}
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="title">
                        <FaApple /> <br /> iPhone 13 <br /> Pro max</motion.div>

                    <motion.div
                        transition={{
                            type: "spring",
                            duration: 3,
                            delay: 0.4
                        }}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="subtitle">
                        The best way to buy the products you love.
                        <div className="buy-btn">Buy</div>
                    </motion.div>
                </div>
            </div>
            
            <div className="calTwo">
                {/* <img src={img} alt="" /> */}
            </div>
        </div>
    )
}

export default SecOne