import { createRef, useState } from 'react';

import Link from 'next/link';
import { MainDropdownMenu } from 'core/menus';
// import Link from 'next/link';
import { createPopper } from '@popperjs/core';

export default function MainDropdown() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const buttonDropdownRef = createRef();
  const popoverDropdownRef = createRef();

  const openDropdownPopover = () => {
    createPopper(buttonDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
      trigger: 'focus'
    });
    setIsPopoverVisible(true);
  };

  const closeDropdownPopover = () => {
    setIsPopoverVisible(false);
  };

  return (
    <>
      {/* Dropdown activator */}
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#dropdown"
        ref={buttonDropdownRef}
        onClick={e => {
          e.preventDefault();
          isPopoverVisible ? closeDropdownPopover() : openDropdownPopover();
        }}>
        Menù
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (isPopoverVisible ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }>
        {/* Dropdown items */}
        {MainDropdownMenu.map(item => (
          <Link href={item.href} key={item.key}>
            <a
              href={`#${item.key}`}
              className={
                'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
              }>
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
