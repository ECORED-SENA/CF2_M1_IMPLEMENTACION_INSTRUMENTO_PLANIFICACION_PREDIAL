<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Algunas soluciones agroecológicas frente a la crisis ambiental
    .row.bg-c2
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c3
                p.mb-0 Una vez establecida la #[b Línea Base] mediante la evaluación de los indicadores ambientales del IPPTA, y definidas las áreas con mayor necesidad de intervención (puntuaciones bajas), se vuelve indispensable traducir el diagnóstico en #[b acciones concretas y estratégicas].
            .col-lg-4(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img1.png', style="width: 400px").m-auto
          .row.justify-content-center.mb-4
            .col-lg-3.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img2.png', style="width: 300px").m-auto
            .col-lg-5.bg-c4(data-aos="fade-left")
              .row.h-100.align-items-center
                .col-12
                  .p-4
                    p.mb-0 La implementación de estas prácticas no es aleatoria ni uniforme; está guiada por la #[b priorización territorial], resultado del cruce entre la #[b línea base y los factores del territorio] (condiciones biofísicas, socioproductivas y culturales). El objetivo es corregir los desequilibrios identificados, fortalecer la resiliencia del agroecosistema y mejorar de forma tangible la puntuación de los indicadores en futuras evaluaciones.
          p.mb-4 En este capítulo se presentarán #[b algunas soluciones agroecológicas representativas], probadas y aplicables a nivel predial, que contribuyen a:
          .row.justify-content-center.mb-4
            .col-10.col-md-5.col-lg-2.mb-4.mb-lg-0
              .p-4.bg-c6
                figure.mb-3
                  img(src='@/assets/curso/tema2/img1.svg', style="width: 90px").m-auto
                p.text-center.txt-p2.mb-0 #[b A]
                p.text-center.text-white.mb-0 La protección de fuentes hídricas y zonas de recarga.
            .col-10.col-md-5.col-lg-2.mb-4.mb-lg-0
              .p-4.bg-c6
                figure.mb-3
                  img(src='@/assets/curso/tema2/img2.svg', style="width: 90px").m-auto
                p.text-center.txt-p2.mb-0 #[b B]
                p.text-center.text-white.mb-0 La recuperación de la biodiversidad funcional.
            .col-10.col-md-5.col-lg-2.mb-4.mb-md-0
              .p-4.bg-c6
                figure.mb-3
                  img(src='@/assets/curso/tema2/img3.svg', style="width: 90px").m-auto
                p.text-center.txt-p2.mb-0 #[b C]
                p.text-center.text-white.mb-0 El manejo sostenible del suelo y la cobertura vegetal.
            .col-10.col-md-5.col-lg-2
              .p-4.bg-c6
                figure.mb-3
                  img(src='@/assets/curso/tema2/img4.svg', style="width: 90px").m-auto
                p.text-center.txt-p2.mb-0 #[b D]
                p.text-center.text-white.mb-0 El cierre de ciclos de nutrientes mediante prácticas regenerativas.
          p.mb-0 Estas prácticas responden a criterios técnicos e integran el conocimiento local, la participación comunitaria y el enfoque sistémico del territorio, asegurando un avance efectivo, contextualizado y duradero en la transición agroecológica.
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Estrategias prediales para el cuidado del agua
    p.mb-4 A continuación, se presenta un pódcast que aborda estrategias prediales para el cuidado del agua, destacando prácticas agroecológicas orientadas a una gestión hídrica integral, eficiente y contextualizada, enmarcada en una visión territorial de sostenibilidad y resiliencia.

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
