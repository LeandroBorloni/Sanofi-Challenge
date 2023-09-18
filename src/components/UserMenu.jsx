"use client"

import React, { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const UserMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-full text-black hover:bg-gray-100 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="user-menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
            <UserIcon className='w-9 text-black icon mb-2'></UserIcon>
        </button>
      </div>

      {menuOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
        >
          <Link href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            Meu Perfil
          </Link>
          <Link href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            Configurações
          </Link>
          <Link href="./" className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100" role="menuitem">
            Desconectar-se
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
