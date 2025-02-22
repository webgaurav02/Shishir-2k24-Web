import "./events.css";
import EventCard from "./components/eventCard";

export default function Events() {
  return (
    <>
      <div className="background bg-[#FDF6E9] h-full w-screen flex flex-col items-center ">
        <div className="flex justify-center textStroke w-5/6 h-36 mt-20">
          <div className="w-80">EXPLORE THE SHISHIR EVENTS !</div>
        </div>
        <div className="flex justify-center font-bernier text-justify text-[#E03932] text-[40px] w-5/6 ">
            <div className="w-80">FREE AND EXCLUSIVE</div>
        </div>
        <div className="border-[1px] w-80 h-40 border-black mt-10 flex flex-col items-center">
          <div className="h-2/5">The four types of events are:</div>
          <div className="w-11/12 h-3/5 border-t-[1px] border-black flex flex-wrap py-2 gap-x-2 gap-y-1">
            <div className="yellowButton">free registration</div>
            <div className="yellowButton">exclusive entry</div>
            <div className="yellowButton">free for all</div>
            <div className="yellowButton">registration</div>
          </div>
        </div>
        <div className="border-dotted border-y-4 border-[#4EB7B4] w-full h-8 mt-10"></div>
        <div className="flex justify-center font-bernier text-justify text-[#E03932] text-[32px] w-5/6 mt-10">
            <div className="w-80">EVENTS ARE DISPLAYED IN CHRONOLOGICAL ORDER</div>
        </div>
        <div className="flex border-[1px] border-black bg-white w-5/6 h-12 my-8 px-4 items-center">
          <div className=" w-1/2 font-blogger">showing all events</div>
          <div className=" w-1/2 text-end"><u>filters</u></div>
        </div>
        <div className="flex flex-col w-5/6 space-y-5">
          <EventCard eName="Model United Nations" 
                     eTime="10:30am" 
                     eDesc="A model united nations where a parliament is simulated"
                     eButton="exhibition"
          />
          <EventCard eName="Prom Night" 
                     eTime="10:30pm" 
                     eDesc="Haha you wish"
                     eButton="exhibition"
          />
          <EventCard eName="Ballroom Dance" 
                     eTime="10:30am" 
                     eDesc="Ball dance supremecy"
                     eButton="exhibition"
          />
          <EventCard eName="Model United Nations" 
                     eTime="10:30am" 
                     eDesc="A model united nations where a parliament is simulated"
                     eButton="exhibition"
          />
        </div>
        
      </div>
    </>
  );
}
