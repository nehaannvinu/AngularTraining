import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() skill = ''
  @Output() newSkillEvent = new EventEmitter<string>()

  addNewSkill(value: string) {
    this.newSkillEvent.emit(value)
  }
}
