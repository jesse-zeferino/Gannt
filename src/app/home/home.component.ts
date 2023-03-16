
import {  GantServiceService, Tarea } from '../services/gant-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DxGanttComponent } from "devextreme-angular"; 
import { ActionsComponent } from '../actions/actions.component';

import { locale, loadMessages } from "devextreme/localization";

import * as esMessages from '../home/es.json';
import { ModalTaskComponent } from './modal-task/modal-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @ViewChild(DxGanttComponent, { static: false }) gantt: DxGanttComponent | any;
  tareas: Tarea[]=[];
dependencias: []=[];
recursos: []=[];
recursosAsignados: []=[];
modalRef: BsModalRef | any;

categoriasLista= [
  { id:0,idCategoria: 1, categoriaNombre: 'Alcance' },
  { id:0,idCategoria: 2, categoriaNombre: 'Analisis de Requerimiento' },
  { id:0,idCategoria: 3, categoriaNombre: 'Diseño' },
  { id:0,idCategoria: 4, categoriaNombre: 'Desarrollo' },
  { id:0,idCategoria: 5, categoriaNombre: 'Pruebas' },
  { id:0,idCategoria: 6, categoriaNombre: 'Capacitacion' },
  { id:0,idCategoria: 7, categoriaNombre: 'Documentacion' },
  { id:0,idCategoria: 8, categoriaNombre: 'Despliegue' }
];
  constructor(gantService:GantServiceService,private modalService: BsModalService) {

   loadMessages(esMessages);
   
   locale(navigator.language);
  }
  ngOnInit() {
    console.log('iniciando Gannt');
   
}

cargarTareas(){
  
  for(let i=0; i<this.categoriasLista.length; i++){
    let datos:Tarea={
      id:i,
      parentId:0,
      title: this.categoriasLista[i].categoriaNombre,
      progress: 0,
      categoria:this.categoriasLista[i].categoriaNombre,
      idcategoria:this.categoriasLista[i].idCategoria,
    }
    console.log('llenando',datos)
    this.tareas.push(datos);
    
  }
  console.log('tareas', this.tareas)
  this.gantt.instance._refresh();

}
   onTaskInserted(e) {
    console.log("inserted", e);
  }

  onTaskInserting(e) {
       console.log("inserting", e);
    e.cancel = true;
   
    this.modalRef= this.modalService.show(ModalTaskComponent, {
      backdrop: 'static',
      initialState: {}
  });

      this.modalService.onHidden.subscribe((result:any)=>{
        console.log('resultado de retorno', result);
        let resultParseado=JSON.parse(result);
        console.log('resultado parseado', resultParseado);
        this.tareas.push(resultParseado);
        console.log('tareas',this.tareas)
        this.gantt.instance._refresh();
       // this.modalService.onHidden.unsubscribe();
      });
    // console.log('onTaskInserting')
    // if (e.values.text == " ") {
    //     // your code
    //     e.cancel = true;
    // }
}
onTaskClick(e:any) {
  console.log('onTaskClick')
  if (e.key != 0) {
      // your code
  }
}

onTaskDblClick(e:any) {
  if (e.key != 0) {
      // your code
      e.cancel = true;
  }
}
onTaskEditDialogShowing(e:any){}
onTaskDeleted(e:any){}
onTaskDeleting(e:any){}
onTaskMoving(e:any){}
onTaskUpdated(e:any){}
onTaskUpdating(e:any){}
onDependencyInserting(e:any){}
onDependencyInserted(e:any){}

}
