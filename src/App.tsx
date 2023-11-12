import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import EventDetails from './pages/Dashboard/pages/EventDetails.tsx';
import CreateEvents from './pages/Dashboard/components/CreateEvent/index.tsx';
import CastVote from './pages/Dashboard/components/CastVote/index.tsx';
import Scoreboard from './pages/Dashboard/components/Scoreboard.tsx/index.tsx';

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
          path="/dashboard/events/eventdetails/:id/:judgeId"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <EventDetails />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/events/addevent/"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <CreateEvents />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/events/castvote/:id/:judgeId/:squadId"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <CastVote />
            </Suspense>
          }
        />
        <Route
          path="/dashboard/events/scoreboard/:id"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <Scoreboard />
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
