import { LatLng } from 'leaflet';
import { IAirport } from '../models';

export interface IExplorerState {
  bounds: {
    sw: LatLng;
    ne: LatLng;
  };
  airports: IAirport[];
}
