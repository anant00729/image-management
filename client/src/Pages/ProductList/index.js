import React, { useEffect, useContext, useState } from 'react'
import ProductItem from '../../Components/ProductItem'
import { ProductNotFound, ProductNotFoundImg, TableWrapper ,ResponsiveTable, TableRow ,TableHeader} from './style'
import Empty from '../../Images/empty.png'
import { AppFormLabel, PageLabel } from '../../Utils/style'
import { GlobalContext } from "../../Context/GlobalContext";

// Coponents is used to show ListView of products
function ProductList() {
  const { getAllProducts, productList } = useContext(GlobalContext);

  // get all the products on page render
  useEffect(() => {
    getAllProducts()
    window.scrollTo(0, 0);
  }, [])
  

  return (
    <>
      <PageLabel>Image List</PageLabel>
      {productList.length > 0 ? 
      <TableWrapper>
        <ResponsiveTable>
          <thead>
            <TableRow>
              <TableHeader>Image ID</TableHeader>
              <TableHeader>Image Name</TableHeader>
              <TableHeader>Device</TableHeader>
              <TableHeader>Size</TableHeader>
              <TableHeader>Preview</TableHeader>
              {/* <TableHeader>Delete</TableHeader> */}
              <TableHeader>View</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {productList?.map((product, index) => <ProductItem key={index} product={product}/>)}
          </tbody>
        </ResponsiveTable>
      </TableWrapper>
      : 
      <ProductNotFound>
          <ProductNotFoundImg src={Empty}/>
          <AppFormLabel>No image found. To add a image, please click on the 'Add Image' button.</AppFormLabel>
      </ProductNotFound>
      } 
    </>

  )
}

export default ProductList