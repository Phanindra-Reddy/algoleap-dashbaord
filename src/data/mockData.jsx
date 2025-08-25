import { Activity, Database, FileText, User } from "lucide-react";

export const dashboardStats = [
  {
    title: "Total Documents",
    value: 5,
    icon: <FileText className="text-blue-500" />,
    color: "bg-blue-100",
  },
  {
    title: "Vector Chunks",
    value: 80,
    icon: <Database className="text-green-500" />,
    color: "bg-green-100",
  },
  {
    title: "Total Conversations",
    value: 24,
    icon: <User className="text-violet-500" />,
    color: "bg-violet-100",
  },
  {
    title: "Storage Used",
    value: "5.9 MB",
    icon: <Activity className="text-yellow-500" />,
    color: "bg-yellow-100",
  },
];

export const highlights = {
  topQuestion: { question: "What is the vacation policy?", asks: 10 },
  topSearch: { query: "vacation policy", count: 18 },
  mostViewed: { file: "e8aa5ae6-ffbe-44a5-9597-f3a728b36533.docx", views: 49 },
};

export const documentOverview = {
  totalDocuments: 5,
  vectorChunks: 80,
  storageUsed: "5.9 MB",
};

export const systemStatus = [
  { name: "Vector Database", desc: "80 chunks ready", status: "Online" },
  { name: "RAG System", desc: "Questions answering operational", status: "Online" },
  { name: "Document Processing", desc: "Ready to process uploads", status: "Ready" },
];
