import {ArrowLeft} from "lucide-react";
import {ImageContainer} from "../components/common/image-container.component.tsx";
import {Button} from "../components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {Whatsapp} from "../components/common/whatsapp.tsx";
import {redirectToWhatsapp} from "../core/services/whatsapp.service.ts";

export function ImpermeabilizacaoPage() {
    const whatsappMessage: string = 'Olá gostaria de fazer um orçamento de Impermeabilização';

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
                <span
                    className="hidden sm:block whitespace-nowrap font-semibold cursor-pointer"
                    onClick={() => redirectToWhatsapp({message: whatsappMessage})}
                >
                    Entre em contato conosco</span>
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

                    <h1 className={'text-xl'}>Impermeabilização</h1>

                    <h5 className={'text-md md:text-sm'}>Proteção total contra infiltrações e umidade. Nossos serviços
                        de
                        impermeabilização garantem
                        maior vida útil para sua construção, prevenindo danos e oferecendo mais segurança.</h5>
                </div>

                <ul className={'col-span-9 md:col-span-full flex flex-col gap-16 justify-start md:justify-center items-center h-full'}>
                    {/* primeira */}
                    <li className={'flex flex-col gap-3'}>
                        <h3 className={'text-xl'}>Manta</h3>
                        <div className="grid justify-center grid-cols-2 gap-4">
                            <ImageContainer path={'src/assets/images/impermea_primeira_1.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_primeira_2.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_primeira_3.jpeg'}/>
                        </div>
                    </li>

                    {/* segunda */}
                    <li className={'flex flex-col gap-3'}>
                        <h3 className={'text-xl'}>Manta líquida</h3>
                        <div className="grid justify-center grid-cols-2 gap-4">
                            <ImageContainer path={'src/assets/images/impermeab_segundo_1.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_segunda_2.jpeg'}/>
                        </div>
                    </li>

                    {/* terceira */}
                    <li className={'flex flex-col gap-3'}>
                        <h3 className={'text-xl'}>Manta aluminizada</h3>
                        <div className="grid justify-center grid-cols-2 gap-4">
                            <ImageContainer path={'src/assets/images/impermeb_terceira_1.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_terceira_3.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_quartar_1.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_quarta_2.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_quarta_3.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_sete_1.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_sete_2.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_sete_3.jpeg'}/>
                        </div>
                    </li>

                    {/* quinta */}
                    <li className={'flex flex-col gap-3'}>
                        <h3 className={'text-xl'}>Manta bidim</h3>
                        <div className="grid justify-center grid-cols-2 gap-4">
                            <ImageContainer path={'src/assets/images/impermeb_quinta_1.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_quinta_2.jpeg'}/>
                        </div>
                    </li>

                    {/* sexta */}
                    <li className={'flex flex-col gap-3'}>
                        <h3 className={'text-xl'}>Manta adesiva</h3>
                        <div className="grid justify-center grid-cols-2 gap-4">
                            <ImageContainer path={'src/assets/images/impermeb_sexta_1.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_sexta_2.jpeg'}/>
                            <ImageContainer path={'src/assets/images/impermeb_sexta_3.jpeg'}/>
                        </div>
                    </li>
                </ul>
            </main>

            <footer className="col-start-2 lg:col-start-4 col-end-12 md:col-end-12 lg:col-end-10 border-t-2 mt-8">
                <span className="text-sm">Copyright 2025 - WL construções - Developed by: Anderson Andrade</span>
            </footer>

            <Whatsapp message={whatsappMessage}/>
        </div>
    )
}