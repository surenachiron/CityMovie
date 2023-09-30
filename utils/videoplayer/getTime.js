export function getCurrentTimeProgressBar(currentTimeget) {
    let minutestest, secondstest;
    let currenttime = currentTimeget
    minutestest = Math.floor(currenttime / 60);
    minutestest = (minutestest >= 10) ? minutestest : minutestest;
    secondstest = Math.floor(currenttime % 60);
    secondstest = (secondstest >= 10) ? secondstest : secondstest;

    if (minutestest > 0) {
        return minutestest + ":" + secondstest
    }
    return "0:" + secondstest
}

export function getDurationTimeProgressBar(currentTimeget) {
    let minutestest, secondstest;
    let currenttime = currentTimeget
    minutestest = Math.floor(currenttime / 60);
    minutestest = (minutestest >= 10) ? minutestest : minutestest;
    secondstest = Math.floor(currenttime % 60);
    secondstest = (secondstest >= 10) ? secondstest : secondstest;

    if (minutestest > 0) {
        return minutestest + ":" + secondstest
    }
    return "0:" + secondstest
}