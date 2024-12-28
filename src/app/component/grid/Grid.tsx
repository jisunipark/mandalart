import Cell from "@/app/component/grid/Cell";

export default function Grid() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 border-[1.5px] border-gray-300">
      <Cell type="subGoal" />
      <Cell type="subGoal" />
      <Cell type="subGoal" />
      <Cell type="subGoal" />
      <Cell type="keyGoal" />
      <Cell type="subGoal" />
      <Cell type="subGoal" />
      <Cell type="subGoal" />
      <Cell type="subGoal" />
    </div>
  );
}
