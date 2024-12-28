import CoreGrid from "@/app/component/grid/CoreGrid";
import Grid from "@/app/component/grid/Grid";

export default function Chart() {
  return (
    <div className="mb-48 mt-36 grid grid-cols-3 grid-rows-3 gap-8">
      <Grid />
      <Grid />
      <Grid />
      <Grid />
      <CoreGrid />
      <Grid />
      <Grid />
      <Grid />
      <Grid />
    </div>
  );
}
