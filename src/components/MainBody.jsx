import { Cards } from "./Cards";
import { Overview } from "./Overview";

function MainBody() {
  return (
    <div className="p-3 sm:p-8 flex flex-col gap-6">
      <Overview />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Cards type={"blueCard"} />
        <Cards type={"normal"} />
        <Cards type={"normal"} />
      </div>
    </div>
  );
}

export { MainBody };
