import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DateserverService {
  constructor(private http: HttpClient) {}

  register(body: any) {
    return this.http.post('http://127.0.0.1:3000/users/register', body);
  }

  login(body: any) {
    return this.http.post('http://127.0.0.1:3000/users/login', body, {
      observe: 'body',
      withCredentials: true
    });
  }

  userisAuthenticate() {
    return this.http.get('http://127.0.0.1:3000/users/user', {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  trainerSearch(data) {
    return this.http.post('http://127.0.0.1:3000/users/trainerSearch', data);
  }

  insertQuestion(data) {
    return this.http.post('http://127.0.0.1:3000/users/insertQuestion', data);
  }

  getAnwersQuestions() {
    return this.http.get('http://127.0.0.1:3000/users/getAnwersQuestions');
  }

  getTrainersInfo() {
    return this.http.get('http://127.0.0.1:3000/users/getTrainersInfo');
  }

  logout() {
    return this.http.get('http://127.0.0.1:3000/users/logout', {
      observe: 'body',
      withCredentials: true
    });
  }

  reqOpnNewIns(...values) {
    const postData =  new FormData();

    // General Information
    postData.append('instituteName',  values[0]);
    postData.append('licensOfInstitute', values[1]);
    postData.append('emailOfInstitute', values[2]);
    postData.append('areas', values[3]);
    postData.append('cities', values[4]);
    postData.append('nameOfTheInstituteDirector', values[5]);
    postData.append('numberOfTheInstituteDirector', values[6]);
    postData.append('digitsOfTeachersInInstitute', values[7]);
    postData.append('digitsOfClassesInInstitute', values[8]);
    postData.append('digitsOfWomensInstitutes', values[9]);
    postData.append('methodologyLetter', values[10]);

    // //    // ما اسم المنهجية المطبقة؟
    postData.append('isApplicableMethodology', values[11]);
    postData.append('nameOfApplicableMethodology', values[12]);
    postData.append('digitsOfYearsOfApplication', values[13]);
    postData.append('digitsOfBeneficiariesOfTheMethodology', values[14]);
    postData.append('digitsOfClassroomsForKids', values[15]);
    postData.append('numberOfCustomClassroomsForKids', values[16]);
    postData.append('methodologyReport', values[17]);


    // بنين
    postData.append('isBoys', values[18]);
    postData.append('digitsOfTeachersOfboysForMethodology', values[19]);
    postData.append('digitsOfBoysStudentsInTheInstitute', values[20]);

    // بنات
    postData.append('isGirls', values[21]);
    postData.append('digitsOfTeachersOfgirlsForMethodology', values[22]);
    postData.append('digitsOfGirlsStudentsInTheInstitute', values[23]);

    postData.append('creationDateAR', values[24]);

    return this.http.post('http://127.0.0.1:3000/buildUp/newInstitute', postData);
  }
}

// <{ message: string; newInsSchema: NewInstitute}>
