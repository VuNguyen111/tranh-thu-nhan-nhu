import Navbar from "./Navbar";
import Hero from "./Hero";

interface Props {
  totalLetters: number;
}

export default function Header({
  totalLetters,
}: Props) {
  return (
    <>
      <Navbar />

      <Hero totalLetters={totalLetters} />
    </>
  );
}