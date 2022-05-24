import {
     AbstractControl,
     ValidationErrors, ValidatorFn
} from '@angular/forms';

export class Validations {

     public static email(control: AbstractControl): ValidationErrors | null {
          const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
          const error = {email: 'Email inválido'};

          if (control.value?.match(regexEmail)) {
               return null
          } return error;
     }

     public static requiredLength(length: number): ValidatorFn {
          const validatorFn = (control: AbstractControl): object | null => {
               if (!control || !control.value || control?.value?.length === length) {
                    return null;
               }
               return {
                    length: {
                         requiredLength: length,
                         actualLength: control.value?.length
                    }
               };
          };
          return validatorFn;
     }

     public static minMaxDate(min: Date, max: Date): ValidatorFn {
          const validatorFn = (control: AbstractControl): ValidationErrors | null => {
               const error = {minMaxDate: 'Data inválida'};
               const value = control.value;
               if (!value || (value instanceof Date && value >= min && value <= max)) {
                    return null;
               } else {
                    return error;
               }
          };
          return validatorFn;
     }

     public static contemApenasLetras(control: AbstractControl): ValidationErrors | null {
          const regexLetras = /[^a-zA-Z]/;
          const error = {contemApenasLetras: 'Digite apenas lestras maiúsculas ou minúsculas!'}

          if (!control.value?.match(regexLetras)) {
               return null

          } return error
     }

     public static contemApenasNumeros(control: AbstractControl): ValidationErrors | null {
          const regexNumeros = /[^0-9]/;
          const error = {contemApenasNumeros: 'Digite apenas números!'};

          if (!control.value?.match(regexNumeros)) {
               return null
          } return error
     }


}