import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { ExplorerRoutingModule } from './explorer-routing.module';
import { AirportsService } from './services';
import { ExplorerEffects } from './store/effects/explorer.effects';
import * as fromExplorer from './store/reducers/explorer.reducer';

@NgModule({
  declarations: [ExplorerComponent],
  imports: [
    CommonModule,

    LeafletModule,

    StoreModule.forFeature(
      fromExplorer.explorerFeatureKey,
      fromExplorer.reducer
    ),
    EffectsModule.forFeature([ExplorerEffects]),

    ExplorerRoutingModule,
  ],
  providers: [AirportsService],
})
export class ExplorerModule {}
