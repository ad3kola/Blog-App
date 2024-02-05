import Link from "next/link";
import Image from "next/image";
import CDlogo from "@/assets/code-magazine-logo.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-30 bg-[#F7AB0A] rounded-t-md rounded-b-sm w-full">
      <div className="w-full flex items-center justify-between px-4 md:px-10 lg:px-20 py-2">
        <Link href={"/"}>
          <Image
            src={CDlogo}
            alt="CD-logo"
            width={150}
            height={150}
            className="object-cover"
          />
        </Link>
        <ul className="flex items-center space-x-2 sm:space-x-4 md:space-x-7">
          <Link href={"/"}>
            <li className="text-base md:text-base font-semibold cursor-pointer hover:scale-105 duration-100 transition-transform ease">
              Home
            </li>
          </Link>
          <li className="hidden md:inline-flex text-base md:text-base font-semibold cursor-pointer hover:scale-105 duration-100 transition-transform ease">
            Dashboard
          </li>
          <li className="hidden md:inline-flex text-xs md:text-base font-semibold cursor-pointer hover:scale-105 duration-100 transition-transform ease">
            Contact Me+
          </li>
          <li className="px-3 py-2 text-xs rounded-full bg-neutral-900 text-gray-100 duration-100 cursor-pinter ease hover:bg-neutral-950 whitespace-nowrap font-normal">
            Get started
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
