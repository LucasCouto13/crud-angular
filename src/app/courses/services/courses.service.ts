import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';
  private httpClient_: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.httpClient_ = httpClient;
  }

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      tap((courses) => console.log(courses))
    );
  }
}
