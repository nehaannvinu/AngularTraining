import { Component, OnInit } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'app-calc-layout',
  templateUrl: './calc-layout.component.html',
  styleUrls: ['./calc-layout.component.css'],
})
export class CalcLayoutComponent implements OnInit {
  constructor(
    private location: Location,
  ) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back()
  }
}
