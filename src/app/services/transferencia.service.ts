import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias(): Array<any>{

    return this.listaTransferencias;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>('http://localhost:3000/transferencias');
  }

  adiciona(transferencia: Transferencia): Observable<Transferencia>{

    this.lapidar(transferencia);
    return this.httpClient.post<Transferencia>('http://localhost:3000/transferencias', transferencia);
  }

  lapidar(transferencia: any): void{

    transferencia.data = new Date();
  }
}
