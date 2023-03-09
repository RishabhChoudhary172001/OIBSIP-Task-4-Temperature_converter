const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let Fahrenheit = Math.round((cel * 9 / 5) + 32);
        return Fahrenheit;
    }


    let result;
    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = Math.round((fah - 32) * 5 / 9);
        return celsius;
    }

    if (valueTemp == 'cel') {
        result = celToFah(inputTemp);
        document.getElementById('resultContainer').innerHTML = `${result}&#176; Fahrenheit`;
    } else {
        result = fahToCel(inputTemp);
        document.getElementById('resultContainer').innerHTML = `${result}&#176; Celsius`;
    }

}