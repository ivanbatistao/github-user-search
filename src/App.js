import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
                  <NavBar isUserInfoPresent={true} />
                  <Home />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path='/login'
            element={
              <>
                <NavBar isUserInfoPresent={false} />
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
