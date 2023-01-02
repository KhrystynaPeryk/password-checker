import { Component, forwardRef, Input, Output, EventEmitter} from '@angular/core';
import { ControlValueAccessor, FormBuilder, Validators } from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent
      ),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  form = this.fb.group({
    password: ['', Validators.required]
  });
  value!: string;
  changed(value: string): void {};
  touched(): void {};
  disabled!: boolean;

  passwordToBePassed: string = '';
  @Output() msgToSibling = new EventEmitter<any>();

  constructor (private fb: FormBuilder) {}

  writeValue(value: string): void {
    this.value = value ? value : '';
  }
  onChange (event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.sendPasswordToCheck(value)
    this.changed(value)
  }
  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  clearPassword() {
    this.form.controls.password.setValue('')
    this.sendPasswordToCheck('')
  }

  sendPasswordToCheck(password: string) {
    this.msgToSibling.emit(password)
  }
}