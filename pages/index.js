import Link from "../src/components/Link";

export default function HomePage() {
  return (
    <div>
      <h1>Alura Cases - Home</h1>
      <Link href={"/faq"} children={"Ir para FAQ"}/>
    </div>
  );
}
