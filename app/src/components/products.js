
import { render } from '@testing-library/react';
import React from 'react'


const Products = ({ products }) => {
    render();
    return (
    <div>
        <center><h1>Product List</h1></center>
        {products.map((product) => (
        < button onClick={() => this.getModal(product.id)}>
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{product.price}</h6>
                <p class="card-text">{product.description}</p>
                </div>
            </div>
            </button>
        ))}
    </div>
    )
};

export default Products