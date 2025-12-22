export default {
  global: {
    Name:
      'Prácticas agroecológicas para la restauración y fortalecimiento ambiental',
    Description:
      'El componente formativo presenta los indicadores ambientales como herramientas clave para evaluar fincas rurales y planificar su transición agroecológica. A través del IPPTA se miden aspectos como agua, biodiversidad y residuos. Con base en el diagnóstico, se implementan prácticas como cosecha de agua, biofiltros y compostaje. También se proponen estrategias para conservación, reutilización y un plan de intervención sostenible.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    //imagenesDecorativasBanner: [
    //  {
    //    clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //    imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //  },
    //  {
    //    clases: ['banner-principal-decorativo-2'],
    //    imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //  },
    //],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Indicadores ambientales y factores del territorio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Indicadores ambientales: concepto, tipos y finalidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Indicadores ambientales IPPTA',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Algunas soluciones agroecológicas frente a la crisis ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estrategias prediales para el cuidado del agua',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Estrategias prediales para la conservación de la biodiversidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicas y estrategias concretas de manejo y conservación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Estrategias prediales para el manejo de residuos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Plan de intervención: de la línea base a la acción agroecológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Pasos para construir un plan de intervención',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Indicadores ambientales y factores del territorio',
      referencia:
        'FAO, MADR, ADR & Unión Europea en Colombia. (2023). <i>Guía de transición a la agroecología para extensionistas y promotores rurales en Colombia</i>. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).',
      tipo: 'Manual',
      link:
        'https://tapipedia.org/sites/default/files/af-guia_de_agroecologia-web_1.pdf',
    },
    {
      tema: 'Indicadores ambientales y factores del territorio',
      referencia:
        'Agencia de desarrollo rural (2024). <i>Tutorial del Instrumento de Planificación Predial para la Transición Agroecológica - IPPTA</i>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pE801QBON00',
    },
    {
      tema: 'Algunas soluciones agroecológicas frente a la crisis ambiental',
      referencia:
        'Lozano, F. H. (2009). <i>Herramientas de manejo para la conservación de biodiversidad en paisajes rurales</i>.',
      tipo: 'Libro',
      link:
        'https://repository.agrosavia.co/server/api/core/bitstreams/af3494a5-040a-4dc0-9101-3ceaa174d6f2/content',
    },
    {
      tema: 'Algunas soluciones agroecológicas frente a la crisis ambiental',
      referencia:
        'Prieto, J. (2024). <i>Diseño hidrológico con línea clave para el trópico: Fundamentos para el manejo del agua y suelo en cambio climático</i>. Secretaría Metropolitana de Ambiente de Quito & Corporación ECOPAR.',
      tipo: 'Cartilla',
      link:
        'https://drive.google.com/file/d/10Cj0xwlDcrgrD18oUy_eh_JIqnvC5hoP/view?usp=sharing',
    },
  ],
  glosario: [
    {
      termino: 'Agroecosistema',
      significado:
        'sistema productivo donde interactúan cultivos, animales, suelos, agua y comunidades humanas, sujeto a principios ecológicos y agrícolas.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'variedad de especies, genes y ecosistemas presentes en un territorio. Es esencial para la estabilidad y resiliencia ecológica.',
    },
    {
      termino: 'Conectividad ecológica',
      significado:
        'continuidad espacial que permite el movimiento de especies, el flujo genético y la provisión de servicios ecosistémicos.',
    },
    {
      termino: 'Diagnóstico ambiental',
      significado:
        'proceso de recopilación y análisis de información para evaluar el estado y funcionamiento del medio ambiente.',
    },
    {
      termino: 'Indicador ambiental',
      significado:
        'variable cuantitativa o cualitativa que proporciona información sobre el estado, las presiones o las respuestas del medio ambiente.',
    },
    {
      termino: 'Línea base ambiental',
      significado:
        'estado inicial de las condiciones ambientales de un área antes de implementar un plan o proyecto, utilizado como referencia para el seguimiento.',
    },
    {
      termino: 'Restauración ecológica',
      significado:
        'proceso que busca recuperar la estructura, composición y función de los ecosistemas degradados.',
    },
    {
      termino: 'Sistemas agroforestales',
      significado:
        'modelos de uso del suelo que integran árboles, cultivos y, en algunos casos, animales, en beneficio ecológico y productivo.',
    },
    {
      termino: 'Territorio',
      significado:
        'espacio geográfico donde interactúan los factores ambientales, sociales y económicos, y sobre el cual se planifica la gestión sostenible.',
    },
  ],
  referencias: [
    {
      referencia:
        'Avella Muñoz, A., Garzón Fierro E. M., Páez Díaz, M. J., & Ordosgoitia, D. (2022). Restauración ecológica: Principios y prácticas. Ministerio de Ambiente y Desarrollo Sostenible de Colombia-Fundación Natura.',
      link:
        'https://natura.org.co/publicaciones/cartilla-restauracion-ecologica-principios-y-practicas-fundacion-natura/',
    },
    {
      referencia:
        'FAO, MADR, ADR & Unión Europea en Colombia. (2023). Guía de transición a la agroecología para extensionistas y promotores rurales en Colombia. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).',
      link: 'https://www.fao.org/agroecology/database/detail/es/c/1711004/',
    },
    {
      referencia:
        'Gallego, S.  (2019). Análisis de Indicadores de Sustentabilidad Agroecológica en pequeños ganaderos de Primavera Vichada.',
      link: 'https://ridum.umanizales.edu.co/handle/20.500.12746/3508',
    },
    {
      referencia:
        'Lozano, F. H. (2009). Herramientas de manejo para la conservación de biodiversidad en paisajes rurales.',
      link: 'http://hdl.handle.net/20.500.12324/13044',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2012). Política Nacional para la Gestión Integral de la Biodiversidad y sus Servicios Ecosistémicos - PNGIBSE. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2024). Estrategia nacional de restauración 2023 - 2026. Juntos para recuperar la naturaleza perdida. Bogotá, Colombia.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2025/03/ENR_3032024-3.pdf',
    },
    {
      referencia:
        'Martínez, R. Q. (2009). Guía metodológica para desarrollar indicadores ambientales y de desarrollo sostenible en países de América Latina y el Caribe.',
      link:
        'https://www.cepal.org/sites/default/files/courses/files/8_manual-61-cepal_formatoserie_color.pdf',
    },
    {
      referencia:
        'Prieto, J. (2024). Diseño hidrológico con línea clave para el trópico: Fundamentos para el manejo del agua y suelo en cambio climático. Secretaría Metropolitana de Ambiente de Quito & Corporación ECOPAR.',
      link: '',
    },
    {
      referencia:
        'Raudes, M., Sagastume, N. 2009. Manual de Conservación de Suelos. Programa para la Agricultura Sostenible en Laderas de América Central. Carrera de Ciencia y Producción Agropecuaria. Escuela Agrícola Panamericana, El Zamorano, Honduras. 75 p.',
      link:
        'https://www.se.gob.hn/media/files/media/Modulo_3_Manual_Conservacion_de_Suelos..pdf',
    },
    {
      referencia:
        'Silva-Santamaría, L. y Ramírez-Hernández, O. (2017). Evaluación de agroecosistemas mediante indicadores de sostenibilidad en San José de las Lajas, provincia de Mayabeque, Cuba. Luna Azul, 44, 120-152. DOI: 10.17151/luaz.2017.44.8.',
      link: '',
    },
    {
      referencia:
        'Varela, M. V. (2010). Evaluación de sistemas de producción agroecológicos incorporando indicadores de sostenibilidad en la sabana de Bogotá.',
      link: 'https://repositorio.unal.edu.co/handle/unal/11399',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        //{
        //  nombre: 'Nombre completo',
        //  cargo: 'Responsable del ecosistema',
        //  centro: 'Dirección General',
        //},
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Alava Arevalo',
          cargo: 'Instructor técnico',
          centro:
            'Centro Internacional de Producción Limpia Lope - Regional Nariño',
        },
        {
          nombre: 'Gonzalo Cardona',
          cargo: 'Coordinador Colombia',
          centro: 'Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Pablo Aguirre',
          cargo: 'Coordinador',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC)<br>Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Jenny Gómez',
          cargo: 'Asistente técnica',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC)<br>Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Roger Garcia',
          cargo: 'Consultor',
          centro:
            'Proyecto Apoyo a la Reforma Rural Integral en Colombia (ARRIC)<br>Agronomos y Veterinarios sin Fronteras (AVSF)',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
