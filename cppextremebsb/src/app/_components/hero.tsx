'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { Atom, Waves } from '@phosphor-icons/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registra o plugin
gsap.registerPlugin(ScrollTrigger)

export function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const textContainerRef = useRef<HTMLDivElement>(null)
    const cardsContainerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            // 1. Animação da Coluna de Texto (Esquerda)
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
                            start: 'top 70%', // Começa quando a seção estiver 70% visível
                        }
                    }
                )
            }

            // 2. Animação dos Cards (Direita)
            const cards = cardsContainerRef.current?.children
            if (cards) {
                gsap.fromTo(cards,
                    { x: 50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        delay: 0.3, // Espera um pouquinho o texto começar
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
        // Aumentei a altura para min-h-[85vh] e adicionei flex items-center para centralizar verticalmente
        <section ref={sectionRef} className="relative min-h-[85vh] flex items-center py-24 px-6 border-b border-white/10 overflow-hidden bg-black">

            {/* --- VÍDEO BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <video
                    src="/ranin4.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-80" // Aumentei um pouco mais a opacidade (70 -> 80)
                />
                {/* Gradiente ajustado: Mais suave na direita para deixar o vídeo respirar */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            </div>

            {/* --- CONTEÚDO (Z-INDEX 10) --- */}
            <div className="relative z-10 container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Texto de Venda (Esquerda) */}
                    <div ref={textContainerRef} className="drop-shadow-md">
                        <h2 className="text-sm font-mono text-gray-300 mb-6 uppercase tracking-[0.2em] flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-white inline-block shadow-[0_0_10px_white]"></span>
                            O Conceito
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-xl">
                            A evolução técnica baseada em <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">evidências.</span>
                        </h3>
                        <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 font-light shadow-black drop-shadow-md max-w-lg">
                            A década de 70 marcou o surgimento da técnica tahitiana moderna. Hoje, elevamos isso a outro nível unindo a <strong>Oceanografia</strong> à <strong>Educação Física</strong>.
                        </p>
                        <div className="inline-block">
                            <p className="text-white text-lg font-bold border-l-4 border-white pl-6 bg-black/40 backdrop-blur-md py-4 pr-6 rounded-r-xl border-t border-t-white/10 border-r border-r-white/10">
                                Não é sobre força bruta. <br />
                                <span className="text-gray-400 font-normal text-base">É sobre biofísica, bioquímica e hidrodinâmica.</span>
                            </p>
                        </div>
                    </div>

                    {/* Destaques (Direita) - Cards Flutuantes */}
                    <div ref={cardsContainerRef} className="grid gap-6 md:pl-10">

                        {/* Card 1 */}
                        <div className="bg-black/70 backdrop-blur-xl border border-white/20 p-8 hover:border-white/50 hover:bg-black/80 transition-all group rounded-2xl shadow-2xl">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-white/10 p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-500">
                                    <Atom size={32} weight="fill" />
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1 rounded">Ciência</span>
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-3">Bioquímica & Biofísica</h4>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed">
                                Domine os padrões de respiração para alta performance e entenda a física vetorial por trás de cada remada.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-black/70 backdrop-blur-xl border border-white/20 p-8 hover:border-white/50 hover:bg-black/80 transition-all group rounded-2xl shadow-2xl">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-white/10 p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-500">
                                    <Waves size={32} weight="fill" />
                                </div>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 border border-white/10 px-2 py-1 rounded">Natureza</span>
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-3">Leitura Ambiental</h4>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed">
                                Técnicas específicas para condições contra, a favor e laterais. Aprenda a diferenciar Reação de Antecipação.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}