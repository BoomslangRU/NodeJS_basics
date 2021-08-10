const express = require('express')
const { urlencoded } = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(urlencoded({ extended: true }))

app.get('/', (response) => {
    response.render('index', { weather: null, error: null })
})

app.post('/', async (request, response) => {
    const { city } = request.body
    const { weather, error } = await weatherRequest(city)
    response.render('index', { weather, error })
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...');
})
