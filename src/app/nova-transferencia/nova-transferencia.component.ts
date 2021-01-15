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

  transferir(): void {
    console.log('Solicitação de nova transferência!');
    const transferencia = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(transferencia);
    this.limparCampos();
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
