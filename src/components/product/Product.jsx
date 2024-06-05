import React, { useEffect } from "react";
import {
    useDeleteProductMutation,
    useGetProductsQuery,
} from "../../context/api/productApi";
import "./Product.css"; 

const Product = () => {
    let { data, isLoading, isError, isSuccess } = useGetProductsQuery();
    const [deleteProduct, {data: deleteData, error: deleteError, isLoading: deletedIsLoading}] = useDeleteProductMutation();

    useEffect(() => {
        if (isError) {
            alert("Error");
        }
    }, [isError]);

    return (
        <div className="product-container">
            <h2 className="product-heading">Product</h2>
            {isLoading ? <h2>Loading...</h2> : null}
            <div className="product-wrapper">
                {data?.map((el) => (
                    <div key={el.id} className="product-item">
                        <img src={el.url} width={200} alt={"Please enter the true URL."} className="product-image" />
                        <p>{el.title}</p>
                        <button disabled={deletedIsLoading} onClick={() => deleteProduct(el.id)} className="delete-button">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
