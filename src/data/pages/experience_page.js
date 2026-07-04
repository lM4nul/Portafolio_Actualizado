export default {
    estudios: [
        {
            titulo: "Ingeniería en Ciencias de la Computación",
            institucion: "Universidad Católica de Honduras (UNICAH) | 2023 - Presente",
            detalles: [
                "Estado: Último año en curso.",
                "Enfoque destacado: Desarrollo de software y web, gestión de bases de datos y técnico de IT"
            ]
        },
        {
            titulo: "Bachillerato Técnico Profesional en Informática",
            institucion: "Instituto Alfonso Guillén Zelaya | Tegucigalpa, Honduras",
            detalles: [
                "Graduado en 2022 con honores."
            ]
        }
    ],
    certificaciones: [
        { name: "CCNA: Introducción a las Redes", isBold: true },
        { name: "Fundamentos de Python", isBold: false },
        { name: "Fundamentos de Linux", isBold: false }
    ],
    habilidadesTecnicas: [
        { 
            label: "Lenguajes de Programación:", 
            iconos:[
                { src: "../assets/Habilidades/C.png", alt: "C#" },
                { src: "../assets/Habilidades/kotlin.png", alt: "Kotlin" },
                { src: "../assets/Habilidades/java.png", alt: "Java" }
            ]
        },
        { 
            label: "Desarrollo Web y Diseño UI/UX:", 
            iconos: [
                { src: "../assets/Habilidades/html-5.png", alt: "HTML5" },
                { src: "../assets/Habilidades/css-3.png", alt: "CSS" },
                { src: "../assets/Habilidades/figma.png", alt: "Figma" }
            ]
        },
        { 
            label: "Bases de Datos y Análisis de Datos:", 
            iconos: [
                { src: "../assets/Habilidades/SQL.png", alt: "SQL" },
                { src: "../assets/Habilidades/PoweBi.png", alt: "Power BI" }
            ]
        },
        { 
            label: "Herramientas de Control de Versiones:", 
            iconos: [
                { src: "../assets/Habilidades/github.png", alt: "GitHub" }
            ]
        }
    ],
    habilidadesSoporte: [
        "<strong>Infraestructura de Redes:</strong> Configuración, conexión y direccionamiento de redes de datos (CCNA).",
        "<strong>Soporte Técnico de Hardware:</strong> Mantenimiento preventivo y correctivo de computadoras.",
        "<strong>Diagnóstico de Sistemas:</strong> Detección, aislamiento y resolución de problemas de hardware y software."
    ]
};