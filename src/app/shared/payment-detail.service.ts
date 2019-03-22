import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  list: PaymentDetail[];
  readonly rootUrl = 'http://localhost:64056/api/';
  constructor(private Http: HttpClient) { }

  postePaymentDetail(formData: PaymentDetail) {

    return this.Http.post(this.rootUrl + 'PaymentDetail', formData);
  }
  putPaymentDetail(formData: PaymentDetail) {

    return this.Http.put(this.rootUrl + 'PaymentDetail/' + this.formData.PMId, this.formData);
  }
  deletePaymentDetail(id) {

    return this.Http.delete(this.rootUrl + 'PaymentDetail/' +id);
  }
  refrechList() {
    this.Http.get(this.rootUrl + 'PaymentDetail')
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }

}
