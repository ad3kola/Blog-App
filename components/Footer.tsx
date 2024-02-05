import { urlFor } from '@/sanity.cli'
import Image from 'next/image'
import CDlogo from "@/assets/code-magazine-logo.png";


function Footer() {
	return (
		<footer className='bg-[#F7AB0A] py-4 mt-10 rounded-lg'>
			<div className ='relative w-60 h-24 mx-auto'>
				<Image src = {CDlogo} alt=  'Code Magazine' fill className = 'object-contain' />
			</div>
			<p className ='text-sm text-center font-bold tracking-wide'>&copy; Copyright 2024</p>
			<p className ='relative text-sm text-center font-bold tracking-wide after:absolute after:h-[3px] after:w-48 after:bg-neutral-900 after:rounded-md after:absolute after:-bottom-2 after:left-0 after:right-0 after:mx-auto'>Code Magazine Publishers</p>
		</footer>
	)
}

export default Footer