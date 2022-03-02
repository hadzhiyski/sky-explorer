import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { ExplorerRoutingModule } from './explorer-routing.module';
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
})
export class ExplorerModule {}
