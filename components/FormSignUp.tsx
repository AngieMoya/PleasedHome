'use client';

import {
  faAddressCard,
  faArrowAltCircleLeft,
  faCalendar,
  faEnvelope,
  faEyeSlash,
  faIdBadge,
} from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import { useState } from 'react';

import Button from './Button';

function Step1() {
  return (
    <>
      <div className="flex w-4/5 flex-col pb-4 text-xs text-primary-green">
        <label htmlFor="name">Nombre</label>
        <div className="flex items-center rounded-3xl border-2 bg-white p-3 placeholder-primary-green">
          <FontAwesomeIcon className="pr-1" icon={faUser} size="sm"></FontAwesomeIcon>
          <input
            className="w-full placeholder-primary-green outline-none"
            type="text"
            name="name"
            placeholder="Nombre completo"
            id="name"
          ></input>
        </div>
      </div>

      <div className="flex w-4/5 flex-col pb-4 text-xs text-primary-green">
        <label htmlFor="birthdate">Fecha de nacimiento</label>
        <div className="flex items-center rounded-3xl border-2 bg-white p-3 placeholder-primary-green">
          <FontAwesomeIcon className="pr-1" icon={faCalendar} size="sm"></FontAwesomeIcon>
          <input className="w-full outline-none" type="date" name="birthdate" id="birthdate"></input>
        </div>
      </div>

      <div className="flex w-4/5 flex-col pb-4 text-xs text-primary-green">
        <label htmlFor="rol">Deseas unirte como</label>
        <div className="flex items-center rounded-3xl border-2 bg-white p-3 placeholder-primary-green">
          <FontAwesomeIcon className="pr-1" icon={faAddressCard} size="sm"></FontAwesomeIcon>
          <select className="w-full outline-none" id="rol">
            <option value="" disabled selected>
              Seleccione rol
            </option>
            <option value="provider">Proveedor de servicios</option>
            <option value="custumer">Cliente consumidor</option>
          </select>
        </div>
      </div>
    </>
  );
}
function Step2() {
  return (
    <>
      <div className="flex w-4/5 flex-col pb-4 text-xs text-primary-green">
        <label htmlFor="idtype">Tipo de documento</label>
        <div className="flex items-center rounded-3xl border-2 bg-white p-3 placeholder-primary-green">
          <FontAwesomeIcon className="pr-1" icon={faAddressCard} size="sm"></FontAwesomeIcon>
          <select className="w-full outline-none" id="idtype">
            <option value="cc">Cedula de ciudadania</option>
            <option value="ce">Cedula de extranjeria</option>
          </select>
        </div>
      </div>

      <div className="flex w-4/5 flex-col pb-4 text-xs text-primary-green">
        <label htmlFor="idnumber">Número de documento</label>
        <div className="flex items-center rounded-3xl border-2 bg-white p-3 placeholder-primary-green">
          <FontAwesomeIcon className="pr-1" icon={faIdBadge} size="sm"></FontAwesomeIcon>
          <input
            className="w-full placeholder-primary-green outline-none"
            type="text"
            name="number of document"
            placeholder="Número de documento"
            id="idnumber"
          ></input>
        </div>
      </div>

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
    </>
  );
}

export default function FormSignUp() {
  const [step, setStep] = useState(1);

  const textButton = step === 1 ? 'Siguiente' : 'Registrate';
  const displayButton = step === 1 ? 'hidden' : 'block';

  return (
    <div className="flex max-h-[606px] w-11/12 flex-col items-center justify-center rounded-3xl bg-my-gray p-8 shadow-lg shadow-primary-green/60 sm:w-3/4 md:w-1/2">
      <h2 className="pb-4 text-xl font-extrabold text-primary-green">Registrate</h2>
      <button
        className={`self-center font-semibold ${displayButton} text-sm text-primary-green hover:text-secondary-green`}
        onClick={() => {
          if (step === 2) {
            setStep(1);
          }
        }}
      >
        <FontAwesomeIcon className="pr-1" icon={faArrowAltCircleLeft}></FontAwesomeIcon>
        Volver
      </button>
      <form
        className="flex w-full flex-col items-center justify-around p-8 lg:w-4/5"
        onSubmit={(e) => e.preventDefault()}
      >
        {step === 1 ? <Step1 /> : <Step2 />}

        <Button
          text={textButton}
          size={'w-4/5'}
          variant={'primary'}
          onClick={() => {
            if (step === 1) {
              setStep(2);
            }
          }}
        ></Button>
        <div className="flex pt-2 text-xs">
          <p className="font-semibold text-secondary-green">Ya tienes cuenta registrada?</p>
          <Link className="pl-1 font-semibold text-primary-green hover:text-secondary-green" href={'/login'}>
            Inicia sesión
          </Link>
        </div>
      </form>
    </div>
  );
}
