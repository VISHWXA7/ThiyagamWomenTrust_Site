"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (key: string | null) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 h-[70px] mt-3">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={210} height={35} className="-ml-5"/>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          link.subLinks ? (
            <div
              key={link.key}
              className="relative group"
              onMouseEnter={() => toggleDropdown(link.key)}
              onMouseLeave={() => toggleDropdown(null)}
            >
              <span className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-purple-80">
                {link.label}
              </span>
              {openDropdown === link.key && (
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
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <Image 
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 right-0 bg-white shadow-md rounded-lg p-4 w-64">
          <div className="flex justify-end">
            <Image 
              src="/close.svg"
              alt="close"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              link.subLinks ? (
                <div key={link.key}>
                  <span
                    className="regular-16 text-gray-700 cursor-pointer pb-1.5"
                    onClick={() => toggleDropdown(link.key)}
                  >
                    {link.label}
                  </span>
                  {openDropdown === link.key && (
                    <ul className="ml-4">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.key}
                          href={subLink.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 text-gray-700 cursor-pointer pb-1.5 transition-all hover:font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;