import { PREFIX_ERROR_MESSAGE } from "@/constants";

import { ErrorComponentProps } from "@/types";

export const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => (
  <div
    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
    role="alert"
  >
    <strong className="font-bold">{PREFIX_ERROR_MESSAGE}</strong>
    <span className="block sm:inline">{message}</span>
  </div>
);
