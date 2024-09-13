import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-4 text-base border border-[#D9D9D9] rounded bg-white px-4 py-1.5 font-normal text-[#4D4D4D] shadow-sm">
          This Month
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-6 w-6 text-[#4D4D4D]"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              This Week
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              This Quarter
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              This Year
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Custom Date
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  );
}

export { Dropdown };
