import Cell from "@/app/component/grid/Cell";
import { GridId, IDs } from "@/type/type";

interface Props {
  gridId: GridId;
}

export default function Grid({ gridId }: Props) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 border-[1.5px] border-gray-300">
      {IDs.map((cellId) => (
        <Cell
          key={cellId}
          type={cellId === 5 ? "keyGoal" : "subGoal"}
          gridId={gridId}
          cellId={cellId}
        />
      ))}
    </div>
  );
}
