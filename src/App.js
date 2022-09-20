import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Welcome from './components/Welcome';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import UserInfo from './components/UserInfo';

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
            <Route path='/' element={<Welcome />} />
            <Route path='/info' element={<UserInfo />} />
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
