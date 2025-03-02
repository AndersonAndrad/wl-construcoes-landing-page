import {Button} from "./components/ui/button.tsx";
import {ChartLine, DraftingCompass, Gem, Instagram} from "lucide-react";
import {JSX} from "react";

export function App() {
    return (
        <div className="grid grid-cols-12">
            {/* header content */}
            <header className="flex items-center justify-between col-start-2 col-end-12  py-4 h-fit">
                <span className="text-nowrap font-semibold">Wl construções</span>
                <span className="ext-nowrap font-semibold">Entre em contato conosco</span>
            </header>

            {/* page content */}
            <main className="col-start-2 col-end-12 grid grid-cols-12 gap-10">
                {/* logo image */}
                <div className="col-span-full flex justify-center">
                    <img src="src/assets/logo-wl-construction.svg" alt="logo-wl-construction"/>
                </div>

                {/* presentation container */}
                <div className="col-span-9">
                    <h1 className="text-5xl">WL: A escolha ideal para soluções completas, do início ao fim da sua
                        obra</h1>
                    <h6 className="text-xl">Acompanhamento completo para sua obra, desde ferragens e elétrica até
                        alvenaria, pisos e
                        telhados</h6>
                </div>

                {/* Contact button */}
                <div className="col-span-full flex justify-center">
                    <Button>Entrar em contato</Button>
                </div>

                {/* presentation text */}
                <div className="col-span-full flex justify-center">
                    <h5 className="text-2xl font-medium">Com 16 anos de experiência no mercado, já atendemos mais de 100
                        clientes
                        com excelência</h5>
                </div>

                {/* services */}
                <div className="col-span-9 flex flex-col gap-4">
                    <h3 className="text-4xl ">Nossos serviços</h3>

                    {/* list-services */}
                    <div className="grid grid-cols-2 gap-4">
                        <Service name="Impermeabilização" pathIcon="src/assets/icons/impermeabilizacao.svg"/>
                        <Service name="Elétrica" pathIcon={'src/assets/icons/eletrica.svg'}/>
                        <Service name="Telhados" pathIcon={'src/assets/icons/telhados.svg'}/>
                        <Service name="Alvenaria" pathIcon={'src/assets/icons/alvenaria.svg'}/>
                        <Service name="Revestimento" pathIcon={'src/assets/icons/revestimento.svg'}/>
                        <Service name="Ferragens" pathIcon={'src/assets/icons/ferragens.svg'}/>
                        <Service name="Epóxi" pathIcon={'src/assets/icons/epoxi.svg'}/>
                        <Service name="Piscinas" pathIcon={'src/assets/icons/piscina.svg'}/>
                        <Service name="Hidráulica" pathIcon={'src/assets/icons/hidraulica.svg'}/>
                    </div>
                </div>

                {/* images-presentation */}
                <div>
                    <span>images</span>
                </div>

                {/* why use this solution */}
                <div className="col-span-9 flex flex-col gap-4">
                    <h3 className="text-4xl">Por que optar pela WL Construções?</h3>

                    <div className="flex flex-col gap-3 text-2xl">
                        <h3 className="font-semibold">Planejamento estratégico e execução eficiente</h3>
                        <span>Asseguramos prazos precisos e execução ágil, garantindo entregas rápidas e qualidade superior</span>
                    </div>

                    <div className="flex flex-col gap-3 text-2xl">
                        <h3 className="font-semibold">Execução segura e tecnicamente precisa dos projetos</h3>
                        <span>Aplicamos rigor técnico em arquitetura e engenharia para assegurar segurança, precisão e conformidade em cada etapa.</span>
                    </div>
                </div>

                {/* highlights */}
                <div className="col-span-full items-center justify-center flex gap-4">
                    <Highlight icon={<Gem size={62}/>} label="Expertise consolidada em obras de alto padrão."/>
                    <Highlight icon={<DraftingCompass size={62}/>}
                               label="Estratégia eficiente para máxima otimização."/>
                    <Highlight icon={<ChartLine size={62}/>}
                               label="Gestão eficiente para máxima economia de materiais."/>
                </div>

                {/* Contact button */}
                <div className="col-span-full flex justify-center">
                    <Button>Entrar em contato</Button>
                </div>

                {/* about us */}
                <div className="col-span-9 flex flex-col gap-4">
                    <h2 className="text-4xl">Sobre nós</h2>

                    <h5 className="text-xl">Há 16 anos, nossa empresa valoriza seu patrimônio com agilidade e
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
                    <h2 className="text-4xl">Contatos</h2>

                    <div className="flex items-center gap-4">
                        {/* instagram */}
                        <div className="flex items-center gap-2">
                            <Instagram/>
                            <span className="text-xl">Instagram</span>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="col-start-2 col-span-full">
                <span className="text-sm">Copyright 2025 - WL construções - Developed by: Anderson Andrade</span>
            </footer>
        </div>
    )
}

function Service(props: { name: string, pathIcon?: string }) {
    return (
        <div className="flex items-center gap-3 cursor-pointer hover:brightness-80">
            <img src={props?.pathIcon ?? ''} alt={props.name}/>
            <span className="text-2xl">{props.name}</span>
        </div>
    )
}

function Highlight(props: { icon: JSX.Element, label: string }) {
    return (
        <div
            className="flex flex-col gap-3 justify-center items-center shadow-xl bg-neutral-700 text-[#B7B288] p-6 rounded-sm ">
            {props.icon}
            <span className="text-center">{props.label}</span>
        </div>
    )
}