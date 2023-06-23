import { Component } from '@angular/core';
import {Emploi} from "../models/Emploi";

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {

  listeEmploi: Emploi[] = [
    {reference:"E1",titre:"Ingenieur",entreprise:"NASA",etat:true},
    {reference:"E2",titre:"Financier",entreprise:"Deloitte",etat:false},
    {reference:"E3",titre:"Consultant",entreprise:"Microsoft",etat:true},
    {reference:"E4",titre:"Designer",entreprise:"Apple",etat:false},
    {reference:"E5",titre:"Testeur",entreprise:"HP",etat:false},
  ]

  nbEmploiNonCloture!:number;
  search:string = '';
  calNonCloture(empList:Emploi[]){
    this.nbEmploiNonCloture = 0;
    empList.forEach(emp => !emp.etat ? this.nbEmploiNonCloture++ : null)
  }

  searchByCompany(comp:string){
    this.search = comp;
    console.log(comp);
  }



}
