import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import ProductForm from '../ProductForm';
import ProductList from '../ProductList';
import NoMatch from '../NoMatch'
import ProductView from '../ViewProduct';
import NavBar from '../../Components/NavBar';
import Alert from '../../Components/Alert';
import { PageContainer  } from './style'
import { BodyContainer } from '../../Utils/style'
import PrivateRoute from '../../PrivateRoute'
import PrivateRouteHome from '../../PrivateRouteHome'
import Login from '../Login';
import { GlobalContext } from '../../Context/GlobalContext';

// Component includes all the page routes
function PageRoutes() {

  const { isAuthenticated } = useContext(GlobalContext);

  return (
    <PageContainer>
      {isAuthenticated ? <NavBar /> : null}
      <BodyContainer id="body-container">
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <ProductList />
              </PrivateRoute>
            }
          />
          <Route
            path="/product"
            element={
              <PrivateRoute>
                <ProductForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PrivateRouteHome>
                <Login />
              </PrivateRouteHome>
            }
          />
          <Route
            path="/view_product/:productId"
            element={
              <PrivateRoute>
                <ProductView />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NoMatch />} />
       </Routes>
      </BodyContainer>
      <Alert />
    </PageContainer>
  )
}

export default PageRoutes