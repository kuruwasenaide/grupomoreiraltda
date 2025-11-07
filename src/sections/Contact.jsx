import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Button from '../components/Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id='contact' className='bg-white py-20'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col justify-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-stone-700 mb-2'>
            Entre em Contato
          </h2>
          <div className='w-40 h-[3px] bg-red-700 mx-auto mb-2'></div>
          <p className='text-md text-center font-medium text-stone-700'>
            Estamos prontos para atender suas necessidades
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='lg:w-1/2 flex flex-col gap-6'>
            <div className='group bg-white rounded-sm shadow-md py-6 px-3 flex gap-3'>
              <div className='flex-shrink-0'>
                <div className='w-7 h-7 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center transition-all text-red-700 group-hover:bg-red-700 group-hover:text-white'>
                  <MapPin className='w-6 h-6' />
                </div>
              </div>
              <div>
                <h3 className='text-lg md:text-xl font-bold text-red-700'>Endereço</h3>
                <p className='text-stone-700 font-medium'>
                  Av. Rio Grande, Nº 205, Antônio Geraldo<br />
                  Barreiras - Bahia, Brasil
                </p>
              </div>
            </div>

            <div className='group bg-white rounded-sm shadow-md py-6 px-3 flex gap-3'>
              <div className='flex-shrink-0'>
                <div className='w-7 h-7 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center transition-all text-red-700 group-hover:bg-red-700 group-hover:text-white'>
                  <Phone className='w-6 h-6' />
                </div>
              </div>
              <div>
                <h3 className='text-lg md:text-xl font-bold text-red-700'>Telefone</h3>
                <p className='text-stone-700 font-medium text-md'>
                  (77) 99807-0059<br />
                  (77) 3611-8999
                </p>
              </div>
            </div>

            <div className='group bg-white rounded-sm shadow-md py-6 px-3 flex gap-3'>
              <div className='flex-shrink-0'>
                <div className='w-7 h-7 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center transition-all text-red-700 group-hover:bg-red-700 group-hover:text-white'>
                  <Mail className='w-6 h-6' />
                </div>
              </div>
              <div>
                <h3 className='text-lg md:text-xl font-bold text-red-700'>E-mail</h3>
                <p className='text-stone-700 font-medium'>
                  contato@grupomoreiraltda.com.br
                </p>
              </div>
            </div>

            <div className='group bg-white rounded-sm shadow-md py-6 px-3 flex gap-3'>
              <div className='flex-shrink-0'>
                <div className='w-7 h-7 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center transition-all text-red-700 group-hover:bg-red-700 group-hover:text-white'>
                  <Clock className='w-6 h-6' />
                </div>
              </div>
              <div>
                <h3 className='text-lg md:text-xl font-bold text-red-700'>Horário de Funcionamento</h3>
                <p className='text-stone-700 font-medium'>
                  Segunda à Sexta: 8:00 - 18:00<br />
                  Sábado: 8:00 - 12:00
                </p>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2'>
            <div className='bg-white rounded-sm shadow-md p-8'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <div className='flex gap-3'>
                  <input
                    type='text'
                    name='nome'
                    placeholder='Nome'
                    value={formData.nome}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xs focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent'
                    required
                  />

                  <input
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xs focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent'
                    required
                  />
                </div>

                <input
                  type='tel'
                  name='telefone'
                  placeholder='Telefone'
                  value={formData.telefone}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xs focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent'
                  required
                />

                <select
                  name='servico'
                  value={formData.servico}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xs focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent text-gray-700'
                  required
                >
                  <option value=''>Selecione um serviço</option>
                  <option value='hidrossemeadura'>Hidrossemeadura e Recuperação Ambiental</option>
                  <option value='terraplanagem'>Terraplanagem, Pavimentação e Locação de Máquinas</option>
                  <option value='mapeamento'>Mapeamento com Drone e Georeferenciamento</option>
                </select>

                <textarea
                  name='mensagem'
                  placeholder='Sua mensagem'
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows='6'
                  className='w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent resize-none'
                  required
                ></textarea>

                <Button
                  type='submit'
                  className='rounded-xs w-full'
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}