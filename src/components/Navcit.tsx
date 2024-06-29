import { Button } from "@nextui-org/react";
import { ChevronDown, Grip, X } from "lucide-react";
import { useState } from "react";
import Darkswitch from "./Darkswitch";
import Link from "next/link";

const Navcit = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="py-5 font-nunito bg-gradient-to-r from-[#ff88dd3a] from-3% via-[#ffffff8e] via-60% to-[#4a5bf148] to-100%">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* menu icon */}
            <div className="lg:hidden">
              <button
                type="button"
                className=""
                //   aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={toggleMenu}
              >
                {/* <span className="sr-only">Open main menu</span> */}
                {isOpen ? (
                  <X size={40} color="#772eff" />
                ) : (
                  <Grip size={40} color="#772eff" />
                )}
              </button>
            </div>
            {/* menu icon */}

            {/* logo */}
            <div className="lg:flex items-center gap-3">
              <div className="bg-bg-gra-light rounded-full px-12 py-3">
                <div className="flex items-center">
                  <Link href={"/"}>
                    <div className="rounded-full">
                      <img src="/logo.png" alt="" />
                    </div>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <Darkswitch />
              </div>
            </div>
            {/* logo */}

            {/* darkSwitch */}
            <div className="lg:hidden">
              <Darkswitch />
            </div>
            {/* darkSwitch */}

            {/* menu item */}
            <div className="lg:flex gap-5 items-center hidden">
              {/* 1st */}
              <div className="">
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md text-menu-font-color "
                  endContent={<ChevronDown size={16} />}
                  radius="sm"
                  variant="light"
                >
                  Courses
                </Button>
              </div>
              {/* 1st */}

              {/* 2nd */}
              <div className="">
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-md text-menu-font-color  hover:text-blue-700 "
                  endContent={<ChevronDown size={16} />}
                  radius="sm"
                  variant="light"
                >
                  Office Zone
                </Button>
              </div>
              {/* 2nd */}

              {/* 3rd */}
              <div className="">
                <button
                  type="button"
                  className="text-blue-400 hover:text-blue-900 hover:border-b-1 text-menu-font-color flex items-center gap-1"
                >
                  Franchises
                  <ChevronDown size={16} />
                </button>
                {/* <Button
                disableRipple
                endContent={<ChevronDown size={16} />}
                radius="sm"
                variant="light"
              >
                Courses
              </Button> */}
              </div>
              {/* 3rd */}
              {/* 4th */}
              <div className="">
                <Link href={"/about"}>
                  <button
                    type="button"
                    className="text-menu-font-color hover:text-blue-900 hover:border-b-1 border-blue-900 flex items-center"
                  >
                    About Us
                  </button>
                </Link>
              </div>
              {/* 4th */}
              {/* 5th */}
              <div className="">
                <Link href={"/contact"}>
                  <button
                    type="button"
                    className="text-menu-font-color hover:text-blue-900 hover:border-b-1 border-blue-900 flex items-center "
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
              {/* 5th */}
              {/* 6th */}
              <div className=" px-12 py-2 rounded-full bg-bg-gra-light">
                <button type="button" className="text-white">
                  login
                </button>
              </div>
              {/* 6th */}
            </div>
            {/* menu item */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navcit;
