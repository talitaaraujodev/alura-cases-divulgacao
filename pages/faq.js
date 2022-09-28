import Head from "next/head";
import Link from "../src/components/Link";

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

/*  O ponto forte do SSG é a entrega rápida de conteúdos estáticos, então 
ele é a melhor estratégia para a página inicial. Com o SSR, você poderá construir 
um painel de controle personalizado e atualizado para cada requisição.*/

/* getServerSideProps - Rodando a cada acesso que vc recebe, em modo dev
sempre roda, a cada acesso */

// web.dev loader
export async function getStaticProps(context) {
  // em modo dev sempre roda, a cada acesso
  // rodando somente com o build time
  const URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
  return {
    props: {
      faq,
    },
  };
}
export default function FAQPage({ faq }) {
  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases Campanha</title>
      </Head>
      <h1>Alura Cases - Página de Perguntas FAQ</h1>
      <Link href={"/"} children={"Ir para Home"} />
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2> {question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
