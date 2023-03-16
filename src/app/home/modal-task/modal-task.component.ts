import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Tarea } from 'src/app/services/gant-service.service';


@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})
export class ModalTaskComponent implements OnInit{
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
  categoria:any;
  descripcion:any;
  nombre:any;
    constructor(private modalService: BsModalService,
      private notification: NzNotificationService){}
  
    ngOnInit() {
    console.log('modal iniciado')
    }
  
    cerrarModal(){
      console.log('cerrar')
      
      this.modalService.hide();
    }
    changeCategory(){
  
    }
    guardarTarea(){
  
  
  let datos:Tarea={
    
    title: this.nombre,
    creada: new Date().getTime(),
    descripcion:this.descripcion,
    progress: 0,
    estado:'Nuevo',
    categoria:this.categoria.categoriaNombre,
    idcategoria:this.categoria.idCategoria,
    asignado:'Sin asignar'
  }
  console.log('datos formulario',datos);
  this.modalService.setDismissReason(JSON.stringify(datos));    
  this.modalService.hide();
    }
    createBasicNotification(): void {
      this.notification.success(
        'Tarea creada',
        'La tarea se ha creado correctamente',
        { nzPlacement: 'topRight' }
      );
      this.cerrarModal();
    }
  }
  
  // //import { TaskView } from "./../+tareas/task.service";
  
  // import { I18nPipe } from "app/shared/i18n";
  
  // import { TaskCategoryService } from "app/+admin/+configuraciones/+tareas/+categorias/task.categorias.service";
  
  // import {
  //   Dependecy,
  //   MetrocarrierService,
  //   TaskGanttDev,
  // } from "./metrocarrier.service";
  // import {
  //   ViewChild,
  //   AfterViewInit,
  //   OnDestroy,
  //   IterableDiffers,
  // } from "@angular/core";
  // import { Observable, Subject, Subscription } from "rxjs";
  // import {
  //   addTask,
  //   CancelTask,
  //   TaskDetail,
  //   TaskService,
  //   UpdateTaskView,
  // } from "app/+task/task.service";
  // import { NzNotificationService } from "ng-zorro-antd";
  // import { TicketService, TicketView } from "app/+tickets/ticket.service";
  // import { ActivatedRoute, Router } from "@angular/router";
  // import { ModalDirective, BsModalRef, BsModalService } from "ngx-bootstrap";
  
  // import { GroupsService } from "app/+admin/+groups/group.service";
  // import { NotificationService } from "app/shared/utils/notification.service";
  // import { DatePipe } from "@angular/common";
  // import { GpsService } from "app/+gps/gps.service";
  
  // import { Component, OnInit } from "@angular/core";
  // import { DxGanttComponent } from "devextreme-angular";
  // import { TicketNewComponent } from "./modal-metrocarrier/ticket-new.component";
  // import DataSource from "devextreme/data/data_source";
  // import ArrayStore from "devextreme/data/array_store";
  // import { AddTaskComponent } from "./addTask/addTask.component";
  // import { AgendaService } from "app/+agenda/agenda.service";
  
  // import esMessages from "../+metrocarrier/es.json";
  // import { locale, loadMessages } from "devextreme/localization";
  
  // @Component({
  //   selector: "app-metrocarrier",
  //   templateUrl: "./metrocarrier.component.html",
  //   styleUrls: ["./metrocarrier.component.css"],
  // })
  // export class MetrocarrierComponent implements OnInit, AfterViewInit, OnDestroy {
  //   taskGanttDev: TaskGanttDev[];
  //   settingsButtonOptions: any;
  //   @ViewChild("viewTicketsModal") public viewTicketsModal: ModalDirective;
  //   private addTaskError: string;
  //   private bsModalNewWS: BsModalRef;
  //   public onBeforeRowHeaderRenderSubscription: Subscription;
  //   public _onBeforeRowHeaderRender: Subject<any> = new Subject();
  //   store: ArrayStore;
  //   public modalRef: BsModalRef;
  //   dataSource: DataSource;
  //   visible: boolean = false;
  //   public addTask: addTask = new addTask();
  //   @ViewChild(DxGanttComponent, { read: false }) gantt: DxGanttComponent;
  //   public Tareas: TaskDetail;
  //   private subcurrentTask: Subscription = new Subscription();
  //   private subsEditar: Subscription = new Subscription();
  //   private subcurrentTaskExtra: Subscription = new Subscription();
  //   private subsEditarExtra: Subscription = new Subscription();
  //   private format = new DatePipe("en-US");
  //   agregarProgreso: boolean;
  //   private updateTaskRequest: UpdateTaskView = new UpdateTaskView();
  //   dependencies = [];
  //   private subdependencia: Subscription = new Subscription();
  
  //   Actividades = [];
  //   private idTicket: number;
  //   private paramsSub: Subscription;
  //   public ticket: TicketView = new TicketView();
  //   categoria: any;
  //   infiniteList: DataSource;
  //   tarea: any;
  //   modalSubscription: Subscription;
  //   tituloTicket: any;
  //   conteoTareas: any;
  //   public group: any;
  //   public idGroup: any;
  //   private labels: string[] = [];
  //   constructor(
  //     private notification: NzNotificationService,
  //     private i18n: I18nPipe,
  //     private notificationService: NotificationService,
  //     // public service: MetrocarrierGantService,
  //     public route: ActivatedRoute,
  //     public ticketService: TicketService,
  //     public metrocarrier: MetrocarrierService,
  //     public router: Router,
  //     private bsModalService: BsModalService,
  //     private _iterableDiffers: IterableDiffers,
  //     private gpsService: GpsService,
  //     private taskService: TaskService,
  //     private groupsService: GroupsService,
  //     private taskCategoryService: TaskCategoryService,
  //     public agendaService: AgendaService
  //   ) {
  //     loadMessages(esMessages);
  //     locale(navigator.language);
  //   }
  
  //   iterableDiffer: any;
  //   public bsModalNewTask: BsModalRef;
  //   changes: any;
  
  //   private taskSubscription: Subscription;
  //   ngOnInit(): void {
  //     console.log(this.dependencies);
  //     this.group = this.ticketService.currentTicket.subscribe((ticket) => {
  //       this.idGroup = ticket.idGroup;
  //       this.group = ticket.group;
  //     });
  
  //     this.paramsSub = this.route.params.subscribe((params) => {
  //       this.idTicket = params["id"];
  //     });
  
  //     this.ticketService.get(this.idTicket);
  //     this.ticketService.currentTicket.subscribe((ticket) => {
  //       this.ticket = ticket;
  //       this.tituloTicket = this.ticket.summary;
  //       console.log("ticket", this.ticket);
  //       this.settingsButtonOptions = {
  //         text: this.tituloTicket,
  //         onClick: () => {
  //           this.modalTicket();
  //         },
  //       };
  //       this.showGantt();
  //       ticket = null;
  //     });
  //   }
  
  //   onTaskDblClick(e) {
  //     console.log(e);
  //     if (e.data.parentId == "0") {
  //       e.cancel = true;
  //     }
  //   }
  
  //   //evento para abrir el Modal
  //   onTaskEditDialogShowing(e) {
  //     console.log(e);
  //     if (e.values.parentId == "0") {
  //       e.cancel = true;
  //     } else {
  //       e.cancel = true;
  //       this.bsModalNewTask = this.bsModalService.show(TicketNewComponent, {
  //         class: "addTask-modal",
  //         backdrop: "static",
  //         initialState: {
  //           tarea: e,
  //           idTicket: this.idTicket,
  //           ticket: this.ticket,
  //         },
  //       });
  //       this.categoria = "";
  //       this.tarea = "";
  
  //       this.Actividades = [];
  
  //       this.modalSubscription = this.bsModalService.onHidden.subscribe(
  //         (result: any) => {
  //           //this.tasks=[];
  //           // this.changes=[];
  //           if (result == null || result == "") {
  //             console.log("result de nada");
  //           } else {
  //             this.ticketService.get(this.idTicket);
  //             console.log(result);
  //             if (this.modalSubscription) {
  //               this.modalSubscription.unsubscribe();
  //             }
  //           }
  //         }
  //       );
  //     }
  //   }
  
  //   ngOnDestroy(): void {
  //     this.subcurrentTask.unsubscribe();
  //     this.subsEditar.unsubscribe();
  //   }
  
  //   ngAfterViewInit(): void {}
  
  //   //carga las tareas y mas Muestra en el Gannt
  //   showGantt() {
     
  //     this.metrocarrier.getGanttInfo(this.ticket).subscribe((ganttResponses) => {
  //       console.log("GantResponses", ganttResponses);
  
  //       for (let i = 0; i < ganttResponses.length; i++) {
  //         this.categoria = {
  //           id: ganttResponses[i].id,
  //           parentId: 0,
  //           title: ganttResponses[i].text,
  //           start: ganttResponses[i].start,
  
  //           text: ganttResponses[i].text,
  //         };
  //         this.Actividades.push(this.categoria);
  
  //         for (let j = 0; j < ganttResponses[i].children.length; j++) {
  //           this.tarea = {
  //             id: ganttResponses[i].children[j].id,
  //             parentId: ganttResponses[i].id,
  //             title: ganttResponses[i].children[j].name,
  //             start: new Date(ganttResponses[i].children[j].start),
  //             end: new Date(ganttResponses[i].children[j].end),
  //             progress: ganttResponses[i].children[j].progress,
  //             estado: ganttResponses[i].children[j].status,
  //             asignado: ganttResponses[i].children[j].assign,
  //             text: ganttResponses[i].children[j].text,
  //           };
  
  //           this.Actividades.push(this.tarea);
  //         }
  //       }
  
  //       this.taskGanttDev = this.Actividades;
  //       this.Actividades = [];
  //       ganttResponses = [];
  
  //       console.log("tareas", this.taskGanttDev);
  //     });
  
  //     this.llenarDependencias();
  //   }
  
  //   modalTicket() {
  //     console.log(this.idTicket);
  //     if (this.idTicket) {
  //       this.visible = true;
  //       setTimeout(() => {
  //         this.gpsService.issuerTicketId({
  //           idticket: this.idTicket,
  //           sender: "Metrocarrier",
  //         });
  //         this.viewTicketsModal.show();
  //       }, 500);
  //     }
  //   }
  
  //   onTaskDeleted(e) {
  //     //  console.log('delete',e);
  //   }
  
  //   borrarcategoriaTask(e) {
  //     console.log(e);
  //     for (let i = 0; i < this.ticket.tasks.length; i++) {
  //       if (e === this.ticket.tasks[i].idTaskCategory) {
  //         console.log(this.ticket.tasks[i].summary, this.ticket.tasks[i].idTask);
  //         let viewCancelTask: CancelTask = new CancelTask();
  //         viewCancelTask.cancelReason = "cancelado desde web";
  //         viewCancelTask.deviceId = "";
  //         viewCancelTask.externalCancel = true;
  //         viewCancelTask.requester = {
  //           idUser: 0,
  //           name: this.ticket.tasks[i].summary,
  //           username: this.ticket.tasks[i].assignee,
  //         };
  //         this.taskService
  //           .cancelTask(
  //             viewCancelTask,
  //             this.idTicket,
  //             this.ticket.tasks[i].idTask
  //           )
  //           .subscribe((res) => {
  //             console.error("cancelar", res);
  //           });
  //       }
  //     }
  
  //     setTimeout(() => {
  //       // <<<---using ()=> syntax
  //       this.categoria = "";
  //       this.tarea = "";
  //       this.Actividades = [];
  //       this.ticketService.get(this.idTicket);
  //       this.createNotification(
  //         "success",
  //         "Tareas Canceladas",
  //         "Las tareas se cancelaron correctamente"
  //       );
  //     }, 2000);
  //   }
  
  //   borrarTarea(e) {
  //     for (let i = 0; i < this.ticket.tasks.length; i++) {
  //       if (e === this.ticket.tasks[i].idTask) {
  //         console.log(this.ticket.tasks[i].summary, this.ticket.tasks[i].idTask);
  //         let viewCancelTask: CancelTask = new CancelTask();
  //         viewCancelTask.cancelReason = "cancelado desde web";
  //         viewCancelTask.deviceId = "";
  //         viewCancelTask.externalCancel = true;
  //         viewCancelTask.requester = {
  //           idUser: 0,
  //           name: this.ticket.tasks[i].summary,
  //           username: this.ticket.tasks[i].assignee,
  //         };
  //         this.taskService
  //           .cancelTask(
  //             viewCancelTask,
  //             this.idTicket,
  //             this.ticket.tasks[i].idTask
  //           )
  //           .subscribe((res) => {
  //             console.error("cancelar", res);
  //             this.createNotification(
  //               "success",
  //               "Tarea Cancelada",
  //               "La tarea se canceló correctamente"
  //             );
  //             this.categoria = "";
  //             this.tarea = "";
  
  //             this.Actividades = [];
  
  //             this.ticketService.get(this.idTicket);
  //           });
  //       }
  //     }
  //   }
  
  //   onTaskDeleting(e) {
  //     if (e.values.parentId === "0") {
  //       //e.cancel = true;
  //       console.log("no mostrar deleting");
  //       this.borrarcategoriaTask(e.key);
  //       e.cancel = true;
  //     } else {
  //       console.log("deleting", e);
  //       this.borrarTarea(e.key);
  //       e.cancel = true;
  //     }
  //   }
  
  //   get onBeforeRowHeaderRender(): Observable<any> {
  //     return this._onBeforeRowHeaderRender.asObservable();
  //   }
  
  //   onTaskInserted(e) {
  //     console.log("inserted", e);
  //   }
  
  //   onTaskInserting(e) {
  //     console.log("inserting", e);
  //     this.addTaskEndpoint();
  //     e.cancel = true;
  //   }
  
  //   onTaskMoving(e) {
  //     console.log("moving", e);
  //     if (e.values.parentId == "0") {
  //       e.cancel = true;
  //     }
  //   }
  
  //   onTaskUpdated(e) {
  //     console.log("updated", e);
  //   }
  
  //   onTaskUpdating(e) {
  //     console.log("updating", e);
  
  //     this.taskService.getTask(this.ticket.idTicket, e.key);
  //     this.subcurrentTask = this.taskService.currentTask.subscribe((task) => {
  //       this.Tareas = task;
  
  //       if (e.newValues.start) {
  //         let horaEntrada = new Date(e.newValues.start).getTime();
  //         console.log("tenemos primera hora", horaEntrada);
  //         this.updateTaskRequest.plannedStartDate = new Date(horaEntrada);
  //         //this.format.transform(e.newValues.start, 'yyyy-MM-ddTHH:mm:ss');
  //       } else {
  //         this.updateTaskRequest.plannedStartDate = e.values.start;
  //       }
  //       if (e.newValues.end) {
  //         let HoraSalida = new Date(e.newValues.end).getTime();
  //         console.log("tenemos segunda hora", HoraSalida);
  //         this.updateTaskRequest.plannedEndDate = new Date(HoraSalida);
  //       } else {
  //         this.updateTaskRequest.plannedEndDate = e.values.end;
  //       }
  
  //       if (e.newValues.progress) {
  //         let progress = {
  //           key: "progreso",
  //           legend: "progreso",
  //           value: e.newValues.progress,
  //         };
  
  //         if (this.Tareas.extraInfoList.length == 0) {
  //           console.log("vacio");
  //           this.agregarProgreso = true;
  //         }
  
  //         for (let i = 0; i < this.Tareas.extraInfoList.length; i++) {
  //           if (this.Tareas.extraInfoList[i].key == "progreso") {
  //             this.agregarProgreso = false;
  //             break;
  //           } else {
  //             this.agregarProgreso = true;
  //           }
  //         }
  //         console.log("agregar progreso", this.agregarProgreso);
  //         if (this.agregarProgreso == true) {
  //           this.Tareas.extraInfoList.push(progress);
  //         } else {
  //           for (let i = 0; i < this.Tareas.extraInfoList.length; i++) {
  //             if (this.Tareas.extraInfoList[i].key == "progreso") {
  //               console.log(e.newValues.progress);
  //               this.Tareas.extraInfoList[i].value = e.newValues.progress;
  //             }
  //           }
  //         }
  //       }
  
  //       console.log("completa", this.Tareas);
  //       this.subsEditar = this.taskService
  //         .editTaskExtraInfo(this.Tareas, this.ticket.idTicket, e.key)
  //         .subscribe((res: any) => {
  //           console.log("respuesta ExtraInfo", res);
  
  //           this.updateTaskRequest.description = this.Tareas.description;
  //           this.updateTaskRequest.summary = this.Tareas.summary;
  //           delete this.updateTaskRequest.taskCategoryView;
  //           this.taskService
  //             .editTask(this.updateTaskRequest, this.ticket.idTicket, e.key)
  //             .subscribe((res: any) => {
  //               console.log("ResUpdate", res);
  //               this.createNotification(
  //                 "success",
  //                 "Tarea Modificada",
  //                 "La tarea se modificó correctamente"
  //               );
  //             });
  
  //           this.tarea = "";
  
  //           this.Actividades = [];
  
  //           this.ticketService.get(this.idTicket);
  
  //           this.subsEditar.unsubscribe();
  //         });
  
  //       this.subcurrentTask.unsubscribe();
  //     });
  
  //     //   console.log("completa", this.Tareas);
  
  //     // });
  //     // this.taskService.getTask(this.ticket.idTicket, e.ket);
  //   }
  
  //   createNotification(type: string, title?: string, content?: string): void {
  //     this.notification.config({
  //       nzPlacement: "bottomRight",
  //     });
  //     this.notification.create(type, title, content, {
  //       nzAnimate: true,
  //       // nzDuration: 0
  //     });
  //   }
  //   addTaskEndpoint() {
  //     // if (this.ticket.assignee !== null) {
  //     this.bsModalNewWS = this.bsModalService.show(AddTaskComponent, {
  //       class: "addTask-modal",
  //       backdrop: "static",
  //       initialState: {
  //         ticketId: this.ticket.idTicket,
  //         ticket: this.ticket,
  //       },
  //     });
  //     //   }else {
  //     //     this.notificationService.bigBox({
  //     //         title: 'Error',
  //     //         content: 'Debes asignar el ticket antes de añadir una tarea',
  //     //         color: '#C46A69',
  //     //         icon: 'fa fa-warning',
  //     //         timeout: 8000
  //     //     });
  //     // }
  //   }
  
  //   yourCustomMethod() {
  //     this.gantt.instance.deleteTask("task_key");
  //     console.log("custom");
  //   }
  
  //   onDependencyInserting(e) {
  //     console.log("inserting dependence", e);
  //   }
  
  //   onDependencyInserted(e) {
  //     console.log("inserted", e);
  //     let dependencia: Dependecy = {
  //       id: e.key,
  //       predecessorId: e.values.predecessorId,
  //       successorId: e.values.successorId,
  //       type: e.values.type,
  //     };
  
  //     console.log(this.dependencies);
  //     let dependecy = {
  //       key: "dependecia",
  //       legend: "dependecia",
  //       value: [dependencia],
  //     };
  //     let agregarDependencia: boolean;
  
  //     this.taskService.getTask(this.idTicket, e.values.predecessorId);
  //     this.subcurrentTaskExtra = this.taskService.currentTask.subscribe(
  //       (task: TaskView) => {
  //         console.log("task", task.extraInfoList);
  
  //         if (task.extraInfoList.length == 0) {
  //           console.log("vacio");
  //           agregarDependencia = true;
  //         }
  
  //         for (let i = 0; i < task.extraInfoList.length; i++) {
  //           if (task.extraInfoList[i].key == "dependecia") {
  //             console.log("agregarDependencia encontrada");
  //             agregarDependencia = false;
  //             break;
  //           } else {
  //             agregarDependencia = true;
  //             console.log(agregarDependencia);
  //           }
  //         }
  
  //         if (agregarDependencia == true) {
  //           task.extraInfoList.push(dependecy);
  //         } else {
  //           for (let j = 0; j < task.extraInfoList.length; j++) {
  //             if (task.extraInfoList[j].key == "dependecia") {
  //               //  task.extraInfoList[j].value.push(dependencia);
  //               console.log(task.extraInfoList[j].value);
  //               task.extraInfoList[j].value.push(dependencia);
  //             }
  //           }
  //         }
  
  //         console.log("mandar", task);
  //         this.subsEditarExtra = this.taskService
  //           .editTaskExtraInfo(task, this.ticket.idTicket, task.idTask)
  //           .subscribe((res: any) => {
  //             console.log("respuesta", res);
  //             this.createNotification(
  //               "success",
  //               "Dependencia Agregada",
  //               "La dependencia se agregó correctamente"
  //             );
  //             this.subsEditarExtra.unsubscribe();
  //             this.subcurrentTaskExtra.unsubscribe();
  //             dependencia = null;
  //             dependecy = null;
  //             agregarDependencia = null;
  //             this.tarea = "";
  //             this.Actividades = [];
  //             this.ticketService.get(this.idTicket);
  //           });
  //       }
  //     );
  //   }
  
  //   llenarDependencias() {
  //     console.log("iniciar", this.ticket.tasks.length);
  //     this.dependencies = [];
  //     for (let i = 0; i < this.ticket.tasks.length; i++) {
  //       this.subdependencia = this.taskService
  //         .getTask2(this.ticket.tasks[i].idTask, this.idTicket)
  //         .subscribe((res) => {
  //           let tarea: TaskDetail;
  //           tarea = res.json();
  //           for (let j = 0; j < tarea.extraInfoList.length; j++) {
  //             if (tarea.extraInfoList[j].key == "dependecia") {
  //               for (let z = 0; z < tarea.extraInfoList[j].value.length; z++) {
  //                 this.dependencies.push(tarea.extraInfoList[j].value[z]);
  //               }
  //             }
  //           }
  
  //           for (let a = 0; a < tarea.extraInfoList.length; a++) {
  //             if (tarea.extraInfoList[a].key == "progreso") {
  //               console.log(tarea.extraInfoList[a]);
  //               let encontrarProgreso = this.taskGanttDev.find(
  //                 (tareab) => tareab.title === tarea.summary
  //               );
  //               encontrarProgreso.progress = tarea.extraInfoList[a].value;
  //               console.log("encontrar", encontrarProgreso);
  //             }
  //           }
  //           this.gantt.instance._refresh();
  //           this.subdependencia.unsubscribe();
  //         });
  //     }
  //   }
  // }