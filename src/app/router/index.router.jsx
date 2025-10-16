import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../../domain/home/pages/Home.page';
import NotFound from '../../domain/error/pages/Error404.page';
import { LoginPage } from '../../domain/auth/pages/auth.page';
import { PublicRouter } from './public.router';
import { ProtectedRouter } from './protecte.router';

export const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path= '/login' element={
                    <PublicRouter>
                        <LoginPage/>
                    </PublicRouter>
                } />

                <Route path='/' element={
                    <ProtectedRouter>
                        <Home/>
                    </ProtectedRouter>
                } />


                <Route path='*' element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}