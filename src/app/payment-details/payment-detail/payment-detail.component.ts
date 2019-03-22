import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toaster: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''

    };
  }
  onSubmit(form: NgForm) {
    if (form.value.PMid === 0) {
      this.insert(form);
    } else { this.update(form); }
  }
  insert(form: NgForm) {
    this.service.postePaymentDetail(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.toaster.success('Submitted successfully', 'Payment Detail Register');
        this.service.refrechList();
      },
        err => {
          console.log(err);
        }
      );
  }
  update(form: NgForm) {
    this.service.putPaymentDetail(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.toaster.info('Submitted successfully', 'Payment Detail up to date');
        this.service.refrechList();
      },
        err => {
          console.log(err);
        }
      );
  }

}
