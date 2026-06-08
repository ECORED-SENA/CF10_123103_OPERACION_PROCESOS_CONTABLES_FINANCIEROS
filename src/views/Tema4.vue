<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Técnicas de análisis y alternativas de optimización de costos

    p(data-aos="fade-left") Después de comparar costos, verificar criterios de clasificación y consolidar hallazgos, la empresa necesita avanzar hacia una lectura más explicativa de las desviaciones y hacia la identificación de acciones que permitan mejorar el desempeño económico y operativo.
    .row.justify-content-center.align-items-stretch.mt-5.mb-3
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
            p.mt-5 Cada una aporta una mirada distinta y, en conjunto, ayudan a formular conclusiones técnicas mejor sustentadas (Horngren, 2012). La descomposición constituye una de las técnicas más útiles porque separa la variación total en componentes más fáciles de interpretar. Por ejemplo, una variación en materiales puede explicarse por precio y por cantidad.
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
    p(data-aos="fade-left") Si una empresa identifica una variación desfavorable en materiales, la causa inmediata puede relacionarse con un consumo superior al estándar; sin embargo, la causa raíz puede originarse en fallas de dosificación, desperdicios durante <b>la manipulación, mantenimiento insuficiente de la maquinaria o problemas en la calidad del insumo utilizado.</b>
    .row.mb-3.justify-content-center.align-items-center
      .col-12.col-sm-9.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure.mb-0.text-center
          img(src='@/assets/curso/tema4/img4.png' style="width: 550px").m-auto
      .col-12.col-lg-7.order-2.order-lg-1(data-aos="fade-right")
        p De manera similar, <b>el diagrama de Pareto</b> ayuda a priorizar, ya que permite identificar cuáles causas explican la mayor parte del impacto. En muchas situaciones, cerca del 20 % de las causas puede explicar aproximadamente el 80 % de la desviación, orientando con mayor claridad el esfuerzo de análisis (Cuevas Villegas, 2010).
        p.mb-0 La revisión de tendencias y la regresión simple permiten valorar si la variación responde a un patrón recurrente. Por ejemplo, si el costo unitario aumenta cada mes a medida que disminuye el volumen producido, la empresa puede inferir que existe una relación entre el nivel de actividad y el costo unitario, especialmente por el peso de los costos indirectos fijos.
    p(data-aos="fade-left") La regresión básica no siempre resulta necesaria en análisis pequeños, pero puede ser útil cuando la empresa necesita evaluar relaciones entre:        
    //- Inicio Tarjetas
    .row.justify-content-center.mt-5(data-aos="fade-left")      
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema4/tarjeta_02_1.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Costo y volumen. 
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema4/tarjeta_02_2.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Costo y tiempo de proceso. 
      .col-12.col-sm-9.col-md-6.col-lg-4.mb-4
        .p-4.br-15.h-100.text-center.shadow.rounded-4.bg-color-5.d-flex.flex-column.align-items-center
          figure.mb-4
            img.mx-auto(src='@/assets/curso/tema4/tarjeta_02_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          p.mb-0 Costo y utilización de recursos.          
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
    .row.justify-content-center.align-items-stretch.mb-2.g-0.bg-color-2(data-aos="fade-right")
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
    p(data-aos="fade-right") Optimizar costos no significa recortar indiscriminadamente; significa mejorar el uso de los recursos para obtener un mejor resultado económico y operativo. En algunas situaciones, la optimización se logra reduciendo desperdicios; en otras, ajustando tiempos, renegociando condiciones de compra, actualizando bases de asignación o rediseñando actividades con bajo valor agregado (Hansen, 2007).
    p(data-aos="fade-left") La identificación de oportunidades de optimización debe partir del análisis y no de intuiciones generales. Por ejemplo:
    .row
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg-color-18.p-4
          .row.justify-content-center.mb-3
            .col-7.align-items-center
              figure
                img.mx-auto(src='@/assets/curso/tema4/tarjeta_04_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          h4.text-center Intuition important
          p.mb-0 Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7.align-items-center
              figure
                img.mx-auto(src='@/assets/curso/tema4/tarjeta_04_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          h4.text-center Intuition important
          p.mb-0 Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7.align-items-center
              figure
                img.mx-auto(src='@/assets/curso/tema4/tarjeta_04_3.svg', alt='', style="width: 100px; height: 100px; object-fit: contain;")          
          h4.text-center Intuition important
          p.mb-0 Sed ut perspiciatis unde omnis iste natus error sit vtatem accusa ntium dol.
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
