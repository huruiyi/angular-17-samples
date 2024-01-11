/*
  Because of how the code is merged together using the doc regions,
  we need to indent the imports with the function below.
*/
  import { Observable } from 'rxjs';
  import { ajax } from 'rxjs/ajax';


export function docRegionAjax<T>(console: Console,
                                 ajax: (url: string) => Observable<{status: number, response: T}>) {
  // Create an Observable that will create an AJAX request
  const apiData = ajax('/api/data');
  // Subscribe to create the request
  apiData.subscribe(res => console.log(res.status, res.response));
}
