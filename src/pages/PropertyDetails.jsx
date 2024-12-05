import React from 'react'
import { ArrowLeft, Shield, Video, Bed, DollarSign, SprayCan, Bath, CookingPotIcon as Kitchen, Home, WashingMachineIcon as Washing, Check, X } from 'lucide-react'
import Carousel from '../components/Carousel'

export default function PropertyDetails() {
    return (
        <main className="max-w-4xl mx-auto px-4">
            <header className="py-3">
                <button className="text-[#7B2CBF]">
                    <a href="/"> <ArrowLeft size={35} /></a>
                </button>
                <h1 className="text-lg text-[#10002B] my-6 md:text-2xl px-4">Visualize e confirme o cadastro do seu imóvel</h1>
            </header>

            <div className="px-4">
                <Carousel />
                <div className="mt-4">
                    <h2 className="text-xl font-bold md:text-2xl">Poundsflats Unidade Aquário 065</h2>
                    <div className="flex justify-between items-center mt-2">
                        <span className="text-[#10002B] text-sm font-bold md:text-base">Santos, SP</span>
                        <span className="text-[#10002B] text-sm font-bold md:text-base">Diária: <span className='font-normal'>R$97</span></span>
                    </div>
                    <p className="text-[#00000029] mt-4 text-sm md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.
                    </p>
                    <div className="py-4 flex items-center justify-center">
                        <button className="p-2 sm:px-8 md:px-16 lg:px-32 text-white bg-[#7B2CBF] hover:bg-purple-700 flex justify-center items-center rounded-lg w-full sm:w-auto">
                            <Video className="mr-2 h-5 w-5" />
                            <span className="text-sm sm:text-base">Vídeo Visita</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
                    {[
                        { icon: Bed, label: "Quarto mobiliado" },
                        { icon: Bath, label: "Banheiro equipado" },
                        { icon: Kitchen, label: "Cozinha equipada" },
                        { icon: Home, label: "Sala equipada" },
                        { icon: Washing, label: "Área de serviço" }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start text-start border rounded-md p-2 w-full h-full shadow-sm"
                        >
                            <item.icon className="h-7 w-7 text-[#00000029]" />
                            <span className="text-sm text-[#00000029] mt-1">{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3 mt-6 py-4 border-b border-t">
                    <span className="text-lg font-bold text-[#10002B]">Locado por Henrique Rodrigues</span>
                    <img src="avatar.png" alt="Locador" className="w-8 h-8 rounded-full ml-auto" />
                </div>

                <div className="space-y-4 mt-6">
                    {[
                        { title: "Tipo do imóvel", value: "Casa/Apartamento" },
                        { title: "Quartos", value: "3 quartos" },
                        { title: "Banheiros", value: "2 banheiros" }
                    ].map((item, index) => (
                        <div key={index} className="w-full text-sm bg-gray-200 rounded-lg border p-2">
                            <h4 className="font-semibold text-[#00000029] mb-1">{item.title}</h4>
                            <p className="text-[#0000007A]">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6">
                    <h3 className="font-bold mb-3">Itens do imóvel</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Guarda-roupa", "Frigobar", "Cama de casal", "Bidê", "Box blindex",
                            "Chuveiro elétrico", "Pia", "Vaso sanitário", "Banheira", "Fogão elétrico",
                            "Geladeira", "Microondas", "Forno elétrico", "Tanque", "Lava e seca roupas",
                            "Sofá cama", "Televisão"].map((item, index) => (
                                <div key={index} className="text-sm text-[#000000CC] bg-gray-100 rounded-full px-3 py-1">
                                    {item}
                                </div>
                            ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="font-bold mb-3">Comodidades</h3>
                    <div className="flex flex-wrap gap-2">
                        {["Internet", "TV a cabo", "Televisão", "Ar condicionado"].map((item, index) => (
                            <div key={index} className="text-sm text-[#000000CC] bg-gray-100 rounded-full px-3 py-1">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="font-bold mb-3">Permissões</h3>
                    <div className="space-y-2">
                        {[
                            { allowed: true, text: "Pets são permitidos" },
                            { allowed: true, text: "Fumantes são permitidos" },
                            { allowed: true, text: "Casais são permitidos" },
                            { allowed: false, text: "Visitas não são permitidos" },
                            { allowed: false, text: "Crianças não são permitidas" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                {item.allowed ? (
                                    <Check className="h-6 w-6 text-[#7B2CBF]" />
                                ) : (
                                    <X className="h-6 w-6 text-red-500" />
                                )}
                                <span className="text-[#10002B]">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="font-bold mb-3">Taxas/multas</h3>
                    <div className="space-y-3">
                        {[
                            { icon: <SprayCan />, title: "Taxa de limpeza", price: "R$50,00" },
                            { icon: <Shield />, title: "Multa sobre avarias", price: "R$150,00" },
                            { icon: <DollarSign />, title: "Taxa personalizada", price: "R$300,00" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center justify-between text-[#10002B]">
                                <div className="flex items-center gap-2">
                                    <span className='text-[#7B2CBF]'>{item.icon}</span>
                                    <span>{item.title}</span>
                                </div>
                                <span className='text-[#0000005C]'>{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="w-full bg-[#7B2CBF] hover:bg-purple-700 text-white py-3 rounded-lg my-8">
                    Finalizar cadastro do imóvel
                </button>
            </div>
        </main>
    )
}