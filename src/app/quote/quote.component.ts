import { Quote } from './../models/quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  createQuoteForm = false;
  // cardWithHighestLikes = false;
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
      'Mary Jack',
      'Every moment is a fresh beginning',
      new Date('2021, 08, 20')
    ),
    new Quote(
      Math.floor(Math.random() * 100),
      'Kate Winslet ',
      'John Warutere',
      'Life is short, and it is here to be lived',
      new Date('2021, 08, 19')
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

  // add quote
  createNewQuote(quote) {
    let quoteId = Math.floor(Math.random() * 100);
    this.quotes.push(
      new Quote(
        quoteId,
        quote.author,
        quote.createdBy,
        quote.quoteDescription,
        new Date()
      )
    );
  }

  // view quote details
  viewDetails(index) {
    this.quotes[index].viewQuoteDetails = !this.quotes[index].viewQuoteDetails;
  }

  // delete a quote
  deleteTheQuote(deleteQuoteEvent, index) {
    if (deleteQuoteEvent) {
      this.quotes.splice(index, 1);
    }
  }

  // upvote a quote
  upVoteQuote(upVoteQuoteEvent, index) {
    if (upVoteQuoteEvent) {
      this.quotes[index].likes++;
    }

    console.log(this.getQuoteWithHighestLikes())
  }

  // downvote a quote
  downVoteQuote(downVoteQuoteEvent, index) {
    if (downVoteQuoteEvent) {
      this.quotes[index].dislikes--;
    }
  }

  // getting the quote with the highest likes from the array
  getQuoteWithHighestLikes() {
    let quoteWithHighestLikes = this.quotes[0];
    for (let i = 0; i < this.quotes.length; i++) {  
      if (this.quotes[i].likes > quoteWithHighestLikes.likes) {
        quoteWithHighestLikes = this.quotes[i];
      }
    }
    return quoteWithHighestLikes;
  }

}
