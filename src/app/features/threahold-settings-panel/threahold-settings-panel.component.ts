import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ThresholdSettingService } from 'src/app/shared/threshold-setting.service';

@Component({
  selector: 'app-threahold-settings-panel',
  templateUrl: './threahold-settings-panel.component.html',
  styleUrls: ['./threahold-settings-panel.component.css'],
})
export class ThreaholdSettingsPanelComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private thresholdSettingService: ThresholdSettingService
  ) {}

  ngOnInit(): void {
    // this.thresholdSettingService
    //   .getSettingsData()
    //   .subscribe((response: any) => {
    //     this.thresholdSettingsDataFromApi = response.result;
    //     console.log(this.thresholdSettingsDataFromApi);

    //     // Populating the raw data
    //     this.thresholdSettingsForm.patchValue({
    //       nameMatchMinValue:
    //         this.thresholdSettingsDataFromApi.nameMatchMinValue,
    //       nameMatchMaxValue:
    //         this.thresholdSettingsDataFromApi.nameMatchMaxValue,
    //       imgQualityValue: this.thresholdSettingsDataFromApi.imgQualityValue,
    //       videoMatchValue: this.thresholdSettingsDataFromApi.videoMatchValue,
    //       addressMatchValue:
    //         this.thresholdSettingsDataFromApi.addressMatchValue,
    //       videoVerificationMode:
    //         this.thresholdSettingsDataFromApi.videoVerificationMode,
    //       panapi: this.thresholdSettingsDataFromApi.panapi,
    //       voterapi: this.thresholdSettingsDataFromApi.voterapi,
    //     });
    //   });

    this.thresholdSettingService.getSettingsData().subscribe({
      next: (res: any) => {
        // Populating the raw data
        this.thresholdSettingsForm.patchValue({
          nameMatchMinValue: res.result.nameMatchMinValue,
          nameMatchMaxValue: res.result.nameMatchMaxValue,
          imgQualityValue: res.result.imgQualityValue,
          videoMatchValue: res.result.videoMatchValue,
          addressMatchValue: res.result.addressMatchValue,
          videoVerificationMode: res.result.videoVerificationMode,
          panapi: res.result.panapi,
          voterapi: res.result.voterapi,
        });
      },
    });
  }

  thresholdSettingsForm = this.formBuilder.group({
    nameMatchMinValue: [0],
    nameMatchMaxValue: [0],
    imgQualityValue: [0],
    videoMatchValue: [0],
    addressMatchValue: [0],
    videoVerificationMode: [0],
    panapi: [0],
    voterapi: [0],
  });

  onSaveBtnClicked() {
    this.thresholdSettingsForm.value;
  }
}
