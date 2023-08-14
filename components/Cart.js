import React from "react";
import ShopBest from "./ShopBest";
export default function Cart({ setGioHangHienThi, trangThai }) {
  return (
    trangThai && (
      <div className="h-screen w-[470px] bg-white border-black top-0 right-0 fixed z-10 px-10 py-6">
        <div className="flex justify-between items-center text-[20px] text-black">
          <div className="font-bold">Cart</div>
          <button
            onClick={() => {
              setGioHangHienThi(false);
            }}
            className="text-[25px]"
          >
            x
          </button>
        </div>
        <div className="text-black my-5">
          Looks like you havent added anything yet, lets get you started!
        </div>
        <button className="bg-black rounded font-medium text-center py-3 px-6 bg-primary text-contrast w-auto">
          Continue shopping
        </button>
        <div>
          <div className="text-black mt-16 mb-10">
            <p className="font-bold">Shop Best Sellers</p>
          </div>
          <div >
           <ShopBest></ShopBest>
          </div>
        </div>
      </div>
    )
  );
}
