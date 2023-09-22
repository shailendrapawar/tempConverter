
const button = document.querySelector("#button")

button.addEventListener("click", () => {

    console.log("hello")
    let input = document.getElementById("input");
    let inputValue = input.value

    let selectoption = document.querySelector("#select")
    let result = document.querySelector("#result")
    let selectValue = select.options[selectoption.selectedIndex].value; console.log(selectValue)

    function celToFahren(cel) {
        let fahren = Math.round((cel * 9 / 5) + 32);
        return fahren + "°F";
    }

    function fahrenToCell(fahren) {
        let cel = Math.round((fahren - 32) * 5 / 9)
        return cel + "°C";
    }

// condition for selection

    if (selectValue == "celcius") {

        result.classList.add("result");
        result.innerHTML = celToFahren(inputValue);
    }
    else {
        result.classList.add("result")
        result.innerHTML = fahrenToCell(inputValue)
    }

})
