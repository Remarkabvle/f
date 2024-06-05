import React, { useEffect, useState } from "react";
import { usePostProductMutation } from "../../context/api/productApi";
import "./Create.css";

const initialState = {
    title: "",
    price: "",
    url: "",
    category: "",
};

const Create = () => {
    const [formData, setFormData] = useState(initialState);

    const [createProduct, { data, isLoading, isError, isSuccess, error }] =
        usePostProductMutation();

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "price") {
            setFormData((prev) => ({ ...prev, [name]: +value }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setFormData(initialState);
        }
        if (isError) {
            alert(error.data);
        }
    }, [isSuccess, isError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(formData);
    };

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <h2 className="create-heading">Create</h2>
            {Object.keys(initialState).map((inp) => (
                <input
                    key={inp}
                    className="create-input"
                    type={inp === "price" ? "number" : "text"}
                    name={inp}
                    placeholder={inp}
                    value={formData[inp]}
                    onChange={handleChange}
                />
            ))}
            <button className="create-button" type="submit">Create</button>
        </form>
    );
};

export default Create;
