import { DEFAULT_GOAL_DATA, GoalData } from "@/data/default";
import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useGoalStore = create(
  combine({ goal: DEFAULT_GOAL_DATA }, (set) => {
    return {
      setGoal: (newGoal: GoalData) => {
        set(() => ({
          goal: newGoal,
        }));
      },
    };
  }),
);
