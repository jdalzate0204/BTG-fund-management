import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { FoundsResponse } from '../interfaces/founds-response';
import { MOCK_FOUNDS } from '../utils/mocks';

@Injectable({
  providedIn: 'root',
})
export class FoundsService {
  getFounds(): Observable<FoundsResponse[]> {
    return of(MOCK_FOUNDS).pipe(delay(1000));
  }
}
