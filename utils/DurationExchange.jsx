export default function DurationExchange({ duration }) {
  let hours = 0;
  let minutes = 0;

  if (duration >= 60 && duration < 120) {
    hours = 1;
    minutes = duration - 60;
  } else if (duration >= 120 && duration < 180) {
    hours = 2;
    minutes = duration - 120;
  } else if (duration >= 180 && duration < 240) {
    hours = 3;
    minutes = duration - 180;
  } else {
    minutes = duration;
  }

  return hours + "h" + ":" + minutes + "m";
}
