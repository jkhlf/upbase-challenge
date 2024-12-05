import React from 'react';
import { Plus, Star, ArrowLeft } from 'lucide-react';
import Carousel from '../components/Carousel';

const Property = () => {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <header className="py-3 flex justify-between items-center">
                <button className="text-[#7B2CBF]">
                    <ArrowLeft size={35} />
                </button>
                <button className="flex items-center gap-2 text-[#7B2CBF]">
                    <Plus size={27} />
                    <span className="md:text-lg">Cadastrar imóvel</span>
                </button>
            </header>

            <section className="px-4 py-3">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Bem-vindo, Raphael!</h1>
                <div className="flex gap-4 mb-6 overflow-x-auto scrollbar-hide px-1">
                    <button className="bg-[#7B2CBF] text-white px-4 font-normal rounded-full">
                        Todos os flats
                    </button>
                    <button className="bg-gray-100 text-gray-600 px-4 font-normal rounded-full border">
                        Indisponíveis
                    </button>
                </div>
            </section>

            <section className="px-4">
                <Carousel />
                <div className="mb-8 mt-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl md:text-2xl font-bold">Poundsflats Aquário</h2>
                        <div className="flex items-center gap-1">
                            <Star className="fill-[#7B2CBF] text-[#7B2CBF]" size={22} />
                            <span className="text-lg md:text-xl">4,5</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-gray-600">Santos, SP</p>
                        <p className="text-gray-600">
                            Diária: <span className="font-bold">R$97</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Property;