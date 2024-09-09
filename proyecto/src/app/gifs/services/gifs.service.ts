import { Injectable } from "@angular/core";



@Injectable ({providedIn: 'root' })
export class GifsService{

    _tagsHistory: string[] = [];

    private apikey: string ='Y00w9FLELLMmD0ofcadzfiB43vednajD';


    constructor() {}

    get tagsHistory () {
        return [...this._tagsHistory];
    }

    private organizeHistory(tag:string){
        tag = tag.toLowerCase();

        if ( this._tagsHistory.includes(tag) ) {
            this._tagsHistory = this._tagsHistory.filter( (oldtag) =>oldtag !== tag)
        }
        
        this._tagsHistory.unshift ( tag );
        this._tagsHistory = this._tagsHistory.splice(0,10);

    }


      async searchTag (tag: string):Promise<void>{

        if (tag.length === 0) return;
        this.organizeHistory(tag);

       /*  const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=Y00w9FLELLMmD0ofcadzfiB43vednajD&q=valorant&limit=10')
        const data =resp.json();
        console.log(data) */
    }


}
