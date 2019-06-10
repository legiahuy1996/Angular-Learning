import { Component } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./app.component.css']
})
export class ItemComponent {
    showImage: boolean = false;
    imgWidth: number = 50;
    imgMargin: number = 2;
    items: any[] = [
        {
            "ID": 1,
            "value": "one",
            "imageSrc": "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-9-1527053440039156820618.jpg"
        },
        {
            "ID": 2,
            "value": "two",
            "imageSrc": "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-8-1527053440037953986965.jpg"
        }
    ];
    toggleButton(): void {
        this.showImage = !this.showImage;
    };
}
