'use client'
import { useState } from "react";
import { Button, Link } from "@heroui/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="text-[25px] font-bold"> <span className="text-blue-600">Ai Pos</span>ter Maker</div>
        </div>
        <ul className="hidden items-center gap-4 md:flex tr">
          <Button>
            <Link href="#" className={'text-white'}>Sing In </Link>
          </Button>
          <Button>
            <Link href="#" className={'text-white'}>Sing Up</Link>
          </Button>
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <Button>
              <Link href="#" className="block py-2 text-white">
                Sing In
              </Link>
            </Button>
            <Button>
              <Link href="#" className="block py-2 text-white">
                Sing Up
              </Link>
            </Button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;