import React, { useContext } from 'react'
import { TableData, TableRow } from './style'
import { AppButton } from '../../Utils/style'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalContext'


// Component is used to show the Product row of product list table 
function ProductItem({ product }) {

  const navigate = useNavigate();
  const { deleteProduct } = useContext(GlobalContext);

  const handleEditClick = (id) => {
    navigate(`/product/${id}`);
  }

  const handleViewClick = (id) => {
    navigate(`/view_product/${id}`);
  }

  const handleDeleteClick = (id) => {
    deleteProduct(id, navigate)
  }

  return (
    <TableRow>
      <TableData>{product?.id}</TableData>
      <TableData>{product?.name}</TableData>
      
      <TableData>{product?.info?.Make?.description}</TableData>
      <TableData>{`${product?.info?.['Image Width']?.description},${product?.info?.['Image Height']?.description}`}</TableData>
      <TableData>
        <img style={{width: '100px' , height: '100px'}} src={`http://localhost:5001/uploads/${product?.name}`} alt={product?.name}/>
      </TableData>
      {/* <TableData>
        <AppButton size="14px" onClick={() => handleDeleteClick(product?.id)}>
          Delete
        </AppButton>
      </TableData> */}
      <TableData>
        <AppButton size="14px" onClick={() => handleViewClick(product?.id)}>
          View
        </AppButton>
      </TableData>
    </TableRow>
  )
}

export default ProductItem