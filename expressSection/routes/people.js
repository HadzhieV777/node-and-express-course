const express = require("express");
const router = express.Router();


app.get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
  });
  
  app.post("/api/people", (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: "Please provide name value" });
    }
    res.status(201).json({ success: true, person: name });
  });
  
  app.put("/api/people/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const person = people.find((person) => person.id === Number(id));
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `There is no person with id ${id}.` });
    }
  
    const editedPerson = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ success: true, data: editedPerson });
  });
  
  app.delete("/api/people/:id", (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
  
    if (!person) {
      return res.status(404).json({
        success: false,
        msg: `There is no person with id ${req.params.id}.`,
      });
    }
  
    const editedPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    );
    return res.status(200).json({ success: true, data: editedPeople });
  });
  