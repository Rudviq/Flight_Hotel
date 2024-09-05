import express from "express";
import flights from "./flights.js";
import hotels from "./hotels.js";

const app = express();

app.get("/",(req,res) =>{
    res.send('Server is ready!!');
});


app.get("/api/flights", (req,res)=>{
    
    const  {from,to} = req.query;

    if(!from || !to){
        return res.status(400).send({error:"Please provide origin and destination"});
    }
    const flightAvailable = flights.filter(flight=> flight.from === from && flight.to === to);

    if(flightAvailable.length === 0){
        return res.status(404).send({message: "Flights not available for the origin and destination provided"});
    }

    res.send(flightAvailable);
}); 

app.get("/api/hotels", (req,res)=>{
    const {destination} = req.query;

    if(!destination){
        return res.status(400).send({error:"Please provide hotels for the destination"});
    }

    const hotelsAvailable = hotels.filter(hotel=> hotel.address.split(',')[1].trim() === destination);

    if(hotelsAvailable.length === 0){
        return res.status(404).send({message:"Hotels Not Available for this destination"});
    }

    res.send(hotelsAvailable);
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
})