import React from 'react';
import { AeonikBold, AeonikLight, AeonikRegular } from '@fonts';
import bgImage from "@/components/assets/bg-image.png";
import BarChart from './BarChart';

const Dashboard: React.FC = () => {
  return (
    <div className="w-[95%] lg:max-w-[95%] 2xl:max-w-[1135px] mx-auto py-6 font-normal mt-[72px]">
      <h1 className={`text-3xl mb-2 text-[#0C111D] ${AeonikBold.className}`}>Welcome Susan,</h1>
      <p className={`text-md mb-8 ${AeonikRegular.className}`}>Get ready to complete your research processes on Zadwax</p>
      <div
        className="flex flex-col justify-center min-h-[169px] bg-[#F0EBFC] p-6 rounded-[12px] mb-8 relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 90%',
        }}
      >
        <div className={`relative ${AeonikRegular.className} font-medium`}>
          <p className="text-sm text-[#101828]">Welcome to the cool kids club</p>
          <h3 className={`mt-2 w-[95%] 2xl:w-[1035px] text-2xl text-[#4A24A1]`}>
            The new way designers revolutionize their work. See how others are using Zadwax to accelerate their design process.
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-9 mb-8">
        <div className="bg-white p-4 rounded-[12px] shadow md:col-span-2 xl:col-span-5 h-full divide-y divide-gray-200 max-h-[286px] lg:max-h-[320px]">
          <div className={`flex items-center justify-between pb-4 ${AeonikRegular.className} text-[#0C111D]`}>
            <div>
              <h3 className="text-xl font-bold">Getting Started</h3>
              <p className={`font-normal text-sm ${AeonikLight.className}`}>Three simple steps to launch your first project</p>
            </div>
            <button className="p-[8px_12px_8px_12px] bg-[#6832E3] text-white text-sm font-bold rounded-lg max-w-[123px]">Create project</button>
          </div>
          
          <div className={`space-y-3 pt-4 ${AeonikRegular.className}`}>
            <div>
                <h4 className='font-medium text-base text-[#344054]'>Step 1: Create your project</h4>
                <p className={`font-normal tex-[#667085] text-xs ${AeonikLight.className}`}>Give your project a name, add a description and your goals.</p>
            </div>
            <div>
                <h4 className="font-medium text-base text-[#344054]">Step 2: Invite your teammates</h4>
                <p className={`font-normal tex-[#667085] text-xs ${AeonikLight.className}`}>Research is better together, Invite your colleagues.</p>
            </div>
            <div>
                <h4 className='font-medium text-base text-[#344054]'>Step 3: Setup your research process</h4>
                <p className={`font-normal tex-[#667085] text-xs ${AeonikLight.className}`}>Add the processes that are specific to this project.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-[12px] shadow md:col-span-2 xl:col-span-4 h-full  divide-y divide-gray-200 max-h-[286px] lg:max-h-[320px]">
        <div className={`pb-4 ${AeonikRegular.className} text-[#0C111D]`}>
              <h3 className="text-xl font-bold">Research Tips and Tricks</h3>
              <p className={`font-normal text-xs ${AeonikLight.className}`}>Three simple steps to launch your first project</p>
          </div>
          
          <div className={`space-y-3 pt-4 ${AeonikRegular.className}`}>
            <div>
                <h4 className='font-medium text-base text-[#344054]'>Don’t start from scratch, use a template</h4>
                <p className={`font-normal tex-[#667085] text-xs ${AeonikLight.className}`}>Begin with field-tested frameworks adaptable to your research.</p>
            </div>
            <div>
                <h4 className="font-medium text-base text-[#344054]">Add steps and set milestones</h4>
                <p className={`font-normal tex-[#667085] text-xs ${AeonikLight.className}`}>Define key stages and monitor progress from hypothesis to conclusion.</p>
            </div>
            <div>
                <h4 className='font-medium text-base text-[#344054]'>Track changes in your documents over time.</h4>
                <p className={`font-normal tex-[#667085] text-xs ${AeonikLight.className}`}>Capture every revision to ensure data integrity and transparency.</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className={`text-xl text-[#0C111D] font-bold mb-4 ${AeonikBold.className}`}>Resources for you</h3>
      <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 ${AeonikRegular.className} font-medium`}>
        <div className="min-h-[227px] h-full">
              <div className='h-[127px] rounded-t-[12px] bg-[#D0BFF6] flex items-center justify-center '>
                    <BarChart />
              </div>
              <div className='border-t-0 border-[#EAECF0] border-[1px] h-[100px] p-3 rounded-[0px_0px_12px_12px]'>
                  <h4 className="text-base text-gray-700 font-semibold">Academic literature review</h4>
                  <p className={`mt-2font-normal text-gray-500 ${AeonikLight.className} text-xs`}>Organize your sources and synthesize information effectively.</p>
              </div>
        </div>
        <div className="min-h-[227px] h-full">
             <div className='h-[127px] rounded-t-[12px] bg-[#D0BFF6] flex items-center justify-center'>
                <BarChart />
             </div>
             <div className='border-t-0 border-[#EAECF0] border-[1px] h-[100px] p-3 rounded-[0px_0px_12px_12px]'>
                  <h4 className="text-base text-gray-700 font-semibold">Data analysis templates</h4>
                  <p className={`mt-2font-normal text-gray-500 ${AeonikLight.className} text-xs`}>Streamline patient data collection and analysis for medical research.</p>
             </div>
        </div>
        <div className="min-h-[227px] h-full">
            <div className='h-[127px] rounded-t-[12px] bg-[#D0BFF6] flex items-center justify-center'>
                <BarChart />
            </div>
            <div className='border-t-0 border-[#EAECF0] border-[1px] h-[100px] p-3 rounded-[0px_0px_12px_12px]'>
                <h4 className="text-base text-gray-700 font-semibold">UX Heuristic template</h4>
                <p className={`mt-2font-normal text-gray-500 ${AeonikLight.className} text-xs`}>Assess your interface against established usability principles.</p>
            </div>
        </div>
        <div className="min-h-[227px] h-full">
          <div className='h-[127px] rounded-t-[12px] bg-[#D0BFF6] flex items-center justify-center'>
              <BarChart />
          </div>
          <div className='border-t-0 border-[#EAECF0] border-[1px] h-[100px] p-3 rounded-[0px_0px_12px_12px]'>
              <h4 className="text-base text-gray-700 font-semibold">Affinity mapping template</h4>
              <p className={`mt-2font-normal text-gray-500 ${AeonikLight.className} text-xs`}>Assess your interface against established usability principles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
