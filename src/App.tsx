import {Button} from "./components/ui/button.tsx";
import {ChartLine, DraftingCompass, Gem, Instagram} from "lucide-react";
import {JSX} from "react";

export function App() {
    return (
        <div className="grid grid-cols-12 sm:grid-cols-8 md:grid-cols-12 lg:grid-cols-12">
            {/* header content */}
            <header
                className="flex items-center justify-between col-start-2 col-end-12 sm:col-end-8 md:col-end-12 py-4 h-fit">
                <span className="text-nowrap font-semibold">Wl construções</span>
                <span className="hidden sm:block whitespace-nowrap font-semibold">Entre em contato conosco</span>
            </header>

            {/* page content */}
            <main
                className="gap-10 col-start-2 col-end-12 sm:col-end-8 md:col-end-12 lg:col-end-12 grid grid-cols-8 md:grid-cols-12 lg:grid-cols-12">
                {/* logo image */}
                <div className="col-span-full flex justify-center">
                    <img src="src/assets/logo-wl-construction.svg" alt="logo-wl-construction"/>
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
                <div className="col-span-full flex justify-center">
                    <Button>Entrar em contato</Button>
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
                <div
                    className="col-span-full flex flex-col md:flex-row items-center justify-center gap-4">
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

                {/* Contact button */}
                <div className="col-span-full flex justify-center">
                    <Button>Entrar em contato</Button>
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
                        <div className="flex items-center gap-2">
                            <Instagram/>
                            <span className="text-xl">Instagram</span>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="col-start-2 col-end-12 md:col-end-12 border-t-2 mt-8">
                <span className="text-sm">Copyright 2025 - WL construções - Developed by: Anderson Andrade</span>
            </footer>

            <img
                src="src/assets/icons/whatsapp.svg"
                alt="whatsapp to contact"
                className="fixed bottom-4 right-4 w-16 h-16 cursor-pointer"
            />
        </div>
    )
}

function Service(props: { name: string, pathIcon?: string }) {
    return (
        <div className="flex items-center gap-3 cursor-pointer hover:brightness-80">
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