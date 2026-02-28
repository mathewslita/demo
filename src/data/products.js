import { image } from "framer-motion/client";

export const products = [
    // --- SECTOR INDUSTRIAL / OPERATIVO ---
    {
        id: 1,
        name: "Chaqueta Alta Visibilidad Pro",
        price: 65.00,
        image: "/1.jpg",
        images: ["/1.jpg"],
        category: "Sector Industrial/Operativo",
        description: "Chaqueta impermeable de alta visibilidad con bandas reflectantes certificadas ANSI/ISEA. Recubrimiento térmico."
    },
    {
        id: 2,
        name: "Camisa de Trabajo Industrial",
        price: 32.00,
        image: "/2.jpg",
        images: ["/2.jpg"],
        category: "Sector Industrial/Operativo",
        description: "Camisa manga larga bicolor de gabardina resistente (Drill). Costuras reforzadas y cintas reflectivas."
    },
    {
        id: 4,
        name: "Chaleco de Seguridad Multibolsillos",
        price: 28.00,
        image: "/4.jpg",
        images: ["/4.jpg", "/chaleco-naranja-bolsillos.png", "/chaleco-naranja-espalda.png", "/chaleco-amarillo-bolsillos.png", "/chaleco-reflectivo-x.png"],
        category: "Sector Industrial/Operativo",
        description: "Chaleco tipo ingeniero con cintas reflectivas de 2 pulgadas y múltiples bolsillos funcionales."
    },
    {
        id: 7,
        name: "Chaleco Reflectivo Básico",
        price: 12.00,
        image: "/7.jpg",
        images: ["/7.jpg", "/chaleco-malla-verde-negro.png", "/chaleco-malla-amarillo-negro-espalda.png"],
        category: "Sector Industrial/Operativo",
        description: "Chaleco de malla transpirable con alta visibilidad 360°. Cumple normativa de tránsito."
    },
    {
        id: 8,
        name: "Polo Manga Larga Alta Visibilidad",
        price: 22.00,
        image: "/8.jpg",
        images: ["/8.jpg", "/polo-azul-cintas-espalda.png"],
        category: "Sector Industrial/Operativo",
        description: "Polo de seguridad con mangas largas y cintas reflectivas segmentadas. Protección UV."
    },
    {
        id: 302,
        name: "Traje industrial",
        price: 55.00,
        image: "/conjunto-jean-industrial.png",
        images: ["/conjunto-jean-industrial.png"],
        category: "Sector Industrial/Operativo",
        description: "Traje completo de alta resistencia. Diseñado para aislar chispas o ambientes industriales duros."
    },
    {
        id: 304,
        name: "Mandiles Industriales",
        price: 25.00,
        image: "/mandil-industrial-azul.png",
        images: ["/mandil-industrial-azul.png", "/mandil-industrial-espalda.png", "/mandil-jean-floresta.png", "/mandil-jean-espalda.png"],
        category: "Sector Industrial/Operativo",
        description: "Mandiles de trabajo de alta resistencia. Diseñados con múltiples bolsillos para operarios y personal de industria."
    },
    {
        id: 303,
        name: "Botas Térmicas de Seguridad",
        price: 85.00,
        image: "/botas.png",
        images: ["/botas.png"],
        category: "Sector Industrial/Operativo",
        description: "Botas industriales con forro térmico y protección para uso exigente."
    },
    {
        id: 10,
        name: "Parka Térmica Alta Visibilidad",
        price: 75.00,
        image: "/parka-negra-altavisibilidad.png",
        images: ["/parka-negra-altavisibilidad.png", "/parka-negra-altavisibilidad-espalda.png"],
        category: "Sector Industrial/Operativo",
        description: "Parka negra con cintas reflectivas amarillas y capucha. Ideal para trabajo nocturno en exteriores o bajas temperaturas."
    },
    {
        id: 11,
        name: "Chaleco con capucha oculta",
        price: 90.00,
        image: "/casaca-negra-cintas-amarillas.png",
        images: [
            "/casaca-negra-cintas-amarillas.png",
            "/chaleco-negro-cintas-amarillas.png",
            "/casaca-negra-verde-capucha.png"
        ],
        category: "Sector Industrial/Operativo",
        description: "Pack corporativo completo: Chaleco acolchado, hoodie y chaqueta con bandas reflectivas homologadas."
    },
    {
        id: 12,
        name: "Chaqueta Desmontable Verde",
        price: 58.00,
        image: "/casaca-verde-negro-mangas-desmontables-2.png",
        images: ["/casaca-negra-verde.png", "/casaca-verde-negro-mangas-desmontables-2.png ", "/casaca-verde-negro-mangas-desmontables-3.png", "/casaca-verde-negro-mangas-desmontables-espalda.png"],
        category: "Sector Industrial/Operativo",
        description: "Chaqueta 2 en 1 transformable a chaleco con mangas removibles y cintas reflectivas."
    },
    {
        id: 13,
        name: "Conjunto Alta Visibilidad Amarillo",
        price: 49.00,
        image: "/chaleco-pantalon-amarillo.png",
        images: ["/chaleco-pantalon-amarillo.png"],
        category: "Sector Industrial/Operativo",
        description: "Uniforme completo que consta de chaleco amarillo flúor con cruz en la espalda y pantalón cargo gris reforzado."
    },
    {
        id: 306,
        name: "Traje Cuarto Frío Premium",
        price: 115.00,
        image: "/conjunto-cuarto-frio-2.png",
        images: ["/conjuntocuartofrio.png", "/conjunto-cuarto-frio-2.png", "/conjunto-cuarto-frio-3.png"],
        category: "Sector Industrial/Operativo",
        description: "Traje completo ultra abrigado para cámaras frigoríficas. Pantalón blanco acolchado y chaqueta azul impermeable."
    },
    {
        id: 15,
        name: "Chaqueta Deportiva Industrial",
        price: 45.00,
        image: "/chaqueta-azul-naranja.png",
        images: ["/chaqueta-azul-naranja.png", "/chaqueta-azul-naranja-espalda.png", "/casaca-azul-cintas-amarillas.png"],
        category: "Sector Industrial/Operativo",
        description: "Chaqueta azul marino (zipper fontal) con bandas naranjas y costura reforzada tipo sport."
    },

    // --- SECTOR CORPORATIVO ---
    {
        id: 3,
        name: "Polo Corporativo Básico",
        price: 18.50,
        image: "/3.jpg",
        images: ["/3.jpg"],
        category: "Sector Corporativo",
        description: "Polo clásico de algodón piqué 100%. Ideal para uniformes de oficina y bordado de logotipos."
    },
    {
        id: 5,
        name: "Polo Ejecutivo Premium",
        price: 24.00,
        image: "/5.jpg",
        category: "Sector Corporativo",
        description: "Polo de alta gama 'dry-fit' o algodón peinado, corte moderno con detalles en contraste."
    },
    {
        id: 101,
        name: "Monja Soldador",
        price: 85.00,
        image: "/monja.png",
        images: ["/monja.png", "/monja2.png", "/monja3.png"],
        category: "Sector Industrial/Operativo",
        description: "Moja para soldador de alta calidad, resistente al calor o a las chispas."
    },
    {
        id: 104,
        name: "Chaqueta Softshell Corporativa",
        price: 62.00,
        image: "/chaqueta-softshell-uce.png",
        images: ["/chaqueta-softshell-uce.png", "/casaca-softshell-uce-2.png"],
        category: "Sector Corporativo",
        description: "Chaqueta negra tipo softshell, elegante, térmica, resistente al viento y logotipeada."
    },

    // --- SECTOR SALUD (UNIFORMES MÉDICOS) ---
    {
        id: 201,
        name: "Traje Médico (Scrub) Completo",
        price: 45.00,
        image: "/filipina-enfermera-tecnicom.png",
        images: ["/filipina-enfermera-tecnicom.png", "/enfermera.png", "/enfermerazul.png", "/enfermerazultrasera.png"],
        category: "Sector Salud (Uniformes Médicos)",
        description: "Uniforme clínico antifluidos. Incluye filipina/mandilón de tela y diseño ergonómico para largas guardias."
    },
    {
        id: 202,
        name: "Bata Médica / Lab Coat",
        price: 32.00,
        image: "/bata-laboratorio.png",
        images: ["/bata-laboratorio.png", "/bata medica.png"],
        category: "Sector Salud (Uniformes Médicos)",
        description: "Bata blanca profesional para doctores y laboratoristas. Bolsillos amplios y tela de fácil lavado."
    },
    {
        id: 203,
        name: "Gorro Quirúrgico",
        price: 12.00,
        image: "/gorro-quirurgico.png",
        category: "Sector Salud (Uniformes Médicos)",
        description: "Gorro sanitario ajustable, tela antibacterial respirable."
    },

    // --- SECTOR ESCOLAR ---
    {
        id: 401,
        name: "Uniforme Escolar Diario",
        price: 28.00,
        image: "/uniforme-escolar.png",
        category: "Sector Escolar",
        description: "Conjunto de diario con materiales resistentes (poliéster/algodón). Mantiene el color tras múltiples lavadas."
    },
    {
        id: 402,
        name: "Falda Escolar Plisada",
        price: 25.00,
        image: "/falda-escolar.png",
        category: "Sector Escolar",
        description: "Falda clásica a cuadros o color entero. Plisado permanente y cintura ajustable."
    },
    {
        id: 404,
        name: "Uniforme de Educación Física",
        price: 35.00,
        image: "/uniforme-deportivo.png",
        category: "Sector Escolar",
        description: "Conjunto deportivo (buzo y pantalón) en tela transpirable para actividades físicas."
    },



    // --- LOGÍSTICA & BÁSICOS COMPLEMENTARIOS ---
    {
        id: 601,
        name: "Chaleco Institucional Personalizable",
        price: 35.00,
        image: "/chaleco-global-logistics.png",
        images: ["/chaleco-global-logistics.png", "/chaleco-global-solutions-espalda.png", "/chaleco-mtop.png", "/chaleco-mtop-espalda.png", "/chalecopersonalizado1.png", "/chalecopersonalizado2.png"],
        category: "Logística & Básicos",
        description: "Chaleco azul marino acolchado ideal para personal de almacén o conductores."
    },

    {
        id: 603,
        name: "Sudadera / Hoodie Logística",
        price: 32.00,
        image: "/hoodie-global-logistics.png",
        images: [
            "/hoodie-global-logistics.png",
            "/hoodie-global-logistics-espalda.png",
            "/hoodie-logistics-partners.png",
            "/hoodie-logistics-partners-2.png"
        ],
        category: "Logística & Básicos",
        description: "Sudadera con o sin bolsillo concha, ideal para estampar tu logo en pecho y espalda. Modelos con reflectivos."
    },
    {
        id: 103,
        name: "Parka Acolchada de Seguridad desmontable",
        price: 85.00,
        image: "/parkanegradesmontable.png",
        images: ["/parkanegradesmontable.png", "/parka-negra-g.png"],
        category: "Logística & Básicos",
        description: "Parka desmontable con bordado posterior. Resistente al agua y viento."
    },

    // --- SERVICIOS DE PERSONALIZACIÓN ---
    // Removidos del catálogo para ser mostrados exclusivamente en el Portafolio (ServicesShowcase)


];
