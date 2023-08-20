import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Firestore, collection, addDoc, and } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  constructor(
    private firestore: Firestore,
    private router: Router,
    private userService: UserService,
    private fireStorage: AngularFireStorage,
    private snack : MatSnackBar,
  ) {}
  url : any = 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=';
  userId: string | any = '';
  username : string | any = ''
  user = this.userService.currentUserProfile$.subscribe(
    (user) => (this.userId = user?.uid, this.username = user?.displayName )
  );

  async upload(event: any) {
    const file = event.target.files[0];
    this.snack.open('Uploading image...', 'OK  ', {
      duration: 3500,
    })
    if (file) {
      const path = `images/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      this.url = await uploadTask.ref.getDownloadURL()
      
      
    }
  }
  addPost(f: any) {
    if (!this.user) return;
    const collectionInstance = collection(this.firestore, 'posts');

    from(
      addDoc(collectionInstance, { ...f.value, image: this.url,  uid: this.userId , name : this.username })
    ).subscribe(() => this.router.navigate(['posts']));
  }
}
