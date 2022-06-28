import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  Room = [
    {niveau: "seconde S1", batiment: "Leopol S Senghor", salle: "S01", nbEL: 23 },
    {niveau: "seconde S2", batiment: "Leopol S Senghor", salle: "S02" , nbEL: 23},
    {niveau: "Premiere S1", batiment: "Mandela", salle: "M01", nbEL: 14},
    {niveau: "Premiere S2", batiment: "Mandela", salle: "M02", nbEL: 29},
    {niveau: "Terminale S1", batiment: "Thomas Sankara", salle: "T01", nbEL: 25},
    {niveau: "Terminale S2",batiment: "Thomas Sankara", salle: "T02", nbEL: 27},
    {niveau: "seconde L1", batiment: "Leopol S Senghor", salle: "S03", nbEL: 23},
    {niveau: "seconde L2", batiment: "Leopol S Senghor", salle: "S04", nbEL: 32},
    {niveau: "Premiere L1", batiment: "Mandela", salle: "M03", nbEL: 33},
    {niveau: "Premiere L2", batiment: "Mandela", salle: "M04", nbEL: 173},
    {niveau: "Terminale L1",batiment: "Thomas Sankara", salle: "T03", nbEL: 23},
    {niveau: "Terminale L2", batiment: "Thomas Sankara", salle: "T04", nbEL: 26},
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
