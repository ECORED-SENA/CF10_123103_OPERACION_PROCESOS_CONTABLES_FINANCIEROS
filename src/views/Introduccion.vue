<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-left") En las empresas, el análisis de costos de operación permite transformar una cifra contable en información útil para el control, la evaluación del desempeño y la toma de decisiones. Comparar costos calculados con valores históricos, presupuestados o estándar hace posible reconocer desviaciones, interpretar su magnitud y determinar si responden a comportamientos normales del proceso o a situaciones que requieren corrección. Esta perspectiva resulta importante porque los costos no solo informan cuánto se gastó, sino también qué tan consistente, eficiente y sostenible está siendo la operación de la organización.      
    .row.justify-content-center.align-items-stretch
      .col-11.col-md-12.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        .rounded-3.overflow-hidden.h-100
          .row.g-0.align-items-stretch.h-100
            .col-12.col-md-5.d-flex
              figure.mb-0.w-100
                img(src="@/assets/curso/intro/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover; min-height: 250px;")                            
            .col-12.col-md-7.d-flex.align-items-center.bg-color-2
              .p-4.p-md-5
                p.mb-0 La revisión de costos también tiene una aplicabilidad directa en la gestión empresarial, ya que permite verificar si los criterios de clasificación y asignación se están utilizando de manera coherente con la naturaleza de los recursos consumidos y con los procedimientos definidos por la empresa. Cuando esta verificación se realiza de forma técnica, es posible detectar errores en la distribución de materiales, mano de obra y costos indirectos, fortalecer la calidad de los registros y mejorar la confiabilidad de los reportes que sirven de base para la supervisión y el control interno. (García Colín, Contabilidad de costos, 2014)
            p.mt-3 Desde esta lógica, el análisis y control de costos se convierte en una herramienta para identificar oportunidades de mejora, evaluar alternativas de optimización y sustentar recomendaciones orientadas a fortalecer el desempeño económico y operativo. Así, la información de costos deja de ser un dato aislado y pasa a cumplir una función estratégica dentro de la empresa, al apoyar decisiones relacionadas con eficiencia, uso de recursos, corrección de desviaciones y mejoramiento continuo de los procesos.
      .col-8.col-sm-6.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0.d-flex.align-items-center.justify-content-center(data-aos="zoom-in")
        figure.mb-0.w-100.text-center
          img.img-fluid(src="@/assets/curso/intro/img2.png", alt="", style="width: 400px;")




</template>

<script>
export default {
  name: 'Introduccion',
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
