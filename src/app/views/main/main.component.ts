import { Component, OnInit } from '@angular/core';
import { icon, latLng, Layer, marker, tileLayer } from 'leaflet';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 3,
    center: latLng(40.879966, -0.726909)
  };

  markers: Layer[] = [];

  addMarker() {

    let lat = Math.random() * 180 - 90;
    let lon = Math.random() * 360 - 180;

    console.log(lat, lon);

    const newMarker = marker(
      [lat, lon],
      {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: '../../assets/marker-icon.png',
          iconRetinaUrl: '../../assets/marker-icon-2x.png',
          shadowUrl: '../../assets/marker-shadow.png'
        })
      }
    );
    
    this.markers.push(newMarker);
  }

  removeMarker() {
    this.markers.pop();
  }

  constructor() { }

  ngOnInit() {
  }

}
