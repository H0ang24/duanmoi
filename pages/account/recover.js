import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
export default function recover() {
  return (
    <>
      <Layout>
        <div className="flex justify-center mb-24 px-4">
          <div className="max-w-md w-full flex flex-col">
            <p className="text-2xl text-center font-medium mb-10">
              FORGOT PASSWORD.
            </p>
            <p className="mb-10">
              Enter the email address associated with your account to receive a
              link to reset your password.
            </p>
            <input
              className="border-gay-500 border w-full h-[45px] pl-5 mb-5"
              placeholder="Email address *"
            />

            <button className="bg-black text-white rounded py-3 px-4 focus:shadow-outline block w-full">
              Request Reset Link
            </button>
            <div className="flex justify-between items-center mt-5 border-t border-gray-300">
              <p className=" text-sm mt-6">
                Return to <Link href='/account/login' className="inline underline">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
