import { Quote } from './../../models/quote';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() deleteQuoteEvent = new EventEmitter<Quote>();
  @Output() upVoteQuoteEvent = new EventEmitter<Quote>();
  @Output() downVoteEvent = new EventEmitter<Quote>();
  constructor() { }

  ngOnInit(): void {
  }

  // emit an event to the parent component to delete the quote
  deleteQuote(quote: Quote) {
    this.deleteQuoteEvent.emit(quote);
  }

  // emit an event to the parent component to upvote the quote
  upVoteQuote(quote: Quote) {
    this.upVoteQuoteEvent.emit(quote);
  }

  // emit an event to the parent component to downvote the quote
  downVoteQuote(quote: Quote) {
    this.downVoteEvent.emit(quote);
  }

}
