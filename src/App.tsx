import {Button} from "./components/ui/button.tsx";
import {ChartLine, DraftingCompass, Gem, Instagram} from "lucide-react";
import {JSX} from "react";
import {ImageContainer} from "./components/common/image-container.component.tsx";
import {Services, ServiceUrl} from "./core/interfaces/services.interface.ts";
import {useNavigate} from "react-router-dom";
import {Whatsapp} from "./components/common/whatsapp.tsx";
import {redirectToWhatsapp} from "./core/services/whatsapp.service.ts";

export function App() {
    const redirectToInstagram = (): void => {
        const url: string = `https://www.instagram.com/wlconstrucoes_etelhados?igsh=b2V1end0NXhxbzl3`;

        window.open(url, "_blank");
    }

    return (
        <div className="grid grid-cols-12 sm:grid-cols-8 md:grid-cols-12 font-outfit">
            {/* header content */}
            <header
                className="flex items-center justify-between col-start-2 lg:col-start-4 col-end-12 sm:col-end-8 md:col-end-12 lg:col-end-10 py-4 h-fit">
                <span className="text-nowrap font-semibold">Wl construções</span>
                <span
                    className="hidden sm:block whitespace-nowrap font-semibold cursor-pointer"
                    onClick={() => {
                        redirectToWhatsapp()
                    }}
                >Entre em contato conosco</span>
            </header>

            {/* page content */}
            <main
                className="gap-10 col-start-2 lg:col-start-4 col-end-12 sm:col-end-8 md:col-end-12 lg:col-end-10 grid grid-cols-8 md:grid-cols-12 lg:grid-cols-12">
                {/* logo image */}
                <div className="col-span-9 md:col-span-full flex justify-center">
                    <img src="/logo-with-name-construction.svg" alt="logo-wl-construction"/>
                </div>

                {/* presentation container */}
                <div className="col-span-9">
                    <h1 className="text-2xl md:text-1xl font-semibold">
                        WL: A escolha ideal para soluções completas, do início ao fim da sua obra
                    </h1>
                    <h6 className="text-md md:text-1xl">
                        Acompanhamento completo para sua obra, desde ferragens e elétrica até alvenaria, pisos e
                        telhados
                    </h6>
                </div>

                {/* Contact button */}
                <div className="col-span-9 md:col-span-full w-full flex justify-center">
                    <Button
                        onClick={() => redirectToWhatsapp()}
                    >
                        Entrar em contato
                    </Button>
                </div>

                {/* presentation text */}
                <div className="col-span-full flex justify-center">
                    <h5 className="text-left md:text-center text-1xl md:text-md font-medium">
                        Com 16 anos de experiência no mercado, já atendemos mais de 100 clientes com excelência
                    </h5>
                </div>

                {/* services */}
                <div className="col-span-9 flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold md:text-1xl">Nossos serviços</h3>

                    {/* list-services */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Service
                            name="Impermeabilização"
                            pathIcon="/icons/impermeabilizacao.svg"
                            pageUrl={Services.impermeabilizacao}
                        />
                        <Service
                            name="Elétrica"
                            pathIcon={'/icons/eletrica.svg'}
                            pageUrl={Services.eletrica}
                        />
                    </div>
                </div>

                {/* images-presentation */}
                <div className={'col-span-9 md:col-span-full flex justify-center items-center h-full'}>
                    <div className="grid justify-center grid-cols-2 gap-4">
                        <ImageContainer path={'/images/mainpage_1.jpeg'}/>
                        <ImageContainer path={'/images/mainpage_2.jpeg'}/>
                        <ImageContainer path={'/images/mainpage_3.jpeg'}/>
                        <ImageContainer path={'/images/mainpage_4.jpeg'}/>
                    </div>
                </div>

                {/* why use this solution */}
                <div className="col-span-9 flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold md:text-1xl">Por que optar pela WL Construções?</h3>

                    <div>
                        <h3 className="text-xl">Planejamento estratégico e execução eficiente</h3>
                        <span>Asseguramos prazos precisos e execução ágil, garantindo entregas rápidas e qualidade superior</span>
                    </div>

                    <div>
                        <h3 className="text-xl">Execução segura e tecnicamente precisa dos projetos</h3>
                        <span>Aplicamos rigor técnico em arquitetura e engenharia para assegurar segurança, precisão e conformidade em cada etapa.</span>
                    </div>
                </div>

                {/* highlights */}
                <div className={'col-span-9 md:col-span-full'}>
                    <div
                        className=" flex flex-col md:flex-row items-center justify-center gap-4">
                        <Highlight
                            icon={<Gem size={62}/>}
                            label="Expertise consolidada em obras de alto padrão."
                        />
                        <Highlight
                            icon={<DraftingCompass size={62}/>}
                            label="Estratégia eficiente para máxima otimização."
                        />
                        <Highlight
                            icon={<ChartLine size={62}/>}
                            label="Gestão eficiente para máxima economia de materiais."
                        />
                    </div>
                </div>

                {/* Contact button */}
                <div className="col-span-9 md:col-span-full flex justify-center">
                    <Button
                        onClick={() => redirectToWhatsapp()}
                    >
                        Entrar em contato
                    </Button>
                </div>

                {/* about us */}
                <div className="col-span-9 flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold md:text-1xl">Sobre nós</h2>

                    <h5 className="text-md lg:text-xl">
                        Há 16 anos, nossa empresa valoriza seu patrimônio com agilidade e
                        eficiência. Contamos com uma
                        equipe qualificada e comprometida, garantindo o melhor acabamento em cada serviço.
                        Nosso principal objetivo é atender com excelência, oferecendo soluções inovadoras e de qualidade
                        para atender às necessidades de nossos clientes e colaboradores.
                        Trabalhamos com responsabilidade, criatividade, compromisso e eficiência,
                        buscando aprimorar nosso atendimento a cada dia
                    </h5>
                </div>

                {/* contact us */}
                <div className="col-span-9 flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold md:text-1xl">Contatos</h2>

                    <div className="flex items-center gap-4">
                        {/* instagram */}
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={redirectToInstagram}
                        >
                            <Instagram/>
                            <span className="text-xl">Instagram</span>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="col-start-2 lg:col-start-4 col-end-12 md:col-end-12 lg:col-end-10 border-t-2 mt-8">
                <span className="text-sm">Copyright 2025 - WL construções - Developed by: Anderson Andrade</span>
            </footer>

            <Whatsapp/>
        </div>
    )
}

function Service(props: { name: string, pathIcon?: string, pageUrl: string }) {
    const navigate = useNavigate()

    const servicesUrls: ServiceUrl = {
        [Services.impermeabilizacao]: '/impermeabilizacao',
        [Services.telhados]: '/telhados',
        [Services.revestimento]: '/revestimento',
        [Services.epoxi]: '/epoxi',
        [Services.hidraulica]: '/hidraulica',
        [Services.eletrica]: '/eletrica',
        [Services.alvenaria]: '/alvenaria',
        [Services.ferragens]: '/ferragens',
        [Services.piscina]: '/piscina',
    }

    const navigateToPage = (service: Services): void => {
        navigate(servicesUrls[service]);
    }

    return (
        <div className="flex items-center gap-3 cursor-pointer hover:brightness-80"
             onClick={() => navigateToPage((props.pageUrl as Services))}>
            <img
                src={props?.pathIcon ?? ''}
                alt={props.name}
                className="w-[48px] h-[48px] md:w-[57px] md:h-[57px] "
            />
            <span className="text-1xl md:text-1xl">{props.name}</span>
        </div>
    )
}

function Highlight(props: { icon: JSX.Element, label: string }) {
    return (
        <div
            className="flex flex-col gap-3 justify-center items-center shadow-xl bg-neutral-700 text-[#B7B288] p-6 rounded-sm"
        >
            {props.icon}
            <span className="text-center">{props.label}</span>
        </div>
    )
}