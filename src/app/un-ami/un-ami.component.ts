import { Component } from '@angular/core';

@Component({
  selector: 'app-un-ami',
  // ! On peut suppr le fichier html ?
  templateUrl: './un-ami.component.html',
  // template:`
  //           <div class="un-ami">
  //             <h5>☺︎Ici c'est un Ami</h5>
  //           </div>
  //          `,
  // ! On peut suppr le fichier css ?
  // styleUrls: ['./un-ami.component.css']
  styles:[`
  .un-ami{
    background-color: #85FFBD;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
}
.amiOn{
  color: chartreuse;
}
.amiOff{
  color: violet;
}
`]
})
export class UnAmiComponent {
  unAmiId:number= 99;
  unAmiStatus:string = 'off';
  unAmiTemplate:string='<p>LOL</p>';
  // Dans le LIFECYCLE d'un composant la fonction constructor va permettre d'executer du code 
  // Dès le début du composant (au moment ou il se construit)
  constructor(){
    this.unAmiStatus = Math.random()>0.5?'ON':'OFF';
  }

  getUnAmiStatus(){
    return this.unAmiStatus;
  }

  getColor(){
    // return this.unAmiStatus === 'ON' ? 'lightseagreen' : 'orangered'
    return this.unAmiStatus === 'ON' ? 'green' : 'red'
  }
}
