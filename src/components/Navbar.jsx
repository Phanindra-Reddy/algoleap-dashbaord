import { div } from "framer-motion/client";
import { Bell, CircleQuestionMark, Globe, ChevronDown, CircleUser, Settings, LogOut } from "lucide-react";
import { useState } from "react";


const Navbar = ({ collapsed, setCollapsed }) => {
    const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white border-b border-gray-300 px-6 py-3 flex items-center justify-between">
      {/* Header */}

      {/*Company Logo*/}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-10 h-10 rounded-md text-white bg-orange-400 p-0.5 cursor-pointer"
        >
          TR
        </button>

        {!collapsed && (
          <div className="flex items-center justify-center gap-3">
            <div className="bg-gray-300 w-0.5 h-10"></div>
            <div>
              <h1 className="text-lg font-bold">Knowledge Management</h1>
              <p className="text-xs font-light text-gray-500">
                Enterprise Search Platform
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Global Serach */}
      <div className="w-1/3 relative">
        <div className=" absolute left-2 top-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-search-icon lucide-search text-gray-400"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search across all knowledge repositories..."
          className="w-full border-2 bg-gray-100/50 border-gray-200 focus-within:bg-white  rounded-lg px-10 py-2 text-sm focus-within:border-gray-400"
        />
        <button className=" absolute top-1.5 right-2 bg-white border rounded-sm px-1 border-gray-300 text-gray-400 cursor-pointer">
          ⌘K
        </button>
      </div>

      {/* User Profile and notifications */}
      <div className="flex items-center gap-4">
        <Globe
          size={20}
          className="text-gray-500 cursor-pointer hover:text-gray-600"
        />
        <CircleQuestionMark
          size={20}
          className="text-gray-500 cursor-pointer hover:text-gray-600"
        />
        <div className=" relative">
          <Bell
            size={20}
            className="text-gray-500 cursor-pointer hover:text-gray-600"
          />
          <small className=" absolute -top-3 -right-3 w-4 h-4 rounded-full bg-red-400 text-white text-[10px] text-center">
            3
          </small>
        </div>
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100"
          >
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
              SA
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-800">
                System Administrator
              </p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-start gap-2 cursor-pointer">
                    <CircleUser size={16} />
                    Profile
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-start gap-2 cursor-pointer">
                    <Settings size={16} />
                    Settings
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-start gap-2 cursor-pointer">
                    <LogOut size={16} />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
