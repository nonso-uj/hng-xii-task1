export const prime_checker = (number) => {
    let isPrime = number > 1 && !(number % 2 === 0 && number !== 2);

    for (let i = 3; i * i <= number && isPrime; i += 2) {
        if (number % i === 0) {
            isPrime = false;
        }
    }

    return isPrime
}

export const perfect_checker = (number) => {
    let temp = 0;
    
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    return temp === number && temp !== 0
}

export const armstrong_checker = (number) => {
    let digits = number.toString().split('');
    number < 0 && digits.shift()
    const order = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), order), 0);
    
    console.log('digits= ', sum, number)
    return sum === Math.abs(number)
}

export const fetch_fact = async (number) => {
    const url = `http://numbersapi.com/${number}/math?json`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json.text;
    } catch (error) {
        console.error('message', error.message);
        return error.message;
    }
}