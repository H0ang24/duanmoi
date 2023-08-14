import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Layout>
        <div className="flex justify-center mb-24 px-4">
          <div className="max-w-md w-full flex flex-col">
            <p className="text-2xl text-center font-medium mb-10">SIGN IN.</p>
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
                New to Hydrogen?{" "}
                <Link href='/account/register' className="inline underline">Create an account</Link>
              </p>
              <Link href='/account/recover' className="mt-6  text-sm text-gray-400">Forgot password</Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
