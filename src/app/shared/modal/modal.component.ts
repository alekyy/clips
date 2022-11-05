import { Component, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalID = '';

  constructor(public modal: ModalService, public elRef: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.elRef.nativeElement);
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.elRef.nativeElement);
  }

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }
}
