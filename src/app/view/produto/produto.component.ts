import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public numero = 0;

  incremento(numero){
    this.numero = this.numero+1;
  }
  decremento(numero){
    this.numero = this.numero-1;
  }

}
