import React, { useState, useMemo } from "react";
import {
  DownSvg,
  MessageSvg,
  ArrowUpSvg,
  TagSvg,
  ConversionSvg,
  SaleValueSvg,
  OrderValueSvg,
  PiggyBankSvg,
  ArrowDownSvg,
} from "../../svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Glance = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("7 days");

  const data = useMemo(() => [
    {
      name: "Consultations",
      val: "24",
      per: "15",
      type: "increase",
      element: <MessageSvg width={12} height={12} fill="#667085" />,
    },
    {
      name: "ORDERS PLACED",
      val: "12",
      per: "15",
      type: "decrease",
      element: <TagSvg width={12} height={12} fill="#667085" />,
    },
    {
      name: "CONVERSION",
      val: "50%",
      per: "15",
      type: "decrease",
      element: <ConversionSvg width={12} height={12} fill="#667085" />,
    },
    {
      name: "TOTAL SALES VALUE",
      val: "$2400",
      per: "15",
      type: "increase",
      element: <SaleValueSvg width={12} height={12} fill="#667085" />,
    },
    {
      name: "AVG ORDER VALUE",
      val: "$240",
      per: "15",
      type: "increase",
      element: <OrderValueSvg width={12} height={12} fill="#667085" />,
    },
    {
      name: "COMMISSION PAID",
      val: "$240",
      per: "15",
      type: "increase",
      element: <PiggyBankSvg width={12} height={12} fill="#667085" />,
    },
  ], []);

  const handleSelect = (period) => setSelectedPeriod(period);

  return (
    <div className="w-full h-auto">
      <div className="w-full h-16 md:h-20 flex items-center pl-5 justify-between">
        <h1 className="text-[17px] md:text-[23px]">At a glance</h1>
        <div className="mr-5 border-[0.5px] pl-3 pr-2 py-2 rounded-md">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex justify-center items-center cursor-pointer">
                <p className="text-sm pr-1 text-colors_01">{selectedPeriod}</p>
                <DownSvg width={18} height={18} fill="#212636" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2">
              {["7 days", "15 days", "30 days"].map((period) => (
                <DropdownMenuItem
                  key={period}
                  onClick={() => handleSelect(period)}
                >
                  {period}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="w-full p-5 box-border grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {data.map(({ name, val, per, type, element }, index) => (
          <div
            className="p-5 rounded-xl border-[0.5px] border-gray flex flex-col justify-center gap-2 box-border shadow shadow-gray"
            key={index}
          >
            <div className="flex items-center">
              {element}
              <p className="ml-2 text-[12px] uppercase font-medium text-colors_02">
                {name}
              </p>
            </div>
            <h1 className="text-[23px] md:text-[30px]">{val}</h1>
            <div className="flex items-center">
              {type === "increase" ? (
                <ArrowUpSvg width={20} height={20} fill="#15B79F" strokeWidth="0" strokecolor="#15B79F" />
              ) : (
                <ArrowDownSvg width={20} height={20} />
              )}
              <p className="ml-2 text-[14px] text-colors_02">{per}%</p>
              <p className="ml-2 text-[14px] text-colors_02">{type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glance;
