import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function AboutMe() {
  const [visibility, setVisibility] = useState(false);
  const display = visibility ? 'flex' : 'hidden';
  return (
    <div>
      <form className={`${display} flex-col pb-4`} action="">
        <div className="flex flex-col pb-4">
          <input className="rounded-xl border p-2" type="text" />
        </div>
        <input
          className="w-32 rounded-xl bg-primary-green p-2 font-semibold text-white hover:bg-secondary-green"
          type="submit"
          value="Guardar"
        />
      </form>
      <button
        className="h-8 w-8 rounded-full bg-secondary-green p-1 text-white hover:bg-primary-green"
        onClick={() => {
          setVisibility(!visibility);
        }}
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </div>
  );
}
