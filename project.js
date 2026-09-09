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
function Acheter(tab,tickets){
    let name=prompt("entrer ton nom :");
    let id=+prompt("entrer l identifiant de trajet :");
    let n=0;
    for(i=0;i<tab.length;i++){
        if(tab[i].id==id)n=i;
        
    }
    if(n>0){
        if(tab[id-1].availableSeats>0){
            let config={
                idtickets: 1
            };
            let a;
            let ticket;

            let isDisponible=false;
            if(tickets.length==0) a=1;
            else{
                for(let i=1;i<=tab[id-1].availableSeats;i++){
                if(tickets.length==0)return a=1;
                for(let j=0;j<tickets.length;i++){
                    if(i!=tickets[j].seatNumber){
                        isDisponible=true; 
                        break;  
                    }
                   
                     
                }
                if(isDisponible){
                    a=i;
                    break;
                }
            }
            }
            

            ticket={
                id :config.idtickets++,
                passengerName :name ,
                tripId : tab[id-1].id,
                seatNumber: a,
                price: tab[id-1].price
            };
            
            tickets.push(ticket)

            tab[id-1].availableSeats=tab[id-1].availableSeats-1;
            
            
            console.log("Ticket acheté avec succès.\n \nTicket #",ticket.id,"\n Passager : ",ticket.passengerName,"\nTrajet : ",tab[id-1].departure+"->"+tab[id-1].destination,"\n Place : ",ticket.seatNumber,"\n Prix : ",ticket.price)

        }else{
            console.log("Train complet.")
        }

    }else{
        console.log("Trajet introuvable.")
    }
}





//afficher tout les tickets enregestrer

function affichertickets(tickets,tab){
    if(tickets.length!=0){
        for(i=0;i<tickets.length;i++){
            console.log("=== TICKETS ===")
            console.log("Ticket #",tickets[i].id)
            console.log("Passager :",tickets[i].passengerName)
            console.log("Trajet : ",tab[tickets[i].tripId-1].departure,"-->",tab[tickets[i].tripId-1].destination)
            console.log("Place : ",tickets[i].seatNumber)
            console.log("Prix : ",tickets[i].price," DH")

        }
    }
    else{
        console.log("Aucun ticket enregistré.")
    }
}



//anuller le ticket




