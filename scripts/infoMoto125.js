// 1. Seleccionas tu contenedor principal (asegúrate de usar el ID correcto de tu HTML)
const contenedor = document.querySelector('#container-cards-motos');
const motosRanked = [
    { 
        nombre: 'AKT NKD 125', 
        imagen: 'https://images.ctfassets.net/8zlbnewncp6f/1DZbZAjfr9ouBun1gRgQ1G/8e5f038203c41abcbff4ec065128e6ad/akt-nkd-ex74-primer-plano.png', 
        descripcion: 'La AKT NKD 125 es la reina indiscutible de las motocicletas de bajo cilindraje en Colombia. Su diseño clásico tipo naked, peso ligero y mecánica comprobada la convierten en la opción número uno para quienes buscan una herramienta de trabajo incansable, económica y fácil de mantener.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 124 cc, 4 tiempos (OHC).', 
            'Potencia y Torque: 10.34 HP a 8,000 RP M y 9.3 Nm a 7,000 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en seco: 94.5 kg, lo que le otorga una excelente relación peso-potencia.', 
            'Frenos: Disco lobulado delantero para mayor seguridad y tambor trasero.'
        ]
    },
    { 
        nombre: 'Yamaha MT-125', 
        imagen: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2023/MT125/2023-Yamaha-MT125-EU-Cyan_Storm-Studio-001-03.jpg', 
        descripcion: 'Una naked deportiva de entrada con diseño agresivo inspirado en la familia MT (Hyper Naked). Ideal para moverse por la ciudad con agilidad, estilo y tecnología avanzada, ofreciendo una experiencia de conducción premium en el segmento de 125cc.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 124 cc, 4 tiempos, refrigeración líquida (SOHC) con VVA.', 
            'Potencia y Torque: 15 HP a 10,000 RPM y 11.5 Nm a 8,000 RPM.', 
            'Transmisión: Manual de 6 velocidades.', 
            'Peso en orden de marcha: 142 kg, soportado por un robusto chasis Deltabox.', 
            'Frenos: Freno de disco hidráulico delantero y trasero con sistema ABS.'
        ]
    },
    { 
        nombre: 'Suzuki GN125', 
        imagen: 'https://kojintekibikematomeblog.com/wp-content/uploads/2025/06/Miniatura-3.jpg', 
        descripcion: 'Una motocicleta de estilo custom/clásico, legendaria por su durabilidad extrema y confort. Es una compañera de trabajo y transporte diario muy popular gracias a su asiento bajo, postura relajada y un motor prácticamente indestructible.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 124 cc, 4 tiempos (SOHC), refrigerado por aire.', 
            'Potencia y Torque: 12.5 HP a 9,000 RPM y 9 Nm a 8,600 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en seco: 107 kg, lo que facilita una excelente maniobrabilidad en el tráfico.', 
            'Frenos: Freno de disco delantero y tambor tradicional en la rueda trasera.'
        ]
    },
    { 
        nombre: 'Hero Hunk 125R', 
        imagen: 'https://heromotos.com.co/wp-content/uploads/2026/10/hunk125RRed.png', 
        descripcion: 'Con un diseño deportivo y robusto, esta moto está orientada al transporte diario destacando por su sistema i3S que ahorra combustible en los semáforos. Combina líneas aerodinámicas con un motor eficiente, ideal para largas jornadas en la ciudad.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 124.7 cc, 4 tiempos, refrigerado por aire (con tecnología i3S).', 
            'Potencia y Torque: 11 HP a 7,500 RPM y 11 Nm a 6,500 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en seco: 124 kg, ofreciendo un buen equilibrio y estabilidad.', 
            'Frenos: Disco delantero y tambor trasero con sistema de frenado combinado (IBS).'
        ]
    },
    { 
        nombre: 'TVS Raider 125', 
        imagen: 'https://auteco.vtexassets.com/arquivos/ids/1599136/TVS-Raider-125-Thumbnail.webp?v=639238091148970000', 
        descripcion: 'Una de las motocicletas más innovadoras y equipadas de su segmento, con un diseño moderno, tablero digital a color e iluminación LED. Perfecta para quienes buscan un estilo deportivo, economía y alta tecnología urbana.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 124.8 cc, 3 válvulas, refrigerado por aire y aceite.', 
            'Potencia y Torque: 11.2 HP a 7,500 RPM y 11.2 Nm a 6,000 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en orden de marcha: 120 kg, resultando muy ágil en espacios reducidos.', 
            'Frenos: Freno de disco lobulado delantero y tambor trasero con tecnología de frenado sincronizado (SBT).'
        ]
    },
    { 
        nombre: 'Bajaj CT125', 
        imagen: 'https://motortrade.com.ph/wp-content/uploads/2018/09/1-40.jpg', 
        descripcion: 'Diseñada específicamente para el trabajo pesado y la resistencia pura ("echar trocha" y carga). Cuenta con una estructura sólida, guardapolvos, un asiento plano extendido y una excepcional economía de combustible, siendo la mejor aliada laboral.', 
        listaCaracteristicas : [
            'Motor: Monocilíndrico de 124.4 cc, 4 tiempos, refrigerado por aire (tecnología DTS-i).', 
            'Potencia y Torque: 10 HP a 8,000 RPM y 11 Nm a 5,500 RPM.', 
            'Transmisión: Manual de 5 velocidades.', 
            'Peso en seco: 127 kg, construida sobre un chasis reforzado tipo cuna semidoble.', 
            'Frenos: Frenos de tambor (o disco según versión) con sistema de frenado combinado (CBS).'
        ]
    }
];
imprimirCards(motosRanked);