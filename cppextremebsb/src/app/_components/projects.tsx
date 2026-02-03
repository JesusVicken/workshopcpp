'use client'

import { Parallax } from 'react-scroll-parallax'
import { WhatsappLogo, CalendarCheck, MapPin } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* 🎥 VÍDEO LIMPO */}
            <Parallax speed={-10} className="absolute inset-0 z-0">
                <video
                    src="/ranin2.mp4"
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover"
                />
                {/* Degradê sutil para leitura */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
            </Parallax>

            {/* CONTEÚDO */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">

                {/* --- LOGO CPP EXTREME --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <Image
                        src="/logo.png"
                        alt="CPP Extreme Logo"
                        width={140} // Tamanho visual ajustado (o arquivo é 500px, mas aqui exibimos menor)
                        height={140}
                        className="drop-shadow-2xl brightness-125" // Brightness ajuda a logo a "popar" no video
                        priority
                    />
                </motion.div>

                {/* Badge "WORKSHOP" */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <span className="bg-white text-black px-6 py-2 font-black text-xs md:text-sm uppercase tracking-[0.25em] shadow-xl border-2 border-white">
                        Workshop Presencial
                    </span>
                </motion.div>

                {/* Título Principal */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-white font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl"
                >
                    <span className="block text-3xl md:text-5xl lg:text-6xl mb-2 opacity-90">CLÍNICA DO</span>
                    <span className="block text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                        VA'A MODERNO
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg md:text-2xl text-white font-serif italic mb-10 drop-shadow-md max-w-2xl"
                >
                    "Transforme sua técnica com a biomecânica moderna."
                </motion.p>

                {/* Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4 mb-10"
                >
                    <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-white hover:bg-black/60 transition-colors">
                        <CalendarCheck size={24} className="text-white" weight="fill" />
                        <div className="text-left leading-tight">
                            <span className="block text-[10px] uppercase text-gray-300 tracking-wider">Data</span>
                            <span className="font-bold text-sm md:text-base">20/02 e 01/03</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-white hover:bg-black/60 transition-colors">
                        <MapPin size={24} className="text-white" weight="fill" />
                        <div className="text-left leading-tight">
                            <span className="block text-[10px] uppercase text-gray-300 tracking-wider">Local</span>
                            <span className="font-bold text-sm md:text-base">Base CPP Extreme BSB</span>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Botão */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <a
                        href="https://wa.me/5527996314135" 
                        target="_blank"
                        className="bg-white text-black hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-lg md:text-xl flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all uppercase tracking-wide"
                    >
                        <WhatsappLogo size={28} weight="fill" className="text-green-600" />
                        Inscrever no Workshop
                    </a>
                </motion.div>
            </div>
        </section>
    )
}