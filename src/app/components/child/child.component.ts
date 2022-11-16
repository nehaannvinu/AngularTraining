import { Component, OnDestroy, OnInit } from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnDestroy {
  interval: any
  constructor() {}

  runTimer() {
    this.interval = setInterval(
      () => console.log('Logging every 2 seconds'),
      2000,
    )
  }

  ngOnInit(): void {
    console.log('Child mounted!')
    this.runTimer()
  }

  ngOnDestroy() {
    console.log('Child destroyed!')
    clearInterval(this.interval)
  }
}
