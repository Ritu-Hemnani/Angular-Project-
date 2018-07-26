import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { IndexSliderComponent } from './index/index-slider/index-slider.component';
import { ContentsComponent } from './index/contents/contents.component';
import { IndexTestimonialComponent } from './index/index-testimonial/index-testimonial.component';
import { PackagesComponent } from './shared/packages/packages.component';
import { ClientsComponent } from './shared/clients/clients.component';
import { IndexTypesFundingComponent } from './index/index-types-funding/index-types-funding.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndexExecutionProfitComponent } from './index/index-execution-profit/index-execution-profit.component';
import { CrowdFundingComponent } from './index/crowd-funding/crowd-funding.component';
import { ContactTextComponent } from './contactContent/contact-text/contact-text.component';
import { ContactDetailsComponent } from './contactContent/contact-details/contact-details.component';
import { ContactFormComponent } from './contactContent/contact-form/contact-form.component';
import { ContactWrapperComponent } from './contact/contact-wrapper/contact-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuBarComponent,
    LoginPopupComponent,
    IndexSliderComponent,
    ContentsComponent,
    IndexTestimonialComponent,
    PackagesComponent,
    ClientsComponent,
    IndexTypesFundingComponent,
    FooterComponent,
    IndexExecutionProfitComponent,
    CrowdFundingComponent,
    ContactTextComponent,
    ContactDetailsComponent,
    ContactFormComponent,
    ContactWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
