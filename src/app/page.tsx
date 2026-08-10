import Cover from '@/components/sections/Cover';
import OnFilm from '@/components/sections/OnFilm';
import Built from '@/components/sections/Built';
import Stack from '@/components/sections/Stack';
import FindMe from '@/components/sections/FindMe';

export default function Home() {
  return (
    <>
      <Cover />
      <OnFilm />
      <Built />
      <Stack />
      <FindMe />
    </>
  );
}
