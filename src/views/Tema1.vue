<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Comparación y análisis inicial de costos de operación
    .row.justify-content-center.align-items-stretch.mt-5.mb-3
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 <b>Comparar y analizar costos de operación</b> implica pasar del dato aislado a una lectura más útil del comportamiento económico de la empresa. En la práctica, una cifra de costo solo adquiere verdadero valor cuando puede contrastarse con un referente: un <b>período anterior, un presupuesto, un estándar o un margen esperado.</b> Esa comparación permite reconocer si el costo se comportó dentro de lo previsto o si presenta desviaciones que requieren explicación, validación y eventual corrección.
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img(src="@/assets/curso/tema1/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 Por esta razón, el análisis inicial de costos no debe entenderse como una simple revisión numérica, sino como <b>una actividad de control que conecta el costeo con la evaluación del desempeño operativo y financiero de la organización</b> (Horngren, 2012).
    p.mb-0(data-aos="fade-left") En el entorno empresarial, este análisis resulta relevante porque muchos problemas de rentabilidad no aparecen primero en las ventas, sino en variaciones no detectadas en materiales, mano de obra o costos indirectos. Un aumento leve en el costo unitario, repetido durante varios períodos, puede terminar afectando el margen, la competitividad y la capacidad de decisión. 
    Separador
    //- Inicio Tema1.1
    .row
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Costos históricos y presupuestos de operación
    p(data-aos="fade-left") <b>Los costos históricos</b> corresponden a los costos realmente incurridos en un período ya ejecutado. Se obtienen a partir de <b>registros contables, requisiciones, nómina, reportes de producción</b>, comprobantes de gastos indirectos y demás fuentes documentales de la operación.
    .row(data-aos="fade-left")
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img2.png", data-aos="zoom-in" style="width: 600px")
      .col-lg-7        
        .row.align-items-start.mb-10
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p Su utilidad principal consiste en <b>indicar lo que efectivamente costó producir un bien o prestar un servicio,</b> lo que los convierte en una base importante para evaluar resultados, identificar comportamientos recurrentes y construir comparaciones con períodos anteriores. En otras palabras, el costo histórico permite analizar cómo se ha comportado la operación en condiciones reales (García Colín, 2014).
        p <b>Los presupuestos de operación,</b> en cambio, expresan <b>costos esperados o proyectados</b> para un período futuro. Estos se construyen a partir de <b>volúmenes previstos, tarifas estimadas, rendimientos esperados y decisiones de la empresa.</b>
      p.mt-3 Su función no consiste en anticipar con exactitud el costo real, sino en establecer un punto de referencia con el cual posteriormente pueda compararse lo ejecutado. Por esta razón, <b>el presupuesto es importante para el control</b>, ya que permite anticipar necesidades de recursos, estimar niveles de gasto y fijar rangos de comportamiento aceptables antes de que la operación ocurra.
      p.mb-5 En la empresa, el presupuesto actúa como una meta económica y operativa que luego será contrastada con el costo histórico.
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10
        .banner-costos.rounded-4.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-7.col-lg-9.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.banner-text.mb-4 La comparación entre costo histórico y costo presupuestado permite identificar desviaciones. La forma más sencilla de calcularla es la siguiente:
              .formula-destacada.text-center
                p.mb-0 #[b Desviación = Costo real - Costo presupuestado]          
            .col-12.col-md-5.col-lg-3.banner-img-container.d-flex.justify-content-center.align-items-center.bg-color-4
              img.img-fluid.p-4(src="@/assets/curso/tema1/img3.svg" alt="" style="width: 250px")
    p Si el resultado es positivo, el costo real estuvo por encima del presupuesto; si es negativo, estuvo por debajo. Aunque esta operación básica puede parecer simple, su valor radica en que abre la puerta al análisis posterior. No basta con identificar que hubo una diferencia; también es necesario determinar:          
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5.mb-3(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta01_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Por qué ocurrió
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta01_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Si era previsible
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta01_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Si se repite en distintos períodos
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta01_4.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Si afecta la rentabilidad o la eficiencia del proceso
    //- Fin Tarjetas
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema1/img4.png' style="width: 500px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p Por ello, la comparación debe acompañarse de una <b>lectura técnica</b> y no limitarse a una resta aislada (Horngren, 2012). La revisión por períodos también contribuye a identificar tendencias. Una empresa puede presentar un mes con variación alta sin que ello <b>constituya un problema estructural;</b> sin embargo, si la misma diferencia se repite durante tres o cuatro períodos, deja de ser un hecho ocasional y pasa a representar un comportamiento que requiere análisis.
        p.mb-0 En este sentido, <b>la comparación histórica y presupuestal</b> no sirve únicamente para controlar cifras, sino también para interpretar la estabilidad o el deterioro del costo de operación a lo largo del tiempo (García Colín, 2014). Antes de revisar la estructura comparativa, es importante reconocer que este tipo de tablas facilita la identificación de desviaciones iniciales y contribuye al análisis posterior del comportamiento de los costos.
    //- Inicio Tabla
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-md-auto
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span  Comparación básica entre costo histórico y costo presupuestado
        .tabla-a
          table
            thead
              tr
                th(style="width: 20%") Concepto
                th(style="width: 15%") Costo presupuestado
                th(style="width: 15%") Costo real
                th(style="width: 15%") Desviación
                th(style="width: 40%") Interpretación inicial
            tbody
              tr
                td Materiales directos
                td $ 4.500.000
                td $ 4.860.000
                td $ 360.000
                td El costo real superó lo previsto.
              tr
                td Mano de obra directa
                td $ 2.200.000
                td $ 2.150.000
                td $ -50.000
                td El costo real estuvo por debajo del presupuesto.
              tr
                td CIF
                td $ 1.800.000
                td $ 1.940.000
                td $ 140.000
                td Hubo incremento respecto al valor esperado.
              tr
                td Costo total
                td $ 8.500.000
                td $ 8.950.000
                td $ 450.000
                td El costo total fue superior al presupuestado.
    //- FinTabla
    p La información anterior permite reconocer diferencias entre <b>lo planeado y lo ejecutado</b>, facilitando la identificación inicial de posibles causas asociadas a materiales, mano de obra o costos indirectos de fabricación.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-left")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img5.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p Una empresa de panificación presupuestó para el mes un costo total de $ 12.000.000; sin embargo, al cierre encontró un costo real de $ 12.780.000. La desviación fue de $ 780.000. 
        p Si el incremento se explica por un mayor precio de la harina, el problema se relaciona principalmente con condiciones externas de compra. En cambio, si la diferencia se origina en desperdicio interno o mala dosificación, la empresa ya no enfrenta únicamente una variación monetaria, sino también una debilidad operativa que requiere un análisis más detallado. 
        p.mb-0 Este tipo de evaluación permite determinar si la desviación corresponde a factores externos, problemas internos de eficiencia o fallas de control dentro del proceso productivo.
    Separador
    //- Inicio Tema1.2
    .row
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Costos estándar y márgenes esperados
    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 <b>Los costos estándar</b> representan valores técnicos previamente definidos para materiales, mano de obra y costos indirectos bajo condiciones normales de operación. A diferencia del presupuesto, que suele construirse para un período global, el estándar se formula con mayor detalle sobre la unidad, el lote, la orden o el proceso.
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img.rounded-3(src="@/assets/curso/tema1/img6.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 Su utilidad radica en ofrecer <b>un referente de eficiencia,</b> ya que indica cuánto debería costar un producto o servicio si los recursos se consumen conforme a parámetros normales y esperados. Esto permite comparar el costo real no solo frente a una meta monetaria general, sino también frente a una base técnica de desempeño (Horngren, 2012).
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema1/img7.png' style="width: 500px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p.bg-color-5.p-4.rounded-4  El cálculo estándar se apoya en dos variables básicas:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-2
              p.mb-0 Cantidad estándar.
            li.d-flex
              i.fas.fa-check-circle.me-2
              p.mb-0 Precio o tarifa estándar.
        p.mb-0 En materiales, por ejemplo, el estándar combina la cantidad que debería consumirse por unidad con el precio que la empresa espera pagar. En mano de obra, combina el tiempo estándar con la tarifa estándar. En costos indirectos de fabricación (CIF), puede apoyarse en tasas estándar calculadas sobre una base normal de actividad.
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10
        .banner-costos.rounded-4.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-7.col-lg-9.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.banner-text.mb-4 El costo estándar total de una unidad puede expresarse de la siguiente manera:
              .formula-destacada.text-center
                p.mb-0.bg-color-6.p-3 #[b Costo estándar unitario = (Cantidad estándar × Precio estándar) + (Tiempo estándar × Tarifa estándar) + CIF estándar por unidad]          
            .col-12.col-md-5.col-lg-3.banner-img-container.d-flex.justify-content-center.align-items-center.bg-color-7
              img.img-fluid.p-4(src="@/assets/curso/tema1/img8.svg" alt="" style="width: 400px")
    p.mb-5(data-aos="fade-left") Este enfoque permite determinar, antes de producir, cuál sería el costo esperado bajo condiciones normales. Si la producción real se aparta del estándar, la empresa puede analizar si la diferencia proviene del precio, de la cantidad, del tiempo o del comportamiento de los costos indirectos (Hansen, 2007; Cuevas Villegas, 2010). 
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10
        .banner-costos.rounded-4.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-7.col-lg-9.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.banner-text.mb-4 Los márgenes esperados se relacionan con la diferencia entre el ingreso previsto y el costo estándar o presupuestado. En términos sencillos:
              .formula-destacada.text-center
                p.mb-0.bg-color-6.p-3 #[b Margen esperado = Precio de venta esperado - Costo esperado]          
            .col-12.col-md-5.col-lg-3.banner-img-container.d-flex.justify-content-center.align-items-center.bg-color-8
              img.img-fluid.p-4(src="@/assets/curso/tema1/img9.svg" alt="" style="width: 400px")
    p(data-aos="fade-left") Si una empresa espera vender una unidad en $25.000 y el costo estándar unitario es $18.000, el margen esperado será de $7.000. Esta referencia resulta importante porque la variación del costo no afecta únicamente la contabilidad del proceso, sino también el margen y, por tanto, la rentabilidad esperada del producto o servicio.
    P(data-aos="fade-left") Un pequeño aumento del costo estándar puede reducir significativamente el margen cuando la empresa trabaja con precios estrechos o en contextos de alta competencia (García Colín, 2014). El análisis de variaciones frente al estándar suele desagregarse en:
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5.mb-3(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta02_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Variación de precio
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta02_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Variación de cantidad
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta02_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Variación de CIF
    //- Fin Tarjetas
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10
        .banner-costos.rounded-4.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-7.col-lg-9.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.banner-text.mb-4 Una forma básica de expresar estas variaciones es la siguiente:
              .formula-destacada
                p.mb-0.bg-color-6.p-1
                  ul.lista-ul.color-vineta-custom.mb-0
                    li.d-flex.mt-3
                      i.fas.fa-check-circle.me-2
                      p.mb-0.fw-bold Variación de precio = (Precio real - Precio estándar) × Cantidad real
                    li.d-flex
                      i.fas.fa-check-circle.me-2
                      p.mb-0.fw-bold Variación de cantidad = (Cantidad real - Cantidad estándar) × Precio estándar
              p.banner-text.mt-3 Si la variación incrementa el costo, se interpreta como desfavorable; si lo reduce, se considera favorable.
            .col-12.col-md-5.col-lg-3.banner-img-container.d-flex.justify-content-center.align-items-center.bg-color-9
              img.img-fluid.p-4(src="@/assets/curso/tema1/img10.svg" alt="" style="width: 250px")
    p(data-aos="fade-left") Por ejemplo, si el material debía costar $ 5.000 por unidad de medida y terminó costando $ 5.300, existe una variación de precio desfavorable. De igual manera, si la empresa debía consumir 2 kilogramos por lote y consumió 1,9 kilogramos, existe una variación favorable de cantidad.
    p(data-aos="fade-right") Esta clasificación ayuda a separar causas y evita que todas las diferencias se interpreten como si tuvieran el mismo origen (Hansen, 2007; Horngren, 2012).
    p(data-aos="fade-left") La siguiente estructura facilita relacionar las variaciones estándar con las posibles causas de desviación y contribuye a una interpretación más precisa del comportamiento real de los costos.
    //- Inicio Tabla
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-md-auto
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Estructura básica de costos estándar y variaciones
        .tabla-a
          table
            thead
              tr
                th(style="width: 15%") Concepto
                th(style="width: 20%") Base estándar
                th(style="width: 20%") Base real
                th(style="width: 20%") Tipo de variación
                th(style="width: 25%") Lectura inicial
            tbody
              tr
                td Precio de material
                td $ 5.000 por kg
                td $ 5.300 por kg
                td Variación de precio
                td Desfavorable
              tr
                td Cantidad de material
                td 2,0 kg por lote
                td 1,9 kg por lote
                td Variación de cantidad
                td Favorable
              tr
                td Tarifa MOD
                td $ 18.000 por hora
                td $ 18.000 por hora
                td Sin variación
                td Comportamiento esperado
              tr
                td Tiempo MOD
                td 1,5 horas por unidad
                td 1,8 horas por unidad
                td Variación de tiempo
                td Desfavorable
              tr
                td CIF por unidad
                td $ 3.200
                td $ 3.450
                td Variación CIF
                td Desfavorable              
    //- FinTabla                    
    p(data-aos="fade-left") La comparación entre bases estándar y reales facilita la identificación de desviaciones específicas relacionadas con precios, cantidades, tiempos o comportamiento de costos indirectos, fortaleciendo el control operativo y financiero.
    .row.justify-content-center.align-items-stretch.g-0.bg-color-2(data-aos="fade-left")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img11.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p Una empresa de limpieza institucional establece que cada servicio estándar debe consumir 1,2 litros de solución química a $ 8.000 por litro y 45 minutos de trabajo a una tarifa equivalente de $ 16.000 por hora.
        p.mb-0 Si en la práctica un servicio consume 1,5 litros y tarda 55 minutos, la empresa no solo tendrá un costo real más alto, sino también una señal de desviación en cantidad y tiempo que afecta su margen esperado y debe explicarse con la información disponible.
    Separador
    //- Inicio Tema1.3
    .row
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Indicadores básicos de variación de costos
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema1/img12.png' style="width: 500px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p Los indicadores básicos de variación permiten pasar de la comparación simple a una lectura más clara del comportamiento del costo. En lugar de limitarse únicamente al valor total de la diferencia, ayudan a identificar cuánto varió el costo por unidad, en qué proporción cambió respecto al referente y qué tan eficiente o ineficiente parece haber sido la operación.
        p.mb-0 En la empresa, estos indicadores resultan importantes porque sintetizan información y facilitan el seguimiento periódico de la gestión de costos, especialmente cuando existen varios productos, servicios o centros de costo que deben compararse entre sí (Cuevas Villegas, 2010). Entre los indicadores más frecuentes se encuentran:
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5.mb-3(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta03_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Variación total
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta03_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Variación unitaria
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta03_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Variación porcentual
    //- Fin Tarjetas
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10
        .banner-costos.rounded-4.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-7.col-lg-9.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.banner-text.mb-4 Sus fórmulas básicas son las siguientes:
              .formula-destacada
                p.mb-0.bg-color-6.p-1
                  ul.lista-ul.color-vineta-custom.mb-0
                    li.d-flex.mt-3
                      i.fas.fa-check-circle.me-2
                      p.mb-0.fw-bold Variación total = Costo real total - Costo base total
                    li.d-flex
                      i.fas.fa-check-circle.me-2
                      p.mb-0.fw-bold Variación unitaria = Costo real unitario - Costo base unitario
                    li.d-flex
                      i.fas.fa-check-circle.me-2
                      p.mb-0.fw-bold Variación porcentual = (Variación total / Costo base total) × 100
            .col-12.col-md-5.col-lg-3.banner-img-container.d-flex.justify-content-center.align-items-center.bg-color-10
              img.img-fluid(src="@/assets/curso/tema1/img13.svg" alt="" style="width: 200px")
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema1/img14.png' style="width: 500px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p.bg-color-5.p-4.rounded-4  Estos indicadores permiten responder preguntas diferentes dentro del análisis de costos:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 La variación total indica el impacto monetario global.
            li.d-flex
              i.fas.fa-check-circle.me-3
              p.mb-0 La variación unitaria facilita el análisis del comportamiento por unidad.
            li.d-flex
              i.fas.fa-check-circle.me-3
              p.mb-0 La variación porcentual permite dimensionar la importancia relativa de la diferencia.
        p.mb-0 Una desviación de $ 200.000 puede ser baja o alta dependiendo del tamaño del costo base. Por esta razón, revisar únicamente el valor absoluto puede conducir a interpretaciones incompletas (Horngren, 2012).
    p(data-aos="fade-left") También resultan útiles los índices de eficiencia y algunas ratios de costos. Por ejemplo, una empresa puede relacionar el costo real frente al estándar o el costo de una línea frente a sus ingresos.
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-10
        .banner-costos.rounded-4.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-7.col-lg-9.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.banner-text.mb-3 Un índice sencillo sería el siguiente:
              .formula-destacada.text-center
                p.mb-3.bg-color-6.p-3 #[b Índice de eficiencia de costo = Costo estándar / Costo real]          
              p.banner-text.mb-1 Si el resultado es cercano a 1, el desempeño fue similar al esperado; si es menor, el costo real fue más alto que el estándar; y si es mayor, el resultado puede interpretarse como favorable desde la perspectiva del costo.
            .col-12.col-md-5.col-lg-3.banner-img-container.d-flex.justify-content-center.align-items-center.bg-color-11
              img.img-fluid.p-4(src="@/assets/curso/tema1/img15.svg" alt="" style="width: 350px")
    .row.justify-content-center.align-items-stretch.mb-4
      .col-11.col-md-12.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .rounded-3.overflow-hidden.h-100
          .row.g-0.align-items-stretch.h-100
            P.mb-4 Del mismo modo, ratios como costo de materiales sobre costo total o CIF sobre ingresos ayudan a comprender la estructura del costo y a detectar cambios que quizá no se identifican fácilmente en el total general (García Colín, 2014).
            .col-12.col-md-5.d-flex
              figure.mb-0.w-100
                img(src="@/assets/curso/tema1/img16.png", alt="", style="width: 100%; height: 100%; object-fit: cover; min-height: 250px;")                            
            .col-12.col-md-7.d-flex.align-items-center.bg-color-2
              .p-4.p-md-5
                p.mb-0 <b>El <i>benchmarking</i></b> complementa esta lectura cuando la empresa compara sus indicadores con períodos internos, con otras líneas de operación o, cuando es posible, con referentes del sector. No se trata de reproducir cifras ajenas de manera mecánica, sino de valorar si la estructura de costos o la magnitud de las variaciones se encuentra dentro de parámetros razonables. Este tipo de comparación fortalece el análisis porque ayuda a distinguir entre una desviación interna aislada y una situación más amplia asociada al mercado, al sector o a cambios en insumos estratégicos (Cuevas Villegas, 2010).
            p.mt-3 La siguiente tabla reúne indicadores básicos de variación que ayudan a comparar el comportamiento de los costos y a valorar su impacto dentro de la operación y la gestión financiera.
      .col-8.col-sm-6.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
        figure.mb-0.w-100.text-center
          img.img-fluid(src="@/assets/curso/tema1/img17.png", alt="", style="width: 400px;")            
    //- Inicio Tabla
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-md-auto
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Indicadores básicos de variación de costos
        .tabla-a
          table
            thead
              tr
                th(style="width: 33%") Indicador
                th(style="width: 33%") Fórmula básica
                th(style="width: 33%") Utilidad práctica
            tbody
              tr
                td Variación total
                td Costo real total - costo base total
                td Mostrar el efecto monetario global de la desviación.
              tr
                td Variación unitaria
                td Costo real unitario - costo base unitario
                td Comparar el comportamiento del costo por unidad.
              tr
                td Variación porcentual
                td (Variación total / costo base total) × 100
                td Medir la importancia relativa de la diferencia.
              tr
                td Índice de eficiencia de costo
                td Costo estándar / costo real
                td Valorar el costo real frente al esperado.
              tr
                td Ratio material / costo total
                td Costo de materiales / costo total
                td Analizar el peso del material en la estructura del costo.
              tr
                td Ratio CIF / costo total
                td CIF / costo total
                td Revisar el peso de los indirectos en el costo.          
    //- FinTabla
    p(data-aos="fade-left") La información organizada en estos indicadores facilita el seguimiento de tendencias, la detección de desviaciones y la evaluación comparativa entre períodos, productos o procesos.
    .row.justify-content-center.align-items-stretch.g-0.bg-color-2(data-aos="fade-left")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img18.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p Si un producto tenía un costo presupuestado de $ 20.000 por unidad y termina con un costo real de $ 21.600, la variación unitaria será de $ 1.600. Si se produjeron 500 unidades, la variación total será de $ 800.000. Además, si el costo base total era de $ 10.000.000, la variación porcentual será del 8 %. 
        p.mb-0 Esta lectura resulta más completa que afirmar únicamente que “el costo aumentó”, porque permite identificar cuánto aumentó por unidad, cuánto impactó en total y qué peso tiene la diferencia frente al valor esperado.
    Separador
    //- Inicio Tema1.4
    .row
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Comparación de períodos, tendencias y desviaciones
    p(data-aos="fade-left") La comparación entre períodos es una práctica necesaria para evitar que el análisis de costos se limite a una fotografía aislada. Un solo período puede contener comportamientos atípicos asociados al volumen, a los precios, a compras extraordinarias o a situaciones operativas específicas.
    p(data-aos="fade-right") Por esta razón, revisar dos o más períodos permite identificar si el costo presenta <b>estabilidad, crecimiento, reducción o fluctuaciones recurrentes</b>. En la empresa, esta comparación ayuda a distinguir entre una desviación puntual y una tendencia que empieza a consolidarse y que puede afectar de manera sostenida la operación (Horngren, 2012). En la práctica, la comparación de períodos puede realizarse:
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5.mb-3(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta04_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Mes a mes.
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta04_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Trimestre a trimestre.
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema1/tarjeta04_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Frente al mismo período del año anterior.
    //- Fin Tarjetas
    p(data-aos="fade-left") Lo importante consiste en mantener coherencia en la base de análisis: <b>mismas unidades, mismo criterio de costeo y, cuando sea posible, misma estructura de actividad.</b>
    p(data-aos="fade-right") Solo bajo estas condiciones la tendencia tendrá sentido analítico. Si una empresa compara costos de un mes con alta producción frente a otro con producción reducida, <b>la interpretación</b> debe incorporar esa diferencia, porque el volumen puede alterar el comportamiento unitario y total de los costos indirectos y de la eficiencia del proceso (Cuevas Villegas, 2010).
    .row.justify-content-center.align-items-stretch.mt-5.mb-3
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 La tendencia puede clasificarse como <b>creciente</b> cuando los costos aumentan de manera progresiva en los diferentes períodos analizados; <b>decreciente</b> cuando los costos presentan una reducción sostenida; y <b>estable</b> cuando las variaciones son mínimas y el comportamiento de los costos se mantiene relativamente constante a lo largo del tiempo.
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img.rounded-3(src="@/assets/curso/tema1/img19.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 Una tendencia creciente en costos de materiales puede relacionarse con <b>inflación de insumos</b>, menor poder de negociación o desperdicios internos. Por su parte, una tendencia decreciente puede indicar mejora en compras o mayor eficiencia.
    p(data-aos="fade-left") La estabilidad no siempre significa buen desempeño; también puede reflejar que el costo se mantiene, pero en un nivel ya alto frente al estándar o al mercado. Por ello, la tendencia debe analizarse junto con los referentes presupuestados y estándar, y no únicamente entre períodos (Hansen, 2007).
    p(data-aos="fade-left") <b>La desviación significativa</b> no depende exclusivamente del tamaño monetario absoluto. Una diferencia pequeña puede resultar importante si se repite en muchos períodos o si afecta una línea de alto volumen.
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De igual manera, una diferencia alta en un solo mes puede requerir atención inmediata, aunque luego no vuelva a repetirse. En este punto, la empresa puede definir umbrales internos de alerta, por ejemplo:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Variaciones superiores al 5 % o al 8 %.
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Cambios que superen cierto valor monetario.
    p.mb-5(data-aos="fade-left") Estos criterios no sustituyen el análisis, pero ayudan a priorizar la revisión de resultados y a establecer procedimientos de seguimiento más claros (Cuevas Villegas, 2010). La siguiente tabla permite comparar el comportamiento de los costos en distintos períodos y facilita reconocer tendencias, fluctuaciones recurrentes y posibles desviaciones sostenidas en el tiempo.    
    //- Inicio Tabla
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-md-auto
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span Comparación de períodos, tendencias y desviaciones
        .tabla-a
          table
            thead
              tr
                th(style="width: 10%") Periodo
                th(style="width: 10%") Costo unitario
                th(style="width: 20%") Variación frente al período anterior
                th(style="width: 15%") Variación %
                th(style="width: 40%") Lectura inicial
            tbody
              tr
                td Enero
                td $ 18.500
                td -
                td -
                td Período base
              tr
                td Febrero
                td $ 18.900
                td $ 400
                td 2,16 %
                td Aumento moderado
              tr
                td Marzo
                td $ 19.600
                td $ 700
                td 3,70 %
                td Tendencia creciente
              tr
                td Abril
                td $ 20.400
                td $ 800
                td 4,08 %
                td Crecimiento sostenido
              tr
                td Mayo
                td $ 20.350
                td - $ 50
                td - 0,25 %
                td Estabilidad con costo alto
    //- FinTabla
    p(data-aos="fade-left") La comparación secuencial de los períodos permite reconocer comportamientos acumulativos y fortalece la identificación temprana de desviaciones relevantes para el control de costos.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-left")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img21.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p Una empresa de producción de salsas observa que el costo unitario de su presentación de 500 ml aumentó de $ 3.850 a $ 4.250 en cuatro meses. Aunque cada incremento mensual parece reducido, el comportamiento acumulado revela una tendencia creciente. 
        p.mb-0 Si la empresa no analiza esa secuencia, podría asumir que se trata de variaciones aisladas; sin embargo, la comparación de períodos permite identificar que ya existe un patrón que requiere revisión.
    Separador
    //- Inicio Tema1.5
    .row
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Análisis inicial de causas y documentación de resultados
    p(data-aos="fade-left") A continuación, se presenta un pódcast sobre el análisis inicial de desviaciones en costos y su importancia dentro del control empresarial:        
    //- Inicio Podcast
    .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-4(data-aos="fade-left")
      .row.g-0.align-items-stretch
        .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
          .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
            .row.g-3.align-items-center.w-100
              .col-md-5.text-center.mb-4.mb-md-0
                img(src="@/assets/curso/fondos/podcast.svg" style="max-width: 200px;").img-fluid
              .col-md-7.ps-md-4
                h2.mb-3.fw-bold(style="color:#fff") Pódcast
                .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                  h5.mb-3.fw-bold Análisis inicial de las desviaciones en costos
                  TarjetaAudio.color-primario(
                    texto="" 
                    :audio="require('@/assets/componentes/audios/podcast1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-12.col-lg-5.d-flex.ps-lg-4
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/tema1/img22.png', alt='', style="object-fit: cover;")
    //- Fin Podcast
    p(data-aos="fade-left") La siguiente organización resume los elementos necesarios para documentar hallazgos y fortalecer la trazabilidad del análisis dentro del proceso de control de costos.
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-2
          //- Carrusel
          .bg-full-width.mb-3
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.align-items-center
                  .col-lg-9.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-6 col-lg-6")
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema1/tarjeta05_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Período u objeto revisado
                        p Mes, lote, servicio, orden o centro de costo analizado.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema1/tarjeta05_2.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Referente comparado
                        p Histórico, presupuesto o estándar.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema1/tarjeta05_3.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Valor base y valor real
                        P Cifra esperada y cifra obtenida.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema1/tarjeta05_4.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Magnitud de la desviación
                        P Valor absoluto y porcentaje.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema1/tarjeta05_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Causa probable inicial
                        P Mercado, operación, registro o metodología.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema1/tarjeta05_6.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Evidencia revisada
                        P Requisiciones, nómina, reportes, comprobantes y hoja de costeo.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema1/tarjeta05_7.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Recomendación preliminar
                        P Ajuste, validación adicional, corrección o seguimiento.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema1/img23.png', alt='', style="max-width: 250px", data-aos="zoom-in").m-auto
          //- Fin Carrusel
    p(data-aos="fade-left") La organización sistemática de esta información contribuye a mejorar la trazabilidad del análisis y facilita posteriores procesos de revisión, control y toma de decisiones.
    .row.justify-content-center.align-items-stretch.mb-4.g-0.bg-color-2(data-aos="fade-left")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema1/img24.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p Una empresa encuentra que el costo real de un lote fue 9 % superior al costo estándar. Al revisar la información, identifica que el precio del insumo principal se mantuvo estable, pero el consumo real superó el estándar en 12 %. 
        p.mb-0 La causa probable inicial no estaría en compras, sino en la cantidad consumida. Si además el reporte de producción registra reprocesos por fallas de mezcla, la explicación preliminar adquiere mayor consistencia y puede documentarse como una desviación operativa asociada a desperdicio o ineficiencia del proceso.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-14.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/pdf.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start.text-white
            h4.mb-2 Ejercicio aplicado 1. Comparación y análisis inicial de costos de operación
            p.mb-0 Se invita a revisar el documento “Ejercicio aplicado 1. Comparación y análisis inicial de costos de operación”, donde se aborda el análisis comparativo entre costos presupuestados, estándar y reales en una empresa de conservas.
          .mt-3.mt-lg-0.ps-lg-4            
            a.btn.w-buttons.d-flex.align-items-center.justify-content-center.p-3(
              :href="obtenerLink('/downloads/Anexos/Anexo_Ejercicio_aplicado_1.pdf')" 
              target="_blank"
              style="background-color: #FFEB00; border-color: #FFEB00; color: #000;"
              )
                span.fw-bold.me-2 Descargar
                i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
