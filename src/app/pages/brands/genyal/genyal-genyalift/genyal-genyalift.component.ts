import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genyal-genyalift',
  templateUrl: './genyal-genyalift.component.html',
  styleUrls: ['./genyal-genyalift.component.scss']
})
export class GenyalGenyaliftComponent implements OnInit {

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
  public showpenance() {
    var penance = document.getElementById("penance");
    var showpenance = document.getElementById("showpenance");
    var hidepenance = document.getElementById("hidepenance");
    var btn = document.getElementById("myBtnPenance");
  
    if (showpenance.style.display === "none") {
      btn.style.color = ""
      btn.style.fontStyle ="normal"
      hidepenance.style.color = ""
      showpenance.style.display = "block"
      hidepenance.style.display = "none"
      penance.style.display = "none";
    } else {
      btn.style.color = "rgb(0, 153, 255)"
      btn.style.fontStyle ="normal"
      hidepenance.style.color = "rgb(0, 153, 255)"
      showpenance.style.display = "none"
      hidepenance.style.display = "block"
      penance.style.display = "inline";
    } 
  
  }
  public showprotocol() {
    var protocol = document.getElementById("protocol");
    var showprotocol = document.getElementById("showprotocol");
    var hideprotocol = document.getElementById("hideprotocol");
    var btn = document.getElementById("myBtnProtocol");
  
    if (showprotocol.style.display === "none") {
      btn.style.color = ""
      btn.style.fontStyle ="normal"
      hideprotocol.style.color = ""
      showprotocol.style.display = "block"
      hideprotocol.style.display = "none"
      protocol.style.display = "none";
    } else {
      btn.style.color = "rgb(0, 153, 255)"
      btn.style.fontStyle ="normal"
      hideprotocol.style.color = "rgb(0, 153, 255)"
      showprotocol.style.display = "none"
      hideprotocol.style.display = "block"
      protocol.style.display = "inline";
    } 
  
  }
}
