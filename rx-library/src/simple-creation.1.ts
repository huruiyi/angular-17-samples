/*
  Because of how the code is merged together using the doc regions,
  we need to indent the imports with the function below.
*/
  import { from, Observable } from 'rxjs';


export function docRegionPromise<T>(console: Console, fetch: (url: string) => Observable<T>) {
  // Create an Observable out of a promise
  const data = from(fetch('/api/endpoint'));
  // Subscribe to begin listening for async result
  data.subscribe({
    next(response) { console.log(response); },
    error(err) { console.error('Error: ' + err); },
    complete() { console.log('Completed'); }
  });

}
