import { Quote } from './../models/quote';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  @ViewChild('f') formQuote: NgForm;

  createQuoteForm = true;
  // quote array
  quotes: Quote[] = [
    new Quote(
      1,
      'Tina Fey',
      'Wilson Kinyua',
      'There are no mistakes, only opportunities',
      new Date('2021, 08, 20')
    ),
    new Quote(
      2,
      'T.S. Eliot',
      'Wilson Kinyua',
      'Every moment is a fresh beginning',
      new Date('2021, 08, 20')
    ),
    new Quote(
      3,
      'Kate Winslet ',
      'Wilson Kinyua',
      'Life is short, and it is here to be lived',
      new Date('2021, 08, 20')
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  // to show or hide create quote form
  displayCreateQuoteForm() {
    this.createQuoteForm === true
      ? (this.createQuoteForm = false)
      : (this.createQuoteForm = true);
  }

  onSubmit() {}

  // validated form
}
