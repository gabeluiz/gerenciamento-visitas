
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div className="container bg-gray-100 max-w-full mx-auto py-24 px-6">
            <div className="font-sans">
                <div className="max-w-sm mx-auto px-6">
                    <div className="relative flex flex-wrap">
                        <div className="w-full relative">
                            <div className="mt-6">
                                <div className="mb-5 pb-1border-b-2 text-center font-base text-gray-700">
                                    <span>By <a className="text-blue-500" href="/">Gerenciamento de visitas</a></span>
                                </div>
                                <div className="text-center font-semibold text-black">

                                </div>

                                <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mx-auto max-w-lg">
                                        <div className="py-2">
                                            <span className="px-1 text-sm text-gray-600">Usuário</span>
                                            <input placeholder=""
                                                type="text"
                                                className="text-md block px-3 py-2  
                                                rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md 
                                                focus:placeholder-gray-500 
                                                focus:bg-white 
                                                focus:border-gray-600 
                                                focus:outline-none"
                                                name="usuario"
                                                {...register('usuario', { required: true })}         
                                            />
                                            <span className="text-red-500">{errors.usuario && "Informe um usuário."}</span>
                                        </div>
                                        <div className="py-2">
                                            <span className="px-1 text-sm text-gray-600">Senha</span>
                                            <div className="relative">
                                                <input placeholder=""
                                                    type={passwordShown ? "text" : "password"}
                                                    className="text-md block px-3 py-2 rounded-lg w-full 
                                                    bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                                                    focus:placeholder-gray-500
                                                    focus:bg-white 
                                                    focus:border-gray-600  
                                                    focus:outline-none"
                                                    name="senha"
                                                    {...register('senha', { required: true })}
                                                />
                                                <span className="text-red-500">{errors.usuario && "Informe uma senha."}</span>
                                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between"><label className="block text-gray-500 font-bold my-4">
                                            <input type="checkbox" className="leading-loose text-pink-600" />
                                            <span className="py-2 text-sm text-gray-600 leading-snug"> Lembrar-me</span></label>
                                            <label className="block text-gray-500 font-bold my-4">
                                                <a href="#" className="tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400">
                                                    <span>Esqueceu a senha?</span>
                                                </a>
                                            </label>
                                        </div>
                                        <button type="submit"
                                            className="mt-3 text-lg font-semibold 
                                                bg-gray-800 w-full text-white rounded-lg
                                                px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}