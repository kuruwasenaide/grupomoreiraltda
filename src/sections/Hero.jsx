import { useState, useEffect } from 'react'
import { FlipWords } from '../components/FlipWords'
import Button from '../components/Button';

export default function Hero() {
  const words = ["Grama Líquida", "Pavimentação", "Terraplenagem"];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
       <section id='hero' className='max-w-screen n min-h-[95vh] flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 pt-16 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('/banner.jpg')`
        }}>
        <div className='text w-screen md:w-7xl text-white px-6'>
          <h1 className="text-4xl w-xl text-left md:text-7xl font-bold mb-4 animate-fade-in block">
            Soluções em<br/>
            <span className="text-red-700 relative w-full "><FlipWords duration={2000} words={words}/></span>
          </h1>
          <p className='text-md text-left md:text-lg mb-4 md:mb-6 font-medium text-white'>
          Há 25 anos entregando excelência e inovação no Oeste da Bahia.
          </p>
          <div className='flex flex-col md:flex-row gap-5 gap-y-4 w-full md:w-2xl '>
            <Button variant="primary" className='rounded-xs w-full' onClick={() => scrollToSection('contact')}>Solicitar Orçamento</Button>
            <Button variant="ghost" className='rounded-xs w-full' onClick={() => scrollToSection('services')}>Saiba Mais</Button>
          </div>
        </div>
      </section>
  </>
  )
}
