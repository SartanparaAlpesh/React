import React from "react";

function Card({username = "Sarah Dayan" , btnText}) {
    console.log(username);
    
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <div className='w-full max-w-3xl flex flex-col'>
        <h1 className='bg-green-500 text-black p-4 rounded-t-xl rounded-b-none shadow-md text-center w-full !mb-0'>
          Tailwind test
        </h1>

        <figure className="md:flex bg-gray-100 rounded-t-none rounded-b-xl p-8 md:p-0 w-full !mt-0 overflow-hidden">
          <img
            className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="/sarah-dayan.jpg"
            alt="Sarah Dayan"
            width="384"
            height="512"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>

            <figcaption className="font-medium">
              <div className="text-cyan-600">
                 {username}
              </div>
              <div className="text-gray-500">
                Staff Engineer, Alpesh
              </div>
            </figcaption>
            <button className="mt-4 px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition-colors duration-200">
              {btnText}
            </button>
            <button className="mt-10 px-6 bg-black rounded-lg hover:bg-gray-800  text-sm font-semibold transation-color duration-400">
                {btnText}
            </button>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Card;