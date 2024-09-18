import Button from '@/components/Button';

export default function Page() {
  return (
    <section className="relative flex flex-grow items-center justify-center">
      <div className="absolute inset-0 bg-my-image-home bg-cover bg-center opacity-50"></div>
      <div className="absolute animate-fade-up flex-col p-16 animate-duration-[3000ms] sm:w-9/12 md:w-1/2">
        <p className="text-2xl">
          <strong>PleasedHome</strong> ha llegado para ofrecerte una herramienta accesible, confiable y rápida.
        </p>
        <p className="pb-4 text-lg">
          En donde podrás adquirir u ofertar servicios domésticos de manera facíl y segura.
        </p>
        <Button text="Explora" variant="tertiary" size={'w-44'}></Button>
      </div>
    </section>
  );
}
