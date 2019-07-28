import { Component, Injectable, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateserverService } from 'src/app/service/dateserver.service';
import { mimeType } from '../../../../../mime-type.validator';
import { SelectCity } from './selectCityAndArea';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbCalendarIslamicCivil,
  NgbDatepickerI18n
} from '@ng-bootstrap/ng-bootstrap';

const WEEKDAYS = ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'];
const MONTHS = [
  'محرم',
  'صفر',
  'ربيع الأول',
  'ربيع الآخر',
  'جمادى الأولى',
  'جمادى الآخرة',
  'رجب',
  'شعبان',
  'رمضان',
  'شوال',
  'ذو القعدة',
  'ذو الحجة'
];

@Injectable()
export class IslamicI18n extends NgbDatepickerI18n {
  getWeekdayShortName(weekday: number) {
    return WEEKDAYS[weekday - 1];
  }

  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }

  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.css'],
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarIslamicCivil },
    { provide: NgbDatepickerI18n, useClass: IslamicI18n }
  ]
})
export class IndividualsComponent implements OnInit, OnDestroy {
  model: NgbDateStruct;
  instituteForm: FormGroup;
  fileReaderPreview: string;
  unCurrInputRep = '';
  unCurrInputLett = '';
  unComplateForms = '';
  selectCity;
  @ViewChild('showMoadel') showMoadel: ElementRef;
  messageSuccessfuly;

  constructor(
    private server: DateserverService,
    private calendar: NgbCalendar
  ) {
    this.model = this.calendar.getToday();
  }

  ngOnInit() {
    this.instituteForm = new FormGroup({
      // General Information
      instituteName: new FormControl(null, {validators: [Validators.required]}),
      licensOfInstitute: new FormControl(null, {validators: [Validators.required]}),
      emailOfInstitute: new FormControl(null, {validators: [Validators.required]}),
      areas: new FormControl(null, { validators: [Validators.required] }),
      cities: new FormControl(null, { validators: [Validators.required] }),
      nameOfTheInstituteDirector: new FormControl(null, { validators: [Validators.required] }),
      numberOfTheInstituteDirector: new FormControl(null, {validators: [Validators.required]}),
      digitsOfTeachersInInstitute: new FormControl(null, {validators: [Validators.required]}),
      digitsOfClassesInInstitute: new FormControl(null, {validators: [Validators.required]}),
      digitsOfWomensInstitutes: new FormControl(null, {validators: [Validators.required]}),
      methodologyLetter: new FormControl(null, {validators: [Validators.required]}),

      // ما اسم المنهجية المطبقة؟
      isApplicableMethodology: new FormControl(false),
      nameOfApplicableMethodology: new FormControl(null),
      digitsOfYearsOfApplication: new FormControl(null),
      digitsOfBeneficiariesOfTheMethodology: new FormControl(null),
      digitsOfClassroomsForKids: new FormControl(null),
      numberOfCustomClassroomsForKids: new FormControl(null),
      methodologyReport: new FormControl(null),

      // بنين
      isBoys: new FormControl(false),
      digitsOfTeachersOfboysForMethodology: new FormControl(null),
      digitsOfBoysStudentsInTheInstitute: new FormControl(null),

      // بنات
      isGirls: new FormControl(false),
      digitsOfTeachersOfgirlsForMethodology: new FormControl(null),
      digitsOfGirlsStudentsInTheInstitute: new FormControl(null)
    });
  }

