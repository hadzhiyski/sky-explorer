import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as ExplorerActions from '../actions/explorer.actions';

@Injectable()
export class ExplorerEffects {
  loadExplorers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExplorerActions.loadExplorers),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map((data) => ExplorerActions.loadExplorersSuccess({ data })),
          catchError((error) =>
            of(ExplorerActions.loadExplorersFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions) {}
}
