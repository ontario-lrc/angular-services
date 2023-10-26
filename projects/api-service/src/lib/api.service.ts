import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, Injector} from "@angular/core";
import {Observable} from "rxjs";

@Injectable(
{
	providedIn: "root"
})

export class ApiService
{
	protected _httpClient: HttpClient;

	protected readonly applicationJsonHttpHeader: any =
	{
		headers: new HttpHeaders(
		{
			"Content-Type": "application/json"
		})		
	};

	constructor(private _injector: Injector)
	{
		this._httpClient = _injector.get(HttpClient);
	}

	get(url: string, headers?: any): Observable<any>
	{
		return this._httpClient.get(url, headers);
	}

	post(url: string, data: any, headers?: any): Observable<any>
	{
		return this._httpClient.post(url, data, headers);
	}

	put(url: string, data: any, headers?: any): Observable<any>
	{
		return this._httpClient.put(url, data, headers);
	}

	delete(url: string, headers?: any): Observable<any>
	{
		return this._httpClient.delete(url, headers);
	}
}