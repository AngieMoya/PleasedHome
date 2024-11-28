type InputNewFieldProps = {
  label1: string;
  label2: string;
  label1_for: string;
  label2_for: string;
  id1: string;
  name1: string;
  id2: string;
  name2: string;
  min?: number;
  max?: number;
  pattern?: string;
};

export default function InputNewField(props: InputNewFieldProps) {
  const { label1, label2, label1_for, label2_for, id1, name1, id2, name2, min, max, pattern } = props;
  return (
    <div className="pb-4 pt-4">
      <form action="">
        <div className="flex flex-col pb-4">
          <label className="font-semibold text-gray-400" htmlFor={label1_for}>
            {label1}
          </label>
          <input className="rounded-xl border p-2" type="text" name={name1} id={id1} required />
        </div>
        <div className="flex flex-col pb-4">
          <label className="font-semibold text-gray-400" htmlFor={label2_for}>
            {label2}
          </label>
          <input
            className="rounded-xl border p-2"
            type="number"
            name={name2}
            id={id2}
            min={min}
            max={max}
            pattern={pattern}
            required
          />
        </div>
        <input
          className="w-full rounded-xl bg-primary-green p-2 font-semibold text-white hover:bg-secondary-green"
          type="submit"
          value="Guardar"
        />
      </form>
    </div>
  );
}
