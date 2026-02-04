'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { Atom, Waves, CheckCircle, Lifebuoy, ListChecks } from '@phosphor-icons/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const textContainerRef = useRef<HTMLDivElement>(null)
    const cardsContainerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const textElements = textContainerRef.current?.children
            if (textElements) {
                gsap.fromTo(textElements,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.15,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 70%',
                        }
                    }
                )
            }

            const cards = cardsContainerRef.current?.children
            if (cards) {
                gsap.fromTo(cards,
                    { x: 50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        delay: 0.3,
                        ease: 'back.out(1.2)',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 70%',
                        }
                    }
                )
            }
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center py-24 px-6 border-b border-white/10 overflow-hidden bg-black font-sans">

            {/* --- VÍDEO BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <video
                    src="/ranin4.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* COLUNA ESQUERDA: O CONCEITO */}
                    <div ref={textContainerRef} className="drop-shadow-md">
                        <h2 className="text-sm font-black text-gray-400 mb-6 uppercase tracking-[0.3em] flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-white inline-block"></span>
                            O Conceito
                        </h2>
                        <h3 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[0.9] uppercase tracking-tighter">
                            A evolução <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">por evidências.</span>
                        </h3>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 font-light max-w-xl italic">
                            Unindo <strong>Oceanografia</strong> e <strong>Educação Física</strong> para decifrar a técnica tahitiana moderna. Não é força, é biofísica aplicada ao Va'a.
                        </p>

                        {/* LISTA DE INCLUSOS (NOVO) */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl inline-block w-full max-w-md">
                            <h4 className="text-white font-black uppercase text-xs tracking-widest mb-4 flex items-center gap-2">
                                <Lifebuoy size={18} className="text-white" /> Incluso na Clínica:
                            </h4>
                            <div className="grid grid-cols-3 gap-4">
                                {['Canoa', 'Colete', 'Remo'].map((item) => (
                                    <div key={item} className="flex flex-col items-center gap-2 group">
                                        <div className="w-full h-px bg-white/20 group-hover:bg-white transition-colors"></div>
                                        <span className="text-white font-black uppercase text-[10px] tracking-tighter">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* COLUNA DIREITA: CARDS TÉCNICOS */}
                    <div ref={cardsContainerRef} className="grid gap-6">

                        {/* Card 1: Fundamentos & Biofísica */}
                        <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:border-white/30 transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-white text-black p-2 rounded-lg group-hover:rotate-12 transition-transform">
                                    <Atom size={28} weight="bold" />
                                </div>
                                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-500">Módulo Técnico</span>
                            </div>
                            <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight">Técnica & Biofísica</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                {[
                                    "Evolução Tahitiana (Anos 70)",
                                    "Técnica Tahitiana vs Havaiana",
                                    "Huti Pa'ari, Pe'e, Roa e Tatara",
                                    "Bioquímica da Respiração",
                                    "Física Vetorial na Remada",
                                    "Hidrodinâmica das Canoas"
                                ].map((tema) => (
                                    <div key={tema} className="flex items-center gap-2 text-[11px] text-zinc-400">
                                        <CheckCircle size={14} className="text-white opacity-50" weight="fill" />
                                        <span>{tema}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card 2: Leme & Estratégia */}
                        <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:border-white/30 transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-white text-black p-2 rounded-lg group-hover:-rotate-12 transition-transform">
                                    <ListChecks size={28} weight="bold" />
                                </div>
                                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-500">Módulo Leme</span>
                            </div>
                            <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tight">Masterclass Leme</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                {[
                                    "Análise de Previsão Ambiental",
                                    "Remada Frente e 45º",
                                    "Leme em Faca (Solo/Água)",
                                    "Sinergia: Reação vs Antecipação",
                                    "Curva de Boia e Largada",
                                    "Didáticas de Treino"
                                ].map((tema) => (
                                    <div key={tema} className="flex items-center gap-2 text-[11px] text-zinc-400">
                                        <CheckCircle size={14} className="text-white opacity-50" weight="fill" />
                                        <span>{tema}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}