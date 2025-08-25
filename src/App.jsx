import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar (full width) */}
      <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Sidebar + Main content */}
      <div className="flex flex-1">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="flex-1 bg-gray-50 p-4 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default App;
