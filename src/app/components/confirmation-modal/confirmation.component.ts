import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component ({
  selector: 'app-confirmation-modal',
  templateUrl: 'confirmation.component.html'
})
export class ConfirmationComponent {

  @Input()
  private message: string;

  @Output()
  private closeConfirmationModal = new EventEmitter();

  @Output()
  private confirmed = new EventEmitter();

  private closeModal(): void {
    this.closeConfirmationModal.emit();
  }

  private confirm(): void {
    this.confirmed.emit(true);
    this.closeModal();
  }

  private decline(): void {
    this.confirmed.emit(false);
    this.closeModal();
  }
}
