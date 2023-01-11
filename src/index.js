module.exports = function toReadable(number) {
    let result;
    if (((number / 100) | 0) != 0) {
        console.log(oneDigitNumberToWord((number / 100) | 0));
        console.log((number / 100) | 0);
        result =
            oneDigitNumberToWord((number / 100) | 0) +
                " hundred" +
                twoDigitNumberToWord(number % 100) !=
                "zero" && " " + twoDigitNumberToWord(number % 100);
    } else {
        result = twoDigitNumberToWord(number % 100);
    }
    // const result =
    //     oneDigitNumberToWord((number / 100) | 0) != "zero"
    //         ? oneDigitNumberToWord((number / 100) | 0) +
    //               " hundred" +
    //               twoDigitNumberToWord(number % 100) !=
    //               "zero" && " " + twoDigitNumberToWord(number % 100)
    //         : twoDigitNumberToWord(number % 100);

    return result;
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
                return oneDigitNumberToWord((number / 10) | 0) + "teen";
        }
    } else if (number >= 20) {
        switch (number) {
            case ((number / 10) | 0) == 2:
                return (
                    "twenty" + oneDigitNumberToWord(number % 10) != "zero" &&
                    " " + oneDigitNumberToWord(number % 10)
                );
            case ((number / 10) | 0) == 3:
                return (
                    "thirty" + oneDigitNumberToWord(number % 10) != "zero" &&
                    " " + oneDigitNumberToWord(number % 10)
                );
            case ((number / 10) | 0) == 5:
                return (
                    "fifty" + oneDigitNumberToWord(number % 10) != "zero" &&
                    " " + oneDigitNumberToWord(number % 10)
                );
            case ((number / 10) | 0) == 8:
                return (
                    "eighty" + oneDigitNumberToWord(number % 10) != "zero" &&
                    " " + oneDigitNumberToWord(number % 10)
                );
            default:
                return (
                    oneDigitNumberToWord((number / 10) | 0) +
                        "ty" +
                        oneDigitNumberToWord(number % 10) !=
                        "zero" && " " + oneDigitNumberToWord(number % 10)
                );
        }
    }
}
