import React from "react";
import { ArrowUpSvg, BarSvg, MessageSvg } from "../../svg";
import ConsulationChart from "./ConsulationChart";
import VsPast from "./VsPast";

const Insights = () => (
  <div className="p-5 box-border overflow-scroll no-scrollbar">
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <h1 className="text-[17px] md:text-[23px]">Insights</h1>
    </div>
    <div className="w-full h-auto flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-1/2 h-auto md:h-[450px] bg-white p-5 box-border rounded-2xl shadow shadow-gray border-[0.5px] border-gray">
        <div className="flex items-center">
          <MessageSvg width={12} height={12} fill="#667085" />
          <p className="ml-2 text-[12px] uppercase font-medium text-colors_02">
            Consultations
          </p>
        </div>
        <ConsulationChart />
        <div className="w-full h-[1px] bg-gray mt-5 rounded-full" />
        <div className="w-full h-auto md:h-[30px] flex items-center flex-wrap md:flex-nowrap mt-3">
          {[
            { color: "bg-gray", label: "Incoming" },
            { color: "bg-answer", label: "Answered" },
            { color: "bg-expert", label: "Experts online" },
          ].map(({ color, label }, index) => (
            <div key={index} className="flex gap-3 items-center m-2">
              <p className={`w-[20px] h-[4px] ${color} rounded-full`} />
              <p className="text-[11px] text-colors_02">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-auto md:h-[450px] bg-white flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2 lg:w-1/2 h-full p-5 box-border rounded-2xl shadow shadow-gray border-[0.5px] border-gray">
          <div className="flex items-center">
            <BarSvg width={12} height={12} fill="#667085" />
            <p className="ml-2 text-[12px] uppercase font-medium text-colors_02">
              VS PAST PERIOD
            </p>
          </div>
          <VsPast />
          <div className="w-full h-[1px] bg-gray mt-5 rounded-full" />
          <div className="w-full h-auto md:h-[30px] flex flex-wrap md:flex-nowrap items-center mt-3 gap-3">
            {[
              { color: "bg-icon", label: "Consultations" },
              { color: "bg-mid-bar", label: "Orders closed" },
            ].map(({ color, label }, index) => (
              <div key={index} className="flex gap-3 items-center m-3 md:m-0">
                <p className={`w-[20px] h-[4px] ${color} rounded-full`} />
                <p className="text-[11px] text-colors_02">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 h-[410px] md:h-full  rounded-2xl shadow shadow-gray border-[0.5px] border-gray relative overflow-hidden">
          <div className="w-full h-full overflow-hidden bg-[#109c89] absolute top-0 left-0 right-0 bottom-0 z-0">
            <div className="bg-gradient-to-br from-[#2db19f] to-[#30ae9c] absolute w-[800px] aspect-square rounded-full bottom-[30%] -right-1/3"></div>
            <div className="bg-gradient-to-br from-[#2eb7a3] to-[#39b8a7] absolute w-[400px] aspect-square rounded-full bottom-[50%] right-[20%]"></div>
            <div className="bg-gradient-to-br from-[#15b69e] to-[#25b6a1] absolute w-[200px] aspect-square rounded-full -top-[15%] -left-[25%]"></div>
          </div>

          <div className="absolute top-0 left-0 bottom-0 right-0 p-5 box-border">
            <div className="flex items-center z-10">
              <MessageSvg width={12} height={12} fill="#CCFBEF" />
              <p className="ml-2 text-[12px] uppercase font-medium text-icon">
                FORECASTS
              </p>
            </div>

            <div className="w-full h-full flex flex-col justify-center gap-5 z-10">
              {[
                {
                  value: "+15%",
                  description:
                    "forecasted increase in your sales closed by the end of the current month",
                },
                {
                  value: "+20%",
                  description:
                    "forecasted increase in consultations by the end of the current month",
                },
              ].map((forecast, index) => (
                <div key={index} className="w-full">
                  <div className="w-full h-20 flex items-center gap-10">
                    <h1 className="text-[40px] md:text-[50px] text-white font-medium">
                      {forecast.value}
                    </h1>
                    <ArrowUpSvg
                      width={32}
                      height={32}
                      fill="#fff"
                      className="mb-4"
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-[14px] mt-1 mb-2 text-white pr-5 box-border font-light">
                    {forecast.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Insights;
