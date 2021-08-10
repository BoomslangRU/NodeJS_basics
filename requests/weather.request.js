const rp = require('request-promise')

module.exports = async (city = '') => {
    if (!city) {
        throw new Error('Имя города не может быть пустым')
    }

    const KEY = '02e9d665b03b45da7f468789b1949426'
    const uri = 'https://api.openweathermap.org/data/2.5/weather'

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'metric'
        },
        json: true
    }

    try {
        const data = await rp(options)

        return {
            weather: `${data.name}: ${data.main.temp.toFixed(0)}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            error: error.error.message
        }
    }
}