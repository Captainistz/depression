import type { NextPage } from 'next'

import Link from 'next/link'

const Hospital: NextPage = ({ hospital }: any) => {
  return (
    <div className='grow order-2 mb-[56px] '>
      <h1 className='text-center mb-[24px] text-xl text-slate-600'>Hospital</h1>
      <div className='items-center'>
        <div className='flex flex-row max-w-[1000px] items-center flex-wrap'>
          {hospital.map((e: any) => (
            <div
              key={e.name}
              className='flex-1 min-w-[244px] mx-[16px] card w-96 bg-base-100 shadow-xl mb-[20px] '>
              <div className='card-body'>
                <h2 className='card-title mb-[10px]'>{e.name}</h2>
                <p className='text-right mb-[10px]'>{e.date}</p>
                <Link href={e.link}>
                  <a>
                    <div className='card-actions justify-end'>
                      <button className='rounded border bg-[#0095f6] border-slate-300 py-[6px] px-[16px] text-[14px] font-[600] block cursor-pointer box-border '>
                        <div className='text-white'>Visit</div>
                      </button>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hospital
