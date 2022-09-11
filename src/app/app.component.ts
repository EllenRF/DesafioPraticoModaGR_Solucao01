import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solucao01-Restaurante'

  valorKg: number = 0
  taraPrato: number = 0
  pratoKg: number = 0
  public get pratoGramas() {
    return this.pratoKg * 1000
  }

  calcularPreco() {
    var peso = this.pratoGramas - this.taraPrato * 1000
    var valorPrato = (this.valorKg * peso) / 1000
    return valorPrato.toFixed(2)
  }
}
