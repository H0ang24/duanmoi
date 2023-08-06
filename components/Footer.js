import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { SlEarphonesAlt } from "react-icons/sl";
import { AiOutlineFileProtect } from "react-icons/ai";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";
import { BsFacebook, BsPinterest, BsSearch, BsCart } from "react-icons/bs";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-[#1C1917]  h-32 border-b border-[#333333]  ">
          <div className="flex justify-between px-10 items-center h-32 container mx-auto w-full">
            <div className="text-white flex items-center gap-7">
              <FiShoppingCart className="text-[32px]"></FiShoppingCart>
              <div>
                <p>FAST AND FREE DELIVERY</p>
                <p>Free delicery for all orders over $140</p>
              </div>
            </div>
            <div className="text-white flex items-center gap-7">
              <SlEarphonesAlt className="text-[32px]"></SlEarphonesAlt>
              <div>
                <p>24/7 CUSTOMER SUPPORT</p>
                <p>Friendly 24/7 customer support</p>
              </div>
            </div>
            <div className="text-white flex items-center gap-7">
              <AiOutlineFileProtect className="text-[32px]"></AiOutlineFileProtect>
              <div>
                <p>MONEY BACK GUARANTEE</p>
                <p>We return money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 flex gap-10 justify-center items-cente text-white bg-[#1C1917]">
          <div className="w-[412px] mr-10">
            <img
              alt="anh"
              className="w-[110px]"
              src="https://demo.shopifyhydrogen.io/sanity/461aa05da169ce9b8d7598d5e0e9ade7aef795c1-1765x515.svg"
            ></img>
            <p className="text-base py-4 "></p>
            <div>
              <div className="flex items-center gap-2 py-2 ">
                <div className="">
                  Address:1418 River Drive, Suite 35 <br /> Cottonhall, CA 9622,
                  United States.
                </div>
              </div>
              <div className="flex items-center gap-2 py-2 ">
                <p>Email: sale@owenstore.com</p>
              </div>
              <div className="flex items-center gap-2 py-2 ">
                <p>Phone: +91333444555</p>
              </div>
              <div className="flex items-center py-5">
                <div className="pr-4 text-xl cursor-pointer ">
                  <BsFacebook />
                </div>
                <div className="pr-4 text-xl cursor-pointer ">
                  <AiOutlineTwitter />
                </div>
                <div className="pr-4 text-xl cursor-pointer ">
                  <AiOutlineInstagram />
                </div>
                <div className="pr-4 text-xl cursor-pointer ">
                  <BsPinterest />
                </div>
                <div className="pr-4 text-xl cursor-pointer ">
                  <AiFillYoutube />
                </div>
              </div>
            </div>
          </div>
          <div className="list_foot w-48">
            <h2 className="font-bold pb-5">COMPANY</h2>
            <div className="grid">
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> About Us</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Careers</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Affiates</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Blog</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Orders and Return</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Contact Us</p>
              </div>
            </div>
          </div>
          <div className="list_foot w-48">
            <h2 className="font-bold pb-5">SHOPS</h2>
            <div className="grid">
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> New Arrivals</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Accessories</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Men</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Women</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Brands</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Shop All</p>
              </div>
            </div>
          </div>
          <div className="list_foot w-48">
            <h2 className="font-bold pb-5">HELPS</h2>
            <div className="grid">
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Customer Service</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> My Account</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Find a Store</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Legal & Privacy</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Gift Card</p>
              </div>
              <div
                style={{ transition: "all 2s" }}
                className="flex items-center pt-3 cursor-pointer group"
              >
                <p className="hidden group-hover:block">
                  {" "}
                  <AiOutlineRight />{" "}
                </p>{" "}
                <p> Term & Conditions</p>
              </div>
            </div>
          </div>
          <div className="list_foot w-[300px] flex flex-col gap-3 ">
            <h2 className="font-bold pb-5">SUBSCRIBE</h2>
            <div className="text-[16px]">
              You&apos;ll also be the first to see our new arrivals, get early
              access to sales and more!
            </div>
            <div className="opacity-100 flex flex-col justify-center md:flex-row relative newsletter-input">
              <input
                placeholder="Your email address"
                className="border-0 py-3 w-full px-6 font-normal bg-white rounded-full text-black md:rounded-br-none md:rounded-tr-none"
              ></input>
              <button className="bg-red-600 rounded-3xl h-12 md:rounded-bl-none md:rounded-tl-none w-full mt-4 md:mt-0 md:w-36">
                {" "}
                JOIN
              </button>
            </div>

            <div className="py-5">
              <h2 className="font-bold pb-5">COUNTRY</h2>
            </div>
          </div>
        </div>
        <div className=" bg-[#292524] h-[100px]">
          <div className="flex items-center justify-between py-4 px-10 h-[100px] container mx-auto w-full">
            <p className="text-white">
              © 2023, Owen Demo Powered by shopifyhydrogen.io
            </p>
            <img src="https://demo.shopifyhydrogen.io/sanity/5fce17daaede12e1470fae70393dbc47c22c1bc1-249x25.png"></img>
          </div>
        </div>
      </footer>
    </>
  );
}