  onSavaForm() {
    if (this.instituteForm.invalid) {
      this.unComplateForms = 'بيانات غير مكتملة!';
      alert('بيانات غير مكتملة!');

    }else{

      if (this.instituteForm.value.nameOfApplicableMethodology == null)
      this.instituteForm.value.nameOfApplicableMethodology = 'لا يوجد!';

      if (this.instituteForm.value.digitsOfYearsOfApplication == null)
        this.instituteForm.value.digitsOfYearsOfApplication = 0;

      if (this.instituteForm.value.digitsOfBeneficiariesOfTheMethodology == null)
        this.instituteForm.value.digitsOfBeneficiariesOfTheMethodology = 0;

      if (this.instituteForm.value.digitsOfClassroomsForKids == null)
        this.instituteForm.value.digitsOfClassroomsForKids = 0;

      if (this.instituteForm.value.numberOfCustomClassroomsForKids == null)
        this.instituteForm.value.numberOfCustomClassroomsForKids = 0;

      if (this.instituteForm.value.digitsOfTeachersOfboysForMethodology == null)
        this.instituteForm.value.digitsOfTeachersOfboysForMethodology = 0;

      if (this.instituteForm.value.digitsOfBoysStudentsInTheInstitute == null)
        this.instituteForm.value.digitsOfBoysStudentsInTheInstitute = 0;

      if (this.instituteForm.value.digitsOfTeachersOfgirlsForMethodology == null)
        this.instituteForm.value.digitsOfTeachersOfgirlsForMethodology = 0;

      if (this.instituteForm.value.digitsOfGirlsStudentsInTheInstitute == null)
        this.instituteForm.value.digitsOfGirlsStudentsInTheInstitute = 0;

      this.server.reqOpnNewIns(
        // General Information
        this.instituteForm.value.instituteName,
        this.instituteForm.value.licensOfInstitute,
        this.instituteForm.value.emailOfInstitute,
        this.instituteForm.value.areas,
        this.instituteForm.value.cities,
        this.instituteForm.value.nameOfTheInstituteDirector,
        this.instituteForm.value.numberOfTheInstituteDirector,
        this.instituteForm.value.digitsOfTeachersInInstitute,
        this.instituteForm.value.digitsOfClassesInInstitute,
        this.instituteForm.value.digitsOfWomensInstitutes,
        this.instituteForm.value.methodologyLetter,

        // ما اسم المنهجية المطبقة؟
        this.instituteForm.value.isApplicableMethodology,
        this.instituteForm.value.nameOfApplicableMethodology,
        this.instituteForm.value.digitsOfYearsOfApplication,
        this.instituteForm.value.digitsOfBeneficiariesOfTheMethodology,
        this.instituteForm.value.digitsOfClassroomsForKids,
        this.instituteForm.value.numberOfCustomClassroomsForKids,
        this.instituteForm.value.methodologyReport,

        // بنين
        this.instituteForm.value.isBoys,
        this.instituteForm.value.digitsOfTeachersOfboysForMethodology,
        this.instituteForm.value.digitsOfBoysStudentsInTheInstitute,

        // بنات
        this.instituteForm.value.isGirls,
        this.instituteForm.value.digitsOfTeachersOfgirlsForMethodology,
        this.instituteForm.value.digitsOfGirlsStudentsInTheInstitute,
        `${this.model.year}-${this.model.month}-${this.model.day}`
      ).subscribe(data => {
        this.showMoadel.nativeElement.click();
        this.messageSuccessfuly = data['message'];
      },
      err => {
        console.log(err);
      });
    }

  }

