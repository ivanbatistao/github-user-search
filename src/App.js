import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <>
                  <NavBar isUserLoggedIn={true} />
                  <Outlet />
                </>
              </ProtectedRoute>
            }
          >
            <Route path='/' element={<Home />} />
            <Route path='/info' element={<div>User Info</div>} />
            <Route path='/repos' element={<div>Repos</div>} />
          </Route>

          <Route
            path='/login'
            element={
              <>
                <NavBar isUserLoggedIn={false} />
                <Login />
              </>
            }
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
