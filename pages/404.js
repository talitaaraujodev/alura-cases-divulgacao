import Link from "../src/components/Link";

export default function Page404(){
return(
    <div>
        <h1>Página não encontrada, você caiu na página 404 :(</h1>
        <Link href={"/"} children="Voltar para Home"/>
    </div>
)
}