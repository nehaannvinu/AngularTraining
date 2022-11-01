import { Component } from '@angular/core'

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  display: string = ''
  currentValue: number = 0
  firstValue: number | null = 0
  action: string | null = null

  selectedNum(num: number) {
    if (this.display == '') {
      this.display = num.toString()
      this.currentValue = num
    } else {
      this.display = `${this.display}${num}`
      this.currentValue = parseFloat(this.display)
    }
  }

  selectedOperation(operation: string) {
    if (this.display != '' && this.firstValue == 0) {
      this.firstValue = this.currentValue
      this.currentValue = 0
      this.display = ''
      this.action = operation
    }
  }

  calculate() {
    if (this.action == '+' && this.firstValue != null) {
      this.display = (this.currentValue + this.firstValue).toString()
    }
    if (
      this.action == '-' &&
      this.firstValue != null &&
      this.currentValue > this.firstValue
    ) {
      this.display = (this.currentValue - this.firstValue).toString()
    }
    if (this.action == '*' && this.firstValue != null) {
      this.display = (this.currentValue * this.firstValue).toString()
    }
    if (
      this.action == '/' &&
      this.firstValue != null &&
      this.currentValue != 0
    ) {
      this.display = (this.currentValue / this.firstValue).toString()
    }
  }

  clear() {
    this.currentValue = 0
    this.firstValue = 0
    this.display = ''
  }
}
