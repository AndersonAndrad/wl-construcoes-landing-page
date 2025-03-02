import {Button} from "../components/ui/button.tsx";

export function NotFound() {
    return (
        <div className={'h-dvh flex flex-col items-center justify-center'}>
            <img src="src/assets/icons/not-found.svg" alt="not-found"/>
            <div className={'flex items-center gap-4'}>
                <span>Desculpe a página que você tentou acessar não foi econtrada.</span>
                <Button variant={'link'}>Voltar para home</Button>
            </div>
        </div>
    )
}