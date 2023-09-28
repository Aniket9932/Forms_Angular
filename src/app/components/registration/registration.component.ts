import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.metaData.controls['batchType'].valueChanges.subscribe((res) => {
      if (res === 'Option 2') {
        this.metaData.controls['subType'].setValidators(Validators.required);
      } else {
      }
    });
  }
  metaData: FormGroup = new FormGroup({
    location: new FormControl('', [Validators.required]),
    batchType: new FormControl('', [Validators.required]),
    subType: new FormControl(''),
    formType: new FormControl(''),
    year: new FormControl(''),
    julian: new FormControl(''),
    toteNo: new FormControl(''),
    cbh: new FormControl(''),
    kfp: new FormControl(''),
    note: new FormControl(''),
    holdBatch: new FormControl(''),
    brightenImage: new FormControl(''),
  });

  fileName: string = '';
  fileType: string = '';

  scan() {
    console.log('Hello!');
  }

  fileUpload(event: any) {
    event.preventDefault();
    this.fileName = event.target.files[0].name;
    this.fileType = event.target.files[0].type.split('/')[1];

    if (this.fileType !== 'pdf') {
      this.fileName = 'File type not supported';
      this.fileType = '';
      return;
    }

    console.log(event.target.files[0]);
    console.log(this.fileType);
    console.log(this.fileName);
  }
}
