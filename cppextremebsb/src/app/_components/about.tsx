'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { Medal, Student, Boat, Certificate, TrendUp, CaretRight } from '@phosphor-icons/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Registra o plugin do ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

export function About() {
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Animação da Imagem (Efeito de Revelação)
            gsap.fromTo(imageRef.current,
                { clipPath: 'inset(0% 100% 0% 0%)', opacity: 0.5 }, // Começa cortado
                {
                    clipPath: 'inset(0% 0% 0% 0%)', // Revela total
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power3.inOut',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%',
                        end: 'bottom 75%',
                    }
                }
            )

            // 2. Animação dos Textos (Título e Parágrafos)
            const textElements = textRef.current?.querySelectorAll('.animate-text')
            if (textElements) {
                gsap.fromTo(textElements,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: 'top 80%',
                        }
                    }
                )
            }

            // 3. Animação dos Cards (Grid)
            const cards = textRef.current?.querySelectorAll('.stat-card')
            if (cards) {
                gsap.fromTo(cards,
                    { y: 40, opacity: 0, scale: 0.95 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.15, // Efeito cascata
                        ease: 'back.out(1.7)',
                        scrollTrigger: {
                            trigger: textRef.current, // Dispara quando a seção de texto estiver visível
                            start: 'top 60%',
                        }
                    }
                )
            }

        }, containerRef)

        return () => ctx.revert() // Limpeza ao desmontar
    }, [])

    return (
        <section ref={containerRef} className="bg-black py-24 px-6 overflow-hidden border-t border-white/10 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-start gap-12 md:gap-20">

                    {/* --- COLUNA ESQUERDA: FOTO STICKY --- */}
                    <div ref={imageRef} className="w-full md:w-5/12 group sticky top-24">                        <div className="aspect-[3/4] relative border border-white/10 rounded-sm overflow-hidden bg-zinc-900">
                        <Image
                            src="/ranin.png"
                            alt="Ranin Baptistotte Thomé"
                            fill
                            className="object-cover"
                            quality={100}
                            priority
                        />

                        {/* Overlay Minimalista P&B */}
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-8 pt-32">
                            <h3 className="text-white text-3xl font-black uppercase leading-none tracking-tighter mb-2">
                                Ranin <br /> Baptistotte
                            </h3>
                            <div className="h-[1px] w-12 bg-white mb-3"></div>
                            <p className="text-zinc-400 text-xs tracking-[0.2em] uppercase font-bold">
                                Oceanógrafo & Educador Físico
                            </p>
                        </div>
                    </div>

                        {/* Elemento Decorativo GSAP */}
                        <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-white/10 rounded-sm" />
                    </div>

                    {/* --- COLUNA DIREITA: CONTEÚDO --- */}
                    <div ref={textRef} className="w-full md:w-7/12 text-white">

                        {/* Cabeçalho */}
                        <div className="animate-text mb-8">
                            <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-[10px] uppercase tracking-widest text-zinc-400 mb-4 bg-zinc-900/50">
                                Sobre o Instrutor
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">
                                O Mentor
                            </h2>
                        </div>

                        <div className="prose prose-lg prose-invert text-zinc-400 leading-relaxed mb-12 animate-text font-light">
                            <p>
                                Fundador da <strong className="text-white font-bold">CPP Extreme</strong>, hoje com núcleos espalhados pelo Brasil, Ranin é a fusão rara entre a ciência acadêmica e a vivência de um atleta de elite.
                            </p>
                            <p>
                                Além de ser o construtor naval da <strong className="text-white border-b border-white/30 pb-0.5">primeira Canoa Havaiana 100% brasileira</strong> e detentor de recordes de distância, ele atua como empresário focado em performance, especializando-se em análise técnica e biomecânica.
                            </p>
                        </div>

                        {/* Grid de Conquistas (Monocromático) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* Card 1 */}
                            <div className="stat-card group flex items-start gap-4 p-5 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/30 hover:bg-zinc-900 transition-all duration-300">
                                <div className="bg-zinc-800 p-2.5 rounded-lg shrink-0 text-white group-hover:scale-110 transition-transform">
                                    <Medal size={24} weight="fill" />
                                </div>
                                <div>
                                    <strong className="block text-base text-white mb-1 tracking-wide uppercase font-bold">Atleta de Elite</strong>
                                    <ul className="text-sm text-zinc-500 space-y-1 group-hover:text-zinc-400 transition-colors">
                                        <li className="flex items-center gap-2"><CaretRight size={12} /> Vice-Mundial Surf Va'a</li>
                                        <li className="flex items-center gap-2"><CaretRight size={12} /> Campeão Brasileiro</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="stat-card group flex items-start gap-4 p-5 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/30 hover:bg-zinc-900 transition-all duration-300">
                                <div className="bg-zinc-800 p-2.5 rounded-lg shrink-0 text-white group-hover:scale-110 transition-transform">
                                    <Boat size={24} weight="fill" />
                                </div>
                                <div>
                                    <strong className="block text-base text-white mb-1 tracking-wide uppercase font-bold">Pioneiro</strong>
                                    <p className="text-sm text-zinc-500 mb-1 leading-snug group-hover:text-zinc-400">
                                        Construtor da 1ª canoa 100% brasileira.
                                    </p>
                                    <span className="text-[10px] uppercase border border-white/20 px-2 py-0.5 rounded text-zinc-300">
                                        Recorde BA ➝ RJ
                                    </span>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="stat-card group flex items-start gap-4 p-5 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/30 hover:bg-zinc-900 transition-all duration-300">
                                <div className="bg-zinc-800 p-2.5 rounded-lg shrink-0 text-white group-hover:scale-110 transition-transform">
                                    <Student size={24} weight="fill" />
                                </div>
                                <div>
                                    <strong className="block text-base text-white mb-1 tracking-wide uppercase font-bold">Mestre</strong>
                                    <p className="text-sm text-zinc-500 group-hover:text-zinc-400">
                                        +1000 alunos formados e dezenas de instrutores capacitados pelo método.
                                    </p>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="stat-card group flex items-start gap-4 p-5 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-white/30 hover:bg-zinc-900 transition-all duration-300">
                                <div className="bg-zinc-800 p-2.5 rounded-lg shrink-0 text-white group-hover:scale-110 transition-transform">
                                    <Certificate size={24} weight="fill" />
                                </div>
                                <div>
                                    <strong className="block text-base text-white mb-1 tracking-wide uppercase font-bold">Ciência</strong>
                                    <p className="text-sm text-zinc-500 mb-1 group-hover:text-zinc-400">
                                        Ed. Física + Oceanografia
                                    </p>
                                    <p className="text-xs text-zinc-600 italic">
                                        Especialista em periodização e respiração.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}