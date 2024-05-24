// "use client";

// import React from "react";
// import Link from "next/link";

// const Header: React.FC = () => {
//   return (
//     <header style={headerStyle}>
//       <nav>
//         <ul style={navStyle}>
//           <li style={liStyle}>
//             <Link href="/">
//               <a style={linkStyle}>Home</a>
//             </Link>
//           </li>
//           <li style={liStyle}>
//             <Link href="/about">
//               <a style={linkStyle}>About</a>
//             </Link>
//           </li>
//           <li style={liStyle}>
//             <Link href="/contact">
//               <a style={linkStyle}>Contact</a>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// const headerStyle: React.CSSProperties = {
//   background: "#333",
//   padding: "1rem",
//   color: "white",
// };

// const navStyle: React.CSSProperties = {
//   listStyle: "none",
//   display: "flex",
//   gap: "1rem",
//   padding: 0,
//   margin: 0,
// };

// const liStyle: React.CSSProperties = {
//   display: "inline",
// };

// const linkStyle: React.CSSProperties = {
//   color: "white",
//   textDecoration: "none",
// };

// export default Header;
import "./header.css";
const link = ["Services", "Blog", "Students"];
export default function Header() {
  return (
    <nav className="Header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-black"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <p className="header-text">SHOP/MENU</p>
      <ul className="header-links">
        {link.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
