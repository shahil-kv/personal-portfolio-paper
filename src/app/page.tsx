import Cover from '@/components/sections/Cover';
import OnFilm from '@/components/sections/OnFilm';
import Experience from '@/components/sections/Experience';
import Built from '@/components/sections/Built';
import Stack from '@/components/sections/Stack';
import FindMe from '@/components/sections/FindMe';

export default function Home() {
  return (
    <>
      <Cover />
      <OnFilm />
      <Experience />
      <Built />
      <Stack />
      <FindMe />
    </>
  );
}
