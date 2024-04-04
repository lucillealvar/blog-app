import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";
import { BiSolidMoon } from "react-icons/bi";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-blue-600 via-teal-500 to-green-300 rounded-lg text-white">
          Lucille Alvar
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search.."
          rightIcon={TfiSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill> 
        <TfiSearch/>
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <BiSolidMoon />
        </Button>
        <Link to='/login'>
          <Button gradientDuoTone='greenToBlue' pill>
            Login
          </Button>
        </Link>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={'div'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={'div'}>
            <Link to='/about'>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as={'div'}>
            <Link to='/projects'>Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
