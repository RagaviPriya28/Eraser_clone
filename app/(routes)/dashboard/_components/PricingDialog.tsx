// import React from 'react'
// import {
//     Dialog,
//     DialogClose,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
//   } from "@/components/ui/dialog"
// import Link from 'next/link'
// function PricingDialog() {
//   return (
//     <DialogContent className='max-w-4xl bg-white text-gray-900 p-6 rounded-xl shadow-lg z-50'>
//     <DialogHeader>
//       <DialogTitle>Upgrade Plan</DialogTitle>
//       <DialogDescription>
//       <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
//     <div
//       className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
//     >
//       <div className="text-center">
//         <h2 className="text-lg font-medium text-gray-900">
//           Professional
//           <span className="sr-only">Plan</span>
//         </h2>

//         <p className="mt-2 sm:mt-4">
//           <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 4.99$ </strong>

//           <span className="text-sm font-medium text-gray-700">/month</span>
//         </p>
//       </div>

//       <ul className="mt-6 space-y-2">
//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Everything included in free, plus: </span>
//         </li>

//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Unlimited Team Files </span>
//         </li>

//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Exclusive access to Tubeguruji.com content </span>
//         </li>

//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> More document features </span>
//         </li>

//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Email Support </span>
//         </li>

//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Instagram support </span>
//         </li>
//       </ul>

//       <Link
//         href="#"
//         className="mt-8 block rounded-full border border-indigo-600
//          bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
//       >
//         Upgrade
//       </Link>
//     </div>

//     <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
//       <div className="text-center">
//         <h2 className="text-lg font-medium text-gray-900">
//           Free
//           <span className="sr-only">Plan</span>
//         </h2>

//         <p className="mt-2 sm:mt-4">
//           <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> Free </strong>

//           <span className="text-sm font-medium text-gray-700">/month</span>
//         </p>
//       </div>

//       <ul className="mt-6 space-y-2">
//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> 5 Team files </span>
//         </li>

//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Limited Access to Tubeguruji.com </span>
//         </li>

//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Limited Document feature </span>
//         </li>

//         <li className="flex items-center gap-1">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className="size-5 text-indigo-700"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//           </svg>

//           <span className="text-gray-700"> Email Support </span>
//         </li>
//       </ul>

//       <a
//         href="#"
//         className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
//       >
//         Get Started
//       </a>
//     </div>
//   </div>
// </div>
//       </DialogDescription>
   
//     </DialogHeader>
//     <DialogFooter className="">
//           <DialogClose asChild>
           
//           </DialogClose>
//         </DialogFooter>
//   </DialogContent>
//   )
// }

// export default PricingDialog

import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Link from 'next/link'

function PricingDialog() {
  const [showPaymentDetails, setShowPaymentDetails] = useState(false); // State to show/hide payment details

  const handleUpgradeClick = () => {
    setShowPaymentDetails(true); // Show the payment details card
  }

  return (
    <DialogContent className="max-w-4xl bg-white text-gray-900 p-6 rounded-xl shadow-lg z-50">
      <DialogHeader>
        <DialogTitle>Upgrade Plan</DialogTitle>
        <DialogDescription>
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            {/* Display Payment Details if upgrade is clicked */}
            {showPaymentDetails ? (
              <div className="rounded-lg border border-gray-300 p-4 shadow-md">
                <h3 className="text-lg font-medium">Payment Details</h3>
                <p className="text-gray-700 mt-2">Please provide your payment information:</p>
                {/* Payment form (example) */}
                <form className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Card Number</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">CVC</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                  >
                    Pay Now
                  </button>
                </form>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                {/* Professional Plan */}
                <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
                  <div className="text-center">
                    <h2 className="text-lg font-medium text-gray-900">
                      Professional
                      <span className="sr-only">Plan</span>
                    </h2>
                    <p className="mt-2 sm:mt-4">
                      <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">$4.99</strong>
                      <span className="text-sm font-medium text-gray-700">/month</span>
                    </p>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-1">
                      {/* Plan Features */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-700">Unlimited Team Files</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-700">Exclusive Access to Tubeguruji.com</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-700">More document features</span>
                    </li>
                  </ul>
                  <button
                    className="mt-8 block w-full rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700"
                    onClick={handleUpgradeClick} // Trigger payment details view
                  >
                    Upgrade
                  </button>
                </div>

                {/* Free Plan */}
                <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                  <div className="text-center">
                    <h2 className="text-lg font-medium text-gray-900">
                      Free
                      <span className="sr-only">Plan</span>
                    </h2>
                    <p className="mt-2 sm:mt-4">
                      <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">Free</strong>
                      <span className="text-sm font-medium text-gray-700">/month</span>
                    </p>
                  </div>
                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-700">5 Team Files</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-indigo-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-700">Limited Document features</span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="mt-8 block w-full rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            )}
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="">
        <DialogClose asChild></DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}

export default PricingDialog
