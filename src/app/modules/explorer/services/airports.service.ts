import { Injectable } from '@angular/core';
import { LatLng } from 'leaflet';
import { Observable } from 'rxjs';
import { IAirport } from '../models';

@Injectable()
export class AirportsService {
  loadAirports(bounds: { sw: LatLng; ne: LatLng }): Observable<IAirport[]> {
    throw new Error('Not Implemented');
  }
}
