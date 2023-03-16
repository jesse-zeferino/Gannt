
import { Dependency, GantServiceService, Tarea } from '../services/gant-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { DxGanttComponent } from "devextreme-angular"; 
import { ActionsComponent } from '../actions/actions.component';
import { locale, loadMessages } from "devextreme/localization";

import * as esMessages from '../gant/es.json';
import { Subscription } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-gant',
  templateUrl: './gant.component.html',
  styleUrls: ['./gant.component.css']
})
export class GantComponent implements OnInit{
  @ViewChild(DxGanttComponent) gantt: DxGanttComponent;
  tareasNuevas:number;
  tareasAsignadas:number;
  tareasProgreso:number;
  tareasResueltas:number;
  modalSubscription: Subscription;
  modalSubscriptionDetalle: Subscription;
  public tareas:any = [
    {
        id: 1,
        idCategoria: 1,
        parentId: 0,
        title: "Alcance",
        start: "2023-02-19T18:05:00.028Z",
        end: "2023-02-19T18:05:00.028Z",
        progress: 0
    },
    {
        id: 2,
        idCategoria: 2,
        parentId: 0,
        title: "Analisis de Requerimiento",
        start: "2023-02-19T18:05:00.028Z",
        end: "2023-02-19T18:05:00.028Z",
        progress: 0
    },
    {
        id: 3,
        idCategoria: 3,
        parentId: 0,
        title: "Diseño",
        start: "2023-02-19T18:05:00.028Z",
        end: "2023-02-19T18:05:00.028Z",
        progress: 0
    },
    {
        id: 4,
        idCategoria: 4,
        parentId: 0,
        title: "Desarrollo",
        start: "2023-02-19T18:05:00.028Z",
        end: "2023-02-19T18:05:00.028Z",
        progress: 0
    },
    {
        id: 5,
        idCategoria: 5,
        parentId: 0,
        title: "Pruebas",
        start: "2023-02-19T18:05:00.028Z",
        end: "2023-02-19T18:05:00.028Z",
        progress: 0
    },
    {
        id: 6,
        idCategoria: 6,
        parentId: 0,
        title: "Capacitacion",
        start: "2023-02-19T18:05:00.028Z",
        end: "2023-02-19T18:05:00.028Z",
        progress: 0
    },
    {
        id: 7,
        idCategoria: 7,
        parentId: 0,
        title: "Documentacion",
        start: "2023-02-19T18:05:00.028Z",
        end: "2023-02-19T18:05:00.028Z",
        progress: 0
    },
    {
        id: 8,
        idCategoria: 8,
        parentId: 0,
        title: "Despliegue",
        start: "2023-02-19T18:05:00.028Z",
        end: "2023-02-19T18:05:00.028Z",
        progress: 0
    },
    {
        asignado: "Pedro",
        categoria: "Despliegue",
        creada: 1676829900028,
        descripcion: "Revisión posterior a la implementación",
        start: "2023-02-19T18:23:58.662Z",
        end: "2023-02-20T18:23:58.662Z",
        estado: "Nuevo",
        id: 9,
        idcategoria: 8,
        parentId: 8,
        progress: 0,
       
        title: "Revisión posterior a la implementación"
    },
    {
        id: 10,
        parentId: 1,
        start: "2023-02-19T18:05:12.299Z",
        end: "2023-02-20T18:05:12.299Z",
        progress: 0,
        title: "Determinar el alcance del proyecto",
        creada: 1676829912299,
        descripcion: "Determinar el alcance del proyecto",
        estado: "Nuevo",
        categoria: "Alcance",
        idcategoria: 1,
        asignado: "Sin Asignar"
    },
    {
        id: 11,
        parentId: 2,
        start: "2023-02-19T18:07:49.799Z",
        end: "2023-02-20T18:07:49.799Z",
        progress: 0,
        title: "Desarrollar un presupuesto preliminar",
        creada: 1676830069799,
        descripcion: "Desarrollar un presupuesto preliminar",
        estado: "Nuevo",
        categoria: "Analisis de Requerimiento",
        idcategoria: 2,
        asignado: "Sin Asignar"
    },
    {
        id: 12,
        parentId: 3,
        start: "2023-02-19T18:09:29.703Z",
        end: "2023-02-20T18:09:29.703Z",
        progress: 0,
        title: "Desarrollar especificaciones funcionales.",
        creada: 1676830169703,
        descripcion: "Desarrollar especificaciones funcionales.",
        estado: "Nuevo",
        categoria: "Diseño",
        idcategoria: 3,
        asignado: "Sin Asignar"
    },
    {
        id: 13,
        parentId: 4,
        start: "2023-02-19T18:11:15.659Z",
        end: "2023-02-20T18:11:15.659Z",
        progress: 0,
        title: "Asignar personal de desarrollo",
        creada: 1676830275659,
        descripcion: "Asignar personal de desarrollo",
        estado: "Nuevo",
        categoria: "Desarrollo",
        idcategoria: 4,
        asignado: "Sin Asignar"
    },
    {
        id: 14,
        parentId: 5,
        start: "2023-02-19T18:11:39.279Z",
        end: "2023-02-20T18:11:39.279Z",
        progress: 0,
        title: "Pruebas unitarias",
        creada: 1676830299279,
        descripcion: "Pruebas unitarias",
        estado: "Nuevo",
        categoria: "Pruebas",
        idcategoria: 5,
        asignado: "Sin Asignar"
    },
    {
        id: 15,
        parentId: 6,
        start: "2023-02-19T18:22:19.923Z",
        end: "2023-02-20T18:22:19.923Z",
        progress: 0,
        title: "Desarrollar especificaciones de capacitación para usuarios finales",
        creada: 1676830939923,
        descripcion: "Desarrollar especificaciones de capacitación para usuarios finales",
        estado: "Nuevo",
        categoria: "Capacitacion",
        idcategoria: 6,
        asignado: "Sin Asignar"
    },
    {
        id: 16,
        parentId: 7,
        start: "2023-02-19T18:23:04.585Z",
        end: "2023-02-20T18:23:04.585Z",
        progress: 0,
        title: "Desarrollar especificación de ayuda",
        creada: 1676830984585,
        descripcion: "Desarrollar especificación de ayuda",
        estado: "Nuevo",
        categoria: "Documentacion",
        idcategoria: 7,
        asignado: "Sin Asignar"
    },
    {
        id: 17,
        parentId: 8,
        start: "2023-02-19T18:23:58.662Z",
        end: "2023-02-20T18:23:58.662Z",
        progress: 0,
        title: "Instalar/implementar software",
        creada: 1676831038662,
        descripcion: "Instalar/implementar software",
        estado: "Nuevo",
        categoria: "Despliegue",
        idcategoria: 8,
        asignado: "Sin Asignar"
    }
];

