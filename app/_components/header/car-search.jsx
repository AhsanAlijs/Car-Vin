'use client';
import { useState } from "react";

export default function CarSearch() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mt-6 max-sm:text-sm">
      <div className="flex gap-2 items-center justify-between w-full">
        <p className="">
          Search by:
        </p>

        <div className="flex gap-4">
          <button onClick={() => setSelected(0)} className={`border-b-2 ${selected === 0 ? 'border-red-700' : 'border-transparent'}`}>
            VIN
          </button>

          <button onClick={() => setSelected(1)} className={`border-b-2 ${selected === 1 ? 'border-red-700' : 'border-transparent'}`}>
            VRM, UK, NI
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-between group">
        <input type="text" placeholder={selected === 0 ? 'Enter VIN number' : 'Enter registeration number'} className="rounded-l-full border-red-700 border-2 bg-transparent px-6 py-4 w-full focus-visible:outline-none text-white max-sm:py-3 max-sm:px-4 group-has-[button:hover]:border-red-800 transition-colors" />

        <button className="bg-red-700 rounded-r-full min-w-max px-6 py-4 max-sm:py-3 max-sm:px-4 hover:bg-red-800 transition-colors">
          Get report
        </button>
      </div>
    </div>
  )
}