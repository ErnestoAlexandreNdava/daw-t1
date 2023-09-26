import React, { useState } from "react";

function AdminDashboard({ menu, onAddItem, onDeleteItem }) {
    const [newItem, setNewItem] = useState({
        name: "",
        description: "",
        price: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewItem({
            ...newItem,
            [name]: value,
        });
    };

    const handleAddNewItem = () => {
        // Verifique se todos os campos estão preenchidos
        if (newItem.name && newItem.description && newItem.price) {
            // Chame a função onAddItem para adicionar o novo item ao menu
            onAddItem(newItem);

            // Limpe o formulário após adicionar o item
            setNewItem({
                name: "",
                description: "",
                price: "",
            });
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    };

    return (
        <div>
            <h1>Painel de Administrador</h1>
            <h2>Menu do Restaurante</h2>
            <ul>
                {menu.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.description} - MTS${item.price}
                        <button onClick={() => onDeleteItem(item.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
            <h2>Adicionar Novo Item</h2>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome do item"
                    value={newItem.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Descrição do item"
                    value={newItem.description}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Preço do item"
                    value={newItem.price}
                    onChange={handleInputChange}
                />
                <button type="button" onClick={handleAddNewItem}>
                    Adicionar Item
                </button>
            </form>
        </div>
    );
}

export default AdminDashboard;
