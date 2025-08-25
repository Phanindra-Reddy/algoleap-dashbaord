import { useState } from "react";
import {
  Home,
  FileText,
  Upload,
  Users,
  Globe,
  ChevronDown,
  ChevronRight,
  Menu,
  ChartColumn,
  Settings,
  FolderOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({collapsed}) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState (null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Tooltip component
  const Tooltip = ({ label }) => (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      className="absolute left-16 bg-gray-900 text-white text-xs rounded px-2 py-1 shadow-lg z-50 whitespace-nowrap"
    >
      {label}
    </motion.div>
  );

  return (
    <motion.aside
      animate={{ width: collapsed ? "4rem" : "16rem" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-white border-r border-gray-300 p-4 flex flex-col relative text-gray-500"
    >
      {/* Nav */}
      <nav className="flex flex-col gap-2 text-sm relative">
        {/* Dashboard */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredItem("Dashboard")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button className="flex items-center gap-2 p-2 bg-orange-400 text-white rounded-md hover:bg-orange-400 font-medium w-full cursor-pointer">
            <ChartColumn size={18} />
            {!collapsed && (
              <p>
                Dashboard
                <span className="bg-white text-orange-400 ml-2 text-[10px] px-2 py-1 rounded-full">
                  New
                </span>
              </p>
            )}
          </button>
          {collapsed && hoveredItem === "Dashboard" && (
            <Tooltip label="Dashboard" />
          )}
        </div>

        {/* Content Management */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredItem("Content")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button
            onClick={() => toggleMenu("content")}
            className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100"
          >
            <span className="flex items-center gap-2">
              <FolderOpen size={18} />
              {!collapsed && <span>Content Management</span>}
            </span>
            {!collapsed &&
              (openMenu === "content" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
          </button>
          {collapsed && hoveredItem === "Content" && (
            <Tooltip label="Content Management" />
          )}

          <AnimatePresence>
            {!collapsed && openMenu === "content" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-6 mt-2 flex flex-col gap-2"
              >
                {/* Sub-item: All Documents */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredItem("AllDocs")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 w-full cursor-pointer">
                    <FileText size={16} /> {!collapsed && "All Documents"}
                  </button>
                  {collapsed && hoveredItem === "AllDocs" && (
                    <Tooltip label="All Documents" />
                  )}
                </div>

                {/* Sub-item: Upload Documents */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredItem("UploadDocs")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 w-full cursor-pointer border bg-orange-100 border-orange-400">
                    <Upload size={16} /> {!collapsed && "Upload Documents"}
                  </button>
                  {collapsed && hoveredItem === "UploadDocs" && (
                    <Tooltip label="Upload Documents" />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Administration */}
        <div
          className="relative"
          onMouseEnter={() => setHoveredItem("Admin")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <button
            onClick={() => toggleMenu("admin")}
            className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100"
          >
            <span className="flex items-center gap-2">
              <Settings size={18} />
              {!collapsed && <span>Administration</span>}
            </span>
            {!collapsed &&
              (openMenu === "admin" ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              ))}
          </button>
          {collapsed && hoveredItem === "Admin" && (
            <Tooltip label="Administration" />
          )}

          <AnimatePresence>
            {!collapsed && openMenu === "admin" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-6 mt-2 flex flex-col gap-2"
              >
                {/* Sub-item: User Management */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredItem("Users")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 w-full cursor-pointer">
                    <Users size={16} /> {!collapsed && "User Management"}
                  </button>
                  {collapsed && hoveredItem === "Users" && (
                    <Tooltip label="User Management" />
                  )}
                </div>

                {/* Sub-item: SharePoint Online */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredItem("SharePoint")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 w-full cursor-pointer whitespace-nowrap">
                    <Globe size={16} /> {!collapsed && "SharePoint Online"}
                    {!collapsed && (
                      <span className="ml-auto text-green-600 bg-green-200 px-1 rounded-md text-[10px]">
                        Active
                      </span>
                    )}
                  </button>
                  {collapsed && hoveredItem === "SharePoint" && (
                    <Tooltip label="SharePoint Online (Active)" />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
