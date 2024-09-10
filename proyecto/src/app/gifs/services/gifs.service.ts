import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Searchresponse, Gif } from '../interfaces/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {

    public giflist: Gif[] = [];
    private _tagsHistory: string[] = [];
    private apikey: string = 'Y00w9FLELLMmD0ofcadzfiB43vednajD';
    private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

    constructor(private http: HttpClient) { }

    get tagsHistory() {
        return [...this._tagsHistory];
    }

    private organizeHistory(tag: string) {
        tag = tag.toLowerCase();

        if (this._tagsHistory.includes(tag)) {
            this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
        }

        this._tagsHistory.unshift(tag);
        this._tagsHistory = this._tagsHistory.splice(0, 10);
    }

    searchTag(tag: string): void {
        if (tag.length === 0 || this._tagsHistory.includes(tag)) return;
        this.organizeHistory(tag);

        const params = new HttpParams()
            .set('api_key', this.apikey)
            .set('limit', '10')
            .set('q', tag);

        this.http.get<Searchresponse>(`${this.serviceUrl}/search`, { params })
            .subscribe({
                next: (resp) => {
                    this.giflist = resp.data;
                    console.log({ gifs: this.giflist });
                },
                error: (err) => {
                    console.error('Error al realizar la búsqueda de GIFs', err);
                }
            });
    }
}
