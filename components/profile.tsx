import type { NextPage } from 'next'

import Image from 'next/image'
import Link from 'next/link'

const Profile: NextPage = ({ hospital, dose }: any) => {
  return (
    <main className='order-1 grow-0'>
      <div className='pt-[30px] px-[20px] box-content w-[calc(100%-40px)] mb-[12px] max-w-[935px] grow mx-auto'>
        <header className='mb-[44px] flex flex-row'>
          <div className='grow basis-0 mr-[30px]'>
            <div className='cursor-pointer items-center self-center block flex-none content-center cursor-pointer'>
              <span className='block shrink-0 grow-0 overflow-hidden relative w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] rounded-full'>
                <Image
                  src='/assets/me.jpg'
                  alt='me'
                  width={150}
                  height={150}
                  layout='responsive'
                  className='sm:w-full sm:h-full'></Image>
              </span>
            </div>
          </div>
          <section className='grow-[2] ml-[20px] basis-[30px] shrink-0 min-w-0 mt-[20px] sm:mt-0'>
            <div className='mb-[20px] items-start sm:items-center shrink min-w-0 flex flex-col sm:flex-row'>
              <h1 className='block overflow-hidden text-ellipsis whitespace-nowrap text-black font-[300] text-[28px] leading-[32px] mt-[-5px] mb-[-6px] mx-0'>
                captainistz
              </h1>
              <div className='mt-[16px] sm:mt-0 ml-[-6px] sm:ml-[20px] flex grow-0 shrink flex-start flex-row'>
                <div className='flex grow-0 shrink-0 min-w-0 min-h-0 justify-start flex-col'>
                  <div className='flex grow-0 shrink-0 justify-start flex-row'>
                    <div className='overflow-hidden ml-[8px] flex shrink grow flex-col min-w-0 min-h-0 justify-start'>
                      <button className='rounded border border-slate-300 py-[5px] px-[9px] text-[14px] font-[600] block cursor-pointer box-border '>
                        <div>
                          <Link href={'https://www.facebook.com/captainistz/'}>
                            <a>Message</a>
                          </Link>
                        </div>
                      </button>
                    </div>
                    <div className='overflow-hidden ml-[8px] flex shrink grow flex-col min-w-0 min-h-0 justify-start'>
                      <button className='rounded border bg-[#0095f6] border-slate-300 py-[5px] px-[9px] text-[14px] font-[600] block cursor-pointer box-border '>
                        <div className='text-white'>
                          <Link href={'https://www.instagram.com/captainistz/'}>
                            <a>Follow</a>
                          </Link>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className='mb-[20px] hidden flex-col sm:flex md:flex-row'>
              <li className='ml-[0px] text-[16px] mr-[48px]'>
                <div className='block font-[400] m-0'>
                  <span className='font-[600]'>{hospital.length}</span>
                  {' hospitals'}
                </div>
              </li>
              <li className='ml-[0px] text-[16px] mr-[48px]'>
                <div className='block font-[400] m-0'>
                  <span className='font-[600]'>{hospital.length}</span>
                  {' doctors'}
                </div>
              </li>
              <li className='ml-[0px] text-[16px] mr-[48px]'>
                <div className='block font-[400] m-0'>
                  <span className='font-[600]'>{dose.length}</span>
                  {' dose overwrites'}
                </div>
              </li>
            </ul>
            <div className='hidden sm:block relative '>
              <div className='flex shrink-0 grow-0 justify-start'>
                <div className='block text-[#8E8E8E]'>Major Depressive Disorder</div>
              </div>
              <div className='block'>
                {
                  'Depression(n.) - a serious medical condition in which a person feels very sad, hopeless, and unimportant'
                }
                <br /> {'by : '}{' '}
                <Link href='https://www.instagram.com/captainistz/'>
                  <a className='text-[#00376B]'>@Captainistz</a>
                </Link>
              </div>
            </div>
          </section>
        </header>
        <ul className='mb-[20px] mx-[20px] flex flex-row sm:hidden'>
          <li className='ml-[0px] text-[16px] mr-[48px]'>
            <div className='block font-[400] m-0'>
              <span className='font-[600]'>3</span>
              {' hospitals'}
            </div>
          </li>
          <li className='ml-[0px] text-[16px] mr-[48px]'>
            <div className='block font-[400] m-0'>
              <span className='font-[600]'>3</span>
              {' doctors'}
            </div>
          </li>
          <li className='ml-[0px] text-[16px] mr-[48px]'>
            <div className='block font-[400] m-0'>
              <span className='font-[600]'>7</span>
              {' dose overwrites'}
            </div>
          </li>
        </ul>
        <div className='mx-[20px] block sm:hidden relative '>
          <div className='flex shrink-0 grow-0 justify-start'>
            <div className='block text-[#8E8E8E]'>Major Depressive Disorder</div>
          </div>
          <div className='block'>
            {
              'Depression(n.) - a serious medical condition in which a person feels very sad, hopeless, and unimportant'
            }
            <br /> {'by : '}{' '}
            <Link href='https://www.instagram.com/captainistz/'>
              <a className='text-[#00376B]'>@Captainistz</a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile
