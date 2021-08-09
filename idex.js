const express = require('express')
const { urlencoded } = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.render('index')
})

app.post('/', (request, response) => {
    const { city } = request.body

    console.log(city);
    response.render('index')
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...');
})
