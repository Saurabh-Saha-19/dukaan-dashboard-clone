import { Dropdown } from "./Dropdown";

function Overview() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-medium">Overview</h2>
      <Dropdown />
    </div>
  );
}

export { Overview };
