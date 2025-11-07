import React from 'react'

export default function Button({ 
  children, 
  size = 'md', 
  variant = 'primary', 
  onClick,
  className = '',
  ...props 
}) {
  const sizes = {
    sm: 'px-4 py-2 text-base',
    md: 'px-8 md:px-6 py-3 text-base',
    lg: 'px-10 md:px-8 py-4 text-lg'
  }

  const variants = {
    primary: 'bg-red-700 text-white hover:bg-red-800 active:bg-red-800',
    secondary: 'bg-white text-red-700 hover:bg-neutral-100 active:bg-neutral-100',
    ghost: 'bg-transparent text-neutral-100 hover:bg-neutral-100 hover:text-black active:bg-neutral-100 active:text-black shadow-[inset_0_0_0_1.5px_rgb(245_245_245)]'
  }

  const baseClasses = 'cursor-pointer font-semibold transition-all inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}