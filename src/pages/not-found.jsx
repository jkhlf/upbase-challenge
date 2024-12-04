import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="text-center p-6 bg-white max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">404 - Página Não Encontrada</h1>
        <p className="text-lg text-gray-600 mb-6">
          Isso é apenas um protótipo do projeto, infelizmente não temos tudo completo por aqui.
        </p>
        <a
          href="/"
          className="text-indigo-600 hover:text-indigo-800 font-semibold text-lg underline"
        >
          Voltar para a página inicial
        </a>
        </div>
      </div>
  );
};

export default NotFound;
