import { Clock, Folder, Home, Info, Settings, Star, X } from 'lucide-react';
import { FC } from 'react';
import MobileSecondarySidebar from './MobileSecondaryNav';
import { AeonikRegular } from '@fonts';

interface ResponsiveSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResponsiveSidebar: FC<ResponsiveSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`${AeonikRegular.className} lg:hidden h-screen p-6 fixed inset-y-0 left-0 w-3/4 md:w-2/4 bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button
        onClick={onClose}
        className="text-white h-8 w-8 rounded-lg shadow-sm bg-[#4A24A1] flex items-center justify-center border-none absolute right-2 top-2"
      >
        <X />
      </button>
      <div className="flex flex-col h-full gap-2 text-[#344054] font-medium text-sm max-w-[234px] mt-10">
        <div className="flex-1 flex flex-col">
          <div className="mb-4 flex items-center">
              <MobileSecondarySidebar />
          </div>

          <nav className='mt-4'>
            <a href="#" className="flex items-center bg-[#F0EBFC] text-[#4A24A1] rounded-lg py-3 px-3">
              <Home className="mr-3" size={18} /> Home
            </a>
            <a href="#" className="flex items-center py-3 px-3">
              <Clock className="mr-3" size={18} /> Recents
            </a>
            <a href="#" className="flex items-center py-3 px-3">
              <Star className="mr-3" size={18} /> Starred
            </a>

            {/* Horizontal line separator */}
            <hr className="my-4 border-t border-gray-200" />

            <a href="#" className="flex items-center py-3 px-3">
              <Folder className="mr-3" size={18} /> Projects
            </a>
          </nav>
        </div>

        <div className="flex flex-col mb-10">
          <a href="#" className="flex items-center py-3 px-3">
            <Info className="mr-3" size={18} /> Support
          </a>
          <a href="#" className="flex items-center py-3 px-3">
            <Settings className="mr-3" size={18} /> Settings
          </a>
        </div>
      </div>
    </aside>
  );
};

export default ResponsiveSidebar;
