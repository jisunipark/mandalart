import Cell from "@/app/component/grid/Cell";

export default function Grid3x3() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 border-[1.5px] border-gray-300">
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}
