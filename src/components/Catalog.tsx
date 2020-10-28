import React, { useEffect, useState } from "react";
import { IProduct } from "../store/modules/cart/types";
import api from '../services/api'
import CatalogItem from "./CatalogItem";

const Catalog: React.FC = () => {
  const [catalog,setCatalog] = useState<IProduct[]>([])

  useEffect(() => {
    async function getCatalog() {
      try {
        setCatalog((await api.get('/products')).data)
      } catch (error) {
        console.log(error)
      }
    }
    getCatalog()
  }, [])

  return (
    <main>
      <h1>Catalog</h1>
      {
        catalog.map(item => (
          <CatalogItem key={item.id} product={item}/>
        ))
      }
    </main>
  
  );
};

export default Catalog;
