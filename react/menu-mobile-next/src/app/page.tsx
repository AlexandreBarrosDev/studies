'use client';

import MenuItems from "@/components/MenuItems";
import { menuItems } from "@/constants";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <main className="flex flex-col w-full h-full">
      <div className="flex justify-between items-center w-full h-24 px-4 bg-slate-900 text-slate-100 fixed">
        <h1>Menu Mobile</h1>
        <div className="flex flex-col gap-10 mt-40 right-0 p-10 ">
          <button onClick={toggle}className="flex flex-col w-8 h-6 justify-center items-center fixed top-0 right-0">
            <span className="w-full h-0.5 bg-slate-100 after:w-full before:w-full after:h-0.5
            before:h-0.5 after:bg-slate-100 before:bg-slate-100 after:absolute before:absolute
            after:top-0 before:bottom-0 after:left-0 before:left-0 rounded-md after:rounded-md before:rounded-md"></span>
          </button>
          <ul className={`bg-slate-900 p-4 transition-all ease-in-out duration-300 w-full ${isOpen ? "opacity-100" : "opacity-0"}`}>
            {
              menuItems.map((item, index) => (
                <MenuItems 
                  key={index} 
                  url={item.url} 
                  label={item.label}
                />))
            }
          </ul>
        </div>
      </div>
      <div id="um" className="w-full h-screen bg-blue-300"></div>
      <div id="dois" className="w-full h-screen bg-green-300"></div>
      <div id="tres" className="w-full h-screen bg-red-300"></div>
    </main>
  );
}
