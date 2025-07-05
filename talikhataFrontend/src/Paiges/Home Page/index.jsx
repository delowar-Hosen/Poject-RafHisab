import React from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import WaterBackground from "../../Reuseable Components/Water Background";
import AddPepole from "../../Components/Add";
import Transaction from "../../Components/Transaction";
import Sell from "../../Components/Sell";
import Preview from "../../Components/Preview";
import Buy from "../../Components/Buy";
import Stock from "../../Components/Stock";
import Cash from "../../Components/Cash";
import Message from "../../Components/Message";
import BackupCheck from "../../Components/Backup";

const Home = () => {
  return (
    <WaterBackground>
      <div>
        <Navbar />
        <div className=" flex ">
          <div className=" w-[19%]">
            <Sidebar />
          </div>
          <div className=" w-[81%] flex justify-between  items-center p-2 flex-wrap ">
            <div className="w-[32%]">
              <AddPepole />
            </div>{" "}
            <div className="w-[32%]">
              <Transaction />
            </div>{" "}
            <div className="w-[32%]">
              {/* <Sell /> */}
              <Preview />
            </div>
            <div className="w-[32%]">
              <Buy />
              {/* <Preview /> */}
            </div>{" "}
            <div className="w-[32%]">
              <Stock />
            </div>{" "}
            <div className="w-[32%]">
              {/* <Cash /> */}
              {/* <Preview /> */}
              {/* <Message /> */}
              <BackupCheck />
            </div>
          </div>
        </div>
      </div>
    </WaterBackground>
  );
};

export default Home;
