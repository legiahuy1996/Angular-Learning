import { Component, OnInit } from '@angular/core';
import { Iitem } from '../item';
import { ItemService } from './item.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    title: string = 'itemList';
    errorMessage: string;
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
    items: Iitem[];
    constructor(private itemService: ItemService) {

    }
    toggleButton(): void {
        this.showImage = !this.showImage;
    };
    performFilter(filterBy: string): Iitem[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.items.filter((item: Iitem) => item.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message: string): void {
        this.title = 'item List:' + message;
    }
    ngOnInit(): void {
        this.itemService.getItem().subscribe(
            items => {
                this.items = items
                this.filteredItem = this.items;
            },
            error => this.errorMessage = <any>error
        );
    }
}
