import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map';	

@Injectable()
export class ApiService {

    private domain: string = "http://localhost:8000"

    constructor(private http: HttpClient) { }

    testAPI(){
        const url = this.domain + "/test2";

        return this.http.get(url);
    }

    getLatestPowerball(){
        const url = this.domain + "/getLatestPowerball";
        return this.http.get(url);
    }

    getLatestMegaMillion(){
        const url = this.domain + "/getLatestMegaMillion";
        return this.http.get(url);
    }
}
