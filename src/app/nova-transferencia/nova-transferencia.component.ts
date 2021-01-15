import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  title = 'bytebank';
  valor = 0;
  destino = 0;

  constructor(private service: TransferenciaService){}

  transferir(): void {
    console.log('Solicitação de nova transferência!');
    const transferencia: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adiciona(transferencia).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    }, (error) => console.log(error));
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
