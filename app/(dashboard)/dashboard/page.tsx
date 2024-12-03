import Banner from '@/components/Banner';
import PublishCard from '@/components/PublishCard';

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <section className="flex w-3/4 flex-col items-center p-8">
        <PublishCard
          name={'Susana Romo'}
          age={40}
          ubication={'Barranquilla / Atlantico'}
          rate={4}
          description={'Busco empleo para realizar tareas domésticas como interna.'}
          publishDate={'05 de julio del 2024'}
          descriptionTitle={'Aseo general'}
        />
        <PublishCard
          name={'Maria Perez'}
          age={40}
          ubication={'Barranquilla / Atlantico'}
          rate={4}
          description={'Busco empleo para realizar tareas domésticas como interna.'}
          publishDate={'05 de julio del 2024'}
          descriptionTitle={'Aseo general'}
        />
        <PublishCard
          name={'Cristina Uchuga'}
          age={40}
          ubication={'Barranquilla / Atlantico'}
          rate={4}
          description={'Busco empleo para realizar tareas domésticas como interna.'}
          publishDate={'05 de julio del 2024'}
          descriptionTitle={'Aseo general'}
        />
      </section>
      <Banner></Banner>
    </div>
  );
}
