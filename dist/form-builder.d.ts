interface FormValues {
    [key: string]: string | boolean | number;
}
export declare class FormBuilder extends HTMLElement {
    private shadow;
    private form;
    private schema;
    private _values;
    private searchableSelects;
    private currentTheme;
    static get observedAttributes(): string[];
    constructor();
    private getThemeVariables;
    private setupStyles;
    private setupForm;
    private createField;
    private handleSubmit;
    private validateForm;
    private displayErrors;
    getValues(): FormValues;
    resetForm(): void;
    set values(newValues: FormValues);
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    private loadSchemaFromUrl;
    private render;
    private updateTheme;
    private formatFileSize;
}
export {};
