import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';


const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/Home'));
const Faq = lazy(() => import('./pages/Faq'));

export default function App() {
  return (
    <main className="flex flex-col h-screen w-full justify-center items-center">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Navigate
                to="/home"
                replace
              />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
         <Route
              path="/faq"
                element={
                <Suspense fallback={<h1>Loading ...</h1>}>
                 <Faq />
                  </Suspense>
                  }
                />
      </Routes>
    </main>
  );
}
