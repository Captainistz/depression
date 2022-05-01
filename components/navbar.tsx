import type { NextPage } from 'next'
import Link from 'next/link'

const Navbar: NextPage = () => {
  return (
    <nav className='order-none p-0'>
      <div className='basis-[60px]'></div>
      <div className='bg-white h-[60px] flex items-center w-full flex-col fixed box-border z-[3] border-y-gray-500'>
        <div className='flex box-border h-[60px] max-w-[975px] px-[20px] items-center justify-center w-full flex-row z-[10] shrink-0'>
          <div className='grow shrink-0 basis-[127px]'>
            <Link href='/'>
              <a>
                <div className='flex grow-0 shrink-0 justify-start flex-row items-center font-[600]'>
                  Depression
                </div>
              </a>
            </Link>
          </div>

          <div className='rounded-[8px] items-center grow-0 shrink flex-col h-[36px] min-w-[125px] relative w-[268px] hidden sm:flex'>
            <input
              autoCapitalize='none'
              type='text'
              className='bg-search-grey text-[16px] color-search-grey border-0 rounded-[8px] box-border z-[2] h-full w-full py-[3px] px-[16px] outline-0'
            />
            <div className='flex flex-col font-size-[16px] px-[16px] cursor-text font-[300] z-[2] justify-center absolute text-left top-0 rounded-[8px] h-full w-full box-border'>
              <div className='flex flex-row relative shrink-0 m-0 p-0 '>
                <div className='mr-[12px] flex flex-col m-0 p-0 relative'>
                  <svg
                    aria-label='Search'
                    className='block relative '
                    color='#8e8e8e'
                    fill='#8e8e8e'
                    height='26'
                    role='img'
                    viewBox='0 0 24 24'
                    width='16'>
                    <path
                      d='M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z'
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'></path>
                    <line
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      x1='16.511'
                      x2='22'
                      y1='16.511'
                      y2='22'></line>
                  </svg>
                </div>
                <span className='leading-[25px] inline-block max-w-[140px] overflow-hidden text-ellipsis align-bottom whitespace-nowrap text-search-placeholder'>
                  Search
                </span>
              </div>
            </div>
          </div>

          <div className='flex grow shrink-0 basis-[127px] relative content-center items-center justify-end flew-wrap '>
            <Link href='https://captainistz.me'>
              <a>
                <div className='flex flex-row pl-[24px] whitespace-nowrap align-baseline'>
                  <div className='ml-[22px]'>
                    <div className='flex flex-col'>About</div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
