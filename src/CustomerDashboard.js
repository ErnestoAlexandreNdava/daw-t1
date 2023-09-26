import React from "react";

function CustomerDashboard({ menu, orders, onOrder, onCancel }) {
    return (
        <div>
            <h1>Painel do Cliente</h1>
            <h2>Menu do Restaurante</h2>
            <ul>
                {menu.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.description} - R${item.price}
                        {item.quantity > 0 && (
                            <button onClick={() => (orders.includes(item.id) ? onCancel(item.id) : onOrder(item.id))}>
                                {orders.includes(item.id) ? "Cancelar Pedido" : "Encomendar"}
                            </button>
                        )}
                        {item.quantity === 0 && <span>Item não disponível no momento</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CustomerDashboard;
