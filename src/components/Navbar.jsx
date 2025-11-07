import { useState, useEffect } from 'react'
import Button from './Button'
import { Menu, X, ChevronDown } from 'lucide-react'

const menuItems = [
  {
    id: 'hero',
    label: 'Home',
    section: 'hero'
  },
  {
    id: 'services',
    label: 'Serviços',
    section: 'services',
    submenu: [
      {
        id: 'hidrossemeadura',
        label: 'Grama Líquida',
        section: 'hidrossemeadura'
      },
      {
        id: 'terraplanagem',
        label: 'Terraplanagem',
        section: 'terraplanagem'
      },
      {
        id: 'mapeamento',
        label: 'Mapeamento',
        section: 'mapeamento'
      },
    ]
  },
  {
    id: 'about',
    label: 'O Grupo Moreira',
    section: 'about'
  },
  {
    id: 'projects',
    label: 'Projetos',
    section: 'projects'
  },
  {
    id: 'contact',
    label: 'Contato',
    section: 'contact'
  },
]

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [showSubNav, setShowSubNav] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(null)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const allSections = []
      menuItems.forEach(item => {
        allSections.push(item.section)
        if (item.submenu) {
          item.submenu.forEach(sub => allSections.push(sub.section))
        }
      })

      const scrollPosition = window.scrollY + 100

      for (const section of allSections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            const parentItem = menuItems.find(item => 
              item.submenu?.some(sub => sub.section === section)
            )
            
            if (parentItem) {
              setActiveSection(parentItem.id)
            } else {
              setActiveSection(section)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
      setIsMobileSubMenuOpen(null)
    }
  }

  return (
    <>
      <nav className='fixed top-0 w-screen bg-white shadow-sm z-1000 backdrop-blur-sm'>
        <div className={`transition-[padding] duration-300 max-w-7xl mx-auto px-4 ${scrolled ? 'py-1' : 'py-3'} flex items-center justify-between`}>
          <a onClick={() => scrollToSection('hero')}><img src='/logo.png' className='h-13 md:h-15 cursor-pointer' alt='Logo' /></a>
          <div className='hidden lg:flex items-center gap-6'>
            {menuItems.map((item) => (
              item.submenu ? (
                <div 
                  key={item.id}
                  className='group relative'
                  onMouseEnter={() => setShowSubNav(item.id)}
                  onMouseLeave={() => setShowSubNav(null)}
                >
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className={`relative text-sm font-semibold flex inline-flex items-center transition-colors cursor-pointer ${
                      activeSection === item.id ? 'text-red-700' : 'text-stone-800 group-hover:text-red-700'
                    }`}
                  >
                    {item.label}
                    <ChevronDown strokeWidth={2.5} className='w-5 transition-transform group-hover:rotate-180'/>
                  </button>
                  
                  {showSubNav === item.id && (
                    <div className='absolute top-full left-0 bg-white shadow-lg rounded-sm w-48'>
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={() => scrollToSection(subItem.section)}
                          className='transition-all block w-full text-left font-medium px-4 py-2 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-red-700 cursor-pointer'
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (item.id == 'contact' ? 
                (<Button key={item.id} size="sm" variant="primary" className='text-sm rounded-full' onClick={() => scrollToSection('contact')}>Entre em Contato</Button>) 
                :  (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.section)}
                    className={`text-sm font-semibold transition-colors cursor-pointer ${
                      activeSection === item.id ? 'text-red-700' : 'text-stone-800 hover:text-red-700'
                    }`}
                  >
                    {item.label}
                  </button>)
                )
            ))}
          </div>
          

          <button 
            className='relative lg:hidden flex flex-col gap-1.5 p-3'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className={`absolute top-0 left-0 transition-opacity transition-transform ${isMobileMenuOpen ? 'opacity-0 rotate-45': ''}`} />
            <X className={`absolute top-0 left-0 transition-opacity transition-transform ${isMobileMenuOpen ? 'opacity-100': 'opacity-0 -rotate-45'}`} />

          </button>
        </div>
        {/* <div className={`transition-all duration-300 hidden md:flex text-center bg-orange-500 w-full mx-auto items-center justify-center overflow-hidden ${scrolled ? 'max-h-0 py-0' : 'max-h-20 py-2'}`}>
          <p className={`text-sm transition-all duration-300 font-semibold text-white ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          Av. Rio Grande, Nº 205, Antônio Geraldo. Barreiras - Bahia, Brasil
          </p>
        </div> */}
      </nav>

      <div 
        className={`fixed inset-0 bg-black/75 z-40 transition-opacity lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div 
          className={`fixed left-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='p-6'>
            
            <div className='mt-12 space-y-1'>
              {menuItems.map((item) => (
                item.submenu ? (
                  <div key={item.id}>
                    <button
                      onClick={() => setIsMobileSubMenuOpen(
                        isMobileSubMenuOpen === item.id ? null : item.id
                      )}
                      className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-sm font-semibold transition-colors ${
                        activeSection === item.id ? 'bg-neutral-50 text-red-700 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown strokeWidth={2.5} className={`w-5 transition-transform ${isMobileSubMenuOpen === item.id ? 'rotate-180' : ''}`}/>
                    </button>
                    
                    {isMobileSubMenuOpen === item.id && (
                      <div className='ml-4 mt-1 space-y-1'>
                        {item.submenu.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => scrollToSection(subItem.section)}
                            className='block w-full text-left font-semibold px-4 py-2 text-sm text-neutral-600 hover:text-blue-600 rounded-sm hover:bg-blue-50'
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.section)}
                    className={`block w-full text-left px-4 py-3 rounded-sm font-semibold transition-colors ${
                      activeSection === item.id ? 'bg-neutral-50 text-red-700 font-semibold' : 'text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}