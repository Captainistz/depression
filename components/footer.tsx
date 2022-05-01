import type { NextPage } from 'next'
import Link from 'next/link'

const Footer: NextPage = () => {
  return (
    <footer className='px-[16px] order-5'>
      <div className='flex shrink-0 grow-0 justify-center '>
        <div className='my-[12px] justify-center flex flex-col sm:flex-row items-center'>
          <div className='block font-[400] text-[12px]'>
            <span className='text-slate-400'>Made with love 😘 &nbsp; &rarr;</span>
          </div>
          <div className='block font-[400] text-[12px] ml-[16px]'>
            <Link href='https://captainistz.me'>
              <a className='text-slate-400'>By Captainistz </a>
            </Link>
          </div>
          <div className='block font-[400] text-[12px] ml-[16px]'>
            <span className='text-slate-400'>&larr; &nbsp; &copy; 2022 Depression of Captainistz</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
