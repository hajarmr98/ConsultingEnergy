import React,{ Component } from 'react';
import './Map.css'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Mapa extends Component{

    render(){
        const iconShield = new L.Icon({
                iconUrl: '/icons/red-marker.png',
                iconSize: new L.Point(50, 50)
            })
        return(
        <section className="mapa">
        <MapContainer
            className="markercluster-map"
            center={[40.2842632, -3.797636]}
            zoom={16}
            maxZoom={18}
            >
            <TileLayer
                url='https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
                attribution='<a href="https://www.google.es/maps/preview">Google Maps</a>'
            />
            <Marker position={[40.2842632, -3.797636]} icon={iconShield}></Marker>
            {/* <Popup position={[40.3962048, -3.7104554]}>Nuestra Oficina</Popup> */}
        </MapContainer>
        </section>
        )
    }
}
export default Mapa