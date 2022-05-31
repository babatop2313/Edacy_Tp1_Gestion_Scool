import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devoir1';
  classes = [
    {niveau: "seconde S1", batiment: "Leopol S Senghor", salle: "S01" ,students: ["Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye"]},
    {niveau: "seconde S2", batiment: "Leopol S Senghor", salle: "S02", students: ["Cheikh Dieng", "Farma Ndiaye", "Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye" ]},
    {niveau: "Premiere S1", batiment: "Mandela", salle: "M01", students: ["Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye"]},
    {niveau: "Premiere S2", batiment: "Mandela", salle: "M02", students: ["Cheikh Dieng", "Farma Ndiaye", "Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye" ]},
    {niveau: "Terminale S1", batiment: "Thomas Sankara", salle: "T01", students: ["Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye"]},
    {niveau: "Terminale S2",batiment: "Thomas Sankara", salle: "T02", students: ["Cheikh Dieng", "Farma Ndiaye", "Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye" ]},
    {niveau: "seconde L1", batiment: "Leopol S Senghor", salle: "S03", students: ["Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye"]},
    {niveau: "seconde L2", batiment: "Leopol S Senghor", salle: "S04",  students: ["Cheikh Dieng", "Farma Ndiaye", "Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye" ]},
    {niveau: "Premiere L1", batiment: "Mandela", salle: "M03", students: ["Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye"]},
    {niveau: "Premiere L2", batiment: "Mandela", salle: "M04", students: ["Cheikh Dieng", "Farma Ndiaye", "Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye" ]},
    {niveau: "Terminale L1",batiment: "Thomas Sankara", salle: "T03", students: ["Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye"]},
    {niveau: "Terminale L2", batiment: "Thomas Sankara", salle: "T04", students: ["Cheikh Dieng", "Farma Ndiaye", "Baba TOP", "Awa Ndiaye", "Gora Ngom" , "Pape Ndiaye", " Demba Guissé", "Matar Ndiaye" ]},
  
  ]
}
