import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor(private storage : AngularFireStorage){}

  async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
      const path = `yt/${file.name}`
      const uploadTask =await this.storage.upload(path,file)
      const url = await uploadTask.ref.getDownloadURL()
      console.log(url)  
    }
}

ngOnInit(): void {
  this.slides[0] = {
    id: 0,
    src: './assets/img/angular.jpg',
    title: 'First slide',
    subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
  };
  this.slides[1] = {
    id: 1,
    src: './assets/img/react.jpg',
    title: 'Second slide',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
  this.slides[2] = {
    id: 2,
    src: './assets/img/vue.jpg',
    title: 'Third slide',
    subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
  }
}
}


