import { PaymentDetail } from './../../shared/payment-detail.model';
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toaster: ToastrService) { }

  ngOnInit() {
    this.service.refrechList();
  }
  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({}, pd);
  }
  onDelete(PMid: number) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymentDetail(PMid)
        .subscribe(res => {
          this.toaster.warning('Deleted successfully', 'Payment Detail Register');
          this.service.refrechList();
        },
          err =>  console.log(err) );
    } 
  }
}
