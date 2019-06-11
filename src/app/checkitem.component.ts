import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-checkitem',
    templateUrl: './checkitem.component.html',
    styleUrls: ['./checkitem.component.css']
})
export class CheckItemComponent implements OnChanges {
    @Input() IsCheck: boolean;
    @Input() Name: string;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void {
        // this.IsCheck = !this.IsCheck;
        console.log(this.IsCheck);
    }

    onClick() {
        this.IsCheck = !this.IsCheck;
        this.ratingClicked.emit(` ${this.Name} clicked = ${this.IsCheck} `);
    }
}