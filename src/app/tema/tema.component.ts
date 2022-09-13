import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]



  constructor(
    private router: Router,
    private temaService: TemaService
    
  ) { }

  ngOnInit(){

    if(environment.token == '') {
      // alert ('Sua sessão expirou, faça o login novamente!') tirei por enquanto enquanto termino o programa
      this.router.navigate(['/entrar'])
    }
  }

  cadastrar(){
     this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
       this.tema = resp
       alert('Tema cadastrado com sucesso!')
       this.tema = new Tema()

     })
  }





}