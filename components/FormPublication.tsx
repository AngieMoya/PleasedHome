export default function FormPublication() {
  return (
    <div className="w-1/2 min-w-min">
      <form className="rounded-xl bg-my-gray p-10 shadow-lg" action="">
        <h2 className="pb-4 text-2xl font-bold text-primary-green">Publicación</h2>
        <div className="pb-4">
          <label htmlFor="title">Titulo de la publicación</label>
          <div>
            <input className="w-full rounded-xl border-2 p-2" type="text" name="title" id="title" />
          </div>
        </div>
        <div className="pb-4">
          <label htmlFor="description">Descripción de la publicación</label>
          <div>
            <input className="w-full rounded-xl border-2 p-2" type="text" name="description" id="description" />
          </div>
        </div>
        <div className="pb-8">
          <label htmlFor="modalitytime">Modalidad temporal del servicio</label>
          <div>
            <select className="w-full rounded-xl border-2 p-2" name="modalitytime" id="modalitytime">
              <option value="day">Día</option>
              <option value="">Fijo</option>
              <option value="">Fijo Interno</option>
              <option value="">Otro</option>
            </select>
          </div>
        </div>
        <input
          className="w-full rounded-full bg-primary-green p-3 font-semibold text-white hover:bg-secondary-green"
          type="submit"
          value="Publica"
        />
      </form>
    </div>
  );
}
