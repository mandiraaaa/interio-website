import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { User } from './users';
 
@Injectable({
 providedIn: 'root'
})
export class UserService {
 private url = 'http://localhost:3000/api/v1';
 private userss$: Subject<User[]> = new Subject();
 
 constructor(private httpClient: HttpClient) { }
 
 private refreshEmployees() {
   this.httpClient.get<User[]>(`${this.url}/employees`)
     .subscribe(userss => {
       this.userss$.next(userss);
     });
 }

 Getusers(){
  return this.httpClient.get(`${this.url}/users/`);
}
 
 getEmployees(): Subject<User[]> {
   this.refreshEmployees();
   return this.userss$;
 }

 getUserByEmailAndPassword(employee: User): Observable<string>{
  return this.httpClient.post<any>(`${this.url}/users/login`, employee, {withCredentials: true});

 }
 getEmployee(id: string): Observable<User> {
   return this.httpClient.get<User>(`${this.url}/employees/${id}`);
 }
 
 createEmployee(employee: User): Observable<string> {
   return this.httpClient.post(`${this.url}/users/register`, employee, { responseType: 'text' });
 }
 
 updateEmployee(id: string, employee: User): Observable<string> {
   return this.httpClient.put(`${this.url}/employees/${id}`, employee, { responseType: 'text' });
 }
 
 deleteEmployee(id: string): Observable<string> {
   return this.httpClient.delete(`${this.url}/employees/${id}`, { responseType: 'text' });
 }
}
