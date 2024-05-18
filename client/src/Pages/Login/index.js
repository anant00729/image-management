import React, {useContext} from 'react'
import { ProductFormContainer, ProductFormWrapper } from './style'
import { useForm } from 'react-hook-form';
import { AppFormLabel, AppInput, AppButton, AppSelect, ErrorLabel, ErrorBox, AppTextArea } from '../../Utils/style';
import Logo from '../../Images/logo.png'
import { GlobalContext } from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onChange', 
        defaultValues: {}
      });

    const { signInUser, isAuthenticated } = useContext(GlobalContext);
    const navigate = useNavigate();

      const onSubmit = (data) => {
        console.log('data :>> ', data);
        if(data) {
            signInUser(data,navigate)
        }
      };       


  return (
    <ProductFormContainer>
        <img style={{margin: 'auto 0', width: '400px', marginLeft: '90px', alignSelf: 'center'}} src={Logo}/>
        <h2 style={{ alignSelf: 'center'}}>Image meta data explorer</h2>    
        <ProductFormWrapper onSubmit={handleSubmit(onSubmit)}>
          <AppFormLabel>Username</AppFormLabel>
          <AppInput
            type="text"
            {...register('username', { required: true })}
            isFromForm
            isError={errors?.username}
          />
          {errors?.username && (
            <ErrorBox>
              <ErrorLabel>Please enter username</ErrorLabel>
            </ErrorBox>
          )}
          <AppFormLabel>Password</AppFormLabel>
          <AppInput
            type="password"
            {...register('password', { required: true })}
            isFromForm
            isError={errors?.password}
          />
          {errors?.password && (
            <ErrorBox>
              <ErrorLabel>Please enter password</ErrorLabel>
            </ErrorBox>
          )}
          <AppButton 
            isFromForm 
            type="submit" 
            disabled={!isValid}>
            Sign In
          </AppButton>
        </ProductFormWrapper>
    </ProductFormContainer>
  )
}

export default Login
