import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <div className='w-full h-screen  flex flex-col px-20 py-20  bg-[url("/paper.png")] bg-repeat  bg-left-top'>
      <Hero />
    </div>
  );
}
