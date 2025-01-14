import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../app/model/Product';
import {FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [FormsModule,NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  // L'état du mode
  editMode:boolean=false;
  productToEdit:Product={name:"",quantity:0,price:0}

  // List of products
  products : Product []=[]

  // Le nouveau produit à ajouter
  newProduct:Product={name:"",quantity:0,price:0};

  indexEdit=-1;


  constructor(private router:Router){
    const productExample :Product ={name:"Caméra",quantity:5,price:150};
    this.products.push(productExample);
  }


  logout(){
    this.router.navigate(['/login'])
  }

  deleteProduct(index:number){
    this.products.splice(index,1);
  }

  toggleMode(productToEdit:Product,indexEdit:number){
    this.editMode=true;
    this.productToEdit=productToEdit;
  }

  AddProduct(product:Product){
    let validProduct=true;
    if(!product.name){
      validProduct=false;
      alert("name of product is no valid");
    }
    if(product.quantity==0){
      validProduct=false;
      alert("quantity is null");
    }
    if(product.price==0){
      validProduct=false;
      alert("price is null");
    }
    if(validProduct){
      const newProd:Product={name:product.name,quantity:product.quantity,price:product.price};
      this.products.push(newProd);
      this.newProduct.name="";
      this.newProduct.quantity=0;
      this.newProduct.price=0;
    }
   
  }


  editProduct(index:number){
    let validProduct=true;
    if(!this.productToEdit.name){
      validProduct=false;
      alert("name of product is no valid");
    }
    if(this.productToEdit.quantity==0){
      validProduct=false;
      alert("quantity is null");
    }
    if(this.productToEdit.price==0){
      validProduct=false;
      alert("price is null");
    }
    if(validProduct){
      this.products[index]=this.productToEdit;
      this.editMode=false;
      this.indexEdit=index;
    }


  }

}
