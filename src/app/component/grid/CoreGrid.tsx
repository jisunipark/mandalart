import Cell from "@/app/component/grid/Cell";

export default function CoreGrid() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 border-[1.5px] border-gray-300">
      <Cell type="keyGoal" />
      <Cell type="keyGoal" />
      <Cell type="keyGoal" />
      <Cell type="keyGoal" />
      <Cell type="coreGoal" />
      <Cell type="keyGoal" />
      <Cell type="keyGoal" />
      <Cell type="keyGoal" />
      <Cell type="keyGoal" />
    </div>
  );
}
