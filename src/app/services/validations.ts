import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator () : ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
        const password = control.get('password')?.value
        const rePass = control.get('rePass')?.value

        if(password && rePass && password !== rePass){
            return { 
                passwordsDontMatch : true
            }
        }
        return null;
    }
}