'use client'

import { WhatsappLogo, CheckCircle } from '@phosphor-icons/react'

export default function CheckVaa() {
    return (
        <section className="bg-zinc-950 py-24 px-6 text-center">
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
                    Garanta Sua Evolução
                </h2>
                <p className="text-gray-400 text-lg mb-12">
                    Invista na sua técnica com quem é referência nacional e mundial.
                </p>

                <div className="bg-black border border-white/20 p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-white/5">
                    {/* Efeito Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-white shadow-[0_0_30px_rgba(255,255,255,0.5)]"></div>

                    <div className="flex flex-col items-center">
                        <span className="text-gray-500 text-sm uppercase tracking-widest mb-4">Investimento Workshop Completo</span>

                        {/* PREÇO */}
                        <div className="text-6xl font-black text-white mb-2 tracking-tighter">
                            R$ XXX
                        </div>
                        <span className="text-sm text-gray-400 mb-8 bg-white/10 px-4 py-1 rounded-full border border-white/5">
                            Parcelado em até 2x
                        </span>

                        {/* Lista de Inclusos */}
                        <div className="w-full space-y-3 mb-10 text-left max-w-xs mx-auto border-t border-b border-white/10 py-6">
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <CheckCircle className="text-white" weight="fill" /> <span>Acesso aos 2 Dias</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <CheckCircle className="text-white" weight="fill" /> <span>Análise Técnica</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300 text-sm">
                                <CheckCircle className="text-white" weight="fill" /> <span>Certificado CPP Extreme</span>
                            </div>
                        </div>

                        {/* BOTÃO FINAL */}
                        <a
                            href="https://wa.me/5527999999999?text=Ola,%20gostaria%20de%20me%20inscrever%20no%20Workshop%20Vaa%20Moderno" // EDITAR LINK
                            target="_blank"
                            className="w-full bg-white text-black hover:bg-gray-200 font-bold py-5 px-6 transition-all flex items-center justify-center gap-3 uppercase tracking-wide group"
                        >
                            <WhatsappLogo size={28} weight="fill" className="text-black group-hover:scale-110 transition-transform" />
                            Inscrever Agora
                        </a>

                        <p className="mt-6 text-xs text-gray-600 uppercase">
                            Vagas limitadas por ordem de inscrição.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}