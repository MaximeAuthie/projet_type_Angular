import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SuperComponent } from './super/super.component';
import { CoolComponent } from './cool/cool.component';
import { LesAmisComponent } from './les-amis/les-amis.component';
import { UnAmiComponent } from './un-ami/un-ami.component';
import { BlogControlComponent } from './blog-control/blog-control.component';
import { ArticleElementComponent } from './article-element/article-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperComponent,
    CoolComponent,
    LesAmisComponent,
    UnAmiComponent,
    BlogControlComponent,
    ArticleElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
