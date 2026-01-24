'use client'

export function Services() {
    return (
        <section className="bg-black py-20 border-y border-white/10">
            <div className="container mx-auto px-6">
                <h3 className="text-center text-white font-bold uppercase mb-10 tracking-widest text-sm">O que você vai dominar</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4 border border-white/5 rounded hover:border-white/20 transition-all">
                        <span className="block text-white font-bold">Huti Pa'ari</span>
                        <span className="text-xs text-gray-500">Força/Resistência</span>
                    </div>
                    <div className="p-4 border border-white/5 rounded hover:border-white/20 transition-all">
                        <span className="block text-white font-bold">Huti Pe'e</span>
                        <span className="text-xs text-gray-500">Velocidade/Sprint</span>
                    </div>
                    <div className="p-4 border border-white/5 rounded hover:border-white/20 transition-all">
                        <span className="block text-white font-bold">Tatara</span>
                        <span className="text-xs text-gray-500">Recuperação</span>
                    </div>
                    <div className="p-4 border border-white/5 rounded hover:border-white/20 transition-all">
                        <span className="block text-white font-bold">Downwaves</span>
                        <span className="text-xs text-gray-500">Surf/Conexão</span>
                    </div>
                </div>
            </div>
        </section>
    )
}