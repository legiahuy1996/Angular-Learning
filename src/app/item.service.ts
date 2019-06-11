import { Injectable } from "@angular/core";
import { Iitem } from "../item";

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    getItem(): Iitem[] {
        return [
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
            },
            {
                "ID": 3,
                "value": "three",
                "imageSrc": "https://ttol.vietnamnetjsc.vn/images/2018/05/25/13/40/net-cuoi-be-gai-8-1527053440037953986965.jpg",
                "Amount": 3000000000,
                "Code": "xxa-003",
                "Name": "item3",
                "IsCheck": false
            }
        ];
    }
}