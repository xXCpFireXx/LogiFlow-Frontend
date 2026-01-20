import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputGeneric } from '../../shared/input-generic/input-generic';

@Component({
  selector: 'app-profile-information',
  standalone: true,
  imports: [CommonModule, InputGeneric],
  templateUrl: './profile-information.html',
})
export class ProfileInformation {
  @Input() userProfile: any;
  @Input() icons: any;

  @Output() changeAvatar = new EventEmitter<void>();
  @Output() updatePassword = new EventEmitter<void>();

  onChangeAvatar() {
    this.changeAvatar.emit();
  }

  onUpdatePassword() {
    this.updatePassword.emit();
  }
}
