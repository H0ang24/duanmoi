import React from 'react'
import { BsArrowLeftRight } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link'
export default function Product({ product }) {
    console.log(product);
    return (
        <>
            <div className=''>
                <Link 
                href={`/product/${product.id}`}
                className='mb-5 '>
                    <div className={`flex relative overflow-hidden ${product.images.length < 2 ? "" : "anh"} `}>
                        <img src={product?.images[0]?.src}></img>
                        <img src={product?.images[1]?.src}></img>
                    </div>

                    <div className='absolute top-4 right-4'>
                        <div className=' text-white bg-red-600 w-9 text-center  aspect-[2/1]'>sale</div>
                        <div className=' text-white bg-red-600 w-9 text-center  aspect-[2/1]'>new</div>
                    </div>
                </Link>
                <div className='flex flex-col gap-1'>
                    <div className='flex justify-between items-start'>
                        <p className='font-light'>{product.vendor}</p>
                        <div className='flex items-center gap-2'>
                            <BsArrowLeftRight className='text-[20px]'></BsArrowLeftRight>
                            <AiOutlineHeart className='text-[20px]'></AiOutlineHeart>
                        </div>
                    </div>
                    <div className='flex text-amber-500 items-center gap-1'>
                        <div className='flex'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </div>
                        <p className='text-black'>(7)</p>
                    </div>
                    <div className='font-semibold'>
                        {product.title}
                    </div>
                    <div className='flex gap-3'>
                        <del className='text-gray-500 font-bold'>{product.variants[0].compare_at_price}$</del>
                        <p className='text-red-500 font-bold'>{product.variants[0].price}$</p>
                    </div>
                </div>
            </div>
        </>
    )
}
