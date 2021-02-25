import { TimeDurationPipe } from './pipes/time-duration.pipe';
import { DistancePipe } from './pipes/distance.pipe';
import { TableSortComponent } from './pages/table-sort/table-sort.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeedPipe } from './pipes/speed.pipe';
import { FormsModule } from '@angular/forms';
import {PaginatorComponent} from './pages/common/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    TableSortComponent,
    SpeedPipe,
    DistancePipe,
    TimeDurationPipe,
    PaginatorComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
