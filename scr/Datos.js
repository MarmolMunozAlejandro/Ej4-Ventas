db.ventas.insertMany([
{
    articuloVendido: "El héroe de las eras", 
    pvpUnitario: 15.50, 
    pveUnitario: 8.95, 
    numeroUnidades: 3, 
    fechaVenta: new Date("2017,05,01"), 
    fechaEntrega: new Date("2017,05,07"), 
    cliente: "Uni. Sevilla",
    vendedor: "Ramón",
    retraso: true
},
{ articuloVendido: "Brazales de duelo", pvpUnitario: 18.70, pveUnitario: 10.50, numeroUnidades: 10, fechaVenta: new Date("2017,06,15"), fechaEntrega: new Date("2017,06,17"), cliente: "Alejandrías", vendedor: "Iñaki", retraso: false},
{ articuloVendido: "Aleación de ley", pvpUnitario: 9.99, pveUnitario: 5.30, numeroUnidades: 4, fechaVenta: new Date("2017,06,21"), fechaEntrega: new Date("2017,06,24"), cliente: "Joanina ", vendedor: "Iñaki", retraso: false},
{ articuloVendido: "La espada leal", pvpUnitario: 12.45, pveUnitario: 7.85, numeroUnidades: 8, fechaVenta: new Date("2017,07,12"), fechaEntrega: new Date("2017,07,16"), cliente: "Lazarillo", vendedor: "Juan Carlos", retraso: false},
{ articuloVendido: "Juramentada", pvpUnitario: 25.00, pveUnitario: 10.90, numeroUnidades: 3, fechaVenta: new Date("2017,07,24"), fechaEntrega: new Date("2017,07,30"), cliente: "Lazarillo", vendedor: "Iñaki", retraso: true},
{ articuloVendido: "La sombra del viento", pvpUnitario: 15.25, pveUnitario: 6.50, numeroUnidades: 5, fechaVenta: new Date("2018,03,05"), fechaEntrega: new Date("2018,03,07"), cliente: "Alejandrías", vendedor: "Ramón", retraso: false},
{ articuloVendido: "La música del silencio", pvpUnitario: 4.95, pveUnitario: 3.05, numeroUnidades: 2, fechaVenta: new Date("2018,03,14"), fechaEntrega: new Date("2018,03,16"), cliente: "La Mancha", vendedor: "Ramón", retraso: false},
{ articuloVendido: "La santa biblia (3º edición artesanal)", pvpUnitario: 238.05, pveUnitario: 90.08, numeroUnidades: 1, fechaVenta: new Date("2018,03,20"), fechaEntrega: new Date("2018,03,24"), cliente: "Iglesia Santa Cruz", vendedor: "Juan Carlos", retraso: false},
{ articuloVendido: "Lengua castellana y literatura (4º ESO)", pvpUnitario: 24.65, pveUnitario: 10.20, numeroUnidades: 20, fechaVenta: new Date("2018,04,08"), fechaEntrega: new Date("2018,04,15"), cliente: "Ies Los Grupos", vendedor: "Francisco", retraso: true},
{ articuloVendido: "Conocimiento del medio (2º primaria)", pvpUnitario: 19.75, pveUnitario: 8.25, numeroUnidades: 15, fechaVenta: new Date("2018,05,15"), fechaEntrega: new Date("2018,05,19"), cliente: "Ies Fray Bartolomé", vendedor: "Iñaki", retraso: false},
{ articuloVendido: "Don Quijote de la Mancha", pvpUnitario: 12.07, pveUnitario: 5.69, numeroUnidades: 13, fechaVenta: new Date("2018,07,14"), fechaEntrega: new Date("2018,07,21"), cliente: "Ies Los Grupos", vendedor: "Ramón", retraso: true},
{ articuloVendido: "La caida de los reinos", pvpUnitario: 11.16, pveUnitario: 4.85, numeroUnidades: 6, fechaVenta: new Date("2018,08,02"), fechaEntrega: new Date("2018,08,04"), cliente: "Alejandrías", vendedor: "Diego", retraso: false},
{ articuloVendido: "La primavera de los rebeldes", pvpUnitario: 15.00, pveUnitario: 7.94, numeroUnidades: 3, fechaVenta: new Date("2018,08,10"), fechaEntrega: new Date("2018,08,13"), cliente: "Joanina ", vendedor: "Juan Carlos", retraso: false},
{ articuloVendido: "El asesinato de Platón", pvpUnitario: 21.75, pveUnitario: 11.00, numeroUnidades: 10, fechaVenta: new Date("2018,09,20"), fechaEntrega: new Date("2018,09,22"), cliente: "Baúl", vendedor: "Juan Carlos", retraso: false},
{ articuloVendido: "La cosa del pantano", pvpUnitario: 45.60, pveUnitario: 28.75, numeroUnidades: 4, fechaVenta: new Date("2019,02,11"), fechaEntrega: new Date("2019,02,14"), cliente: "Lazarillo", vendedor: "Diego", retraso: false},
{ articuloVendido: "Los magníficos 12: La llamada", pvpUnitario: 14.96, pveUnitario: 6.03, numeroUnidades: 6, fechaVenta: new Date("2019,03,21"), fechaEntrega: new Date("2019,03,25"), cliente: "Joanina ", vendedor: "Diego", retraso: false},
{ articuloVendido: "La llamada de Cthulhu", pvpUnitario: 7.55, pveUnitario: 2.89, numeroUnidades: 11, fechaVenta: new Date("2019,04,01"), fechaEntrega: new Date("2019,04,09"), cliente: "Lazarillo", vendedor: "Iñaki", retraso: true},
{ articuloVendido: "Necronomicón", pvpUnitario: 22.80, pveUnitario: 13.45, numeroUnidades: 7, fechaVenta: new Date("2019,04,23"), fechaEntrega: new Date("2019,04,27"), cliente: "La Mancha", vendedor: "Diego", retraso: false},
{ articuloVendido: "El camino de los reyes", pvpUnitario: 33.15, pveUnitario: 19.99, numeroUnidades: 9, fechaVenta: new Date("2019,05,06"), fechaEntrega: new Date("2019,05,10"), cliente: "Alejandrías", vendedor: "Francisco", retraso: false},
{ articuloVendido: "Palabras radiantes", pvpUnitario: 10.92, pveUnitario: 5.87, numeroUnidades: 21, fechaVenta: new Date("2019,05,09"), fechaEntrega: new Date("2019,04,11"), cliente: "La Mancha", vendedor: "Francisco", retraso: false},
{ articuloVendido: "El aliento de los dioses", pvpUnitario: 14.15, pveUnitario: 7.65, numeroUnidades: 4, fechaVenta: new Date("2019,06,18"), fechaEntrega: new Date("2019,06,22"), cliente: "Joanina ", vendedor: "Juan Carlos", retraso: false},
{ articuloVendido: "Danzante del filo", pvpUnitario: 26.50, pveUnitario: 14.53, numeroUnidades: 8, fechaVenta: new Date("2019,07,07"), fechaEntrega: new Date("2019,07,13"), cliente: "Alejandrías", vendedor: "Diego", retraso: true},
{ articuloVendido: "El imperio final", pvpUnitario: 12.30, pveUnitario: 8.64, numeroUnidades: 9, fechaVenta: new Date("2019,08,02"), fechaEntrega: new Date("2019,08,04"), cliente: "Joanina ", vendedor: "Diego", retraso: false},
{ articuloVendido: "Arcanum ilimitado", pvpUnitario: 31.56, pveUnitario: 16.00, numeroUnidades: 3, fechaVenta: new Date("2019,08,29"), fechaEntrega: new Date("2019,09,01"), cliente: "Alejandrías", vendedor: "Iñaki", retraso: false},
{ articuloVendido: "Línea de fuego", pvpUnitario: 21.75, pveUnitario: 17.45, numeroUnidades: 33, fechaVenta: new Date("2019,10,05"), fechaEntrega: new Date("2019,10,11"), cliente: "Baúl", vendedor: "Ramón", retraso: true},
])