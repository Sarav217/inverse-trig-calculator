document.getElementById("calculate").addEventListener("click", function() {
    const ratio = document.getElementById("ratio").value;
    const numerator = parseFloat(document.getElementById("numerator").value);
    const denominator = parseFloat(document.getElementById("denominator").value);

    if (denominator === 0) {
        document.getElementById("result").innerText = "Error: Denominator cannot be zero.";
        return;
    }

    const value = numerator / denominator;
    let resultDegrees, resultRadians;

    switch (ratio) {
        case "asin":
            resultRadians = Math.asin(value);
            resultDegrees = resultRadians * (180 / Math.PI);
            break;
        case "acos":
            resultRadians = Math.acos(value);
            resultDegrees = resultRadians * (180 / Math.PI);
            break;
        case "atan":
            resultRadians = Math.atan(value);
            resultDegrees = resultRadians * (180 / Math.PI);
            break;
        case "acsc":
            resultRadians = Math.asin(1 / value);
            resultDegrees = resultRadians * (180 / Math.PI);
            break;
        case "asec":
            resultRadians = Math.acos(1 / value);
            resultDegrees = resultRadians * (180 / Math.PI);
            break;
        case "acot":
            resultRadians = Math.atan(1 / value);
            resultDegrees = resultRadians * (180 / Math.PI);
            break;
        default:
            document.getElementById("result").innerText = "Invalid ratio selected.";
            return;
    }

    // Convert radians to π format
    const piFraction = (radians) => {
        const piValue = radians / Math.PI;
        if (piValue === 1) return 'π';
        else if (piValue === -1) return '-π';
        else if (Number.isInteger(piValue)) return `${piValue}π`;
        else return `${piValue.toFixed(2)}π`;
    };

    const radInPi = piFraction(resultRadians);
    document.getElementById("result").innerText = `Result: ${resultDegrees.toFixed(2)}° (${radInPi})`;
});
