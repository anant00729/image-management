import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Header, StyledLink } from './style'
import { AppButton } from '../../Utils/style'
import Logo from '../../Images/logo.png'
import { GlobalContext } from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const { signOutUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser(navigate);
  }
  return (
    <Header>
      <StyledLink to="/">
        <img style={{height: '40px'}} src={Logo}/>
      </StyledLink>
      <div>
        {!currentPath.includes('product') && 
        <StyledLink to="/product">
          <AppButton>
            Add Image
          </AppButton>
        </StyledLink>}
        <AppButton style={{marginLeft: "10px"}} onClick={handleLogout}>
          Logout
        </AppButton>
      </div>
    </Header>
  );
};

export default NavBar;