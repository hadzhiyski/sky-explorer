import { createAction, props } from '@ngrx/store';
import { LatLng } from 'leaflet';
import { IAirport } from '../../models';

export const setMapBounds = createAction(
  '[Explorer] Set Map Bounds',
  props<{ sw: LatLng; ne: LatLng }>()
);

export const loadAirports = createAction(
  '[Explorer] Load Airports',
  props<{ sw: LatLng; ne: LatLng }>()
);

export const loadAirportsSuccess = createAction(
  '[Explorer] Load Airports Success',
  props<{airports: IAirport[]}>()
);

export const loadAirportsFailure = createAction(
  '[Explorer] Load Airports Error',
  props<{ error: any}>()
);
