import Grid3x3 from "@/app/component/grid/Grid3x3";

export default function Grid9x9() {
  return (
    <div className="mb-48 mt-36 grid grid-cols-3 grid-rows-3 gap-8">
      <Grid3x3 />
      <Grid3x3 />
      <Grid3x3 />
      <Grid3x3 />
      <Grid3x3 />
      <Grid3x3 />
      <Grid3x3 />
      <Grid3x3 />
      <Grid3x3 />
    </div>
  );
}
