import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';

function Header() {
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="h-15 shadow-sm dark:border-gray-700">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        <Logo />

        {mounted && (
          <label
            aria-label="다크모드 스위치"
            htmlFor="checked-toggle"
            className="relative inline-flex cursor-pointer items-center"
          >
            <span aria-label="일반 모드 아이콘" className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <input
              aria-label="모드 스위치"
              type="checkbox"
              value=""
              id="checked-toggle"
              className="peer sr-only"
              onChange={() =>
                theme === 'dark' ? setTheme('light') : setTheme('dark')
              }
              checked={theme === 'dark' ? true : false}
            />
            <div className="peer h-6 w-11 rounded-full bg-neutral-600 after:absolute after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-yellow-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-2 peer-focus:ring-neutral-600 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-neutral-800"></div>

            <span aria-label="다크모드 아이콘" className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </span>
          </label>
        )}
      </div>
    </header>
  );
}

export default Header;
