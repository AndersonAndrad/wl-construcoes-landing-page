import {createBrowserRouter} from "react-router-dom";
import {App} from "./App.tsx";
import {ImpermeabilizacaoPage} from "./pages/impermeabilizacao.page.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/impermeabilizacao',
        element: <ImpermeabilizacaoPage/>
    }
])