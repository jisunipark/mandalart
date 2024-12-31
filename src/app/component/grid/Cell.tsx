"use client";

import { useGoalStore } from "@/store/goal";
import { CellId, GridId } from "@/type/type";
import { useState } from "react";

type Props = {
  type: "coreGoal" | "keyGoal" | "subGoal";
  gridId: GridId;
  cellId: CellId;
};

const cellStyle = {
  coreGoal: "bg-gray-200 font-semibold",
  keyGoal: "bg-gray-100 font-semibold",
  subGoal: "bg-white",
};

export default function Cell({ type, gridId, cellId }: Props) {
  const [thisGoal, setThisGoal] = useState("");

  const { goal, setGoal } = useGoalStore();

  const handleBlur = () => {
    if (type === "coreGoal") {
      const nextGoal = { ...goal };
      nextGoal["coreGoal"] = thisGoal;
      setGoal(nextGoal);
    }

    if (type === "keyGoal") {
      const nextGoal = { ...goal };
      nextGoal.keyGoals[gridId - 1].keyGoal = thisGoal;
      setGoal(nextGoal);
    }

    if (type === "subGoal") {
      const nextGoal = { ...goal };
      nextGoal.keyGoals[gridId - 1].subGoals[cellId - 1].subGoal = thisGoal;
    }

    console.log(goal);
  };

  return (
    <input
      type="text"
      className={`h-100 w-100 items-center justify-center text-wrap border-[0.5px] border-gray-300 p-10 text-center text-20 leading-24 focus:outline-none ${cellStyle[type]}`}
      value={thisGoal}
      onChange={(e) => setThisGoal(e.target.value)}
      onBlur={handleBlur}
    />
  );
}
