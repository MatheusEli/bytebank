import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];

  constructor() {
    this.listaTransferencias = [];
  }

  get transferencias(): Array<any>{

    return this.listaTransferencias;
  }

  adiciona(transferencia: any): void{

    this.lapidar(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  lapidar(transferencia: any): void{

    transferencia.data = new Date();
  }
}
