"use client";

import { useEffect } from "react";
import {
  ERROR_BOUNDARY_MESSAGE,
  ERROR_BOUNDARY_BUTTON_TEXT,
} from "@/constants";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h5>{ERROR_BOUNDARY_MESSAGE}</h5>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {ERROR_BOUNDARY_BUTTON_TEXT}
      </button>
    </div>
  );
}
