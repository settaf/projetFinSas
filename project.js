var prompt = require('prompt-sync')();

const tickets = [];


//afficher 
function afficher(tab){
    for(i=0;i<tab.length;i++){
        if(tab[i].availableSeats>0){
            console.log("# "+tab[i].id+" " +tab[i].departure+"->"+tab[i].destination)
            console.log("Depart : "+tab[i].departureTime )
            console.log("Arrivée : "+tab[i].arrivalTime )
            console.log("Prix : " +tab[i].price+" DH ")
            console.log("Places disponibles : "+tab[i].availableSeats +"\n")
           
        }
        
    }
}

//acheter
let id ;
function Acheter(tab){
    let name=prompt("entrer ton nom :");
    let id=+prompt("entrer l identifiant de trajet :");
    let n=0;
    for(i=0;i<tab.length;i++){
        if(tab[i].id==id)n=i;
        
    }
    if(n>0){
        if(tab[n].availableSeats>0){
            let ticket={
                id :1,
                passengerName :name ,
                tripId : tab[n].id,
                seatNumber: 12,
                price: tab[n].price
            }
            
            tab[n].availableSeats-=1;
            tickets.push(ticket)
            console.log("Ticket acheté avec succès.\n \nTicket #",ticket.id,"\n Passager : ",ticket.passengerName,"\nTrajet : ",tab[n].departure+"->"+tab[n].destination,"\n Place : ",ticket.seatNumber,"\n Prix : ",ticket.price)

        }else{
            console.log("Train complet.")
        }

    }else{
        console.log("Trajet introuvable.")
    }
}




