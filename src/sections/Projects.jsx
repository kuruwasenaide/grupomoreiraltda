import Button from "../components/Button";
import { InfiniteMovingCards } from "../components/InfiniteMovingCard";

export default function Projects() {
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

  return (
    <section id='projects' className='pt-16 md:pt-20 pb-12 md:pb-16 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl text-stone-700 font-bold mb-2 relative inline-block'>
            Nossos Projetos
          </h2>
          <div className='w-50 h-[3px] bg-red-700 mx-auto mb-2'></div>
          <p className='text-stone-700 font-medium mt-4'>
            Conheça alguns de nossos trabalhos realizados
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-8'>
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
        
        <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
      </div>
    </section>
  );
}