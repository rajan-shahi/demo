import React from "react";
import Logo from "../../assets/website/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Login",
    link: "/login",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r fixed left-0 right-0 top-0 z-50 from-secondary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="/"
                className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Coffee Cafe
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/70 hover:text-white duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/order"
                className=" bg-primary/70 hover:scale-105 duration-200 text-white px-4 py-2 rounded-full flex items-center gap-3"
              >
                Order
                <FaCoffee className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </a>
              <a
                className= "bg-primary/70 hover:scale-105  duration-200 text-white px-4 py-2 rounded-full md:hidden flex items-center gap-3"
                href="/login"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
