import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
export default function Register() {
  return (
    <>
      <Layout>
        <div className="flex justify-center mb-24 px-4">
          <div className="max-w-md w-full flex flex-col">
            <p className="text-2xl text-center font-medium mb-10">
              CREATE AN ACCOUNT.
            </p>
            <input
              className="border-gay-500 border w-full h-[45px] pl-5 mb-5"
              placeholder="First Name"
            />
            <input
              className="border-gay-500 border w-full h-[45px] pl-5 mb-5"
              placeholder="Last Name"
            />
            <input
              className="border-gay-500 border w-full h-[45px] pl-5 mb-5"
              placeholder="Email address *"
            />
            <input
              className="border-gay-500 border w-full h-[45px] pl-5 mb-5"
              placeholder="Password *"
            />
            <button className="bg-black text-white rounded py-3 px-4 focus:shadow-outline block w-full">
              Sign in
            </button>
            <div className="flex justify-between items-center mt-5 border-t border-gray-300">
              <p className=" text-sm mt-6">
                Already have an account?{" "}
                <Link href='/account/login' className="inline underline">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
