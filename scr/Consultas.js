// Muestra los beneficios que obtiene la empresa por cada una de sus ventas.    

db.ventas.aggregate([
    {$project: 
        {beneficio:
            {$multiply:[{
                $subtract:["$pvpUnitario", "$pveUnitario"]},
                "$numeroUnidades"
            ]}
        }
    }
])

// Muestra el beneficio total de todas las ventas realizadas en el año 2018.

db.ventas.aggregate([
    {$match: 
        {fechaVenta: {$gte: new Date("2018,01,01"), $lte: new Date("2018,12,31")
    }}},     
    {$group: 
        {_id: "beneficio2018", 
        beneficio: 
            {$sum:
                {$multiply:[{
                    $subtract:["$pvpUnitario", "$pveUnitario"]},
                    "$numeroUnidades"
                ]}
            }
        }
    }
])
        
// Muestra la cantidad de libros comprados por cada cliente de la empresa, permitiendo ver los mejores.

db.ventas.aggregate([
    {$group:
        {_id: "$cliente", 
        librosVendidos: {$sum:"$numeroUnidades"}}
    }
])

// Muestra la cantidad de libros vendidos por la empresa por un trabajador concreto.

db.ventas.aggregate([
    {$match: 
        {vendedor:"Ramón"}
    },     
    {$group:
        {_id: "ventasRamon", 
        librosVendidos: {$sum:"$numeroUnidades"}}
    }
])

// Muestra la cantidad de ventas realizadas por cada vendedor.

db.ventas.aggregate([
    {$group : 
        {_id:"$vendedor", 
        ventasRealizadas:{$sum:1}}
    }
])

// Muestra la cantidad de ventas realizadas cada mes.

db.ventas.aggregate([
    {$group:
        {_id: 
            {mes:{$month:"$fechaVenta"}, 
            año:{$year:"$fechaVenta"}},
        librosVendidos: {$sum:"$numeroUnidades"}
    }}
])

// Muestra la media de libros que vende un trabajador en concreto cada mes.

db.ventas.aggregate([
    {$match: 
        {vendedor:"Iñaki"}
    }, 
    {$group:
        {_id:
            {mes:{$month:"$fechaVenta"}, 
            año:{$year:"$fechaVenta"}},
        mediaLibrosIñaki: {$avg:"$numeroUnidades"}}
    }
])

// Muestra el dinero obtenido por cada trabajador, permitiendo distinguir a los mejores.

db.ventas.aggregate([
    {$group: 
        {_id: "$vendedor", 
        ganancias: 
            {$sum:
                {$multiply:[{
                    $subtract: ["$pvpUnitario", "$pveUnitario"]},
                    "$numeroUnidades" 
                ]}    
            }         
        }
    }
])

// Muestra las mejores ventas realizadas por cada trabajador

db.ventas.aggregate([
    {$group: 
        {_id: "$vendedor", 
        Cantidad: {$max:"$numeroUnidades"},
        Beneficio: 
            {$max:
                {$sum:
                    {$multiply:[{
                        $subtract: ["$pvpUnitario", "$pveUnitario"]},
                        "$numeroUnidades" 
                    ]}
                }          
            }
        }
    }
])

// Muestra las mejores compras realizadas por cada cliente que han sido entregadas sin retraso.

db.ventas.aggregate([
    {$match:{retraso:false}},
    {$group: 
        {_id: "$cliente", 
        Cantidad: {$max:"$numeroUnidades"},
        Beneficio: 
            {$max:
                {$sum:
                    {$multiply:[{
                        $subtract: ["$pvpUnitario", "$pveUnitario"]},
                        "$numeroUnidades" 
                    ]}
                }          
            }
        }
    }
])

