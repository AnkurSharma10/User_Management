import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  title: String;
  id: number;

  isFormValid: boolean;

  designations = ['Business Analyst', 'Programmer Analyst', 'Quality Analyst', 'Design Analyst'];
  knownTechs = [
    'Java',
    'Angular',
    'AngularJS',
    'Python',
    'Go',
    'C',
    'C#',
    'MySQL',
    'NOSQL'
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      id: ['' ],
      name: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(50)]
      ],
      age: ['', [Validators.required, Validators.min(18)]],
      contact: [
        '',
        [
          Validators.required,
          Validators.min(7000000000),
          Validators.max(9999999999)
        ]
      ],
      gender: ['', Validators.required],
      designation: ['', Validators.required],
      knownTechs: ['', Validators.required]
    });
  }

  addUser(userData: User) {
    if (userData.id === null) {
      this.userService.addUser(userData).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error(error);
        }
      );
    } else {
      this.userService.updateUser(userData).subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error(error);
        }
      );
    }
    this.router.navigate(['/users']);
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    // console.log(this.id);
    if (this.id === undefined) {
      this.title = 'Add';
    } else {
      this.title = 'Edit';
      this.editUserSetData();
    }
  }

  editUserSetData() {
    this.userService.getUser(this.id).subscribe(user => {
      this.userForm.setValue({
        id: user.id,
        name: user.name,
        age: user.age,
        contact: user.contact,
        gender: user.gender,
        designation: user.designation,
        knownTechs: user.knownTechs
      });
    });
  }

  isValid() {
    return !(this.userForm.controls['id'].value == null ||
    this.userForm.controls['name'].value == null ||
    this.userForm.controls['age'].value == null ||
    this.userForm.controls['contact'].value == null ||
    this.userForm.controls['gender'].value == null ||
    this.userForm.controls['designation'].value == null ||
    this.userForm.controls['knownTechs'].value == null);
  }
}
