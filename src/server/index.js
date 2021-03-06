const { getRoles } = require('@testing-library/dom');
const { response } = require('express');
const cors = require('cors');

const express = require('express');
const app = express();

app.use(cors());

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
]

app.use(express.json());

const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
}

app.post('/api/notes',(req,res) => {
    const body = req.body;
    
    if(!body.content) {
        return res.status(400).json({
            error:'content missing'
        })
    }
    const note = {
        content: body.content,
        importtant: body.important || false,
        date: new Date(),
        id: generateId()
    }
    notes = notes.concat(note);
    res.json(notes);
})


app.get('/',(req,res) => {
    console.log(req)
    res.json(notes);
})

app.get('/api/notes/:id', (req,res) => {
    console.log(req)
    const id = Number(req.params.id);
    console.log(id)
    const note = notes.find(n => n.id===id);
    
    if(note) {
        res.json(note);
    } else {
        res.status(404).end();
    }
})

// app.delete('/api/notes/:id', (request, response) => {
//     const id = Number(request.params.id)
//     console.log(id)
//     notes = notes.filter(note => note.id !== id)
//     console.log(notes)
  
//     response.status(204).end()
// })

const PORT = 3001;
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
})