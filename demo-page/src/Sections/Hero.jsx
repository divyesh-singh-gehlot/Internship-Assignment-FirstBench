import React from 'react';
import hero_left from '../assets/hero_left.png';
import compare_accuracy from '../assets/compare_accuracy.png';
import time_taken from '../assets/time_taken.png';
import { TbReportAnalytics } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";
import { IoIosGitCompare } from "react-icons/io";
import { IoIosTimer } from "react-icons/io";
import { RiArrowUpLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="h-[93.9vh] w-[84vw] mx-auto py-4 flex gap-5">

      <div className="w-[20vw] h-full bg-blue-50 flex flex-col rounded-lg shadow-md border">

        <div className="flex flex-col items-center py-4 h-fit w-full">
          <img src={hero_left} alt="hero-left-1" className='h-20' />
          <h1 className="text-xl text-center mt-1 text-blue-700 font-semibold">Your Result!</h1>
          <p className='text-gray-700 text-[12px]'>All your insights & details in one place</p>
        </div>


        <div className='bg-white w-5/6 mx-auto'>
          <div classname='h-fit justify-center flex w-full'>
            <div className='bg-blue-50 flex flex-row place-items-center w-fit mx-auto gap-3 px-2 py-2 my-5 rounded-sm'>
              <div className='h-fit w-fit bg-blue-300 px-1 py-2'>
                <TbReportAnalytics fill='white' className='size-8' />
              </div>
              <div>
                <span className='bg-blue-800 text-white text-[8px] py-1 px-2 rounded-3xl'>YOU'VE PASSED</span>
                <span className='flex gap-1'><h1 className='text-2xl font-bold'>136</h1><p className='mt-1.5 text-gray-500'>/ 240</p></span>
              </div>
              <div className='flex flex-col place-items-center border-l-2 pl-3 border-gray-300'>
                <span className='bg-gray-500 px-2 py-0.8 w-fit text-white'>76%</span>
                <span className='text-gray-500 font-semibold text-sm'>Accuracy</span>
              </div>
            </div>
          </div>
          <div className='bg-blue-50 flex flex-col w-[15vw] mx-auto gap-3 px-2 py-2 my-5 rounded-sm'>
            <div className='flex place-items-center gap-3'>
              <div className='h-fit w-fit px-1 py-2 bg-blue-300'>
                <FaUser fill='white' className='size-8' />
              </div>
              <div>
                <span className='text-blue-800 text-[12px] font-bold rounded-3xl'>Top Score</span>
                <span className='flex gap-1'><h1 className='text-2xl font-bold'>136</h1><p className='mt-1.5 text-gray-500'>/ 240</p></span>
              </div>
            </div>
            <div className='text-[10px] flex justify-between items-start border-t-2 border-gray-300 pt-3'>
              <div>By <span className='font-bold'>Parth Akotkar</span></div>
              <div className='bg-gray-500 text-white text-center rounded-3xl px-2 '>92% ACCURACY</div>
            </div>
          </div>
          <div className='w-[15vw] mx-auto mb-3'>
            <h1 className='text-sm font-bold'>
              Improve Your Marks
            </h1>
            <p className='text-[10px] text-gray-500'>Improve your score by practicing more.</p>
            <button className='w-full text-white py-1 mt-5 bg-blue-800 rounded-md'>Practice More</button>
          </div>
        </div>



        <div className='bg-white mt-5 w-5/6 mx-auto'>
          <div className='pt-2 pl-3'>
            <h1 className='text-xl font-bold'>Revisit Paper</h1>
            <p className='text-[12px] my-1 text-gray-700'>Challenge your friends by simply sharing a link to this test</p>
            <div className='flex justify-center'>
              <button className='bg-blue-800 text-white px-16 py-0.5 my-3'>Visit</button>
            </div>
            <div className='flex gap-1 justify-center'>
              <IoIosInformationCircleOutline className='fill-gray-400 size-3' /><p className='text-[8px] pb-3 text-gray-400'>Instructions for how to upload your handwritten material is given</p>

            </div>
          </div>
        </div>
      </div>


      <div className='w-fit h-fit flex flex-col gap-5'>
        <div className='h-fit w-[60vw] flex gap-5'>
          <div className='w-[20vw] rounded-lg border-2 h-[30vh] flex gap-2 py-2 px-2'><div className='border-2 mt-1 border-gray-400 w-fit h-fit'><IoIosArrowDown size={10} className='fill-gray-400' /></div><div className='text-sm text-gray-500'>Compare Accuracy</div></div>
          <div className='w-[20vw] rounded-lg border-2 h-[30vh] flex gap-2 py-2 px-2'><div className='border-2 mt-1 border-gray-400 w-fit h-fit'><IoIosArrowDown size={10} className='fill-gray-400' /></div><div className='text-sm text-gray-500'>Compare Accuracy</div></div>
          <div className='w-[20vw] rounded-lg border-2 h-[30vh] flex gap-2 py-2 px-2'><div className='border-2 mt-1 border-gray-400 w-fit h-fit'><IoIosArrowDown size={10} className='fill-gray-400' /></div><div className='text-sm text-gray-500'>Compare Accuracy</div></div>
        </div>
        <div className='h-fit w-[60vw] flex gap-5'>
          <div className='w-[15vw] rounded-lg border-2 h-[24vh] py-2 px-2'>
            <div className='flex gap-2'>
              <div>
                <FaArrowUpRightDots size={15} className='mt-1 fill-gray-400' />
              </div>
              <div className='text-sm text-gray-500'>
                Improvements
              </div>
            </div>
            <div className='text-[12px] my-2 '>Subject Understanding</div>
            <div className='flex flex-row flex-wrap text-[7px] text-white gap-2'>
              <div className='py-1 px-2 border rounded-3xl bg-gray-400'>Geography</div>
              <div className='py-1 px-2 border rounded-3xl bg-green-600'>Politics</div>
              <div className='py-1 px-2 border rounded-3xl bg-gray-400'>Current Affairs</div>
              <div className='py-1 px-2 border rounded-3xl bg-red-600'>General Studies</div>
              <div className='py-1 px-2 border rounded-3xl bg-gray-400'>Mathematics</div>
              <div className='py-1 px-2 border rounded-3xl bg-gray-400'>Social Studies</div>
              <div className='py-1 px-2 border rounded-3xl bg-red-600'>English Literature</div>
              <div className='py-1 px-2 border rounded-3xl bg-green-600'>Indian History</div>
              <div className='py-1 px-2 border rounded-3xl bg-gray-400'>Economics</div>
            </div>
          </div>
          <div className='w-[15vw] rounded-lg border-2 h-[24vh] flex gap-2 py-2 px-2 flex-col'>
            <div className='flex gap-1'>
              <div><IoIosTimer size={15} className='mt-1 fill-gray-400' /></div>
              <div className='text-sm text-gray-500'>Response Time</div>
            </div>
            <div className='bg-purple-600 text-white w-[12vh] text-[12px] px-1 py-1 mt-2'>Std Time - 2min</div>
            <div className='flex justify-between place-items-end bg-blue-50 border-2 border-dashed border-blue-400'>
              <span className='text-gray-400 px-1 py-2'><span className='text-2xl'>60%</span> Ans took</span>
              <div className='flex flex-row px-1 py-2'><div className='text-blue-700 flex flex-row place-items-center gap-1'><span><RiArrowUpLine size={25} color='red' /></span>2min</div></div>
            </div>
            <div className='text-md font-bold text-center border-t-2 border-gray-300 pt-2'>You are <span className='text-red-700'>Slow</span> !</div>
          </div>
          <div className='w-[15vw] rounded-lg border-2 h-[24vh] flex-col gap-2 py-2 px-2'>
            <div className='flex gap-2'>
              <div><FaArrowUpRightDots size={15} className='mt-1 fill-gray-400' /></div>
              <div className='text-sm text-gray-500'>Approach Data</div>
            </div>
            <div className='flex gap-1 border-2 px-1 py-1 mt-2 border-blue-300'>
              <span className='bg-blue-50 px-2 py-0.8 w-fit text-blue-700 font-bold text-[12px]'>25<span className='text-[8px] text-green-600'>%</span></span>
              <div className='text-[10px]'>Based on <span className='text-blue-700 font-bold'>Facts</span></div>
            </div>
            <div className='flex gap-1 border-2 px-1 py-1 mt-2 border-blue-300'>
              <span className='bg-blue-50 px-2 py-0.8 w-fit text-blue-700 font-bold text-[12px]'>25<span className='text-[8px] text-green-600'>%</span></span>
              <div className='text-[10px]'>Based on <span className='text-blue-700 font-bold'>Facts</span></div>
            </div>
            <div className='flex gap-1 border-2 px-1 py-1 mt-2 border-blue-300'>
              <span className='bg-blue-50 px-2 py-0.8 w-fit text-blue-700 font-bold text-[12px]'>25<span className='text-[8px] text-green-600'>%</span></span>
              <div className='text-[10px]'>Based on <span className='text-blue-700 font-bold'>Facts</span></div>
            </div>
            <div className='flex gap-1 border-2 px-1 py-1 mt-2 border-blue-300'>
              <span className='bg-blue-50 px-2 py-0.8 w-fit text-blue-700 font-bold text-[12px]'>25<span className='text-[8px] text-green-600'>%</span></span>
              <div className='text-[10px]'>Based on <span className='text-blue-700 font-bold'>Facts</span></div>
            </div>
          </div>
          <div className='w-[15vw] rounded-lg border-2 h-[24vh] flex flex-col gap-2 py-2 px-2'>
            <div className='flex gap-2'>
              <div><HiOutlineSparkles size={15} color='gray' className='mt-1' /></div>
              <div className='text-sm text-gray-500'>Suggestions</div>
            </div>
            <div className='flex gap-0.5'>
              <div className='flex flex-col gap-3 w-1/3'>
                <div className='bg-purple-600 text-white w-[6vh] text-[10px] px-1 mt-2'>Q. 1-12</div>
                <div className='flex bg-blue-50 border-2 border-dashed border-blue-400 h-fit w-fit'>
                  <span className='text-black text-xl font-semibold p-2'>40<span className='text-sm'>sec</span></span>
                </div>
                <span className='text-gray-400 text-md text-center font-bold'>Easy</span>
              </div>
              <div className='flex flex-col gap-3 w-1/3'>
                <div className='bg-purple-600 text-white w-[6vh] text-[10px] px-1 mt-2'>Q. 12-32</div>
                <div className='flex bg-blue-50 border-2 border-dashed border-blue-400 h-fit w-fit'>
                  <span className='text-black text-xl font-semibold p-2'>1.5<span className='text-sm'>min</span></span>
                </div>
                <span className='text-green-400 text-md text-center font-bold'>Medium</span>
              </div>
              <div className='flex flex-col gap-3 w-1/3'>
                <div className='bg-purple-600 text-white w-[6vh] text-[10px] px-1 mt-2'>Q. 32-40</div>
                <div className='flex bg-blue-50 border-2 border-dashed border-blue-400 h-fit w-fit'>
                  <span className='text-black text-xl font-semibold p-2'>3<span className='text-sm'>min</span></span>
                </div>
                <span className='text-red-400 text-md text-center font-bold'>Hard</span>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='h-fit w-[60vw] flex gap-5'>
          <div className='w-[30vw] rounded-lg border-2 h-[30.9vh] flex flex-col gap-2 py-2 px-2'>
            <div className='flex gap-2'>
              <div><IoIosGitCompare size={15} className='mt-1 fill-gray-400' /></div>
              <div className='text-sm text-gray-500'>Compare Accuracy</div>
            </div>
            <div className='flex justify-center'>
              <img src={compare_accuracy} alt="compare-accuracy" className='h-48 w-full' />
            </div>
          </div>
          <div className='w-[30vw] rounded-lg border-2 h-[30.9vh] flex flex-col gap-2 py-2 px-2'>
            <div className='flex gap-2'>
              <div><IoIosTimer size={15} className='mt-1 fill-gray-400' /></div>
              <div className='text-sm text-gray-500'>Time Taken</div>
            </div>
            <div className='flex justify-center'>
              <img src={time_taken} alt="compare-accuracy" className='h-48 w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
