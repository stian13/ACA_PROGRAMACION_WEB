// 1. Seleccionas tu contenedor principal (asegúrate de usar el ID correcto de tu HTML)
const contenedor = document.querySelector('#container-cards-motos');
const motosRanked = [
    { 
        nombre: 'Yamaha FZ 150 / FZ 3.0', 
        imagen: 'https://www.incolmotos-yamaha.com.co/wp-content/uploads/2024/02/fz15ve_azul.png', 
        descripcion: 'Un referente histórico en el segmento urbano. Su motor con tecnología Blue Core garantiza un excelente rendimiento de combustible, mientras que su postura de manejo ergonómica la hace ideal para largas jornadas de transporte en la ciudad sin sacrificar el estilo musculoso.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 149 cc, 4 tiempos (SOHC), inyección electrónica.', 
            'Potencia y Torque: 13 HP a 8,000 RPM y 12.8 Nm a 6,000 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en orden de marcha: 132 kg, muy ligera y fácil de maniobrar.', 
            'Frenos: Disco delantero y tambor trasero (dependiendo de la versión específica).'
        ]
    },
    { 
        nombre: 'TVS Apache RTR 160 4V FI ABS', 
        imagen: 'https://auteco.vtexassets.com/arquivos/ids/1599041/TVS-Apache-RTR-160-4V-XC-FI-Thumbnail.webp?v=639238085316100000', 
        descripcion: 'Una de las motocicletas más potentes y tecnológicas de su categoría. Ofrece distintos modos de manejo y conectividad Bluetooth, siendo una excelente opción para quienes buscan rendimiento deportivo y velocidad en sus recorridos diarios o viajes cortos.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 159.7 cc, 4 válvulas, refrigerado por aceite e inyección electrónica.', 
            'Potencia y Torque: 17.3 HP a 9,250 RPM y 14.73 Nm a 7,250 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en orden de marcha: 148 kg, con chasis de doble cuna patentado.', 
            'Frenos: Freno de disco lobulado en ambas ruedas con sistema ABS monocanal.'
        ]
    },
    { 
        nombre: 'Suzuki Gixxer FI 150 ABS', 
        imagen: 'https://www.suzuki.com.co/sites/default/files/2026-02/GIXXER-150%20FI%20ABS-ROJA-2026.png', 
        descripcion: 'Combina la confiabilidad japonesa con un diseño naked agresivo. Destaca por su motor de inyección electrónica con tecnología SEP (Suzuki Eco Performance) que equilibra la potencia con un consumo eficiente, perfecta para moverse por el tráfico con seguridad.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 155 cc, 4 tiempos (SOHC), inyección electrónica.', 
            'Potencia y Torque: 13.9 HP a 8,000 RPM y 14 Nm a 6,000 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en orden de marcha: 140 kg, con un centro de gravedad bien equilibrado.', 
            'Frenos: Disco en ambas ruedas con sistema ABS en la rueda delantera.'
        ]
    },
    { 
        nombre: 'Pulsar 160 NS FI ABS ', 
        imagen: 'https://acnews.blob.core.windows.net/imgnews/large/NAZ_ec536181311848d2896d68dd0220840e.webp', 
        descripcion: 'La evolución de la popular familia NS, ahora con inyección electrónica, ABS y suspensión invertida. Es una streetfighter robusta que soporta el trato duro del día a día, ofreciendo una excelente respuesta de aceleración gracias a su sistema de doble bujía.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 160.3 cc, 4 válvulas, DTS-i (doble bujía), refrigerado por aceite.', 
            'Potencia y Torque: 15.5 HP a 8,500 RPM y 14.6 Nm a 6,500 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en orden de marcha: 151 kg, soportado por un chasis perimetral.', 
            'Frenos: Disco lobulado en ambas ruedas con sistema ABS monocanal.'
        ]
    },
    { 
        nombre: 'Honda XBlade 160', 
        imagen: 'https://hondasupermotos.com/wp-content/uploads/2025/02/XBLADE-GRIS-1024x634.jpg', 
        descripcion: 'Una propuesta de diseño afilado y futurista (Robo-Face LED) pensada para el entorno urbano. Cuenta con un asiento amplio y cómodo para piloto y pasajero, convirtiéndola en una moto de trabajo y transporte muy confiable con el sello de calidad Honda.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 162.7 cc, 4 tiempos (SOHC), tecnología HET e inyección PGM-FI.', 
            'Potencia y Torque: 13.7 HP a 8,000 RPM y 14.7 Nm a 5,500 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en orden de marcha: 143 kg.', 
            'Frenos: Disco lobulado delantero con ABS monocanal y tambor en la rueda trasera.'
        ]
    },
    { 
        nombre: 'Hero Hunk 160R / 160R 4V', 
        imagen: 'https://heromotos.com.co/wp-content/uploads/2026/10/Hunk160R-4VNegroRojo.png', 
        descripcion: 'Reconocida por ser una de las motos más rápidas en alcanzar los 60 km/h en su segmento. Su extrema ligereza, su faro frontal invertido y la geometría de su chasis la hacen increíblemente ágil para sortear los embotellamientos diarios.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 163 cc, disponible en versiones de 2 y 4 válvulas, inyección electrónica.', 
            'Potencia y Torque: 15 HP a 8,500 RPM (versión 2V) y 14 Nm a 6,500 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en orden de marcha: 139.5 kg, destacando como una de las más ligeras del segmento.', 
            'Frenos: Disco delantero con ABS monocanal y opción de disco o tambor trasero.'
        ]
    }
];
imprimirCards(motosRanked);