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
                p.mb-0 Una vez establecida la #[b línea base] mediante la evaluación de los indicadores ambientales del IPPTA, y definidas las áreas con mayor necesidad de intervención (puntuaciones bajas), se vuelve indispensable traducir el diagnóstico en #[b acciones concretas y estratégicas].
            .col-lg-4(data-aos="fade-left").d-none.d-lg-block
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
    .row.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c12
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img5.svg', style="width: 230px").m-auto
            .col-lg
              p.text-white.fs-4.mb-1 #[b Pódcast]
              .row
                .col-12
                  .tarjeta
                    .tarjeta.bg-white
                      TarjetaAudio.color-acento-contenido(
                      texto="Estrategias prediales para el cuidado del agua"
                      :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img3.png', style="width: 450px").m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Diseño hidrológico
    p.mb-4 El #[b diseño en línea clave] o #[i Keyline design] es un conjunto de principios, técnicas y sistemas integrados en un plan maestro orientado a mejorar el #[b paisaje agrícola o de pastoreo]. Su objetivo principal es optimizar la #[b gestión del agua] y aumentar la #[b productividad del suelo], mediante un diseño territorial planificado que redistribuye el agua de lluvia desde zonas húmedas hacia las más secas, favoreciendo su #[b infiltración] y reduciendo la #[b erosión].
    .row.bg-c2
      .col-12
        .px-5
          .row.justify-content-center.mb-4
            .col-lg-3.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img4.png', style="width: 300px").m-auto
            .col-lg-5.bg-c7(data-aos="fade-left")
              .row.h-100.align-items-center
                .col-12
                  .p-4
                    p.mb-0 Esta estrategia se fundamenta en la #[b lectura del relieve] y el trazado de #[b líneas clave] a partir de puntos de inflexión topográfica, conocidos como #[b puntos clave], que marcan el lugar donde la pendiente cambia de mayor a menor inclinación. A partir de allí se diseña una línea guía que permite #[b movilizar el agua de forma controlada y regenerativa], integrando elementos como #[b curvas de nivel, zanjas de infiltración, canales camino, barreras vivas, reservorios y labranza vertical].
          p.mb-5 Adaptada al trópico, esta técnica se convierte en una #[b herramienta poderosa frente al cambio climático], ya que contribuye a la #[b conservación del suelo], la #[b retención del agua] en el paisaje y la mejora de la eficiencia productiva del sistema. Según #[b Prieto (2024)], el diseño hidrológico con enfoque agroecológico es clave para garantizar la #[b sostenibilidad hídrica] de predios rurales en transición.
          .row.mb-4.ms-0
            .col-auto.bg-c5(data-aos="fade-left")
              .row.align-items-end
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
                .col.ps-0
                  h3.mb-2.ms-3 Cosecha de agua lluvia
          .row.align-items-center.mb-4
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c3
                p.mb-0 La cosecha de agua lluvia es una práctica agroecológica esencial que consiste en captar, conducir y almacenar el agua proveniente de las precipitaciones para su uso posterior en actividades agrícolas, domésticas o comunitarias. Esta estrategia no solo incrementa la disponibilidad hídrica en el predio, sino que también disminuye la presión sobre fuentes tradicionales, fortalece la autonomía territorial y aporta significativamente a la conservación de los ecosistemas. La implementación de estos sistemas requiere tres componentes principales:
            .col-lg-5(data-aos="fade-left")
              figure
                img(src='@/assets/curso/tema2/img5.png', style="width: 500px").m-auto
    .row.mb-4
      .col-md-4.mb-4.mb-md-0
        .p-4.bg-c7.rounded.h-100.mb-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img6.svg', style="width: 120px").m-auto
          p.text-center #[b Superficies de captación]
          p.text-center.mb-0 Como techos, terrazas o áreas impermeables, que permiten recolectar eficientemente el agua de lluvia.
      .col-md-4.mb-4.mb-md-0
        .p-4.bg-c7.rounded.h-100.mb-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img7.svg', style="width: 120px").m-auto
          p.text-center #[b Canaletas y tuberías]
          p.text-center.mb-0 Encargadas de conducir el recurso hacia el sitio de almacenamiento.
      .col-md-4
        .p-4.bg-c7.rounded.h-100
          figure.mb-4
            img(src='@/assets/curso/tema2/img8.svg', style="width: 120px").m-auto
          p.text-center #[b Sistemas de almacenamiento]
          p.text-center.mb-0 Como tanques, cisternas o reservorios, que permiten conservar el agua durante los periodos secos.
    p.mb-4 Según el uso final que se le dé al agua (por ejemplo, riego, limpieza, consumo humano o animal), esta puede ser tratada con #[b filtros físicos y biológicos], que remueven sólidos, contaminantes y microorganismos, garantizando su calidad. En el marco del #[b IPPTA], la cosecha de agua lluvia se articula con el #[b diseño hidrológico predial, la zonificación funcional del paisaje y el enfoque de restauración ecológica]. Su aplicación permite #[b cerrar ciclos ecológicos, mejorar indicadores ambientales y reforzar la resiliencia del agroecosistema frente al cambio climático], combinando #[b saberes locales] con #[b tecnologías apropiadas].
    .row.justify-content-center.mb-5
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Sistema de recolección de aguas lluvias
        figure
          img(src='@/assets/curso/tema2/img6.png', style="width: 600px", alt='La figura presenta  un sistema de recolección de aguas lluvias en una zona rural. El agua es captada desde el techo, filtrada y almacenada en tanques para diversos usos: abrevadero de animales, riego de cultivos, usos domésticos no potables y, de forma opcional, potabilización para consumo humano. Este sistema permite un aprovechamiento eficiente y sostenible del recurso hídrico.').m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Riego eficiente
    p El #[b riego eficiente] busca #[b maximizar el aprovechamiento del agua] en la producción agrícola, reduciendo las pérdidas por #[b evaporación, escurrimiento o filtraciones innecesarias]. Se trata de una estrategia clave para enfrentar la escasez hídrica, mejorar la productividad y avanzar hacia sistemas más sostenibles. 
    p.mb-4 Entre las técnicas más utilizadas se encuentran las siguientes:
    .row.bg-c13.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1.p-4.shadow
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Riego por goteo]
                  p.mb-0 Suministra agua en pequeñas cantidades directamente cerca de las raíces, lo que minimiza pérdidas y favorece la absorción.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img8.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Riego por aspersión]
                  p.mb-0 Utiliza aspersores que cubren áreas amplias; su aplicación depende del ajuste de la presión, el tamaño de gota y los horarios de riego para reducir evaporación.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img9.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Riego subterráneo]
                  p.mb-0 Emplea tuberías instaladas bajo tierra que llevan el agua directamente a la zona radicular, disminuyendo el contacto con las hojas y el riesgo de enfermedades.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img10.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Riego localizado]
                  p.mb-0 Usa microaspersores, cintas de exudación o mangueras porosas para aplicar el agua con precisión en los sitios requeridos. Estas técnicas permiten ahorrar agua, mejorar la eficiencia energética y aumentar la productividad agrícola, especialmente en sistemas agroecológicos que promueven un uso responsable y regenerativo del recurso hídrico.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img11.png', style="width: 400px").m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Biofiltros
    p.mb-4 Los #[b biofiltros] son sistemas vivos diseñados para #[b tratar aguas residuales o contaminadas], con el fin de mejorar su calidad y permitir su #[b reutilización segura] o su #[b retorno al ambiente] en condiciones más limpias. Funcionan mediante procesos #[b aerobios], en los cuales interactúan #[b plantas, microorganismos y sustratos orgánicos], que en conjunto degradan contaminantes, reducen agentes patógenos y capturan nutrientes disueltos.
    .row.bg-c2
      .col-12
        .px-5
          .row.justify-content-center.mb-4
            .col-lg-5.bg-c7.mb-4.mb-lg-0(data-aos="fade-left")
              .row.h-100.align-items-center
                  .col-12
                    .p-4
                      p.mb-0 La implementación de un biofiltro contempla dos fases complementarias. Primero, un #[b pretratamiento físico] que permite separar sólidos, grasas y sedimentos del agua. Luego, un #[b tratamiento biológico], donde las #[b plantas absorben nutrientes] y los #[b microorganismos descomponen la materia orgánica]. Estos sistemas pueden adoptar diversas formas, como #[b canales vegetados, camas filtrantes, zanjas de infiltración o humedales artificiales], adaptados a las condiciones particulares del predio y al tipo de agua que se desea tratar.
            .col-lg-auto.ps-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img12.png', style="width: 350px").m-auto
          p.mb-4 En el marco del #[b IPPTA], los biofiltros se integran como #[b prácticas agroecológicas de manejo sostenible del agua], contribuyendo a #[b mejorar los indicadores ambientales] relacionados con la #[b calidad del agua], la #[b salud del suelo] y la #[b biodiversidad funcional]. Su aplicación permite #[b cerrar ciclos ecológicos, reducir la contaminación difusa y fortalecer la resiliencia del predio], articulando #[b saberes locales] con #[b soluciones ecológicas de bajo costo y alta efectividad].
          .row.justify-content-center.mb-5
            .col-lg-5
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 2.] Biofiltro
              figure
                img(src='@/assets/curso/tema2/img13.png', style="width: 600px", alt='La imagen presenta una pila tradicional ubicada en un entorno rural. Se observan cubetas y utensilios de uso doméstico, lo que indica que este espacio se emplea para actividades como el lavado de ropa o vajilla. Al fondo, hay un huerto protegido con malla y vegetación ornamental, lo que sugiere un aprovechamiento integral del agua y el espacio, combinando funciones domésticas y agrícolas en un mismo entorno.').m-auto
          .row.mb-4.ms-0
            .col-auto.bg-c5(data-aos="fade-left")
              .row.align-items-end
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
                .col.ps-0
                  h3.mb-2.ms-3 Potabilización del agua
          p.mb-4 La potabilización del agua en contextos rurales es una necesidad crítica para garantizar el derecho humano al agua segura, reducir riesgos sanitarios y proteger la salud de las familias campesinas. Aunque muchos predios carecen de infraestructura convencional, existen técnicas accesibles y efectivas que pueden implementarse con recursos locales y bajo costo. Entre las alternativas más utilizadas se encuentran:
    .row.mb-4
      .col-md-4.mb-4.mb-md-0
        .p-4.bg-c7.rounded.h-100.mb-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img9.svg', style="width: 120px").m-auto
          p.text-center #[b Filtros físicos y biológicos]
          p.text-center.mb-0 Incluyen filtros de grava, arena, carbón activado o cerámica, que permiten remover sedimentos, olores, sabores desagradables y microorganismos presentes en el agua cruda.
      .col-md-4.mb-4.mb-md-0
        .p-4.bg-c7.rounded.h-100.mb-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img10.svg', style="width: 120px").m-auto
          p.text-center #[b Solarización o desinfección solar (SODIS)]
          p.text-center.mb-0 Técnica que consiste en exponer el agua en botellas plásticas transparentes al sol durante seis o más horas, utilizando radiación ultravioleta (UV) para eliminar bacterias y virus.
      .col-md-4
        .p-4.bg-c7.rounded.h-100
          figure.mb-4
            img(src='@/assets/curso/tema2/img11.svg', style="width: 120px").m-auto
          p.text-center #[b Hervido del agua]
          p.text-center.mb-0 Práctica tradicional que consiste en llevar el agua a ebullición durante al menos cinco minutos, garantizando la eliminación de patógenos intestinales y otros microorganismos dañinos.
    p.mb-0 Estas prácticas pueden ser implementadas de manera individual o complementaria, y representan soluciones viables en zonas donde no se cuenta con #[b acueductos rurales o sistemas centralizados de tratamiento]. En el marco del #[b IPPTA], su aplicación mejora directamente el #[b indicador de manejo del agua para consumo humano], contribuyendo a #[b elevar la calidad de vida y a fortalecer la resiliencia sanitaria] del agroecosistema.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Estrategias prediales para la conservación de la biodiversidad
    p.mb-4 A continuación, se presenta un video que explora las estrategias prediales para la conservación de la biodiversidad, destacando el papel crucial de la vegetación natural en la sostenibilidad de los sistemas agroecológicos y su función como aliada estratégica en la transición hacia una agricultura más resiliente y armoniosa con el entorno.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Algunos principios del manejo agroecológico de la biodiversidad
    p.mb-4 Las prácticas agroecológicas orientadas a la restauración de ecosistemas y su biodiversidad se basan en una serie de principios interrelacionados que garantizan la funcionalidad y sostenibilidad del agroecosistema. A continuación se resumen los principios clave:
    .row.bg-c13
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1.p-4.shadow
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Preservación de la biodiversidad]
                  p.mb-0 Consiste en mantener las especies nativas y la diversidad estructural de la vegetación. Este enfoque asegura funciones ecológicas críticas como el reciclaje de nutrientes, la polinización y la regulación del clima.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img14.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Restauración y regeneración natural]
                  p.mb-0 Se promueve mediante el apoyo a procesos sucesionales, permitiendo la recuperación espontánea de la vegetación en zonas degradadas. Favorece el retorno de especies y la reestructuración del ecosistema.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img15.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Uso sostenible de recursos forestales]
                  p.mb-0 Garantiza que el aprovechamiento de recursos como leña, frutos o madera no comprometa su capacidad de regeneración ni afecte negativamente la salud del ecosistema.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img16.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Interrelación con componentes productivos]
                  p.mb-0 Árboles, arbustos y coberturas vegetales se integran estratégicamente dentro del sistema agrícola para mejorar la calidad del suelo, optimizar el manejo del agua y fortalecer el control natural de plagas.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img17.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Participación comunitaria]
                  p.mb-0 Involucra los saberes locales y las dinámicas sociales. Esta participación permite adaptar las prácticas de manejo y restauración a las particularidades ecológicas y culturales de cada territorio.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img18.png', style="width: 400px").m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Técnicas y estrategias concretas de manejo y conservación
    p.mb-5 Las técnicas y estrategias concretas de manejo y conservación reúnen un conjunto de acciones prácticas orientadas a fortalecer la biodiversidad en los predios rurales mediante principios agroecológicos, conocimientos locales y lineamientos establecidos por la normatividad colombiana.
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Conservación de remanentes (relictos) y corredores biológicos
    p.mb-4 La conservación de remanentes de bosque y de corredores biológicos constituye una estrategia central para mantener la conectividad ecológica, preservar la biodiversidad y asegurar la provisión de servicios ecosistémicos en los predios rurales. En Colombia, un país con una biodiversidad excepcional y con una presión creciente sobre los ecosistemas naturales, esta práctica adquiere un papel determinante dentro del marco legal que protege los bosques y promueve la restauración ecológica.
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img19.png', style="width: 300px").m-auto
      .col-lg-9(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="¿Qué son los remanentes y por qué importan?")
            .col-12
              p.mb-0 Los remanentes corresponden a fragmentos de bosque natural que han permanecido a lo largo del tiempo, incluso bajo presiones antrópicas intensas. Se asemejan a huellas antiguas del territorio, espacios donde la vida continúa su ciclo sin interrupción. En Colombia, donde el equilibrio entre desarrollo y conservación siempre está en tensión, estos relictos cumplen una función decisiva. Albergan una riqueza biológica notable y garantizan estabilidad ecológica, regulación climática, refugio de fauna y servicios ecosistémicos esenciales. La normatividad ambiental colombiana, respaldada por el Código de Recursos Naturales Renovables, la Ley 99 de 1993 y sus reglamentaciones, reconoce el valor de estos remanentes. Desde allí se orienta su protección, estableciendo que cualquier intervención requiere estudios, permisos y criterios de manejo responsables. Conservarlos no es solo una decisión voluntaria; constituye una responsabilidad legal y un aporte tangible al bienestar colectivo.
          .row(titulo="Corredores biológicos: puentes vivos para la biodiversidad")
            .col-12
              p.mb-0 Los corredores biológicos funcionan como enlaces verdes que permiten el desplazamiento de fauna, el flujo genético y la continuidad de procesos ecológicos entre fragmentos aislados. Son estructuras vivas que transforman un paisaje fragmentado en un territorio conectado, donde la vida circula con libertad. En predios rurales colombianos, su implementación evita la ruptura de hábitats, aumenta la diversidad genética y favorece la resiliencia de los ecosistemas. Estos corredores pueden ser muy simples: franjas de árboles nativos junto a un cauce de agua, arbustos distribuidos estratégicamente para la movilidad de especies pequeñas o setos vivos que brindan alimento y refugio. No se requieren inversiones extraordinarias, sino conocimiento de las especies nativas, compromiso territorial y una actitud cuidadosa frente a los procesos ecológicos.
          .row(titulo="¿Cómo conservar remanentes y crear corredores en la finca?")
            .col-12
              p.mb-0 Actuar sobre estos espacios implica protegerlos de talas, quemas o presiones que comprometan su integridad. Esto incluye mantenerlos libres de especies invasoras, aplicar cercas vivas para delimitar su área, instalar señalización y promover prácticas responsables entre quienes viven o trabajan en la finca. Cuidar los remanentes es similar a custodiar un jardín que guarda la memoria del bosque original. Para los corredores biológicos, la planificación es clave. El acompañamiento de profesionales en agroecología, restauración o manejo del paisaje facilita identificar áreas estratégicas para reforestar, seleccionar especies nativas y definir distancias adecuadas entre plantas. La construcción de estos corredores puede involucrar a familias campesinas, vecinos o asociaciones veredales, fortaleciendo el tejido social a través de prácticas de cuidado del entorno. La siembra de árboles y arbustos no solo abre rutas para la fauna; también estabiliza suelos, protege fuentes hídricas y reduce la erosión.
          .row(titulo="Un compromiso que supera los límites de la finca")
            .col-12
              p.mb-0 La conservación rural en Colombia está profundamente vinculada con procesos comunitarios y territoriales. Por esta razón, proteger remanentes y establecer corredores biológicos trasciende el beneficio individual. Cada acción contribuye a la conectividad del paisaje y a la sostenibilidad ecológica regional. Al comienzo, estas labores pueden parecer retadoras. Sin embargo, generan una satisfacción especial cuando se percibe el retorno gradual de la vida silvestre y la recuperación de las funciones ecológicas. Ese retorno confirma que cada fragmento cuidado y cada corredor construido fortalecen la permanencia de los ecosistemas en el territorio colombiano.
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Restauración ecológica
    p.mb-4 La restauración ecológica es un acto de #[b esperanza concreta] en favor del planeta y de la vida que sostiene a las comunidades rurales. En las fincas colombianas, sean pequeñas o extensas, este proceso inicia cuando se decide transformar suelos degradados en espacios vivos, donde la #[b diversidad] retoma su lugar y los sonidos naturales del territorio regresan. Restaurar no es solo sembrar árboles: implica #[b acompañar a la naturaleza] para que recupere fortaleza, equilibrio y resiliencia. Los enfoques de restauración son:
    .row.justify-content-center.mb-5
      .col-11.col-md-8.col-lg-4.bg-c14(data-aos="fade-right")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img12.svg', style="width: 120px").m-auto
          p.text-white.fs-3 #[b Restauración asistida (activa)]
          p.text-white.mb-0 Intervención directa basada en el manejo de ecosistemas y biodiversidad.
      .col-11.col-md-8.col-lg-4.bg-c15(data-aos="fade-left")
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img13.svg', style="width: 120px").m-auto
          p.fs-3 #[b Restauración espontánea (pasiva)]
          p.mb-0 Eliminación o reducción de las causas de degradación para favorecer la regeneración natural sin obstáculos.
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Prácticas de restauración ecológica
    p.mb-4 Las estrategias de restauración se agrupan en cuatro tipos principales, cada una con prácticas específicas según el nivel de degradación y los objetivos socioecológicos:
    .row.bg-c13.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1.p-4.shadow
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Recuperación ecológica o productiva]
                  p Estrategias enfocadas en mejorar la oferta de servicios ecosistémicos de alto valor social, aplicadas en áreas con degradación severa, donde es inviable retornar al estado original.  
                  p.mb-0 Ejemplos: fitorremediación, obras biomecánicas, revegetalización, manejo agroecológico del suelo, reconversión productiva.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img20.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Rehabilitación funcional]
                  p Busca revitalizar funciones ecológicas esenciales para mantener y regular los servicios ecosistémicos. Aplicable en zonas con degradación moderada.  
                  p.mb-0 Ejemplos: enriquecimiento forestal, sistemas agroecológicos alimentarios, sistemas agroforestales, agrosucesionales, silvopastoriles, tratamientos bioecológicos como siembra directa, nucleación o instalación de perchas.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img21.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Restauración ecológica]
                  p Orientada a recuperar la estructura, composición y funcionamiento del ecosistema afectado, buscando un sistema autosostenible.  
                  p.mb-0 Ejemplos: enriquecimientos forestales, manejo de la regeneración natural, limpieza de caños, ríos y humedales, siembra directa o nucleada, revitalización de flujos hídricos, control de especies invasoras.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img22.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Restauración multifuncional]
                  p Aborda el manejo integrado del paisaje, articulando objetivos ecológicos, económicos y socioculturales.  
                  p.mb-0 Ejemplos: corredores biológicos, mosaicos agroecológicos, reconversión productiva, revitalización de flujos y fuentes hídricas, enriquecimientos de ecosistemas.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img23.png', style="width: 400px").m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Acciones en el marco del Plan Nacional de Restauración
    p.mb-4 Los Sistemas Agroforestales (SAF) integran árboles, cultivos y, en algunos casos, animales dentro de una misma unidad productiva. Esta combinación fortalece la funcionalidad ecológica del paisaje y genera beneficios económicos, sociales y culturales para las familias rurales.
    .row.justify-content-center.mb-5
      .col-lg-5.bg-c7.mb-4.mb-lg-0(data-aos="fade-left")
        .row.h-100.align-items-center
            .col-12
              .p-4
                p.mb-0 Los SAF aportan a la transición agroecológica al disminuir la presión sobre los ecosistemas naturales, favorecer la conectividad ecológica entre relictos de bosque y zonas productivas, y consolidar prácticas sostenibles adaptadas al territorio. La diversificación incrementa la resiliencia frente al cambio climático, mejora la fertilidad del suelo, regula el microclima y potencia los ciclos de nutrientes.
      .col-lg-auto.ps-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img24.png', style="width: 350px").m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Tipos de sistemas agroforestales
    p.mb-4 Los #[b sistemas agroforestales] integran árboles, cultivos y, en algunos casos, animales en un mismo espacio productivo. Su propósito es fortalecer la salud del suelo, mejorar la disponibilidad de alimentos y mantener paisajes rurales más estables y diversos. A continuación, se describen los tipos más comunes:
    .row.bg-c13.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1.p-4.shadow
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Agroforestería tradicional]
                  p Expresión ancestral de interacción respetuosa con el entorno. Combina cultivos de ciclo corto (maíz, fríjol) con árboles frutales, maderables o de sombra. No se basa en manuales técnicos, sino en #[b saberes tradicionales] transmitidos por generaciones.
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Proporciona alimento inmediato y servicios ecológicos (protección del suelo, aporte de materia orgánica, fijación de nitrógeno).
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Su objetivo principal es la #[b seguridad alimentaria familiar], no el rendimiento comercial.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img25.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Bosques comestibles]
                  p Diseños que imitan la estructura de un bosque natural, organizados por estratos vegetales (suelo, arbustos, dosel medio, árboles altos).
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Permiten el aprovechamiento eficiente de #[b luz solar, agua y nutrientes].
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Generan microclimas, conservan la humedad, protegen de la erosión y favorecen la #[b resiliencia del ecosistema].
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Producen alimentos, medicinas, maderas y otros recursos de forma sostenible.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img26.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Sistemas silvoagrícolas]
                  p Integran #[b cultivos anuales] con #[b hileras de árboles] que cumplen funciones productivas y ecológicas.
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Los árboles actúan como aliados del cultivo: protegen del viento, regulan la temperatura y #[b aportan materia orgánica].
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Se forman callejones entre líneas de árboles (maderables, frutales o forrajeros) para optimizar luz y nutrientes.
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Fomentan la #[b fertilidad del suelo] y permiten compatibilizar la agricultura con la conservación.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img27.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Sistemas silvopastoriles]
                  p Integran #[b árboles, pasturas y animales] (bovinos, ovinos, caprinos) en una unidad productiva conjunta. Cada componente tiene funciones complementarias que fortalecen la sostenibilidad del sistema.
                  p.mb-0 #[b Funciones principales:]
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 #[b Árboles:] Sombra, alimento, mejora del suelo, fijación de nitrógeno, infiltración de agua.
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 #[b Pasturas:] Variedades resistentes, adaptadas a condiciones difíciles.
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 #[b Animales:] Manejo sostenible (rotación, densidades controladas) que evita la degradación del suelo.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img28.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Sistemas silvopastoriles]
                  p.mb-0 #[b Beneficios ecológicos y productivos:]
                  ul.lista-ul
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Reducción de la erosión.
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Incremento de la biodiversidad.
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Mayor confort térmico y productividad animal.
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Captura de carbono #[b (mitigación del cambio climático)].
                  p.mb-0 Transforman el paisaje ganadero en un sistema productivo y regenerativo.
                .col-lg-5
                  figure
                    img(src='@/assets/curso/tema2/img29.png', style="width: 400px").m-auto
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Corredores florales
    p.mb-4 Los #[b corredores florales] son franjas de vegetación compuestas por #[b plantas con flores nativas o adaptadas], diseñadas para #[b conectar zonas de conservación, cultivos y áreas productivas]. Su función principal es #[b favorecer el tránsito de polinizadores, insectos benéficos y otras especies clave para el equilibrio ecológico]. Implementarlos en predios rurales aporta beneficios significativos a nivel ambiental y productivo, ya que:
    .row.justify-content-center.mb-4
      .col-10.col-md-5.col-lg-2.mb-4.mb-lg-0
        .p-4.bg-c6
          figure.mb-3
            img(src='@/assets/curso/tema2/img14.svg', style="width: 90px").m-auto
          p.text-center.text-white.mb-0 Restauran la conectividad ecológica.
      .col-10.col-md-5.col-lg-2.mb-4.mb-lg-0
        .p-4.bg-c6
          figure.mb-3
            img(src='@/assets/curso/tema2/img15.svg', style="width: 90px").m-auto
          p.text-center.text-white.mb-0 Aumentan la biodiversidad funcional.
      .col-10.col-md-5.col-lg-2
        .p-4.bg-c6
          figure.mb-3
            img(src='@/assets/curso/tema2/img16.svg', style="width: 90px").m-auto
          p.text-center.text-white.mb-0 Mejoran la resiliencia de los agroecosistemas.
    p.mb-4 A continuación se resumen sus principales funciones agroecológicas:
    .row.bg-c16
      .col-12
        .px-5
          .row.align-items-center.mb-4
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img31.png', style="width: 300px").m-auto
            .col-lg-9
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src="@/assets/curso/tema2/img17.svg", alt="alt").img100.m-auto
                  p.text-center #[b Atracción de polinizadores]
                  p.text-center.mb-0 Favorecen la presencia de abejas, mariposas y otros insectos que aumentan la productividad de los cultivos.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src="@/assets/curso/tema2/img18.svg", alt="alt").img100.m-auto
                  p.text-center #[b Control biológico natural]
                  p.text-center.mb-0 Hospedan insectos benéficos que regulan plagas de forma natural, reduciendo la necesidad de agroquímicos.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src="@/assets/curso/tema2/img19.svg", alt="alt").img100.m-auto
                  p.text-center #[b Protección del suelo y microclima]
                  p.text-center.mb-0 Contribuyen a reducir la erosión, mejorar la infiltración del agua y regular la temperatura del entorno.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src="@/assets/curso/tema2/img20.svg", alt="alt").img100.m-auto
                  p.text-center #[b Diversificación paisajística]
                  p.text-center.mb-0 Integran estética, cultura y funcionalidad ecológica, aportando valor agregado al diseño del paisaje productivo.
          p.mb-5 Los corredores florales no solo embellecen el entorno rural, sino que también #[b fortalecen los servicios ecosistémicos], siendo una herramienta clave para una agricultura más sustentable y resiliente.
          .row.mb-4.ms-0
            .col-auto.bg-c5(data-aos="fade-left")
              .row.align-items-end
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
                .col.ps-0
                  h3.mb-2.ms-3 Estrategias prediales para el manejo de residuos
    p.mb-4 La gestión de residuos sólidos en Colombia representa un reto crucial para reducir impactos ambientales y promover el aprovechamiento de materiales. Dentro de esta problemática, los residuos orgánicos constituyen una proporción significativa del total generado, especialmente en zonas rurales.
    .row.bg-c17.mb-5
      .col-12
        .px-5
          .row.justify-content-center.mb-4
            .col-lg-5.bg-c7.mb-4.mb-lg-0(data-aos="fade-left")
              .row.h-100.align-items-center
                  .col-12
                    .p-4
                      p.mb-0 Su correcta gestión, mediante prácticas como el #[b compostaje y la lombricultura], permite avanzar hacia una producción más sostenible. Estas estrategias no solo ayudan a #[b cerrar ciclos de nutrientes], sino que también #[b generan bioinsumos útiles] para la producción agrícola.
            .col-lg-auto.ps-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img32.png', style="width: 350px").m-auto
          p.mb-4 El enfoque predial se alinea con los principios de la economía circular, que promueve la #[b separación en la fuente], el #[b reciclaje], la #[b reutilización] y la #[b valorización de residuos], convirtiéndolos en recursos como:
          .row.justify-content-center.mb-4
            .col-10.col-md-5.col-lg-2.mb-4.mb-lg-0
              .p-4.bg-c18
                figure.mb-3
                  img(src='@/assets/curso/tema2/img21.svg', style="width: 90px").m-auto
                p.text-center.mb-0 Bioabonos.
            .col-10.col-md-5.col-lg-2.mb-4.mb-lg-0
              .p-4.bg-c18
                figure.mb-3
                  img(src='@/assets/curso/tema2/img22.svg', style="width: 90px").m-auto
                p.text-center.mb-0 Enmiendas para el suelo.
            .col-10.col-md-5.col-lg-2
              .p-4.bg-c18
                figure.mb-3
                  img(src='@/assets/curso/tema2/img23.svg', style="width: 90px").m-auto
                p.text-center.mb-0 Materiales reutilizables para infraestructura rural.
          .row.justify-content-center
            .col-lg-3.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img34.png', style="width: 300px").m-auto
            .col-lg-5.bg-c7(data-aos="fade-left")
              .row.h-100.align-items-center
                  .col-12
                    .p-4
                      p El manejo adecuado de residuos sólidos implica no solo aspectos técnicos, sino también #[b normativos y educativos], con el fin de:
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fa-solid.fa-check-circle
                          |
                          p.mb-0 Minimizar riesgos ambientales.
                        li.d-flex
                          i.fa-solid.fa-check-circle
                          |
                          p.mb-0 Generar beneficios económicos.
                        li.d-flex
                          i.fa-solid.fa-check-circle
                          |
                          p.mb-0 Fortalecer la conciencia ecológica de las comunidades rurales y urbanas.
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Compostaje y lombricultura para residuos orgánicos
    p.mb-4 El manejo sostenible de los #[b residuos orgánicos] en predios rurales incluye diversas prácticas agroecológicas que permiten #[b transformar desechos en insumos productivos]. Entre ellas, destacan el #[b compostaje], la #[b lombricultura] y el #[b cultivo de mosca soldado negra], todas orientadas a cerrar ciclos de nutrientes, mejorar la #[b fertilidad del suelo] y reducir los impactos ambientales. A continuación, se presentan los aspectos clave de cada estrategia:
    .row.bg-c13.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--azul1.p-4.shadow
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Compostaje]
                  p Proceso biológico natural donde microorganismos descomponen residuos orgánicos (cocina, jardín, cosechas, estiércol) en condiciones controladas, transformándolos en #[b humus o compost] rico en nutrientes.
                  p #[b Condiciones claves:]
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Humedad: 40-60 %.
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Temperatura: Fase mesofílica y luego termofílica (40-60 °C).
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Oxígeno: Aireación adecuada.
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Relación C/N ideal: 25-30:1.
                .col-lg-5
                  figure.mb-3
                    img(src='@/assets/curso/tema2/img35.png', style="width: 400px").m-auto
                  .row.justify-content-center
                    .col-auto
                      a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_Criterios para_un_compostaje_exitoso.pdf')" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-pdf.svg")
                        .anexo__texto
                          p #[b Anexo.] Criterios para un compostaje exitoso.
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Lombricultura (vermicompostaje)]
                  p Uso de lombrices, principalmente #[i Eisenia foetida] (roja californiana), para procesar residuos orgánicos precompostados y transformarlos en #[b humus de lombriz], un biofertilizante de alta calidad.
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Las lombrices requieren un sustrato con buena humedad y textura.
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 La cosecha del humus se realiza por #[b separación gradual o migración] de lombrices, sin dañarlas.
                .col-lg-5
                  figure.mb-3
                    img(src='@/assets/curso/tema2/img36.png', style="width: 400px").m-auto
              .row.justify-content-center.align-items-center.my-lg-4
                .col-lg-5.mb-4.mb-lg-0
                  p #[b Mosca soldado negra]
                  p Estrategia de #[b bioconversión agroecológica] que utiliza larvas de Hermetia illucens para transformar residuos orgánicos (restos de cocina, estiércoles, residuos agrícolas) en #[b biomasa proteica y abono natural].
                  ul.lista-ul.mb-0
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Reduce el volumen de desechos, mejora la bioseguridad y genera insumos para alimentación animal y fertilización.
                    li.d-flex
                      i.fa-solid.fa-check-circle
                      |
                      p.mb-0 Adaptable a predios rurales, fortalece la #[b economía circular] y mejora indicadores del #[b IPPTA] en manejo de residuos, fertilidad y resiliencia predial.
                .col-lg-5
                  figure.mb-3
                    img(src='@/assets/curso/tema2/img37.png', style="width: 400px").m-auto
    .row.bg-c2.mb-5
      .col-12
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-4.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img38.png', style="width: 400px").m-auto
            .col-lg-6.bg-c7(data-aos="fade-left")
              .row.h-100.align-items-center
                  .col-12
                    .p-4
                      p Estas estrategias aportan a una #[b gestión integral de residuos], en coherencia con los principios de la agroecología, promoviendo:
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fa-solid.fa-check-circle
                          |
                          p.mb-0 La #[b reducción de desechos orgánicos] en fuentes locales. 
                        li.d-flex
                          i.fa-solid.fa-check-circle
                          |
                          p.mb-0 La #[b generación de bioinsumos] de bajo costo.
                        li.d-flex
                          i.fa-solid.fa-check-circle
                          |
                          p.mb-0 La #[b mejora de la fertilidad] y salud del suelo.
                        li.d-flex
                          i.fa-solid.fa-check-circle
                          |
                          p.mb-0 El fortalecimiento de la #[b resiliencia predial] y la autonomía productiva.
          .row.mb-4.ms-0
            .col-auto.bg-c5(data-aos="fade-left")
              .row.align-items-end
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
                .col.ps-0
                  h3.mb-2.ms-3 Separación en la fuente y clasificación de residuos sólidos
          p.mb-4 En Colombia, la separación adecuada de los residuos sólidos es fundamental para facilitar su reciclaje, compostaje o disposición final. La #[b Resolución 2184 de 2019], expedida por el #[b Ministerio de Ambiente y Desarrollo Sostenible], establece una clasificación clara de los residuos y define un #[b código de colores] para su correcta segregación:
          .row.justify-content-center.mb-4
            .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c19.shadow.rounded.h-100.mb-4
                figure.mb-4
                  img(src='@/assets/curso/tema2/img24.svg', style="width: 120px").m-auto
                p.text-center #[b Verde]
                p.text-center.mb-0 Orgánicos aprovechables: residuos vegetales, restos de cosechas, podas, estiércol y residuos de alimentos.
            .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
              .p-4.bg-c19.shadow.rounded.h-100.mb-4
                figure.mb-4
                  img(src='@/assets/curso/tema2/img25.svg', style="width: 120px").m-auto
                p.text-center #[b Blanco]
                p.text-center.mb-0 Aprovechables reciclables: plásticos, vidrio, metales, materiales multicapa, papel y cartón.
            .col-10.col-md-6.col-lg-4
              .p-4.bg-c19.shadow.rounded.h-100
                figure.mb-4
                  img(src='@/assets/curso/tema2/img26.svg', style="width: 120px").m-auto
                p.text-center #[b Negro]
                p.text-center.mb-0 No aprovechables: papel contaminado, empaques sucios, residuos mezclados y materiales no reciclables.
          p.mb-0 Aunque en zonas rurales no siempre se dispone de recipientes de los colores establecidos, se recomienda igualmente realizar la separación en la fuente, ya que facilita el aprovechamiento y reduce los impactos ambientales negativos.
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Reutilización de materiales en infraestructura y herramientas
    p.mb-5 En ambientes rurales, la reutilización de materiales provenientes de residuos sólidos, como madera, plástico o metal, es una estrategia eficaz para reducir la generación de desechos y la demanda de nuevos recursos. Esta práctica se enmarca en los principios de la agroecología y la economía circular, y puede aplicarse en:
    .row.justify-content-center.mb-4
      .col-lg-3.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img39.png', style="width: 400px").m-auto
      .col-lg-5.bg-c7(data-aos="fade-left")
        .row.h-100.align-items-center
            .col-12
              .p-4
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fa-solid.fa-check-circle
                    |
                    p.mb-0 Construcción de cerramientos, gallineros, estanterías, composteras, invernaderos y otros elementos de infraestructura menor.
                  li.d-flex
                    i.fa-solid.fa-check-circle
                    |
                    p.mb-0 Reparación o fabricación de herramientas agrícolas a partir de piezas reutilizadas.
                  li.d-flex
                    i.fa-solid.fa-check-circle
                    |
                    p.mb-0 Adecuación de caminos o zonas de trabajo con materiales reciclados.
    p.mb-5 La reutilización no solo contribuye al ahorro económico, sino que también disminuye la presión sobre los ecosistemas locales.
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Producción de bioinsumos a partir de residuos vegetales y animales
    p.mb-4 Los residuos vegetales y animales pueden ser transformados en #[b bioinsumos] mediante técnicas accesibles y de bajo costo, lo que fortalece la sostenibilidad agroecológica y reduce la dependencia de insumos sintéticos. A continuación, se resumen los principales tipos:
    .row.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c4.shadow.rounded.h-100.mb-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img27.svg', style="width: 120px").m-auto
          p.text-center #[b Biofertilizantes]
          p.text-center.mb-0 #[b Materia prima:] estiércol, residuos vegetales y lixiviados de compost.
          p.text-center.mb-0 #[b Beneficios:] aportan nutrientes y fortalecen la dinámica del suelo.
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c4.shadow.rounded.h-100.mb-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img28.svg', style="width: 120px").m-auto
          p.text-center #[b Biopreparados]
          p.text-center.mb-0 #[b Materia prima:] extractos vegetales, fermentos y residuos orgánicos variados.
          p.text-center.mb-0 #[b Beneficios:] impulsan el crecimiento vegetal y refuerzan defensas naturales.
      .col-10.col-md-6.col-lg-4
        .p-4.bg-c4.shadow.rounded.h-100
          figure.mb-4
            img(src='@/assets/curso/tema2/img29.svg', style="width: 120px").m-auto
          p.text-center #[b Bioplaguicidas]
          p.text-center.mb-0 #[b Materia prima:] extractos de plantas como ajo, ají y ruda, junto con residuos animales.
          p.text-center.mb-0 #[b Beneficios:] controlan plagas sin afectar la biodiversidad.
    p.mb-5 Estas prácticas permiten aprovechar los recursos disponibles en la finca y fortalecer la autonomía productiva.
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Manejo seguro de residuos peligrosos y no aprovechables
    p.mb-4 Los #[b residuos peligrosos (RESPEL)] son aquellos que, por sus características físicas, químicas o biológicas, pueden causar daños graves al ambiente o a la salud. Algunos ejemplos comunes en las fincas son los envases vacíos de plaguicidas o productos veterinarios.
    .row.justify-content-center.mb-4
      .col-lg-6
        .p-4.bg-c3
          p.mb-0 #[b La Resolución 1675 de 2013] del Ministerio de Ambiente establece que estos residuos deben ser gestionados a través de #[b Planes de Gestión Posconsumo], los cuales definen rutas, puntos de recolección y procedimientos seguros para su devolución.
    .row.bg-c17.mb-5
      .col-12
        .px-5
          .row.justify-content-center.mb-4
            .col-lg-4.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img30.svg', style="width: 400px").m-auto
            .col-lg-6.bg-c7(data-aos="fade-left")
              .row.h-100.align-items-center
                  .col-12
                    .p-4
                      p Recomendaciones clave para el manejo adecuado de envases de plaguicidas y productos veterinarios:
                      ul.lista-ul.mb-0
                        li.d-flex
                          i.fa-solid.fa-check-circle
                          |
                          p.mb-0 Realizar el #[b triple lavado] de los envases inmediatamente después de su uso.
                        li.d-flex
                          i.fa-solid.fa-check-circle
                          |
                          p.mb-0 Reunir envases, empaques y embalajes que hayan estado en contacto con productos peligrosos.
                        li.d-flex
                          i.fa-solid.fa-check-circle
                          |
                          p.mb-0 Destruir etiquetas y empaques que tengan marcas comerciales susceptibles de falsificación.
                        li.d-flex
                          i.fa-solid.fa-check-circle
                          |
                          p.mb-0 Evitar mezclar estos residuos con otros que no sean aceptados en los puntos de recolección posconsumo.
          p.mb-5 No se trata únicamente de cumplir con la normativa, sino de prevenir la #[b contaminación del suelo, del agua y proteger la salud humana y animal]. Cada acción responsable contribuye a un entorno rural más seguro y sostenible.
          .row.mb-4.ms-0
            .col-auto.bg-c5(data-aos="fade-left")
              .row.align-items-end
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
                .col.ps-0
                  h3.mb-2.ms-3 Tratamiento y reutilización de aguas residuales domésticas y agropecuarias
          p.mb-4 Las aguas residuales generadas en las fincas han sido tradicionalmente consideradas como un desecho sin valor. Su apariencia, olor y textura, es decir, sus características organolépticas, han generado rechazo y han llevado a su descarte sin tratamiento. Esto ha contribuido a la contaminación de ríos y suelos.
          .row.justify-content-center
            .col-lg-4.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img31.svg', style="width: 400px").m-auto
            .col-lg-6.bg-c7(data-aos="fade-left")
              .row.h-100.align-items-center
                  .col-12
                    .p-4
                      p Sin embargo, actualmente se reconoce que estas aguas pueden convertirse en un recurso útil si se tratan adecuadamente. Su tratamiento no solo reduce el impacto ambiental, sino que también permite su aprovechamiento dentro de un enfoque agroecológico y circular.
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Soluciones naturales para el tratamiento del agua
    p.mb-4 Existen tecnologías apropiadas que imitan procesos ecológicos para depurar las aguas residuales. Estas soluciones, además de ser eficientes, son adaptables a contextos rurales.
    .row.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c3.shadow.rounded.h-100.mb-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img32.svg', style="width: 120px").m-auto
          p.text-center #[b Filtros verdes]
          p.text-center.mb-0 Sistemas que utilizan plantas y sustratos para retener y descomponer contaminantes mediante procesos biológicos, imitando la depuración natural del ecosistema.
      .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
        .p-4.bg-c3.shadow.rounded.h-100.mb-4
          figure.mb-4
            img(src='@/assets/curso/tema2/img33.svg', style="width: 120px").m-auto
          p.text-center #[b Biodigestores]
          p.text-center.mb-0 Unidades cerradas donde microorganismos anaerobios descomponen la materia orgánica. Generan biogás y un efluente líquido reutilizable para fines agrícolas.
      .col-10.col-md-6.col-lg-4
        .p-4.bg-c3.shadow.rounded.h-100
          figure.mb-4
            img(src='@/assets/curso/tema2/img34.svg', style="width: 120px").m-auto
          p.text-center #[b Humedales artificiales]
          p.text-center.mb-0 Ecosistemas construidos que simulan el funcionamiento de los humedales naturales. Utilizan plantas acuáticas, microorganismos y sustratos para limpiar el agua.
    p.mb-5 Estas tecnologías actúan como filtros biológicos, comparables a riñones naturales, que devuelven al agua su calidad y utilidad, permitiendo su reintegración segura en el sistema productivo.
    .row.mb-4.ms-0
      .col-auto.bg-c5(data-aos="fade-left")
        .row.align-items-end
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', alt='', style='width: 40px; position: relative; left: 5px').m-auto
          .col.ps-0
            h3.mb-2.ms-3 Reutilización del agua tratada
    p.mb-4 Una vez tratadas, las aguas residuales pueden reutilizarse con seguridad en diversas actividades dentro de la finca. Algunos de los usos más frecuentes incluyen:
    .row.justify-content-center.mb-4
      .col-lg-3.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img40.png', style="width: 400px").m-auto
      .col-lg-5.bg-c7(data-aos="fade-left")
        .row.h-100.align-items-center
            .col-12
              .p-4
                ul.lista-ul.mb-0
                  li.d-flex
                    i.fa-solid.fa-check-circle
                    |
                    p.mb-0 Riego de cultivos de ciclo largo o no destinados al consumo directo.
                  li.d-flex
                    i.fa-solid.fa-check-circle
                    |
                    p.mb-0 Limpieza de áreas de trabajo y herramientas.
                  li.d-flex
                    i.fa-solid.fa-check-circle
                    |
                    p.mb-0 Abastecimiento para procesos productivos que no requieren agua potable.
    p.mb-0 Este aprovechamiento cierra un ciclo que antes era abierto y contaminante. Al tratar y reutilizar el agua, se reduce la presión sobre fuentes hídricas naturales, se previene la contaminación y se promueve una gestión predial más eficiente, resiliente y alineada con los principios de sostenibilidad.

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
