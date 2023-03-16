import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxCheckBoxModule, DxContextMenuModule, DxGanttModule, DxSelectBoxModule, DxToolbarModule, DxTreeListModule } from 'devextreme-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NgSelectModule } from '@ng-select/ng-select';
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { ActionsComponent } from '../actions/actions.component';
import { ModalTaskComponent } from './modal-task/modal-task.component';


@NgModule({
  declarations: [HomeComponent, ModalTaskComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DxButtonModule,
   DxGanttModule,
   DxCheckBoxModule,
   DxSelectBoxModule,
   DxToolbarModule,
   DxContextMenuModule,
   DxTreeListModule,
   ModalModule,
   FormsModule,
   HttpClientModule,
   NzNotificationModule,
   NgSelectModule,
   ReactiveFormsModule,
   FormsModule,
   CommonModule
   
  ],
  providers: [BsModalService, { provide: NZ_I18N, useValue: es_ES }],
})
export class HomeModule { }
