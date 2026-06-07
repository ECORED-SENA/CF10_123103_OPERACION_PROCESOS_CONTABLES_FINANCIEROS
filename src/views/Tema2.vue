<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Verificación de criterios de clasificación y asignación de costos
    p(data-aos="fade-left") <b>Verificar la clasificación y asignación de costos</b> implica revisar si los valores calculados en la empresa fueron tratados con criterios consistentes, si las bases de reparto utilizadas son razonables y si la distribución de materiales, mano de obra y costos indirectos responde a la realidad operativa del proceso.
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la práctica, esta verificación resulta importante porque un costo puede estar correctamente calculado en términos aritméticos, pero mal clasificado o asignado. Cuando esto ocurre, se altera el análisis posterior, los reportes y las decisiones relacionadas con la operación (Horngren, 2012). En las empresas, los problemas de asignación suelen presentarse cuando:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Se confunden costos directos con indirectos.
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Se aplican bases de reparto que no guardan relación con el consumo real de recursos.
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Se distribuyen costos de manera uniforme entre objetos de costo que no consumen los mismos recursos.
    Separador
    //- Inicio Tema2.1
    .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Criterios de clasificación y asignación de costos
    p(data-aos="fade-left") A continuación, se presenta un video sobre la verificación y clasificación de los costos en los sistemas de costeo.          
    //- Inicio Video
    figure.mb-5(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2xNICO2Vppc?si=ferkm708xNJ2alcu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //- Fin Video
    p(data-aos="fade-left") La siguiente estructura presenta criterios básicos de validación que ayudan a revisar la coherencia del sistema de clasificación y asignación de costos dentro de la operación empresarial.    
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-5.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema2/tarjeta01_1.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Relación con el objeto de costo
                          p Verificar si el costo puede identificarse de forma inmediata con el producto o servicio. Si no se controla adecuadamente, existe riesgo de tratar costos indirectos como directos.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema2/tarjeta01_2.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Comportamiento del costo
                          p Revisar si el costo cambia con el nivel de actividad o permanece relativamente estable. Una interpretación incorrecta puede generar errores en la clasificación entre costos fijos y variables.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema2/tarjeta01_3.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Base de asignación
                          p Confirmar que la base elegida represente el consumo real del recurso. De lo contrario, pueden generarse distribuciones arbitrarias de costos indirectos.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema2/tarjeta01_4.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Soporte documental
                          p Validar la existencia de evidencia del costo y de su criterio de distribución. La ausencia de soporte dificulta la trazabilidad.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema2/tarjeta01_5.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Coherencia con políticas internas
                          p Comprobar que la clasificación coincida con los lineamientos definidos por la empresa. Las inconsistencias pueden generar diferencias entre áreas y períodos.  
          //- Fin Carrusel
          p(data-aos="fade-left") La aplicación de estos criterios contribuye a mejorar la consistencia técnica del costeo y facilita posteriores procesos de análisis, control y toma de decisiones.          
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-left")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img2.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de muebles cargó el salario del supervisor de planta directamente a una orden específica porque esa orden tenía un alto volumen. Aunque la decisión parecía razonable por el tamaño del pedido, la verificación permitió identificar que el supervisor atendía toda la planta y no únicamente esa orden. En consecuencia, ese valor debía tratarse como costo indirecto y asignarse mediante una base técnica, en lugar de incorporarse directamente al producto.
    Separador
    //- Inicio Tema2.2
    .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Revisión de costos directos e indirectos
    p(data-aos="fade-left") La revisión de <b>costos directos e indirectos</b> busca comprobar si la empresa está reconociendo correctamente qué recursos se incorporan o se asocian de manera inmediata al objeto de costo y cuáles sostienen la operación de forma general.
    .row.justify-content-center.align-items-stretch.mt-5.mb-3
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 Esta distinción resulta fundamental porque afecta el costo unitario, la acumulación por órdenes o procesos y la posterior interpretación de variaciones. Un costo directo no requiere reparto; un costo indirecto sí. Por ello, si un valor se encuentra en la categoría incorrecta, el costo final también se distorsiona.
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img(src="@/assets/curso/tema2/img3.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 En la práctica, esta revisión exige analizar la operación real. Un material puede ser directo en una empresa y auxiliar en otra, dependiendo de la importancia que tenga dentro del producto. Lo mismo ocurre con la mano de obra. El tiempo del operario principal suele tratarse como directo, mientras que el tiempo del coordinador de planta normalmente se clasifica como indirecto.
    p.mb-5(data-aos="fade-left") Por esta razón, la verificación no debe realizarse únicamente con el nombre del recurso, sino con la función que cumple dentro del proceso y con su relación real frente al objeto costado. Un procedimiento útil de revisión consiste en tomar una muestra de materiales, tiempos y gastos indirectos, y contrastarlos con:
    //- Carrusel
    .bg-full-width(data-aos="fade-right")
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.align-items-center
            .col-lg-12.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-xl-4 col-lg-6")
                .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema2/tarjeta02_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                  p.card-title.text-center.mb-4 Requisiciones.
                .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema2/tarjeta02_2.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                  p.card-title.text-center.mb-4 Tarjetas de tiempo.
                .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema2/tarjeta02_3.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                  p.card-title.text-center.mb-4 Nómina.
                .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema2/tarjeta02_4.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                  p.card-title.text-center.mb-4 Comprobantes contables.
                .bg-color-18.tarjeta.p-4.h-100.shadow-app.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema2/tarjeta02_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                  p.card-title.text-center.mb-4 Políticas internas.
    //- Fin Carrusel
    p(data-aos="fade-left") Si un material fue cargado como directo, debe existir evidencia de su salida específica para una orden, lote o producto. Si una erogación fue tratada como indirecta, debe existir una base de asignación o, al menos, una justificación clara sobre la imposibilidad de asociarla de forma directa.
    p(data-aos="fade-left") Este cruce de información fortalece la calidad del costeo y ayuda a detectar errores recurrentes en la codificación o en el tratamiento de los recursos. La siguiente estructura comparativa resume algunos casos frecuentes en la verificación de costos directos e indirectos. Su finalidad es facilitar la identificación de errores comunes en la clasificación de recursos.
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/tarjeta03_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Tela principal de una prenda
              p Debe tratarse como costo directo. La verificación puede apoyarse en requisiciones por lote u orden, ya que el recurso debe poder asociarse específicamente al producto.                    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/tarjeta03_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Energía de planta
              p Corresponde a un costo indirecto. La evidencia puede incluir facturas, centros de costo y bases de reparto. Requiere un criterio técnico de asignación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/tarjeta03_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Operario de producción
              p Generalmente se clasifica como costo directo. La validación puede realizarse mediante tarjetas de tiempo y nómina, relacionándolo con la orden o el proceso.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/tarjeta03_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Supervisor de planta
              p Debe tratarse como costo indirecto. La revisión puede apoyarse en nómina, organigrama y funciones del cargo. No debería cargarse a una sola orden sin justificación técnica.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/tarjeta03_5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Material de limpieza
              p Se clasifica normalmente como costo indirecto. La evidencia puede provenir de requisiciones generales o consumos por área, ya que sostiene la operación y no un producto específico.                            
    //- Fin Slideshow
    p(data-aos="fade-right") La revisión sistemática de estos recursos facilita la identificación de inconsistencias en la clasificación y fortalece la confiabilidad de la información de costos.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-left")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img4.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de alimentos registró como material directo una solución de limpieza utilizada para sanitizar las máquinas entre lotes. Sin embargo, la revisión permitió identificar que ese insumo no se incorporaba al producto ni podía asociarse a una sola referencia. Su función consistía en sostener la operación general de la planta. Por tanto, debía clasificarse como costo indirecto y no como material directo.
    Separador
    //- Inicio Tema2.3
    .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Verificación de centros de costo y validación de tasas
    p(data-aos="fade-left") La verificación de centros de costo busca confirmar si la empresa está acumulando los costos en áreas, procesos o dependencias coherentes con su estructura operativa. Esta actividad resulta importante porque la asignación de <b>costos indirectos,</b> la comparación entre períodos y el análisis de desviaciones dependen de que los costos estén reunidos en <b>centros homogéneos y funcionalmente claros.</b>
    .row.mb-5(data-aos="fade-left")
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/img5.png", data-aos="zoom-in" style="width: 600px")
      .col-lg-7        
        .row.align-items-start.mb-10
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p Si los centros mezclan actividades productivas con administrativas, o si cambian de criterio entre un período y otro, el costo pierde comparabilidad y la revisión técnica se debilita (García Colín, 2014). 
            p La validación de tasas se relaciona con la <b>distribución de costos indirectos</b>. En muchos <b>sistemas de costeo</b>, la empresa utiliza tasas predeterminadas o tasas específicas por centro de costo para aplicar los costos indirectos de fabricación (CIF) a productos, órdenes o procesos.
        p Verificar la tasa implica revisar si el numerador corresponde realmente a los costos acumulados que deben distribuirse y si el denominador refleja una base de actividad razonable. Esta validación permite confirmar que la distribución de los costos indirectos se realice con criterios coherentes y proporcionales al consumo de recursos dentro del proceso productivo.
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10
        .rounded-4.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-7.col-lg-8.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.banner-text.mb-4 La fórmula general puede expresarse de la siguiente manera:
              .formula-destacada.text-center
                p.mb-3.bg-color-6.p-3 #[b Tasa de asignación = Costos indirectos acumulados / Base de actividad]
              p.banner-text.mb-4 Si un centro de maquinado acumula $ 18.000.000 en CIF y utiliza 6.000 horas máquina como base, la tasa será de $ 3.000 por hora. Sin embargo, la revisión también debe preguntarse si esas 6.000 horas corresponden a capacidad normal, actividad real o estimaciones sin soporte. La validez de la tasa no depende únicamente de la división, sino de la coherencia de los datos que la componen.
            .col-12.col-md-5.col-lg-4.banner-img-container.d-flex.justify-content-center.align-items-center.bg-color-15
              img.img-fluid(src="@/assets/curso/tema2/img6.svg" alt="" style="width: 500px")
    p(data-aos="fade-left") En la práctica, esta verificación también permite <b>detectar tasas obsoletas o bases de reparto mal seleccionadas.</b> Una empresa puede continuar aplicando una tasa definida hace varios períodos, aunque su nivel de actividad, sus costos indirectos o su tecnología hayan cambiado.
    p(data-aos="fade-left") De igual manera, puede distribuir costos de mantenimiento con base en unidades producidas cuando el consumo real depende de horas máquina. Por esta razón, revisar centros y tasas constituye una actividad fundamental antes de concluir que el costo de una línea o de un producto es razonable (Hansen, 2007).
    p(data-aos="fade-left") A continuación, se presentan elementos utilizados para revisar la consistencia de las tasas y bases de asignación.
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/tarjeta04_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Mezclado
              p Acumula $ 12.000.000 en CIF y utiliza 4.000 horas máquina como base de actividad, generando una tasa de $ 3.000 por hora. La revisión debe confirmar la relación entre los costos indirectos y las horas máquina utilizadas..                    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/tarjeta04_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Envasado
              p Registra $ 9.600.000 en CIF y 3.200 horas máquina como base, con una tasa de $ 3.000 por hora. Se requiere revisar si la base de actividad continúa siendo adecuada para el proceso actual.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figuretarjeta04_1
                img(src="@/assets/curso/tema2/tarjeta04_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Mantenimiento
              p Acumula $ 6.500.000 y utiliza 1.300 horas de servicio como base, obteniendo una tasa de $ 5.000 por hora. La validación debe centrarse en los criterios utilizados para la acumulación de costos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/tarjeta04_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Control de calidad
              p Presenta $ 4.200.000 en CIF y 2.100 inspecciones como base de actividad, con una tasa de $ 2.000 por inspección. La revisión debe verificar la consistencia del conductor utilizado para la asignación.                         
    //- Fin Slideshow
    p(data-aos="fade-left") La revisión sistemática de estos elementos permite fortalecer la coherencia técnica de la distribución de costos indirectos y facilita la detección de criterios de asignación poco representativos.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-left")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img7.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de cosméticos mantenía la misma tasa de costos indirectos de fabricación para mezclado y envasado, aunque el consumo energético y el tiempo de máquina eran muy diferentes entre ambos centros. La revisión evidenció que la tasa uniforme estaba ocultando diferencias reales del proceso y generando asignaciones poco representativas en varias referencias del portafolio (García Colín, 2014).
    Separador
    //- Inicio Tema2.4
    .row
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Consistencia del método, aplicación normativa y documentación de criterios
    p(data-aos="fade-left") La verificación de costos también debe revisar la consistencia del método utilizado. Esto significa comprobar que la empresa aplica el mismo criterio de acumulación y distribución de costos de manera estable dentro del mismo período y entre períodos comparables, salvo que exista una decisión formal y técnicamente justificada para modificarlo.
    .row.justify-content-center.align-items-stretch.mt-5.mb-5
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 Cuando la empresa mezcla criterios sin documentarlo, compara costos obtenidos bajo metodologías distintas o cambia bases de asignación sin sustento, la información pierde coherencia y se dificulta la interpretación de las desviaciones (Horngren, 2012).
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img(src="@/assets/curso/tema2/img8.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 La aplicación normativa no implica necesariamente reproducir el texto legal dentro del análisis, sino asegurarse de que la clasificación y asignación de costos respete el marco técnico definido por la empresa para inventarios, transformación y control de operación.
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De igual manera, las políticas organizacionales deben indicar:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Cómo se clasifican determinados rubros.
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Qué criterios se utilizan para distribuir costos indirectos.
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Qué centros de costo se encuentran activos.
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Qué soportes son obligatorios para validar el cálculo.
    p(data-aos="fade-left") Cuando estos lineamientos existen y se aplican de forma consistente, la revisión adquiere mayor solidez y los resultados resultan más defendibles frente a auditoría o control interno (Cuevas Villegas, 2010).
    .row.justify-content-center.align-items-stretch.mb-4
      .col-11.col-md-12.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .rounded-3.overflow-hidden.h-100
          .row.g-0.align-items-stretch.h-100
            .col-12.col-md-5.d-flex
              figure.mb-0.w-100
                img(src="@/assets/curso/tema2/img10.png", alt="", style="width: 100%; height: 100%; object-fit: cover; min-height: 250px;")                            
            .col-12.col-md-7.d-flex.align-items-center.bg-color-2
              .p-4.p-md-5
                p.mb-0 La documentación de criterios es esencial para que la verificación no dependa únicamente de la memoria o del criterio individual de quien revisa. Un soporte adecuado debe dejar claramente identificado qué costo fue revisado, cómo se clasificó, qué base de asignación se utilizó, por qué se seleccionó dicha base y qué evidencia respalda la decisión tomada. Esto permite garantizar <b>trazabilidad, coherencia en el análisis y mayor respaldo técnico en los procesos de control y validación de costos.</b>
            p.mt-3 Esta documentación permite comparar períodos, explicar variaciones y sostener recomendaciones de mejora con mayor consistencia. Sin ella, la empresa puede tener cálculos, pero no necesariamente control sobre la lógica aplicada en esos cálculos.
      .col-8.col-sm-6.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
        figure.mb-0.w-100.text-center
          img.img-fluid(src="@/assets/curso/tema2/img11.png", alt="", style="width: 400px;")            
    p(data-aos="fade-left") Los siguientes elementos permiten revisar cómo la aplicación consistente del método y la documentación de criterios contribuyen a fortalecer la confiabilidad del sistema de costos.
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img.mb-3(src="@/assets/curso/tema2/img12.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Coherencia del método")
              p.mb-4 Verificar si se aplicó el mismo sistema de costeo de manera consistente. La evidencia puede incluir procedimientos, manuales o políticas internas.              
          .row(titulo="Base de asignación")
              p.mb-4 Confirmar si la base utilizada se mantuvo o fue modificada con justificación técnica. La validación puede apoyarse en reportes técnicos o decisiones documentadas.
          .row(titulo="Clasificación de costos")
              p.mb-4 Revisar si los rubros conservan el mismo criterio entre períodos. La evidencia puede encontrarse en matrices de clasificación o hojas de costeo.
          .row(titulo="Soporte normativo o interno")
              p.mb-4 Comprobar la existencia de políticas o lineamientos aplicables. La revisión puede apoyarse en manuales, instructivos o políticas organizacionales.
          .row(titulo="Registro del criterio aplicado")
              p.mb-4 Validar si se documentó la razón de la clasificación y asignación utilizada. La evidencia puede incluir formatos de revisión, notas técnicas o informes.
    //- Fin Accordion
    p(data-aos="fade-left") La validación sistemática de estos aspectos contribuye a fortalecer la coherencia metodológica y facilita el control técnico del proceso de clasificación y asignación de costos.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-left")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema2/img13.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa cambió en julio la base de asignación de los costos indirectos de fabricación, pasando de horas de mano de obra a horas máquina. Sin embargo, no documentó la razón del cambio ni ajustó los criterios de comparación con los meses anteriores. Como resultado, la gerencia interpretó como mejora una reducción del costo unitario, cuando en realidad parte de la variación se explicaba por el cambio metodológico y no por una mejora operativa real (Horngren, 2012).
    Separador
    //- Inicio Tema2.5
    .row
        #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.5 Verificación integral de la asignación de costos según políticas organizacionales
    p(data-aos="fade-left") La verificación integral busca reunir en una sola revisión todos los elementos trabajados en el capítulo: clasificación, costos directos e indirectos, centros de costo, tasas, consistencia del método, documentación y políticas internas.
    p(data-aos="fade-left") El objetivo no consiste en revisar cada punto de manera aislada, sino en confirmar que el sistema de asignación funcione como un conjunto coherente y que las cifras finales de costos estén respaldadas por una lógica técnica uniforme. Esta mirada integral resulta importante porque un error pequeño en una sola parte del proceso puede alterar el resultado final y la interpretación de las desviaciones identificadas en el capítulo anterior.
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En la práctica, una verificación integral puede desarrollarse mediante un procedimiento por etapas:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Primero se revisan los costos directos.
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Luego se analizan los costos indirectos.
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Después se validan los centros y bases de reparto.
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Más adelante se revisan las tasas y soportes.
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-3
              p.mb-0 Finalmente se consolida un juicio sobre la razonabilidad del costo asignado.
    p(data-aos="fade-left") Este procedimiento puede apoyarse en <b>listas de chequeo, matrices de validación o formatos internos de revisión.</b> Lo importante es que la empresa pueda demostrar qué verificó, con qué evidencia lo hizo y qué hallazgos obtuvo.
    .row.justify-content-center.align-items-stretch.mt-5.mb-5
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 La verificación integral también permite <b>detectar diferencias entre áreas.</b> Por ejemplo, una planta puede clasificar un insumo como indirecto mientras contabilidad lo registra como material directo, o producción puede trabajar con una base de reparto distinta a la definida por el área de costos.
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img(src="@/assets/curso/tema2/img15.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 Estas inconsistencias no siempre se identifican en el cálculo final, pero sí afectan la calidad del sistema y dificultan el análisis comparativo. Por ello, la revisión integral no solo confirma cifras, sino que también evalúa la disciplina organizacional con la que la empresa administra sus costos.
    p(data-aos="fade-left") La integración de los diferentes criterios de revisión permite evaluar de manera más completa la coherencia técnica y documental del sistema de asignación de costos:
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
                        img(src='@/assets/curso/tema2/tarjeta05_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Paso 1. Revisión de costos directos
                        p Se revisan materiales y mano de obra identificables, esperando una correcta asociación al objeto de costo.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema2/tarjeta05_2.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Paso 2. Revisión de costos indirectos
                        p Se analizan los rubros que requieren reparto, verificando una clasificación y acumulación coherente.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema2/tarjeta05_3.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Paso 3. Validación de centros y bases
                        P Se revisan centros de costo y bases de actividad, buscando un reparto técnicamente razonable.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema2/tarjeta05_4.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Paso 4. Verificación de tasas y soportes
                        P Se valida el cálculo de tasas y documentos fuente, esperando una asignación consistente y trazable.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema2/tarjeta05_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Paso 5. Consolidación de hallazgos
                        P Se formula un juicio final de la revisión, generando un informe con observaciones y recomendaciones.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema2/img16.png', alt='', style="max-width: 250px", data-aos="zoom-in").m-auto
          //- Fin Carrusel          
    p(data-aos="fade-left") La aplicación ordenada de estas etapas contribuye a mejorar el control técnico del sistema de costos y fortalece la consistencia de la información utilizada para análisis y toma de decisiones.
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-14.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/pdf.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start.text-white
            h4.mb-2 Ejercicio aplicado 2. Verificación de criterios de clasificación y asignación de costos
            p.mb-0 Se invita a revisar el documento “Ejercicio aplicado 2. Verificación de criterios de clasificación y asignación de costos”, donde se aborda la revisión técnica de errores en la clasificación y asignación de costos dentro de un sistema de costeo empresarial.
          .mt-3.mt-lg-0.ps-lg-4            
            a.btn.w-buttons.d-flex.align-items-center.justify-content-center.p-3(
              :href="obtenerLink('/downloads/Anexos/Anexo_Ejercicio aplicado 2.pdf')" 
              target="_blank"
              style="background-color: #FFEB00; border-color: #FFEB00; color: #000;"
              )
                span.fw-bold.me-2 Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
