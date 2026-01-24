'use client'

import Image from 'next/image'
import { Medal, Student, Boat, Certificate } from '@phosphor-icons/react'

export function About() {
    return (
        <section className="bg-black py-24 px-6 overflow-hidden border-t border-white/10">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* FOTO */}
                    <div className="w-full md:w-5/12 relative group">
                        <div className="aspect-[3/4] relative grayscale hover:grayscale-0 transition-all duration-700 border border-white/20">
                            <Image
                                src="/ranin.png" // COLOCAR FOTO DO RANIN AQUI
                                alt="Ranin Baptistotte"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Nome */}
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                                <h3 className="text-white text-2xl font-bold uppercase">Ranin Baptistotte</h3>
                                <p className="text-gray-400 text-xs tracking-widest uppercase">Oceanógrafo & Educador Físico</p>
                            </div>
                        </div>
                    </div>

                    {/* TEXTO */}
                    <div className="w-full md:w-7/12 text-white">
                        <h2 className="text-4xl font-bold mb-6">O Mentor</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Fundador do CPP Extreme, construtor naval da <strong>primeira Canoa Havaiana 100% brasileira</strong> e detentor de recordes nacionais. Ranin combina a ciência acadêmica com a vivência de um atleta de elite mundial.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                            <div className="flex items-start gap-3">
                                <Medal size={24} className="text-white shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-white">Vice-Campeão Mundial</strong>
                                    <span className="text-sm text-gray-500">Surf Va'a 2025</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Boat size={24} className="text-white shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-white">Recordista Brasileiro</strong>
                                    <span className="text-sm text-gray-500">Distância (BA até RJ)</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Student size={24} className="text-white shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-white">+1000 Alunos</strong>
                                    <span className="text-sm text-gray-500">Dezenas de instrutores formados</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Certificate size={24} className="text-white shrink-0 mt-1" />
                                <div>
                                    <strong className="block text-white">Dupla Graduação</strong>
                                    <span className="text-sm text-gray-500">Ed. Física e Oceanografia</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}