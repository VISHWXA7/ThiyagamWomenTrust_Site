"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 h-[70px] mt-3">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={210} height={35} />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) =>
          link.subLinks ? (
            <div
              key={link.key}
              className="relative group"
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
            >
              <span className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-purple-80">
                {link.label}
              </span>
              {isResourcesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-md rounded-lg p-3 w-48">
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.key}
                      href={subLink.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-purple-80"
            >
              {link.label}
            </Link>
          )
        )}
      </ul>

      {/* Mobile Menu Icon */}
      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 right-0 bg-white shadow-md rounded-lg p-4">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) =>
              link.subLinks ? (
                <div key={link.key}>
                  <span className="regular-16 text-gray-50 cursor-pointer pb-1.5">
                    {link.label}
                  </span>
                  <ul className="ml-4">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.key}
                        href={subLink.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
