import { useState, useEffect, useRef } from 'react'
import { FlipWords } from '../components/FlipWords'
import Button from '../components/Button';

export default function About() { 
  const Counter = ({ end, label }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);
              
              let current = 0;
              const duration = 3000;
              const startTime = performance.now();
            
              function animate(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
            
                const eased = 1 - Math.pow(1 - progress, 4);
            
                current = Math.floor(eased * end);
                setCount(current);
            
                if (progress < 1) requestAnimationFrame(animate);
              }
            
              requestAnimationFrame(animate);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    }, [end, hasAnimated]);
  
    return (
      <div ref={counterRef} className='flex flex-col items-center'>
        <span className='text-4xl md:text-5xl font-bold text-red-700'>+{count}</span>
        <span className='text-stone-700 font-medium'>{label}</span>
      </div>
    );
  };
  
  return (
    <>
      <section id='about' className='bg-white pt-16 md:pt-20 pb-12 md:pb-16 px-6 flex items-center'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-8 sm:gap-12 items-center'>
            <div className='group bg-white flex flex-col rounded-sm shadow-md hover:shadow-sm w-full h-full transition-all overflow-hidden'>
              <div className='w-full aspect-[4/3] overflow-hidden'>
                <img
                  src='grupomoreira.jpg'
                  className='w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-104'
                />
              </div>
            </div>
            <div>
              <h3 className='text-2xl sm:text-4xl font-bold text-red-700 mb-4'>
                O Grupo Moreira
              </h3>
              <p className='text-stone-700 font-medium mb-4 leading-relaxed'>
                Há um quarto de século, o Grupo Moreira tem sido um pilar de desenvolvimento, progresso e inovação no oeste da Bahia. Com uma história marcada por uma dedicação incansável à excelência, nosso compromisso com a região e nossos clientes nunca foi tão sólido.
              </p>
              <p className='text-stone-700 font-medium leading-relaxed mb-8'>
                A nossa jornada tem sido guiada pela busca constante das melhores soluções em terraplanagem e projetos especiais, sempre com um olhar atento às melhores práticas ambientais. Cada projeto que empreendemos é uma oportunidade de demonstrar nosso compromisso com a sustentabilidade, minimizando os impactos ambientais e entregando resultados superiores.
              </p>
              <div className='grid grid-cols-3 gap-6 text-center'>
                <Counter end={25} label='Anos de Experiência' />
                <Counter end={500} label='Projetos Concluídos' />
                <Counter end={300} label='Clientes Satisfeitos' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}