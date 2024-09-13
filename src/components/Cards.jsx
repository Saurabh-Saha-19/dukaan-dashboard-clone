import { CardBody } from "./CardBody";
import { CardHeading } from "./CardHeading";

function Cards({ type }) {
  return (
    <>
      {type == "blueCard" ? (
        <div className="bg-[#146EB4] rounded-md p-5 text-white sm:col-span-2 md:col-span-1">
          <CardHeading heading={"Next Payout"} />
          <CardBody price={"₹2,312.23"} orderLink={"23 Orders"} />
        </div>
      ) : (
        <div className="bg-[#ffffff] rounded-md p-5">
          <CardHeading heading={"Next Payout"} />
          <CardBody price={"₹2,312.23"} orderLink={"23 Orders"} />
        </div>
      )}
    </>
  );
}

export { Cards };
