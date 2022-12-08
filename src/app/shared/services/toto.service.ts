import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TotoService {
  public users = [
    {
      firstname: 'Toto',
    },
    {
      firstname: 'Tata',
    },
  ];
  constructor() {}
}
