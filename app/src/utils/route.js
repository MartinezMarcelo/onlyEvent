export default function RouteEnd(point){
    route="https://mocki.io/v1/";
    switch (point) {
        case "conect":
            route+="476b9550-428b-48e4-8ed6-fa45fbdbdb19";
            break;
        default:
            break;
    }
    
    return route;
}