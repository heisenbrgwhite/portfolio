import logo from "../Images/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import ScrollIntoView from "react-scroll-into-view";
export default function NavBar({ scroll }) {
  const [color, setColor] = useState(false);
  const [button, setButton] = useState(false);

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
      className={` left-0 top-0 right-0 fixed border-gray-200 px-1 z-50 h-10 ${
        color ? "bg-black" : "bg-gray-700"
      }`}
    >
      <div class=" w-full h-10 flex flex-wrap justify-between items-center fixed ">
        <a href="#" class="flex items-center w-3/4">
          <img src={logo} class="mr-3 h-6 sm:h-10" alt="My Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap text-inherit">
            Portfolio
          </span>
        </a>
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          class=" inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center  items-center w-1/4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          type="button"
        >
          Menu{" "}
          <svg
            class="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          id="dropdown"
          class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 fixed mt-10 top-0 right-0"
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
