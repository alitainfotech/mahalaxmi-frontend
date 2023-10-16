import React from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, permissionRoute, userRoutes } from "./routes/allRoutes";
import Authmiddleware from "./routes/middleware/authMiddleware";
import NonAuthLayout from "./components/NonAuthLayout";

// Import scss
import "./assets/scss/theme.scss";
import Layout from "./components/Layout";
import LocalstorageService from "./helper/localstorage-services";

function App() {
  const userPermision = LocalstorageService.getLoggedInUserDetails();
  return (
    <React.Fragment>
      <Routes>
        {authRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <NonAuthLayout>
                <Authmiddleware
                  component={route.component}
                  isAuthProtected={false}
                />
              </NonAuthLayout>
            }
            key={idx}
          />
        ))}

        {userRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <Layout>
                <Authmiddleware
                  path={route.path}
                  component={route.component}
                  isAuthProtected={true}
                />
              </Layout>
            }
            key={idx}
          />
        ))}

        {permissionRoute.map((route, idx) => (
          <React.Fragment key={idx}>
            {userPermision?.roles[0]?.roles &&
              userPermision?.roles[0]?.roles.length > 0 &&
              userPermision?.roles[0]?.roles.map((o, i) => (
                <React.Fragment key={i}>
                  {o.db === route.db && o.action.includes("view") && (
                    <Route
                      path={route.path}
                      element={
                        <Layout>
                          <Authmiddleware
                            path={route.path}
                            component={route.component}
                            isAuthProtected={true}
                          />
                        </Layout>
                      }
                      key={idx}
                    />
                  )}
                </React.Fragment>
              ))}
          </React.Fragment>
        ))}
      </Routes>
    </React.Fragment>
  );
}

export default App;
