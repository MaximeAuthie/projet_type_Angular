import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-control',
  templateUrl: './blog-control.component.html',
  styleUrls: ['./blog-control.component.css']
})
export class BlogControlComponent {

  //! Variables qui contiennent les saisies du formulaire via ng-model
  newArticleTitle = '';
  newArticleContent = '';
  @ViewChild('articleContentInput', {static:true}) articleContentInput:ElementRef; //Avec ViewChild, il est nécessaire de déclarer la variable avec un décorateur //!ElementRef = une référence à récupérer dans le html
  //? static:true sert à rendre l'élément disponible 100% du temps pour Angular
  //! Ici, je déclare mes émits. Ils vont être utilités pour remonter les propriétés de l'article ou du brouillon saisi dans le formulaire vers le composant parent (ici app)
  // On peut utiliser un alias pour changer le nom de l'évènement à utiliser dans le template du composant parent
  @Output('artCreated') articleCreated = new EventEmitter<{articleTitle:string, articleContent:string}>(); //Output() signifie que l'information attendue va venir du composant parent
  @Output() brouillonCreated = new EventEmitter<{articleTitle:string, articleContent:string}>(); //? EventEmitter permet de déclarer l'évènement

  // onAddArticle(laRef) { //! Version ngmodel

  //   this.articleCreated.emit({articleTitle : this.newArticleTitle, articleContent: this.newArticleContent}); //? .emit() permet de déclencher l'évènement
  // }
  onAddArticle(laRef) { //! Version référence locale
    console.log(laRef);
    console.log(laRef.value);
    this.articleCreated.emit({articleTitle : laRef.value, articleContent: this.newArticleContent}); //? .emit() permet de déclencher l'évènement
  }

  // onAddBrouillon() { //! Version ngmodel
  //   this.brouillonCreated.emit({articleTitle: this.newArticleTitle, articleContent: this.newArticleContent});
  // }

  onAddBrouillon(laRef, articleContentInput: HTMLInputElement) { //!version viewChild //?ici 'articleContentInput: HTMLInputElement' fait référence au @viewChild
    console.log(articleContentInput);
    console.log(this.articleContentInput.nativeElement.value);

    this.brouillonCreated.emit({articleTitle: laRef.value, articleContent: this.articleContentInput.nativeElement.value});
  }
}