  closeModals(){

    this.instituteForm.controls['instituteName'].reset();
    this.instituteForm.get('instituteName').updateValueAndValidity();

    this.instituteForm.controls['licensOfInstitute'].reset();
    this.instituteForm.get('licensOfInstitute').updateValueAndValidity();

    this.instituteForm.controls['emailOfInstitute'].reset();
    this.instituteForm.get('emailOfInstitute').updateValueAndValidity();

    this.instituteForm.controls['areas'].reset();
    this.instituteForm.get('areas').updateValueAndValidity();

    this.instituteForm.controls['cities'].reset();
    this.instituteForm.get('cities').updateValueAndValidity();

    this.instituteForm.controls['nameOfTheInstituteDirector'].reset();
    this.instituteForm.get('nameOfTheInstituteDirector').updateValueAndValidity();

    this.instituteForm.controls['numberOfTheInstituteDirector'].reset();
    this.instituteForm.get('numberOfTheInstituteDirector').updateValueAndValidity();

    this.instituteForm.controls['digitsOfTeachersInInstitute'].reset();
    this.instituteForm.get('digitsOfTeachersInInstitute').updateValueAndValidity();

    this.instituteForm.controls['digitsOfClassesInInstitute'].reset();
    this.instituteForm.get('digitsOfClassesInInstitute').updateValueAndValidity();

    this.instituteForm.controls['digitsOfWomensInstitutes'].reset();
    this.instituteForm.get('digitsOfWomensInstitutes').updateValueAndValidity();

    this.instituteForm.controls['methodologyLetter'].reset();
    this.instituteForm.get('methodologyLetter').updateValueAndValidity();

    ////////////////////////
      this.instituteForm.controls['nameOfApplicableMethodology'].reset();
      this.instituteForm.get('nameOfApplicableMethodology').updateValueAndValidity();

      this.instituteForm.controls['digitsOfYearsOfApplication'].reset();
      this.instituteForm.get('digitsOfYearsOfApplication').updateValueAndValidity();

      this.instituteForm.controls['digitsOfBeneficiariesOfTheMethodology'].reset();
      this.instituteForm.get('digitsOfBeneficiariesOfTheMethodology').updateValueAndValidity();

      this.instituteForm.controls['digitsOfClassroomsForKids'].reset();
      this.instituteForm.get('digitsOfClassroomsForKids').updateValueAndValidity();

      this.instituteForm.controls['numberOfCustomClassroomsForKids'].reset();
      this.instituteForm.get('numberOfCustomClassroomsForKids').updateValueAndValidity();

      this.instituteForm.controls['methodologyReport'].reset();
      this.instituteForm.get('methodologyReport').updateValueAndValidity();

      this.instituteForm.controls['digitsOfTeachersOfgirlsForMethodology'].reset();
      this.instituteForm.get('digitsOfTeachersOfgirlsForMethodology').updateValueAndValidity();

      this.instituteForm.controls['digitsOfGirlsStudentsInTheInstitute'].reset();
      this.instituteForm.get('digitsOfGirlsStudentsInTheInstitute').updateValueAndValidity();

      this.instituteForm.controls['digitsOfTeachersOfboysForMethodology'].reset();
      this.instituteForm.get('digitsOfTeachersOfboysForMethodology').updateValueAndValidity();

      this.instituteForm.controls['digitsOfBoysStudentsInTheInstitute'].reset();
      this.instituteForm.get('digitsOfBoysStudentsInTheInstitute').updateValueAndValidity();

      // isGirls
      this.instituteForm.controls['digitsOfTeachersOfgirlsForMethodology'].reset();
      this.instituteForm.get('digitsOfTeachersOfgirlsForMethodology').updateValueAndValidity();

      this.instituteForm.controls['digitsOfGirlsStudentsInTheInstitute'].reset();
      this.instituteForm.get('digitsOfGirlsStudentsInTheInstitute').updateValueAndValidity();

      // isBoys
      this.instituteForm.controls['digitsOfTeachersOfboysForMethodology'].reset();
      this.instituteForm.get('digitsOfTeachersOfboysForMethodology').updateValueAndValidity();

      this.instituteForm.controls['digitsOfBoysStudentsInTheInstitute'].reset();
      this.instituteForm.get('digitsOfBoysStudentsInTheInstitute').updateValueAndValidity();

      this.instituteForm.patchValue({ isGirls: false });
      this.instituteForm.get('isGirls').updateValueAndValidity();

      this.instituteForm.patchValue({ isBoys: false });
      this.instituteForm.get('isBoys').updateValueAndValidity();

      this.instituteForm.patchValue({ isApplicableMethodology: false });
      this.instituteForm.get('isApplicableMethodology').updateValueAndValidity();

  }

  ngOnDestroy() {}

  methodologyReport(event: Event) {
    const leportFile = (event.target as HTMLInputElement).files[0];

    this.instituteForm.patchValue({ methodologyReport: leportFile });
    this.instituteForm.get('methodologyReport').updateValueAndValidity();
  }

  methodologyLetter(event: Event) {
    const letterFile = (event.target as HTMLInputElement).files[0];

    this.instituteForm.patchValue({ methodologyLetter: letterFile });
    this.instituteForm.get('methodologyLetter').updateValueAndValidity();

    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.fileReaderPreview = reader.result as string;
    // };
    // reader.readAsDataURL(letterFile);
  }

