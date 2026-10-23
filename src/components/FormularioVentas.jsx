import React, { useState } from 'react';
import axios from 'axios';
import './FormularioVenta.css';
function FormularioVenta() {




const [formData, setFormData] = useState({
estudiante: '',
producto: '',
cantidad: '',
precio: '',
fecha: ''
});
const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};
const handleSubmit = (e) => {
e.preventDefault();
axios.post(`${import.meta.env.VITE_API_URL}/ventas`, formData).then(res => {
alert(res.data.message);
setFormData({ estudiante: '', producto: '', cantidad: '', precio:
'', fecha: '' });
})
.catch(err => console.error('Error al registrar venta:', err));
};
return (
  <div className="formulario-card">
    <h2>Registrar Nueva Venta</h2>

    <form onSubmit={handleSubmit}>

      <div className="campo">
        <label>Estudiante</label>
        <input
          type="text"
          name="estudiante"
          placeholder="Nombre del estudiante"
          value={formData.estudiante}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo">
        <label>Producto</label>
        <input
          type="text"
          name="producto"
          placeholder="Nombre del producto"
          value={formData.producto}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo">
        <label>Cantidad</label>
        <input
          type="number"
          name="cantidad"
          placeholder="Cantidad"
          value={formData.cantidad}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo">
        <label>Precio</label>
        <input
          type="number"
          name="precio"
          placeholder="0.00"
          value={formData.precio}
          onChange={handleChange}
          required
        />
      </div>

      <div className="campo fecha">
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">
        Registrar Venta
      </button>

    </form>
  </div>
);
}
export default FormularioVenta;