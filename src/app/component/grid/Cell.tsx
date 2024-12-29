"use client";

import { useGoalStore } from "@/store/goal";
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
  const [goal, setGoal] = useState("");

  const { setCoreGoal } = useGoalStore();

  const handleBlur = () => {
    if (type === "coreGoal") setCoreGoal(goal);
  };

  return (
    <input
      type="text"
      className={`h-100 w-100 items-center justify-center text-wrap border-[0.5px] border-gray-300 p-10 text-center text-20 leading-24 focus:outline-none ${cellStyle[type]}`}
      value={goal}
      onChange={(e) => setGoal(e.target.value)}
      onBlur={handleBlur}
    />
  );
}
