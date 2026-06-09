<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Propuestas, socialización e implementación de mejoras de costos
    .row.mb-3.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema5/img1.png' style="width: 550px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p La revisión de costos solo alcanza un efecto real en la empresa cuando los hallazgos derivados del análisis se transforman en propuestas concretas, en mecanismos de seguimiento y en decisiones de implementación. De lo contrario, la información técnica queda reducida a un <b>diagnóstico sin capacidad de modificar el comportamiento operativo o económico de la organización.</b>
        p.mb-0 La lógica de mejora continua y de toma de decisiones basada en evidencia exige precisamente ese tránsito entre análisis, acción y revisión.  En términos empresariales, esta etapa resulta importante porque permite alinear el análisis de costos con los objetivos de la organización y con la necesidad de sostener decisiones verificables en el tiempo. Formular una mejora no consiste únicamente en recomendar “reducir costos”, sino en:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-2    
        //- Carrusel
        .bg-full-width.mb-3.mt-3(data-aos="fade-right")
          .px-4.px-md-5.pb-md-3             
            .carousel-bg
              .row.justify-content-center.align-items-center
                .col-lg-12.mb-3.mb-lg-0.order-lg-2
                  SlyderF(columnas="col-xl-4 col-lg-6")
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema5/tarjeta_01_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Describir el problema.
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema5/tarjeta_01_2.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Sustentar la alternativa elegida.
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema5/tarjeta_01_3.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Estimar su impacto.
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema5/tarjeta_01_4.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Asignar responsables.
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema5/tarjeta_01_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Definir plazos.
                    .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                      img(src='@/assets/curso/tema5/tarjeta_01_6.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                      p Establecer indicadores que permitan valorar el avance.
            p.mt-5 De igual manera, socializar resultados e implementar acciones requiere canales, formatos y controles que faciliten comunicar el progreso, identificar brechas y aprender de los resultados obtenidos.
    Separador
    //- Inicio Tema5.1
    .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Formatos de propuesta de mejora de costos
    p(data-aos="fade-left") Una propuesta de mejora de costos necesita una estructura clara para evitar convertirse en una recomendación general sin capacidad de ejecución. En la práctica, un formato útil debe permitir <b>identificar el problema, describir la situación actual, presentar la alternativa de solución propuesta, justificar por qué</b> conviene implementarla y estimar los recursos, tiempos y beneficios esperados derivados de su aplicación.
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta organización mejora la calidad del análisis porque obliga a que <b>la propuesta se apoye en evidencia y en criterios de viabilidad,</b> y no únicamente en intuiciones o decisiones apresuradas. La toma de decisiones basada en pruebas y la mejora continua se fortalecen cuando las organizaciones formulan acciones respaldadas en datos confiables y en una lectura ordenada del problema.  En contextos de costos, el formato de propuesta debe incorporar, como mínimo, los siguientes elementos:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-2
              p.mb-0 Descripción del problema. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Análisis de la situación. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Alternativas evaluadas. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Propuesta recomendada. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Plan básico de implementación. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Presupuesto requerido. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Beneficios esperados. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Forma de seguimiento. 
    p.mb-5(data-aos="fade-left") Una alternativa puede resultar técnicamente atractiva, pero inconveniente si contradice metas relacionadas con calidad, seguridad, cumplimiento o servicio. Por esta razón, la propuesta no debe formularse de manera aislada, sino conectada con el marco operativo y estratégico de la empresa. La mejora continua, entendida como un proceso permanente de revisión y ajuste, exige precisamente que cada mejora se valore según su contribución al desempeño general y no únicamente por el ahorro inmediato que podría generar. 
    p(data-aos="fade-left") La formulación organizada de propuestas permite relacionar el análisis técnico con acciones concretas de mejora y facilita evaluar su viabilidad dentro de la operación:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-right")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_02_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Problema identificado
              p Describe la desviación o ineficiencia detectada y delimita la necesidad de intervención.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_02_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Análisis de situación
              p Resume causas, evidencias e impacto del problema, sustentando la necesidad de actuar.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_02_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Alternativas evaluadas
              p Presenta las opciones analizadas antes de decidir, evitando propuestas únicas sin comparación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_02_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Propuesta recomendada
              p Define la acción de mejora seleccionada como respuesta principal al problema identificado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_02_5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Plan de implementación
              p Organiza actividades, responsables y tiempos para hacer operativa la propuesta.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_02_6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Presupuesto
              p Relaciona los recursos requeridos y facilita valorar el costo de ejecución.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_02_7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Beneficios esperados
              p Permite estimar ahorro, eficiencia o impacto operativo esperado a partir de la implementación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_02_8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Seguimiento
              p Define indicadores y frecuencia de revisión para facilitar el control posterior de la mejora.
    //- Fin Slideshow
    p(data-aos="fade-left") La organización estructurada de esta información fortalece la calidad técnica de las propuestas y facilita su evaluación, aprobación e implementación dentro de la empresa.
    .row.justify-content-center.align-items-stretch.mb-5.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema5/img3.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de panificación detecta que el consumo de harina por lote supera en un 6 % el estándar establecido. Después de realizar el análisis correspondiente, formula una propuesta de mejora en la que identifica el problema y compara tres alternativas: cambio de proveedor, recalibración del dosificador y fortalecimiento del control manual. Tras evaluar las opciones, la empresa recomienda la recalibración del equipo, debido a que representa un ahorro mensual estimado de $ 720.000, requiere una inversión baja y genera menor afectación sobre la continuidad del proceso productivo.
    Separador
    //- Inicio Tema5.2
    .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Indicadores de seguimiento de acciones de mejora
    p(data-aos="fade-left") Una vez formulada la propuesta, la empresa necesita indicadores que permitan verificar si la acción realmente se está ejecutando y si produce el efecto esperado. <b>Los indicadores son instrumentos de medición</b> que ayudan a evaluar objetivamente <b>la evolución de un sistema,</b> un proceso o una acción en relación con una meta o referencia.
    p(data-aos="fade-left") En el ámbito de costos, su valor radica en permitir que las acciones de mejora puedan evaluarse a partir de resultados concretos. No es suficiente indicar que una medida fue implementada; también se requiere comprobar si logró reducir el costo, mejorar el rendimiento operativo, disminuir las desviaciones detectadas o fortalecer la calidad del proceso.
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los indicadores de seguimiento deben ser pertinentes para el problema que se desea atender. Por ejemplo:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Si la acción de mejora busca disminuir el consumo de material, el indicador debería centrarse en el comportamiento del consumo unitario, el porcentaje de desperdicio o la variación frente al estándar. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-3
              p.mb-0 Si la propuesta busca corregir una asignación de costos indirectos de fabricación, el seguimiento debería revisar la consistencia de la tasa aplicada, la variación del costo indirecto por unidad o la disminución de diferencias entre centros de costo.
    p.mb-5(data-aos="fade-left") La formulación rigurosa de indicadores fortalece la toma de decisiones porque permite organizar y desagregar la información de manera útil para el control y el seguimiento de los resultados. En la práctica, es recomendable que cada indicador cuente con una ficha básica que incluya el nombre, la fórmula de cálculo, la unidad de medida, la fuente de información, la frecuencia de medición, la línea base, la meta establecida y el responsable de su seguimiento.              
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10
        .rounded-4.overflow-hidden
          .row.g-0.align-items-stretch
            .col-12.col-md-7.col-lg-9.p-4.p-lg-5.text-start.bg-color-2.d-flex.flex-column.justify-content-center
              p.banner-text.mb-4 Algunas fórmulas frecuentes en seguimiento de costos son las siguientes:
              .formula-destacada.mb-3.bg-color-6.p-3
                ul.lista-ul.color-vineta-custom.mb-0
                  li.d-flex.mt-2
                    i.fas.fa-check-circle.me-2
                    p.mb-0.fw-bold Porcentaje de reducción del costo = (Costo base – Costo actual) / Costo base × 100
                  li.d-flex.mt-2
                    i.fas.fa-check-circle.me-2
                    p.mb-0.fw-bold Cumplimiento de implementación = (Acciones ejecutadas / Acciones programadas) × 100
                  li.d-flex.mt-2
                    i.fas.fa-check-circle.me-2
                    p.mb-0.fw-bold Ahorro acumulado = Ahorro unitario × Volumen real
              p.mt-3 Estas fórmulas no sustituyen el análisis, pero sí permiten construir evidencia de avance y dar seguimiento a las acciones con mayor disciplina.
            .col-12.col-md-5.col-lg-3.banner-img-container.d-flex.justify-content-center.align-items-center.bg-color-21
              img.img-fluid(src="@/assets/curso/tema5/img5.svg" alt="" style="width: 250px")
    p.mb-5(data-aos="fade-left") La siguiente tabla presenta indicadores básicos utilizados para medir el avance y el efecto de las acciones de mejora implementadas en costos.              
    //- Inicio Tabla
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-md-auto
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Indicadores de seguimiento de acciones de mejora de costos
        .tabla-a
          table
            thead
              tr
                th(style="width: 25%") Indicador
                th(style="width: 35%") Fórmula básica
                th(style="width: 35%") Utilidad práctica
            tbody
              tr
                td Reducción del costo unitario
                td ((Costo base - costo actual) / costo base) × 100
                td Mide la disminución del costo por unidad.
              tr
                td Reducción del desperdicio
                td ((Desperdicio base - desperdicio actual) / desperdicio base) × 100
                td Valora mejoras en el consumo de materiales.
              tr
                td Cumplimiento de implementación
                td ((Acciones ejecutadas / acciones programadas)) × 100
                td Controla el avance del plan de mejora.
              tr
                td Ahorro acumulado
                td Ahorro unitario × volumen real
                td Estima el impacto económico logrado con la implementación.
              tr
                td Variación frente al estándar
                td Costo real - costo estándar
                td Mide cercanía al comportamiento esperado.
              tr
                td Tiempo de implementación
                td Fecha real - fecha programada
                td Evalúa oportunidad en la ejecución de las acciones.
    p(data-aos="fade-left") La utilización sistemática de estos indicadores fortalece el seguimiento de las acciones de mejora y facilita evaluar objetivamente sus resultados dentro de la organización.
    .row.justify-content-center.align-items-stretch.mb-5.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema5/img6.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de productos lácteos implementa una mejora para reducir el desperdicio de envases. Como línea base, define un desperdicio del 4,8 % y establece una meta del 3,5 % en un período de dos meses. Después de seis semanas, el indicador registra un valor de 3,7 %. Aunque la meta todavía no se alcanza completamente, el seguimiento ya permite identificar una reducción importante y calcular un ahorro acumulado de $ 1.260.000 durante el período. Este resultado confirma que la acción implementada avanza en una dirección favorable y proporciona evidencia objetiva para continuar el seguimiento del proceso de mejora.
    Separador
    //- Inicio Tema5.3
    .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Protocolos de socialización de resultados
    p(data-aos="fade-left") A continuación, se presenta un pódcast sobre los protocolos de socialización de resultados, enfocado en la importancia de la comunicación organizada y estratégica dentro de los procesos de mejora de costos y gestión empresarial.
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
                  h5.mb-3.fw-bold Protocolos de socialización de resultados en la mejora empresarial
                  TarjetaAudio.color-primario(
                    texto="" 
                    :audio="require('@/assets/componentes/audios/podcast1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-12.col-lg-5.d-flex.ps-lg-4
          figure.mb-0.w-100
            img.h-100.w-100(src='@/assets/curso/tema5/img7.png', alt='', style="object-fit: cover;")
    //- Fin Podcast
    p.mb-5(data-aos="fade-left") La siguiente tabla presenta elementos básicos utilizados para organizar la comunicación de hallazgos y recomendaciones dentro del proceso de mejora de costos.
    //- Inicio Tabla
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-md-auto
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Componentes básicos para la socialización de hallazgos y recomendaciones
        .tabla-a
          table
            thead
              tr
                th(style="width: 25%") Elemento del protocolo
                th(style="width: 35%") Contenido sugerido
                th(style="width: 35%") Propósito
            tbody
              tr
                td Objetivo de la socialización
                td Informar hallazgos, recomendaciones y acuerdos
                td Dar sentido a la reunión o comunicación
              tr
                td Audiencia objetivo
                td Gerencia, producción, costos, compras u otras áreas
                td Dirigir el mensaje a quienes deben actuar
              tr
                td Contenido principal
                td Desviación, impacto, propuesta, plazo y responsable
                td Comunicar la información relevante
              tr
                td Canal de comunicación
                td Reunión, informe, correo, presentación o tablero
                td Definir el medio institucional
              tr
                td Evidencia documental
                td Acta, informe, presentación o registro digital
                td Asegurar trazabilidad
              tr
                td Acuerdos y compromisos
                td Responsables, fechas y acciones convenidas
                td Facilitar seguimiento posterior
    p(data-aos="fade-left") La definición clara de estos componentes mejora la comunicación organizacional y fortalece la capacidad de seguimiento sobre las acciones de mejora acordadas.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema5/img8.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de cosméticos prepara una presentación ejecutiva para socializar una desviación recurrente en el costo de envasado. En lugar de incluir todas las hojas de cálculo, resume tres datos clave: desviación acumulada del trimestre, causa principal identificada y alternativa de mejora recomendada. La reunión se realiza con gerencia, producción y mantenimiento. Al finalizar, se elabora un acta con responsables, fecha de ajuste técnico y meta de reducción del costo unitario. Gracias a este protocolo, la recomendación deja de ser únicamente un análisis técnico y se convierte en un acuerdo institucional verificable.          
    Separador
    //- Inicio Tema5.4
    .row
        #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.4 Implementación de mejoras
    p(data-aos="fade-left") Implementar una mejora de costos significa llevar la propuesta al <b>proceso real</b> y convertirla en <b>actividades ejecutables</b>. Esta etapa exige traducir la recomendación técnica en un <b>plan con tareas, responsables, cronograma, recursos y mecanismos de seguimiento.</b>
    .row.mt-5.mb-5(data-aos="fade-left")
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/img9.png", data-aos="zoom-in" style="width: 600px")
      .col-lg-7        
        .row.align-items-start.mb-10
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p En la práctica, la implementación resulta decisiva porque una propuesta bien formulada puede fracasar si no se organiza adecuadamente o si no se integra al funcionamiento cotidiano de la empresa. Las organizaciones que buscan mejorar su desempeño necesitan sistemas que permitan <b>implementar, monitorear y revisar el avance para corregir brechas y consolidar resultados.</b>
          p <b>Un plan de implementación</b> de mejora de costos debería incluir, como mínimo, la acción a ejecutar, el responsable principal, los responsables de apoyo, la fecha de inicio, la fecha de cierre, los recursos necesarios, el riesgo asociado y el criterio de verificación.
    .row.justify-content-center.align-items-stretch.mt-5.mb-5
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 Esta estructura resulta importante porque evita que la mejora quede formulada de manera abstracta. Por ejemplo, si la acción consiste en actualizar la tasa de costos indirectos de fabricación de un centro de costo, el plan debe indicar quién recalcula la tasa, quién valida la nueva base, qué documentos se ajustan, desde cuándo se aplica y cómo se verificará que el cambio ya está operando.
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img(src="@/assets/curso/tema5/img10.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 También conviene reconocer que la implementación no siempre es lineal. Algunas mejoras producen resultados rápidos; otras requieren ajustes <b>intermedios, aprendizaje progresivo o correcciones durante la ejecución.</b>
    p(data-aos="fade-left") Por esta razón, el seguimiento debe acompañar la implementación desde el inicio y no esperar hasta el final del período. Medir y comunicar el progreso durante la ejecución ayuda a detectar obstáculos, revisar la pertinencia del plan y sostener el compromiso de las áreas involucradas.  La siguiente estructura presenta elementos básicos para organizar la ejecución, el seguimiento y la verificación de las mejoras implementadas:          
    //- Inicio Accordion
    .bg--img_03.mt-5
    .row.justify-content-center        
      .col-lg-10
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Acción de mejora")
              p.mb-4 Describe concretamente la intervención que se ejecutará y permite delimitar el alcance de la mejora.
          .row(titulo="Responsable principal")
              p.mb-4 Identifica el área o la persona encargada de liderar la ejecución y facilita el control del proceso.
          .row(titulo="Responsables de apoyo")
              p.mb-4 Relaciona las áreas participantes y fortalece la coordinación durante la implementación.
          .row(titulo="Cronograma")
              p.mb-4 Define fechas de inicio y cierre para organizar el desarrollo de la mejora.
          .row(titulo="Recursos")
              p.mb-4 Incluye recursos técnicos, humanos o financieros necesarios para ejecutar la intervención.
          .row(titulo="Riesgo operativo")
              p.mb-4 Identifica posibles efectos sobre proceso, tiempo o calidad y ayuda a anticipar dificultades.
          .row(titulo="Criterio de verificación")
              p.mb-4 Establece la evidencia esperada para comprobar que la mejora fue implementada correctamente.
    //- Fin Accordion
    p La definición clara de estos elementos fortalece la capacidad de seguimiento y facilita verificar si la mejora realmente fue ejecutada conforme a lo planeado.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema5/img11.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de conservas aprueba una mejora para reducir el tiempo muerto en la línea de etiquetado. El plan define como acción la reorganización del abastecimiento de etiquetas, asigna a producción como responsable principal, fija un cronograma de diez días, requiere apoyo de logística y establece como criterio de verificación la reducción del tiempo de parada en al menos un 20 %. Al final de la segunda semana, el seguimiento muestra que la mejora ya fue ejecutada, pero la reducción obtenida corresponde al 14 %, lo que obliga a revisar ajustes adicionales antes de cerrar la intervención.
    Separador
    //- Inicio Tema5.5
    .row
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Evaluación de resultados, acuerdos de mejora y lecciones aprendidas
    p.mb-3(data-aos="fade-left") Después de implementar una mejora, la empresa necesita evaluar si la acción produjo el efecto esperado y qué aprendizaje deja para ciclos posteriores. Esta evaluación resulta importante porque evita declarar éxito únicamente por haber ejecutado actividades. El centro del análisis ya no se concentra en si la acción se realizó, sino en si logró reducir la desviación, mejorar la eficiencia, fortalecer la calidad del dato o generar un beneficio operativo sostenible.
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La mejora continua exige precisamente ese ciclo de revisión: analizar, actuar, medir resultados y convertir cada experiencia en insumo para futuras decisiones. Los acuerdos de mejora cumplen una función complementaria. Cuando la evaluación se comparte con las áreas involucradas, la empresa puede formalizar qué se mantiene, qué se ajusta, qué se amplía y qué acciones no conviene continuar.
    p.mb-5(data-aos="fade-left") Estos acuerdos evitan que el conocimiento quede únicamente en quien lideró el análisis y facilitan que la mejora se integre a la práctica organizacional. En este sentido, comunicar el progreso y registrar compromisos permite sostener la disciplina de seguimiento y convertir la experiencia en un activo de gestión.        
    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema5/img13.png' style="width: 550px").m-auto
      .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-right")
        p Las lecciones aprendidas cierran el proceso porque recogen qué funcionó, qué no funcionó, qué condiciones facilitaron la mejora y qué factores limitaron su efecto.
        p.mb-0 Incorporar lecciones aprendidas ayuda a evitar la repetición de errores y a aprovechar el conocimiento generado durante la intervención. En las organizaciones, adoptar y aplicar buenas prácticas y lecciones aprendidas mejora procesos, favorece la colaboración y reduce la dependencia de experiencias individuales aisladas.  La evaluación de resultados permite valorar el efecto de las mejoras implementadas y convertir la experiencia obtenida en aprendizajes útiles para futuros procesos de control y optimización de costos.
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-right")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_03_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Resultado medido
              p Registra el cambio observado en costo, eficiencia o calidad y permite verificar el efecto real de la acción.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_03_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Comparación con la meta
              p Relaciona el resultado esperado con el obtenido para valorar el grado de cumplimiento alcanzado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_03_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Acuerdo de mejora
              p Formaliza decisiones sobre continuidad, ajuste o cierre de la intervención implementada.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_03_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Lección aprendida
              p Resume el aprendizaje obtenido durante la implementación y fortalece futuros procesos de mejora.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema5/tarjeta_03_5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Evidencia de cierre
              p Incluye informes, actas o indicadores finales que respaldan técnicamente la conclusión del ciclo.
    //- Fin Slideshow
    p.mb-5(data-aos="fade-left") La documentación organizada de estos elementos facilita el cierre técnico y organizacional de las acciones implementadas y fortalece la capacidad de aprendizaje de la empresa.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2.mb-5(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema5/img17.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de bebidas implementa un cambio en la secuencia de limpieza de equipos para reducir el consumo de agua y químicos. La meta consistía en disminuir el costo asociado en un 12 %, pero al final del período la reducción alcanzó el 9 %. La evaluación concluye que la mejora fue parcialmente efectiva y que la principal limitación estuvo en la falta de capacitación homogénea entre turnos. El acuerdo de mejora establece mantener la nueva secuencia, reforzar el entrenamiento y realizar una nueva medición en el siguiente mes. La lección aprendida permite reconocer que el ajuste técnico, por sí solo, no garantiza el resultado si no se acompaña de apropiación operativa.
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-14.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/pdf.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start.text-white
            h4.mb-2 Ejercicio aplicado 5. Propuestas, socialización e implementación de mejoras de costos
            p.mb-0 Se invita a revisar el documento “Ejercicio aplicado 5. Propuestas, socialización e implementación de mejoras de costos”, donde se aborda la formulación e implementación de acciones correctivas para reducir desviaciones en costos operativos dentro de una empresa de productos de aseo.
          .mt-3.mt-lg-0.ps-lg-4            
            a.btn.w-buttons.d-flex.align-items-center.justify-content-center.p-3(
              :href="obtenerLink('/downloads/Anexos/Anexo_Ejercicio aplicado 5.pdf')" 
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
