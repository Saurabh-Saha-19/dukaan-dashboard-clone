import { Message } from "./Message";
import { PayoutsLogo } from "./PayoutsLogo";
import { Searchbox } from "./Searchbox";

function Header() {
  return (
    <div className="flex justify-between items-center gap-2 sm:gap-4 px-4 sm:px-8 py-3 sticky top-0 border-b border-[#D9D9D9]">
      <PayoutsLogo />
      <Searchbox />
      <Message />
    </div>
  );
}

export { Header };
