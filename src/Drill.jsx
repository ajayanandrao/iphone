import React, { useEffect, useRef } from 'react'
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    timeout,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    DiamondPlugin,
    FrameFadePlugin,
    GLTFAnimationPlugin,
    GroundPlugin,
    BloomPlugin,
    TemporalAAPlugin,
    AnisotropyPlugin,
    GammaCorrectionPlugin,

    // addBasePlugins,
    TweakpaneUiPlugin,
    AssetManagerBasicPopupPlugin,
    CanvasSnipperPlugin,

} from "webgi";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Lenis from '@studio-freight/lenis';
import SecOne from './SecOne/SecOne';
import SecTwo from './SecTwo/SecTwo';
import SecThree from './SecThree/SecThree';
import SecFour from './SecFour/SecFour';
import GsapPage from './GsapPage';


const Drill = () => {
    const canvasRef = useRef(null);

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical', // vertical, horizontal
        gestureDirection: 'vertical', // vertical, horizontal, both
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    lenis.stop();

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);


    async function setupViewer() {

        // Initialize the viewer
        const viewer = new ViewerApp({
            // canvas: document.getElementById('webgi-canvas'),
            canvas: canvasRef.current,
            useRgbm: true
        });

        const manager = await viewer.addPlugin(AssetManagerPlugin);
        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        await viewer.addPlugin(GBufferPlugin);
        await viewer.addPlugin(new ProgressivePlugin(32));
        await viewer.addPlugin(new TonemapPlugin(true));
        await viewer.addPlugin(GammaCorrectionPlugin);
        await viewer.addPlugin(SSRPlugin);
        await viewer.addPlugin(SSAOPlugin);
        await viewer.addPlugin(BloomPlugin);


        // Lenis Smooth Scrolling 
        const importer = manager.importer;
        importer.addEventListener("onLoad", (ev) => {
            gsap.to('.loader', {
                x: '100%', duration: 1.5, ease: 'power4.inOut', delay: 0.5, onComplete: () => {
                    document.body.style.overflowY = 'auto';
                    lenis.start();

                }
            });
        });

        // Add 3D Glb File

        await viewer.addPlugin(CanvasSnipperPlugin);

        viewer.renderer.refreshPipeline();
        await manager.addFromPath("iphone13Pro.glb");


        const drillMaterial = manager.materials.findMaterialsByName('Drill_01')[0];

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true; // in case its set to false in the glb

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

        window.scrollTo(0, 0);

        function setupScrollanimation() {
            const tl = gsap.timeline();

            tl
                .to(position, {
                    x: -8.50,
                    y: 1.45,
                    z: 7.96,

                    // duration: 4,
                    scrollTrigger: {
                        trigger: ".two",
                        // markers: true,
                        start: "top 135% ",
                        end: "top -40%",
                        scrub: true,
                        immediateRender: false
                    },

                    onUpdate,
                })
                .to(target, {
                    x: 1.35,
                    y: 1.40,
                    z: 1.20,

                    // duration: 4,
                    scrollTrigger: {
                        trigger: ".two",
                        // markers: true,
                        start: "top 135%",
                        end: "top -40%",
                        scrub: true,
                        immediateRender: false
                    },
                })

                // three

                .to(position, {
                    x: 6.7059452543,
                    y: 1.00,
                    z: -4.86,

                    duration: 1,
                    scrollTrigger: {
                        trigger: ".three",
                        // markers: true,
                        start: "top 75% ",
                        end: "top 20%",
                        scrub: true,
                        immediateRender: false
                    },

                    onUpdate,
                })
                .to(target, {
                    x: -0.30,
                    y: 1.00,
                    z: 1.51,

                    duration: 1,
                    scrollTrigger: {
                        trigger: ".three",
                        // markers: true,
                        start: "top 75% ",
                        end: "top 20%",
                        scrub: true,
                        immediateRender: false
                    },
                })


                //  text animation

                .to(".secFour-colOne-one", {
                    y: 0,
                    duration: 3,
                    opacity: 1,

                    scrollTrigger: {
                        trigger: ".secFour-colOne",
                        // markers: true,
                        start: "top 80% ",
                        end: "top center",
                        scrub: 2,
                    },

                })
                .to(".secFour-colOne-two", {
                    y: 0,
                    duration: 3,
                    delay: 1,
                    opacity: 1,

                    scrollTrigger: {
                        trigger: ".secFour-colOne",
                        // markers: true,
                        start: "top 80% ",
                        end: "top center",
                        scrub: 2,
                    },

                })

                //  secFour-colTwo

                .to(".secFour-colTwo-one", {
                    y: 0,
                    duration: 3,
                    delay: 1,
                    opacity: 1,

                    scrollTrigger: {
                        trigger: ".secFour-colTwo",
                        // markers: true,
                        start: "top 80% ",
                        end: "top center",
                        scrub: 2,
                    },

                })
                .to(".secFour-colTwo-two", {
                    y: 0,
                    duration: 3,
                    delay: 1,
                    opacity: 1,

                    scrollTrigger: {
                        trigger: ".secFour-colTwo",
                        // markers: true,
                        start: "top 80% ",
                        end: "top center",
                        scrub: 2,
                    },

                })

        }

        setupScrollanimation();

        let needUpdate = true;

        function onUpdate() {
            needUpdate = true;
            // viewer.renderer.resetShadows()
            viewer.setDirty();
        }
        // viewer.addEventListener('preFrame', () => {
        //     if (needUpdate) {
        //         camera.positionUpdated(true);
        //         camera.targetUpdated(true);
        //         needUpdate = false
        //     }
        // });
        viewer.addEventListener('preFrame', () => {
            if (needUpdate) {
                camera.positionTargetUpdated(true);
                needUpdate = false;
            }
        });

    }

    useEffect(() => {
        setupViewer();
    }, [])

    return (
        <>

            <section class=" one">
                <SecOne />
            </section>

            <section class=" two">
                <SecTwo />
            </section>

            <section class=" three">
                <SecThree />
            </section>

            {/* <SecFour /> */}
            <GsapPage />

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


                <div className="footer">© 2024 Copyright: iphone13Pro.com</div>
            </div>

            

            <div id="webgi-canvas-container">
                <canvas id="webgi-canvas" ref={canvasRef}></canvas>
            </div>
        </>
    )
}

export default Drill