import { Component } from '@angular/core';
import { Iitem } from '../item';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./app.component.css']
})
export class ItemComponent {
    itemName: string = "Huy";
    showImage: boolean = false;
    imgWidth: number = 50;
    imgMargin: number = 2;
    items: Iitem[] = [
        {
            "ID": 1,
            "value": "one",
            "imageSrc": "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg",
            "Amount": 1000000000
        },
        {
            "ID": 2,
            "value": "two",
            "imageSrc": "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-8-1527053440037953986965.jpg",
            "Amount": 2000000000
        }
    ];
    toggleButton(): void {
        this.showImage = !this.showImage;
    };
}
