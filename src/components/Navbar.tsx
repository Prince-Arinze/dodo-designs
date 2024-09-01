"use client"
import { FC, useState } from 'react';
import Image from 'next/image';
import { Menu, Search } from 'lucide-react';
import { AeonikLight } from '@fonts';
import Avatar from "@/components/assets/AvatarContainer.svg";
import NotificationImg from "@/components/assets/notification.svg";
import Logo from "@/components/assets/zadwax.svg";
import MobileLogo from "@/components/assets/z.svg";
import ResponsiveSidebar from './ResponsiveSidebar';

const Navbar: FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <>
        <nav className={`w-full z-20 lg:w-[calc(100vw_-_302px)] fixed bg-white p-4 shadow-md h-[72px] flex items-center ${AeonikLight.className}`}>
        <div className="w-[95%]  lg:max-w-[95%] 2xl:max-w-[1135px] mx-auto flex justify-between items-center lg:justify-end h-[40px]">
            
            <div className='flex items-center space-x-2 lg:hidden'>
                <Menu onClick={toggleSidebar}/>
                <div className="md:flex items-center hidden">
                    <Image
                        height={40}
                        width={100}
                        alt="logo"
                        src={Logo}
                        className="w-full h-full"
                    />
                </div>
                <div className="flex items-center md:hidden">
                    <Image
                        height={40}
                        width={40}
                        alt="logo"
                        src={MobileLogo}
                        className="w-full h-full"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-6 md:space-x-20">
            <div className="relative w-full max-w-xs h-[40px]">
                <input
                style={{ boxShadow: '0px 1px 2px 0px #1018280D' }}
                type="text"
                placeholder="Search"
                className="h-[40px] w-[100%] md:w-[320px] border border-gray-300 p-[8px_12px_8px_35px] rounded-lg text-sm text-gray-500"
                />
                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                    <Search size={20}/>
                </div>
            </div>


            <div className='flex items-center gap-2 md:gap-8'>
                <div className="relative">
                    <Image
                        src={NotificationImg}
                        alt="notification"
                        height={16}
                        width={20}
                        className='cursor-pointer'
                    />
                </div>
                <div className="w-8 h-8 rounded-full flex items-center">
                    <Image
                    src={Avatar}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                    />
                </div>
            </div>
            </div>
        </div>
        </nav>
        <ResponsiveSidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>
    </>
  );
};

export default Navbar;
