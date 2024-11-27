import Button from '@/components/Button';
import StarRating from '@/components/StarRating';
import TabbedSection from '@/components/TabbedSection';

type ProfileProps = {
  name: string;
  age: number;
  ubication: string;
};

export default function Profile(props: ProfileProps) {
  const { name, age, ubication } = props;
  return (
    <div className="flex justify-evenly p-8">
      <section className="flex flex-col">
        <div className="h-56 w-56 rounded-xl border bg-gray-200"></div>
        <div className="pt-8">
          <div className="pb-11">
            <h2 className="pb-4 text-2xl font-bold text-primary-green">Experiencia</h2>
            <Button text={'Añadir'} size={'w-32'} variant={'quaternary'}></Button>
          </div>
          <div>
            <h2 className="pb-4 text-2xl font-bold text-primary-green">Habilidades</h2>
            <Button text={'Añadir'} size={'w-32'} variant={'tertiary'}></Button>
          </div>
        </div>
      </section>
      <section className="w-2/3">
        <div className="flex h-56 flex-col justify-between">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-xl font-semibold text-black/50">{age}</p>
          <p className="text-xl font-semibold text-black/50">{ubication}</p>
          <StarRating />
          <br></br>
          <Button text={'Contactar'} size={'w-32'} variant={'primary'}></Button>
        </div>
        <div className="pt-8">
          <TabbedSection />
        </div>
      </section>
    </div>
  );
}
