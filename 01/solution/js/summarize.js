
function summarize(...numbers) {
    let sum = 0;
    let bigNumber = false; // kell-e BigInt

    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) { 
            if (!Number.isSafeInteger(numbers[i])) bigNumber = true;
            sum += numbers[i];
        }
    }

    if (!Number.isSafeInteger(sum)) {
        bigNumber = true;
    }

    if (bigNumber == true) {
        let sum = BigInt(0);
        for (let i = 0; i < numbers.length; i++) {
            if (Number.isInteger(numbers[i])) {
                sum += BigInt(numbers[i]);
            }
        }
        return sum;
    }

    return sum;
}

export default summarize;
