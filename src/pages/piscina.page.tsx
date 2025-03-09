import {Button} from "../components/ui/button.tsx";
import {ArrowLeft} from "lucide-react";
import {useNavigate} from "react-router-dom";

export function PiscinaPage() {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/')
    }

    return (
        <div
            className="grid grid-cols-12 sm:grid-cols-8 md:grid-cols-12 lg:grid-cols-12">
            {/* header content */}
            <header
                className="flex items-center justify-between col-start-2 col-end-12 sm:col-end-8 md:col-end-12 lg:col-start-4 lg:col-end-10 py-4 h-fit">
                <span className="text-nowrap font-semibold">Wl construções</span>
                <span className="hidden sm:block whitespace-nowrap font-semibold">Entre em contato conosco</span>
                <Button
                    className={'sm:hidden w-fit'}
                    variant={'link'}
                    onClick={navigateToHome}>
                    <ArrowLeft/> Voltar
                </Button>
            </header>

            {/* page content */}
            <main
                className="gap-10 col-start-2 lg:col-start-4 col-end-12 sm:col-end-8 md:col-end-12 lg:col-end-10 grid grid-cols-8 md:grid-cols-12 lg:grid-cols-12"
            >
                {/* presentation */}
                <div className={'col-span-9 flex flex-col items-start gap-4'}>
                    <Button
                        className={'hidden sm:flex w-fit'}
                        variant={'link'}
                        onClick={navigateToHome}>
                        <ArrowLeft/> Voltar
                    </Button>

                    <h1 className={'text-xl'}>Piscina</h1>

                    <h5 className={'text-md md:text-sm'}>Transformamos seu espaço em um ambiente de lazer completo.
                        Projetamos e construímos piscinas sob medida, utilizando materiais de alta qualidade para
                        garantir durabilidade e beleza.</h5>
                </div>

                <div className={'col-span-full flex flex-col items-center gap-4'}>
                    <img src="../../public/assets/images/building.svg" alt=""/>
                    <h3 className={'text-center'}>Desculpe pelo transtorno, ainda estamos construindo essa parte do
                        site</h3>
                </div>
            </main>

            <footer className="col-start-2 lg:col-start-4 col-end-12 md:col-end-12 lg:col-end-10 border-t-2 mt-8">
                <span
                    className="text-sm">Copyright 2025 - WL construções - Developed by: Anderson Andrade</span>
            </footer>

            <img
                src="../../public/assets/icons/whatsapp.svg"
                alt="whatsapp to contact"
                className="fixed bottom-4 right-4 w-16 h-16 cursor-pointer"
            />
        </div>
    )
}