import { ChangeDetectorRef, Component } from '@angular/core';
import { GeolocationService } from '@sky/geolocation';
import { latLng, Map, tileLayer } from 'leaflet';
import { take } from 'rxjs';

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
  };

  constructor(private geolocation: GeolocationService) {
    this.geolocation.pipe(take(1)).subscribe((pos) => {
      this.map?.panTo(latLng(pos.coords.latitude, pos.coords.longitude));
    });
  }

  onMapReady(map: Map) {
    this.map = map;
  }
}
