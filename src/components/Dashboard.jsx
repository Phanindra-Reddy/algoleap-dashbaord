import StatCard from "./StatCard";
import {
  dashboardStats,
  highlights,
  documentOverview,
  systemStatus,
} from "../data/mockData";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Activity,
  CircleCheckBig,
  Database,
  Eye,
  File,
  FileText,
  RefreshCcw,
  Search,
  TrendingUp,
  User,
  Users,
} from "lucide-react";

const Dashboard = () => {
  const [range, setRange] = useState("last7");

  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <div className="flex justify-between items-center mb-6">
          {/* Left side */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">
              Welcome back! Here's what's happening with your knowledge
              management system.
            </p>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Dropdown */}
            <select
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="last7">Last 7 days</option>
              <option value="last30">Last 30 days</option>
              <option value="all">All time</option>
            </select>

            {/* Refresh Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow flex items-center justify-center gap-2">
              <RefreshCcw size={16} className="text-white" />
              Refresh
            </button>
          </div>
        </div>
      </motion.div>

      {/* Top Stats */}
      <motion.div
        className="grid grid-cols-4 gap-4 mb-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {dashboardStats.map((s, i) => (
          <StatCard
            key={i}
            title={s.title}
            value={s.value}
            icon={s.icon}
            color={s.color}
            delay={i * 0.15}
          />
        ))}
      </motion.div>

      {/* Highlights */}
      <motion.div
        className="grid grid-cols-3 gap-4 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <TrendingUp size={12} className="text-orange-600" />
            Top Question
          </p>
          <p className="text-md font-bold text-orange-600">
            {highlights.topQuestion.asks} asks
          </p>
          <p className="text-sm text-slate-500">
            {highlights.topQuestion.question}
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Search size={12} className="text-green-600" />
            Top Search
          </p>
          <p className="text-md font-bold text-green-600">
            {highlights.topSearch.count} searches
          </p>
          <p className="text-sm text-slate-500">{highlights.topSearch.query}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Eye size={12} className="text-purple-600" />
            Most Viewed
          </p>
          <p className="text-md font-bold text-purple-600">
            {highlights.mostViewed.views} views
          </p>
          <p className="text-sm text-slate-500">{highlights.mostViewed.file}</p>
        </div>
      </motion.div>

      {/* Document Overview + System Status */}
      <motion.div
        className="grid grid-cols-2 gap-6 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <div>
            <h3 className="font-semibold text-lg text-gray-700 mb-1">
              Document Overview
            </h3>
            <p className="text-gray-400 text-sm">
              Quick actions to set up your knowledge base
            </p>
          </div>
          <ul className="text-sm space-y-4 mt-4">
            <li className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FileText className="text-orange-500" />
                <span className="text-gray-700">Total Documents</span>
              </span>
              <span className="text-gray-700">
                {" "}
                {documentOverview.totalDocuments}
              </span>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Database className="text-green-500" />
                <span className="text-gray-700"> Vector Chunks</span>
              </span>
              <span className="text-gray-700">
                {documentOverview.vectorChunks}
              </span>
            </li>
            <li className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Activity className="text-violet-500" />
                <span className="text-gray-700"> Storage Used</span>
              </span>
              <span className="text-gray-700">
                {documentOverview.storageUsed}
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <div>
            <h3 className="font-semibold text-lg text-gray-700 mb-1">
              System Status
            </h3>
            <p className="text-gray-400 text-sm">
              Quick actions to set up your knowledge base
            </p>
          </div>
          <ul className="text-sm space-y-3 mt-4">
            {systemStatus.map((s, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
              >
                <span className="flex items-center gap-2">
                  <CircleCheckBig className="text-green-500" />
                  <span className="flex flex-col">
                    <span className="text-gray-700 font-semibold">
                      {" "}
                      {s.name}
                    </span>
                    <span className="text-gray-500 text-xs">{s.desc}</span>
                  </span>
                </span>
                <span className="w-fit h-fit text-green-600 text-sm bg-green-200 px-2 py-0.5 rounded-full">
                  {s.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Getting Started */}
      <motion.div
        className=" bg-white p-4 shadow transition rounded-md hover:shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div>
          <h3 className="font-semibold text-lg text-gray-700">
            Getting Started
          </h3>
          <p className="text-gray-400 text-sm">
            Quick actions to set up your knowledge base
          </p>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-4">
          <div className="bg-slate-100 p-6 rounded-xl text-center font-medium transition flex flex-col items-center justify-center">
            <div className="">
              <FileText className="text-orange-500" />
            </div>
            <p className="mt-4 text-sm text-black/60 font-medium">
              Upload Documents
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl text-center font-medium transition flex flex-col items-center justify-center">
            <div className="">
              <FileText className="text-green-500" />
            </div>
            <p className="mt-4 text-sm text-black/60 font-medium">
              All Documents
            </p>
          </div>

          <div className="bg-slate-100 p-6 rounded-xl text-center font-medium transition flex flex-col items-center justify-center">
            <div className="">
              <Users className="text-violet-500" />
            </div>
            <p className="mt-4 text-sm text-black/60 font-medium">
              Manage Users
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Dashboard;
