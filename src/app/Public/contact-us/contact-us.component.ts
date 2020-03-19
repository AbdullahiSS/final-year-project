import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactUs } from '../contact-us'
import { ContactUsService } from '../contact-us.service'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.sass']
})
export class ContactUsComponent implements OnInit {

  contactForm: FormGroup;
  state: string;

  constructor(private formBuilder: FormBuilder, private cs: ContactUsService) { }


  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.minLength(6)]],
      'email': ['', [Validators.required, Validators.email]],
      'tel': ['', Validators.required],
      'department': ['', Validators.required],
      'subject': [''],
      'message': ['', Validators.required]
    });

  }

  onSubmit() {
    this.cs.sendRequest({
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      tel: this.contactForm.value.tel,
      department: this.contactForm.value.department,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    })

    this.contactForm.reset();
    console.log(this.contactForm);
  }

  // changeHandler(e) {
  //   this.state = e;
  // }
}
