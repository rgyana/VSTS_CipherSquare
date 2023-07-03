import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SortPanelComponent } from './sort-panel/sort-panel.component';
import { TableType1Component } from './table-type1/table-type1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalType1Component } from './modal-type1/modal-type1.component';
import { BasicDetailsApprovedComponent } from './modal-type1-components/basic-details-approved/basic-details-approved.component';
import { BasicDetailsUpdateComponent } from './modal-type1-components/basic-details-update/basic-details-update.component';
import { ResidentialInfoApprovedComponent } from './modal-type1-components/residential-info-approved/residential-info-approved.component';
import { ResidentialInfoUpdateComponent } from './modal-type1-components/residential-info-update/residential-info-update.component';
import { BusinessInfoApprovedComponent } from './modal-type1-components/business-info-approved/business-info-approved.component';
import { BusinessInfoUpdateComponent } from './modal-type1-components/business-info-update/business-info-update.component';
import { PanDetailsComponent } from './modal-type1-components/pan-details/pan-details.component';
import { TablePanDetailsComponent } from './modal-type1-components/table-pan-details/table-pan-details.component';
import { AddressProofComponent } from './modal-type1-components/address-proof/address-proof.component';
import { SecondaryProofComponent } from './modal-type1-components/secondary-proof/secondary-proof.component';
import { BankVerificationComponent } from './modal-type1-components/bank-verification/bank-verification.component';
import { KycModeComponent } from './modal-type1-components/kyc-mode/kyc-mode.component';
import { VideoVerificationComponent } from './modal-type1-components/video-verification/video-verification.component';
import { NameMatchResultComponent } from './modal-type1-components/name-match-result/name-match-result.component';
import { ForgeryResponseComponent } from './modal-type1-components/forgery-response/forgery-response.component';
import { ThreaholdSettingsPanelComponent } from './threahold-settings-panel/threahold-settings-panel.component';
import { ViewDetailsPanelComponent } from './view-details-panel/view-details-panel.component';
import { ModalPreviewComponent } from './modal-preview/modal-preview.component';
import { OtpModalComponent } from './otp-modal/otp-modal.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { UserListTableComponent } from './user-list-table/user-list-table.component';
import { UserAddPanelComponent } from './user-add-panel/user-add-panel.component';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './loader/loader.component';
import { UpdateMobileNumberComponent } from './modal-type1-components/update-mobile-number/update-mobile-number.component';
import { TableAdrsProofDetailsComponent } from './modal-type1-components/table-adrs-proof-details/table-adrs-proof-details.component';


@NgModule({
  entryComponents: [
    ModalType1Component
  ],
  declarations: [
    SortPanelComponent,
    TableType1Component,
    ModalType1Component,
    BasicDetailsApprovedComponent,
    BasicDetailsUpdateComponent,
    ResidentialInfoApprovedComponent,
    ResidentialInfoUpdateComponent,
    BusinessInfoApprovedComponent,
    BusinessInfoUpdateComponent,
    PanDetailsComponent,
    TablePanDetailsComponent,
    AddressProofComponent,
    SecondaryProofComponent,
    BankVerificationComponent,
    KycModeComponent,
    VideoVerificationComponent,
    NameMatchResultComponent,
    ForgeryResponseComponent,
    ThreaholdSettingsPanelComponent,
    ViewDetailsPanelComponent,
    ModalPreviewComponent,
    OtpModalComponent,
    UserListTableComponent,
    UserAddPanelComponent,
    AddUserModalComponent,
    EditUserModalComponent,
    LoaderComponent,
    UpdateMobileNumberComponent,
    TableAdrsProofDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlatpickrModule.forRoot(),
    CoreModule,
    SharedModule,
    NgxPaginationModule,
    NgbDatepickerModule,
    RouterModule,
    NgOtpInputModule,
    NgbPaginationModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 15000, // 15 seconds
      progressBar: true,
    }),
  ],
  exports: [
    SortPanelComponent,
    TableType1Component,
    ModalType1Component,
    ThreaholdSettingsPanelComponent,
    ViewDetailsPanelComponent,
    OtpModalComponent,
    UserListTableComponent,
    UserAddPanelComponent,
    AddUserModalComponent,
    EditUserModalComponent,
    LoaderComponent
  ]
})
export class FeaturesModule { }
