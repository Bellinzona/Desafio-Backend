
class ProductManager {

    static id = 0;

    constructor() {
        this.products = [];
    }

    addProduct(titulo, precio, img, codigo, stock){

        if(!titulo || !precio || !img || !codigo || !stock){
            console.log("Todos los campos son obligatorios"); 
            return;
        }


        if(this.products.some(item => item.codigo === codigo)) {
            console.log("El código debe ser único.. o todos moriremos!");
            return;
        }

        const newProduct = {
            id: ++ProductManager.id,
            titulo, 
            precio,
            img,
            codigo, 
            stock
        }

    
        this.products.push(newProduct);
    }

    getProducts() {
        return this.products; 
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if(!product) {
            console.error("Not Found!, maldita rata de dos patas!"); 
        } else {
            console.log(product);
        }
    }
}



const manager = new ProductManager(); 

manager.addProduct("Fideos", 1200, "Fideos.png", "twadcased", 15);
manager.addProduct("Milanesa", 5200, "Milanesa.png", "esdsad", 10);
manager.addProduct("Milanesa de pollo", 2200, "milanesaDePollo.png", "dsda", 11);

console.log(manager.getProducts());


console.log("Obtener Producto por ID ");
manager.getProductById(1);
