import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import {

    CountryServiceProxy,
    CountryDto,
    CountryDtoPagedResultDto,
} from '../../shared/service-proxies/service-proxies';
@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    countries: CountryDto[];
    constructor(private itemService: ItemService,
        private _countryService: CountryServiceProxy) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();

        this._countryService
            .getAll('name', undefined, 1000)
            .subscribe((result: CountryDtoPagedResultDto) => {
                this.countries = result.items;
            })
    }
}
