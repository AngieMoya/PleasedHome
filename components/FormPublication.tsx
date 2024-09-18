export default function FormPublication() {
  return (
    <div>
      <div>
        <h2>Publicación</h2>
      </div>
      <form className="bg-blue-200 p-8">
        <div>
          <label>Descripción de la publicación</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <label>Modalidad del servicio</label>
          <div>
            <select name="" id="">
              <option value="day">Día</option>
              <option value="">Fijo</option>
              <option value="">Fijo Interno</option>
              <option value="">Otro</option>
            </select>
          </div>
        </div>
        <div>
          <label>Valor propuesto de la oferta</label>
          <div>
            <input type="text" />
          </div>
        </div>
      </form>
    </div>
  );
}
