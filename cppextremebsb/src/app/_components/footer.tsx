'use client'

import Image from 'next/image'
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
  MapPin,
  Phone,
  EnvelopeSimple
} from '@phosphor-icons/react'
import { Handshake } from 'lucide-react' // Troquei Anchor por Handshake para "Parceiros"
import ascadeLogo from '../../../public/logo-ascade.png'

const PARTNERS = [
  { name: 'Ascade', logo: ascadeLogo, url: 'https://ascade.com.br' }, // Adicionei URL se houver
]

export function Footer() {
  const whatsappNumber = '61998219177'
  const whatsappMessage = 'Olá, gostaria de mais informações sobre as aulas de remo na CPP Extreme!'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-white/10 relative overflow-hidden">

      {/* Background Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 py-16 relative z-10">

        {/* --- SEÇÃO DE PARCEIROS --- */}
        <div
          className="border-b border-white/10 pb-12 mb-12"
          data-aos="fade-up"
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3 text-white uppercase tracking-wide">
            <Handshake className="w-8 h-8 text-white/80" />
            Parceiros Oficiais
          </h4>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {PARTNERS.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={160}
                  height={80}
                  className="object-contain w-auto h-12 md:h-16"
                />
              </a>
            ))}
          </div>
        </div>

        {/* --- GRID DE INFORMAÇÕES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">

          {/* Coluna 1: Sobre */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">
              CPP Extreme
            </h3>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-sm">
              Promovendo inclusão social, saúde e performance através do esporte e da aventura no coração de Brasília.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-900/20"
            >
              <WhatsappLogo size={24} weight="fill" />
              Fale Conosco
            </a>
          </div>

          {/* Coluna 2: Contato Rápido */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
              Contato
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors">
                <Phone size={20} className="text-white/60" />
                <span>(27) 99631-4135</span>
              </li>
              {/* <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors">
                    <EnvelopeSimple size={20} className="text-white/60" />
                    <span>contato@cppextreme.com.br</span>
                </li> */}
              <li className="flex items-start justify-center md:justify-start gap-3 hover:text-white transition-colors max-w-xs mx-auto md:mx-0">
                <MapPin size={24} className="text-white/60 mt-0.5 shrink-0" />
                <span>
                  Ascade - Assoc. dos Servidores da Câmara dos Deputados<br />
                  <span className="text-xs text-gray-500 uppercase font-bold">Brasília - DF</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="flex flex-col items-center md:items-start lg:items-end text-center lg:text-right space-y-4">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
              Siga-nos
            </h3>
            <div className="flex gap-4">
              <SocialLink href="https://www.instagram.com/cppextreme/" icon={InstagramLogo} color="hover:text-[#E4405F]" label="Instagram" />
              <SocialLink href="https://www.facebook.com/CPPExtreme" icon={FacebookLogo} color="hover:text-[#1877F2]" label="Facebook" />
              <SocialLink href="https://www.youtube.com/@cppextreme" icon={YoutubeLogo} color="hover:text-[#FF0000]" label="YouTube" />
            </div>
            <p className="text-xs text-gray-600 mt-4 max-w-xs">
              Acompanhe nossos treinos, eventos e novidades nas redes.
            </p>
          </div>
        </div>
      </div>

      {/* --- GOOGLE MAPS --- */}
      <div className="w-full h-[300px] md:h-[400px] relative border-t border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          title="Localização CPP Extreme na Ascade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.049446467368!2d-47.86314392496735!3d-15.801389984841967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a5f7887713b%3A0xc3b0922e37905156!2sAscade%20N%C3%A1utica!5e0!3m2!1spt-BR!2sbr!4v1706040000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
        {/* Overlay para interagir apenas ao clicar (opcional, melhora scroll) */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none shadow-inner" />
      </div>

      {/* --- COPYRIGHT --- */}
      <div className="bg-black py-6 text-center border-t border-white/5">
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} CPP Extreme BSB. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

// Componente auxiliar para links sociais
function SocialLink({ href, icon: Icon, color, label }: { href: string, icon: any, color: string, label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`bg-zinc-900 p-3 rounded-xl text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] ${color}`}
    >
      <Icon size={24} weight="fill" />
    </a>
  )
}