import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the TrouverLivreurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google


@IonicPage()
@Component({
  selector: 'page-trouver-livreur',
  templateUrl: 'trouver-livreur.html',
})

export class TrouverLivreurPage {



  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'Yoff';
  end = 'Parcelles Assainies';
  coords: any
 // start = 'chicago, il';
 // end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public geo: Geolocation) {
    this.trouverMaPosition();
  }


  
    
  

  trouverMaPosition(){
    this.geo.getCurrentPosition().then((resp) => {
      let lati = resp.coords.latitude;
      let longi = resp.coords.longitude;
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 13,
        center: {lat: lati,
           lng: longi}
        //center: {lat: 41.85, lng: -87.65}
      });
      this.directionsDisplay.setMap(this.map);
      // resp.coords.latitude
      // resp.coords.longitude
      this.coords = new google.maps.LatLng(lati, longi)
     })
    
  }
  

  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.coords,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}