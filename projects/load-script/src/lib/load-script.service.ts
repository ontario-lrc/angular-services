import {DOCUMENT} from "@angular/common";
import {Inject, Injectable, Renderer2} from "@angular/core";

@Injectable(
{
	providedIn: "root"
})

export class LoadScriptService
{
	constructor(@Inject(DOCUMENT) private _document: Document){}

	public loadScript(renderer: Renderer2, src: string): HTMLScriptElement
	{
		const script: HTMLScriptElement = renderer.createElement("script");

		script.src = src;
		script.async = true;
		script.defer = true;
		script.type = "text/javascript";

		renderer.appendChild(this._document.body, script);

		return script;
	}

	public removeScript(renderer: Renderer2, script: HTMLScriptElement): void
	{
		renderer.removeChild(this._document.body, script);
	}
}