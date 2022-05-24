import {CommonModule, registerLocaleData} from '@angular/common';
import localePtBr from "@angular/common/locales/pt";
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CadastroUsuarioComponent} from './cadastro-usuario/cadastro-usuario.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

registerLocaleData(localePtBr, "pt", localePtBr);


@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [FormBuilder, {provide: LOCALE_ID, useValue: "pt-Br"}],
  bootstrap: [AppComponent]
})
export class AppModule {}
