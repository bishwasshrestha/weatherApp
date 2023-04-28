import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet';


export function ResetCenterView({props}){
  //as the searched place will be changed with new search, this helps recenter the map to desired location
    const selectPosition = props;  
    const map = useMap();
    if(selectPosition){
      map.setView(selectPosition,map.getZoom(2),
      {
        animate: true
      })
    }
    return null;
}

const Map = ({value})=> {
  //Map recieves coordinates from app, centers around the provided coordinates and puts the marker on that location
  const position = [value.lat, value.lon]

  return(          
      <MapContainer center={position} zoom={13} style={{width:'100%', height:'100%'}}>  
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />        
        
        <Marker position={position}>
          <Popup>
            {value.display_name}         
          </Popup>          
        </Marker>        
        <ResetCenterView props={position}/>        
      </MapContainer>        
  );
}


export default Map;