'use client';

import { FaPhone } from 'react-icons/fa';

export default function AuthUser() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center">Que bom que você voltou</h1>
        
        <div>
          <label htmlFor="email" className="block text-sm text-green-700 mb-1">
            Endereço de e-mail
          </label>
          <input
            id="email"
            type="email"
            className="w-full border border-green-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="nome@exemplo.com"
          />
        </div>

        <div>
              <label htmlFor="phone" className="block text-sm text-green-700 mb-1">
                Número de telefone
              </label>
              <div className="flex items-center border border-green-600 rounded-md px-4 py-2">
                <span className="text-gray-500 mr-2">+55</span>
                <input
                  id="phone"
                  type="tel"
                  className="flex-1 focus:outline-none"
                  placeholder="Digite seu número"
                />
              </div>
            </div>

        <button className="w-full bg-green-600 text-white rounded-md py-2 font-medium hover:bg-green-700 transition">
          Continuar
        </button>

        <div className="text-center text-sm">
          Não tem uma conta? <a href="#" className="text-green-600 hover:underline">Cadastrar</a>
        </div>

        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <span className="flex-1 h-px bg-gray-300" />
          <span>ou</span>
          <span className="flex-1 h-px bg-gray-300" />
        </div>

        <div>
          <button className="flex items-center justify-center w-full border rounded-md py-2 text-sm font-medium gap-2">
            <FaPhone /> Continuar com o telefone
          </button>
        </div>

        <div className="text-xs text-center text-green-600 space-x-2 mt-6">
          <a href="#" className="hover:underline">Termos de uso</a>
          <span>|</span>
          <a href="#" className="hover:underline">Política de privacidade</a>
        </div>
      </div>
    </div>
  );
}
