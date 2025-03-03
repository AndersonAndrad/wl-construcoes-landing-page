import {createBrowserRouter} from "react-router-dom";
import {App} from "./App.tsx";
import {ImpermeabilizacaoPage} from "./pages/impermeabilizacao.page.tsx";
import {NotFound} from "./pages/notFound.page.tsx";
import {EletricaPage} from "./pages/eletrica.page.tsx";
import {TelhadosPage} from "./pages/telhados.page.tsx";
import {Services} from "./core/interfaces/services.interface.ts";
import {RevestimentoPage} from "./pages/revestimento.page.tsx";
import {JSX} from "react";
import {EpoxiPage} from "./pages/epoxi.page.tsx";
import {HidraulicaPage} from "./pages/hidraulica.page.tsx";
import {AlvenariaPage} from "./pages/alvenaria.page.tsx";
import {FerragensPage} from "./pages/ferragens.page.tsx";
import {PiscinaPage} from "./pages/piscina.page.tsx";

const serviceComponents: Record<Services, JSX.Element> = {
    [Services.impermeabilizacao]: <ImpermeabilizacaoPage/>,
    [Services.eletrica]: <EletricaPage/>,
    [Services.telhados]: <TelhadosPage/>,
    [Services.revestimento]: <RevestimentoPage/>,
    [Services.epoxi]: <EpoxiPage/>,
    [Services.hidraulica]: <HidraulicaPage/>,
    [Services.alvenaria]: <AlvenariaPage/>,
    [Services.ferragens]: <FerragensPage/>,
    [Services.piscina]: <PiscinaPage/>,
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>
    },
    ...Object.entries(serviceComponents).map(([service, component]) => ({
        path: `/${service}`,
        element: component
    }))
])