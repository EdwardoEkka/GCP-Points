import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import RedirectIfAuthenticated from "./components/recdirectIfAuthenticated";
import { HomePage } from "./pages/home/home";
import { LoginPage } from "./pages/login/login";
import ProfileList from "./pages/gdg/Profile";
import Hooks from "./pages/hooks/hooks";
import Test from "./pages/test/test";
import "./App.css"

function App() {

  return (
    <div>
      <Router>
        <Routes>
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            {/* Layout for protected routes */}
            <Route
              element={
                <>
                  {/* <Header /> */}
                  <Outlet />
                </>
              }
            >
              {/* Home page inside protected route */}
              <Route path="/" element={<HomePage />} />
              <Route path="/test" element={<Test />} />
              <Route path="/hooks" element={<Hooks />} />
              <Route path="/list" element={<ProfileList />} />
            </Route>
          </Route>

          {/* Login route */}
          <Route
            path="/login"
            element={
              <RedirectIfAuthenticated>
                <LoginPage />
              </RedirectIfAuthenticated>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
