import { Component } from '@angular/core';
import { NewsComponent } from "../news/news.component";
import { NewsUiComponent } from "../news-ui/news-ui.component";

@Component({
  selector: 'app-news-list',
  imports: [NewsComponent, NewsUiComponent],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent {

  newsList = [
    {
      id: 1,
      title: 'História De São Bento do Sul',
      description: 'No século passado, a Cia. Colonizadora com sede em Hamburgo, mesmo não mais possuindo terras na região da, então, Colônia Dona Francisca (hoje Joinville), continuava a embarcar colonos para a região.',
    },
    {
      id: 2,
      title: 'Campo Alegre, o paraíso da serra',
      description: 'Uma pequena e charmosa cidade localizada em meio às campinas e vales no Norte de Santa Catarina, ligando o litoral ao clima serrano, ao longo da formosa histórica Estrada Imperial Dona Francisca. A vida no campo em meio a uma beleza natural e exuberante encanta os turistas com o aconchego de seus antigos casarões, produtos coloniais, artesanato e uma deliciosa comida caseira em fogão à lenha. Esse verdadeiro Paraíso da Serra também é o destino certo para os amantes da natureza e apreciadores de esporte de aventura. ',
    },
    {
      id: 3,
      title: 'Rio Negrinho, a cidade dos trilhos',
      description: 'Construída pelas mãos de trabalhadores e desbravadores, Rio Negrinho é repleta de belezas naturais, atrativos turísticos, culturais e históricos. Aqui você pode optar por momentos de tranquilidade e descanso, ou de aventura e adrenalina.'
    }
  ];
}
