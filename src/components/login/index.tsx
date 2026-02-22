"use client";

import { useState } from "react";

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/logo/cruzeiro-do-sul.png')] bg-cover font-jetbrains px-4">
            <div className="flex flex-col sm:flex-row w-full max-w-2xl border-2 border-azul-claro rounded-lg overflow-hidden h-[450px] sm:h-[420px]">
                <div 
                    className={`flex flex-col items-center justify-center transition-all duration-300 h-full ${
                        isLogin 
                            ? "bg-azul-escuro/80 flex-1 p-6 sm:p-8" 
                            : "bg-azul-claro/80 w-full sm:w-48 p-4 cursor-pointer hover:bg-azul-medio/50"
                    }`}
                    onClick={() => !isLogin && setIsLogin(true)}
                >
                    {isLogin ? (
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <h2 className="text-azul-claro text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">
                                Já é cliente? Faça o login
                            </h2>
                            <form className="flex flex-col gap-3 sm:gap-4 w-full">
                                <input
                                    type="text"
                                    placeholder="Nome *"
                                    className="p-2 sm:p-3 rounded-md bg-azul-escuro border-b border-azul-claro text-azul-claro placeholder:text-azul-claro/70 focus:outline-none text-sm sm:text-base"
                                />
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    className="p-2 sm:p-3 rounded-md bg-azul-escuro border-b border-azul-claro text-azul-claro placeholder:text-azul-claro/70 focus:outline-none text-sm sm:text-base"
                                />
                                <input
                                    type="password"
                                    placeholder="Senha *"
                                    className="p-2 sm:p-3 rounded-md bg-azul-escuro border-b border-azul-claro text-azul-claro placeholder:text-azul-claro/70 focus:outline-none text-sm sm:text-base"
                                />
                                <button 
                                    type="submit"
                                    className="bg-azul-escuro text-azul-claro font-bold py-2 sm:py-3 px-6 rounded-md border border-azul-claro hover:bg-azul-medio transition mt-2 text-sm sm:text-base"
                                >
                                    Entrar
                                </button>
                            </form>
                        </div>
                    ) : (
                        <p className="text-azul-escuro text-base sm:text-lg font-medium text-center">
                            Já possui conta? Logue
                        </p>
                    )}
                </div>
                <div 
                    className={`flex flex-col items-center justify-center transition-all duration-300 h-full ${
                        !isLogin 
                            ? "bg-azul-escuro/80 flex-1 p-6 sm:p-8" 
                            : "bg-azul-claro/80 w-full sm:w-48 p-4 cursor-pointer hover:bg-azul-medio/50"
                    }`}
                    onClick={() => isLogin && setIsLogin(false)}
                >
                    {!isLogin ? (
                        <>
                            <h2 className="text-azul-claro text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">
                                Não é cliente? Cadastre-se
                            </h2>
                            <form className="flex flex-col gap-3 sm:gap-4 w-full">
                                <input
                                    type="text"
                                    placeholder="Nome *"
                                    className="p-2 sm:p-3 rounded-md bg-azul-escuro border-b border-azul-claro text-azul-claro placeholder:text-azul-claro/70 focus:outline-none text-sm sm:text-base"
                                />
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    className="p-2 sm:p-3 rounded-md bg-azul-escuro border-b border-azul-claro text-azul-claro placeholder:text-azul-claro/70 focus:outline-none text-sm sm:text-base"
                                />
                                <input
                                    type="password"
                                    placeholder="Senha *"
                                    className="p-2 sm:p-3 rounded-md bg-azul-escuro border-b border-azul-claro text-azul-claro placeholder:text-azul-claro/70 focus:outline-none text-sm sm:text-base"
                                />
                                <input
                                    type="password"
                                    placeholder="Confirmar senha *"
                                    className="p-2 sm:p-3 rounded-md bg-azul-escuro border-b border-azul-claro text-azul-claro placeholder:text-azul-claro/70 focus:outline-none text-sm sm:text-base"
                                />
                                <button 
                                    type="submit"
                                    className="bg-azul-escuro text-azul-claro font-bold py-2 sm:py-3 px-6 rounded-md border border-azul-claro hover:bg-azul-medio transition mt-2 text-sm sm:text-base"
                                >
                                    Cadastre-se
                                </button>
                            </form>
                        </>
                    ) : (
                        <p className="text-azul-escuro text-base sm:text-lg font-medium text-center">
                            Não possui conta? Cadastre-se
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}