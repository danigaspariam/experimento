import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {Validations} from '../utils/validators';



@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss'],
})
export class CadastroUsuarioComponent implements OnInit {
  form: FormGroup;
  usuarios: any[] = [];
  ShowEditTable: boolean = false;
  EditRowId: any = '';
  isEdit: number;

  @Input() editablePropertyKey: string;



  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: [null, [Validations.contemApenasLetras, Validators.required, Validators.maxLength(50), Validators.minLength(2)]],
      email: [null, [Validations.email, Validators.required, Validators.maxLength(50)]],
      id: [null, [Validations.contemApenasNumeros, Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      sobrenome: [null, [Validations.contemApenasLetras, Validators.required, Validators.maxLength(50), Validators.minLength(2)]],
      dtNascimento: [null, [Validators.required, Validators.maxLength(8)]],
    });
  }

  ngOnInit(): void {}


  gravar() {
    if (this.isEdit !== undefined) {
      this.usuarios[this.isEdit] = this.form.value;
      return undefined
    } if (this.form.valid && this.usuarios.filter((el) => el.id === this.form.value.id).length === 0) {
      this.isEdit = undefined;
      return this.usuarios.push(this.form.value);
    } return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você não preencheu todos os campos corretamente! Lembre-se, o ID deve ser único!',
    })
  }

  public excluirPessoa(i: number) {
    this.usuarios.splice(i, 1)
  }

  // public salvarPessoa() {
  //   return this.usuarios.values()
  // }

  public edit(val) {
    this.EditRowId = val;
  }

  // public filtrarUsuario() {
  //   this.usuarios.filter((usuario) => {
  //     usuario.nome == 'Daniele'
  //   })
  // }

  public editFormPerson(i: number): void {
    const usuario = this.usuarios[i]

    this.isEdit = i;
    this.form.setValue(usuario);
    //ao clicar no botão de cadastro, atualizar os dados NA POSIÇÃO do array que estou editando 

  }

  get nome() {
    return this.form.get('nome');
  }

  get email() {
    return this.form.get('email');
  }

  get id() {
    return this.form.get('id');
  }

  get sobrenome() {
    return this.form.get('sobrenome');
  }

  get dtNascimento() {
    return this.form.get('dtNascimento');
  }

  public getErrorMessage(control: AbstractControl): string {

    if (!control?.touched && control?.invalid) {
      return '';
    }
    const errors: any = control.errors || {};
    const mensagens = {
      maxlength: `O campo deve conter ${errors.maxlength?.requiredLength}
    caracteres!`,
      minlength: `O campo deve conter no mínimo ${errors.minlength?.requiredLength}
    caracteres!`,
      email: 'O email inserido é inválido!',
      required: 'Este campo é obrigatório!',
      contemApenasNumeros: 'Insira apenas números!',
      contemApenasLetras: 'Digite apenas letras maiúsculas ou minúsculas!'

    };
    const key = Object.keys(errors)[0];
    return mensagens[key];

  }

}




