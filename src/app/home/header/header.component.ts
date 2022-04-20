import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  arr = [
    {
      isOpen: false,
      text: 'sada',
      id: 1,
    },
  ];
  history=[
    {
      id:1,
      text:'iphone 13 pro'
    },
    {
      id:2,
      text:'macbook air m1'
    },
    {
      id:3,
      text:'samsung galaxy note'
    },
  ]
  input = false;
  search: string = '';
  itemSave = ''
  text: any;
  clickme() {
    console.log('aa')
    this.history = this.history.filter( e => console.log( e.text.search(this.search)))
  }
  clearFilters(item: any) {
    this.arr = this.arr.filter((e) => e.text !== item.text);
    this.search = '';
  }
  edit(id : any) {
    const index =  this.arr.findIndex(e => e.id === id)
    this.arr[index].isOpen =true
  }
  save(item: any) {
    const index = this.arr.findIndex(e => e.id === item)
    this.arr[index].text = this.itemSave
    this.arr[index].isOpen = false

    this.itemSave = ''
  }


  constructor() { }

  ngOnInit(): void {
  }

}
