import { Component } from '@angular/core';
import { Iitem } from '../item';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {
    title: string = 'itemList';
    _listfiltered: string;
    get listfiltered() {
        return this._listfiltered;
    }
    set listfiltered(value: string) {
        this._listfiltered = value;
        this.filteredItem = this.listfiltered ? this.performFilter(this.listfiltered) : this.items;
    }
    showImage: boolean = false;
    imgWidth: number = 50;
    imgMargin: number = 2;
    filteredItem: Iitem[];
    items: Iitem[] = [
        {
            "ID": 1,
            "value": "one",
            "imageSrc": "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg",
            "Amount": 1000000000,
            "Code": "gbs-10",
            "Name": "item1",
            "IsCheck": true
        },
        {
            "ID": 2,
            "value": "two",
            "imageSrc": "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-8-1527053440037953986965.jpg",
            "Amount": 2000000000,
            "Code": "abb-002",
            "Name": "item2",
            "IsCheck": false
        }
    ];
    constructor() {
        this.filteredItem = this.items;
        this.listfiltered = "item1";
    }
    toggleButton(): void {
        this.showImage = !this.showImage;
    };
    performFilter(filterBy: string): Iitem[] {
        filterBy = filterBy.toLocaleLowerCase();
        const param = this.items.filter((item: Iitem) => { item.Name.toLocaleLowerCase().indexOf(filterBy) !== -1 });
        console.log(param);
        return this.items.filter((item: Iitem) => item.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message: string): void {
        this.title = 'item List:' + message;
    }
}
