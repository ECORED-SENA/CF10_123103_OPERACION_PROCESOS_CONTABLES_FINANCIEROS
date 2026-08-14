<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Técnicas de análisis y alternativas de optimización de costos

    p(data-aos="fade-left") Después de comparar costos, verificar criterios de clasificación y consolidar hallazgos, la empresa necesita avanzar hacia una lectura más explicativa de las desviaciones y hacia la identificación de acciones que permitan mejorar el desempeño económico y operativo.
    .row.justify-content-center.align-items-stretch.mt-4
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 En este punto, el análisis de costos deja de centrarse únicamente en determinar cuánto varió el costo y pasa a identificar por qué ocurrió la variación, qué <b>impacto genera sobre la operación</b> y qué <b>acciones pueden implementarse para corregir o mejorar la situación detectada.</b> Esta transición resulta importante porque la revisión de costos solo genera valor real cuando se convierte en base para decisiones de optimización, priorización e intervención (Horngren, 2012).
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img(src="@/assets/curso/tema4/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 En la práctica empresarial, una variación de costos puede originarse por diferentes factores, entre ellos el aumento en los precios de los insumos, cambios en las cantidades consumidas, pérdidas de rendimiento operativo, bases de asignación poco adecuadas, estándares desactualizados o condiciones externas del mercado que afectan el comportamiento de los costos.
    Separador
    //- Inicio Tema4.1
    .row
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Técnicas de análisis de desviaciones y variaciones
    p(data-aos="fade-left") El análisis de desviaciones y variaciones busca explicar por qué un costo real se apartó de un <b>referente histórico, presupuestado o estándar.</b> La diferencia monetaria constituye únicamente el punto de partida; el verdadero valor del análisis consiste en descomponer esa variación y relacionarla con sus posibles causas. Para ello, pueden utilizarse varias técnicas complementarias:          
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-2    
        //- Carrusel
        .bg-full-width.mb-3(data-aos="fade-right")
          .px-4.px-md-5.pb-md-3             
            .carousel-bg
              .row.justify-content-center.align-items-center
                .col-lg-12.mb-3.mb-lg-0.order-lg-2
                  SlyderF(columnas="col-xl-4 col-lg-6")
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta01_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Análisis de causa raíz. 
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta01_2.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Diagrama de Pareto. 
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta01_3.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Descomposición de la variación. 
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta01_4.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Revisión de tendencias. 
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta01_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Análisis por escenarios. 
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta01_6.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Herramientas estadísticas básicas, como la regresión. 
            p.mt-4 Cada una aporta una mirada distinta y, en conjunto, ayudan a formular conclusiones técnicas mejor sustentadas (Horngren, 2012). La descomposición constituye una de las técnicas más útiles porque separa la variación total en componentes más fáciles de interpretar. Por ejemplo, una variación en materiales puede explicarse por precio y por cantidad.
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10
        .rounded-4.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-7.col-lg-9.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.banner-text.mb-4 La fórmula básica puede expresarse de la siguiente manera:
              .formula-destacada.mb-3.bg-color-6.p-3
                ul.lista-ul.color-vineta-custom.mb-0
                  li.d-flex.mt-2
                    i.fas.fa-check-circle.me-2
                    p.mb-0.fw-bold Variación total del material = Variación de precio + Variación de cantidad
                  li.d-flex.mt-2
                    i.fas.fa-check-circle.me-2
                    p.mb-0.fw-bold Variación de precio = (Precio real - Precio estándar) × Cantidad real
                  li.d-flex.mt-2
                    i.fas.fa-check-circle.me-2
                    p.mb-0.fw-bold Variación de cantidad = (Cantidad real - Cantidad estándar) × Precio estándar
            .col-12.col-md-5.col-lg-3.banner-img-container.d-flex.justify-content-center.align-items-center.bg-color-16
              img.img-fluid(src="@/assets/curso/tema4/img2.svg" alt="" style="width: 200px")            
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Si una empresa esperaba comprar 1.000 kg de un insumo a $ 5.000 por kilogramo, pero terminó comprando 1.050 kg a $ 5.400, el análisis sería el siguiente:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0.fw-bold Variación de precio = ($ 5.400 - $ 5.000) × 1.050 = $ 420.000
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0.fw-bold Variación de cantidad = (1.050 - 1.000) × $ 5.000 = $ 250.000 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0.fw-bold Variación total = $ 670.000 
        p Esta descomposición permite identificar que la mayor parte de la desviación provino del precio y no únicamente del mayor consumo, lo cual modifica el enfoque del análisis y de la acción correctiva (García Colín, 2014).
    p.mt-5(data-aos="fade-left") Si una empresa identifica una variación desfavorable en materiales, la causa inmediata puede relacionarse con un consumo superior al estándar; sin embargo, la causa raíz puede originarse en fallas de dosificación, desperdicios durante <b>la manipulación, mantenimiento insuficiente de la maquinaria o problemas en la calidad del insumo utilizado.</b>
    .row.mb-3.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema4/img4.png' style="width: 550px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p De manera similar, <b>el diagrama de Pareto</b> ayuda a priorizar, ya que permite identificar cuáles causas explican la mayor parte del impacto. En muchas situaciones, cerca del 20 % de las causas puede explicar aproximadamente el 80 % de la desviación, orientando con mayor claridad el esfuerzo de análisis (Cuevas Villegas, 2010).
        p.mb-0 La revisión de tendencias y la regresión simple permiten valorar si la variación responde a un patrón recurrente. Por ejemplo, si el costo unitario aumenta cada mes a medida que disminuye el volumen producido, la empresa puede inferir que existe una relación entre el nivel de actividad y el costo unitario, especialmente por el peso de los costos indirectos fijos.
    p(data-aos="fade-left") La regresión básica no siempre resulta necesaria en análisis pequeños, pero puede ser útil cuando la empresa necesita evaluar relaciones entre:        
    //- Inicio Tarjetas
    .row.justify-content-center.my-4(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema4/tarjeta_02_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Costo y volumen
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema4/tarjeta_02_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Costo y tiempo de proceso
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema4/tarjeta_02_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Costo y utilización de recursos
    //- Fin Tarjetas
    p(data-aos="fade-left") En contextos menos sofisticados, una lectura sistemática de tendencias también puede ofrecer hallazgos suficientes para construir conclusiones técnicas iniciales. El análisis de desviaciones puede apoyarse en diferentes enfoques de interpretación que ayudan a reconocer causas críticas y prioridades de mejora dentro del proceso de costos:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Descomposición de variaciones")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/tema4/tarjeta_03_1.png')
              .col-md-7.mb-4.mb-md-0
                h4 Descomposición de variaciones
                p Permite identificar si la desviación proviene del precio, la cantidad, el tiempo o los costos indirectos de fabricación. Su utilidad consiste en separar la variación total en componentes analizables.
          .py-3.py-md-4(titulo="Causa raíz")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/tarjeta_03_1.png')
              .col-md-7
                h4 Causa raíz
                p Ayuda a identificar el origen real del problema y evita explicaciones superficiales sobre la desviación encontrada.
          .py-3.py-md-4(titulo="Pareto")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/tarjeta_03_1.png')
              .col-md-7
                h4 Pareto
                p Facilita reconocer qué causas concentran el mayor impacto y permite priorizar los factores más relevantes.
          .py-3.py-md-4(titulo="Tendencias")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/tarjeta_03_1.png')
              .col-md-7
                h4 Tendencias
                p Permite establecer si la desviación es puntual o recurrente mediante la revisión de varios períodos.
          .py-3.py-md-4(titulo="Escenarios")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/tarjeta_03_1.png')
              .col-md-7
                h4 Escenarios
                p Ayuda a evaluar qué podría ocurrir si cambian variables relevantes, anticipando posibles comportamientos futuros del costo.
          .py-3.py-md-4(titulo="Regresión simple")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/tarjeta_03_1.png')
              .col-md-7
                h4 Regresión simple
                p Permite identificar relaciones entre el costo y variables explicativas cuando existen suficientes datos para análisis cuantitativos.
    //- Cierres Pestanas horizontales
    p La utilización combinada de estas técnicas fortalece la interpretación de los hallazgos y mejora la capacidad de la empresa para formular acciones de control y optimización de costos.
    .row.justify-content-center.align-items-stretch.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema4/img5.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de bebidas detecta una variación desfavorable de $ 1.200.000 en materiales durante el mes. La descomposición de variaciones permite identificar que $ 850.000 provienen del aumento en el precio del azúcar y $ 350.000 del mayor consumo. Posteriormente, el análisis de causa raíz establece que el incremento de consumo se relaciona con fallas de calibración en el sistema de dosificación. El análisis de Pareto mensual, además, evidencia que dos insumos explican el 76 % de las variaciones del trimestre. Esta lectura hace más útil la revisión, porque la empresa ya no enfrenta una diferencia genérica, sino un conjunto de causas concretas y priorizables (García Colín, 2014).
    Separador
    //- Inicio Tema4.2
    .row
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Alternativas de optimización de costos
    p(data-aos="fade-left") Una vez identificadas las desviaciones y sus causas probables, la empresa debe valorar qué alternativas pueden reducir el costo o mejorar su comportamiento sin afectar de manera negativa la calidad, el cumplimiento o la operación.
    p(data-aos="fade-right") <b>Optimizar costos</b> no significa recortar indiscriminadamente; significa mejorar el uso de los recursos para obtener un mejor <b>resultado económico y operativo.</b> En algunas situaciones, la optimización se logra reduciendo desperdicios; en otras, ajustando tiempos, renegociando condiciones de compra, actualizando bases de asignación o rediseñando actividades con bajo valor agregado (Hansen, 2007).
    p(data-aos="fade-left") La identificación de oportunidades de optimización debe partir del análisis y no de intuiciones generales. Por ejemplo:
    //- Inicio Tarjetas
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.d-flex.flex-column.h-100.p-4
          .row.justify-content-center.mb-3
            .col-7.align-items-center
              figure
                img.mx-auto(src='@/assets/curso/tema4/tarjeta_04_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          h4.text-center Precio elevado de un insumo crítico
          p.mb-0.text-center Revisar proveedores o renegociar condiciones de compra.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4.d-flex.flex-column.h-100.p-4
          .row.justify-content-center.mb-3
            .col-7.align-items-center
              figure
                img.mx-auto(src='@/assets/curso/tema4/tarjeta_04_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          h4.text-center Cantidad consumida superior a la esperada
          p.mb-0.text-center Fortalecer el control de desperdicio, rediseñar el proceso o revisar el estándar técnico.
      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.color-primario.p-4.d-flex.flex-column.h-100.p-4
          .row.justify-content-center.mb-3
            .col-7.align-items-center
              figure
                img.mx-auto(src='@/assets/curso/tema4/tarjeta_04_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          h4.text-center Problemas relacionados con costos indirectos
          p.mb-0.text-center Revisar la utilización de equipos, la distribución de energía, la organización de centros de costo o la base de reparto aplicada.
    //- Fin Tarjetas
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema4/img6.png' style="width: 500px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p.bg-color-5.p-4.rounded-4 Cada alternativa debe guardar relación con el problema que se pretende corregir. La viabilidad también hace parte del análisis. Una alternativa puede resultar técnicamente atractiva, pero difícil de implementar por limitaciones de <b>recursos, tiempo, capacidad operativa o impacto sobre la continuidad del proceso.</b> Por esta razón, junto con la oportunidad de ahorro, conviene revisar:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-2
              p.mb-0 Factibilidad técnica. 
            li.d-flex
              i.fas.fa-check-circle.me-2
              p.mb-0 Tiempo de implementación. 
            li.d-flex
              i.fas.fa-check-circle.me-2
              p.mb-0 Recursos requeridos. 
            li.d-flex
              i.fas.fa-check-circle.me-2
              p.mb-0 Impacto sobre la operación. 
    p(data-aos="fade-left") Una mejora que genera un ahorro de $500.000, pero exige detener la producción durante varios días, puede resultar menos conveniente que otra que ahorra $350.000 con menor afectación operativa. La optimización, entonces, no depende únicamente del valor monetario del ahorro, sino también de la relación entre beneficio, costo de implementación y efecto sobre el funcionamiento de la empresa (García Colín, 2014).
    p(data-aos="fade-left") La evaluación de alternativas de optimización requiere considerar simultáneamente el impacto económico esperado, la factibilidad de aplicación y las posibles implicaciones sobre la operación:
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img.mb-3(src="@/assets/curso/tema4/img7.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Precio alto del insumo principal")
              p.mb-4 Renegociar la compra o revisar proveedores. El ahorro esperado puede alcanzar $800.000 mensuales y el impacto operativo inicial suele ser bajo o medio.
          .row(titulo="Consumo superior al estándar")
              p.mb-4 Mejorar la dosificación o fortalecer el control de desperdicio. El ahorro esperado puede aproximarse a $600.000 mensuales, con un impacto operativo medio.
          .row(titulo="Tiempo de operación elevado")
              p.mb-4 Ajustar el método de trabajo o la secuencia del proceso. Esta alternativa puede generar ahorros cercanos a $450.000 mensuales y requiere un impacto operativo medio.
          .row(titulo="Costos indirectos crecientes por energía")
              p.mb-4 Revisar el uso de equipos y reducir tiempos muertos. El ahorro esperado puede ser de aproximadamente $300.000 mensuales y el impacto operativo inicial suele ser bajo.
          .row(titulo="Asignación débil de indirectos")
              p.mb-4 Actualizar bases de reparto y centros de costo. Aunque el impacto monetario puede ser indirecto, mejora la confiabilidad del costo y presenta bajo impacto operativo inicial.
    //- Fin Accordion
    p.mb-4(data-aos="fade-left") La relación entre problema identificado y alternativa de optimización facilita priorizar acciones de mejora con mayor sustento técnico y operativo.
    .row.justify-content-center.align-items-stretch.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema4/img8.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p Una empresa de productos de aseo detecta que el mayor sobrecosto del trimestre se concentra en el consumo de envases por desperdicio durante el proceso de envasado. Después de revisar el proceso, identifica tres alternativas:
        ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-1
              i.fas.fa-check-circle.me-2
              p.mb-0 Ajustar la calibración de la máquina. 
            li.d-flex
              i.fas.fa-check-circle.me-2
              p.mb-0 Cambiar el proveedor de envases. 
            li.d-flex.mb-4
              i.fas.fa-check-circle.me-2
              p.mb-0 Reforzar la inspección en línea. 
        p.mb-0 La primera opción requiere una intervención técnica breve y genera el mayor ahorro esperado con menor afectación operativa. Por esta razón, aparece como la alternativa más razonable para iniciar el plan de optimización (Hansen, 2007).
    Separador
    //- Inicio Tema4.3
    .row
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Análisis de escenarios de costos y beneficios
    .row.mb-3.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema4/img9.png' style="width: 550px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p El análisis de escenarios permite explorar cómo cambiarían los costos y los resultados económicos si se modifican determinadas variables del proceso. Esta herramienta resulta útil porque la empresa no siempre toma decisiones en contextos de certeza; en muchas situaciones debe valorar varias alternativas posibles y anticipar su impacto antes de intervenir.
        p.mb-0 Por esta razón, construir escenarios base, optimista y pesimista ayuda a comprender distintos rangos de comportamiento del costo y facilita la preparación de decisiones más razonables frente a condiciones cambiantes. <b>El escenario base</b> representa la situación actual o la condición más probable de la operación. <b>El escenario optimista</b> considera condiciones favorables, como menor desperdicio, mejor rendimiento y reducción en los precios de compra. En contraste, el escenario pesimista proyecta posibles efectos negativos derivados del incremento en el precio de los insumos, la disminución de la productividad o el deterioro del rendimiento operativo.
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta comparación no busca anticipar exactamente el futuro, sino medir la sensibilidad del costo frente a cambios relevantes de la operación. En términos prácticos, el análisis de escenarios ayuda a responder preguntas como las siguientes:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 ¿Qué ocurre si el material aumenta 6 %? 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 ¿Cómo cambia el costo si la productividad mejora 8 %? 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 ¿Qué efecto tendría una reducción de la merma sobre el margen? 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 ¿Qué tan sensible es el costo unitario frente al volumen producido?
    p.my-4(data-aos="fade-left") El análisis de sensibilidad complementa esta lectura porque permite identificar cuánto se altera el costo o el beneficio cuando cambia una variable específica.
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-10
        .rounded-4.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-7.col-lg-9.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.banner-text.mb-4 Una fórmula sencilla para proyectar el impacto financiero puede expresarse de la siguiente manera:
              .formula-destacada
                p.fw-bold.mb-4.bg-color-6.p-3 Impacto financiero estimado = Ahorro o sobrecosto unitario × Volumen proyectado
              p Si una mejora reduce el costo unitario en $180 y la producción mensual corresponde a 4.000 unidades, el impacto financiero mensual estimado será:
              p $ 180 × 4.000 = $ 720.000
              p Esta operación ayuda a que la empresa no evalúe la mejora únicamente desde la lógica técnica, sino también desde el efecto económico esperado (García Colín, 2014).
            .col-12.col-md-5.col-lg-3.banner-img-container.d-flex.justify-content-center.align-items-center.bg-color-19
              img.img-fluid(src="@/assets/curso/tema4/img11.svg" alt="" style="width: 200px")
    p.mb-0(data-aos="fade-left") La construcción de escenarios permite valorar posibles cambios en el comportamiento del costo y apoyar decisiones más informadas frente a condiciones futuras de operación:
    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Base")
            .row.align-items-center
              .col-md-5
                figure
                  img(src='@/assets/curso/tema4/tarjeta_05_1.png')
              .col-md-7.mb-4.mb-md-0
                h4 Base
                p Presenta un costo unitario estimado de $ 7.200 para 3.000 unidades, con un impacto total de $ 21.600.000. Representa el referente actual de la operación.
          .py-3.py-md-4(titulo="Optimista")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/tarjeta_05_2.png')
              .col-md-7
                h4 Optimista
                p Proyecta un costo unitario de $ 6.950 para 3.000 unidades, generando un impacto total de $ 20.850.000. Refleja mejoras asociadas a menor consumo y mejor rendimiento.
          .py-3.py-md-4(titulo="Pesimista")
            .row.align-items-center
              .col-md-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/tarjeta_05_3.png')
              .col-md-7
                h4 Pesimista
                p Considera un costo unitario estimado de $ 7.480 para 3.000 unidades, con un impacto total de $ 22.440.000. Representa un aumento de costos por incremento de insumos y baja eficiencia operativa.
    //- Cierres Pestanas horizontales
    p(data-aos="fade-left") La comparación entre escenarios permite valorar riesgos y oportunidades antes de implementar acciones de mejora, fortaleciendo la toma de decisiones relacionadas con costos y rentabilidad.
    .row.justify-content-center.align-items-stretch.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema4/img12.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de alimentos proyecta una mejora en el proceso de empaque que permitiría reducir el desperdicio en un 2 %. En el escenario base, el costo unitario corresponde a $ 4.850; en el escenario optimista disminuye a $ 4.720; y en el escenario pesimista, debido al incremento de materiales y retrasos operativos, aumenta a $ 4.980. La comparación permite identificar que la empresa no solo debe valorar el ahorro potencial, sino también el riesgo de que determinadas condiciones operativas limiten el efecto esperado de la mejora (Cuevas Villegas, 2010).
    Separador
    //- Inicio Tema4.4
    .row
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Criterios de priorización de acciones de mejora
    p(data-aos="fade-left") No todas las oportunidades de mejora pueden ejecutarse al mismo tiempo ni producen el mismo efecto sobre la operación. Por esta razón, <b>la empresa necesita priorizar.</b> Priorizar significa <b>ordenar las acciones posibles</b> según criterios que permitan decidir cuáles deben implementarse primero, cuáles pueden esperar y cuáles no resultan convenientes en el momento actual.
    p(data-aos="fade-left") En la <b>gestión de costos</b>, esta priorización resulta importante porque evita dispersar recursos en múltiples iniciativas menores y concentra el esfuerzo en aquellas alternativas con mejor relación entre <b>impacto, viabilidad y alineación</b> con los objetivos de la organización. Entre los criterios de priorización más frecuentes se encuentran:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-2    
        //- Carrusel
        .bg-full-width.mb-3(data-aos="fade-right")
          .px-4.px-md-5.pb-md-3             
            .carousel-bg
              .row.justify-content-center.align-items-center
                .col-lg-12.mb-3.mb-lg-0.order-lg-2
                  SlyderF(columnas="col-xl-4 col-lg-6")
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta_06_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Impacto económico
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta_06_2.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Factibilidad técnica
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta_06_3.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Alineación estratégica
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta_06_4.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Tiempo de implementación
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta_06_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Recursos requeridos
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema4/tarjeta_06_6.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Riesgo operativo
            .row.mt-5(data-aos="fade-left")
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema4/img13.png", data-aos="zoom-in" style="width: 600px")
              .col-lg-7        
                .row.align-items-start.mb-10
                  .col-lg-auto
                    img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p El impacto económico permite identificar cuánto ahorro puede generar la acción o cuánto costo puede evitarse. La factibilidad técnica ayuda a establecer si la empresa realmente tiene capacidad para implementarla. La alineación estratégica revisa si la medida contribuye a las metas del negocio, mientras que el tiempo de implementación y los recursos requeridos permiten valorar qué tan demandante será su aplicación.
                p Por su parte, el riesgo operativo facilita determinar si la mejora podría afectar la continuidad, la calidad o el cumplimiento de la operación. Una alternativa con alto ahorro, pero muy baja factibilidad técnica, puede quedar por debajo de otra con ahorro medio, aunque más realista y segura de implementar.
              p.mt-3 Una herramienta práctica para apoyar esta evaluación es la matriz de priorización. La empresa puede asignar una escala, por ejemplo, de 1 a 5, a cada criterio y posteriormente sumar los puntajes para obtener una lectura comparativa.
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10
        .rounded-4.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-7.col-lg-9.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.banner-text.mb-4 La fórmula básica puede expresarse de la siguiente manera:
              .formula-destacada
                p.fw-bold.mb-4.bg-color-6.p-3.text-center Puntaje total de prioridad = Impacto + Factibilidad + Alineación + Tiempo + Recursos + Riesgo invertido
              p El criterio de riesgo invertido significa que una alternativa con menor riesgo obtiene una mejor valoración.
            .col-12.col-md-5.col-lg-3.banner-img-container.d-flex.justify-content-center.align-items-center.bg-color-20
              img.img-fluid(src="@/assets/curso/tema4/img15.svg" alt="" style="width: 200px")
    p El propósito no consiste en construir un modelo complejo, sino en ordenar las opciones disponibles con mayor criterio y evitar decisiones basadas únicamente en intuición o urgencia del momento (García Colín, 2014). La priorización de acciones permite distinguir cuáles alternativas ofrecen mejores condiciones de implementación y mayor aporte potencial frente a los objetivos de mejora de costos:
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img.mb-3(src="@/assets/curso/tema4/img16.png", alt="").img400.m-auto
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Ajustar dosificación")
              p.mb-4 Presenta alto impacto económico, buena factibilidad técnica, implementación relativamente rápida y bajo riesgo operativo. Obtiene un puntaje total de 21, lo que la convierte en una alternativa prioritaria.
          .row(titulo="Cambiar proveedor")
              p.mb-4 Genera un impacto económico medio y requiere validaciones comerciales y operativas adicionales. Su puntaje total es de 16, indicando prioridad intermedia.
          .row(titulo="Rediseñar proceso completo")
              p.mb-4 Aunque ofrece potencial de ahorro alto, exige mayores recursos, más tiempo de implementación y presenta mayor complejidad operativa. Su puntaje total es de 11.
          .row(titulo="Actualizar base de CIF")
              p.mb-4 Tiene impacto moderado, pero alta facilidad de implementación, bajos requerimientos operativos y bajo riesgo. Obtiene el puntaje más alto, con 23 puntos.          
    //- Fin Accordion
    p(data-aos="fade-left") La utilización de criterios comparativos permite priorizar acciones de mejora de manera más objetiva y facilita la toma de decisiones relacionadas con optimización de costos.
    .row.justify-content-center.align-items-stretch.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema4/img17.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p Una empresa dispone de cuatro alternativas para reducir el costo de operación:
        ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-1
              i.fas.fa-check-circle.me-2
              p.mb-0 Renegociar materia prima. 
            li.d-flex
              i.fas.fa-check-circle.me-2
              p.mb-0 Ajustar la tasa de costos indirectos de fabricación. 
            li.d-flex
              i.fas.fa-check-circle.me-2
              p.mb-0 Rediseñar el <i>layout</i> de planta. 
            li.d-flex.mb-4
              i.fas.fa-check-circle.me-2
              p.mb-0 Automatizar una etapa del proceso. 
        p.mb-0 Aunque la automatización promete el mayor ahorro potencial, también requiere una inversión alta y un mayor tiempo de implementación. En contraste, la actualización de la base de costos indirectos de fabricación ofrece un impacto moderado, pero puede ejecutarse rápidamente y con bajo riesgo operativo. La priorización permite identificar que no siempre la alternativa con mayor ahorro inmediato representa la opción más conveniente para iniciar el proceso de mejora.
    Separador
    //- Inicio Tema4.5
    .row
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 <i>Benchmarking,</i> mejores prácticas, viabilidad e impacto operativo
    .row.justify-content-center.align-items-stretch.mb-3
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 El <b><i>benchmarking</i></b> consiste en comparar el desempeño de costos con <b>referentes internos o externos</b> para identificar oportunidades de mejora. Esta comparación puede realizarse entre distintos períodos de la empresa, entre líneas o procesos internos, o frente a referentes del sector cuando existe información disponible para efectuar el análisis comparativo. 
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img(src="@/assets/curso/tema4/img18.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 Su valor no radica en copiar de manera mecánica lo que hacen otras organizaciones, sino en reconocer <b>brechas de desempeño</b> y utilizar esa información para analizar qué prácticas podrían adaptarse a la realidad de la empresa.
    p.mb-5(data-aos="fade-left") En la gestión de costos, esta herramienta ayuda a validar si un indicador se encuentra dentro de un rango razonable o si evidencia una debilidad relevante frente a estándares de la industria o de la propia organización (Silveira, 2010).
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las mejores prácticas corresponden a formas de trabajo que han demostrado resultados favorables y que pueden servir como referencia para mejorar el costo sin afectar la operación. En algunos casos, estas prácticas se relacionan con:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-2
              p.mb-0 Compras. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Control de consumos. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Mantenimiento preventivo. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Actualización de estándares. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Uso de tecnología. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Diseño de reportes más claros. 
    p(data-aos="fade-left")  Sin embargo, una práctica solo puede considerarse útil si demuestra viabilidad dentro del contexto real de la empresa. Esto significa que no basta con que funcione en otra organización; también debe evaluarse si puede implementarse con <b>los recursos, el nivel técnico, el tiempo y la estructura disponibles.</b>              
    .row.mt-5.mb-5(data-aos="fade-left")
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/img20.png", data-aos="zoom-in" style="width: 600px")
      .col-lg-7        
        .row.align-items-start.mb-10
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p El impacto operativo constituye un filtro esencial dentro de esta evaluación. Una acción puede reducir costos, pero al mismo tiempo deteriorar <b>tiempos de entrega, aumentar reprocesos o afectar la calidad.</b> Por esta razón, la evaluación no debe concentrarse únicamente en el ahorro esperado. También es importante analizar cómo la medida implementada puede afectar el flujo de trabajo, la utilización de los equipos, la carga asignada al personal, la continuidad del proceso y la percepción del cliente interno o externo frente al servicio o producto generado.
        p Una mejora técnicamente adecuada en el análisis puede resultar inconveniente si su impacto operativo es negativo o difícil de sostener (Horngren, 2012). La comparación con referentes internos o externos permite valorar oportunidades de mejora y analizar qué prácticas pueden adaptarse de manera viable a las condiciones reales de la operación: 
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-4
      .p-4.p-md-5(data-aos="fade-right")
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/tarjeta_07_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 <i>Benchmarking</i> interno
              p Permite analizar cómo se comporta una línea frente a otras de la misma empresa, facilitando la identificación de brechas internas de desempeño.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/tarjeta_07_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 <i>Benchmarking</i> externo
              p Ayuda a verificar si el indicador se encuentra alineado con referentes del sector y permite valorar competitividad y posición relativa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/tarjeta_07_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Mejor práctica
              p Permite identificar acciones que han mostrado resultados favorables en otros contextos y que podrían adaptarse a la organización.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/tarjeta_07_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Viabilidad
              p Evalúa si la empresa realmente cuenta con capacidad técnica, operativa y financiera para implementar la alternativa propuesta.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/tarjeta_07_5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Impacto operativo
              p Permite analizar si la mejora afecta tiempos, calidad, continuidad del proceso o funcionamiento general de la operación.
    //- Fin Slideshow
    p.mb-4(data-aos="fade-left") La evaluación conjunta de estos elementos facilita seleccionar alternativas de mejora más sostenibles y alineadas con las condiciones reales de la empresa.    
    .row.justify-content-center.align-items-stretch.mb-5.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema4/img21.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p Una empresa de productos de limpieza compara su consumo de envases por unidad con otra línea interna de mejor desempeño y encuentra que su desperdicio es 1,8 puntos porcentuales más alto.
        p.mb-0 Posteriormente, revisa una práctica de control visual utilizada en otra planta del sector y concluye que puede adaptarla sin realizar grandes inversiones. Sin embargo, antes de implementarla, la empresa verifica que el cambio no afecte el ritmo de envasado ni genere demoras en despacho. Esta evaluación permite reconocer que el <i>benchmarking</i> y las mejores prácticas solo resultan útiles cuando se acompañan de análisis de viabilidad e impacto operativo.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-14.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/pdf.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start.text-white
            h4.mb-2 Ejercicio aplicado 4. Técnicas de análisis y alternativas de optimización de costos
            p.mb-0 Se invita a revisar el documento “Ejercicio aplicado 4. Técnicas de análisis y alternativas de optimización de costos”, donde se aborda el análisis de desviaciones en costos y la evaluación de alternativas de mejora dentro de un proceso productivo. 
          .mt-3.mt-lg-0.ps-lg-4            
            a.btn.w-buttons.d-flex.align-items-center.justify-content-center.p-3(
              :href="obtenerLink('/downloads/Anexo_Ejercicio_aplicado_4.pdf')" 
              target="_blank"
              style="background-color: #FFEB00; border-color: #FFEB00; color: #000;"
              )
                span.fw-bold.me-2 Descargar
                i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema3',
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
