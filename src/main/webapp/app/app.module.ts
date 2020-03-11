import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PlotSharedModule } from 'app/shared/shared.module';
import { PlotCoreModule } from 'app/core/core.module';
import { PlotAppRoutingModule } from './app-routing.module';
import { PlotHomeModule } from './home/home.module';
import { PlotEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PlotSharedModule,
    PlotCoreModule,
    PlotHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PlotEntityModule,
    PlotAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class PlotAppModule {}
