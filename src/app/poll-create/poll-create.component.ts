import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PollForm } from '../types';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.scss']
})

export class PollCreateComponent implements OnInit {
  pollForm: FormGroup;

  @Output() pollCreated: EventEmitter<PollForm> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.pollForm = this.fb.group({
      question: this.fb.control('', [Validators.required]),
      thumbnail: this.fb.control(''),
      op1: this.fb.control(''),
      op2: this.fb.control(''),
      op3: this.fb.control(''),
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    const formData: PollForm = {
      question: this.pollForm.get("question").value,
      thumbnail: this.pollForm.get("thumbnail").value,
      options: [
        this.pollForm.get("op1").value,
        this.pollForm.get("op2").value,
        this.pollForm.get("op3").value
      ]
    };

    this.pollCreated.emit(formData);
  }
}
