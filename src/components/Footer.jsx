import React from 'react'

const getFullYear = () => new Date().getFullYear()

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-3">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-[#7B2CBF]">UpBase</h2>
          <p className="text-sm text-[#0000007A]">© {getFullYear()} Todos os direitos reservados.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <a href="/" className="text-sm text-[#0000007A] hover:text-purple-600">Sobre</a>
          <a href="/" className="text-sm text-[#0000007A] hover:text-purple-600">Termos de uso</a>
          <a href="/" className="text-sm text-[#0000007A] hover:text-purple-600">Política de privacidade</a>
          <a href="/" className="text-sm text-[#0000007A] hover:text-purple-600">Contate-nos</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
