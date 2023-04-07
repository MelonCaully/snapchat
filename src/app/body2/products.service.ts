import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model";


@Injectable(
    {providedIn: 'root'}
)
export class ProductsService{
    private baseUrl:string = "https://snapchat-app-c7b84-default-rtdb.firebaseio.com/";
    private productsEndPoint = "Products.json";

    constructor(private http:HttpClient){

    }

    getProducts(){
        return this.http.get<ProductModel []>(this.baseUrl + this.productsEndPoint);
    }

    //getProduct(index:number) {
        //return this.http.get<ProductModel>(this.baseUrl + 'products' + '/' + index + '.json');
    //}
}