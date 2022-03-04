import { Component, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { GeolocationService } from '@sky/geolocation';
import { latLng, LatLngBounds, Map, tileLayer } from 'leaflet';
import { distinctUntilChanged, map, skip, Subject, take } from 'rxjs';
import * as ExplorerActions from '../../store/actions/explorer.actions';

@Component({
  selector: 'sky-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent {
  map: Map | undefined;
  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 17,
    center: latLng(42.695752, 23.332918),
  };
  private bounds = new Subject<LatLngBounds>();

  constructor(
    private geolocation: GeolocationService,
    private zone: NgZone,
    private store: Store
  ) {
    this.geolocation.pipe(take(1)).subscribe((pos) => {
      this.map?.panTo(latLng(pos.coords.latitude, pos.coords.longitude));
    });
    this.bounds
      .pipe(
        skip(1), // skip center
        distinctUntilChanged((prev: LatLngBounds, next: LatLngBounds) => {
          const psw = prev.getSouthWest();
          const pne = prev.getNorthEast();
          const nsw = next.getSouthWest();
          const nne = next.getNorthEast();
          return (
            psw.lat === nsw.lat &&
            psw.lng === nsw.lng &&
            pne.lat === nne.lat &&
            pne.lng === nne.lng
          );
        }),
        map((bounds) => {
          const sw = bounds.getSouthWest();
          const ne = bounds.getNorthEast();

          return {
            sw,
            ne,
          };
        })
      )
      .subscribe((bounds) => {
        this.store.dispatch(ExplorerActions.setMapBounds(bounds));
      });
  }

  onMapReady(map: Map) {
    this.map = map;
    this.map.on('zoomend', () => {
      this.zone.run(() => {
        this.bounds.next(this.getMapBounds(map));
      });
    });
    this.map.on('moveend', () => {
      this.zone.run(() => {
        this.bounds.next(this.getMapBounds(map));
      });
    });

    const bounds = this.getMapBounds(map);
    this.bounds.next(bounds);
  }

  private getMapBounds(map: Map): LatLngBounds {
    const bounds = map.getBounds();
    return bounds;
  }
}
