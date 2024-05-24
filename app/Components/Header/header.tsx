// components/Header.tsx

"use client";

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navStyle}>
          <li style={liStyle}>
            <Link href="/">
              <a style={linkStyle}>Home</a>
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/about">
              <a style={linkStyle}>About</a>
            </Link>
          </li>
          <li style={liStyle}>
            <Link href="/contact">
              <a style={linkStyle}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  background: "#333",
  padding: "1rem",
  color: "white",
};

const navStyle: React.CSSProperties = {
  listStyle: "none",
  display: "flex",
  gap: "1rem",
  padding: 0,
  margin: 0,
};

const liStyle: React.CSSProperties = {
  display: "inline",
};

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
};

export default Header;