import {createBrowserRouter} from "react-router-dom";
import {App} from "./App.tsx";
import {ImpermeabilizacaoPage} from "./pages/impermeabilizacao.page.tsx";
import {NotFound} from "./pages/notFound.page.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>
    },
    {
        path: '/impermeabilizacao',
        element: <ImpermeabilizacaoPage/>
    }
])