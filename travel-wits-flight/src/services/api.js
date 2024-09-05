const flightsCache = {};
const hotelsCache = {};

export const getFlights = async (from,to) =>{
    
    const cacheKey = `${from} - ${to}`;

    if(flightsCache[cacheKey]){
        return flightsCache[cacheKey];
    }

    const res = await fetch(`/api/flights?from=${from}&to=${to}`);
    
    const data = await res.json();
    
    
    flightsCache[cacheKey] = data; // Store result in cache
    
    return data;
 
}


export const getHotels = async (destination) =>{
    if (hotelsCache[destination]) return hotelsCache[destination];
  
    const res = await fetch(`/api/hotels?destination=${destination}`);
    const data = await res.json();
    hotelsCache[destination] = data; // Store result in cache
    return data;
}
