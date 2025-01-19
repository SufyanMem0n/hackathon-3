"use client";

import Link from 'next/link'
import React, { useState } from "react";
import Layout from "../components/layout";

const Page = () => {
  const [promoCode, setPromoCode] = useState("");

  return (
    <Layout>
           <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="col-span-2 space-y-6">
          {/* Billing Info */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Billing Info</h2>
            <p className="text-gray-500 text-sm mb-6">Please enter your billing info</p>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Address"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Town or city"
                className="border p-2 rounded w-full"
              />
            </div>
          </section>

          {/* Rental Info */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Rental Info</h2>
            <p className="text-gray-500 text-sm mb-6">Please select your rental date</p>
            {/* Pick-Up */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-2">Pick - Up</h3>
              <div className="grid grid-cols-3 gap-4">
                <select className="border p-2 rounded w-full text-gray-500">
                  <option>Select your city</option>
                </select>
                <input type="date" className="border p-2 rounded w-full" />
                <input type="time" className="border p-2 rounded w-full" />
              </div>
            </div>
            {/* Drop-Off */}
            <div>
              <h3 className="font-medium text-gray-800 mb-2">Drop - Off</h3>
              <div className="grid grid-cols-3 gap-4">
                <select className="border p-2 rounded w-full text-gray-500">
                  <option>Select your city</option>
                </select>
                <input type="date" className="border p-2 rounded w-full" />
                <input type="time" className="border p-2 rounded w-full" />
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h2>
            <p className="text-gray-500 text-sm mb-6">Please enter your payment method</p>
            <div className="space-y-4">
              {/* Credit Card */}
              <div className="border p-4 rounded">
                <label className="flex items-center mb-2">
                  <input type="radio" name="payment" className="mr-2" />
                  <span className="font-medium">Credit Card</span>
                  <div className="ml-auto">
                    <img src="/Visa.png" alt="visa" className="h-6" />
                  </div>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Card number" className="border p-2 rounded" />
                  <input type="text" placeholder="DD / MM / YY" className="border p-2 rounded" />
                  <input type="text" placeholder="Card holder" className="border p-2 rounded" />
                  <input type="text" placeholder="CVC" className="border p-2 rounded" />
                </div>
              </div>
              {/* PayPal */}
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                <span className="font-medium">PayPal</span>
                <img src="/PayPal.png" alt="paypal" className="ml-auto h-4" />
              </label>
              {/* Bitcoin */}
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" />
                <span className="font-medium">Bitcoin</span>
                <img src="/Bitcoin.png" alt="bitcoin" className="ml-auto h-3" />
              </label>
            </div>
          </section>

          {/* Confirmation */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Confirmation</h2>
            <p className="text-gray-500 text-sm mb-6">We are getting to the end. Just a few clicks and your rental is ready!</p>
            <label className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>I agree with sending Marketing and newsletter emails. No spam, promised!</span>
            </label>
            <label className="flex items-center mb-6">
              <input type="checkbox" className="mr-2" />
              <span>I agree with our terms and conditions and privacy policy.</span>
            </label>
             <Link href='/Admin' target='blank'>
               <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Rent Now
            </button>
            </Link>
          </section>
        </div>

        {/* Right Section - Rental Summary */}
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Rental Summary</h2>
            <p className="text-gray-500 text-sm mb-4">
              Prices may change depending on the length of the rental and the price of your rental car.
            </p>
            <div className="flex items-center mb-4">
              <img
                src="/Look (1).png"
                alt="Nissan GT - R"
                className="h-16 w-24 object-cover rounded mr-4"
              />
              <div>
                <h3 className="font-semibold">Nissan GT - R</h3>
                <p className="text-yellow-500 text-sm">★★★★☆ 440+ Reviewer</p>
              </div>
            </div>
            <div className="text-sm text-gray-500 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$80.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0</span>
              </div>
            </div>
            <div className="my-4">
              <input
                type="text"
                placeholder="Apply promo code"
                className="border p-2 rounded w-3/4 mr-2"
              />
              <button className="bg-gray-200 text-gray-800 px-3 py-2 rounded hover:bg-gray-300">
                Apply now
              </button>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Rental Price</span>
              <span>$80.00</span>
            </div>
          </section>
        </div>
      </div>
    </div>
    </Layout>
   );
};

export default Page;
