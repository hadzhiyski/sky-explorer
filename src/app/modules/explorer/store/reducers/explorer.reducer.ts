import { createReducer, on } from '@ngrx/store';
import { latLng, LatLng } from 'leaflet';
import { uniqBy } from 'lodash-es';
import { IAirport } from '../../models';
import * as ExplorerActions from '../actions/explorer.actions';
import { IExplorerState } from '../state';

export const explorerFeatureKey = 'explorer';

export const initialState: IExplorerState = {
  bounds: {
    sw: latLng(0, 0),
    ne: latLng(0, 0),
  },
  airports: [],
};

export const reducer = createReducer(
  initialState,

  on(
    ExplorerActions.setMapBounds,
    (state, action: { sw: LatLng; ne: LatLng }): IExplorerState => ({
      ...state,
      bounds: {
        sw: action.sw,
        ne: action.ne,
      },
    })
  ),
  on(
    ExplorerActions.loadAirportsSuccess,
    (state, action: { airports: IAirport[] }): IExplorerState => ({
      ...state,
      airports: uniqBy(
        [...state.airports, ...action.airports],
        (airport) => airport.id
      ),
    })
  )
);
