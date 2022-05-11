import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Navbar: NextPage = ({ messages }: any) => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)

  const router = useRouter()

  const submitSearch = () => {
    const idx = messages.filter((k: any) => k.name.startsWith(search))[0]

    if (idx && search != '') {
      router.push({ pathname: '/letter/' + idx.name })
    } else {
      setError(true)
      console.log('not found')
    }
  }

  const submitHandler = (e: any) => {
    if (e.keyCode == 13) {
      submitSearch()
    }
  }

  const searchHandler = (e: any) => {
    setError(false)
    setSearch(e.target.value)
  }

  return (
    <nav className='order-none p-0'>
      <div className='basis-[60px]'></div>
      <div
        className={
          error
            ? 'fixed z-[4] mx-auto bottom-[12px] left-[12px] max-w-[200px] w-full'
            : 'fixed z-[4] mx-auto bottom-[12px] left-[12px] max-w-[200px] w-full hidden'
        }>
        <div className='alert alert-error shadow-lg'>
          <div className='flex flex-row content-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-current flex-shrink-0 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>Not found 🤔.</span>
          </div>
        </div>
      </div>
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
              aria-label='Search Input'
              value={search}
              autoCapitalize='none'
              type='text'
              placeholder='Search'
              tabIndex={0}
              onKeyDown={submitHandler}
              onChange={searchHandler}
              className='bg-search-grey text-[16px] color-search-grey border-0 rounded-[8px] box-border z-[2] h-full w-full py-[3px] px-[16px] outline-0 leading-[18px]'
            />
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
