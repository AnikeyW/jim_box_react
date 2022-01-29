import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Shop from '../pages/Shop';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
   const isAuth = true
   return (
      <Routes>
         {isAuth && authRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={<Component />} />
         )}
         {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={<Component />} />
         )}
         <Route path="*" element={<Shop />} />
      </Routes>
   );
};

export default AppRouter;