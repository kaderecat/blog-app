import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ProfileUser } from '../../models/User';
import { UserService } from 'src/app/services/user.service';
import {
  AngularFireStorage,
} from '@angular/fire/compat/storage';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private usersService: UserService,
    private fb: FormBuilder,
    private fireStorage: AngularFireStorage,
    private snack : MatSnackBar
  ) {}
  user$ = this.usersService.currentUserProfile$;

  profileForm = this.fb.group({
    uid: [''],
    displayName: [''],
    firstName: [''],
    lastName: [''],
  });

  ngOnInit(): void {
    this.usersService.currentUserProfile$.subscribe((user) =>
      this.profileForm.patchValue({ ...user })
    );
  }

  saveProfile() {
    const { uid, ...data }: ProfileUser | any = this.profileForm.value;

    if (!uid) return;

    this.usersService.updateUser({ uid, ...data }).subscribe();
  }

   async upload(event: any) {
    const { photoURL, ...data }: ProfileUser | any = this.profileForm.value;
   const file = event.target.files[0]
   this.snack.open('Uploading image...', 'OK  ', {
    duration: 5000,
  })
   if(file){
     const path = `images/${file.name}`
     const uploadTask =await this.fireStorage.upload(path,file)
     const url = await uploadTask.ref.getDownloadURL()
     this.usersService.updateUser({photoURL: url , ... data})
   }

    }


}
