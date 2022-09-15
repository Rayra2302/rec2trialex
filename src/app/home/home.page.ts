import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Iods } from '../models/iods';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  listaods: Iods[] = [
    {
      numero: 1,
      objetivo: 'Erradicação da pobreza',
      desc: 'Erradicar a pobreza em todas as formas e em todos os lugares ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-1.svg',
      pagina: '/um',
      favorito: false
    },
    {
      numero: 2,
      objetivo: 'Fome zero e agricultura sustentável ',
      desc: 'Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-2.svg',
      pagina: '/dois',
      favorito: false
    },
    {
      numero:  3,
      objetivo: 'Saúde e Bem-Estar',
      desc: 'Garantir o acesso à saúde de qualidade e promover o bem-estar para todos, em todas as idades ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-3.svg',
      pagina: '/tres',
      favorito: false
    },
    {
      numero:  4,
      objetivo: 'Educação de qualidade',
      desc: 'Garantir o acesso à educação inclusiva,de qualidade e equitativa, promover oportunidades de aprendizagem ao longo da vida para todos',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg',
      pagina: '/quatro',
      favorito: false
    },
    {
      numero:  5,
      objetivo: 'Igualdade de gênero',
      desc: 'Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-5.svg',
      pagina: '/cinco',
      favorito: false
    },
    {
      numero:  6,
      objetivo: 'Água potável e saneamento ',
      desc: 'Garantir a disponibilidade e a gestão sustentável da água potável e do saneamento para todos',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-6.svg',
      pagina: '/seis',
      favorito: false
    },
    {
      numero:  7,
      objetivo: 'Energia limpa e acessível',
      desc: 'Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-7.svg',
      pagina: '/sete',
      favorito: false
    },
    {
      numero:  8,
      objetivo: 'Trabalho decente e crescimento econômico',
      desc: 'Promover o crescimento econômico inclusivo e sustentável, o emprego pleno e produtivo e o trabalho digno para todos  ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-8.svg',
      pagina: '/oito',
      favorito: false
    },
    {
      numero:  9,
      objetivo: 'Indústria, inovação e infraestrutura ',
      desc: 'Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-9.svg',
      pagina: '/nove',
      favorito: false
    },
    {
      numero:  10,
      objetivo: 'Redução das desigualdades  ',
      desc: 'Reduzir as desigualdades no interior dos países e entre países ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-10.svg',
      pagina: '/dez',
      favorito: false
    },
    {
      numero:  11,
      objetivo: 'Cidades e comunidades sustentáveis ',
      desc: 'Tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentáveis ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-11.svg',
      pagina: '/onze',
      favorito: false
    },
    {
      numero:  12,
      objetivo: 'Consumo e produção responsáveis ',
      desc: 'Garantir padrões de consumo e de produção sustentáveis  ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-12.svg',
      pagina: '/doze',
      favorito: false
    },
    {
      numero:  13,
      objetivo: 'Ação contra a mudança global do clima ',
      desc: 'Adotar medidas urgentes para combater as alterações climáticas e os seus impactos ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-13.svg',
      pagina: '/treze',
      favorito: false
    },
    {
      numero:  14,
      objetivo: 'Vida na água ',
      desc: 'Conservar e usar de forma sustentável os oceanos, mares e os recursos marinhos para o desenvolvimento sustentável ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-14.svg',
      pagina: '/quatorze',
      favorito: false
    },
    {
      numero:  15,
      objetivo: 'Vida terrestre',
      desc: 'Proteger, restaurar e promovero uso sustentável dos ecossistemas terrestres.',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-15.svg',
      pagina: '/quinze',
      favorito: false
    },
    {
      numero:  16,
      objetivo: 'Paz, Justiça e Instituições Eficazes ',
      desc: 'Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável.',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-16.svg',
      pagina: '/deseseis',
      favorito: false
    },
    {
      numero:  17,
      objetivo: 'Parcerias e meios de implementação ',
      desc: 'Reforçar os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável ',
      imagem: 'https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-17.svg',
      pagina: '/desesete',
      favorito: false
    }
  ];

  exibirOds(ods: Iods){
    const navigationExtras: NavigationExtras = {state:{paramOds:ods}};
    this.router.navigate(['ods-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(ods: Iods) {
    const alert = await this.alertController.create({
      header: 'Ods interesasnte',
      message: 'Deseja colocar essa ods como interessante?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ods.favorito=false;
          }
        }, {
          text: 'Sim',
          handler: () => {
            ods.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'ODS adicionada como interessante...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
