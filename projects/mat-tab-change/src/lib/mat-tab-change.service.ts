import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Injectable(
{
	providedIn: 'root'
})

export class MatTabChangeService
{
	private _tabChanged = new Subject<MatTabChangeEvent>();

	tabChanged$ = this._tabChanged.asObservable();

	notifyTabChange(event: MatTabChangeEvent): void
	{
		this._tabChanged.next(event);
	}
}