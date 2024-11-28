"use client";

import Link from "next/link";
import "@/app/style/header.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);

    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h3>
          Falak <span>Naaz</span>
        </h3>
      </div>
      <nav className="navbar">
        <FaBars
          className="hamburger-icon"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="menu"
          tabIndex={0}
          aria-label="Toggle menu"
        />
        <ul
          id="menu"
          className={`menu ${isMenuOpen ? "show" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

