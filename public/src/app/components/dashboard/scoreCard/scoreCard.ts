import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'dash-score',
    templateUrl: './scoreCard.html',
    styleUrls: ['./scoreCard.css']    
})
export class ScoreCardComponent implements OnInit {
    @Input() score: number
    @Input() heading: string
    @Input() icon: string
    @Input() alertColor: string

    constructor() { }
    ngOnInit() { }
}