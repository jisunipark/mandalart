import CoreGrid from "@/app/component/grid/CoreGrid";
import Grid from "@/app/component/grid/Grid";
import { IDs } from "@/type/type";

export default function Chart() {
  return (
    <div className="mb-48 mt-36 grid grid-cols-3 grid-rows-3 gap-8">
      {IDs.map((gridId) => {
        return gridId === 5 ? (
          <CoreGrid key={gridId} />
        ) : (
          <Grid key={gridId} gridId={gridId} />
        );
      })}
    </div>
  );
}
