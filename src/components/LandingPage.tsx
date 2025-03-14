import logo from "../assets/chronoIcon.png";
import sticky from "../assets/sticky.png";
import check from "../assets/check.png";
import tasks from "../assets/tasks.png";
import meetings from "../assets/meetings.png";
import stopwatch from "../assets/stopwatch.png";
import gmail from "../assets/gmail.png";
import slack from "../assets/slack.png";
import gcalendar from "../assets/gcalendar.png";


const LandingPage = () => {
    return (
        <>
            <div className="relative flex justify-center items-center h-[90vh]">
                <div className="absolute -z-10 overflow-hidden inset-0 left-5 right-5 h-[95%] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:8px_8px] rounded-3xl border-2 border-[#e5e7eb]">
                    <div className="absolute top-42 -left-20 rotate-15 z-2 bg-white/20 backdrop-blur-[1px] w-[300px] h-[200px] border border-white/20 rounded-xl shadow-lg not-md:hidden"></div>
                    <div className="absolute z-5 top-55 left-20 bg-white h-[100px] w-[100px] flex items-center justify-center rounded-xl shadow-lg not-md:hidden">
                        <img src={check} height={45} width={45} className="z-6 drop-shadow-xl"></img>
                    </div>
                    <img className="relative z-0 rotate-5 drop-shadow-lg not-md:hidden" src={sticky} height={280} width={280}></img>
                    <img src={tasks} height={280} width={280} className="absolute -bottom-5 left-15 -rotate-5 drop-shadow-md not-md:hidden"></img>
                    <img src={meetings} height={280} width={280} className="absolute top-15 -right-20 rotate-10 drop-shadow-lg not-md:hidden"></img>
                    <div className="absolute top-40 -right-60 rotate-20 z-2 bg-white/20 backdrop-blur-[1px] w-[300px] h-[250px] border border-white/20 rounded-xl shadow-lg not-md:hidden"></div>
                    <div className="absolute z-2 top-22 right-45 bg-white h-[100px] w-[100px] rounded-xl flex justify-center items-center shadow-xl -rotate-5 not-md:hidden">
                        <img src={stopwatch} height={60} width={60} className="z-5 drop-shadow-lg"></img>
                    </div>
                    <img src={tasks} height={280} width={280} className="absolute z-0 -bottom-5 right-15 rotate-5 drop-shadow-md not-md:hidden"></img>
                    <div className="absolute z-5 -bottom-22 right-17 bg-[#e5e7eb] h-[280px] w-[270px] rotate-5 poppins-medium not-md:hidden">100+ integrations</div>
                    <div className="absolute z-6 bottom-8 right-55 -rotate-5 bg-white h-[90px] w-[90px] rounded-xl shadow-lg flex justify-center items-center not-md:hidden">
                        <img src={gmail} height={50} width={50} className=""></img>
                    </div>
                    <div className="absolute z-7 bottom-12 right-35 bg-white h-[90px] w-[90px] rounded-xl drop-shadow-2xl flex justify-center items-center not-md:hidden">
                        <img src={slack} height={50} width={50} className=""></img>
                    </div>
                    <div className="absolute z-6 bottom-6 right-20 rotate-7 bg-white h-[90px] w-[90px] rounded-xl drop-shadow-2xl flex justify-center items-center not-md:hidden">
                        <img src={gcalendar} height={50} width={50} className=""></img>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-4">
                    <img src={logo} height={100} width={100} className="shadow-t-md drop-shadow-2xl rounded-2xl"></img>
                    <div className="text-center">
                        <h1 className="text-7xl font-geist not-md:text-3xl">Think, plan, and track</h1>
                        <h2 className="text-7xl font-geist text-[#A6A6A4] not-md:text-3xl">all in one place</h2>
                    </div>
                    <h3 className="text-lg font-geist not-md:text-sm">Efficiently manage your tasks and boost productivity.</h3>
                    <button className="bg-blue-500 text-white rounded-[0.7rem] px-8 py-[12px]">Get free demo</button>
                </div>
            </div>
            <div className="w-screen text-center">Coded by <a href="https://github.com/techie-coder" className="underline">Saswata</a>| <a href="https://dribbble.com/shots/25000009-ChronoTask-Landing-Page" className="underline">Original Design From Dribble</a></div>
        </>
    )
}

export default LandingPage; 