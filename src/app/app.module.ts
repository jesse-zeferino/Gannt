import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DxButtonModule, DxContextMenuModule, DxToolbarModule, DxTreeListModule } from 'devextreme-angular';
import { DxGanttModule } from 'devextreme-angular';
import { DxCheckBoxModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';
import { ActionsComponent } from './actions/actions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NgSelectModule } from '@ng-select/ng-select';

import { GantComponent } from './gant/gant.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AvatarPipe } from './avatar.pipe';



registerLocaleData(es);
@NgModule({
  declarations: [
    AppComponent,
    ActionsComponent,
    GantComponent,
    AvatarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   DxButtonModule,
   DxGanttModule,
   DxCheckBoxModule,
   DxSelectBoxModule,
   DxToolbarModule,
   DxContextMenuModule,
   DxTreeListModule,
   BrowserAnimationsModule,
   ModalModule,
   FormsModule,
   HttpClientModule,
   NzNotificationModule,
   NgSelectModule,
   ReactiveFormsModule,
   FormsModule,
   CommonModule,
   NzIconModule,
   
  ],
  providers: [BsModalService, { provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
