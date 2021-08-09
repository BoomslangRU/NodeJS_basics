const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.end('Hello from nodeJS')
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...');
})
