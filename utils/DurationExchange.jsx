// import { useEffect, useState } from "react";

// const DurationExchange = ({ duration }) => {

//     let hours = 0;
//     let minutes = 0;

//     switch (duration) {
//         case duration >= 60:
//             hours = 1;
//             duration - 60;
//             console.log(duration)
//             break;
//         case duration >= 120:
//             hours = 2;
//             duration - 120;
//             console.log(duration)
//             break;
//         case (duration >= 180):
//             hours = 3;
//             duration - 180;
//             console.log(duration)
//             break;
//         case (duration < 60):
//             minutes = duration
//             duration - 0;
//             console.log(duration)
//             break;
//     }

//     if (duration >= 60) {
//         hours = 1;
//     } else if (duration >= 120) {
//         hours = 2;
//     } else if (duration >= 180) {
//         hours = 3;
//     } else {
//         minutes = duration
//     }

//     console.log(duration, hours, minutes, "f")

//     return (
//         <p>{hours === 0 ? "" : hours + ","}{minutes === 0 ? "" : minutes}</p>
//     )

// }

// export default DurationExchange;

export default function DurationExchange({ duration }) {

    let hours = 0;
    let minutes = 0;

    if (duration >= 60 && duration < 120) {
        hours = 1;
        minutes = duration - 60
    } else if (duration >= 120 && duration < 180) {
        hours = 2;
        minutes = duration - 120
    } else if (duration >= 180 && duration < 240) {
        hours = 3;
        minutes = duration - 180
    } else {
        minutes = duration
    }

    return hours + "h" + ":" + minutes + "m"
}