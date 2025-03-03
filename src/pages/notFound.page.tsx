import {Button} from "../components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();

    const navigateToHome = (): void => {
        navigate('/')
    }

    return (
        <div className={'h-dvh flex flex-col items-center justify-center'}>
            <img src="src/assets/icons/not-found.svg" alt="not-found"/>
            <div className={'flex flex-col md:flex-row justify-center items-center gap-4'}>
                <span className={'text-center'}>Desculpe a página que você tentou acessar não foi econtrada.</span>
                <Button variant={'secondary'} onClick={navigateToHome}>Voltar para home</Button>
            </div>
        </div>
    )
}