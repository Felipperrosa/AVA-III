import { Component, OnInit } from '@angular/core';
import { ViacepService } from '../services/viacep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {
  cep: string='';
  endereco: any;

  constructor(private viacepService: ViacepService) { }
  buscarEndereco() {
    this.viacepService.getAddressByCEP(this.cep).subscribe(
      (data) => {
        this.endereco = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnInit() {
  }
  

}
