import {DOCUMENT} from "@angular/common";
import {Injectable, Injector, Renderer2} from "@angular/core";

@Injectable(
{
	providedIn: "root"
})

export class LoadScriptService
{
	#document: Document;

	constructor(private _injector: Injector)
	{
		this.#document = this._injector.get(DOCUMENT);
	}

	public loadScript(renderer: Renderer2, src: string): HTMLScriptElement
	{
		let script!: HTMLScriptElement;

		Array.from(this.#document.scripts).forEach((existingScript: HTMLScriptElement) =>
		{
			if(existingScript.src.includes(src))
			{
				script = existingScript;
			}
		});

		if(script)
		{
			this.removeScript(renderer, script);
		}

		script = renderer.createElement("script");

		script.src = src;
		script.async = true;
		script.defer = true;
		script.type = "text/javascript";

		renderer.appendChild(this.#document.body, script);

		return script;
	}

	public removeScript(renderer: Renderer2, script: HTMLScriptElement): void
	{
		renderer.removeChild(this.#document.body, script);
	}
}