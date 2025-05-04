/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { accountRegisterRequest } from '@/redux/accountRegister/slice';
import { useRouter } from 'next/navigation';
import { RootState } from '@/store';
import { showToast } from '@/redux/toast/slice';

const AccountRegister = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    phone: '',
    pass: '',
    confirmPass: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    mail: '',
    phone: '',
    pass: '',
    confirmPass: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    mail: false,
    phone: false,
    pass: false,
    confirmPass: false
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sessionState: any = useSelector((state: RootState) => state.session);
  const accountRegisterState: any = useSelector((state: RootState) => state.accountRegister);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    if (!accountRegisterState?.loading && !accountRegisterState?.valid && accountRegisterState?.error) {
      dispatch(showToast({ message: 'Não foi possível acessar a conta!', type: 'error' }));
      setIsLoading(false);
    } else if (sessionState?.logged && sessionState?.token) {
      setIsLoading(false);
      router.push('/chat');
    }
  }, [sessionState, accountRegisterState]);  

  useEffect(() => {
    setErrors(prev => ({
      ...prev,
      name: validateName(formData.name),
      mail: validateEmail(formData.mail),
      phone: validatePhone(formData.phone),
      pass: validatePass(formData.pass),
      confirmPass: validateConfirmPass(formData.confirmPass)
    }));
  }, [formData]);

  
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email é obrigatório';
    if (!emailRegex.test(email)) return 'Email inválido';
    return '';
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phone) return 'Telefone é obrigatório';
    if (!phoneRegex.test(phone)) return 'Telefone deve ter 10 ou 11 dígitos';
    return '';
  };

  const validatePass = (pass: string) => {
    const passRegex = /^(?=.*[A-Z])(?=.*[@#$])(?=(?:.*\d){4,}).+$/;
    if (!pass) return 'Senha é obrigatória';
    if (!passRegex.test(pass)) return 'Senha deve conter pelo menos uma letra maiúscula, um caractere especial (@#$), e pelo menos 4 números';
    return '';
  };

  const validateConfirmPass = (confirmPass: string) => {
    if (!confirmPass) return 'Confirmação de senha é obrigatória';
    if (confirmPass !== formData.pass) return 'As senhas não coincidem';
    return '';
  };

  const validateName = (name: string) => {
    if (!name.trim()) return 'Nome é obrigatório';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação do nome
    if (!formData.name.trim()) {
      alert('Por favor, preencha seu nome completo');
      return;
    }

    // Validação do email
    const mailError = validateEmail(formData.mail);
    if (mailError) {
      alert(mailError);
      return;
    }

    // Validação do telefone
    const phoneError = validatePhone(formData.phone);
    if (phoneError) {
      alert(phoneError);
      return;
    }

    // Validação da senha
    const passError = validatePass(formData.pass);
    if (passError) {
      alert(passError);
      return;
    }

    // Validação da confirmação de senha
    const confirmPassError = validateConfirmPass(formData.confirmPass);
    if (confirmPassError) {
      alert(confirmPassError);
      return;
    }

    console.log('[app:account:register] 🔍 Iniciando registro de usuário');
    console.log('[app:account:register] 🔍 Nome:', formData.name);
    console.log('[app:account:register] 🔍 Email:', formData.mail);
    console.log('[app:account:register] 🔍 Telefone:', formData.phone);
    console.log('[app:account:register] 🔍 Senha:', formData.pass);

    dispatch(accountRegisterRequest(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center">Criar uma conta</h1>
        
        <div>
          <label htmlFor="name" className="block text-sm text-green-700 mb-1">
            Nome completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full border border-green-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Seu nome completo"
            required
          />
          {touched.name && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-green-700 mb-1">
            Endereço de e-mail
          </label>
          <input
            id="email"
            name="mail"
            type="email"
            value={formData.mail}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full border ${touched.mail && errors.mail ? 'border-red-500' : 'border-green-600'} rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
            placeholder="nome@exemplo.com"
            required
          />
          {touched.mail && errors.mail && <p className="text-red-500 text-xs mt-1">{errors.mail}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-green-700 mb-1">
            Número de telefone
          </label>
          <div className={`flex items-center border ${touched.phone && errors.phone ? 'border-red-500' : 'border-green-600'} rounded-md px-4 py-2`}>
            <span className="text-gray-500 mr-2">+55</span>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className="flex-1 focus:outline-none"
              placeholder="Digite seu número"
              required
            />
          </div>
          {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-green-700 mb-1">
            Senha
          </label>
          <div className="relative">
            <input
              id="password"
              name="pass"
              type={showPass ? 'text' : 'password'}
              value={formData.pass}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border ${touched.pass && errors.pass ? 'border-red-500' : 'border-green-600'} rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="Digite sua senha"
              required
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPass((prev) => !prev)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {touched.pass && errors.pass && <p className="text-red-500 text-xs mt-1">{errors.pass}</p>}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm text-green-700 mb-1">
            Confirmar senha
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              name="confirmPass"
              type={showConfirmPass ? 'text' : 'password'}
              value={formData.confirmPass}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full border ${touched.confirmPass && errors.confirmPass ? 'border-red-500' : 'border-green-600'} rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="Confirme sua senha"
              required
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              onClick={() => setShowConfirmPass((prev) => !prev)}
            >
              {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {touched.confirmPass && errors.confirmPass && <p className="text-red-500 text-xs mt-1">{errors.confirmPass}</p>}
        </div>

        <button 
          type="submit"
          className="w-full bg-green-600 text-white rounded-md py-2 font-medium hover:bg-green-700 transition"
        >
          Criar conta
        </button>

        <div className="text-center text-sm">
          Já tem uma conta? <a href="#" className="text-green-600 hover:underline">Entrar</a>
        </div>

        <div className="text-xs text-center text-green-600 space-x-2 mt-6">
          <a href="#" className="hover:underline">Termos de uso</a>
          <span>|</span>
          <a href="#" className="hover:underline">Política de privacidade</a>
        </div>
      </form>
    </div>
  );
}

export default AccountRegister;