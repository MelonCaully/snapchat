import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "./product.model";
import { AngularFireDatabase } from "@angular/fire/compat/database"


@Injectable(
    {providedIn: 'root'}
)
export class ProductsService{
    private baseUrl:string = "https://snapchat-app-c7b84-default-rtdb.firebaseio.com/";
    private productsEndPoint = "Products.json";

    constructor(private db: AngularFireDatabase){

    }

    getProducts(){
        return this.db.list<ProductModel>("products").valueChanges();
    }

    getProduct(index:number) {
        //return this.http.get<ProductModel>(this.baseUrl + 'products' + '/' + index + '.json');
    }

    addProduct(product: ProductModel) {
        this.db.list<ProductModel>("products").push(product);
    }
}