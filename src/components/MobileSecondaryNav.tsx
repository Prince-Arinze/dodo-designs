import React from 'react';
import Image from 'next/image';
import LinkedInImg from "@/components/assets/LinkedIn.svg";
import FigmaImg from "@/components/assets/figma.svg";
import AddBtnImg from "@/components/assets/Buttons.svg";

const MobileSecondarySidebar = () => {
  return (
    <aside className='h-[68px] flex space-x-4 w-full bg-[#5F2ECF] px-4 rounded-[12px] items-center mt-4'>
          <Image 
             width={36}
             height={40}
             alt="linkedIn"
             src={LinkedInImg}
             className='cursor-pointer w-[26px] h-[30px] md:w-[36px] md:h-[40px]'
          />
            <Image 
             width={36}
             height={40}
             alt="Figma"
             src={FigmaImg}
             className='cursor-pointer w-[26px] h-[30px] md:w-[36px] md:h-[40px]'
          />
            <Image 
             width={36}
             height={40}
             alt="Figma"
             src={FigmaImg}
             className='cursor-pointer w-[26px] h-[30px] md:w-[36px] md:h-[40px]'
          />
            <Image 
             width={36}
             height={40}
             alt="add button"
             src={AddBtnImg}
             className='cursor-pointer w-[26px] h-[30px] md:w-[36px] md:h-[40px]'
          />
    </aside>
  )
}

export default MobileSecondarySidebar