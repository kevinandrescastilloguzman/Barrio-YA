import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../Home/index';
import Domiciliarios from '../Domiciliario/index';
import Tiendas from '../Tiendas/index';
import Login from '../Login/index';
import CreateAcount from '../CreateAcount/index';
import UsuarioHome from '../UsuarioHome/index';
import PrivateRoute from '../../PrivateRoute';
import './index.css';

const AppRouters = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/Domiciliarios', element: <Domiciliarios /> },
        { path: '/Tiendas', element: <Tiendas /> },
        { path: '/Login', element: <Login /> },
        { path: '/CreateAconut', element: <CreateAcount /> },
        { path: '/UsuarioHome', element: <PrivateRoute component={UsuarioHome} /> },
    ]);
    return routes;
}

const App = () => {
    return (
        <AppRouters />
    );
}

export default App;
