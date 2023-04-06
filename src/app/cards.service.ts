import { HttpClient } from "@angular/common/http"
import { CardItemModel } from "./card-display.model"

export class CardsService{
    private baseUrl:string = "https://snapchat-app-c7b84-default-rtdb.firebaseio.com/"
    private cardsEndPoint:string = "cards.json"

    constructor(private http:HttpClient) {

    }

    getCards() {
        return this.http.get<CardItemModel []>(this.baseUrl + this.cardsEndPoint);
    }
}