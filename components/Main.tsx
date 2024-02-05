import Image from "next/image";
import bgImage from '@/assets/bg-image.png'
import {NewspaperIcon } from '@heroicons/react/24/solid'
function Main() {
  return (
    <div className="relative w-full bg-[#F7AB0A] rounded-b-md flex items-center justify-between px-2 sm:px-5 py-10 md:py-20 lg:px-10 lg:py-28 space-x-10">
      <div className ='absolute w-full h-full top-0 left-0 right-0 bottom-0'><Image src={bgImage} alt='Cover Image' fill className='opacity-10 object-cover' /></div>
      <div className="flex flex-col z-20 space-y-6">
        <h2 className="text-neutral-950 font-semibold text-5xl/[65px] md:text-[80px]/[80px] font-serif">
          <span className ='underline'>Code Magazine:</span> A place to read, write and connect
        </h2>
        <h3 className="mt-16 text-2xl font-medium text-gray-900 tracking-wider">
          Discover stories, thinking, and expertise from
          writers on any topic.
        </h3>
        <button className="max-w-fit mt-16 bg-neutral-800 px-8 py-2.5 rounded-full text-white hover:bg-neutral-950 tracking-wide cursor-pointer duration-100 transition ease">
          Start Reading
        </button>
      </div>
      <p className='hidden font-serif md:inline-flex text-[120px] font-bold text-neutral-950'>M</p>
    </div>
  );
}

export default Main;
