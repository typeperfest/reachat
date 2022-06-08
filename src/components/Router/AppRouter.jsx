import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'

const AppRouter = () => {

    const auth = true

    return (
        auth === true ?
            <BrowserRouter>
                <Routes>
                </Routes>
            </BrowserRouter>
            :
            <BrowserRouter>
                <Routes>
                </Routes>
            </BrowserRouter>
    );
};

export default AppRouter;