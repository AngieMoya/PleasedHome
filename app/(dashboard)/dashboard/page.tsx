import Banner from '@/components/Banner';
import PublishCard from '@/components/PublishCard';

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <section className="flex flex-col items-center p-8">
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
          name={'Maria Sarmiento'}
          age={40}
          ubication={'Barranquilla / Atlantico'}
          rate={4}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
          publishDate={'05 de julio del 2024'}
          descriptionTitle={'Niñera'}
        />
        <PublishCard
          name={'Pablo Perez'}
          age={36}
          ubication={'Barranquilla / Atlantico'}
          rate={4}
          description={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
          }
          publishDate={'05 de julio del 2024'}
          descriptionTitle={'Jardinero'}
        />
      </section>
      <Banner></Banner>
    </div>
  );
}
