import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  height: number = 0;
  weight: number = 0;
  imcResult: { imc: number; description: string } = { imc: 0, description: '' }; // Valor padrão

  constructor() {}

  ngOnInit() {}

  calculateIMC(event: Event) {
    event.preventDefault();
    const heightFloat = parseFloat(this.height.toString().replace(',', '.'));
    const weightFloat = parseFloat(this.weight.toString().replace(',', '.'));
    const imc = weightFloat / Math.pow(heightFloat / 100, 2);
    
    let description = '';

    if (imc < 18.5) {
      description = 'Você está abaixo do peso.';
    } else if (imc >= 18.5 && imc < 24.9) {
      description = 'Você tem um peso normal.';
    } else if (imc >= 25 && imc < 29.9) {
      description = 'Você está acima do peso.';
    } else if (imc >= 30) {
      description = 'Você está obeso.';
    }

    this.imcResult = { imc: parseFloat(imc.toFixed(4)), description };
  }
}
