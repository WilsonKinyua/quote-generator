import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote/quote-detail/quote-detail.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { QuoteFormComponent } from './quote/quote-form/quote-form.component';
import { DayCountPipe } from './pipes/day-count.pipe';
import { HighlightQuoteDirective } from './highlight-quote/highlight-quote.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomepageComponent,
    QuoteComponent,
    QuoteDetailComponent,
    FooterComponent,
    QuoteFormComponent,
    DayCountPipe,
    HighlightQuoteDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
