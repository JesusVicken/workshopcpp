'use client'

import { useEffect, useRef } from 'react'
import { Parallax } from 'react-scroll-parallax'
import {
    WhatsappLogo,
    MapPin,
    Clock,
    Anchor,
    CaretDoubleDown
} from '@phosphor-icons/react'
import Image from 'next/image'
import gsap from 'gsap'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
    const containerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        // Inicialização do AOS para gatilhos de scroll
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false
        })

        // Animação GSAP para entrada fluida (Stagger Reveal)
        const ctx = gsap.context(() => {
            gsap.from(".gsap-reveal", {
                duration: 1.2,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.2
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden bg-black text-white"
        >
            {/* --- BACKGROUND VIDEO COM PARALLAX --- */}
            <Parallax speed={-15} className="absolute inset-0 z-0">
                <video
                    src="/ranin2.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover scale-110"
                />
                {/* Overlays para garantir leitura sem poluir o visual */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70 z-20" />
            </Parallax>

            {/* --- CONTEÚDO PRINCIPAL --- */}
            <div className="relative z-30 min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">

                {/* LOGO (Pura, sem sombras ou filtros) */}
                <div className="gsap-reveal mb-8">
                    <Image
                        src="/logo.png"
                        alt="CPP Extreme Logo"
                        width={160}
                        height={160}
                        className="md:w-[200px] h-auto"
                        priority
                    />
                </div>

                {/* BADGE DE EVENTO */}
                <div className="gsap-reveal mb-6">
                    <span className="inline-block bg-white text-black px-8 py-2 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] skew-x-[-12deg]">
                        <span className="inline-block skew-x-[12deg]">Workshop Presencial</span>
                    </span>
                </div>

                {/* TÍTULO IMPACTANTE */}
                <div className="gsap-reveal mb-6">
                    <h1 className="font-black uppercase tracking-tighter leading-[0.85] flex flex-col items-center">
                        <span className="text-4xl md:text-6xl lg:text-7xl opacity-90 italic font-light tracking-normal">CLÍNICA DO</span>
                        <span className="text-6xl md:text-[120px] lg:text-[160px] text-white">
                            VA'A
                        </span>
                        <span className="text-5xl md:text-8xl lg:text-9xl mt-[-10px] md:mt-[-30px] text-white">MODERNO</span>
                    </h1>
                </div>

                {/* SUBTÍTULO */}
                <p className="gsap-reveal text-base md:text-2xl text-gray-300 font-serif italic mb-12 max-w-3xl leading-relaxed">
                    "A evolução técnica através da biomecânica e performance."
                </p>

                
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 px-2">
                    {/* SEXTA */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-500"
                    >
                        <span className="text-[11px] uppercase text-gray-400 font-black tracking-[0.2em]">Sexta | 27/02</span>
                        <div className="flex items-center gap-3 mt-2">
                            <Clock size={22} weight="light" className="text-white/70" />
                            <span className="text-xl md:text-2xl font-bold">18h40 - 20h00</span>
                        </div>
                    </div>

                    {/* SÁBADO */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-500"
                    >
                        <span className="text-[11px] uppercase text-gray-400 font-black tracking-[0.2em]">Sábado | 28/02</span>
                        <div className="flex items-center gap-3 mt-2">
                            <Clock size={22} weight="light" className="text-white/70" />
                            <span className="text-xl md:text-2xl font-bold">08h00 - 11h00</span>
                        </div>
                    </div>

                    {/* DOMINGO (Foco em Leme) */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="flex flex-col items-center justify-center bg-cyan-500/10 backdrop-blur-xl border border-cyan-500/30 p-6 rounded-2xl hover:bg-cyan-500/20 transition-all duration-500"
                    >
                        <span className="text-[11px] uppercase text-cyan-400 font-black tracking-[0.2em] flex items-center gap-2">
                            <Anchor size={14} weight="fill" /> Domingo | 01/03
                        </span>
                        <div className="flex flex-col mt-2">
                            <span className="text-xl md:text-2xl font-bold">08h00 - 11h00</span>
                            <span className="text-[10px] uppercase font-black text-cyan-400 mt-1 tracking-[0.2em]">Foco em Leme</span>
                        </div>
                    </div>
                </div>

                {/* LOCAL E BOTÃO DE INSCRIÇÃO */}
                <div data-aos="zoom-in" className="flex flex-col items-center gap-8">
                    {/* Localização */}
                    <div className="flex items-center gap-3 text-gray-300">
                        <MapPin size={24} className="text-red-600" weight="fill" />
                        <span className="uppercase tracking-[0.2em] text-xs font-bold">Base CPP Extreme BSB</span>
                    </div>

                    {/* CTA Button */}
                    <a
                        href="https://wa.me/5527996314135"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-white text-black px-12 py-6 rounded-full font-black text-xl flex items-center gap-4 shadow-[0_20px_50px_rgba(255,255,255,0.15)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition-all duration-500 hover:-translate-y-2 uppercase tracking-tighter overflow-hidden"
                    >
                        <WhatsappLogo size={32} weight="fill" className="text-green-600" />
                        <span>Inscrever no Workshop</span>
                        {/* Efeito de brilho no hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </a>
                </div>

                {/* SETA DE ROLAGEM */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
                    <CaretDoubleDown size={24} />
                </div>
            </div>
        </section>
    )
}