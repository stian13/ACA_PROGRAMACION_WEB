// 1. Seleccionas tu contenedor principal (asegúrate de usar el ID correcto de tu HTML)
const contenedor = document.querySelector('#container-cards-motos');
const motosRanked = [
    { 
        nombre: 'Bajaj Pulsar NS 200 (FI / ABS)', 
        imagen: 'https://images.ctfassets.net/8zlbnewncp6f/59LrRGnv0GSsjy7GH4ccJc/2c76c4ccae11bf57d671ad617503e758/descarga__2_.jpg', 
        descripcion: 'Un ícono de las calles que destaca por su potencia bruta en altas revoluciones. Su motor refrigerado por líquido y su chasis perimetral ofrecen una estabilidad excepcional, haciéndola perfecta para quienes buscan velocidad y agresividad en sus recorridos diarios.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 199.5 cc, 4 válvulas, inyección electrónica, refrigerado por líquido.', 
            'Potencia y Torque: 24.12 HP a 9,750 RPM y 18.74 Nm a 8,000 RPM.', 
            'Transmisión: Manual de 6 velocidades.', 
            'Peso en orden de marcha: 158 kg.', 
            'Frenos: Discos lobulados en ambas ruedas con ABS (monocanal o bicanal según versión).'
        ]
    },
    { 
        nombre: 'TVS Apache RTR 200 4V (FI / ABS)', 
        imagen: 'https://auteco.vtexassets.com/arquivos/ids/1599084/TVS-Apache-RTR-200-4V-XC-FI-ABS-Thumbnail.webp?v=639238089136100000', 
        descripcion: 'Destaca por su avanzada tecnología que incluye modos de manejo (Urban, Rain, Sport), embrague antirrebote y suspensión ajustable. Es una moto ágil, con un excelente torque en bajas y medias revoluciones, ideal para el tráfico denso de la ciudad.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 197.75 cc, 4 válvulas, refrigerado por aceite con inyección electrónica.', 
            'Potencia y Torque: 20.5 HP a 9,000 RPM y 17.25 Nm a 7,250 RPM.', 
            'Transmisión: Manual de 5 velocidades con embrague antirrebote.', 
            'Peso en orden de marcha: 152 kg.', 
            'Frenos: Discos en ambas ruedas con sistema ABS.'
        ]
    },
    { 
        nombre: 'KTM 200 Duke', 
        imagen: 'https://azwecdnepstoragewebsiteuploads.azureedge.net/PHO_BIKE_90_RE_MY23-KTM-200-DUKE-WHITE-90-RIGHT_%23SALL_%23AEPI_%23V1.png', 
        descripcion: 'La naked premium por excelencia en este cilindraje. Ofrece componentes de alta gama como suspensión invertida WP y chasis multitubular. Es increíblemente rápida, ligera y con una estética agresiva, pensada para quienes buscan deportividad pura.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 199.5 cc, 4 válvulas (DOHC), inyección electrónica, refrigeración líquida.', 
            'Potencia y Torque: 24.7 HP a 10,000 RPM y 19.3 Nm a 8,000 RPM.', 
            'Transmisión: Manual de 6 velocidades.', 
            'Peso en seco: 140 kg, lo que le da una relación peso-potencia inigualable.', 
            'Frenos: Disco delantero de 300mm y trasero de 230mm con ABS bicanal.'
        ]
    },
    { 
        nombre: 'Hero Xpulse 200 4V / Pro', 
        imagen: 'https://heromotored.com/wp-content/uploads/2025/12/xpulse-200-4v-gris-lima-motored-hero.webp', 
        descripcion: 'La reina indiscutible del doble propósito accesible. Diseñada específicamente para la aventura y para "echar trocha", cuenta con suspensión de largo recorrido, rines de radios y una posición de manejo erguida perfecta para terrenos destapados y viajes largos.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 199.6 cc, 4 válvulas, inyección electrónica, refrigerado por aceite.', 
            'Potencia y Torque: 18.9 HP a 8,500 RPM y 17.35 Nm a 6,500 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en orden de marcha: 158 kg.', 
            'Frenos: Discos en ambas ruedas con ABS monocanal.'
        ]
    },
    { 
        nombre: 'AKT TTR 200', 
        imagen: 'https://images.ctfassets.net/8zlbnewncp6f/7laI5Z9mKxPLICy5zB6lQI/7e188f74896d249285cf98a3ad7ecb00/Hero_Xpulse_200_4V_Pro_Imagen_principal_Galgo_Colombia.png', 
        descripcion: 'Una opción enduro muy popular y económica para el trabajo duro en zonas rurales. Su mecánica es sencilla, sus repuestos son accesibles y su diseño alto le permite superar los obstáculos más difíciles de los caminos colombianos sin problemas.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 197 cc, 4 tiempos (OHC), refrigerado por aire.', 
            'Potencia y Torque: 16.5 HP a 8,500 RPM y 15.5 Nm a 6,500 RPM.', 
            'Transmisión: Manual de 6 velocidades.', 
            'Peso en seco: 120 kg, sumamente ligera para maniobras off-road.', 
            'Frenos: Discos lobulados tanto en la rueda delantera como en la trasera.'
        ]
    },
    { 
        nombre: 'Victory MRX 200', 
        imagen: 'https://www.cicolsp.com/wp-content/uploads/2024/10/MRX-200-Cicol.jpg', 
        descripcion: 'Una motocicleta enduro moderna que compite fuertemente en el segmento off-road. Viene equipada con tablero digital, iluminación LED y suspensión delantera invertida, siendo una excelente herramienta para terrenos exigentes y uso diario.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 199.6 cc, 4 tiempos, carburada, refrigeración por aire.', 
            'Potencia y Torque: 17.4 HP a 8,000 RPM y 17 Nm a 6,000 RPM.', 
            'Transmisión: Manual de 6 velocidades.', 
            'Peso en seco: 133 kg.', 
            'Frenos: Freno de disco en ambas ruedas.'
        ]
    }
];
imprimirCards(motosRanked);