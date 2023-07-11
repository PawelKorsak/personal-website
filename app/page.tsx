import Image from 'next/image'
import PCBpic from '../public/board-453758.jpg'
import SimpleFlexTile from '@/components/SimpleFlexTile'

export default function Home() {
  return (
    <div>
      <div className="flex w-screen h-screen">
        <div className="flex relative w-screen items-center justify-center">
          <div className="bg-image opacity-30 w-full h-full absolute"></div>
            <div className="relative">
              <h1 className="p-2 flex font-bold text-8xl text-white text-center drop-shadow">
                Are you in need of an embedded engineer?  
              </h1>
            </div>
          </div>
        </div>
        <div className="flex w-screen h-screen">
          <div className="flex w-screen p-20 justify-evenly">
            <div>
              <SimpleFlexTile title="Hardware" description="I can design hardware for your project"/>
            </div>
            <div>
              <SimpleFlexTile title="Firmware" description="I can write firmware for your project"/> 
            </div>
          </div>
        </div>
    </div>
  )
}

