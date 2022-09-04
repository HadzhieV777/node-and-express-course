const express = require('express')
const app =express()

app.get('/', (req, res) => {
    // console.log('User hit the resource')
    res.status(200).send('Home Page')
})

app.get('/aout', (res, req) => {
    res.status(200).send('Home Page')
    res.send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Not found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})

// METHODS
// app.get
// app.post
// app.put
// app.all
// app.use
// app.listen