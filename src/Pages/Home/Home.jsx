import { useState, useEffect } from "react";

import {  Header, Glance, Order, Insights } from "../../components";

function Home() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 450;

      if (isSmall) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className=" h-full"
      style={{
        width: isOpen ? "calc(100% - 64px)" : "100%",
      }}
    >
      <Header />
      <div
        className=" w-full p-5 md:p-8 box-border"
        style={{ height: "calc(100vh - 88px)" }}
      >
        <div className="w-full h-full bg-white rounded-md border-[0.5px] border-gray overflow-scroll no-scrollbar">
          <Glance />
          <Insights />
          <Order />
        </div>
      </div>
    </div>
  );
}

export default Home;
