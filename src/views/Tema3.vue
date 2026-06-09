<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Reporte y registro de hallazgos en la verificación de costos
    .row.justify-content-center.align-items-stretch.mt-5.mb-3
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 El análisis y control de costos solo adquieren <b>valor práctico</b> cuando los hallazgos identificados pueden registrarse, explicarse y presentarse de manera ordenada. En las empresas, <b>una desviación de costos</b> no debería quedarse en una observación verbal o en una nota aislada dentro de una <b>hoja de cálculo</b>; debe transformarse en información documentada que permita comprender qué se revisó, qué diferencia se encontró, qué evidencia la respalda y qué recomendación inicial se deriva de esa revisión.
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img(src="@/assets/curso/tema3/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 Por esta razón, <b>el reporte y registro de hallazgos</b> cumplen una función de control interno y de apoyo a la toma de decisiones, ya que convierten la verificación técnica de costos en un insumo formal para el seguimiento, la mejora y la rendición de información dentro de la organización (García Colín, 2014).
    p(data-aos="fade-left") Cuando los hallazgos no se registran, <b>la empresa pierde trazabilidad,</b> repite errores entre períodos y debilita su capacidad para justificar ajustes, correcciones o decisiones de mejora. Por ello, el registro de hallazgos, la conservación de evidencias, el seguimiento de correcciones y la presentación ejecutiva de resultados hacen parte del control de costos y no deben entenderse como tareas accesorias o meramente administrativas.
    Separador
    //- Inicio Tema3.1
    .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Formatos de reporte de verificación de costos
    .row.mb-3.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema3/img2.png' style="width: 550px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p Los formatos de reporte de verificación de costos son instrumentos que permiten organizar de manera uniforme la información obtenida en la <b>revisión de materiales, mano de obra, costos indirectos, centros de costo, tasas de asignación y bases de reparto.</b>
        p.mb-0 Su utilidad práctica consiste en evitar registros dispersos y facilitar que distintas personas de la empresa puedan interpretar el hallazgo bajo una misma estructura. Un buen formato no solo enuncia la diferencia encontrada, sino que también permite identificar <b>el referente comparado, la magnitud de la desviación, la fuente de información revisada, la causa preliminar y la recomendación inicial.</b>
    p(data-aos="fade-left") En la práctica, el formato debe responder a la lógica del proceso de verificación. Si la empresa revisa una línea de producción, el reporte debería identificar:
    //- Carrusel
    .bg-full-width.mb-3(data-aos="fade-right")
      .px-4.px-md-5.pb-md-3             
        .carousel-bg
          .row.justify-content-center.align-items-center
            .col-lg-12.mb-3.mb-lg-0.order-lg-2
              SlyderF(columnas="col-xl-4 col-lg-6")
                .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema3/tarjeta01_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3                        
                  p El periodo revisado. 
                .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema3/tarjeta01_2.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3                        
                  p El objeto de costo. 
                .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema3/tarjeta01_3.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3                        
                  P El centro de costo involucrado. 
                .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema3/tarjeta01_4.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3                        
                  P El valor esperado. 
                .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema3/tarjeta01_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3                        
                  P El valor real. 
                .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema3/tarjeta01_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3                        
                  P La desviación identificada. 
                .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema3/tarjeta01_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3                        
                  P La evidencia revisada. 
                .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                  img(src='@/assets/curso/tema3/tarjeta01_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3                        
                  P La persona responsable del análisis. 
    //- Fin Carrusel      
    p(data-aos="fade-left") Si se trata de servicios, además conviene identificar el contrato, cliente o tipo de servicio revisado. Este nivel de detalle no busca hacer más extenso el documento, sino asegurar que el hallazgo pueda entenderse, rastrearse y compararse posteriormente.
    p(data-aos="fade-right") Estos campos ayudan a organizar la información del hallazgo y facilitan el control posterior de las desviaciones identificadas: 
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
                        img(src='@/assets/curso/tema3/tarjeta_02_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Período revisado
                        p Registrar el mes, trimestre o lote analizado para ubicar temporalmente la revisión.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_02_2.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Objeto de costo
                        p Identificar el producto, servicio, orden o proceso que se está verificando.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_02_3.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Referente comparado
                        P Precisar si la comparación se realiza frente a un histórico, presupuesto o estándar.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_02_4.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Valor esperado
                        P Indicar el costo base utilizado como punto de referencia.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_02_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Valor real
                        P Registrar el costo calculado o ejecutado durante el período revisado.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_02_6.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Desviación
                        P Incorporar la diferencia absoluta y porcentual para medir la magnitud del hallazgo.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_02_7.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Evidencia revisada
                        P Relacionar requisiciones, nómina, costos indirectos de fabricación y reportes utilizados como soporte técnico.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_02_8.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Causa preliminar
                        P Señalar si la desviación parece operativa, de mercado, de registro o metodológica.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_02_9.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Recomendación
                        P Definir acciones de seguimiento, ajuste, corrección o validación para dar continuidad al control.
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema3/img3.png', alt='', style="max-width: 250px", data-aos="zoom-in").m-auto          
              p.mt-5(data-aos="fade-left") La organización uniforme de esta información facilita el análisis posterior, fortalece la trazabilidad de los hallazgos y mejora la comunicación de resultados dentro de la empresa.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema3/img4.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de envases plásticos revisa el costo unitario de una referencia y encuentra que el valor real del mes fue de $ 4.320 frente a un costo estándar de $ 3.950. En lugar de dejar la diferencia únicamente en la hoja de costos, la empresa la registra en un formato de verificación donde consigna la desviación de $ 370 por unidad, identifica que el referente utilizado fue el estándar técnico del proceso, señala como evidencia las requisiciones de resina, las horas de operación y el reporte de mantenimiento, y deja como recomendación revisar el comportamiento del consumo de material y el tiempo real de máquina.
    Separador
    //- Inicio Tema3.2
    .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Procedimientos internos de registro de hallazgos
    p(data-aos="fade-left") Registrar un hallazgo no consiste únicamente en diligenciar un formato; también exige <b>seguir un procedimiento interno</b> que indique quién detecta la diferencia, quién valida la información, quién registra el hallazgo y qué instancia recibe el reporte.
    .row.mb-5(data-aos="fade-left")
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img5.png", data-aos="zoom-in" style="width: 600px")
      .col-lg-7        
        .row.align-items-start.mb-10
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p Este procedimiento resulta importante porque <b>evita que el control de costos</b> dependa del criterio aislado de una sola persona y asegura que la información siga una ruta definida dentro de la empresa. Cuando el procedimiento está claramente establecido, el hallazgo no se pierde, no se duplica y no queda sin responsable de seguimiento (Hansen, 2007).
          p En la práctica, un procedimiento interno de registro de hallazgos suele desarrollarse por etapas que permiten garantizar control, trazabilidad y seguimiento de la información detectada durante la revisión de costos. El proceso normalmente inicia con la identificación de la diferencia o inconsistencia, continúa con la revisión de los soportes relacionados y la clasificación preliminar del tipo de hallazgo encontrado. 
      p Posteriormente, se diligencia el formato correspondiente, se valida la información por parte del responsable del área o del analista de costos y se archiva el reporte como evidencia documental. Finalmente, el hallazgo se remite a la instancia encargada de tomar decisiones, aplicar correctivos o realizar el seguimiento respectivo.
    .row.justify-content-center.align-items-stretch.mt-5.mb-3
      .col-12.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 Este flujo facilita la trazabilidad del reporte y contribuye a que los hallazgos relevantes no permanezcan únicamente en la etapa técnica, sino que lleguen también a la gestión administrativa o gerencial.
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img(src="@/assets/curso/tema3/img6.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-5(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 También conviene distinguir entre <b>hallazgos informativos y hallazgos que exigen acción correctiva.</b> No todas las diferencias requieren el mismo tratamiento. Algunas variaciones pueden documentarse como observaciones de monitoreo, mientras que otras, por su magnitud o recurrencia, deben seguir una ruta de corrección más formal.
    p(data-aos="fade-left") Por esta razón, el procedimiento interno debería contemplar criterios de severidad o priorización, por ejemplo:       
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta_03_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Valor monetario afectado. 
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta_03_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Porcentaje de desviación. 
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta_03_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Frecuencia con que se repite el problema. 
    p(data-aos="fade-left") La siguiente secuencia organiza las etapas básicas utilizadas para registrar, validar y dar seguimiento a los hallazgos derivados de la verificación de costos:          
    //- Fin Tarjetas
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
                        img(src='@/assets/curso/tema3/tarjeta_04_1.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Detección
                          p Identificar la diferencia o inconsistencia. Generalmente participa el analista de costos o el responsable del proceso.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_04_2.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Revisión
                          p Contrastar la información con soportes y datos de origen. Esta actividad suele involucrar al área de costos, contabilidad o producción.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_04_3.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Clasificación
                          p Definir el tipo de hallazgo y su nivel de relevancia. Normalmente interviene el responsable técnico del análisis.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_04_4.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Registro
                          p Diligenciar el formato correspondiente para documentar el hallazgo. Habitualmente lo realiza el analista o el área de costos.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_04_5.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Validación
                          p Confirmar el hallazgo y la recomendación inicial. Puede intervenir el coordinador, jefe de área o control interno.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_04_6.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Archivo y envío
                          p Conservar el reporte y remitirlo a seguimiento. Esta actividad suele estar a cargo del área de costos o del apoyo administrativo.
          //- Fin Carrusel
          p(data-aos="fade-left") La aplicación ordenada de estas etapas fortalece la trazabilidad de los hallazgos y mejora la articulación entre las áreas responsables del control y seguimiento de costos.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema3/img7.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 En una empresa de confección, el analista detecta una variación desfavorable del 9 % en el consumo de tela frente al estándar. Antes de registrarla, revisa las requisiciones del lote, compara la producción útil y confirma que no hubo cambios en el diseño de la prenda. Posteriormente, clasifica el caso como un hallazgo operativo, diligencia el formato, lo valida con producción y lo remite a la coordinación para seguimiento. Este procedimiento evita que la observación permanezca únicamente en el archivo técnico del analista y permite que la empresa actúe oportunamente sobre el problema.
    Separador
    //- Inicio Tema3.3
    .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Documentación de evidencias, archivo de reportes y trazabilidad
    p(data-aos="fade-left") La calidad de un hallazgo depende, en buena medida, de la evidencia que lo respalda. En verificación de costos, documentar evidencias significa conservar y relacionar los soportes que permiten demostrar por qué se concluyó que existe una desviación, una inconsistencia de clasificación o una debilidad de asignación. 
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estas evidencias pueden provenir de:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-2
              p.mb-0 Requisiciones. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 <i>Kardex.</i>
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Tarjetas de tiempo. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Hojas de costeo. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Reportes de producción. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Comprobantes contables. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Matrices de asignación. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Políticas internas.
    p(data-aos="fade-left") Sin estos soportes, el reporte pierde solidez técnica y resulta más difícil validarlo o sostenerlo frente a una revisión posterior. El archivo de reportes cumple una función complementaria. No basta con emitir el informe; la empresa necesita conservarlo bajo un criterio que facilite su consulta posterior. En la práctica, esto implica definir si el archivo será físico, digital o mixto, cómo se codificará, quién tendrá acceso y de qué manera se relacionará con el período, el producto, el centro de costo o el proceso revisado.
    .row.justify-content-center.align-items-stretch.mt-3.mb-5
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 Cuando los reportes se archivan sin un <b>criterio uniforme, la empresa pierde memoria organizacional</b> y se dificulta el análisis comparativo entre períodos. La trazabilidad aparece cuando el costo, la desviación y el hallazgo pueden seguirse desde la cifra final hasta el dato de origen y viceversa. Esto exige que cada reporte esté conectado con sus evidencias, sus responsables y sus decisiones de seguimiento.
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img(src="@/assets/curso/tema3/img9.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 En términos operativos, <b>la trazabilidad mejora la calidad del control</b> porque permite reconstruir el análisis, explicar la variación y evaluar posteriormente si la recomendación adoptada produjo resultados. Sin trazabilidad, el costo puede estar calculado, pero la empresa no necesariamente puede demostrar cómo llegó a esa conclusión o cómo gestionó la desviación encontrada.
    p(data-aos="fade-left") Los siguientes elementos permiten relacionar los soportes utilizados en la revisión con su función dentro del proceso de control y trazabilidad de costos:
    //- Slideshow
    .bg-full-width.bg-fondo-slider.mb-3
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-right")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/tarjeta_05_1.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Requisición de materiales
              p Respaldan el consumo de materiales directos o indirectos y permiten confirmar cantidades y destino del recurso utilizado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/tarjeta_05_2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Tarjeta de tiempo
              p Sustenta la mano de obra aplicada y facilita verificar el tiempo trabajado y su relación con la orden o el proceso.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/tarjeta_05_3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Hoja de costeo
              p Integra el cálculo del costo y permite relacionar los componentes utilizados con el resultado final obtenido.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/tarjeta_05_4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Reporte de producción
              p Registra unidades útiles y comportamiento del proceso, apoyando la validación de la base de cálculo unitario.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/tarjeta_05_5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Comprobante o reporte CIF
              p Respaldan los costos indirectos acumulados y permiten validar asignaciones y tasas aplicadas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/tarjeta_05_5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h4 Política o instructivo interno
              p Justifican los criterios de clasificación o asignación utilizados durante la revisión técnica.                      
    //- Fin Slideshow
    p(data-aos="fade-left") La conservación organizada de estos soportes facilita la reconstrucción del análisis, fortalece el control documental y mejora la confiabilidad de los procesos de verificación de costos.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema3/img10.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa de aseo industrial documenta un hallazgo relacionado con el incremento del costo de mano de obra directa. Para respaldarlo, adjunta la tarjeta de tiempo del servicio, el resumen de nómina, el reporte de horas extras y la hoja de costeo del contrato. Al archivar el reporte bajo el código del servicio y el mes correspondiente, la empresa puede revisar nuevamente el caso semanas después, comparar la desviación con otros contratos y valorar si el problema fue puntual o recurrente.
    Separador
    //- Inicio Tema3.4
    .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Seguimiento de correcciones, auditoría interna y políticas de retención
    .row.mb-3.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema3/img11.png' style="width: 550px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p Una vez registrado el hallazgo, la empresa necesita decidir qué hará con él. El seguimiento de correcciones consiste en comprobar si la recomendación planteada fue atendida, si la causa identificada recibió tratamiento y si la desviación disminuyó o desapareció en revisiones posteriores.
        p Esta etapa resulta importante porque un reporte sin seguimiento puede cumplir una función documental, pero no necesariamente generar mejora. En términos prácticos, <b>el seguimiento convierte el hallazgo en un punto de control activo y no en un archivo pasivo.</b>
        p.mb-0 La auditoría interna se relaciona directamente con este seguimiento porque ofrece una revisión más estructurada del cumplimiento de <b>criterios, procedimientos y correcciones.</b> En costos, su utilidad consiste en verificar:
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta_06_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Si los hallazgos se registran de manera consistente. 
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta_06_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Si las recomendaciones se atienden. 
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta_06_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Si las bases de asignación continúan siendo válidas. 
      .col-12.col-sm-9.col-md-6.col-lg-3.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema3/tarjeta_06_4.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Si los reportes conservan suficiente evidencia de respaldo. 
    //- Fin Tarjetas
    .row.justify-content-center.align-items-stretch.mt-5.mb-3
      .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
          p.mb-0 No se trata de duplicar el trabajo del analista de costos, sino de fortalecer la disciplina del sistema y la confiabilidad de la información que sustenta las decisiones de gestión (García Colín, 2014). Las políticas de retención complementan este proceso porque indican cuánto tiempo se conservarán los reportes, las evidencias y las matrices de seguimiento, y en qué condiciones podrán consultarse o eliminarse.
      .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .h-100.d-flex
          img(src="@/assets/curso/tema3/img12.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
      .col-12.col-md-12.col-lg-4(data-aos="fade-left")      
        .h-100.d-flex.flex-column.justify-content-end.ps-lg-4          
          .mb-3.d-flex.justify-content-start
            img(src="@/assets/curso/fondos/icono.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
          p.mb-0 En la empresa, esta política ayuda a <b>proteger la memoria del sistema de costos</b> y evita que documentos relevantes desaparezcan antes de cerrar ciclos de revisión, auditoría o comparación histórica.
    p(data-aos="fade-left") Aunque el tiempo de conservación puede variar según el tipo de documento y la política interna, el principio general consiste en garantizar una retención suficiente para permitir seguimiento, revisión comparativa y respaldo de decisiones. El seguimiento de acciones correctivas exige información organizada que permita verificar avances, responsables y resultados obtenidos:
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
                        img(src='@/assets/curso/tema3/tarjeta_07_1.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Hallazgo identificado
                        p Descripción breve de la desviación o inconsistencia detectada.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_07_2.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Acción correctiva propuesta
                        p Medida planteada para atender la causa identificada.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_07_3.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Responsable de la corrección
                        P Área o persona encargada de ejecutar la acción correctiva.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_07_4.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Fecha de compromiso
                        P Momento previsto para implementar la corrección.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_07_5.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Estado de avance
                        P Situación actual de la acción: pendiente, en proceso, ejecutada o no iniciada.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_07_6.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Evidencia de cierre
                        P Documento o prueba que respalda la corrección realizada.
                      .bg-color-13.tarjeta.p-4.h-100.text-center.bordes.d-flex.flex-column.align-items-center
                        img(src='@/assets/curso/tema3/tarjeta_07_7.svg', alt='', style="max-width: 90px; height: 90px; object-fit: contain;").mx-auto.mb-3
                        h4.card-title.text-center.mb-4 Resultado observado
                        P Comportamiento posterior de la desviación: disminución, permanencia o aumento.                      
                  .col-lg-3.order-lg-1.d-none.d-lg-block
                    figure
                      img(src='@/assets/curso/tema3/img13.png', alt='', style="max-width: 250px", data-aos="zoom-in").m-auto          
              p.mt-5(data-aos="fade-left") La organización de esta información facilita el seguimiento sistemático de las correcciones y fortalece la capacidad de la empresa para evaluar la efectividad de las acciones implementadas.
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-right")
      .col-12.col-md-5.d-flex
        figure.mb-0.w-100
          img.h-100.w-100(src='@/assets/curso/tema3/img14.png', alt='', style="object-fit: cover;")      
      .col-12.col-md-7.p-4.p-lg-5.d-flex.flex-column.justify-content-center
        p.fw-bold Ejemplo aplicado
        p.mb-0 Una empresa detectó que durante tres meses consecutivos había sobre asignado costos indirectos a una línea debido al uso de una base antigua de horas máquina. La acción correctiva consistió en actualizar la tasa, ajustar la base de asignación y capacitar al responsable del cálculo. Dos meses después, el seguimiento permitió identificar que la desviación porcentual disminuyó del 11 % al 3 %. Este tipo de evidencia permite concluir que el hallazgo no solo fue documentado, sino que también produjo una corrección observable y verificable. 
    Separador
    //- Inicio Tema3.5
    .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Consolidación de hallazgos, conclusiones y presentación ejecutiva
    p(data-aos="fade-left") La consolidación de hallazgos consiste en reunir los resultados de varias verificaciones en una visión más sintética y útil para la toma de decisiones. Mientras el formato individual documenta cada caso revisado, la consolidación permite identificar patrones, recurrencias, áreas críticas, centros de costo con mayores desviaciones y causas probables que se repiten.
    p(data-aos="fade-left") En la práctica, este paso ayuda a que la empresa no permanezca analizando cada caso de manera aislada, sino que pueda reconocer tendencias y prioridades de intervención.
    .row.mb-5(data-aos="fade-left")
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/img15.png", data-aos="zoom-in" style="width: 600px")
      .col-lg-7        
        .row.align-items-start.mb-10
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/curso/fondos/lineas.svg", style="max-width: 90px").mx-auto
          .col-lg
            p Las conclusiones deben derivarse de la consolidación de hallazgos y no de apreciaciones generales. Una conclusión adecuada debe precisar si la mayor cantidad de diferencias se concentra en materiales, si las inconsistencias están relacionadas con la clasificación de costos indirectos, si las bases de reparto ya no representan la operación real o si los problemas recurrentes provienen de fallas en el registro y en los soportes documentales. 
          p Este nivel de síntesis mejora la utilidad del informe y facilita posteriormente la formulación de recomendaciones de mejora. La presentación ejecutiva traduce esa consolidación a un lenguaje claro para los niveles de decisión.
    .bloque-texto-g.bloque-texto-g.bg-color-12.p-3.p-sm-4.p-md-5.mb-3(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En lugar de incluir todos los soportes técnicos, resume los aspectos más relevantes:
          ul.lista-ul.color-vineta-custom.mb-0
            li.d-flex.mt-3
              i.fas.fa-check-circle.me-2
              p.mb-0 Qué se revisó. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Qué se encontró. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Cuál es la magnitud del problema. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Qué áreas están involucradas. 
            li.d-flex.mt-2
              i.fas.fa-check-circle.me-2
              p.mb-0 Qué acciones preliminares se sugieren.
    p(data-aos="fade-left") En este sentido, la presentación ejecutiva no reemplaza el reporte técnico detallado, pero sí facilita que gerencia, coordinación o comité de costos comprendan el panorama general y definan prioridades con mayor rapidez (García Colín, 2014). La consolidación de resultados permite identificar patrones recurrentes, reconocer áreas críticas y facilitar una lectura más amplia del comportamiento de los costos dentro de la organización:
    .row.bg-color-1(data-aos="fade-left")
      .col-12
        .p-5
          //- Carrusel
          .bg-full-width
            .px-4.px-md-5.pb-md-3             
              .carousel-bg
                .row.justify-content-center.mb-3.align-items-center
                  .col-lg-12.mb-3.mb-lg-0.order-lg-2
                    SlyderF(columnas="col-xl-4 col-lg-6")
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_08_1.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Período consolidado
                          p Mes, trimestre o rango revisado dentro del análisis consolidado.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_08_2.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Número de hallazgos
                          p Total de casos reportados durante el período evaluado.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_08_3.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Áreas o centros más afectados
                          p Procesos, líneas o dependencias con mayor concentración de hallazgos.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_08_4.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Principales tipos de desviación
                          p Diferencias asociadas a precio, cantidad, clasificación, asignación, tasa o registro.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_08_5.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Causas probables recurrentes
                          p Factores operativos, metodológicos, documentales o de mercado que se repiten con mayor frecuencia.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_08_6.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Impacto estimado
                          p Valor monetario comprometido o relevancia porcentual de las desviaciones identificadas.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_08_7.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Recomendaciones generales
                          p Acciones de validación, ajuste, seguimiento o mejora sugeridas a partir del análisis.
                      .bg-color-13.tarjeta.h-100.bordes.overflow-hidden
                        img(src='@/assets/curso/tema3/tarjeta_08_8.png').w-100
                        .p-4
                          h4.card-title.text-center.mb-4 Decisiones sugeridas
                          p Medidas relacionadas con seguimiento, corrección, actualización de criterios o auditoría adicional.          
            p(data-aos="fade-left") La organización consolidada de esta información facilita la lectura gerencial de los hallazgos y contribuye a priorizar acciones de control, mejora y seguimiento dentro de la empresa.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-12
        .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-14.p-4.rounded-4           
          .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
            img(src='@/assets/curso/fondos/pdf.svg', style="width: 80px")          
          .flex-grow-1.text-center.text-lg-start.text-white
            h4.mb-2 Ejercicio aplicado 3. Reporte y registro de hallazgos en la verificación de costos
            p.mb-0 Se invita a revisar el documento “Ejercicio aplicado 3. Reporte y registro de hallazgos en la verificación de costos”, donde se aborda la identificación, organización y consolidación de hallazgos relacionados con desviaciones y errores en sistemas de costos empresariales.
          .mt-3.mt-lg-0.ps-lg-4            
            a.btn.w-buttons.d-flex.align-items-center.justify-content-center.p-3(
              :href="obtenerLink('/downloads/Anexos/Anexo_Ejercicio aplicado 3.pdf')" 
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
