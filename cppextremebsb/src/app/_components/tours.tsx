'use client'

import { Check, CalendarBlank, Clock, MapPin } from '@phosphor-icons/react'
import Image from 'next/image'

export function Tours() {
  return (
    <section className="bg-black py-24 px-4 md:px-6 border-t border-white/10">
      <div className="container mx-auto max-w-7xl">

        {/* Cabeçalho Minimalista com AOS */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full uppercase tracking-[0.2em] mb-4 inline-block border border-white/10">
            Imersão Técnica
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-6">
            Cronograma <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">Oficial</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            A teoria da oceanografia aplicada à prática do Va'a. Dois módulos independentes.
          </p>
        </div>

        {/* Grid de Banners Estilo "Cases" */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8 min-h-[800px]">

          {/* --- CARD 01: VA'A GERAL (Sábado) --- */}
          <div
            className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 h-full min-h-[650px] md:min-h-full transition-all duration-500 hover:border-white/40"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1000"
          >

            {/* 1. Imagem de Fundo (P&B) */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/ranin5.jpg" // FOTO 1
                alt="Va'a Geral"
                fill
                className="object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              {/* Overlay Preto Degradê para leitura */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent opacity-90" />
            </div>

            {/* 2. Conteúdo */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
              {/* Topo do Card */}
              <div className="flex justify-between items-start">
                <div className="bg-white text-black text-xs font-black px-4 py-2 uppercase tracking-widest rounded-sm">
                  Sábado • 20/02
                </div>
                {/* Ícone decorativo */}
                <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur">
                  <MapPin weight="fill" className="text-white" />
                </div>
              </div>

              {/* Base do Card */}
              <div>
                <h3 className="text-5xl lg:text-7xl font-black text-white uppercase leading-[0.85] mb-6 tracking-tighter">
                  Va'a <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Geral</span>
                </h3>

                <div className="flex items-center gap-4 text-white font-mono text-xs font-bold uppercase mb-8 opacity-80">
                  <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded"><Clock weight="fill" /> 06h às 10h</span>
                </div>

                {/* Lista de Tópicos (Glassmorphism Escuro) */}
                <div className="bg-zinc-950/80 backdrop-blur-md p-6 rounded-xl border-l-2 border-white/30 group-hover:border-white transition-all max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
                  <h4 className="text-white font-bold uppercase mb-4 tracking-widest text-xs border-b border-white/10 pb-2">
                    Módulo 01
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Surgimento e evolução da técnica tahitiana moderna",
                      "Evolução das canoas e remos",
                      "Técnica Tahitiana vs Havaiana",
                      "Tipos: huti pa'ari, huti pe'e, huti roa, tatara",
                      "Surgimento e evolução da técnica no Brasil",
                      "Condições: Contra, a favor e laterais",
                      "Comandos: Competição, Travessia e Downwaves",
                      "Bioquímica e Biofísica da respiração",
                      "Padrões de respiração para o Va'a"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                        <Check size={16} className="text-white mt-0.5 shrink-0" weight="bold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* --- CARD 02: LEME PRO (Domingo) --- */}
          <div
            className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 h-full min-h-[650px] md:min-h-full transition-all duration-500 hover:border-white/40"
            data-aos="fade-up"
            data-aos-delay="200" // Delay para entrar depois do primeiro card
            data-aos-duration="1000"
          >

            {/* 1. Imagem de Fundo (P&B) */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/ranin4.jpg" // FOTO 2
                alt="Leme Avançado"
                fill
                className="object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent opacity-90" />
            </div>

            {/* 2. Conteúdo */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-10">
              {/* Topo */}
              <div className="flex justify-between items-start">
                <div className="bg-white text-black text-xs font-black px-4 py-2 uppercase tracking-widest rounded-sm">
                  Domingo • 01/03
                </div>
                <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur">
                  <MapPin weight="fill" className="text-white" />
                </div>
              </div>

              {/* Base */}
              <div>
                <h3 className="text-5xl lg:text-7xl font-black text-white uppercase leading-[0.85] mb-6 tracking-tighter">
                  Técnica <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Leme</span>
                </h3>

                <div className="flex items-center gap-4 text-white font-mono text-xs font-bold uppercase mb-8 opacity-80">
                  <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded"><Clock weight="fill" /> 06h às 10h</span>
                </div>

                {/* Lista */}
                <div className="bg-zinc-950/80 backdrop-blur-md p-6 rounded-xl border-l-2 border-white/30 group-hover:border-white transition-all max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
                  <h4 className="text-white font-bold uppercase mb-4 tracking-widest text-xs border-b border-white/10 pb-2">
                    Módulo 02
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Navegação, planejamento e previsão ambiental",
                      "Análise das condições locais e tipos de barco",
                      "Técnicas: Remada frente, 45º e Puxada lateral",
                      "Leme em faca e Faca lateral (aquática/aérea)",
                      "Utilização técnica conforme condições ambientais",
                      "Sinergia: Reação vs Antecipação",
                      "Curva de boia e Largada",
                      "Didáticas de treino"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300 group-hover:text-white transition-colors">
                        <Check size={16} className="text-white mt-0.5 shrink-0" weight="bold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}