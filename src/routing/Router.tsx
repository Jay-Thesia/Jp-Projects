import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import RequiresUnAuth from '../pages/auth/guard/RequireUnAuth';
import RequiresAuth from '../pages/auth/guard/RequireAuth';
import SiteLoader from '../components/comman/loader/SiteLoader';
import Home from 'pages/home';
import CanonicalTag from 'components/shared/canonicalTag';

const NotFound = React.lazy(() => import('pages/not-found'));

// lazy loading

function CustomRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<SiteLoader />}>
            <>
              <CanonicalTag />
              <Home />
            </>
          </Suspense>
        }
      />
      {publicRoutes &&
        publicRoutes.length > 0 &&
        publicRoutes.map((route, idx) => {
          return route.component ? (
            <Route
              key={route.key}
              path={route.path}
              element={
                <RequiresUnAuth>
                  <Suspense fallback={<SiteLoader />}>
                    <>
                      <CanonicalTag />
                      {route.component}
                    </>
                  </Suspense>
                </RequiresUnAuth>
              }
            />
          ) : null;
        })}
      {privateRoutes?.length > 0 &&
        privateRoutes.map((route, idx: number) => {
          return route.component ? (
            <Route
              key={route.key}
              path={route.path}
              element={
                <RequiresAuth>
                  <Suspense fallback={<SiteLoader />}>
                    <>
                      <CanonicalTag />
                      {route.component}
                    </>
                  </Suspense>
                </RequiresAuth>
              }
            />
          ) : null;
        })}

      <Route
        path="*"
        element={
          <Suspense fallback={<SiteLoader />}>
            <>
              <CanonicalTag />
              <NotFound />
            </>
          </Suspense>
        }
      />
    </Routes>
  );
}

export default CustomRouter;
