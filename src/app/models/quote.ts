export class Quote {
  viewQuoteDetails: boolean;
  constructor(
    public id: number,
    public author: string,
    public createdBy: string,
    public quoteDescription: string,
    public createdAt: Date,
    public likes: number = 0,
    public dislikes: number = 0
  ) {
    this.viewQuoteDetails = false;
  }
}
