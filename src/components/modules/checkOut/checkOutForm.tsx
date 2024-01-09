import React from 'react'


const CheckOutForm : React.FC=() => {


  return (
    <form className="flex flex-col justify-center item-center gap-3">
    <div className="bg-[#f6f6f6] w-full h-12 flex justify-start item-center text-start my-auto ps-4 font-pathway text-2xl font-bold">
      <span className="mt-2 tracking-widest">Info</span>
    </div>
    <div className="border-2 border-gray-300 px-3 pt-5">
      <div className="relative w-[80%]">
        <input
          autoComplete="off"
          id="fullName"
          name="fullName"
          type="text"
          className="peer h-8 w-full text-gray-900 focus:outline-none"
        />
        <label
          htmlFor="fullName"
          className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Full Name
        </label>
      </div>
    </div>
    <div className="bg-[#f6f6f6] w-full h-12 flex justify-start item-center text-start my-auto ps-4 font-pathway text-2xl font-bold">
      <span className="mt-2 tracking-widest">Billing Address</span>
    </div>
    <div className="flex flex-col justify-center items-start gap-3 border-2 border-gray-300 px-3 pt-5">
      <div className="relative w-[80%]">
        <input
          autoComplete="off"
          id="address"
          name="address"
          type="text"
          className="peer h-8 w-full text-gray-900 focus:outline-none"
        />
        <label
          htmlFor="address"
          className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Address
        </label>
      </div>
    </div>
    <div className="flex flex-col justify-center items-start gap-3 border-2 border-gray-300 px-3 pt-5">
      <div className="relative w-[80%]">
        <input
          autoComplete="off"
          id="streetName"
          name="streetName"
          type="text"
          className="peer h-8 w-full text-gray-900 focus:outline-none"
        />
        <label
          htmlFor="streetName"
          className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Street Name
        </label>
      </div>
    </div>
    <div className="flex flex-col justify-center items-start gap-3 border-2 border-gray-300 px-3 pt-5">
      <div className="relative w-[80%]">
        <input
          autoComplete="off"
          id="town"
          name="town"
          type="text"
          className="peer h-8 w-full text-gray-900 focus:outline-none"
        />
        <label
          htmlFor="town"
          className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Town
        </label>
      </div>
    </div>
    <div className="flex flex-col justify-center items-start gap-3 border-2 border-gray-300 px-3 pt-5">
      <div className="relative w-[80%]">
        <input
          autoComplete="off"
          id="state"
          name="state"
          type="text"
          className="peer h-8 w-full text-gray-900 focus:outline-none"
        />
        <label
          htmlFor="state"
          className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          State
        </label>
      </div>
    </div>
    <div className="flex flex-col justify-center items-start gap-3 border-2 border-gray-300 px-3 pt-5">
      <div className="relative w-[80%]">
        <input
          autoComplete="off"
          id="PINCode"
          name="PINCode"
          type="text"
          className="peer h-8 w-full text-gray-900 focus:outline-none"
        />
        <label
          htmlFor="PINCode"
          className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          PIN Code
        </label>
      </div>
    </div>
    <div className="bg-[#f6f6f6] w-full h-12 flex justify-start item-center text-start my-auto ps-4 font-pathway text-2xl font-bold">
      <span className="mt-2 tracking-widest">Order Contact</span>
    </div>
    <div className="flex flex-col justify-center items-start gap-3 border-2 border-gray-300 px-3 pt-5">
      <div className="relative w-[80%]">
        <input
          autoComplete="off"
          id="phone"
          name="phone"
          type="text"
          className="peer h-8 w-full text-gray-900 focus:outline-none"
        />
        <label
          htmlFor="phone"
          className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Phone
        </label>
      </div>
    </div>
    <div className="flex flex-col justify-center items-start gap-3 border-2 border-gray-300 px-3 pt-5">
      <div className="relative w-[80%]">
        <input
          autoComplete="off"
          id="email"
          name="email"
          type="text"
          className="peer h-8 w-full text-gray-900 focus:outline-none"
        />
        <label
          htmlFor="email"
          className="absolute left-2 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
        >
          Email Address
        </label>
      </div>
    </div>
  </form>
  )
}

export default CheckOutForm