import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet';


export function ResetCenterView({props}){
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
  const position = [value.lat, value.lon]

  return(          
      <MapContainer center={position} zoom={10} style={{width:'100%', height:'100%'}}>    
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />        
        
        <Marker position={position}>
          <Popup>
            {position}         
          </Popup>          
        </Marker>        
        <ResetCenterView props={position}/>        
      </MapContainer>        
  );
}


export default Map;