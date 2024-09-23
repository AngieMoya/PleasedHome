'use client';

import { faEnvelope, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from './Button';

export default function FormLogin() {
  const router = useRouter();

  return (
    <div className="flex max-h-[606px] w-11/12 flex-col items-center justify-center rounded-3xl bg-my-gray p-8 shadow-lg shadow-primary-green/60 sm:w-3/4 md:w-1/2">
      <h2 className="pb-4 text-xl font-extrabold text-primary-green">Inicia sesión</h2>
      <form
        className="flex w-full flex-col items-center justify-around p-8 lg:w-4/5"
        onSubmit={(e) => {
          e.preventDefault();
          router.push('/dashboard');
        }}
      >
        <div className="flex w-4/5 flex-col pb-4 text-xs text-primary-green">
          <label htmlFor="email">Correo electrónico</label>
          <div className="flex items-center rounded-3xl border-2 bg-white p-3 placeholder-primary-green">
            <FontAwesomeIcon className="pr-1" icon={faEnvelope} size="sm"></FontAwesomeIcon>
            <input
              className="w-full placeholder-primary-green outline-none"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              id="email"
            ></input>
          </div>
        </div>

        <div className="flex w-4/5 flex-col pb-4 text-xs text-primary-green">
          <label>Contraseña</label>
          <div className="flex items-center rounded-3xl border-2 bg-white p-3 placeholder-primary-green">
            <FontAwesomeIcon className="pr-1" icon={faEyeSlash} size="sm"></FontAwesomeIcon>
            <input
              className="w-full placeholder-primary-green outline-none"
              type="password"
              name="pasword"
              placeholder="Contraseña"
            ></input>
          </div>
        </div>
        <Button text={'Iniciar sesión'} size={'w-4/5'} variant={'primary'}></Button>
        <div className="flex pt-2 text-xs">
          <p className="font-semibold text-secondary-green">No tienes cuenta registrada?</p>
          <Link className="pl-1 font-semibold text-primary-green hover:text-secondary-green" href={'/sign-up'}>
            Registrate
          </Link>
        </div>
      </form>
    </div>
  );
}
