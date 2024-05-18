import React, {useContext, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { ProductFormContainer, ProductFormWrapper, PageTitle } from './style';
import { AppFormLabel, AppInput, AppButton, AppSelect, ErrorLabel, ErrorBox, AppTextArea } from '../../Utils/style';
import ImageUploader from '../../Components/ImageUploader';
import { GlobalContext } from '../../Context/GlobalContext';
import { useNavigate, useParams } from 'react-router-dom';

// Component is used to Add or Update the product
function ProductForm() {
  
  const navigate = useNavigate();
  const { productId } = useParams();

  const { getSingleProductDetails, updateProduct, uploadImage } = useContext(GlobalContext);

  

  const [receivedFile, setReceivedFile] = useState(null);
  const [receivedImageInfo, setReceivedImageInfo] = useState(null);

  // get the product details for the Edit Product Page
  useEffect(() => {
    if(productId){
      getSingleProductDetails(productId)
    }
    window.scrollTo(0, 0);
  }, []) 

  const onSubmit = (e) => {
    e.preventDefault();
    // checks if the form is for Add product or 
    // edit product and based on that It calls 
    // seperate APIs ie. addProduct or updateProduct
    uploadImage(receivedFile, receivedImageInfo, navigate)
  };

  const handleImageInfoReceived = (file, imageInfo) => {
     // Update state with received file and imageInfo
     setReceivedFile(file);
     setReceivedImageInfo(imageInfo);
  };

  return (
    <ProductFormContainer>
        <PageTitle>Select a File to Upload</PageTitle>  
        <ProductFormWrapper onSubmit={onSubmit}>
          <ImageUploader 
            imageFile={receivedFile} 
            info={receivedImageInfo}
            onImageInfoReceived={handleImageInfoReceived}
          />
          <AppButton 
            isFromForm 
            type="submit" 
            disabled={receivedFile == null}>
            Upload
          </AppButton>
      </ProductFormWrapper>
    </ProductFormContainer>
  );
}

export default ProductForm;
