import { LOADER_TEXT } from "@/constants";

export const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-16 w-16"></div>
    <p className="ml-2 text-gray-600">{LOADER_TEXT}</p>
  </div>
);
