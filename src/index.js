module.exports = function toReadable(number) {
    return ((number / 100) | 0) != 0
        ? twoDigitNumberToWord(number % 100) != "zero"
            ? oneDigitNumberToWord((number / 100) | 0) +
              " hundred " +
              twoDigitNumberToWord(number % 100)
            : oneDigitNumberToWord((number / 100) | 0) + " hundred"
        : twoDigitNumberToWord(number % 100);
};

function oneDigitNumberToWord(number) {
    switch (number) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        default:
            return "zero";
    }
}

function twoDigitNumberToWord(number) {
    if (number < 10) {
        return oneDigitNumberToWord(number);
    } else if (number < 20) {
        switch (number) {
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 15:
                return "fifteen";
            case 18:
                return "eighteen";
            default:
                return oneDigitNumberToWord(number % 10) + "teen";
        }
    } else {
        const firstDigit = (number / 10) | 0;
        const lastDigit = oneDigitNumberToWord(number % 10);
        switch (firstDigit) {
            case 2:
                return lastDigit != "zero"
                    ? "twenty" + " " + lastDigit
                    : (result = "twenty");
            case 3:
                return lastDigit != "zero"
                    ? "thirty" + " " + lastDigit
                    : "thirty";
            case 4:
                return lastDigit != "zero"
                    ? "forty" + " " + lastDigit
                    : "forty";
            case 5:
                return lastDigit != "zero"
                    ? "fifty" + " " + lastDigit
                    : "fifty";
            case 8:
                return lastDigit != "zero"
                    ? "eighty" + " " + lastDigit
                    : "eighty";
            default:
                return lastDigit != "zero"
                    ? oneDigitNumberToWord(firstDigit) + "ty " + lastDigit
                    : oneDigitNumberToWord(firstDigit) + "ty";
        }
    }
}
