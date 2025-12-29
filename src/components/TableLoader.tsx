"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function TableLoader() {
  return Array(13)
    .fill(null)
    .map((_, i) => (
      <tr key={i} className="h-8 border-b">
        {Array(6)
          .fill(null)
          .map((_, idx) => (
            <td key={idx} className="p-1.5">
              <Skeleton height={14} />
            </td>
          ))}
      </tr>
    ));
}