  isApply() {
    // ما اسم المنهجية المطبقة؟
    if (this.instituteForm.value.isApplicableMethodology) {

      this.instituteForm.controls['nameOfApplicableMethodology'].reset();
      this.instituteForm.controls['nameOfApplicableMethodology'].clearValidators();
      this.instituteForm.get('nameOfApplicableMethodology').updateValueAndValidity();

      this.instituteForm.controls['digitsOfYearsOfApplication'].reset();
      this.instituteForm.controls['digitsOfYearsOfApplication'].clearValidators();
      this.instituteForm.get('digitsOfYearsOfApplication').updateValueAndValidity();

      this.instituteForm.controls['digitsOfBeneficiariesOfTheMethodology'].reset();
      this.instituteForm.controls['digitsOfBeneficiariesOfTheMethodology'].clearValidators();
      this.instituteForm.get('digitsOfBeneficiariesOfTheMethodology').updateValueAndValidity();

      this.instituteForm.controls['digitsOfClassroomsForKids'].reset();
      this.instituteForm.controls['digitsOfClassroomsForKids'].clearValidators();
      this.instituteForm.get('digitsOfClassroomsForKids').updateValueAndValidity();

      this.instituteForm.controls['numberOfCustomClassroomsForKids'].reset();
      this.instituteForm.controls['numberOfCustomClassroomsForKids'].clearValidators();
      this.instituteForm.get('numberOfCustomClassroomsForKids').updateValueAndValidity();

      this.instituteForm.controls['methodologyReport'].reset();
      this.instituteForm.controls['methodologyReport'].clearValidators();
      this.instituteForm.get('methodologyReport').updateValueAndValidity();

      this.instituteForm.controls['digitsOfTeachersOfgirlsForMethodology'].reset();
      this.instituteForm.controls['digitsOfTeachersOfgirlsForMethodology'].clearValidators();
      this.instituteForm.get('digitsOfTeachersOfgirlsForMethodology').updateValueAndValidity();

      this.instituteForm.controls['digitsOfGirlsStudentsInTheInstitute'].reset();
      this.instituteForm.controls['digitsOfGirlsStudentsInTheInstitute'].clearValidators();
      this.instituteForm.get('digitsOfGirlsStudentsInTheInstitute').updateValueAndValidity();

      this.instituteForm.controls['digitsOfTeachersOfboysForMethodology'].reset();
      this.instituteForm.controls['digitsOfTeachersOfboysForMethodology'].clearValidators();
      this.instituteForm.get('digitsOfTeachersOfboysForMethodology').updateValueAndValidity();

      this.instituteForm.controls['digitsOfBoysStudentsInTheInstitute'].reset();
      this.instituteForm.controls['digitsOfBoysStudentsInTheInstitute'].clearValidators();
      this.instituteForm.get('digitsOfBoysStudentsInTheInstitute').updateValueAndValidity();
    }
  }

  isNotGirls() {
    // ما اسم المنهجية المطبقة؟
    if (this.instituteForm.value.isGirls) {
      this.instituteForm.patchValue({ isGirls: false });
      this.instituteForm.get('isGirls').updateValueAndValidity();
    } else {
      this.instituteForm.patchValue({ isGirls: false });
      this.instituteForm.get('isGirls').updateValueAndValidity();
      this.instituteForm.controls['digitsOfTeachersOfgirlsForMethodology'].reset();
      this.instituteForm.get('digitsOfTeachersOfgirlsForMethodology').updateValueAndValidity();
      this.instituteForm.controls['digitsOfGirlsStudentsInTheInstitute'].reset();
      this.instituteForm.get('digitsOfGirlsStudentsInTheInstitute').updateValueAndValidity();
    }
  }

  isNotBoys() {
    // ما اسم المنهجية المطبقة؟
    if (this.instituteForm.value.isBoys) {
      this.instituteForm.patchValue({ isBoys: false });
      this.instituteForm.get('isBoys').updateValueAndValidity();
    } else {
      this.instituteForm.patchValue({ isBoys: false });
      this.instituteForm.get('isBoys').updateValueAndValidity();
      this.instituteForm.controls['digitsOfTeachersOfboysForMethodology'].reset();
      this.instituteForm.get('digitsOfTeachersOfboysForMethodology').updateValueAndValidity();
      this.instituteForm.controls['digitsOfBoysStudentsInTheInstitute'].reset();
      this.instituteForm.get('digitsOfBoysStudentsInTheInstitute').updateValueAndValidity();
    }
  }

  areas(){
    let s = new SelectCity();
    this.selectCity = s.city(this.instituteForm.value.areas);
  }

}
