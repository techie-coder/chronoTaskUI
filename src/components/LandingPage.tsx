import logo from "../assets/chronoIcon.png";
import sticky from "../assets/sticky.png";

const LandingPage = () => {
    return (
        <>
            <div className="relative flex justify-center items-center h-[90vh]">
                <div className="absolute -z-10 inset-0 left-5 right-5 h-[95%] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:8px_8px] rounded-3xl border-2 border-[#e5e7eb]">
                    <img className="rotate-5 drop-shadow-lg" src={sticky} height={300} width={300}></img>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <img src={logo} height={100} width={100} className="shadow-t-md shadow-2xl rounded-2xl"></img>
                    <div className="text-center">
                        <h1 className="text-7xl font-geist">Think, plan, and track</h1>
                        <h2 className="text-7xl font-geist text-[#A6A6A4]">all in one place</h2>
                    </div>
                    <h3 className="text-lg font-geist">Efficiently manage your tasks and boost productivity.</h3>
                    <button className="bg-blue-500 text-white rounded-[0.7rem] px-8 py-[12px]">Get free demo</button>
                </div>
            </div>
        </>
    )
}

export default LandingPage; 