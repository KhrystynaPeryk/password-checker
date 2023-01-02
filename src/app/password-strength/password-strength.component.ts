import { Component, Input } from '@angular/core';
import { Strength } from '../strength.model';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  strengthValues: Strength = {
    easy: {name: 'E A S Y', description: 'Only letters/digits/symbols'},
    medium: {name: 'M E D I U M', description: 'Combination of letters-symbols/letters-digits/digits-symbols'},
    strong: {name: 'S T R O N G', description: 'Has letters, symbols and numbers'}
  }

  @Input() password: any;

  checkTheStrength(strength?: string) {
    if (this.password) {
      if (this.password.length > 0 && this.password.length < 8) {
        return 'red'
      }

      if (/^\d+$|^[a-zA-Z]+$|^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(this.password) && strength === 'easy') {
        return 'red'
      } else if (/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z]).{8,}$/.test(this.password)) {
        return 'green'
      } else if (strength === 'easy' && this.password.length || strength === 'medium' && this.password.length && !/^\d+$|^[a-zA-Z]+$|^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(this.password)) {
        return 'yellow'
      }
    }
    return ''
  }
}
