import React, { useEffect, useState, useMemo, useCallback } from "react";
import { LogoSvg, HomeSvg, MessageSvg, UserSvg, SettingSvg } from "../../svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ currentIndex, setCurrentIndex }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigation = useNavigate();
  const Options = useMemo(
    () => [
      {
        name: "Home",
        path: "home/summary",
        element: (isActive) => (
          <HomeSvg
            width={20}
            height={20}
            fill={isActive ? "#115E56" : "#CCFBEF"}
          />
        ),
      },
      {
        name: "Message",
        path: "chats",
        element: (isActive) => (
          <MessageSvg
            width={20}
            height={20}
            fill={isActive ? "#115E56" : "#CCFBEF"}
          />
        ),
      },
      {
        name: "User",
        path: "groups",
        element: (isActive) => (
          <UserSvg
            width={20}
            height={20}
            fill={isActive ? "#115E56" : "#CCFBEF"}
          />
        ),
      },
    ],
    []
  );

  const handleResize = useCallback(() => {
    const isSmall = window.innerWidth < 450;
    setIsOpen(!isSmall);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const togglePage = (index, path) => {
    setCurrentIndex(index);
    navigation(`/${path}`);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div
      className={`${
        isOpen ? "w-16" : "w-0"
      } transition-all duration-300 h-screen bg-side-bar flex justify-center items-center relative side_responsive z-20`}
    >
      <span
        className={`${isOpen ? "menu side_btn_close" : "menu side_btn"}`}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <ChevronLeft size={20} color="#115E56" />
        ) : (
          <ChevronRight size={20} color="#115E56" />
        )}
      </span>
      {isOpen && (
        <div className="w-10 h-screen relative">
          <div className="w-full h-22 flex justify-center items-center">
            <LogoSvg
              width={100}
              height={100}
              fill="currentColor"
              className="text-side-bar"
            />
          </div>
          <div className="w-full h-px mt-2 mb-8 flex justify-center">
            <div className="w-5/6 h-px rounded bg-mid-bar"></div>
          </div>
          <div className="w-full h-48">
            {Options.map((option, index) => (
              <div
                key={index}
                onClick={() => togglePage(index, option.path)}
                className={`w-full h-11 flex justify-center items-center rounded-lg mt-5 mb-5 cursor-pointer ${
                  currentIndex === index ? "bg-white" : "bg-transparent"
                }`}
              >
                {option.element(currentIndex === index)}
              </div>
            ))}
          </div>
          <div className="w-full h-16 flex justify-center items-center absolute bottom-0 cursor-pointer">
            <div
              className={`w-full h-[45px] flex justify-center items-center rounded-md ${
                currentIndex === 3 ? "bg-white" : "bg-transparent"
              } cursor-pointer`}
              onClick={()=>togglePage(3,'setting')} 
            >
              <SettingSvg fill={currentIndex === 3 ? "#115E56" : "#CCFBEF"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
