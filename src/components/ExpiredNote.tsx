import { EXPIRED_NOTE_MESSAGE } from "@/constants";

export const ExpiredNote = () => {
  return (
    <span className="text-sm absolute top-0 left-0 text-white bg-amber-600 px-2 py-1 rounded-br-md rounded-tl-md">
      {EXPIRED_NOTE_MESSAGE}
    </span>
  );
};
