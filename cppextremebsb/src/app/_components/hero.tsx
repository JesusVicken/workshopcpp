'use client'

import { Atom, Waves } from '@phosphor-icons/react'

export function Hero() {
    return (
        <section className="relative py-24 px-6 border-b border-white/10 overflow-hidden bg-black">

            {/* --- VÍDEO BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <video
                    src="/ranin.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-70" // Opacidade alta e sem grayscale para máxima visibilidade
                />
                {/* Gradiente apenas para proteger a leitura do texto na esquerda, soltando o vídeo na direita */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
            </div>

            {/* --- CONTEÚDO (Z-INDEX 10) --- */}
            <div className="relative z-10 container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Texto de Venda (Fica sobre a parte mais escura do gradiente) */}
                    <div className="drop-shadow-md">
                        <h2 className="text-sm font-mono text-gray-300 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-white inline-block shadow-[0_0_10px_white]"></span>
                            O Conceito
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
                            A evolução técnica baseada em <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">evidências.</span>
                        </h3>
                        <p className="text-gray-200 text-lg leading-relaxed mb-6 font-medium shadow-black drop-shadow-md">
                            A década de 70 marcou o surgimento da técnica tahitiana moderna. Hoje, elevamos isso a outro nível unindo a <strong>Oceanografia</strong> à <strong>Educação Física</strong>.
                        </p>
                        <p className="text-white text-lg font-bold border-l-4 border-white pl-4 bg-black/20 backdrop-blur-sm py-2 rounded-r-lg">
                            Não é sobre força bruta. É sobre biofísica, bioquímica da respiração e leitura hidrodinâmica.
                        </p>
                    </div>

                    {/* Destaques (Cards com fundo escuro para contrastar com o vídeo claro) */}
                    <div className="grid gap-6">
                        <div className="bg-black/80 backdrop-blur-md border border-white/20 p-6 hover:border-white/50 transition-all group rounded-xl shadow-2xl">
                            <Atom size={32} className="text-white mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-white mb-2">Bioquímica & Biofísica</h4>
                            <p className="text-gray-400 text-sm font-medium">Domine os padrões de respiração para alta performance e a física do movimento.</p>
                        </div>

                        <div className="bg-black/80 backdrop-blur-md border border-white/20 p-6 hover:border-white/50 transition-all group rounded-xl shadow-2xl">
                            <Waves size={32} className="text-white mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="text-xl font-bold text-white mb-2">Leitura Ambiental</h4>
                            <p className="text-gray-400 text-sm font-medium">Técnicas específicas para condições contra, a favor e laterais. Reação vs Antecipação.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}