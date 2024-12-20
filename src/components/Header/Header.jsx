import React, { useState, useMemo,useEffect } from "react";
import { ChartPieSliceSvg, TagSvg, ChatTeardropSvg } from "../../svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if(path === "/home/summary") setActiveIndex(0);
    else if (path === "/home/sales") setActiveIndex(1)
    else setCurrentIndex(-1)
  }, [location]);

  const Options = useMemo(() => [
    {
      name: "Summary",
      path:"/home/summary",
      element: (isActive) => (
        <ChartPieSliceSvg
          width={20}
          height={20}
          fill={isActive ? "#115E56" : "#8A94A6"}
        />
      ),
    },
    {
      name: "Sales",
      path:"/home/sales",
      element: (isActive) => (
        <TagSvg
          width={20}
          height={20}
          fill={isActive ? "#115E56" : "#8A94A6"}
        />
      ),
    },
    {
      name: "Chats",
      path:"/home/chats",
      element: (isActive) => (
        <ChatTeardropSvg
          width={20}
          height={20}
          fill={isActive ? "#115E56" : "#8A94A6"}
        />
      ),
    },
  ], []);

  return (
    <div className="w-full h-22 px-5 md:px-8 py-8 box-border flex items-center gap-5 border-b-[1px] border-gray">
      {Options.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className={`flex justify-center items-center p-2 rounded-full box-border gap-1 cursor-pointer ${
            activeIndex === index ? "bg-icon" : "bg-transparent"
          }`}
          onClick={() => setActiveIndex(index)}
        >
          {item.element(activeIndex === index)}
          <p
            className={`text-[13px] md:text-[15px] ml-1 ${
              activeIndex === index ? "text-active-icon" : "text-[#8A94A6]"
            }`}
          >
            {item.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Header;
