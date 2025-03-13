import icon from "../assets/chronoIcon.png";

const NavBar = () => {
    return (
        <>
            <nav className="w-full flex justify-between p-5">
                <span>
                    <a href="#" className="flex justify-between gap-2 items-center">
                        <img src={icon} height={50} width={50} alt="logo"></img>
                        <span className="text-2xl font-geist font-bold">ChronoTask</span>
                    </a>
                </span>
                <span className="flex items-center justify-center">
                    <ul className="flex flex-row gap-7 text-sm font-geist">
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </span>
                <span className="flex items-center justify-center gap-7">
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
            </nav >
        </>
    )
}

export default NavBar;