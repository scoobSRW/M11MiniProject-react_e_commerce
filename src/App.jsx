import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importing components
import CreateCustomerForm from './components/Customers/CreateCustomerForm';
import CustomerDetails from './components/Customers/CustomerDetails';
import UpdateCustomerForm from './components/Customers/UpdateCustomerForm';
import CustomerList from './components/Customers/CustomerList';
import CreateProductForm from './components/Products/CreateProductForm';
import ProductDetails from './components/Products/ProductDetails';
import UpdateProductForm from './components/Products/UpdateProductForm';
import ProductList from './components/Products/ProductList';
import ProductStockManager from './components/Products/ProductStockManager';
import CreateOrderForm from './components/Orders/CreateOrderForm';
import OrderHistory from './components/Orders/OrderHistory';
import OrderDetails from './components/Orders/OrderDetails';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/orders">Orders</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Customers */}
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/customers/create" element={<CreateCustomerForm />} />
          <Route path="/customers/:id" element={<CustomerDetails />} />
          <Route path="/customers/:id/update" element={<UpdateCustomerForm />} />

          {/* Products */}
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/create" element={<CreateProductForm />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/:id/update" element={<UpdateProductForm />} />
          <Route path="/products/:id/manage-stock" element={<ProductStockManager />} />

          {/* Orders */}
          <Route path="/orders" element={<OrderHistory />} />
          <Route path="/orders/create" element={<CreateOrderForm />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
