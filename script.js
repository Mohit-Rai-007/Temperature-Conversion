document.getElementById("convert").onclick = function () {
    let temperature = document.getElementById("temperature").value
    let conversion = document.getElementById("conversionType").value
    let result = document.getElementById("result")

    if (!temperature || !conversion) {
        result.textContent = "No input found"
    }

    if (conversion == "cTOf") {
        let Fahrenheit = (temperature * 9 / 5) + 32
        result.textContent = temperature + '°C is Equal To ' + Fahrenheit + '°F'
    }
    else if (conversion == "fTOc") {
        let Celcius = (temperature - 32) * 5 / 9
        result.textContent = temperature + '°F is Equal To ' + Celcius + '°C'

    }
    else {
         alert('Invalid Conversion...')
    }
}