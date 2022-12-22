import express from "express";

const app = express();

app.use(express.json());

const livros = [
  {
    id: 1,
    titulo: "O Hobiit",
  },
  {
    id: 2,
    titulo: "Os vingadores",
  },
];

app.get("/", function (req, res) {
  res.status(200).send("Curso node");
});

app.get("/livros", function (req, res) {
  res.status(200).json(livros);
});

app.get("/livros/:id", function (req, res) {
  const index = buscarLivros(req.params.id);
  res.json(livros[index]);
});

app.post("/livros", function (req, res) {
  livros.push(req.body);
  res.status(201).json("Livros cadastrado com sucesso");
});

app.put("/livros/:id", function (req, res) {
  const index = buscarLivros(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.json(livros);
});

app.delete("/livros/:id", function (req, res) {
  const { id } = req.params;
  const index = buscarLivros(id);
  livros.splice(index, 1);
  res.send(`Livro ${id} deletado com sucesso`);
});

function buscarLivros(id) {
  return livros.findIndex((livro) => livro.id == id);
}
export default app;
