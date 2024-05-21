import express from 'express';
const app = express()
app.use(express.json())

import { getAllnotes, getNote, createNote, createTable } from './index.js';


//!get all employees
app.get("/employees", async (req, res) => {
    const notes = await getAllnotes();
    res.send(notes)
})

//!get specific employee
app.get("/employees/:id", async (req, res) => {
    const id = req.params.id
    const note = await getNote(id);
    res.send(note)
})
//!insert the value
app.post("/employees", async (req, res) => {
    const { period, day, section } = req.body;
    const note = await createNote(period, day, section);
    res.status(210).send(note)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, () => {
    console.log("server is running in http://localhost:3000");
})