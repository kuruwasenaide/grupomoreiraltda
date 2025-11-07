import { useState, useEffect } from 'react'
import { FlipWords } from '../components/FlipWords'
import { Check, Truck, TrafficCone, Tractor, Construction, ShieldCheck, Users, Cpu, Leaf, MapPinned, Compass, Ruler, Building, Waves, ChartArea } from 'lucide-react'
import Button from '../components/Button';

export default function Services() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      id: "hidrossemeadura",
      title: "Hidrossemeadura e Recuperação Ambiental",
      description: "Excelente cobertura vegetal reduzindo problemas causados por erosão. Técnicas inovadoras para preservação e recuperação de áreas degradadas."
    },
    {
      id: "terraplanagem",
      title: "Terraplanagem, Pavimentação e Locação de Máquinas",
      description: "Serviços de alta qualidade para preparação de terrenos e criação de infraestrutura viária com equipamentos modernos e técnicas avançadas."
    },
    {
      id: "mapeamento",
      title: "Mapeamento com Drone e Georeferenciamento",
      description: "Tecnologia de ponta para levantamentos topográficos precisos, agilizando projetos e proporcionando visão completa da área."
    },
  ]

  const hydroseedingProcess = [
    {
      image: "antes.png",
      title: "Antes",
      description: "Análise e preparação do terreno para receber a aplicação da técnica, garantindo condições ideais para o crescimento da vegetação."
    },
    {
      image: "aplicacao.png",
      title: "Aplicação",
      description: "Aplicação da mistura de sementes, fertilizantes e mulch de fibra de madeira utilizando equipamento especializado e técnicas avançadas."
    },
    {
      image: "resultado.png",
      title: "Resultado",
      description: "Cobertura vegetal de alta qualidade, redução de erosão e recuperação completa da área com crescimento rápido e sustentável."
    }
  ]

  const products = [
    "Mulches de Fibra de Madeira",
    "Fertilizantes Específicos",
    "Sementes Selecionadas",
    "Fixadores Especiais",
    "Equipamentos de Alta Tecnologia"
  ]

  const earthworkServices = [
    {
      icon: Truck,
      title: "Transporte de Terra",
      description: "Remoção e transporte de materiais com frota própria especializada."
    },
    {
      icon: TrafficCone,
      title: "Pavimentação Asfáltica",
      description: "Execução completa de pavimentação com materiais de alta qualidade."
    },
    {
      icon: Tractor,
      title: "Locação de Máquinas",
      description: "Equipamentos de última geração com operadores qualificados."
    },
    {
      icon: Construction,
      title: "Corte e Aterro",
      description: "Serviços precisos de corte, aterro e nivelamento de terrenos."
    }
  ]

  const fleet = [
    {
      image: "escavadeira.jpg",
      title: "Escavadeiras Hidráulicas",
      description: "Potência e precisão para escavações complexas"
    },
    {
      image: "terraplanagem.png",
      title: "Motoniveladoras",
      description: "Nivelamento perfeito para qualquer tipo de terreno"
    },
    {
      image: "rolo-compactador.jpg",
      title: "Rolos Compactadores",
      description: "Compactação eficiente para bases sólidas"
    }
  ]

  const differentials = [
    {
      icon: ShieldCheck,
      title: "Certificação ISO",
      description: "Processos certificados garantindo qualidade e segurança em todas as etapas"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais com formação técnica e anos de experiência no setor"
    },
    {
      icon: Cpu,
      title: "Tecnologia Avançada",
      description: "Equipamentos modernos e softwares de planejamento de última geração"
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Práticas sustentáveis minimizando impactos ambientais em todas as obras"
    }
  ]

  const applications = [
    {
      icon: Building,
      title: "Projetos Urbanos",
      description: "Planejamento urbano e monitoramento de obras"
    },
    {
      icon: Waves,
      title: "Recursos Hídricos",
      description: "Análise de bacias e cursos d'água"
    },
    {
      icon: Construction,
      title: "Infraestrutura",
      description: "Mapeamento para construção de estradas"
    },
    {
      icon: ChartArea,
      title: "Análise de Volumetria",
      description: "Cálculos precisos de volume de materiais"
    }
  ]


  const geoSolutions = [
    {
      icon: MapPinned,
      title: "Mapeamento Aéreo com Drones"
    },
    {
      icon: Compass,
      title: "Levantamento Topográfico"
    },
    {
      icon: Ruler,
      title: "Medições de Precisão"
    }
  ]

  return (
    <section id='services' className='min-h-screen'>
      <div className='max-w-screen mx-auto'>
        <div className='flex flex-col justify-center pt-16 md:pt-20 pb-12 md:pb-16 px-6 '>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-stone-700 mb-2'>
            Nossos Serviços
          </h2>
          <div className='w-40 h-[3px] bg-red-700 mx-auto mb-2'></div>
          <p className='text-md text-center font-medium text-stone-700 mb-12'>
            Soluções completas para seus projetos
          </p>
          <div className='flex w-full h-full justify-center'>
            <div className='max-w-7xl flex flex-col md:flex-row gap-8 md:gap-6'>
              {services.map((service) => (
                <div
                  key={service.id}
                  className='group rounded-sm shadow-md hover:shadow-sm hover:-translate-y-1 transition-all overflow-hidden flex flex-col'
                >
                  <div className='w-full h-50 overflow-hidden'>
                    <img
                      src={`${service.id}.png`}
                      className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-104'
                      alt={service.title}
                    />
                  </div>
                  <div className='flex flex-col justify-between flex-grow p-4'>
                    <div>
                      <h4 className='text-xl font-bold text-stone-700 mb-2'>{service.title}</h4>
                      <p className='text-stone-700 text-md font-medium mb-4'>{service.description}</p>
                    </div>
                    <Button
                      size='sm'
                      className='rounded-xs self-start'
                      onClick={() => scrollToSection(service.id)}
                    >
                      Saiba Mais
                    </Button>
                  </div>
                </div> 
              ))}
            </div>
          </div>
        </div>

        <div id='hidrossemeadura' className='flex flex-col justify-center pt-16 md:pt-20 pb-12 md:pb-16 px-6 bg-neutral-50'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-stone-700 mb-2'>
            Hidrossemeadura
          </h2>
          <div className='w-40 h-[3px] bg-red-700 mx-auto mb-2'></div>
          <p className='text-md text-center font-medium text-stone-700 mb-12'>
            Processo completo de aplicação para recuperação ambiental
          </p>
          
          <div className='flex w-full h-full justify-center'>
            <div className='max-w-7xl flex flex-col md:flex-row gap-8 md:gap-6'>
              {hydroseedingProcess.map((step, index) => (
                <div 
                  key={index}
                  className='group bg-white flex flex-col items-center rounded-sm shadow-md hover:shadow-sm hover:-translate-y-1 transition-all'
                >
                  <div className='w-50 h-50 p-5'>
                    <img
                      src={step.image}
                      className='w-full h-full rounded-full shadow-[inset_0_0_0_7px_rgb(193_0_7)]'
                      alt={step.title}
                    />
                  </div>
                  <div className='transition-all text-center p-4'>
                    <h4 className='text-xl font-bold text-stone-700 mb-2'>{step.title}</h4>
                    <p className='text-stone-700 text-md font-medium mb-4'>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className='flex w-full h-full justify-center pt-16'>
            <div className='max-w-7xl flex flex-col md:flex-row gap-8 md:gap-6'>
              <div className='group flex flex-col items-center justify-center rounded-sm transition-all w-full'>
                <div className='transition-all w-full text-left p-4'>
                  <h4 className='text-3xl md:text-4xl font-bold text-red-700 mb-4'>Produtos Utilizados</h4>
                  <ul>
                    {products.map((product, index) => (
                      <li key={index} className='mb-2 md:text-md md:text-lg text-stone-700 font-semibold flex gap-2'>
                        <Check className='text-red-700' />
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>  
              </div>

              <div className='group bg-white flex flex-col items-center rounded-sm shadow-md hover:shadow-sm w-full transition-all overflow-hidden'>
                <img
                  src='produtos.png'
                  className='transition-transform duration-300 hover:scale-104'
                  alt='Produtos utilizados'
                />
              </div>
            </div>
          </div>
        </div>

        <div id='terraplanagem' className='flex flex-col justify-center pt-16 md:pt-20 pb-12 md:pb-16 px-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-stone-700 mb-2'>
            Terraplanagem
          </h2>
          <div className='w-40 h-[3px] bg-red-700 mx-auto mb-2'></div>
          <p className='text-md text-center font-medium text-stone-700 mb-12'>
            Soluções completas para projetos de infraestrutura
          </p>
          
          <div className='max-w-7xl mx-auto w-full'>
            <div className='flex lg:flex-row gap-3 md:gap-4 lg:gap-6 overflow-x-auto p-1 lg:overflow-x-visible snap-x snap-mandatory lg:snap-none scrollbar-hide px-4 lg:px-0'>
              {earthworkServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div 
                    key={index}
                    className='group bg-white flex flex-col items-center rounded-sm shadow-md hover:shadow-sm hover:-translate-y-1 transition-all flex-shrink-0 snap-center w-[90%] md:w-[45%] lg:w-auto lg:flex-1'
                  >
                    <div className='w-20 h-20 mt-4 bg-red-700 rounded-full'>
                      <Icon className='w-full h-full p-5 text-white transition-transform duration-500 group-hover:rotate-y-180' />
                    </div>
                    <div className='transition-all text-center p-3 md:p-2'>
                      <h4 className='text-xl font-bold text-stone-700 mb-2'>{service.title}</h4>
                      <p className='text-stone-700 text-md font-medium mb-4'>{service.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
          <div className='flex w-full h-full justify-center pt-16'>
            <div className='max-w-7xl flex flex-col md:flex-row gap-8 md:gap-6'>
              <div className='bg-white flex flex-col items-center rounded-sm shadow-md w-full transition-all overflow-hidden'>
                <h3 className='p-2 text-3xl font-bold text-center text-red-700 mb-2'>
                  Frota de Equipamentos
                </h3>
                  
                <div className='max-w-7xl flex flex-col md:flex-row p-3 gap-8 md:gap-4'>
                  {fleet.map((equipment, index) => (
                    <div 
                      key={index}
                      className='group rounded-sm shadow-md hover:shadow-sm transition-all overflow-hidden flex flex-col w-full md:w-1/3'
                    >
                      <div className='w-full aspect-[16/9] overflow-hidden'>
                        <img
                          src={equipment.image}
                          className='w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-104'
                          alt={equipment.title}
                        />
                      </div>
                      <div className='flex flex-col justify-between flex-grow p-4'>
                        <div>
                          <h4 className='text-xl font-bold text-stone-700 mb-2'>{equipment.title}</h4>
                          <p className='text-stone-700 text-md font-medium mb-4'>{equipment.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='flex w-full h-full justify-center pt-16'>
            <div className='max-w-7xl flex flex-col md:flex-row gap-8 md:gap-6 w-full'>
              <div className='bg-white flex flex-col items-center rounded-sm shadow-md w-full transition-all overflow-hidden'>
                <h3 className='p-2 text-3xl font-bold text-center text-red-700 mb-2'>
                  Nossos Diferenciais
                </h3>
                <div className='relative w-full overflow-hidden px-4 pb-1'>
                  <div className='flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide p-2'>
                    {differentials.map((diff, index) => {
                      const Icon = diff.icon
                      return (
                        <div 
                          key={index}
                          className='group min-w-[90%] md:min-w-[45%] lg:min-w-auto bg-white flex flex-col items-center rounded-sm shadow-md hover:shadow-sm hover:-translate-y-1 transition-all snap-center'
                        >
                          <div className='w-20 h-20 mt-3 bg-red-50 group-hover:bg-red-700 rounded-full transition-colors duration-300 flex items-center justify-center'>
                            <Icon className='w-12 h-12 text-red-700 transition-colors duration-300 group-hover:text-white' />
                          </div>
                          <div className='transition-all text-center p-4'>
                            <h4 className='text-xl font-bold text-stone-700 mb-2'>{diff.title}</h4>
                            <p className='text-stone-700 text-md font-medium mb-4'>{diff.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id='mapeamento' className='flex flex-col justify-center pt-16 md:pt-20 pb-12 md:pb-16 px-6 bg-neutral-50'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-stone-700 mb-2'>
            Mapeamento
          </h2>
          <div className='w-40 h-[3px] bg-red-700 mx-auto mb-2'></div>
          <p className='text-md text-center font-medium text-stone-700 mb-12'>
            Tecnologia de ponta para precisão e eficiência em seus projetos
          </p>
          
          <div className='flex w-full h-full justify-center'>
            <div className='max-w-7xl flex flex-col md:flex-row gap-8 w-full md:gap-6'>
              <div className='group flex flex-col items-center justify-center rounded-sm transition-all w-full'>
                <div className='transition-all w-full text-left p-4'>
                  <h4 className='text-3xl md:text-4xl font-bold text-red-700 mb-5'>Soluções de Precisão</h4>
                  <ul>
                    {geoSolutions.map((solution, index) => {
                      const Icon = solution.icon
                      return (
                        <li 
                          key={index}
                          className='group mb-5 text-md md:text-lg text-stone-700 hover:ml-4 font-semibold hover:shadow-sm flex gap-4 hover:gap-3 p-6 shadow-md rounded-sm bg-white transition-all'
                        >
                          <Icon className='text-red-700' />
                          {solution.title}
                        </li>
                      )
                    })}
                  </ul>
                </div>  
              </div>

              <div className='group bg-white flex flex-col aspect-[16/9] items-center rounded-sm shadow-md hover:shadow-sm w-full transition-all overflow-hidden'>
                <img
                  src='4k.png'
                  className='hover:scale-104 h-full w-full object-cover transition-transform duration-300'
                  alt='Georreferenciamento'
                />
              </div>
            </div>
          </div>

          <div className='flex w-full h-full justify-center pt-16'>
            <div className='max-w-7xl flex flex-col md:flex-row gap-8 md:gap-6 w-full'>
              <div className='flex flex-col items-center rounded-sm shadow-md w-full transition-all overflow-hidden'>
                <h3 className='p-2 text-3xl font-bold text-center text-red-700 mb-2'>
                  Aplicações
                </h3>
                <div className='relative w-full overflow-hidden px-4 pb-1'>
                  <div className='flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide p-2'>
                    {applications.map((diff, index) => {
                      const Icon = diff.icon
                      return (
                        <div 
                          key={index}
                          className='group min-w-[90%] md:min-w-[45%] lg:min-w-[24%] flex flex-col items-center rounded-sm shadow-md hover:shadow-sm hover:-translate-y-1 transition-all snap-center'
                        >
                          <div className='w-20 h-20 mt-3 bg-red-50 group-hover:bg-red-700 rounded-full transition-colors duration-300 flex items-center justify-center'>
                            <Icon className='w-12 h-12 text-red-700 transition-colors duration-300 group-hover:text-white' />
                          </div>
                          <div className='transition-all text-center p-4'>
                            <h4 className='text-xl font-bold text-stone-700 mb-2'>{diff.title}</h4>
                            <p className='text-stone-700 text-md font-medium mb-4'>{diff.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}