import { NgForm } from '@angular/forms';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Quote } from 'src/app/models/quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css'],
})
export class QuoteFormComponent implements OnInit {
  // accessing the form inputs
  @ViewChild('f') quoteForm: NgForm;
  // creating a new quote
  newQuote = new Quote(0, '', '', '', new Date());
  // emit event to parent component
  @Output() addQuote = new EventEmitter<Quote>();
  // display success message
  displaySuccessMessage = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.displaySuccessMessage = true;
    // creating a new quote
    this.newQuote.author = this.quoteForm.value.author;
    this.newQuote.quoteDescription = this.quoteForm.value.quoteDescription;
    this.newQuote.createdBy = this.quoteForm.value.createdBy;
    this.addQuote.emit(this.newQuote);
    this.quoteForm.reset();
  }
}