 dependencias:any=[];
public bsModalAddTask: BsModalRef ;
public bsModalDetailTask: BsModalRef;
tareaEnviar:Tarea;
disableContextMenu: boolean;
categoriasLista= [
  { idCategoria: 1, categoriaNombre: 'Alcance' },
  { idCategoria: 2, categoriaNombre: 'Analisis de Requerimiento' },
  { idCategoria: 3, categoriaNombre: 'Diseño' },
  { idCategoria: 4, categoriaNombre: 'Desarrollo' },
  { idCategoria: 5, categoriaNombre: 'Pruebas' },
  { idCategoria: 6, categoriaNombre: 'Capacitacion' },
  { idCategoria: 7, categoriaNombre: 'Documentacion' },
  { idCategoria: 8, categoriaNombre: 'Despliegue' }
];
  constructor(private modalService: BsModalService, private notification: NzNotificationService) {
   loadMessages(esMessages);
   locale(navigator.language);
  }
  ngOnInit() {
    this.cargarNoTareas();
     this.disableContextMenu = true;
  }

  onContextMenuPreparing(e) {
    e.cancel = this.disableContextMenu;
  }
   onTaskInserted(e) {
    console.log("inserted", e);
  }
  
  onTaskInserting(e) {
    e.cancel = true;
    var modalConfig: ModalOptions = {
      backdrop: "static",
      initialState: {
        accion: 'crear'
      }
    };
    this.bsModalAddTask= this.modalService.show(ActionsComponent,modalConfig);

  this.modalSubscription = this.bsModalAddTask.onHidden.subscribe((result:any)=>{
    this.modalSubscription.unsubscribe();
    
       if(result!='cerrar'){
        let resultParseado=JSON.parse(result);
         resultParseado.id=this.tareas.length+1;
        resultParseado.start=new Date(resultParseado.start);
        resultParseado.end=new Date(resultParseado.end);
        this.tareas.push(resultParseado);
         this.yourCustomMethod();
       }
       
     });
   
}
onTaskClick(e:any) {
  // console.log('onTaskClick')
  // if (e.key != 0) {
  //     your code
  // }
}

onTaskDblClick(e:any) {
   
    if (e.data.parentId == "0") {
            e.cancel = true;
     }else{
      this.tareaEnviar=this.tareas[e.data.id-1];
     
     }
  
}
yourCustomMethod() {
 this.cargarNoTareas();
 this.gantt.instance.refresh();
  
}
onTaskEditDialogShowing(e:any){

  if (e.values.parentId == "0") {
          e.cancel = true;
  }else{
    e.cancel = true;
    var modalConfig: ModalOptions = {
      backdrop: "static",
      animated: true, keyboard: true, ignoreBackdropClick: false ,
      initialState: {
        accion: 'detalle',
        detalleTask:this.tareaEnviar
      }
    };

    this.bsModalDetailTask= this.modalService.show(ActionsComponent,modalConfig);
    
    this.modalSubscriptionDetalle = this.bsModalDetailTask.onHidden.subscribe((result:any)=>{
            
      if(result!='cerrar'){
        let resultParseado=JSON.parse(result);
        this.tareas[result.id]=resultParseado;
        resultParseado.start=new Date(resultParseado.start);
        resultParseado.end=new Date(resultParseado.end);
        
        this.yourCustomMethod();
      }
      
   
      this.modalSubscriptionDetalle.unsubscribe();
     });
   
  }
}
onTaskDeleted(e:any){}
onTaskDeleting(e:any){
  if (e.values.parentId === "0") {
          this.borrarTareas(e.key);
                  
      } else {
           this.borrarTarea(e.key);
       
      }
      e.cancel = true;
}
borrarTarea(idTarea:any){
  this.tareas[idTarea-1].estado='Cancelado';
    this.yourCustomMethod();
}
borrarTareas(idCategoria:any){
  for(let i=0; i<this.tareas.length; i++){
    if(this.tareas[i].parentId==idCategoria){
      this.tareas[i].estado='Cancelado'
    }
  }
  this.yourCustomMethod();
}


onTaskMoving(e:any){
//console.log("moving", e);
      // if (e.values.parentId == "0") {
      //   e.cancel = true;
      // }
}
onTaskUpdated(e:any){
 // console.log("updated", e);
}
onTaskUpdating(e:any){
 
  if (e.values.parentId == "0") {
          e.cancel = true;
         
      }else{
       
        if (e.newValues.progress) {
          this.tareas[e.values.id-1].progress=e.newValues.progress;
        }
        if (e.newValues.end) {
         
          this.tareas[e.values.id-1].start=new Date(e.newValues.end);
        }
        if (e.newValues.start) {
          
          this.tareas[e.values.id-1].start=new Date(e.newValues.start);
        }
        this.yourCustomMethod();
      }
}
onDependencyInserting(e:any){
  e.cancel = true;

  let dependencia:Dependency={
   predecessorId: e.values.predecessorId,
 successorId: e.values.successorId,
 };
 this.dependencias.push(dependencia);

 this.createBasicNotification('Dependencia creada','La dependencia se creó correctamente');
 this.yourCustomMethod();
}
onDependencyInserted(e:any){

 

}
cargarNoTareas(){
  this.tareasNuevas=0;
  this.tareasProgreso=0;
  this.tareasResueltas=0;
  this.tareasAsignadas=0;
    for(let i=0; i<this.tareas.length; i++){
        
        if(this.tareas[i].estado && this.tareas[i].parentId!=0){
          if(this.tareas[i].estado=='Nuevo' && this.tareas[i].asignado=='Sin Asignar'){
            this.tareasNuevas=this.tareasNuevas+1;
          }
          if(this.tareas[i].estado=='Nuevo' && this.tareas[i].asignado!='Sin Asignar'){
            this.tareasAsignadas=this.tareasAsignadas+1;
          }
          if(this.tareas[i].estado=='En Progreso'){
            this.tareasProgreso=this.tareasProgreso+1;
          }if(this.tareas[i].estado=='Resuelto'){
            this.tareasResueltas=this.tareasProgreso+1;
          }
    }

}

}
createBasicNotification(titulo:string, cuerpo:string): void {
  this.notification.success(
    titulo,
    cuerpo,
    { nzPlacement: 'bottomRight' ,nzAnimate: true,}
  );

}
}

