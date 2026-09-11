var prompt = require('prompt-sync')();

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

const tickets = [];
let config={
    idtickets: 1
};

//menu

let choix;
do{
    console.log ("=================================\n "+
        
        "       RAILWAY MANAGER \n"+
        "=================================\n\n"+

        "0. Quitter \n"+
        "1. Afficher les trajets\n"+
        "2. Acheter un ticket\n"+
        "3. Afficher les tickets\n"+
        "4. Annuler un ticket\n"+
        "5. Rechercher un ticket\n"+
        "6. Filtrer les trajets\n"+
        "7. Trier les trajets\n"+
        "8. Afficher Nombre total de tickets vendus\n"+
        "9. Afficher Chiffre d'affaires total\n"+
        "10. Afficher le Trajet le plus vendu"
        )
 
    choix=+prompt("votre choix :")
    
    if(isNaN(choix)){
        console.log("entrer un nombre entre 1 et 10")
        continue;
    }
    
    switch(choix){
        case 0 :
            console.log("exit ....")
            break;
        case 1 :
            afficher(trips);
            break;
        case 2 :
            Acheter(trips,tickets)
            break;
        case 3 :
            affichertickets(tickets,trips)
            break;
        case 4 :
            annulerTicket(tickets,trips)
            break;
        case 5 :
            recherchPassager(tickets,trips)
            break;
        case 6 :
            filterParVille(trips)
            break;
        case 7 :
            trier(trips)
            break;
        case 8 :
            nbreTotal(tickets)
            break;
        case 9 :
            chaiffresTotal(tickets)
            break;
        case 10 :
            plusVendu(tickets,trips)
            break;
        
        default :
            console.log("le nombre est incorrect")
            break;
    }
 
}while(choix!=0)


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
    let ticket;
    let a;
    
    let name=prompt("entrer ton nom :");
    let id=+prompt("entrer l identifiant de trajet :");
    let n=0;
    for(i=0;i<tab.length;i++){
        if(tab[i].id==id)n=i+1;
        
    }
    if(n>0){
        if(tab[id-1].availableSeats>0){
   
            
            if(tickets.length==0) a=1;
            else{
                
                for(let i=1;i<=50;i++){
                    let isDisponible = true;
                    for(let j=0;j<tickets.length;j++){
                        if(tickets[j].tripId==id && i==tickets[j].seatNumber){
                            
                            isDisponible=false; 
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
                id :config.idtickets ++,
                passengerName :name ,
                tripId : tab[id-1].id,
                seatNumber: a,
                price: tab[id-1].price
            };

            tickets.push(ticket)

            tab[id-1].availableSeats=tab[id-1].availableSeats-1;
 
            console.log("Ticket acheté avec succès.\n \n Ticket #",ticket.id,"\n Passager : ",ticket.passengerName,"\n Trajet : ",tab[id-1].departure+"->"+tab[id-1].destination,"\n Place : ",ticket.seatNumber,"\n Prix : ",ticket.price)

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

function annulerTicket(tickets,tab){
    let a=0;
    let id =+prompt("entrer Identifiant du ticket");
    let exist=false;
    for(let i=0;i<tickets.length;i++){
        
        a=i;
        if(tickets[i].id==id){
            exist=true;
            
            break;
        }
    }
    if(exist){
        tickets.splice(a,1)
        console.log("Ticket annulé avec succès.")
        tab[tickets[id-1].tripId-1].availableSeats=tab[tickets[id-1].tripId-1].availableSeats+1;
        
    }
    else{
        console.log("Ticket introuvable.")
    }
 
}


//recherch par nom de passager

function recherchPassager(tickets,tab){
    let nom=prompt("entrer le Nom du passager :")
    let exist=false;
    for(let i=0;i<tickets.length;i++){
        if(tickets[i].passengerName.toLowerCase()==nom.toLowerCase()){
            exist=true;
            console.log("Ticket #",tickets[i].id)
            console.log("Passager : ",tickets[i].passengerName)
            console.log("Trajet :",tab[tickets[i].tripId-1].departure,"-->",tab[tickets[i].tripId-1].destination)
            console.log("Place :",tickets[i].seatNumber)
            console.log("Prix :",tickets[i].price)
        }
        
    }
    if(!exist)console.log('pas de ticket contient nom ',nom)
}



//filter les trajet par ville

function filterParVille(trips){
    let ville=prompt("entrer le Ville de départ :");
    trips=trips.filter(a=>a.departure.toLowerCase()==ville.toLowerCase())
    console.log("Résultat :")
    for(i=0;i<trips.length;i++){
        console.log(trips[i].departure,"-->",trips[i].destination," : ",trips[i].price)
    }
}


// Trier les trajets 

function trier(trips){
    let temp;
    for(let i=0;i<trips.length;i++){
        for(let j=0;j<trips.length-(i+1);j++){
            if(trips[j].price>trips[j+1].price){
                temp=trips[j].price;
                trips[j].price=trips[j+1].price
                trips[j+1].price=temp;
            }

        }
    }
    for(let k=0;k<trips.length;k++){
        console.log(trips[k].departure,"-->",trips[k].destination," : ",trips[k].price)

    }
}

//Nombre total de tickets vendus

function nbreTotal(tickets){
    nbre=tickets.length;
    console.log("le Nombre total de tickets vendus est :",nbre);
}


//Chiffre d'affaires total

function chaiffresTotal(tickets){
    somme=0;
    for(i=0;i<tickets.length;i++){
        somme+=tickets[i].price;
    }
    console.log("la somme des Chiffre d'affaires total est :",somme);

}

// Trajet le plus vendu

function plusVendu(tickets,tab){
   let trajetId=[];
   let max=0;
    for(let i=0;i<tickets.length;i++){
        let tab1={
        Id:tickets[i].tripId,
        somme:0
        }
        trajetId.push(tab1);

    }
    let count =0;
    for(let i=0;i<tickets.length;i++){
        for(let j=0;j<tickets.length;j++){
            if(tickets[i].tripId==tickets[j].tripId){
                count++;
           }

        }
        trajetId[i].somme=count;
        count=0;
        
    }
    
    for(let k=1;k<trajetId.length;k++){
        if(trajetId[max].somme<trajetId[k].somme){
            max=k;
         
        }
    }

    console.log(tab[trajetId[max].Id-1].departure,"-->",tab[trajetId[max].Id-1].destination)
    console.log('tickets vendus',trajetId[max].somme)

}

