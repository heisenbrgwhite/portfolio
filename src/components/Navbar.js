import logo from "../Images/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import ScrollIntoView from "react-scroll-into-view";
export default function NavBar({ scroll }) {
  const [color, setColor] = useState(false);
  const [button, setButton] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const changeColor = () => {
    if (window.scrollY > 80) {
      setColor(true);
    } else {
      setColor(false);
    }
    console.log(window.scrollY);
  };

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return !button ? (
    <nav
      className={`fixed top-0 left-0 right-0 border-gray-200 px-2 sm:px-4 z-50 h-10 ${
        color ? "bg-black" : "bg-transparent bg-blend-lighten"
      }`}
    >
      <div class=" w-full h-10 container flex flex-wrap justify-between items-center mx-auto ">
        <a href="#" class="flex items-center">
          <img src={logo} class="mr-3 h-6 sm:h-10" alt="My Logo" />
          <span class={`self-center text-xl font-semibold whitespace-nowrap ${color? "text-white": "text-black" }`}>
            Portfolio
          </span>
        </a>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <ScrollIntoView selector="#home">
                <p
                  class={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ${
                    scroll < 687 && "md:text-blue-700"
                  } md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer`}
                  aria-current="page"
                >
                  Home
                </p>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector="#about">
                <p
                  class={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ${
                    scroll > 687 && scroll < 2324 && "md:text-blue-700"
                  } md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer`}
                >
                  About
                </p>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector="#projects">
                <p
                  class={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ${
                    (scroll> 2324 && scroll<3250) && "md:text-blue-700"
                  } md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer`}
                >
                  Projects
                </p>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector="#footer">
                <p
                  class={`block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 ${
                    scroll >= 3250 && "md:text-blue-700"
                  } md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer`}
                >
                  Contact
                </p>
              </ScrollIntoView>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <nav
      id="navbar"
      className={`w-full top-0 left-0 fixed border-gray-200 px-1 py-2 z-50 h-fit ${
        color ? "bg-black" : "bg-gray-700"
      }`}
    >
      <div class="container w-full flex flex-row justify-between items-center static">
        <a href="#" class="flex items-center w-3/4">
          <img src={logo} class="mr-3 h-6 sm:h-10" alt="My Logo" />
          <span class="self-center text-xl text-white font-semibold whitespace-nowrap">
            Portfolio
          </span>
        </a>
        
        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-55 font-medium text-white border-b border-gray-100 hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" onClick={()=>setDropdown(!dropdown)}>Menu<svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
        {dropdown ? (<div id="dropdownNavbar" class="z-10 absolute top-12 right-0  bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#home" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
                  </li>
                  <li>
                    <a href="#about" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About</a>
                  </li>
                  <li>
                    <a href="#projects" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Projects</a>
                  </li>
                </ul>
                <div class="py-1">
                  <a href="#footer" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Contact</a>
                </div>
            </div>): null}
      </div>
    </nav>
  );
}
