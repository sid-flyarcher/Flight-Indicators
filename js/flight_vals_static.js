export function GetFlightVals(){

    // Check to see if the counter has been initialized
    if ( typeof GetFlightVals.increment == 'undefined' ) {
        // It has not... perform the initialization
        GetFlightVals.increment = 0;
    }

	var flight_vals = {
	heading_deg: 180+180*Math.sin(GetFlightVals.increment/25), 
    speed_knots: 80+80*Math.sin(GetFlightVals.increment/600), 
    pressure_Pa: 1000+3*Math.sin(GetFlightVals.increment/50), 
    altitude_ft: 1250+1250*Math.sin(GetFlightVals.increment/250), 
    roll_deg: 180*Math.sin(GetFlightVals.increment/50), 
    pitch_deg: 180*Math.sin(GetFlightVals.increment/50)
    };

    ++GetFlightVals.increment
  
  return flight_vals
}




