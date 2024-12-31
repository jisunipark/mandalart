import Cell from "@/app/component/grid/Cell";
import { IDs } from "@/type/type";

export default function CoreGrid() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 border-[1.5px] border-gray-300">
      {IDs.map((cellId) => (
        <Cell
          key={cellId}
          type={cellId === 5 ? "coreGoal" : "keyGoal"}
          gridId={5}
          cellId={cellId}
        />
      ))}
    </div>
  );
}
