import React, { useEffect, useContext} from 'react'
import { ProductFormContainer, PageTitle, ProductContainer, ButtonContainer, TableWrapper ,ResponsiveTable, TableRow ,TableHeader, TableData } from './style';
import { AppButton, AppFormLabel } from '../../Utils/style';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

// Component is used to view all Product details
function ProductView() {

  const { productId } = useParams();
  const { getSingleProductDetails, selectedProduct, deleteProduct } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(productId){
      getSingleProductDetails(productId)
    }
    window.scrollTo(0, 0);
  }, []) 

  const handleDeleteClick = () => {
    deleteProduct(productId, navigate)
  }

  console.log('selectedProduct?.info :>> ', selectedProduct);
  return (
    <>
      {Object.keys(selectedProduct).length > 0 ? 
      <>
      <PageTitle>Image Details</PageTitle>  
      <ProductContainer>
        <ProductFormContainer>
            <img style={{width: '200px' , height: '200px', margin: '0 auto'}} src={`https://cs-meridian-01.cmpt.sfu.ca/uploads/${selectedProduct?.name}`} alt={selectedProduct?.name}/>
            {/* <AppFormLabel>Image Name: {selectedProduct?.name}</AppFormLabel>
            <AppFormLabel>Image Id: {selectedProduct?.id}</AppFormLabel> */}
            {/* <AppFormLabel>Image Id: {JSON.stringify(selectedProduct?.info)}</AppFormLabel> */}
        <TableWrapper>            
          <ResponsiveTable>
            <thead>
              <TableRow>
                <TableHeader>Property Name</TableHeader>
                <TableHeader>Value</TableHeader>
              </TableRow>
            </thead>
            <tbody>
                <TableRow key={1000}>
                    <TableData>Image Name</TableData>
                    <TableData>{selectedProduct?.name}</TableData>
                </TableRow>  
                {Object.keys(selectedProduct?.info).map((key, index) => {
                  return <TableRow key={index}>
                    <TableData>{key}</TableData>
                    {(typeof selectedProduct?.info[key].description === "string") ? <TableData>{selectedProduct?.info[key].description}</TableData> : null}
                  </TableRow>  
                })}
            </tbody>
          </ResponsiveTable>
        </TableWrapper>
        </ProductFormContainer>
        {/* <ButtonContainer>
          <AppButton size="14px" onClick={handleDeleteClick}>Delete</AppButton>
        </ButtonContainer> */}
      </ProductContainer>
      </>: null}
    </>
  )
}

export default ProductView
