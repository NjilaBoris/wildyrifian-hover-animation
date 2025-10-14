import React from 'react'
import Folder from './components/Folder'

const App = () => {
  return (
    <>
      <nav className="absolute top-0 w-full p-8 flex justify-between items-center">
        <p className="uppercase text-[0.8rem] font-medium leading-none">Design Ledger</p>
        <p className="uppercase text-[0.8rem] font-medium leading-none">Experiment 0492</p>
      </nav>

      <div className="w-full h-[100svh] flex flex-col justify-end overflow-hidden">
        {/* Row 1 */}
        <div className="relative w-full flex -bottom-[13rem] md:bottom-0 md:flex-col">
          <Folder
            variant="variant-1"
            index="01"
            title="figures"
            images={["/img-1.jpg", "/img-2.jpg", "/img-3.jpg"]}
          />
          <Folder
            variant="variant-2"
            index="02"
            title="persona"
            images={["/img-4.jpg", "/img-5.jpg", "/img-6.jpg"]}
          />
        </div>

        {/* Row 2 */}
        <div className="relative w-full flex -bottom-[7.5rem] md:bottom-0 md:flex-col">
          <Folder
            className="flex-[2]"
            variant="variant-2"
            index="03"
            title="form"
            images={["/img-7.jpg", "/img-8.jpg", "/img-9.jpg"]}
          />
          <Folder
            className="flex-[3]"
            variant="variant-3"
            index="04"
            title="chromatic"
            images={["/img-10.jpg", "/img-11.jpg", "/img-12.jpg"]}
          />
        </div>

        {/* Row 3 */}
        <div className="relative w-full flex -bottom-[2rem] md:bottom-0 md:flex-col">
          <Folder
            variant="variant-1"
            index="05"
            title="mythos"
            images={["/img-13.jpg", "/img-14.jpg", "/img-15.jpg"]}
          />
          <Folder
            variant="variant-2"
            index="06"
            title="kinetics"
            images={["/img-16.jpg", "/img-17.jpg", "/img-18.jpg"]}
          />
        </div>
      </div>
    </>
  )
}
export default App
