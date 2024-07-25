import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

function directory(){
    alert("App Directory");
}

export default function AppDirectory(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = (e: React.MouseEvent) => {
        // e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    // this is menu basically... don't mess with this code
    return (
        <div className="app-directory-container" ref={menuRef}>

            <Image src="/app_directory.svg" alt="Logo" width={40} height={40} style={{}} onClick={toggleMenu} className="taskbar-elements" />
            {isMenuOpen && (<div className="app-directory-menu">
            
                <div style={{display: "flex",marginBottom:"10px"}} className="menu">
                    <div><Image src="/report_upload.svg" alt="Logo" width={40} height={40}  style={{marginLeft:"10px"} } className="menu-svg" /></div>
                    <div style={{marginLeft: "10px", marginTop: "5px",marginRight:"10px"}} className="menu"> upload/view report</div>
                </div>
                <div style={{display: "flex",marginBottom:"10px"}} className="menu">
                    <div>
                        <Image src="/medical_record_black.svg" alt="Logo" width={40} height={40}  style={{marginLeft:"10px"}} className="menu-svg"/></div>
                    <div style={{marginLeft: "10px", marginTop: "5px",marginRight:"10px"}} className="menu">medical record</div>
                </div>
                <hr />
                <div style={{fontSize:"14px"}}>we would be adding more apps soon :)</div>
            </div>)}
        </div>
    )
    
}