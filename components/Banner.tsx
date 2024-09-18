export default function Banner() {
  return (
    <aside className="hidden h-full flex-col items-center lg:flex lg:min-w-[30%]">
      <span className="p-8 text-sm font-semibold text-gray-400">Publicidad</span>
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
    </aside>
  );
}
function AdCard() {
  return <div className="mb-4 min-h-52 w-4/5 rounded-3xl bg-my-gray"></div>;
}
