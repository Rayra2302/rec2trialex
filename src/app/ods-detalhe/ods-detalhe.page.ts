import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ods-detalhe',
  templateUrl: './ods-detalhe.page.html',
  styleUrls: ['./ods-detalhe.page.scss'],
})
export class OdsDetalhePage implements OnInit {

  ods: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav.extras.state) {
        this.ods = getNav.extras.state.paramOds;
      }
    });
  }
}
