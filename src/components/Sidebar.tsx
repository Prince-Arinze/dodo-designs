import React from 'react';
import { Home, Star, Folder, Settings, Info, Clock } from 'lucide-react';
import Image from 'next/image';
import Logo from "@/components/assets/zadwax.svg";
import { AeonikRegular } from '@fonts';

const Sidebar: React.FC = () => {
  return (
    <aside className={`${AeonikRegular.className} bg-white hidden lg:flex flex-col py-6 lg:w-[234px] h-screen fixed border-l border-gray-200 shadow-lg left-[68px]`}>
      <div className="flex flex-col flex-1 px-6 gap-2 text-[#344054] font-medium text-sm">
        <div className="mb-4 flex items-center">
          <Image
            height={40}
            width={100}
            alt="logo"
            src={Logo}
            className="w-full h-full"
          />
        </div>

        <nav className="flex-1">
          <div className="flex flex-col">
            <a href="#" className="flex items-center bg-[#F0EBFC] text-[#4A24A1] rounded-lg py-2 px-3">
              <Home className="mr-3" size={18}/> Home
            </a>
            <a href="#" className="flex items-center py-2 px-3">
              <Clock className="mr-3" size={18}/> Recents
            </a>
            <a href="#" className="flex items-center py-2 px-3">
              <Star className="mr-3" size={18}/> Starred
            </a>
          </div>

          <hr className="my-4 border-t border-gray-200" />

          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center py-2 px-3">
              <Folder className="mr-3" size={18}/> Projects
            </a>
          </div>
        </nav>

        <div className="mt-auto">
          <a href="#" className="flex items-center py-2 px-3">
            <Info className="mr-3" size={18}/> Support
          </a>
          <a href="#" className="flex items-center py-2 px-3">
            <Settings className="mr-3" size={18}/> Settings
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
