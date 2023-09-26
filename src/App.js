import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; // Importe "Routes" aqui
import LoginPage from "./LoginPage";
import CustomerDashboard from "./CustomerDashboard";
import AdminDashboard from "./AdminDashboard";

function App() {
  const [profile, setProfile] = useState(null);
  const [menu, setMenu] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleLogin = (userProfile) => {
    setProfile(userProfile);
  };

  const handleLogout = () => {
    setProfile(null);
  };

  const handleOrder = (itemId) => {
    if (orders.includes(itemId)) {
      setOrders(orders.filter((order) => order !== itemId));
    } else {
      setOrders([...orders, itemId]);
    }
  };

  const handleAddItem = (newItem) => {
    const newItemWithId = { id: Date.now(), ...newItem };
    setMenu([...menu, newItemWithId]);
  };

  const handleDeleteItem = (itemId) => {
    const updatedMenu = menu.filter((item) => item.id !== itemId);

    setMenu(updatedMenu);
  };

  return (
    <Router>
      <div>
        <button onClick={handleLogout}>Logout</button>
        <Routes> { }
          <Route path="/login" element={profile ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />} />
          <Route
            path="/"
            element={!profile ? <Navigate to="/login" /> : profile === "Cliente" ? <CustomerDashboard menu={menu} orders={orders} onOrder={handleOrder} /> : profile === "Admin" ? <AdminDashboard menu={menu} onAddItem={handleAddItem} onDeleteItem={handleDeleteItem} /> : null}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
