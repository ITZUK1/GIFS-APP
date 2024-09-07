import { Injectable } from "@angular/core";

@Injectable ({providedIn: 'root' })
export class GifsService{

    private_tagsHistory: string[] = [];


    constructor() {}

    get tagsHistory () {
        return [...this.private_tagsHistory];
    }

    searchTag (tag: string):void{
        this.private_tagsHistory.unshift(tag);
        console.log(this.tagsHistory)
    }


}