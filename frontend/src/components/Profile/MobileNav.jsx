import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const MobileNav = () => {
    const role = useSelector((state)=> state.auth.role);
  return (
    <>
     {role === "user" && (
         <div className='w-full flex lg:hidden items-center justify-between mt-4'>
         <Link 
         className="text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all duration-300" 
         to="/profile">
         Favourites
         </Link>
         <Link 
         className="text-zinc-100 font-semibold w-full text-center hover:bg-zinc-900 rounded transition-all duration-300" 
         to="/profile/orderHistory">
         Order History
         </Link>
         <Link 
        className="text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all duration-300" 
        to="/profile/settings">
        Settings
        </Link>
    </div>
     )}

       {role === "admin" && (
         <div className='w-full flex lg:hidden items-center justify-between mt-4'>
         <Link 
         className="text-zinc-100 font-semibold w-full  text-center hover:bg-zinc-900 rounded transition-all duration-300" 
         to="/profile">
          All Orders
         </Link>
         <Link 
         className="text-zinc-100 font-semibold w-full text-center hover:bg-zinc-900 rounded transition-all duration-300" 
         to="/profile/orderHistory">
         Add Book
         </Link>
        </div>
     )}
    </>
  )
}

export default MobileNav
