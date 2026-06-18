import React, { useState } from "react";
import './Dropdown.scss';

type Props = {
  data: string[];
  theme?: string;
  changeTheme?: (theme: string) => void;
  lang?: string;
  changeLanguage?: (lang: string) => void;
}

export const Dropdown: React.FC<Props> = ({
  data,
  theme,
  changeTheme,
  lang,
  changeLanguage,
}) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  return (
    <div className='dropdown'>
      <div
        className='dropdown__trigger'
        onClick={() => setDropdownIsOpen(prev => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-palette"
          aria-hidden="true"
        >
          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
        </svg>

        {theme ? `${theme} Theme` : `${lang} language`}
      </div>
      <div className={`dropdown__menu ${dropdownIsOpen ? '' : 'close'}`}>
        {data.map(item => (
          <div
            key={item}
            className='dropdown__item'
            onClick={() => {
              if (changeTheme) {
                changeTheme(item);
              }

              if (changeLanguage) {
                changeLanguage(item);
              }

              setDropdownIsOpen(false);
            }}
          >
            <span>{item}</span>
            {(changeTheme ? item === theme : item === lang) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check text-cyan-400"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}