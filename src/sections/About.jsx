import { useState, useEffect, useRef } from 'react'
import { FlipWords } from '../components/FlipWords'
import Button from '../components/Button';
import { InfiniteMovingCards } from "../components/InfiniteMovingCard";


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
  
    const testimonials = [
      {
        text: "A equipe da Moreira Empreendimentos superou todas as nossas expectativas. O projeto de hidrossemeadura foi executado com perfeição e os resultados foram visíveis em tempo recorde.",
        name: "João Silva",
        position: "Diretor de Operações - Agropecuária Rio Verde"
      },
      {
        text: "Profissionalismo exemplar em toda a execução do projeto de terraplanagem. A equipe demonstrou conhecimento técnico e comprometimento com prazos.",
        name: "Maria Santos",
        position: "Engenheira Civil - Construtora Horizonte"
      },
      {
        text: "O serviço de mapeamento com drone foi essencial para o planejamento da nossa obra. Precisão e agilidade que fizeram toda a diferença no projeto.",
        name: "Carlos Mendes",
        position: "Coordenador de Projetos - Infraestrutura BR"
      }
    ];

    const projects = [
      {
        title: 'Recuperação de Encosta',
        description: 'Aplicação de hidrossemeadura em encosta de rodovia com resultados em apenas 30 dias.',
        image: 'hidrossemeadura.jpg',
      },
      {
        title: 'Projeto Terraplanagem',
        description: 'Execução de nivelamento e compactação em grandes áreas para infraestrutura.',
        image: '.png',
      },
      {
        title: 'Mapeamento com Drone',
        description: 'Levantamento aéreo detalhado para planejamento e monitoramento de obras.',
        image: 'drone.jpg',
      },
      {
        title: 'Recuperação Ambiental',
        description: 'Projetos de revegetação e manejo sustentável em áreas degradadas.',
        image: 'recuperacao-ambiental.jpg',
      },
    ];

  return (
    <>
      <section id='about' className='pt-16 md:pt-20 pb-12 md:pb-16 px-6'>
        <div className='max-w-7xl mx-auto mb-12'>
          <div className='grid md:grid-cols-2 gap-8 sm:gap-12 items-center'>
            <div className='group flex flex-col rounded-sm shadow-md hover:shadow-sm w-full h-full transition-all overflow-hidden'>
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

        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
            className={"mb-12 mx-auto"}
        />

        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl text-stone-700 font-bold mb-2 relative inline-block'>
            Nossos Projetos
          </h2>
          <div className='w-50 h-[3px] bg-red-700 mx-auto mb-2'></div>
          <p className='text-stone-700 font-medium mt-4'>
            Conheça alguns de nossos trabalhos realizados
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {projects.map((p, i) => (
            <div
              key={i}
              className='relative group rounded-sm overflow-hidden shadow-md hover:shadow-sm transition-all duration-300 aspect-[4/3]'
            >
              <img
                src={p.image}
                alt={p.title}
                className='w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col items-center justify-center text-center text-white p-3'>
                <h3 className='text-2xl font-bold mb-1'>{p.title}</h3>
                <p className='text-sm font-medium mb-2 leading-relaxed'>
                  {p.description}
                </p>
                <Button size="sm" variant="secondary" className="rounded-sm mt-auto mb-2">Ver Detalhes</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}