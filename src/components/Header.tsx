import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="bg-indigo-900 text-white h-16 px-8 py-2">
      <div className="container mx-auto flex justify-between items-center h-full">
        <h1 className="font-bold text-3xl hover:text-indigo-300 transition-colors duration-200">
          <a href="/">All Projects</a>
        </h1>
        <div className="relative lg:hidden">
          <div
            className={`fixed right-0 top-0 h-full w-64 bg-indigo-900 transform transition-transform duration-200 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="space-y-6 p-6 pt-16 text-lg">
              <li>
                <a
                  href="/unity"
                  className="text-white hover:text-indigo-300 transition-colors duration-200"
                >
                  Unity
                </a>
              </li>
              <li>
                <a
                  href="/csharp"
                  className="text-white hover:text-indigo-300 transition-colors duration-200"
                >
                  C#
                </a>
              </li>
              <li>
                <a
                  href="/javascript"
                  className="text-white hover:text-indigo-300 transition-colors duration-200"
                >
                  JavaScript
                </a>
              </li>
            </ul>
          </div>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#ffffff"
            size={24}
          />
        </div>
        <nav className="hidden lg:flex space-x-8 text-lg items-center h-full">
          <a
            href="/unity"
            className="text-white h-full hover:bg-indigo-700 flex items-center transition-colors duration-200 px-2 py-1"
          >
            Unity
          </a>
          <a
            href="/csharp"
            className="text-white h-full hover:bg-indigo-700 flex items-center transition-colors duration-200 px-2 py-1"
          >
            C#
          </a>
          <a
            href="/javascript"
            className="text-white h-full hover:bg-indigo-700 flex items-center transition-colors duration-200 px-2 py-1"
          >
            JavaScript
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
