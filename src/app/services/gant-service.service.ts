import { Injectable } from '@angular/core';

export class Tarea {
  id?: any;
  parentId?: any;
  title?: any;
  start?: any;
  creada?: any;
  end?: any;
  progress?: any;
  estado?:any
  categoria?:any;
  idcategoria?:any;
  asignado?:any
  descripcion?:any
}
export class Dependency {
  predecessorId?: any;
  successorId?: any;
}


@Injectable({
  providedIn: 'root'
})
export class GantServiceService {

  constructor() { }

}
