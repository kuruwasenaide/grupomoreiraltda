"use client"
import { useState, useEffect } from 'react'
import NavBar from '@/components/Navbar'
import Hero from '@/sections/Hero'
import Services from '@/sections/Services'
import Footer from '@/components/Footer'
import About from '@/sections/About'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'
import Button from '@/components/Button'

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <NavBar />
      <div className='w-screen min-h-screen'>
        <Hero />
        <Services />
        <About />
        <div className='pt-10 md:pt-12 pb-8 md:pb-10 px-3 flex bg-red-700 items-center'>
          <div className='max-w-6xl mx-auto w-full'>
            <h2 className='text-3xl md:text-4xl font-bold text-center text-white mb-3'>Pronto para transformar seu projeto em realidade?</h2>
            <div className='space-y-4 mx-auto max-w-3xl flex flex-col items-center'>
              <p className='text-white text-md lg:text-lg font-medium text-center'>Entre em contato conosco hoje mesmo para uma consulta gratuita e descubra como podemos ajudar no seu próximo projeto.</p>
              <Button  variant='secondary' className='rounded-xs' onClick={() => scrollToSection('contact')}>Enviar Mensagem</Button>
            </div>
          </div>
        </div>
        <Contact />
      </div>

      <Footer />
    </>
  );
}
