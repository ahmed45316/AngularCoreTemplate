import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from 'ngx-envconfig';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ConfigModule.forRoot(environment)
  ],
  exports: [
    ConfigModule
  ]
})
export class CoreModule { }
