/*
  Because of how the code is merged together using the doc regions,
  we need to indent the imports with the function below.
*/
  import { interval } from 'rxjs';


export function docRegionInterval(console: Console) {
  // Create an Observable that will publish a value on an interval
  const secondsCounter = interval(1000);
  // Subscribe to begin publishing values
  const subscription = secondsCounter.subscribe(n =>
    console.log(`It's been ${n + 1} seconds since subscribing!`));

  return subscription;
}
