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
  dotcount = false

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
    if (operation == '.' && !this.dotcount) {
      this.display = `${this.display}${operation}`
      this.dotcount = true
    } else if (operation == '.' && this.dotcount) {
      this.display = `${this.display}`
    } else if (this.display != '' && this.firstValue == 0) {
      this.firstValue = this.currentValue
      this.currentValue = 0
      this.display = ''
      this.action = operation
      this.dotcount = false
    } else if (this.display != '' && this.firstValue != 0) {
      this.calculate()
      this.firstValue = parseFloat(this.display)
      this.action = operation
      this.currentValue = 0
      this.display = ''
      this.dotcount = false
    }
  }

  calculate() {
    if (this.firstValue != null) {
      switch (this.action) {
        case '+':
          this.display = (this.currentValue + this.firstValue).toString()
          break
        case '-':
          this.display = (this.firstValue - this.currentValue).toString()
          break
        case '*':
          this.display = (this.currentValue * this.firstValue).toString()
          break
        case '/':
          this.display = (this.firstValue / this.currentValue).toString()
          break
      }
      this.dotcount = false
    }
  }

  clear() {
    this.currentValue = 0
    this.firstValue = 0
    this.display = ''
    this.action = null
    this.dotcount = false
  }
}
