import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'
import {publicRoutes, privateRoutes} from './Routes'

const AppRouter = () => {

    const auth = false;

    return (
        auth === true ?
            <BrowserRouter>
                <Routes>
                    {privateRoutes.map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               element={route.element}
                               key={route.path}
                        />
                    )}
                    <Route path="*" element={<Navigate to ="/feed" />}/>
                </Routes>
            </BrowserRouter>
            :
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               element={route.element}
                               key={route.path}
                        />
                    )}
                    <Route path="*" element={<Navigate to ="/login" />}/>
                </Routes>
            </BrowserRouter>
    );
};

export default AppRouter;