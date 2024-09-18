import {
  faBars,
  faBoxArchive,
  faCalendar,
  faCreditCard,
  faGear,
  faSignOut,
  faStar,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [marginBottom, setMarginBottom] = useState(0);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMarginBottom(menu.current?.offsetHeight ?? 0);
  }, [open]);

  return (
    <div className="relative">
      <button>
        <FontAwesomeIcon icon={faBars} className="text-white hover:text-mustard" onClick={() => setOpen(!open)} />
      </button>
      <div
        ref={menu}
        style={{
          bottom: `-${marginBottom}px`,
        }}
        className={`${open ? 'flex' : 'hidden'} absolute right-0 rounded-xl bg-mustard/75 p-4 shadow-2xl`}
      >
        <ul className="font-semibold text-white">
          <li>
            <Link
              href={''}
              className="flex items-center gap-x-3 whitespace-nowrap p-2 hover:rounded-xl hover:bg-mustard"
            >
              <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
              <span>Perfil</span>
            </Link>
          </li>
          <li>
            <Link
              href={''}
              className="flex items-center gap-x-3 whitespace-nowrap p-2 hover:rounded-xl hover:bg-mustard"
            >
              <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
              <span>Pagos</span>
            </Link>
          </li>
          <li>
            <Link
              href={''}
              className="flex items-center gap-x-3 whitespace-nowrap p-2 hover:rounded-xl hover:bg-mustard"
            >
              <FontAwesomeIcon icon={faBoxArchive}></FontAwesomeIcon>
              <span>Historial</span>
            </Link>
          </li>
          <li>
            <Link
              href={''}
              className="flex items-center gap-x-3 whitespace-nowrap p-2 hover:rounded-xl hover:bg-mustard"
            >
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <span>Favoritos</span>
            </Link>
          </li>
          <li>
            <Link
              href={''}
              className="flex items-center gap-x-3 whitespace-nowrap p-2 hover:rounded-xl hover:bg-mustard"
            >
              <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
              <span>Mi agenda</span>
            </Link>
          </li>
          <li></li>
          <li>
            <Link
              href={''}
              className="flex items-center gap-x-3 whitespace-nowrap p-2 hover:rounded-xl hover:bg-mustard"
            >
              <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
              <span>Configurar mi cuenta</span>
            </Link>
          </li>
          <li>
            <Link
              href={'/'}
              className="flex items-center gap-x-3 whitespace-nowrap p-2 hover:rounded-xl hover:bg-mustard"
            >
              <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>
              <span>Cerrar Sesión</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
