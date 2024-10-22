const express = require('express');
const app = express();
app.use(express.json());

let productos = [
  { id: 1, nombre: 'Camiseta', precio: 20 },
  { id: 2, nombre: 'Gorra', precio: 15 }
];

// GET: Obtener productos
app.get('/api/productos', (req, res) => {
  res.json(productos);
});

// POST: Crear un nuevo producto
app.post('/api/productos', (req, res) => {
  const nuevoProducto = req.body;
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// PUT: Actualizar un producto
app.put('/api/productos/:id', (req, res) => {
  const { id } = req.params;
  const index = productos.findIndex(p => p.id == id);
  productos[index] = req.body;
  res.json(productos[index]);
});

// DELETE: Eliminar un producto
app.delete('/api/productos/:id', (req, res) => {
  productos = productos.filter(p => p.id != req.params.id);
  res.status(204).send();
});

app.listen(3000, () => console.log('API corriendo en puerto 3000'));
