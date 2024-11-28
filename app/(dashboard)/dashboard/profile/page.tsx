'use client';
import { useState } from 'react';

import Button from '@/components/Button';
import InputNewField from '@/components/InputNewField';
import PublishCard from '@/components/PublishCard';
import StarRating from '@/components/StarRating';
import TabbedSection from '@/components/TabbedSection';
import AboutMe from '@/components/AboutMe';

type ProfileProps = {
  name: string;
  age: number;
  ubication: string;
};

export default function Profile(props: ProfileProps) {
  const [visibilityExperience, setVisibilityExperience] = useState(false);
  const displayExperience = visibilityExperience ? 'block' : 'hidden';

  const [visibilitySkills, setVisibilitySkills] = useState(false);
  const displaySkills = visibilitySkills ? 'block' : 'hidden';

  const { name, age, ubication } = props;

  const tabContent = {
    aboutme: <AboutMe />,
    publications: (
      <PublishCard
        name={'Nombre'}
        age={40}
        ubication={'ubication'}
        rate={0}
        descriptionTitle={'Cuidado de niños'}
        description={'cuido niños de 2 a 6 años'}
        publishDate={'28/11/2024'}
      />
    ),
    reviews: (
      <div>
        <p className="font-semibold text-gray-400">Aún no hay reseñas</p>
      </div>
    ),
  };
  return (
    <div className="flex justify-evenly p-8">
      <section className="flex flex-col">
        <div className="h-56 w-56 rounded-xl border bg-gray-200"></div>
        <div className="pt-8">
          <div className="pb-11">
            <h2 className="pb-4 text-2xl font-bold text-primary-green">Experiencia</h2>
            <div className={`${displayExperience}`}>
              <InputNewField
                label1={'Experiencia'}
                label2={'Años de experiencia'}
                label1_for={'experience'}
                label2_for={'years'}
                id1={'experience'}
                name1={'experience'}
                id2={'years'}
                name2={'years'}
              />
            </div>
            <Button
              text={'Añadir'}
              size={'w-32'}
              variant={'quaternary'}
              onClick={() => {
                setVisibilityExperience(!visibilityExperience);
              }}
            ></Button>
          </div>
          <div>
            <h2 className="pb-4 text-2xl font-bold text-primary-green">Habilidades</h2>
            <div className={`${displaySkills}`}>
              <InputNewField
                label1={'Descripción'}
                label2={'Puntuación del 1 al 5'}
                label1_for={'skills'}
                label2_for={'score'}
                id1={'skills'}
                name1={'skills'}
                id2={'score'}
                name2={'score'}
                min={1}
                max={5}
                pattern="[1-5]"
              />
            </div>
            <Button
              text={'Añadir'}
              size={'w-32'}
              variant={'quaternary'}
              onClick={() => {
                setVisibilitySkills(!visibilitySkills);
              }}
            ></Button>
          </div>
        </div>
      </section>
      <section className="w-2/3">
        <div className="flex h-56 flex-col justify-between">
          <h2 className="text-2xl font-bold">{name}Manuela Beltran</h2>
          <p className="text-xl font-semibold text-black/50">{age}40</p>
          <p className="text-xl font-semibold text-black/50">{ubication}Barranquilla / Atlántico</p>
          <StarRating />
          <br></br>
          <Button text={'Contactar'} size={'w-32'} variant={'primary'}></Button>
        </div>
        <div className="pt-8">
          <TabbedSection content={tabContent} />
        </div>
      </section>
    </div>
  );
}
