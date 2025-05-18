import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { HoverDropdown } from '../pages/CourseDropDown';
import { useState, useRef } from 'react';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Explore Programs', href: '/explore-programs', current: false },
  { name: 'Placement', href: '/placement', current: false },
  { name: 'Hire From Us', href: '/hire', current: false },
  { name: 'Refer and Earn', href: '/refer-earn', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Small delay before closing to make the interaction smoother
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <Disclosure as="nav" className="bg-gray-800 py-1">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center h-[57px] w-[57px] mb-1">
                  <img
                    alt="Your Company"
                    src="./images/logo.png"
                    className="h-auto w-auto cursor-pointer"
                    loading='lazy'
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block pt-4">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium relative',
                          item.name === 'Explore Programs' ? 'dropdown-trigger' : ''
                        )}
                        onMouseEnter={() => item.name === "Explore Programs" && handleMouseEnter()}
                        onMouseLeave={() => item.name === "Explore Programs" && handleMouseLeave()}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Link to={"/contact"}>
                  <button className='py-2 text-md px-2 bg-purple-500 rounded-lg bottom-8 text-white'>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>

          {/* Render dropdown outside of any container for better positioning */}
          {isOpen && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <HoverDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          )}
        </>
      )}
    </Disclosure>
  )
}