export function getCurrentTimeProgressBar(currentTimeGet) {
    let minutesTest, secondsTest;
    let currentTime = currentTimeGet
    minutesTest = Math.floor(currentTime / 60);
    minutesTest = (minutesTest >= 10) ? minutesTest : minutesTest;
    secondsTest = Math.floor(currentTime % 60);
    secondsTest = (secondsTest >= 10) ? secondsTest : secondsTest;

    if (minutesTest > 0) {
        return minutesTest + ":" + secondsTest
    }
    return "0:" + secondsTest
}

export function getDurationTimeProgressBar(currentTimeGet) {
    let minutesTest, secondsTest;
    let currentTime = currentTimeGet
    minutesTest = Math.floor(currentTime / 60);
    minutesTest = (minutesTest >= 10) ? minutesTest : minutesTest;
    secondsTest = Math.floor(currentTime % 60);
    secondsTest = (secondsTest >= 10) ? secondsTest : secondsTest;

    if (minutesTest > 0) {
        return minutesTest + ":" + secondsTest
    }
    return "0:" + secondsTest
}