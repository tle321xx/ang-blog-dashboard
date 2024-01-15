import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {

  // 5.
  categoryArray!: Array<any>

  // inject service
  constructor(private categoriesService: CategoriesService) {}
  // 2.
  ngOnInit(): void {
    this.categoriesService.loadData().subscribe((data) => {
      this.categoryArray = data;
      console.log(this.categoryArray)
    });
  }
  onSubmit(formData: NgForm) {
    let categoryData: Category = {
      category: formData.value.category,
    };

    this.categoriesService.saveData(categoryData);

    // 8. reset form หลังกรอกอัตโนมัติ
    formData.reset()

    // define obj
    // let subCategoryData = {
    //   subCategory: 'subCategory1',
    // };
    // // design query then handle callback

    // // top of scope เราจะไม่ใช้การเข้าถึงแบบด้านล่างเพราะต้องมีคำสั่ง collection
    // this.afs
    //   .collection('categories')
    //   .add(categoryData)
    //   .then((docRef) => {
    //     console.log(docRef);

    //     this.afs
    //       .doc(`categories/${docRef.id}`)
    //       .collection('subcategories')
    //       .add(subCategoryData);

    //     this.afs
    //       .collection('categories')
    //       .doc(docRef.id)
    //       .collection('subcategories')
    //       .add(subCategoryData)
    //       .then((docRef1) => {
    //         console.log(docRef1);

    //         this.afs
    //           .doc(`categories/${docRef.id}/subcategories/${docRef1.id}`)
    //           .collection('subcategories-deeper')
    //           .add(subCategoryData);

    //         this.afs
    //           .collection('categories')
    //           .doc(docRef.id)
    //           .collection('subcategories')
    //           .doc(docRef1.id)
    //           .collection('subcategories-deeper')
    //           .add(subCategoryData)
    //           .then((docRef2) => {
    //             console.log('Subcategories saved');
    //           });
    //       });
    //   })
    //   .catch((err) => console.log(err));
    // // console.log(categoryData)
  }
}
