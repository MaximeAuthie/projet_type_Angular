import { Component, Input, SimpleChanges, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy} from '@angular/core'; //!Penser à ajouter Input pour pouvoir l'utiliser plus tard et toutes les classes des lifecycle hooks

@Component({
  selector: 'app-article-element',
  templateUrl: './article-element.component.html',
  styleUrls: ['./article-element.component.css']
})
export class ArticleElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, OnDestroy { //! Bonne pratique : implémenter toutes les classes des méthodes LifeCycleHooks
  //!En utilisant @input => je déclare la variable qui suit comme une props
  @Input('articleElement') element = { //entre ('') on donne un alias à ma variable 'element' => Je peut aussi laisser vide ('')
    type: '',
    title: '',
    content: ''
  };
  constructor() {
    console.log("constructor lancé");
  }
  ngOnChanges(changes:SimpleChanges) { //!pour typer la propriété comme étant un changement (objet) => penser à l'importer en haut du fichier
    console.log("ngOnChanges lancé");
    console.log(changes);

  }
  ngOnInit() {
    console.log("ngOnInit lancé");
  }
  ngDoCheck() {
    console.log("ngDoCheck lancé");
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit lancé");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked lancé");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit lancé");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked lancé");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy lancé");
  }
}
