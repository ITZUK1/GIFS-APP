import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Searchresponse, Gif } from '../interfaces/gifs.interface';

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private readonly apiKey: string = 'Y00w9FLELLMmD0ofcadzfiB43vednajD';
  private readonly serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log('Gifs Service Ready');
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10); // Use slice instead of splice
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const history = localStorage.getItem('history');
    if (!history) return;

    this._tagsHistory = JSON.parse(history);
    if (this._tagsHistory.length > 0) {
      this.searchTag(this._tagsHistory[0]);
    }
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);

    this.http.get<Searchresponse>(`${this.serviceUrl}/search`, { params })
      .subscribe(resp => {
        this.gifList = resp.data;
        // Uncomment the line below if needed for debugging
        // console.log({ gifs: this.gifList });
      });
  }
}
