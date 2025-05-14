const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

const DB_PATH = path.join(__dirname, 'data', 'db.json');

// Função auxiliar para ler os dados
function readData() {
    const data = fs.readFileSync(DB_PATH);
    return JSON.parse(data);
}

// Função auxiliar para salvar os dados
function saveData(data) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// ROTA: Listar todos
app.get('/items', (req, res) => {
    const items = readData();
    res.json(items);
});

// ROTA: Listar por ID
app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const datas = readData();
    const filteredData = datas.filter(item => item.id === id);

    if (filteredData.length === 0) {
        res.status(404).json({
            "Error": "Objeto não encontrado!"
        });
    }

    res.json(filteredData);
});

// ROTA: Criar novo
app.post('/items', (req, res) => {
    const items = readData();
    const newItem = {
        // Improviso para gerar o ID através dos milisegundos.
        id: Date.now(),
        nome: req.body.nome
    };
    items.push(newItem);
    saveData(items);
    res.status(201).json(newItem);
});

// ROTA: Atualizar por ID
app.put('/items/:id', (req, res) => {
    const items = readData();
    const id = parseInt(req.params.id);
    const index = items.findIndex(item => item.id === id);

    if (index === -1) return res.status(404).json({ erro: 'Item não encontrado' });

    items[index].nome = req.body.nome;
    saveData(items);
    res.json(items[index]);
});

// ROTA: Deletar por ID
app.delete('/items/:id', (req, res) => {
    const items = readData();
    const id = parseInt(req.params.id);
    const updatedItems = items.filter(item => item.id !== id);

    if (items.length === updatedItems.length) {
        return res.status(404).json({ erro: 'Item não encontrado' });
    }

    saveData(updatedItems);

    // PS: por questão de performance não vou retornar o objeto removido.
    res.status(200).json({
        "Message": "Item removido"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/items`);
});
