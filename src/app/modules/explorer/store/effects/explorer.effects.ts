import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LatLng } from 'leaflet';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { AirportsService } from '../../services';
import * as ExplorerActions from '../actions/explorer.actions';

@Injectable()
export class ExplorerEffects {
  setMapBounds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExplorerActions.setMapBounds),
      switchMap((action: { sw: LatLng; ne: LatLng }) => {
        return of(
          ExplorerActions.loadAirports({ sw: action.sw, ne: action.ne })
        );
      })
    );
  });

  loadAirports$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExplorerActions.loadAirports),
      concatMap((action: { sw: LatLng; ne: LatLng }) =>
        this.airportService.loadAirports(action).pipe(
          map((airports) => ExplorerActions.loadAirportsSuccess({ airports })),
          catchError((err) =>
            of(ExplorerActions.loadAirportsFailure({ error: err }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private airportService: AirportsService
  ) {}
}
