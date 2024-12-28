"use client";

import { useState } from "react";

type Props = {
  type: "coreGoal" | "keyGoal" | "subGoal";
};

const cellStyle = {
  coreGoal: "bg-gray-200 font-semibold",
  keyGoal: "bg-gray-100 font-semibold",
  subGoal: "bg-white",
};

export default function Cell({ type }: Props) {
  const [subGoal, setSubGoal] = useState("");

  return (
    <input
      type="text"
      className={`h-100 w-100 items-center justify-center text-wrap border-[0.5px] border-gray-300 p-10 text-center text-20 leading-24 focus:outline-none ${cellStyle[type]}`}
      value={subGoal}
      onChange={(e) => setSubGoal(e.target.value)}
    />
  );
}
