"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TopNavbar from "./TopNavbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavigationMenuOption from "./NavigationMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [selectOption, setSelectOption] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Homeoptions = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/profile" },
    { name: "Settings", href: "/settings" },
    { name: "Help", href: "/help" },
  ];

  return (
    <div className="w-full bg-white">
      <TopNavbar />

      <div
        className={`${
          isSticky
            ? "fixed top-0 shadow-md z-50 bg-white transition ease-in-out duration-500 w-full"
            : "relative"
        }`}
      >
        <nav className="py-3 flex justify-between items-center mx-auto w-full screen_4k:w-[70%] h-[80px] px-4 md:px-20 screen_4k:px-0">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/png/logo.png"
              alt="Logo"
              width={150}
              height={150}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden nav_lg:flex space-x-4 items-center bg-gray-100 px-4 shadow-sm rounded-full">
            <NavigationMenuOption
              links={Homeoptions}
              child="Home"
              handleSelectOption={(option) => setSelectOption(option)}
              selectedOption={selectOption}
            />
            <Link href="/doctors" className="font-semibold px-3">
              Doctors
            </Link>
            <Link href="/services" className="font-semibold px-3">
              Services
            </Link>
            <NavigationMenuOption
              links={[{ name: "Pages", href: "/pages" }]}
              child="Pages"
              handleSelectOption={(option) => setSelectOption(option)}
              selectedOption={selectOption}
            />
            <NavigationMenuOption
              links={[{ name: "Blogs", href: "/blogs" }]}
              child="Blogs"
              handleSelectOption={(option) => setSelectOption(option)}
              selectedOption={selectOption}
            />
            <Link href="/contact" className="font-semibold px-3">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="nav_lg:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-3xl text-blue-600"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
          </div>

          {/* Appointment Button */}
          <div className="hidden nav_lg:flex">
            <Button
              variant="default"
              className="bg-blue-600 rounded-md text-white"
              asChild
            >
              <Link
                href="/book-appointment"
                className="flex justify-center gap-2 items-center shadow-xl text-sm lg:font-semibold border-gray-50 relative z-10 px-4 py-3 overflow-hidden border-2 group"
              >
                Book Appointment
              </Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="nav_lg:hidden bg-white shadow-md px-4 py-6 space-y-4">
            <Link href="/" className="block font-semibold">
              Home
            </Link>
            <Link href="/doctors" className="block font-semibold">
              Doctors
            </Link>
            <Link href="/services" className="block font-semibold">
              Services
            </Link>
            <Link href="/pages" className="block font-semibold">
              Pages
            </Link>
            <Link href="/blogs" className="block font-semibold">
              Blogs
            </Link>
            <Link href="/contact" className="block font-semibold">
              Contact Us
            </Link>
            <Link
              href="/book-appointment"
              className="block bg-blue-600 text-white px-4 py-2 rounded-md text-center font-semibold"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
