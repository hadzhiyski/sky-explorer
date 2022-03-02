import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorerRoutingModule } from './explorer-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromExplorer from './store/reducers/explorer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ExplorerEffects } from './store/effects/explorer.effects';
import { ExplorerComponent } from './components/explorer/explorer.component';


@NgModule({
  declarations: [
    ExplorerComponent
  ],
  imports: [
    CommonModule,
    ExplorerRoutingModule,
    StoreModule.forFeature(fromExplorer.explorerFeatureKey, fromExplorer.reducer),
    EffectsModule.forFeature([ExplorerEffects])
  ]
})
export class ExplorerModule { }
