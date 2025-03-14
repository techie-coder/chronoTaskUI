import { useState } from "react";
import icon from "../assets/chronoIcon.png";
import menuIcon from "../assets/menu.png"
import crossIcon from "../assets/cross.png";

const NavBar = () => {

    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu);
    }

    return (
        <>
            <nav className="w-full flex justify-between p-5">
                <span>
                    <a href="#" className="flex justify-between gap-2 items-center">
                        <img src={icon} height={50} width={50} alt="logo"></img>
                        <span className="text-2xl font-geist font-bold">ChronoTask</span>
                    </a>
                </span>
                <span className="flex items-center justify-center not-md:hidden">
                    <ul className="flex flex-row gap-7 text-sm font-geist">
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </span>
                <span className="flex items-center justify-center gap-7 not-md:hidden">
                    <button className="text-sm font-geist">
                        Sign In
                    </button>
                    <button className="mx-auto text-sm font-geist">
                        <div className="p-[0.15rem] rounded-xl bg-gradient-to-tr from-slate-400 via-stone-50 to-violet-400">
                            <div className="px-[20px] py-[5px] rounded-[0.70rem] h-full w-full items-center justify-center bg-white back">
                                Get Demo
                            </div>
                        </div>
                    </button>
                </span>
                <button className="md:hidden" onClick={handleClick}>
                    <img src={menu ? crossIcon : menuIcon} height={30} width={30}></img>
                </button>
            </nav >
            {menu ? <div className="absolute bg-white/20 backdrop-blur-md z-1  h-screen w-screen text-3xl font-geist flex flex-col justify-center items-center space-y-4">
                <ul>Features</ul>
                <ul>Solutions</ul>
                <ul>Resources</ul>
                <ul>Pricing</ul>
                <ul>Sign In</ul>
                <ul>Get Demo</ul>
            </div> : <></>}
        </>
    )
}

export default NavBar;