import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoodsInterfaces } from 'src/app/core/interfaces/goods.interfaces';
import { GoodsService } from 'src/app/core/services/goods.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  GoodsList: Array<GoodsInterfaces>;
  GoodsData: GoodsInterfaces;

  public search: string;
  
  constructor(
    private GoodsService: GoodsService
  ){}

  ngOnInit(): void {
    this.getGoods()
  }

  private getGoods(): void {
    this.GoodsService.getGoods()
      .subscribe(data => {
        console.log(data)
        this.GoodsList = data;
      },
        error => console.error(error)
      )
  }
 
}

