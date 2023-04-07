export class ProductModel {
    img: string;
    title: string;
    button: string;
    link: string;

    constructor(img: string, title: string, button: string, link: string) {
        this.img = img;
        this.title = title;
        this.button = button;
        this.link = link;
    }
}