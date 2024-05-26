import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) { }
  studentName = 'Felippe Ribeiro Rosa';
  studentPhoto = '/assets/perfil.jpg';
  studentCode = 'ADS0301M';
  
  ngOnInit(){

  }
goToCalculator() {
  this.router.navigate(['/calculator']);
}
goToAddress() {
  this.router.navigate(['/cep']);
}

}


