import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mesArticles=[
    {
    type: 'article',
    title: 'Galette des rois canibales : mythe ou réalité?',
    content: 'Les galettes des rois sont connues pour être délicieuses, mais saviez-vous qu\'elles ont une face cachée ? En effet, certaines galettes des rois sont de véritables cannibales et n\'hésitent pas à manger d\'autres galettes pour assouvir leur faim insatiable. C\'est un véritable problème dans le monde des desserts royaux ! Heureusement, il existe des groupes de soutien pour les galettes cannibales qui cherchent à se soigner. Nous devons tous prendre conscience de cette réalité effrayante et aider ces galettes à vaincre leur addiction à manger leurs propres congénères. Sinon, qui sait quel sort les attendra lors de la prochaine fête de l\'Épiphanie ?'
   }
  ];
  onArticleAdded(articleData:{articleTitle:string,articleContent:string}){ //! ici on type la variable qu'on attend en paramètre de la fonction
    this.mesArticles.push(
      {
        type:'article',
        title: articleData.articleTitle,
        content:articleData.articleContent
      }
    )
  }
  onBrouillonAdded(brouillonData:{articleTitle:string,articleContent:string}){ //! ici on type la variable qu'on attend en paramètre de la fonction
    this.mesArticles.push(
      {
        type:'brouillon',
        title: brouillonData.articleTitle ,
        content: brouillonData.articleContent
      }
    )
  }
}
