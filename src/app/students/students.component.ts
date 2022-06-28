import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  Student = [
    {id: 1, Fname: "Pape", Lname:"Diop", birthday: "20/12/2002", address :"Guediawye", room : "Seconde S1"},
    {id: 2, Fname: "Modou", Lname:"Ndiaye", birthday: "20/12/2004", address :"Guediawye", room : "Seconde S1"},
    {id: 3, Fname: "Abdou", Lname:"Gueye", birthday: "20/12/2005", address :"Pikine", room : "Terminale  L1"},
    {id: 4, Fname: "Alpha", Lname:"Samb", birthday: "20/12/2009", address :"Parcelle", room : "Terminale S1"},
    {id: 5, Fname: "Demba", Lname:"TOP", birthday: "20/12/2007", address :"Dakar", room : "Seconde S2"},
    {id: 6, Fname: "Ngaye", Lname:"Cisse", birthday: "20/12/2000", address :"Touba", room : "Seconde S1"},
    {id: 7, Fname: "Issa", Lname:"Gaye", birthday: "20/12/2000", address :"klk part", room : "Premiere L2"},
    {id: 8, Fname: "awa", Lname:"Diop", birthday: "20/12/2002", address :"Paris", room : "Seconde L2"},
    {id: 9, Fname: "Fatou", Lname:"Diop", birthday: "20/12/2001", address :"Tivaouane", room : "Seconde S1"},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
