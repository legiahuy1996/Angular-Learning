import { Component } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./app.component.css']
})
export class ItemComponent {
    items: any[] = [
        {
            "ID": 1,
            "value": "one"
        },
        {
            "ID": 2,
            "value": "two"
        }
    ];
}
