import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';
  private httpClient_: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.httpClient_ = httpClient;
  }

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      //delay(2500),
      tap((courses) => console.log(courses))
    );
  }

  save(record: Course) {
    return this.httpClient.post<Course>(this.API, record);
  }
}
