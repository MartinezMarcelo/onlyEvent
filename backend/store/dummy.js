const db = {
    user: [{
            id:1, 
            name:"marcelo",
            avatar:"/asdasd/asdasd",
            interes:["chicas", "fiestas"],
            asistencia:[{
                nombre: "evento nombre",
                imagen: "/asdasdasd/asdasdasd",
                description: "es un evento especial",
                asistencia: true,
                interes: "me interesa",// me interesa - no me interesa - asistir - no asistir 
                categoria: "comidas",
                status: "STARTED", // STARTED - SUSPENDED - FINISHED
                fecha_inicial: "timestamp",
                fecha_final: "timestamp"
        }]
}]};

async function list(tabla){
    return await db[tabla];
}

async function get(tabla, id){
    let col = list(tabla);
    return await col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data){
    await db[collection].push(data);
}

async function remove(tabla, id){
    return await true;
}


module.exports = {
    list,
    get,
    upsert,
    remove
}