import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const App = () => {
    const containerRef = useRef(null)
    useGSAP(() => {
        const folders = document.querySelectorAll(".folder");
        const folderWrappers = document.querySelectorAll(".folder-wrapper");
        let isMobile = window.innerWidth < 1000;
        folders.forEach((folder, index) => {
            const previewImages = folder.querySelectorAll(".folder-preview-img");
            folder.addEventListener("mouseenter", () => {
                if (isMobile) return;
                folders.forEach((siblingFolder) => {
                    if (siblingFolder !== folder) {
                        siblingFolder.classList.add("disabled");
                    }
                });
                gsap.to(folderWrappers[index], {
                    y: 0, duration: 0.25, ease: "back.out(1.7)",
                });
                previewImages.forEach((img, imgIndex) => {

                    let rotation;
                    if (imgIndex === 0) {
                        rotation = gsap.utils.random(-20, -10);
                    } else if (imgIndex === 1) {
                        rotation = gsap.utils.random(-10, 10);
                    } else {
                        rotation = gsap.utils.random(10, 20);
                    }

                    gsap.to(img, {
                        y: "-100%", rotation: rotation, duration: 0.25, ease: "back.out(1.7)", delay: imgIndex * 0.025,
                    });
                });

            })
            folder.addEventListener("mouseleave", () => {
                if (isMobile) return;

                folders.forEach((siblingFolder) => {
                    siblingFolder.classList.remove("disabled");
                });

                gsap.to(folderWrappers[index], {
                    y: 25, duration: 0.25, ease: "back.out(1.7)",
                });

                previewImages.forEach((img, imgIndex) => {
                    gsap.to(img, {
                        y: "0%", rotation: 0, duration: 0.25, ease: "back.out(1.7)", delay: imgIndex * 0.05,
                    });
                });
            });

        })
        window.addEventListener("resize", () => {
            const currentBreakpoint = window.innerWidth < 1000;
            if (currentBreakpoint !== isMobile) {
                isMobile = currentBreakpoint;
                gsap.set(folderWrappers, {y: isMobile ? 0 : 25});

                folders.forEach((folder) => {
                    folder.classList.remove("disabled");
                });
                const allPreviewImages = document.querySelectorAll(".folder-preview-img");
                gsap.set(allPreviewImages, {y: "0%", rotation: 0});
            }
        });
    }, {scope: containerRef})
    return (<>
        <nav>
            <p>Design Ledger</p>
            <p>Experiment 0492</p>
        </nav>
        <div ref={containerRef} className="folders w-full h-svh flex flex-col justify-end overflow-clip">
            <div className="row relative w-full flex">
                <div className="folder variant-1">
                    <div className="folder-preview">
                        <div className="folder-preview-img"><img src="/img-1.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-2.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-3.jpg"/></div>
                    </div>
                    <div className="folder-wrapper">
                        <div className="folder-index"><p>01</p></div>
                        <div className="folder-name"><h1>figures</h1></div>
                    </div>
                </div>
                <div className="folder variant-2">
                    <div className="folder-preview">
                        <div className="folder-preview-img"><img src="/img-4.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-5.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-6.jpg"/></div>
                    </div>
                    <div className="folder-wrapper">
                        <div className="folder-index"><p>02</p></div>
                        <div className="folder-name"><h1>persona</h1></div>
                    </div>
                </div>
            </div>
            <div className="row relative w-full flex">
                <div className="folder variant-2">
                    <div className="folder-preview">
                        <div className="folder-preview-img"><img src="/img-7.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-8.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-9.jpg"/></div>
                    </div>
                    <div className="folder-wrapper">
                        <div className="folder-index"><p>03</p></div>
                        <div className="folder-name"><h1>form</h1></div>
                    </div>
                </div>
                <div className="folder variant-3">
                    <div className="folder-preview">
                        <div className="folder-preview-img"><img src="/img-10.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-11.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-12.jpg"/></div>
                    </div>
                    <div className="folder-wrapper">
                        <div className="folder-index"><p>04</p></div>
                        <div className="folder-name"><h1>chromatic</h1></div>
                    </div>
                </div>
            </div>
            <div className="row relative w-full flex">
                <div className="folder variant-1">
                    <div className="folder-preview">
                        <div className="folder-preview-img"><img src="/img-13.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-14.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-15.jpg"/></div>
                    </div>
                    <div className="folder-wrapper">
                        <div className="folder-index"><p>05</p></div>
                        <div className="folder-name"><h1>mythos</h1></div>
                    </div>
                </div>
                <div className="folder variant-2">
                    <div className="folder-preview">
                        <div className="folder-preview-img"><img src="/img-16.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-17.jpg"/></div>
                        <div className="folder-preview-img"><img src="/img-18.jpg"/></div>
                    </div>
                    <div className="folder-wrapper">
                        <div className="folder-index"><p>06</p></div>
                        <div className="folder-name"><h1>kinetics</h1></div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default App
