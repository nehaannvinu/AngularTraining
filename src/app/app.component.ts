import { Component } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  calcOn = true
  title = 'Calculator'
  parentSkill = 'Singing'

  skills: string[] = []

  constructor(private location: Location) {}

  addSkill(newSkill: string) {
    this.skills.push(newSkill)
  }

  goBack() {
    this.location.back()
  }
}
