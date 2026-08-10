type Props = {
  id?: string;
  /** Page number in the gutter. A notebook really is sequential. */
  marker: string;
  children: React.ReactNode;
};

export default function Sheet({ id, marker, children }: Props) {
  return (
    <section id={id} className='sheet'>
      <span className='sheet__marker' aria-hidden='true'>
        {marker}
      </span>
      {children}
    </section>
  );
}
