import {Injectable} from "@angular/core";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from "@angular/common/http";
import { environment } from './../../environments/environment';
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest < any >, next : HttpHandler): Observable<HttpEvent<any>> {
        const requestUrl: Array<any> = request.url.split('/');
        const apiUrl: Array<any> = environment.baseUrl.split('/');
        const token = localStorage.getItem('token');

        if (token) {

            const newRequest = request.clone({ setHeaders: {'Authorization': `Bearer ${token}`}});
            console.info("Teste new request: "+newRequest);
            return next.handle(newRequest);

        } else {
            console.info("Teste request: "+ request);
            console.info("Teste request: "+ request.url[2]);
            console.info("Teste request: "+ apiUrl[2]);
            return next.handle(request);
        }
    }
}
