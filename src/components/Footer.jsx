import { useState, useEffect } from 'react'

export default function Footer() {
    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
        <footer className='bg-white py-4 md:py-4 px-4 sm:px-6'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-8 mb-8'>
              <div>
                <a onClick={() => scrollToSection('hero')}><img src='/logo.png' className='w-60 md:w-full cursor-pointer' alt='Logo' /></a>
                <p className='text-stone-700 text-sm font-medium'>
                Há 25 anos no mercado, o Grupo Moreira é sinônimo de excelência e inovação no Oeste da Bahia.
                </p>
              </div>
              <div>
                <h4 className='font-bold mb-1 text-stone-700'>Social</h4>
                <ul className='text-sm text-stone-700 font-medium'>
                  <li><a href='https://www.instagram.com/hidrossemeadura.gmoreira/' target='_blank' className='hover:text-black'>Instagram</a></li>
                  <li><a href='http://wa.me/+5577998070059' target='_blank' className='hover:text-black'>Whatsapp</a></li>
                  <li><a href='mailto:contato@grupomoreiraltda.com.br' target='_blank' className='hover:text-black'>Email</a></li>
                </ul>
              </div>
              <div>
                <h4 className='font-bold mb-1 text-stone-700'>Serviços</h4>
                <ul className='text-sm text-stone-700 font-medium'>
                  <li><button onClick={() => scrollToSection('hidrossemeadura')} className='hover:text-black cursor-pointer'>Hidrossemeadura</button></li>
                  <li><button onClick={() => scrollToSection('terraplanagem')} className='hover:text-black cursor-pointer'>Terraplanagem</button></li>
                  <li><button onClick={() => scrollToSection('mapeamento')} className='hover:text-black cursor-pointer'>Mapeamento</button></li>

                </ul>
              </div>
              <div>
                <h4 className='font-bold mb-1 text-stone-700'>Contato</h4>
                <p className='text-sm text-stone-700 font-medium'>
                Av. Rio Grande, Nº 205, Antônio Geraldo <br />
                Barreiras - Bahia, Brasil
                </p>
              </div>
            </div>
            <div className='w-full pt-2 flex flex-col md:flex-row'>
              <p className='font-medium text-sm text-stone-700'>
                © 2025 Grupo Moreira. Todos os direitos reservados.
              </p>  
              <a href='https://www.instagram.com/suspeito/' target='_blank' className='md:ml-auto font-medium text-sm text-stone-700'>
                Desenvolvido por <span className='font-semibold'>Kauê Moreira</span>
              </a>
            </div>
            
          </div>
        </footer>
    </>
  )
}