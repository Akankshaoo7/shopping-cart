import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SingleProduct from "../components/SingleProduct";
import Header from "../components/Header";
import { getProducts } from "../services/products";
function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const productsJSX = products.map((product) => (
    <div key={product.id} className="col-4 product-container">
      <Link to={"/product/" + product.slug}>
        <SingleProduct product={product} />
      </Link>
    </div>
  ));
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header
        title="SHOPPING"
        subtitle="Our site are available in the best quality products."
      />
      <div className="row wrapper">{productsJSX}</div>
    </>
  );
}
export default Home;
