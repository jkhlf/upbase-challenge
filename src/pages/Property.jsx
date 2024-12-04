import React from 'react';
import { Plus, Star, ArrowLeft } from 'lucide-react';
import Carousel from '../components/Carousel'

const Property = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <header className="py-3 px-3 flex justify-between items-center">
                <button className="text-purple-600">
                    <ArrowLeft size={35} />
                </button>
                <button className="flex items-center gap-2 text-purple-600">
                    <Plus size={27} />
                    <span className="md:text-lg">Cadastrar imóvel</span>
                </button>
            </header>

            <section className="px-3 py-3">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Bem-vindo, Raphael!</h1>
                <div className="flex gap-4 mb-6 overflow-x-auto scrollbar-hide">
                    <button className="bg-purple-600 text-gray-300 md:px-6 rounded-full">
                        Todos os flats
                    </button>
                    <button className="bg-gray-100 text-gray-600 md:px-6 rounded-full border">
                        Indisponíveis
                    </button>
                </div>
            </section>

            <section className="px-3">
                <Carousel />
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 mt-4">
                        <h2 className="text-xl md:text-2xl font-bold">Poundsflats Aquário</h2>
                        <div className="flex items-center gap-1">
                            <Star className="fill-purple-600 text-purple-600" size={22} md:size={20} />
                            <span className="text-lg md:text-xl">4,5</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
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
