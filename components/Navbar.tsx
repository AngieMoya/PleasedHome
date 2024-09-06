'use client';

import Link from 'next/link';

import Button from './Button';

type NavBarProps = {
  variant: 'navbar-home' | 'navbar-form' | 'navbar-dashboard';
};

export default function Navbar(props: NavBarProps) {
  //condicional
  if (props.variant === 'navbar-home') {
    return (
      <nav className="box-border p-8 sm:flex sm:items-center sm:justify-between">
        <Link href="/">
          <p className="pb-4 text-center text-2xl font-extrabold text-primary-green sm:pb-0">PleasedHome</p>
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
          <p className="pb-4 text-center text-2xl font-extrabold text-primary-green sm:pb-0">PleasedHome</p>
        </Link>
      </nav>
    );
  } else if (props.variant === 'navbar-dashboard') {
    return (
      <nav className="box-border p-8 sm:flex sm:items-center sm:justify-between">
        <Link href="/">
          <p className="pb-4 text-center text-2xl font-extrabold text-primary-green sm:pb-0">PleasedHome</p>
        </Link>
        <p>menu</p>
      </nav>
    );
  }
}
