import { Quote } from './../models/quote';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  createQuoteForm = false;
  // ngForm to access the inputs fields on submit
  @ViewChild('f') formQuote: NgForm;

  // quote array
  quotes: Quote[] = [
    new Quote(
      Math.floor(Math.random() * 100),
      'Tina Fey',
      'Wilson Kinyua',
      'There are no mistakes, only opportunities',
      new Date('2021, 08, 20')
    ),
    new Quote(
      Math.floor(Math.random() * 100),
      'T.S. Eliot',
      'Wilson Kinyua',
      'Every moment is a fresh beginning',
      new Date('2021, 08, 20')
    ),
    new Quote(
      Math.floor(Math.random() * 100),
      'Kate Winslet ',
      'Wilson Kinyua',
      'Life is short, and it is here to be lived',
      new Date('2021, 08, 20')
    ),
  ];

  constructor() {
    console.log(this.quotes);
  }

  ngOnInit(): void {}

  // to show or hide create quote form
  displayCreateQuoteForm() {
    this.createQuoteForm === true
      ? (this.createQuoteForm = false)
      : (this.createQuoteForm = true);
  }

  // onSubmit form add quote
  onSubmit() {
    this.quotes.push(
      new Quote(
        Math.floor(Math.random() * 100),
        this.formQuote.value.author,
        this.formQuote.value.createdBy,
        this.formQuote.value.quote,
        new Date()
      )
    );
    this.formQuote.reset();
  }
}
