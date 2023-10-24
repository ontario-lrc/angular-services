import {Injectable} from "@angular/core";

@Injectable(
{
	providedIn: "root"
})

export class AccordionGroupService
{
	private _accordionsInGroup: HTMLButtonElement[] = [];

	constructor(){}

	set addToAccordionsInGroup(accordion: HTMLButtonElement)
	{
		this._accordionsInGroup.push(accordion);
	}

	get getAccordionsInGroup(): HTMLButtonElement[]
	{
		return this._accordionsInGroup;
	}

	set setOnClickEvent(accordion: HTMLButtonElement)
	{
		accordion.addEventListener("click", (event: MouseEvent) =>
		{
			const id: string = accordion.id;

			this._accordionsInGroup.forEach((accordionInList: HTMLButtonElement) =>
			{
				if(accordionInList.id !== id)
				{
					if(accordionInList.ariaExpanded?.toLocaleLowerCase() === "true")
					{
						accordionInList.click();
					}
				}
			});
		});
	}
}