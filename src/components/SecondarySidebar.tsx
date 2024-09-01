import React from 'react';
import Image from 'next/image';
import LinkedInImg from "@/components/assets/LinkedIn.svg";
import FigmaImg from "@/components/assets/figma.svg";
import AddBtnImg from "@/components/assets/Buttons.svg";

const SecondarySidebar = () => {
  return (
    <aside className='w-[68px] hidden h-screen fixed bg-[#5F2ECF] py-6 lg:flex flex-col items-center gap-4'>
          <Image 
             width={36}
             height={40}
             alt="linkedIn"
             src={LinkedInImg}
             className='cursor-pointer'
          />
            <Image 
             width={36}
             height={40}
             alt="Figma"
             src={FigmaImg}
             className='cursor-pointer'
          />
            <Image 
             width={36}
             height={40}
             alt="Figma"
             src={FigmaImg}
             className='cursor-pointer'
          />
            <Image 
             width={36}
             height={40}
             alt="add button"
             src={AddBtnImg}
             className='cursor-pointer'
          />
    </aside>
  )
}

export default SecondarySidebar