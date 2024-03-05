import React, { useEffect } from 'react'
import "./gspaP.scss"


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger,);

const GsapPage = () => {

    const tl = gsap.timeline();

    const g = () => {

        // let details = gsap.utils.toArray('.details')
        // let props = gsap.getProperty('#id', 'backgroundColor')

        gsap.registerPlugin(ScrollTrigger)

        gsap.set('.photo:not(:first-child)', {
            // y: '100%',
            clipPath: 'inset(100% 0% 0%)',
            scale: 1,
        })


        const animation = gsap.to('.photo:not(:first-child)', {
            scale: 1,
            duration: 1,
            stagger: 1,
            // y: '0%',
            clipPath: 'inset(0% 0% 0%)',
            scale: 1,
            snap: true,
        })

        gsap.to('.photo img', {
            // y: -5,
            duration: 1,
            // repeat: -1,
            // yoyo: true,
            // ease: 'power1.inOut',
        })

        ScrollTrigger.create({
            trigger: '.gallery',
            start: 'top top',
            end: 'bottom bottom',
            pin: '.right',
            animation: animation,
            scrub: 1.5,
            // markers: true,
        })

        gsap.to('.gallery', {
            duration: 1,
            // backgroundColor: '#f9d2e5aa',
            scrollTrigger: {
                trigger: '.d1',
                scrub: true,
            },
        })

        gsap.to('.gallery', {
            duration: 1,
            // backgroundColor: '#cdd1ffaa',
            scrollTrigger: {
                trigger: '.d2',
                scrub: true,
            },
        })

        gsap.to('.gallery', {
            duration: 1,
            // backgroundColor: '#ffe4d3ee',
            scrollTrigger: {
                trigger: '.d3',
                scrub: true,
            },
        })

        gsap.to('.gallery', {
            duration: 1,
            // backgroundColor: '#ffb399aa',
            scrollTrigger: {
                trigger: '.d4',
                scrub: true,
            },
        })

        // -----

        gsap
            .to('.d1', {
                duration: 1,
                opacity: 0,
                // backgroundColor: '#ffb399aa',
                scrollTrigger: {
                    start: "botttom bottom",
                    end: "top center",
                    trigger: '.d2',
                    scrub: true,
                },
            })
        gsap.to('.d2', {
            duration: 1,
            opacity: 0,
            // backgroundColor: '#ffb399aa',
            scrollTrigger: {
                start: "botttom bottom",
                end: "top center",
                trigger: '.d3',
                scrub: true,
            },
        })
        gsap.to('.d3', {
            duration: 1,
            opacity: 0,
            // backgroundColor: '#ffb399aa',
            scrollTrigger: {
                start: "botttom bottom",
                end: "top center",
                trigger: '.d4',
                scrub: true,
            },
        })
        gsap.to('.d4', {
            duration: 1,
            opacity: 0,
            // backgroundColor: '#ffb399aa',
            scrollTrigger: {
                start: "botttom bottom",
                end: "top center",
                trigger: '.spacer',
                scrub: true,
            },
        })


    }

    useEffect(() => {
        g();
    }, [])


    return (
        <>
            {/* <div class="spacer">
                <div>Take a closer look.</div>
            </div> */}

            <div class="gallery">
                <div class="left">
                    <div class="detailsWrapper">
                        <div class="details d1">
                            <div className='header'>Natural Titanium</div>
                        </div>

                        <div class="details d2">
                            <div className='header'>Blue Titanium</div>
                        </div>

                        <div class="details d3">
                            <div className='header'>White Titanium</div>
                        </div>

                        <div class="details d4">
                            <div className='header'>Black Titanium</div>
                        </div>
                    </div>
                </div>

                <div class="right">
                    <div class="photos">
                        <div class="photos-box">
                            <div class="photo col1">
                                <img src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/natural_titanium__ccl12n7vwwxe_large.jpg" />
                            </div>
                            <div class="photo col2">
                                <img src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/blue_titanium__wsqgpa9i1822_large.jpg" />
                            </div>
                            <div class="photo col3">
                                <img src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/white_titanium__b3fwwp6zrrhy_large.jpg" />
                            </div>
                            <div class="photo col4">
                                <img src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/black_titanium__e5htsz029002_large.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="spacer">
            </div>
        </>
    )
}

export default GsapPage