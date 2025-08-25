import { motion } from "framer-motion";

const StatCard = ({ title, value, icon, color, delay = 0 }) => (
  <motion.div
    className="bg-white shadow rounded-xl p-4 flex flex-col items-start"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="w-full flex justify-between">
      <div className="flex-1">
        <p className="text-sm text-gray-500">
          {title}
        </p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>

      <div className={`text-2xl w-12 h-12 rounded-md ${color} flex items-center justify-center`}>
        {" "}
        <span className="">
          {icon}
        </span>
      </div>
    </div>
  </motion.div>
);

export default StatCard;
