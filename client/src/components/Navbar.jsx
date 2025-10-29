import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()

  return (
    <div className="fixed top-0 left-0 z-50 w-full backdrop-blur-md 
    shadow-[0_2px_10px_rgba(0,0,0,0.15)] flex justify-between items-center 
    py-3 px-4 sm:px-16 lg:px-24">
      
      {/* Logo / Brand */}
      <h2
        onClick={() => navigate("/")}
        className="font-semibold text-2xl sm:text-3xl cursor-pointer 
        bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600">
        zionlabs.ai
      </h2>

      {/* Auth Button / User Profile */}
      {user ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center cursor-pointer gap-2 rounded-full text-sm sm:text-base 
          bg-primary text-white px-6 sm:px-10 py-2.5 
          hover:opacity-90 active:scale-95 transition">
          Get started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}

export default Navbar
