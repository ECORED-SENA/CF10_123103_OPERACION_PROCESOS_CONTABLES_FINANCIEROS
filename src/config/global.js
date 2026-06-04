export default {
  global: {
    Name: 'Análisis, control y mejora continua de costos de operación',
    Description:
      'Este desarrollo aborda el análisis, control y mejoramiento de los costos de operación mediante la comparación de costos calculados con datos históricos, presupuestados y estándar, la verificación de criterios de clasificación y asignación, la consolidación de hallazgos en reportes de verificación y la formulación de acciones de mejora orientadas a optimizar el desempeño económico y operativo de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        titulo: 'Comparación y análisis inicial de costos de operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Costos históricos y presupuestos de operación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Costos estándar y márgenes esperados',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Indicadores básicos de variación de costos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Comparación de períodos, tendencias y desviaciones',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Análisis inicial de causas y documentación de resultados',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Verificación de criterios de clasificación y asignación de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Criterios de clasificación y asignación de costos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Revisión de costos directos e indirectos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Verificación de centros de costo y validación de tasas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Consistencia del método, aplicación normativa y documentación de criterios',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Verificación integral de la asignación de costos según políticas organizacionales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Reporte y registro de hallazgos en la verificación de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Formatos de reporte de verificación de costos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Procedimientos internos de registro de hallazgos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Documentación de evidencias, archivo de reportes y trazabilidad',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Seguimiento de correcciones, auditoría interna y políticas de retención',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Consolidación de hallazgos, conclusiones y presentación ejecutiva',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas de análisis y alternativas de optimización de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Técnicas de análisis de desviaciones y variaciones',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Alternativas de optimización de costos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Análisis de escenarios de costos y beneficios',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Criterios de priorización de acciones de mejora',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Benchmarking, mejores prácticas, viabilidad e impacto operativo',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Propuestas, socialización e implementación de mejoras de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Formatos de propuesta de mejora de costos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Indicadores de seguimiento de acciones de mejora',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Protocolos de socialización de resultados',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Implementación de mejoras',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Evaluación de resultados, acuerdos de mejora y lecciones aprendidas',
            hash: 't_5_5',
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
  glosario: [
    {
      termino: 'Asignación de costos',
      significado:
        'proceso mediante el cual los costos directos e indirectos se distribuyen a un producto, servicio, orden o centro de costo, según criterios técnicos definidos.',
    },
    {
      termino: 'Base de asignación',
      significado:
        'medida utilizada para distribuir costos indirectos entre productos, servicios o procesos, como horas de mano de obra, horas máquina o unidades producidas.',
    },
    {
      termino: '<i>Benchmarking</i>',
      significado:
        'técnica de comparación que permite evaluar el desempeño de los costos frente a referentes internos o externos, con el fin de identificar brechas, buenas prácticas y oportunidades de mejora.',
    },
    {
      termino: 'Centro de costo',
      significado:
        'área, proceso o dependencia donde se acumulan costos para facilitar su control, análisis y asignación.',
    },
    {
      termino: 'Costo directo',
      significado:
        'costo que puede identificarse y asociarse de manera inmediata con un producto, servicio, orden o proceso específico.',
    },
    {
      termino: 'Costo indirecto',
      significado:
        'costo que apoya la operación general y no puede asociarse directamente a un solo producto o servicio, por lo que requiere una base de distribución.',
    },
    {
      termino: 'Costo real',
      significado:
        'valor efectivamente consumido o registrado durante la operación de un período, lote, producto o servicio.',
    },
    {
      termino: 'Costos estándar',
      significado:
        'valores técnicos previamente establecidos que indican cuánto debería costar un producto o servicio bajo condiciones normales de operación.',
    },
    {
      termino: 'Costos históricos',
      significado:
        'costos realmente incurridos en períodos anteriores, utilizados como referencia para analizar el comportamiento de la operación.',
    },
    {
      termino: 'Costos presupuestados',
      significado:
        'costos estimados o proyectados para un período futuro, que sirven como meta o punto de comparación frente al costo real.',
    },
    {
      termino: 'Desviación de costos',
      significado:
        'diferencia entre el costo real y un costo de referencia, como el presupuesto, el estándar o el costo histórico.',
    },
    {
      termino: 'Hallazgo de costos',
      significado:
        'resultado identificado durante la verificación de costos, como una desviación, error de clasificación, inconsistencia o falta de soporte.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'proceso permanente de revisión, ajuste y aprendizaje que busca fortalecer el desempeño económico y operativo de la empresa.',
    },
    {
      termino: 'Mejores prácticas',
      significado:
        'acciones, métodos o formas de trabajo que han demostrado buenos resultados y que pueden servir como referencia para mejorar los costos sin afectar la calidad ni la operación.',
    },
    {
      termino: 'Optimización de costos',
      significado:
        'conjunto de acciones orientadas a mejorar el uso de los recursos, reducir desperdicios y aumentar la eficiencia sin afectar la calidad de la operación.',
    },
    {
      termino: 'Tasa de asignación',
      significado:
        'valor calculado para distribuir los costos indirectos, dividiendo los costos acumulados entre una base de actividad.',
    },
    {
      termino: 'Variación porcentual',
      significado:
        'indicador que muestra en porcentaje cuánto cambió un costo frente a un valor base o de referencia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cuevas Villegas, C. F. (2010). Contabilidad de costos. Pearson Educación de Colombia.',
      link: '',
    },
    {
      referencia:
        'García Colín, J. (2014). Contabilidad de costos (4.ª ed.). McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Hansen, D. R., y Mowen, M. M. (2007). Administración de costos: contabilidad y control. Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Horngren, C. T., Datar, S. M., y Rajan, M. V. (2012). Contabilidad de costos: un enfoque gerencial (14.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Silveira, Y. P. (2010). <i>Benchmarking:</i> gestionando el desempeño empresarial a través de las mejores prácticas. Observatorio de la Economía Latinoamericana. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
