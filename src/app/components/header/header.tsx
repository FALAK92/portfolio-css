"use client";

import Link from "next/link";
import "@/app/style/header.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h3>
          Falak <span>Naaz</span>
        </h3>
      </div>
      <nav className="navbar">
        <FaBars className="hamburger-icon" onClick={toggleMenu} />

        <ul className={`menu ${isMenuOpen ? "show" : ""}`}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            {" "}
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
