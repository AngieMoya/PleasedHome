'use client';

import { faBell, faComment, faHome, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

import Button from './Button';
import Menu from './Menu';

type NavBarProps = {
  variant: 'navbar-home' | 'navbar-form' | 'navbar-dashboard';
};

export default function Navbar(props: NavBarProps) {
  //condicional
  if (props.variant === 'navbar-home') {
    return (
      <nav className="box-border p-8 sm:flex sm:items-center sm:justify-between">
        <Link href="/">
          <p className="animate-jump pb-4 text-center text-2xl font-extrabold text-primary-green animate-duration-[2000ms] sm:pb-0">
            PleasedHome
          </p>
        </Link>
        <div className="mx-auto flex w-96 justify-between sm:mx-0">
          <Link href="/login">
            <Button text={'Inicia sesión'} variant="secondary" size={'w-44'}></Button>
          </Link>
          <Link href="/sign-up">
            <Button text={'Registrate'} variant="primary" size={'w-44'}></Button>
          </Link>
        </div>
      </nav>
    );
  } else if (props.variant === 'navbar-form') {
    return (
      <nav className="box-border p-8 sm:flex sm:items-center sm:justify-between">
        <Link href="/">
          <p className="animate-flip-up pb-4 text-center text-2xl font-extrabold text-primary-green sm:pb-0">
            PleasedHome
          </p>
        </Link>
      </nav>
    );
  } else if (props.variant === 'navbar-dashboard') {
    return (
      <nav className="flex items-center justify-evenly bg-secondary-green p-4">
        <Link href="/dashboard">
          <p className="animate-fade-down pb-2 text-center text-2xl font-extrabold text-white animate-ease-in sm:pb-0">
            PleasedHome
          </p>
        </Link>
        <div className="hidden w-4/5 items-center justify-evenly lg:flex">
          <input
            type="search"
            placeholder="Buscar"
            className="rounded-full bg-primary-green/25 p-2 placeholder-white outline-none"
          />
          <div className="flex w-2/5 justify-between text-sm font-semibold text-white">
            <Link href={'/'} className="flex flex-col hover:text-mustard">
              <FontAwesomeIcon icon={faHome} className="p-1"></FontAwesomeIcon>
              Inicio
            </Link>
            <Link href={'/dashboard/publication'} className="flex flex-col hover:text-mustard">
              <FontAwesomeIcon icon={faPenToSquare} className="p-1"></FontAwesomeIcon>
              Públicar
            </Link>
            <Link href={'/'} className="flex flex-col hover:text-mustard">
              <FontAwesomeIcon icon={faBell} className="p-1"></FontAwesomeIcon>
              Notificaciones
            </Link>
            <Link href={'/'} className="flex flex-col hover:text-mustard">
              <FontAwesomeIcon icon={faComment} className="p-1"></FontAwesomeIcon>
              Chats
            </Link>
          </div>
        </div>
        <Menu />
      </nav>
    );
  }
}
