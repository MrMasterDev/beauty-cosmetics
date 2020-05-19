import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-xcelens4-details',
  templateUrl: './xcelens4-details.component.html',
  styleUrls: ['./xcelens4-details.component.scss'],

})

export class Xcelens4DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
public showdescription() {
    var description = document.getElementById("description");
    var showdescription = document.getElementById("showdescription");
    var hidedescription = document.getElementById("hidedescription");
    var btn = document.getElementById("myBtn");
  
    if (showdescription.style.display === "none") {
      btn.style.color = ""
      btn.style.fontStyle ="normal"
      showdescription.style.color = ""
      showdescription.style.display = "block"
      hidedescription.style.display = "none"
      description.style.display = "none";
    } else {
      btn.style.fontStyle = "italic"
      hidedescription.style.color = "rgb(0, 153, 255)"
      btn.style.color = "rgb(0, 153, 255)"
      showdescription.style.display = "none"
      hidedescription.style.display = "block"
      description.style.display = "inline";
    } 
  }
  public showstructure() {
    var structure = document.getElementById("structure");
    var showstructure = document.getElementById("showstructure");
    var hidestructure = document.getElementById("hidestructure");
    var btn = document.getElementById("myBtnStruct");
  
    if (showstructure.style.display === "none") {
      btn.style.color = ""
      btn.style.fontStyle ="normal"
      hidestructure.style.color = ""
      showstructure.style.display = "block"
      hidestructure.style.display = "none"
      structure.style.display = "none";
    } else {
      btn.style.color = "rgb(0, 153, 255)"
      btn.style.fontStyle ="italic"
      hidestructure.style.color = "rgb(0, 153, 255)"
      showstructure.style.display = "none"
      hidestructure.style.display = "block"
      structure.style.display = "inline";
    } 
  
  }
  public showtasks() {
    var tasks = document.getElementById("tasks");
    var showtasks = document.getElementById("showtasks");
    var hidetasks = document.getElementById("hidetasks");
    var btn = document.getElementById("myBtnTasks");
  
    if (showtasks.style.display === "none") {
      btn.style.color = ""
      btn.style.fontStyle ="normal"
      hidetasks.style.color = ""
      showtasks.style.display = "block"
      hidetasks.style.display = "none"
      tasks.style.display = "none";
    } else {
      btn.style.color = "rgb(0, 153, 255)"
      btn.style.fontStyle ="normal"
      hidetasks.style.color = "rgb(0, 153, 255)"
      showtasks.style.display = "none"
      hidetasks.style.display = "block"
      tasks.style.display = "inline";
    } 
  
  }
  public showbenefits() {
    var bf = document.getElementById("benefits");
    var showbf = document.getElementById("showbenefits");
    var hidebf = document.getElementById("hidebenefits");
    var btn = document.getElementById("myBtnBenefits");
  
    if (showbf.style.display === "none") {
      btn.style.color = ""
      btn.style.fontStyle ="normal"
      hidebf.style.color = ""
      showbf.style.display = "block"
      hidebf.style.display = "none"
      bf.style.display = "none";
    } else {
      btn.style.color = "rgb(0, 153, 255)"
      btn.style.fontStyle ="normal"
      hidebf.style.color = "rgb(0, 153, 255)"
      showbf.style.display = "none"
      hidebf.style.display = "block"
      bf.style.display = "inline";
    } 
  
  }
  public showtext() {
    var title = document.getElementById("contraindications");
    var show = document.getElementById("showtext");
    var hide = document.getElementById("hidetext");
    var btn = document.getElementById("myBtn");
  
    if (show.style.display === "none") {
      btn.style.color = ""
      btn.style.fontStyle ="normal"
      hide.style.color = ""
      show.style.display = "block"
      hide.style.display = "none"
      title.style.display = "none";
    } else {
      btn.style.color = "rgb(0, 153, 255)"
      btn.style.fontStyle ="normal"
      hide.style.color = "rgb(0, 153, 255)"
      show.style.display = "none"
      hide.style.display = "block"
      title.style.display = "inline";
    } 
  
  }
}
