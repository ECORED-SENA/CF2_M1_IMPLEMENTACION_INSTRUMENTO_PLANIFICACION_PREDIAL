<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pb-5
          p.mb-4(data-aos="fade-right") La transición agroecológica exige mucho más que buenas intenciones: requiere herramientas concretas, criterios claros y una lectura profunda del territorio. Este componente formativo se enfoca en las prácticas agroecológicas para la restauración y el fortalecimiento ambiental, entendidas como acciones estratégicas que permiten transformar el diagnóstico predial en intervenciones regenerativas, contextualizadas y sostenibles. Su propósito es brindar a los promotores y aprendices los conocimientos necesarios para aplicar soluciones basadas en la naturaleza, integrando saberes técnicos y locales.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/intro/img2.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 A partir de la evaluación de los indicadores ambientales del IPPTA, se identifican las áreas críticas del agroecosistema que requieren atención prioritaria. Este diagnóstico no se queda en la medición, sino que se convierte en el punto de partida para la acción. Por ello, el módulo presenta un conjunto de prácticas agroecológicas aplicables a nivel predial, orientadas al manejo del agua, la conservación de la biodiversidad, el cuidado del suelo y el aprovechamiento de residuos orgánicos. Estas prácticas se articulan con los factores del territorio y se adaptan a las condiciones biofísicas, socioproductivas y culturales de cada finca.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 Además de las soluciones sistematizadas, se reconoce el valor de las prácticas emergentes construidas por promotores, extensionistas y familias rurales, que enriquecen el repertorio agroecológico desde la experiencia y la innovación local. El componente formativo promueve así una visión integral, donde el cruce entre indicadores y prácticas permite diseñar planes de intervención efectivos, medibles y participativos, fortaleciendo la resiliencia ambiental y la autonomía territorial en el camino hacia la sostenibilidad.
            .col-lg-auto(data-aos="fade-left")
              figure
                img(src='@/assets/curso/intro/img1.svg', style="width: 150px").m-auto

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
