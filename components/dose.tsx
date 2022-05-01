import type { NextPage } from 'next'

const Dose: NextPage = ({ hospital, dose }: any) => {
  return (
    <div className='grow order-3'>
      <h1 className='text-center mb-[28px] text-xl text-slate-600'>Dose</h1>
      <div className='items-center'>
        <div className='flex flex-row max-w-[1000px] items-center flex-wrap'>
          {dose.map((e: any, index: number) => (
            <div
              key={e.name}
              className='flex-1 min-w-[244px] mx-[16px] card w-96 bg-base-100 shadow-xl mb-[20px]'>
              <div className='card-body'>
                <h2 className='card-title mb-[10px]'>Dose #{index + 1}</h2>
                {e['dose'].map((x: any) => (
                  <p key={x.name} className='text-left'>
                    • {x.name} {x.size} : {x.quantity}
                  </p>
                ))}
                <div className='card-actions justify-end items-end text-right'>
                  <div>By {hospital[e.hospital].name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dose
