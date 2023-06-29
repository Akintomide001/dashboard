import { useState } from "react"
import { Icon } from '@iconify/react';
import menuAlt3 from '@iconify/icons-dashicons/menu-alt3';
import { useEffect, useRef, } from "react";
import Sidebar from "./sidebar";

export default function Dropdown() {
    const showNavMenu = useRef();
    const hideNavMenu = useRef()
    const navMenu = useRef();
    const [currentlyShowing, setCurrentlyShowing] = useState(false)

    useEffect(() => {
        if (!currentlyShowing) {
            hideNavMenu.current.style.display = "none"
            showNavMenu.current.style.display = "block"
        } else {
            hideNavMenu.current.style.display = "block"
            showNavMenu.current.style.display = "none"
        }
    }, [currentlyShowing])
    return (

        <>
            <div className="nav-menu" style={{display:"none"}} ref={navMenu}>
                <Sidebar />

            </div>
            <div>
                <div ref={hideNavMenu} onClick={() => {
                    navMenu.current.style.display = "none";
                    setCurrentlyShowing(!currentlyShowing)
                }} className="close-menu"><Icon icon={menuAlt3} className="dropdown0" /></div>
                <div ref={showNavMenu} onClick={() => {
                    navMenu.current.style.display = "flex";
                    setCurrentlyShowing(!currentlyShowing)
                }} className="open-menu"><Icon icon={menuAlt3} className="dropdown0" /></div>
                {/*mobile menu*/}
                {/*mobile menu end*/}
            </div>
        </>
    )
}