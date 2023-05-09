import { Component } from '@angular/core';

@Component({
  //! Le selector de base est similaire au element selector de CSS
  // selector: 'app-les-amis',
  //! Avec cette syntaxe [] le composant est appelé par un attribut html 
  //!<div app-les-amis></div>
  // selector:'[app-les-amis]',
  //! Avec la syntaxe des classe en css le composant est appelé avec une classe css
  //? ⚠️ par classe bof si sur un composant vous voulez hover en css
  selector:'app-les-amis',
  templateUrl: './les-amis.component.html',
  styleUrls: ['./les-amis.component.css']
})
export class LesAmisComponent {
  authorizeAmi = false ;
  lesAmisCreationStatus = '🥶 Aucun ami ?';
  amiName='Dr.Mario';
  amiCreated = false;
  mesAmis = ['Dr.mario','Steven Seagal'];


  constructor(){
    setTimeout(() => {
      this.authorizeAmi = true;
    }, 3000);
  }

  onCreationAmi(){
    // this.lesAmisCreationStatus = `🤙 un ami a été ajouté ! (${this.amiName})`;
    this.amiCreated = true;
    this.mesAmis.push(this.amiName);
  }

  // onUpdateAmiName(event:any){
  //   console.log(event);
  //   console.log(event.target.value);
  //   this.amiName = event.target.value;
  // }
  // ! Si on veut typer l'event 
  onUpdateAmiName(event:Event){
    console.log(event);
    console.log((<HTMLInputElement>event.target).value);
    // ? On peut explicitement préciser le type de l'event avec cette syntaxe en ts (casting)
    // ? Ici cela permet à ts de comprendre que nous connaissons le type de l'élement html de cet event
    this.amiName = (<HTMLInputElement>event.target).value;
  }
}
