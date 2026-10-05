/* =====================================================================
   UD1 · Aplicaciones Ofimáticas — SMR 26/27
   Base de datos de estudio. Fuente: UD1.pdf (32 páginas).
   Todo el contenido está extraído y resumido del temario oficial.
   ===================================================================== */

const UD1 = {
  meta: {
    titulo: 'UD1 · Aplicaciones Ofimáticas',
    modulo: 'Aplicaciones ofimáticas',
    ciclo: 'SMR 26/27',
    alumno: 'Rubén Sánchez Árbol',
    fuente: 'UD1.pdf — 32 páginas',
    objetivo: 'Sacar el 10'
  },

  /* ---------------------------------------------------------------
     BLOQUES DEL TEMARIO
     contenido: array de bloques renderizables
       {tipo:'p',      texto}
       {tipo:'ul'|'ol', titulo, items:[]}
       {tipo:'tabla',  cols:[], rows:[[]], caption, nota}
       {tipo:'datos',  items:[{k, v}]}
       {tipo:'callout',tono:'clave'|'truco'|'aviso'|'examen', titulo, texto|items}
       {tipo:'code',   texto}
     flashcards: [{q,a}]
     quiz:       [{p, o:[...], r:idx, e:'explicación', tipo:'mcq'|'vf'}]
     emparejar:  {titulo, pares:[[a,b],...]}
     --------------------------------------------------------------- */
  bloques: [
    /* ============================================================ */
    {
      id: 'ergonomia',
      num: 1,
      icono: '🪑',
      color: '#38bdf8',
      titulo: 'Ergonomía en el puesto de trabajo',
      sub: 'Recomendaciones de ergonomía · pantalla, luz, teclado, postura, cargas, sonido',
      resumen:
        'La ergonomía adapta el puesto de trabajo a la persona, no al revés. Siete bloques de recomendaciones: pantalla, iluminación, teclado, condiciones ambientales, postura, manipulación de cargas y confort acústico.',
      contenido: [
        { tipo: 'p', texto:
          'La ergonomía busca que el equipo se adapte a la persona y no al revés. Todo lo que viene abajo es la recomendación literal del temario: entra en el examen tal cual. Aprende bien las cifras (40-60 cm, 17-27 °C, 30-70 %, 20-20-20) porque casi siempre caen en pregunta numérica.' },

        { tipo: 'datos', items: [
          { k: 'Distancia pantalla–usuario', v: '40-60 cm' },
          { k: 'Descanso', v: '10-15 min cada 90 min' },
          { k: 'Regla 20-20-20', v: '20 min → 20 pies (6 m) → 20 s' },
          { k: 'Temperatura del local', v: '17 a 27 °C' },
          { k: 'Humedad relativa', v: '30 % a 70 %' },
          { k: 'Brazos / antebrazos', v: '90º o un poco más' },
          { k: 'Muslo y espalda', v: '90º o un poco más' }
        ]},

        { tipo: 'ul', titulo: 'Pantalla', items: [
          'Mantener limpia la pantalla.',
          'Evitar pantallas con destellos de luz.',
          'Borde superior del monitor a nivel de los ojos.',
          'Realizar pausas y descansos: 10-15 minutos cada 90 minutos de visualización.',
          'Regular el brillo, el contraste y el color del monitor.',
          'Situar la pantalla a una distancia de 40-60 centímetros respecto al usuario.',
          'Aplicar la regla 20-20-20: cada 20 minutos mirar un objeto a 20 pies (6 metros) de distancia durante 20 segundos.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Regla 20-20-20 (la más preguntada)', texto:
          'Tres números iguales y en orden: 20 minutos mirando la pantalla → mirar un objeto a 20 pies (6 m) → mantener la mirada 20 segundos. Sirve para descansar la vista.' },

        { tipo: 'ul', titulo: 'Iluminación', items: [
          'Colocar el monitor de manera que la iluminación provenga lateralmente.',
          'No debe existir exceso de contraste entre la luz de la sala y la de nuestra pantalla.',
          'Evitar reflejos o deslumbramientos de luz artificial.',
          'Las ventanas irán equipadas con dispositivos regulables a voluntad (persianas, cortina opaca).'
        ]},

        { tipo: 'ul', titulo: 'Teclado', items: [
          'Dejar espacio suficiente delante del teclado para descansar cómodamente los antebrazos.',
          'El teclado será inclinable.',
          'La superficie del teclado deberá ser mate para evitar los reflejos.'
        ]},

        { tipo: 'ul', titulo: 'Condiciones ambientales', items: [
          'La temperatura de los locales donde se realicen trabajos de oficina o similares debe estar comprendida entre 17 y 27 grados.',
          'La humedad relativa debe estar comprendida entre el 30 % y el 70 %.'
        ]},

        { tipo: 'ul', titulo: 'Postura para sentarse y organización del trabajo', items: [
          'Cabeza/cuello en posición recta y hombros relajados.',
          'Antebrazos y brazos a 90º o un poco más.',
          'Antebrazos, muñecas y manos en línea recta.',
          'Codos pegados al cuerpo.',
          'Muslo y espalda a 90º o un poco más.',
          'Holgura entre el borde del asiento y las rodillas.',
          'Mantener las muñecas rectas, no dobladas ni hacia arriba ni hacia abajo.',
          'Evitar golpear las teclas con fuerza: escribir con movimientos suaves.',
          'Levantarse y caminar regularmente para favorecer la circulación sanguínea.',
          'Mover el ratón con el brazo y el hombro, no solo con la muñeca.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Los 90 grados', texto:
          'Dos ángulos de 90º en todo el temario: (1) brazos y antebrazos, (2) muslo y espalda. Y las muñecas siempre en línea recta: nunca dobladas hacia arriba ni hacia abajo.' },

        { tipo: 'ul', titulo: 'Normas en la manipulación de cargas', items: [
          'Pies separados y firmemente apoyados.',
          'Doblar las rodillas para levantar la carga del suelo y mantener la espalda recta.',
          'Si tiene que levantar la carga por encima de la cintura, no lo haga en un solo movimiento.',
          'No girar el cuerpo mientras transporta la carga.',
          'Mantener la carga lo más cercana posible al cuerpo.',
          'Si la carga es excesiva, pedir ayuda a un compañero.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Cargar bien en 5 pasos (fácil de memorizar)', items: [
          'Pies separados y appuyados.',
          'Rodillas flexionadas + espalda recta (agacharse, no doblarse).',
          'Carga pegada al cuerpo.',
          'No girar el cuerpo: mover los pies.',
          'Si pesa demasiado → pedir ayuda.'
        ]},

        { tipo: 'ul', titulo: 'Confort acústico', items: [
          'Los ruidos no deseados pueden llegar a ser molestos, interferir en la percepción del sonido y en la concentración, e incluso ser dañinos a nivel fisiológico.'
        ]}
      ],

      flashcards: [
        { q: '¿A qué distancia debe estar la pantalla respecto al usuario?', a: 'Entre 40 y 60 centímetros.' },
        { q: '¿Cada cuánto hay que descansar y cuánto dura el descanso?', a: '10-15 minutos de descanso cada 90 minutos de visualización.' },
        { q: 'Regla 20-20-20, completa.', a: 'Cada 20 minutos mirar un objeto situado a 20 pies (6 metros) de distancia durante 20 segundos.' },
        { q: '¿A qué altura debe estar el borde superior del monitor?', a: 'A nivel de los ojos.' },
        { q: '¿Cómo se coloca el monitor respecto a la iluminación?', a: 'De manera que la iluminación provenga lateralmente (nunca de frente ni desde detrás del usuario).' },
        { q: 'Temperatura recomendada en un local de trabajo de oficina.', a: 'Entre 17 y 27 grados.' },
        { q: 'Humedad relativa recomendada.', a: 'Entre el 30 % y el 70 %.' },
        { q: '¿Qué debe tener la superficie del teclado?', a: 'Debe ser mate, para evitar los reflejos.' },
        { q: '¿El teclado debe ser inclinable?', a: 'Sí, el teclado será inclinable.' },
        { q: 'Espacio delante del teclado: ¿por qué?', a: 'Para descansar cómodamente los antebrazos.' },
        { q: 'Angle de antebrazos y brazos.', a: 'A 90º o un poco más.' },
        { q: 'Angle de muslo y espalda.', a: 'A 90º o un poco más.' },
        { q: '¿Dónde van los codos?', a: 'Pegados al cuerpo.' },
        { q: '¿Cómo deben estar las muñecas?', a: 'Rectas, en línea recta con antebrazos y manos; no dobladas hacia arriba ni hacia abajo.' },
        { q: '¿Cómo se mueve el ratón?', a: 'Con el brazo y el hombro, no solo con la muñeca.' },
        { q: '¿Por qué hay que levantarse y caminar regularmente?', a: 'Para favorecer la circulación sanguínea.' },
        { q: 'Al levantar una carga del suelo, ¿qué haces?', a: 'Doblar las rodillas y mantener la espalda recta.' },
        { q: '¿Puedes girar el cuerpo mientras transportas una carga?', a: 'No. Hay que mover los pies, nunca girar el torso con la carga.' },
        { q: 'La carga, ¿dónde se lleva?', a: 'Lo más cercana posible al cuerpo.' },
        { q: '¿Y si la carga es excesiva?', a: 'Pedir ayuda a un compañero.' },
        { q: '¿Qué Provoca el ruido no deseado?', a: 'Molestia, interferencia en la percepción del sonido y en la concentración, e incluso daño fisiológico.' },
        { q: 'Holgura entre el borde del asiento y las rodillas: ¿se deja?', a: 'Sí, debe haber holgura para que la sangre circule correctamente.' },
        { q: '¿Las ventanas de la oficina llevan algún dispositivo?', a: 'Sí, dispositivos regulables a voluntad (persianas/cortinas) para controlar la luz.' },
        { q: 'Dos medidas de la pantalla para evitar la fatiga visual.', a: 'Mantenerla limpia y evitar pantallas con destellos de luz; además regular brillo, contraste y color.' }
      ],

      quiz: [
        { p: '¿A qué distancia debe situarse la pantalla respecto al usuario?', o: ['20-30 cm', '40-60 cm', '70-90 cm', '1 metro'], r: 1, e: 'El temario pide 40-60 centímetros de distancia entre pantalla y usuario.' },
        { p: '¿Cada cuánto tiempo se deben realizar pausas y cuánto duran?', o: ['10-15 min cada 90 min', '5-10 min cada 45 min', '20-25 min cada 120 min', '30-40 min cada 240 min'], r: 0, e: '10-15 minutos cada 90 minutos de visualización. Los dos números van juntos.', t: {1: 'Los 90 minutos no se tocan: 45 es la mitad.', 2: 'La duración son 10-15 min, no 20-25.', 3: 'La duración son 10-15 min, no 30-40.'} },
        { p: 'La regla 20-20-20 consiste en:', o: ['Descansar 20 segundos cada 20 minutos a 6 m', 'Descansar 20 minutos cada 20 segundos a 6 m', 'Mirar a 20 centímetros cada 20 minutos a 6 m', 'Hacer 20 ejercicios cada 20 minutos de descanso'], r: 0, e: '20 minutos trabajando, 20 segundos de descanso, y el objetivo a 20 pies (6 metros). Los tres números son 20.', t: {1: 'Los 20 segundos no son 20 minutos.', 2: 'La distancia son 20 pies, no 20 centímetros.', 3: 'La regla va de mirada en lejos, no de ejercicio.'} },
        { p: 'La temperatura de un local de trabajo de oficina debe estar comprendida entre:', o: ['10 y 20 grados', '17 y 27 grados', '22 y 30 grados', '15 y 22 grados'], r: 1, e: '17 a 27 grados.' },
        { p: 'La humedad relativa recomendada está entre:', o: ['10 % y 30 %', '30 % y 70 %', '50 % y 90 %', '70 % y 90 %'], r: 1, e: 'Entre el 30 % y el 70 %.' },
        { p: '¿De dónde debe provenener la iluminación respecto al monitor?', o: ['De frente', 'Lateralmente', 'Desde detrás del monitor', 'Desde el techo directamente'], r: 1, e: 'El monitor se coloca de forma que la iluminación provenga lateralmente.' },
        { p: 'El borde superior del monitor debe situarse:', o: ['A nivel de los ojos', 'Por encima de la cabeza', 'A la altura del pecho', 'Lo más bajo posible para ver los pies'], r: 0, e: 'A nivel de los ojos.' },
        { p: 'La superficie del teclado debe ser:', o: [' Brillante, para ver las teclas', 'Mate, para evitar reflejos', 'De plástico transparente', 'De color oscuro siempre'], r: 1, e: 'Mate para evitar los reflejos.' },
        { p: 'Al sentarnos, los antebrazos y brazos deben estar:', o: ['A 45º', 'A 90º', 'A 120º', 'A 180º'], r: 1, e: 'A 90º o un poco más, con antebrazos, muñecas y manos en línea recta.', t: {0: '45º es la postura de alguien encogido sobre el teclado.', 2: '120º significa bracero arriba, no apoyado.', 3: '180º es tener los brazos completamente abiertos.'} },
        { p: 'El ángulo correcto de muslo y espalda es:', o: ['90º', '45º', '120º', '180º'], r: 0, e: '90º o un poco más. Los tres ángulos que da el temario son el de pantalla, el de brazos y el de muslo con espalda.', t: {1: '45º es encogerse sobre el teclado.', 2: '120º es tumbarse hacia atrás en la silla.', 3: '180º es tumbarse del todo.'} },
        { p: 'Los codos deben estar:', o: ['Separados del cuerpo', 'Pegados al cuerpo', 'Por encima del teclado', 'En el aire'], r: 1, e: 'Codos pegados al cuerpo.' },
        { p: '¿Cómo deben estar las muñecas?', o: ['Dobladas hacia arriba', 'Dobladas hacia abajo', 'Rectas y alineadas', 'Sobre el teclado'], r: 2, e: 'Antebrazos, muñecas y manos en línea recta.', t: {0: 'Dobladas hacia arriba es la postura de quien teclea con las palmas arriba.', 1: 'Dobladas hacia abajo es la postura de quien escribe a pulso.', 3: 'Apoyadas en el teclado no es una posición, es un sitio.'} },
        { p: 'El ratón se debe mover:', o: ['Solo con la muñeca', 'Con la muñeca y los dedos', 'Con el brazo y el hombro', 'Con las dos manos'], r: 2, e: 'Con el brazo y el hombro, no solo con la muñeca.' },
        { p: '¿Por qué conviene levantarse y caminar regularmente?', o: ['Para no aburrirse en la jornada', 'Para favorecer la circulación', 'Para calentar la sala de la oficina', 'Para poder fumar entre horas'], r: 1, e: 'Las pausas y los paseos favorecen la circulación y evitan la rigidez de la postura estática.', t: {0: 'El motivo es la circulación, no el aburrimiento.', 2: 'La temperatura de la sala no depende de que te levantes.', 3: 'El temario no dice nada de fumar.'} },
        { p: 'Al levantar una carga del suelo hay que:', o: ['Doblar la espalda para no forzar las piernas', 'Doblar las rodillas y mantener la espalda recta', 'Levantarla de un solo tirón rápido', 'Estirarse con los brazos por encima de la cabeza'], r: 1, e: 'Doblar las rodillas y mantener la espalda recta.' },
        { p: 'Al transportar una carga por el pasillo es correcto:', o: ['Girar el cuerpo con la carga, sin mover los pies', 'Girar los pies y el cuerpo, sin torcer la espalda', 'Caminar hacia atrás y apartar a la gente con la carga', 'Llevarla por encima de la cintura para no rozar'], r: 1, e: 'No se gira el cuerpo: se giran los pies. La torsión de la espalda con carga es lo que daña.', t: {0: 'Girar el cuerpo con la carga y sin mover los pies es exactamente lo que hay que evitar.', 2: 'Caminar hacia atrás sin mirar no es ninguna norma del temario.', 3: 'Por encima de la cintura el temario dice directamente que no lo hagas.'} },
        { p: 'Si la carga es excesiva lo correcto es:', o: ['Levantarla entre dos brazos con más fuerza', 'Pedir ayuda a un compañero', 'Dividirla en dos trips', 'Arrastrarla'], r: 1, e: 'Pedir ayuda a un compañero.' },
        { p: '¿Qué nivel de holgura debe haber entre el borde del asiento y las rodillas?', o: ['Holgura', 'Sin holgura, la rodilla pegada al borde', 'Depende del pantalón', 'La rodilla debe tocar el suelo'], r: 0, e: 'Holgura entre el borde del asiento y las rodillas.' },
        { p: '¿Qué efectos puede tener el ruido no deseado?', o: ['Molesta, y si se alarga llega a dañar la concentración', 'Molesta, pero nunca llega a dañar la concentración', 'Solo afecta al sueño, pero no llega a molestar nunca', 'Mejora el rendimiento, así que no hay que hacer nada'], r: 0, e: 'El temario encadena los tres: molestia, interferencia en la percepción del sonido y en la concentración, y daño fisiológico.', t: {1: 'Decir que es "solo molestia" se queda corto: el temario llega hasta el daño fisiológico.', 2: 'No es solo sueño: empieza molestando y llega a la concentración.', 3: 'Mejora el rendimiento es al revés de lo que dice el temario.'} },
        { p: 'Las ventanas de la oficina deben llevar', o: ['Dispositivos regulables', 'Ventanas siempre cerradas', 'Cortinas siempre echadas', 'Cristales muy gruesos'], r: 0, e: 'Sí, para poder regular la entrada de luz y la temperatura.', t: {1: 'Cerrarlas todo el día quita la luz natural que pide el temario.', 2: 'Las cortinas siempre echadas es justo lo contrario de regular.', 3: 'El grosor del cristal no regula la luz.'} },
        { p: 'Al teclear se recomienda:', o: ['Golpear las teclas con fuerza', 'Escribir con movimientos suaves', 'Usar siempre dos dedos', 'Mantener las muñecas dobladas'], r: 1, e: 'Evitar golpear las teclas con fuerza; movimientos suaves.' },
        { p: 'Evitar destellos de luz y mantener limpia la pantalla son recomendaciones de:', o: ['El teclado', 'La iluminación', 'La pantalla (monitor)', 'Las condiciones ambientales'], r: 2, e: 'Son puntos dentro del apartado Pantalla.' },
        { p: 'V/F: "En un puesto de trabajo hay que dejar espacio suficiente delante del teclado para descansar cómodamente los antebrazos."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto, es una recomendación del apartado Teclado.' },
        { p: 'V/F: "La humedad relativa del local debe estar entre el 10 % y el 30 %."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: está entre el 30 % y el 70 %.' },
        { p: 'V/F: "Es correcto levantar la carga por encima de la cintura en un solo movimiento."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: si hay que pasarla por encima de la cintura, no debe hacerse en un solo movimiento.' },
        { p: 'V/F: "La iluminación de la sala puede tener un contraste muy fuerte con la de la pantalla sin problema."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: no debe existir exceso de contraste entre la luz de la sala y la de la pantalla.' },
        { p: 'V/F: "El teclado debe tener superficie brillante para ver mejor las letras."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: debe ser mate para evitar los reflejos.' },
        { p: 'V/F: "Los codos deben estar pegados al cuerpo."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto.' }
      ],

      emparejar: {
        titulo: 'Recomendación ↔ elemento',
        pares: [
          ['Distancia de la pantalla al usuario', '40-60 cm'],
          ['Descanso cada 90 minutos', '10-15 minutos'],
          ['Borde superior del monitor', 'A nivel de los ojos'],
          ['Temperatura del local', '17 a 27 °C'],
          ['Humedad relativa', '30 % a 70 %'],
          ['Ángulo de brazos y antebrazos', '90º o un poco más'],
          ['Ángulo de muslo y espalda', '90º o un poco más'],
          ['Superficie del teclado', 'Mate'],
          ['Origen de la iluminación', 'Lateral'],
          ['Posición de los codos', 'Pegados al cuerpo']
        ]
      }
    },

    /* ============================================================ */
    {
      id: 'licencias',
      num: 2,
      icono: '📜',
      color: '#a78bfa',
      titulo: 'Licencias de software',
      sub: 'Libre, propietario, copyright, copyleft, freeware y shareware',
      resumen:
        'Licencia = contrato entre el licenciante y el licenciatario. Clasificaciones: software libre (4 libertades) y software propietario o privativo. Después: copyright vs copyleft, freeware y shareware.',
      contenido: [
        { tipo: 'p', texto:
          'Una licencia de software es un contrato entre el licenciante (autor o titular de los derechos de explotación y distribución) y el licenciatario (usuario, consumidor, profesional o empresa) del programa informático, para utilizarlo cumpliendo una serie de términos y condiciones establecidas.' },

        { tipo: 'callout', tono: 'clave', titulo: 'Dos actores, no te los líes', items: [
          'Licenciante = autor / titular de los derechos de explotación y distribución.',
          'Licenciatario = usuario, consumidor, profesional o empresa que usa el programa.'
        ]},

        { tipo: 'ul', titulo: 'Clasificaciones de software', items: [
          'Software libre: todo programa informático cuyo código fuente cumple con 4 libertades.',
          'Software propietario (también llamado privativo): programas cuyo código fuente pertenece a una empresa u organización y que presentan limitaciones con respecto a las libertades mencionadas.'
        ]},

        { tipo: 'ol', titulo: 'Las 4 libertades del software libre', items: [
          'Libertad de uso.',
          'Libertad de estudio.',
          'Libertad de modificación.',
          'Libertad de distribución.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Las 4 L en 3 segundos', texto:
          'Uso · Estudio · Modificación · Distribución → todas empiezan por L. "Usa, Estuda, Modifica y Distribuye".' },

        { tipo: 'tabla',
          cols: ['Software libre / Código abierto', 'Software propietario'],
          rows: [
            ['LibreOffice — suite ofimática', 'Microsoft Office — suite ofimática'],
            ['Mozilla Firefox — navegador web', 'Google Chrome — navegador web'],
            ['Ubuntu — sistema operativo', 'Windows 11 — sistema operativo'],
            ['*(según el temario también se listan: VLC Media Player, GIMP, Openshot, Filmora, OBS Studio y Camtasia en la columna de software propietario)*', 'VLC Media Player — reproductor multimedia / Reproductor multimedia de Windows'],
            ['', 'GIMP — edición de imágenes'],
            ['', 'Openshot — editor de video'],
            ['', 'Filmora — editor de video'],
            ['', 'OBS Studio — grabación / Camtasia — grabación y edición']
          ],
          nota: 'La tabla reproduce lo que aparece en el temario (páginas 7). Nota para el examen: si te preguntan por la realidad, VLC Media Player y GIMP son software libre (GPL); Firefox, Ubuntu, LibreOffice y OpenShot también lo son. Aprende las dos versiones.'
        },

        { tipo: 'ul', titulo: 'Diferencias entre Copyright y Copyleft', items: [
          'Copyright: es el derecho que tiene el autor sobre su modificación, para permitir el uso a terceros y para obtener beneficios económicos por su distribución.',
          'Copyleft: software libre protegido por una licencia que obliga a los usuarios, en caso de modificar o redistribuir el producto, a que el producto resultante siga siendo libre.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Copyleft en una frase', texto:
          'Copyright = "esto es mío, mientras no me des permiso no lo tocas". Copyleft = "puedes tocarlo, pero todo lo que salga de aquí sigue siendo libre". La libertad se hereda en las versiones derivadas.' },

        { tipo: 'ul', titulo: 'Otros tipos de licencia', items: [
          'Freeware: software que se distribuye de forma gratuita y con la posibilidad de redistribución. No incluye el código fuente y por tanto no se puede modificar.',
          'Shareware: se puede distribuir de manera gratuita para su evaluación, pero normalmente su uso tiene una limitación de tiempo para disponer de todas las funciones; se debe pagar una cantidad.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Freeware vs Shareware en 2 palabras', items: [
          'Freeware = gratis pero cerrado (no se modifica).',
          'Shareware = gratis un rato (prueba con límite de tiempo) y luego se paga.'
        ]}
      ],

      flashcards: [
        { q: '¿Qué es una licencia de software?', a: 'Un contrato entre el licenciante (autor/titular de los derechos) y el licenciatario (usuario o empresa) para usar el programa cumpliendo unos términos y condiciones.' },
        { q: '¿Quién es el licenciante?', a: 'El autor o titular de los derechos de explotación y distribución del programa.' },
        { q: '¿Quién es el licenciatario?', a: 'El usuario, consumidor, profesional o empresa que utiliza el programa.' },
        { q: 'Las 4 libertades del software libre.', a: 'Uso, estudio, modificación y distribución.' },
        { q: '¿Qué es el software propietario (privativo)?', a: 'Programa cuyo código fuente pertenece a una empresa u organización y que presenta limitaciones respecto a las libertades del software libre.' },
        { q: 'Definición de copyright.', a: 'Derecho que tiene el autor sobre su modificación, para permitir el uso a terceros y para obtener beneficios económicos por su distribución.' },
        { q: 'Definición de copyleft.', a: 'Software libre protegido por una licencia que obliga a que, si se modifica o redistribuye, el producto resultante siga siendo libre.' },
        { q: '¿Qué es el freeware?', a: 'Software que se distribuye gratis y con posibilidad de redistribución. No incluye el código fuente, así que no se puede modificar.' },
        { q: '¿Qué es el shareware?', a: 'Software que se distribuye gratis para evaluación, pero con una limitación de tiempo para usar todas las funciones; hay que pagar una cantidad.' },
        { q: 'Freeware: ¿se puede modificar?', a: 'No, porque no incluye el código fuente.' },
        { q: 'Shareware: ¿cuál es su limitación?', a: 'El tiempo: se puede probar gratis un periodo, pero para todas las funciones hay que pagar.' },
        { q: 'Diferencia clave entre copyright y copyleft.', a: 'El copyright restringe y da beneficios económicos al autor; el copyleft obliga a mantener la libertad del software aunque se modifique.' },
        { q: 'LibreOffice: ¿libre o propietario?', a: 'Libre. Es una suite ofimática de código abierto.' },
        { q: 'Microsoft Office: ¿libre o propietario?', a: 'Propietario. Su código fuente pertenece a Microsoft.' },
        { q: 'Windows 11: ¿libre o propietario?', a: 'Propietario (software de sistema operativo propietario).' },
        { q: 'Ubuntu: ¿libre o propietario?', a: 'Libre. Es un sistema operativo de código abierto.' }
      ],

      quiz: [
        { p: 'Una licencia de software es:', o: ['Un contrato que regula el uso del programa entre dos partes que se compromisen', 'El documento que entrega el autor con el código fuente para poder modificarlo', 'La clave que activa el programa por un tiempo limitado en un solo equipo', 'El permiso que da el sistema operativo para instalar cualquier programa'], r: 0, e: 'Es un contrato entre el licenciante y el licenciatario con términos y condiciones establecidos.', t: {1: 'El código fuente es otra cosa: es el programa en sí, y poder modificarlo es una libertad, no una licencia.', 2: 'Eso describe una licencia de evaluación con clave de activación y límite de tiempo, que no es el contrato de la licencia.', 3: 'El sistema operativo no da permisos de uso de programas: da permiso para instalarlos.'} },
        { p: 'El licenciante es:', o: ['Quien paga y usa el programa a diario', 'Quien cede el uso y la propiedad', 'Quien instala y ejecuta el programa', 'Quien traduce el programa a otro idioma'], r: 1, e: 'Licenciante = autor o titular de los derechos de explotación y distribución.', t: {0: 'Quien paga y usa es el licenciatario.', 2: 'Instalar y ejecutar es tarea de quien usa el programa.', 3: 'Traducir no convierte a nadie en titular de derechos.'} },
        { p: 'El licenciatario es:', o: ['Quien traduce el programa a un idioma que no tenía', 'Quien compra, instala y usa el programa sujeto a la licencia', 'Quien escribió el código del programa y por tanto lo cede', 'Quien registra la marca del programa en el registro oficial'], r: 1, e: 'Licenciatario = el usuario, consumidor, profesional o empresa que utiliza el programa.', t: {0: 'Traducir es posible, pero quien traduce sigue siendo usuario: sigue siendo el licenciatario, no pasa a ser autor.', 2: 'Quien escribió el código es el autor y por tanto el licenciante, no el licenciatario.', 3: 'El registro de marca es otra cosa; el temario lo trata aparte del contrato de licencia.'} },
        { p: '¿Cuáles son las 4 libertades del software libre?', o: ['Uso, estudio, modificación y distribución', 'Uso, venta, modificación y distribución', 'Estudio, copia, ejecución y distribución', 'Uso, compra, traducción y distribución'], r: 0, e: 'Uso, estudio, modificación y distribución.' },
        { p: '¿Qué caracteriza al software propietario o privativo?', o: ['Es el que se compra una vez y se usa para siempre en un equipo', 'Es el que cede su código para que cualquiera pueda modificarlo', 'Es el que limita las freedoms y pertenece a una empresa concreta', 'Es el que se distribuye gratis pero con prueba limitada en el tiempo'], r: 2, e: 'El software propietario limita las libertades y su código pertenece a una empresa u organización.', t: {0: 'Pago único es el modelo de Office 2024, pero un programa propietario también se puede pagar por suscripción.', 1: 'Ceder el código para modificarlo es lo propio del software libre, no del propietario.', 3: 'Gratis con prueba limitada en el tiempo es shareware, que puede ser propietario o no: no lo define.'} },
        { p: 'El copyright es:', o: ['El derecho que tiene el autor sobre su obra y su uso por terceros', 'La obligación que tiene el autor de liberar su código modificado', 'El registro administrative de la marca de un programa de pago', 'La parte del hardware donde se guarda la clave de activación'], r: 0, e: 'Copyright = derecho del autor sobre su modificación, el uso por terceros y el beneficio económico de la distribución.', t: {1: 'Liberar el código modificado es copyleft, que es justo lo contrario del copyright.', 2: 'El registro de una marca es un trámite distinto; el copyright no hace falta registrarlo para existir.', 3: 'El hardware no guarda ninguna de las dos cosas: guarda el programa, no sus derechos.'} },
        { p: 'El copyleft obliga a que, si se modifica o redistribuye el software:', o: ['Pague regalías al autor original', 'Siga siendo software libre', 'Sea abandonado por su autor', 'Exija comprar una licencia nueva'], r: 1, e: 'El producto resultante debe seguir siendo libre: esa es toda la idea del copyleft.', t: {0: 'Las regalías son del copyright, no del copyleft.', 2: 'El copyleft no obliga a abandonar nada.', 3: 'Comprar una licencia nueva es justo lo contrario del copyleft.'} },
        { p: 'El freeware se caracteriza por:', o: ['Ser de pago único pero sin ninguna libertad sobre el código', 'Ser gratis con prueba limitada en el tiempo hasta pagar después', 'Ser gratis, redistribuible, pero sin código fuente y no modificable', 'Ser libre con las cuatro libertad y dejar ver el código entero'], r: 2, e: 'Gratis y redistribuible, sin código fuente: por eso no se puede modificar. Eso es freeware.', t: {0: 'Pago único es de pago, no gratis.', 1: 'Gratis con prueba limitada en el tiempo es la definición del shareware.', 3: 'Las cuatro libertades y el código visible son del software libre, no del freeware. Es la trampa clásica: los dos suenan a gratis.'} },
        { p: 'El shareware se caracteriza por:', o: ['Ser gratis, redistribuible y con el código fuente a la vista', 'Ser libre con las cuatro libertad del software libre', 'Ser de pago único que se instala en un único equipo', 'Ser gratis con límite de tiempo hasta pagar la versión completa'], r: 3, e: 'Se distribuye gratis para evaluacion con limitacion de tiempo hasta disponer de todas las funciones, pagando después.', t: {0: 'Redistribuible y con código fuente a la vista es freeware o software libre; el shareware no da el código.', 1: 'Las cuatro libertades son del software libre.', 2: 'Pago único es el modelo de Office 2024, no del shareware.'} },
        { p: 'V/F: "El freeware se puede modificar porque incluye el código fuente."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: el freeware NO incluye el código fuente, por eso no se puede modificar.' },
        { p: 'V/F: "El copyleft obliga a que el producto resultante de una modificación siga siendo libre."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto, es la definición de copyleft.' },
        { p: 'V/F: "El software libre cumple 5 libertades."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: cumple 4 libertades.' },
        { p: '¿Cuál de estos programas es software propietario según el temario?', o: ['LibreOffice', 'Mozilla Firefox', 'Microsoft Office', 'Ubuntu'], r: 2, e: 'Microsoft Office es propietario; LibreOffice, Firefox y Ubuntu son libres.' },
        { p: 'V/F: "El shareware es software que se distribuye gratis pero con una limitación de tiempo."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto.' },
        { p: 'V/F: "El copyleft es el derecho del autor a obtener beneficios económicos por su distribución."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Eso es el copyright. El copyleft obliga a mantener la libertad.' }
      ],

      emparejar: {
        titulo: 'Concepto ↔ definición',
        pares: [
          ['Licenciante', 'Autor / titular de los derechos'],
          ['Licenciatario', 'Usuario, profesional o empresa'],
          ['Copyright', 'Derecho del autor y beneficios económicos'],
          ['Copyleft', 'El derivado debe seguir siendo libre'],
          ['Freeware', 'Gratis, redistribuible y no modificable'],
          ['Shareware', 'Gratis con límite de tiempo, luego se paga'],
          ['Software libre', '4 libertades'],
          ['Software propietario', 'Código fuente de una empresa']
        ]
      }
    },

    /* ============================================================ */
    {
      id: 'ofimatica',
      num: 3,
      icono: '📊',
      color: '#34d399',
      titulo: 'Aplicaciones y paquetes ofimáticos',
      sub: 'Suites: LibreOffice, Microsoft Office, iWork, Google Workspace y Corel',
      resumen:
        'Conjunto de aplicaciones usadas en empresas u oficinas para funciones y documentos: procesadores de texto, hojas de cálculo, presentaciones, correo electrónico y gestores de bases de datos. Se agrupan en paquetes o suites ofimáticas.',
      contenido: [
        { tipo: 'p', texto:
          'Las aplicaciones ofimáticas son un conjunto de aplicaciones utilizadas en empresas u oficinas para realizar diferentes tipos de funciones y documentos. Entre las más populares están: procesadores de texto, hojas de cálculo, programas de presentaciones, aplicaciones de correo electrónico y gestores de bases de datos.' },

        { tipo: 'callout', tono: 'clave', titulo: 'Los 5 tipos de aplicación que debes saber enumerar', items: [
          'Procesador de textos.',
          'Hoja de cálculo.',
          'Programa de presentaciones.',
          'Aplicación de correo electrónico.',
          'Gestor de bases de datos.'
        ]},

        { tipo: 'p', texto:
          'Normalmente se distribuyen en paquetes o suites ofimáticas, que incluyen varias de estas aplicaciones. Los paquetes ofimáticos más populares son Microsoft Office y LibreOffice.' },

        { tipo: 'ul', titulo: 'Principales suites ofimáticas', items: [
          'OpenOffice / LibreOffice: suite de software libre y gratuita de aplicaciones ofimáticas. LibreOffice es la bifurcación más actualizada y con mayor soporte de la comunidad.',
          'Microsoft Office: paquete ofimático más popular a nivel mundial, desarrollado por Microsoft. Ofrece dos formas principales de adquirirlo: Microsoft 365 (suscripción mensual o anual, incluye las aplicaciones, actualizaciones continuas y almacenamiento en OneDrive) u Office 2024 (pago único, permite usar las aplicaciones incluidas sin suscripción, no incorpora las futuras versiones principales aunque sí recibe actualizaciones de seguridad).',
          'iWork: paquete ofimático de Apple, diseñado para dispositivos macOS e iOS.',
          'Corel WordPerfect Office: suite ofimática desarrollada por Corel, que en su momento fue muy popular en entornos legales y administrativos.',
          'Google Workspace: suite ofimática en la nube de Google.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Microsoft 365 vs Office 2024 (la pregunta 5 del temario)', items: [
          'Microsoft 365 = suscripción mensual/anual, apps siempre actualizadas, actualizaciones continuas, almacenamiento en OneDrive, 5 dispositivos a la vez, almacenamiento online adicional.',
          'Office 2024 = pago único, un solo equipo (PC o Mac), solo actualizaciones de seguridad, sin nuevas características ni versiones futuras, sin almacenamiento online adicional.'
        ]},

        { tipo: 'tabla',
          cols: ['Elemento', 'Office 2024', 'Office 365'],
          rows: [
            ['Administración', 'Pagar un único coste', 'Pagar mensualmente'],
            ['Aplicaciones de Microsoft 365', 'Excel, Word y PowerPoint', 'Excel, Word, PowerPoint, Outlook y OneNote'],
            ['Actualizaciones de características', 'Se incluyen actualizaciones de seguridad, pero no nuevas características', 'Sus aplicaciones estarán siempre mejorando'],
            ['Instalar en más de un equipo (Mac o PC)', 'Las compras de pago único se instalan una vez en un equipo PC o Mac', 'Puede instalar Microsoft 365 Personal, Familia, Premium o Pro en todos los dispositivos e iniciar sesión en cinco a la vez'],
            ['Características avanzadas en tabletas y teléfonos', 'Instale las aplicaciones móviles gratis y obtenga características básicas de edición', 'Aplicaciones móviles gratis y características adicionales al iniciar sesión en las aplicaciones de Microsoft 365'],
            ['Almacenamiento online adicional', 'No se incluye', 'Almacene sus archivos en la nube y acceda a ellos desde cualquier lugar']
          ],
          caption: 'Tabla oficial del temario (pregunta 5). Memorízala entera: seguro que cae.'
        },

        { tipo: 'callout', tono: 'examen', titulo: 'Google Workspace', texto:
          'Es la suite ofimática en la nube de Google. Incluye: Documentos de Google (procesador de textos), Hojas de cálculo de Google, Presentaciones de Google, Formularios, Meet (videoconferencias), Keep (notas), Gmail (correo) y Google Drive (almacenamiento).' },

        { tipo: 'tabla',
          cols: ['Aplicación', 'OpenOffice / LibreOffice', 'Microsoft Office', 'iWork', 'Google Workspace'],
          rows: [
            ['Procesador de textos', 'Writer', 'Word', 'Pages', 'Documentos de Google'],
            ['Hojas de cálculo', 'Calc', 'Excel', 'Numbers', 'Hojas de cálculo de Google'],
            ['Gestor de presentaciones', 'Impress', 'PowerPoint', 'Keynote', 'Presentaciones de Google'],
            ['Gestor de base de datos', 'Base', 'Access', '(no tiene equivalente propio)', '(Google Sheets / Sites)'],
            ['Otros', 'Draw (dibujo), Math (fórmulas)', 'Outlook (correo), Publisher (publicaciones)', '(Keynote / Numbers suite de Apple)', 'Gmail (correo), Google Drive (almacenamiento), Formularios, Meet (videoconferencias), Keep (notas)']
          ],
          caption: 'Comparativa de las cuatro suites. Cifra obligatoria para el examen.'
        },

        { tipo: 'callout', tono: 'truco', titulo: 'Truco de las columnas', texto:
          'Todas las suites empiezan igual: W de Word/Writer, C de Calc/Excel, N de Numbers, I de Impress, P de PowerPoint. Writer-Calc-Impress-Base es la secuencia de LibreOffice; Word-Excel-PowerPoint-Access la de Microsoft Office; Pages-Numbers-Keynote la de iWork.' }
      ],

      flashcards: [
        { q: '¿Qué son las aplicaciones ofimáticas?', a: 'Conjunto de aplicaciones usadas en empresas u oficinas para realizar diferentes tipos de funciones y documentos.' },
        { q: 'Nombra las 5 aplicaciones ofimáticas más populares.', a: 'Procesadores de texto, hojas de cálculo, programas de presentaciones, aplicaciones de correo electrónico y gestores de bases de datos.' },
        { q: '¿Qué es un paquete o suite ofimática?', a: 'Un conjunto que incluye varias aplicaciones ofimáticas (Word, Excel, PowerPoint, etc.).' },
        { q: '¿Cuáles son los dos paquetes ofimáticos más populares?', a: 'Microsoft Office y LibreOffice.' },
        { q: 'LibreOffice: ¿qué es exactamente?', a: 'Una suite de software libre y gratuita de aplicaciones ofimáticas. Es la bifurcación más actualizada y con mayor soporte de la comunidad.' },
        { q: 'Microsoft Office: dos formas de adquirirlo.', a: 'Microsoft 365 (suscripción mensual/anual, con actualizaciones continuas y OneDrive) u Office 2024 (pago único, sin suscripción).' },
        { q: 'Microsoft 365: ¿cada cuánto se paga y qué incluye?', a: 'Suscripción mensual o anual; incluye las aplicaciones, actualizaciones continuas y almacenamiento en OneDrive.' },
        { q: 'Office 2024: ¿qué NO incluye?', a: 'No incorpora las futuras versiones principales de Office, aunque sí recibe actualizaciones de seguridad. Y no incluye almacenamiento online adicional.' },
        { q: '¿Para qué dispositivos está diseñado iWork?', a: 'Para dispositivos macOS e iOS (es el paquete de Apple).' },
        { q: 'Corel WordPerfect Office: ¿en qué áreas fue popular?', a: 'En entornos legales y administrativos.' },
        { q: 'Google Workspace: ¿dónde funciona?', a: 'Es una suite ofimática en la nube de Google.' },
        { q: '¿Qué es Google Meet y Google Keep?', a: 'Meet = videoconferencias. Keep = notas.' },
        { q: 'Aplicaciones de LibreOffice según función.', a: 'Writer (textos), Calc (cálculo), Impress (presentaciones), Base (bases de datos), Draw (dibujo) y Math (fórmulas).' },
        { q: 'Aplicaciones de Microsoft Office según función.', a: 'Word (textos), Excel (cálculo), PowerPoint (presentaciones), Access (bases de datos), Outlook (correo), Publisher (publicaciones).' },
        { q: '¿Qué programa de iWork es el equivalente de PowerPoint?', a: 'Keynote.' },
        { q: 'Microsoft 365, ¿en cuántos dispositivos se puede iniciar sesión a la vez?', a: 'En cinco a la vez.' },
        { q: 'La compra de pago único (Office 2024), ¿en cuántos equipos se puede instalar?', a: 'En uno solo, un equipo PC o Mac.' }
      ],

      quiz: [
        { p: '¿Qué son las aplicaciones ofimáticas?', o: ['Un único programa que hace a la vez texto, cálculo y correo', 'Un conjunto de programas para crear documentos y tareas de oficina', 'Un programa del sistema operativo que gestiona el disco duro', 'Un tipo de licencia que permite usar programas de pago'], r: 1, e: 'Un conjunto de aplicaciones usadas en empresas u oficinas para realizar funciones y documentos.', t: {0: 'Un único programa que hace todo no es una aplicación ofimática, es un sistema operativo.', 2: 'Gestionar el disco duro es trabajo del sistema operativo.', 3: 'Eso es lo que define una licencia, no una aplicación.'} },
        { p: 'El temario enumera cinco familias de aplicaciones ofimáticas. ¿Cuáles son?', o: ['Texto, cálculo, presentaciones, correo y bases de datos', 'Vídeo, audio, streaming y edición de imagen', 'Navegador, cortafuegos, antivirus, ftp y correo', 'Kernel, shell, compilador y sistema de archivos'], r: 0, e: 'Procesadores de texto, hojas de cálculo, presentaciones, correo electrónico y gestores de bases de datos.', t: {1: 'Las de edición audiovisual no salen en la lista del temario.', 2: 'Eso es catálogo de sistemas, no de ofimática.', 3: 'Eso es catálogo de sistemas operativos, no de ofimática.'} },
        { p: 'Los dos paquetes ofimáticos más populares del temario son:', o: ['Office y LibreOffice', 'Windows y Ubuntu', 'GIMP y VLC', 'Chrome y Firefox'], r: 0, e: 'Microsoft Office, el más popular del mundo, y LibreOffice como alternativa libre.', t: {1: 'Windows y Ubuntu son sistemas operativos.', 2: 'GIMP y VLC son imagen y vídeo.', 3: 'Chrome y Firefox son navegadores.'} },
        { p: 'En LibreOffice, el equivalente de Word es:', o: ['Calc', 'Writer', 'Impress', 'Base'], r: 1, e: 'Writer = procesador de textos.' },
        { p: 'En LibreOffice, el equivalente de Excel es:', o: ['Writer', 'Calc', 'Base', 'Draw'], r: 1, e: 'Calc = hoja de cálculo.' },
        { p: 'En LibreOffice, el equivalente de PowerPoint es:', o: ['Impress', 'Base', 'Math', 'Draw'], r: 0, e: 'Impress = presentaciones.' },
        { p: 'En Microsoft Office, el gestor de bases de datos es:', o: ['Excel', 'Word', 'Access', 'Outlook'], r: 2, e: 'Access = bases de datos.' },
        { p: 'En Google Workspace, el procesador de textos es:', o: ['Docs', 'Sheets', 'Slides', 'Forms'], r: 0, e: 'Documentos de Google = procesador de textos.' },
        { p: 'Google Workspace: ¿qué es Gmail?', o: ['Un procesador de textos', 'El servicio de correo electrónico', 'Un gestor de bases de datos', 'Un programa de presentaciones'], r: 1, e: 'Gmail = correo.' },
        { p: 'Google Workspace: ¿qué es Google Drive?', o: ['Almacenamiento', 'Videoconferencias', 'Notas', 'Hojas de cálculo'], r: 0, e: 'Google Drive = almacenamiento en la nube.' },
        { p: 'iWork está diseñado para:', o: ['Windows y Linux', 'macOS e iOS', 'Android', 'ChromeOS'], r: 1, e: 'Es el paquete de Apple para macOS e iOS.' },
        { p: 'LibreOffice es:', o: ['Un antivirus que analiza los documentos por la red', 'Un gestor de correo que reemplaza a Outlook', 'Una suite libre y gratuita, la más actualizada que hay', 'Un programa propietario que se compra por suscripción'], r: 2, e: 'Suite libre y gratuita; es la bifurcación más actualizada y con más soporte de comunidad.', t: {0: 'Un antivirus no crea documentos: los analiza.', 1: 'LibreOffice no sustituye a Outlook; el que lleva correo es Thunderbird.', 3: 'Propietario y por suscripción es Microsoft 365.'} },
        { p: 'Microsoft Office es el paquete ofimático', o: ['El menos popular del mundo', 'El más popular del mundo', 'Solo disponible para Linux', 'Gratuito y de código abierto'], r: 1, e: 'El paquete ofimático más popular del mundo, según el temario.', t: {0: 'El temario dice lo contrario de forma expresa.', 2: 'Office no es exclusivo de Linux.', 3: 'Office es propietario y de pago.'} },
        { p: 'Corel WordPerfect Office fue muy popular en:', o: ['Entornos legales y administrativos', 'Juegos y diseño 3D', 'Servidores web', 'Hospitales'], r: 0, e: 'Entornos legales y administrativos.' },
        { p: 'Al contratar Microsoft 365 se obtiene:', o: ['Las aplicaciones, actualizaciones continuas y OneDrive', 'Un único equipo, con actualizaciones continuas y OneDrive', 'Solo actualizaciones de seguridad, sin aplicaciones nuevas', 'Las aplicaciones y ya está, sin almacenamiento en la nube'], r: 0, e: 'Microsoft 365 incluye aplicaciones, actualizaciones continuas y almacenamiento en OneDrive.', t: {1: 'Es la descripción de Office 2024, no la de Microsoft 365.', 2: 'Solo actualizaciones de seguridad es lo que da la compra de pago único (Office 2024).', 3: 'OneDrive es parte del paquete: sin nube no sería Microsoft 365.'} },
        { p: 'Con Office 2024, que es de pago único, se recibe', o: ['Todas las versiones futuras de Office', 'Solo seguridad, no características nuevas', 'Cinco sesiones simultáneas en la nube', 'Almacenamiento online adicional en OneDrive'], r: 1, e: 'Actualizaciones de seguridad, pero no nuevas características. Lo de las sesiones simultáneas y la nube es de Microsoft 365.', t: {0: 'El pago único no da acceso a versiones futuras.', 2: 'Las cinco sesiones simultáneas son de Microsoft 365.', 3: 'El almacenamiento online es de Microsoft 365, no del pago único.'} },
        { p: '¿Cuántos dispositivos pueden usar la misma cuenta de Microsoft 365 a la vez?', o: ['Uno', 'Tres', 'Cinco', 'Diez'], r: 2, e: 'Iniciar sesión en cinco dispositivos al mismo tiempo.' },
        { p: 'El almacenamiento online adicional está incluido en:', o: ['Office 2024', 'Microsoft 365', 'Ninguno de los dos', 'Solo en LibreOffice'], r: 1, e: 'Solo en Microsoft 365.' },
        { p: 'Draw y Math son aplicaciones de:', o: ['Microsoft Office', 'LibreOffice', 'iWork', 'Google Workspace'], r: 1, e: 'LibreOffice: Draw (dibujo) y Math (fórmulas).' },
        { p: 'Publisher (publicaciones) es de:', o: ['LibreOffice', 'Microsoft Office', 'iWork', 'Google Workspace'], r: 1, e: 'Microsoft Office.' },
        { p: 'V/F: "Google Workspace es una suite ofimática en la nube de Google."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto.' },
        { p: 'V/F: "LibreOffice es software propietario."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: es libre y gratuito.' },
        { p: 'V/F: "Con Office 2024 no se reciben actualizaciones de seguridad."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: sí recibe actualizaciones de seguridad (lo que no recibe son características nuevas).' },
        { p: 'V/F: "Corel WordPerfect Office fue la suite más popular en entornos legales y administrativos."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto, según el temario.' }
      ],

      emparejar: {
        titulo: 'Aplicación ↔ suite',
        pares: [
          ['Writer', 'LibreOffice — procesador de textos'],
          ['Calc', 'LibreOffice — hoja de cálculo'],
          ['Impress', 'LibreOffice — presentaciones'],
          ['Base', 'LibreOffice — bases de datos'],
          ['Word', 'Microsoft Office — procesador de textos'],
          ['Excel', 'Microsoft Office — hoja de cálculo'],
          ['PowerPoint', 'Microsoft Office — presentaciones'],
          ['Access', 'Microsoft Office — bases de datos'],
          ['Outlook', 'Microsoft Office — correo'],
          ['Pages', 'iWork — procesador de textos'],
          ['Numbers', 'iWork — hoja de cálculo'],
          ['Keynote', 'iWork — presentaciones'],
          ['Documentos de Google', 'Google Workspace — textos'],
          ['Gmail', 'Google Workspace — correo'],
          ['Meet', 'Google Workspace — videoconferencias'],
          ['Keep', 'Google Workspace — notas']
        ]
      }
    },

    /* ============================================================ */
    {
      id: 'implantacion',
      num: 4,
      icono: '🧩',
      color: '#fb923c',
      titulo: 'Implantación de una aplicación',
      sub: 'Análisis · Planificación · Instalación · Pruebas · Mantenimiento · Documentación',
      resumen:
        'Las fases de una implantación son análisis de necesidades, planificación, instalación y configuración, y pruebas. Después vienen las tareas de mantenimiento y seguridad (con los backups) y la documentación y ayuda al usuario.',
      contenido: [
        { tipo: 'p', texto:
          'En la fase de implantación de una aplicación tendremos en cuenta los siguientes aspectos.' },

        { tipo: 'ol', titulo: '1. Análisis de necesidades', items: [
          'Presupuesto.',
          'Tamaño de la empresa: número de departamentos, tipos de puestos de trabajo, instalaciones…',
          'Lógico de negocio: cómo funciona la empresa.',
          'Requisitos de seguridad.',
          'Requisitos hardware.',
          'Formación de futuros usuarios.',
          'Futuras necesidades de la empresa.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Chant para las 7 necesidades', texto:
          '"Dinero, Tamaño, Lógica, Seguridad, Hardware, Formación, Futuro" → DTL-SHFF. Si te sabes el mantra, te sabes el apartado entero. El orden importa: es el que figura en el temario.' },

        { tipo: 'ul', titulo: '2. Planificación de la implantación', items: [
          'Pasos.',
          'Tiempos.',
          'Recursos.'
        ]},

        { tipo: 'ul', titulo: '3. Instalación y configuración', items: [
          'Se instala la aplicación y se configura según el análisis previo.'
        ]},

        { tipo: 'ul', titulo: '4. Pruebas', items: [
          'Una vez instalada la aplicación se diseñará un plan de pruebas para comprobar que la aplicación responde a los requisitos iniciales.',
          'Se analizarán tres factores: exactitud, eficacia y adaptación.',
          'Este plan de pruebas tiene todavía más importancia en los desarrollos de software a medida.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Las 3 esencias de las pruebas', texto:
          'Exactitud · Eficacia · Adaptación → "EEA". Además: en software a medida el plan de pruebas es aún más importante.' },

        { tipo: 'ul', titulo: '5. Tareas de mantenimiento y seguridad', items: [
          'Junto con la instalación y actualización de las aplicaciones es necesario realizar tareas de mantenimiento periódico.',
          'Tienen que ver con el rendimiento y la seguridad.',
          'Objetivo: mantener prestaciones elevadas en el funcionamiento del ordenador y evitar la pérdida de información y los ataques de seguridad al equipo.'
        ]},

        { tipo: 'callout', tono: 'clave', titulo: 'Respaldo de la información (backup)', items: [
          'Total: copia entera de todo.',
          'Incremental: solo se copian los ficheros creados o modificados después de la última copia.',
          'Selectiva: solo algunos archivos.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Backup en 3 letras', texto:
          'T-I-S: "Tódo, Incremental, Seleccionado". Total copia todo; Incremental copia lo nuevo; Selectiva copia lo elegido.' },

        { tipo: 'ul', titulo: '6. Documentación y ayuda al usuario', items: [
          'Desarrollar manuales de usuario donde se describa el funcionamiento de la aplicación y la forma de resolver incidencias.',
          'Establecer procedimientos de soporte al usuario. Ejemplo: un call center de soporte.'
        ]},

        { tipo: 'callout', tono: 'examen', titulo: 'Resumen de fases en orden', texto:
          'Análisis → Planificación → Instalación y configuración → Pruebas → Mantenimiento y seguridad → Documentación y soporte. La pregunta clásica es: "¿qué se hace en la fase de planificación?" → Pasos, tiempos y recursos.' }
      ],

      flashcards: [
        { q: 'Nombra las fases de la implantación de una aplicación.', a: 'Análisis de necesidades, planificación, instalación y configuración, pruebas, mantenimiento y seguridad, y documentación/ayuda al usuario.' },
        { q: '¿En qué consiste el análisis de necesidades?', a: 'En detectar las necesidades de la empresa: presupuesto, tamaño, lógico de negocio, seguridad, hardware, formación y futuras necesidades.' },
        { q: 'Las 7 necesidades del análisis (en orden).', a: 'Presupuesto, tamaño de la empresa, lógico de negocio, requisitos de seguridad, requisitos hardware, formación de futuros usuarios y futuras necesidades.' },
        { q: '¿Qué se planifica en la fase de planificación?', a: 'Pasos, tiempos y recursos.' },
        { q: '¿Para qué sirve el plan de pruebas?', a: 'Para comprobar que la aplicación responde a los requisitos iniciales.' },
        { q: '¿Qué tres factores se analizan en las pruebas?', a: 'Exactitud, eficacia y adaptación.' },
        { q: '¿Cuándo es más importante el plan de pruebas?', a: 'En los desarrollos de software a medida.' },
        { q: '¿Cuál es el objetivo del mantenimiento?', a: 'Mantener prestaciones elevadas en el funcionamiento del ordenador y evitar la pérdida de información y los ataques de seguridad.' },
        { q: '¿Qué es un backup incremental?', a: 'Copia en la que solo se copian los ficheros creados o modificados después de la última copia.' },
        { q: '¿Qué es un backup selectivo?', a: 'Copia de solo algunos archivos.' },
        { q: '¿Qué es un backup total?', a: 'Copia completa de toda la información.' },
        { q: '¿Qué debe incluir un manual de usuario?', a: 'El funcionamiento de la aplicación y la forma de resolver incidencias.' },
        { q: 'Ejemplo de procedimiento de soporte al usuario.', a: 'Un call center de soporte.' },
        { q: '¿Qué dos aspectos cubre el mantenimiento?', a: 'El rendimiento y la seguridad.' },
        { q: '¿Por qué se recoge el "lógico de negocio" en el análisis?', a: 'Porque define cómo funciona la empresa, y de él dependen los requisitos reales.' }
      ],

      quiz: [
        { p: 'Las fases de la implantación de una aplicación, en orden, son:', o: ['Análisis, planificación, instalación, pruebas, mantenimiento y documentación', 'Solo análisis e instalación, que es lo mínimo imprescindible', 'Solo pruebas y mantenimiento, que es lo que se hace al final', 'Análisis, pruebas y venta, que es lo que sigue al análisis'], r: 0, e: 'Análisis, planificación, instalación y configuración, pruebas, mantenimiento y documentación.', t: {1: 'Recortar la lista es la trampa: el temario pide las fases enteras.', 2: 'El mantenimiento va al final, pero no es lo único que hay.', 3: 'Venta no aparece en las fases de implantación del temario.'} },
        { p: 'En la fase de planificación se define:', o: ['El precio del software', 'Pasos, tiempos y recursos', 'El número de usuarios', 'El tipo de monitor'], r: 1, e: 'Pasos, tiempos y recursos.' },
        { p: '¿Cuáles son los tres factores que se analizan en el plan de pruebas?', o: ['Precio, calidad y cantidad', 'Exactitud, eficacia y adaptación', 'Velocidad, memoria y disco', 'Diseño, colour y letra'], r: 1, e: 'Exactitud, eficacia y adaptación.' },
        { p: 'El plan de pruebas tiene más importancia en:', o: ['Los desarrollos de software a medida', 'La compra de un PC nuevo', 'La instalación de un antivirus', 'La impresión de un informe'], r: 0, e: 'En software a medida.' },
        { p: 'Un backup incremental copia:', o: ['Solo algunos archivos, elegidos a mano antes de copiar', 'Solo los creados o modificados desde la última copia', 'Todos los archivos, como hace la copia completa', 'Nada: solo guarda la lista de archivos de la copia anterior'], r: 1, e: 'Incremental = solo lo creado o modificado después de la última copia.', t: {0: 'Eso es la copia selectiva.', 2: 'Copiar todo es la copia completa, no la incremental.', 3: 'Una copia que no copia nada no es una copia.'} },
        { p: 'Un backup selectivo copia:', o: ['Todo el disco', 'Solo algunos archivos', 'Solo lo modificado', 'Nada'], r: 1, e: 'Solo algunos archivos.' },
        { p: '¿Cuál NO es una necesidad del análisis de implantación?', o: ['Presupuesto del proyecto', 'Lógica de negocio del proceso', 'Color de las paredes', 'Requisitos hardware del equipo'], r: 2, e: 'El color de las paredes no es una necesidad del análisis; el presupuesto, la lógica de negocio y el hardware sí.', t: {0: 'El presupuesto sí es una necesidad del análisis.', 1: 'La lógica de negocio es el objeto principal del análisis.', 3: 'Los requisitos hardware entran en el análisis.'} },
        { p: 'El objetivo de las tareas de mantenimiento es:', o: ['Que el ordenador vaya más lento para que duren las piezas', 'Mantener prestaciones altas y evitar pérdida de datos y ataques', 'Cambiar de suite ofimática para que todo siga funcionando', 'Eliminar las copias de seguridad para liberar espacio en disco'], r: 1, e: 'Prestaciones elevadas y evitar pérdida de información y ataques de seguridad.', t: {0: 'El mantenimiento no busca que nada vaya lento.', 2: 'Cambiar de suite es una implantación nueva, no mantenimiento.', 3: 'Borrar las copias de seguridad es justo lo contrario del mantenimiento.'} },
        { p: 'Un manual de usuario debe describir:', o: ['El presupuesto de la aplicación y quién lo paga cada mes', 'El hardware del servidor donde va instalada la aplicación', 'La licencia y los términos que hay que aceptar al instalar', 'El funcionamiento y cómo resolver las incidencias que salgan'], r: 3, e: 'El funcionamiento de la aplicación y cómo resolver incidencias.', t: {0: 'El presupuesto no lo describe ningún manual de usuario.', 1: 'El hardware del servidor es documentación técnica, no el manual de uso.', 2: 'La licencia se explica en el EULA, no en el manual de uso.'} },
        { p: 'Un ejemplo de procedimiento de soporte al usuario es:', o: ['Un call center de soporte', 'Una impresora de red', 'Un antivirus instalado', 'Un programa de diseño gráfico'], r: 0, e: 'Un centro de llamadas de soporte es el ejemplo típico de procedimiento de soporte al usuario.', t: {1: 'Una impresora es un recurso, no un procedimiento de soporte.', 2: 'Un antivirus es un programa, no un procedimiento de soporte.', 3: 'Un programa de diseño no da soporte a nadie.'} },
        { p: 'El "lógico de negocio" del análisis de necesidades es:', o: ['Cómo funciona la empresa', 'El número de empleados', 'La marca del monitor', 'El tipo de licencia'], r: 0, e: 'Cómo funciona la empresa.' },
        { p: 'V/F: "Las tareas de mantenimiento tienen que ver con el rendimiento y la seguridad."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto.' },
        { p: 'V/F: "El backup incremental copia todos los archivos del disco cada vez que se hace."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: eso es el backup total.' },
        { p: 'V/F: "El backup total copia solo algunos archivos."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: el selectivo copia solo algunos; el total copia todo.' },
        { p: 'V/F: "Entre las necesidades del análisis están los requisitos de seguridad y la formación de futuros usuarios."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Ambos aparecen en la lista.' }
      ],

      emparejar: {
        titulo: 'Fase ↔ contenido',
        pares: [
          ['Análisis de necesidades', 'Presupuesto, tamaño, lógico, seguridad, hardware, formación, futuro'],
          ['Planificación', 'Pasos, tiempos y recursos'],
          ['Pruebas', 'Exactitud, eficacia y adaptación'],
          ['Mantenimiento', 'Rendimiento y seguridad'],
          ['Backup incremental', 'Solo ficheros nuevos o modificados'],
          ['Backup selectivo', 'Solo algunos archivos'],
          ['Backup total', 'Copia completa'],
          ['Documentación', 'Manuales de usuario y soporte']
        ]
      }
    },

    /* ============================================================ */
    {
      id: 'instalacion',
      num: 5,
      icono: '💾',
      color: '#f472b6',
      titulo: 'Instalación de una aplicación',
      sub: 'Requisitos hardware · mínimos y recomendados · opciones de instalación',
      resumen:
        'Antes de instalar hay que comprobar los requisitos hardware (CPU, RAM, HDD, tarjeta gráfica) y distinguir entre requisitos mínimos y recomendados. Después: opciones de instalación (completa o por componentes) y formas de lanzar el instalador.',
      contenido: [
        { tipo: 'p', texto:
          'Los requisitos hardware de una aplicación son las características que debe tener el hardware de una computadora para poder soportar y/o ejecutar una aplicación o un dispositivo específicos.' },

        { tipo: 'ul', titulo: 'Componentes que se tienen en cuenta', items: [
          'CPU (procesador).',
          'Memoria RAM.',
          'HDD (disco duro).',
          'Tarjeta gráfica.'
        ]},

        { tipo: 'callout', tono: 'clave', titulo: 'Mínimos vs recomendados', items: [
          'Mínimos: aquellos que hacen que el programa pueda funcionar en el PC mínimamente.',
          'Recomendados: los necesarios para que vaya fluido.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Truco de 4 letras', texto:
          'CPU · RAM · HDD · GPU. En clase: "mi PC tiene CPU, RAM, disco y tarjeta". Si te piden la lista, es esa, en ese orden.' },

        { tipo: 'ul', titulo: 'Lanzamiento de la instalación', items: [
          'Lanzamos la instalación.'
        ]},

        { tipo: 'ul', titulo: 'Opciones de instalación', items: [
          'Instalación completa.',
          'Selección de qué componentes quieres instalar.'
        ]},

        { tipo: 'ul', titulo: 'Formas de lanzar la instalación', items: [
          'Desde un archivo descargado (APK o EXE).',
          'Desde un repositorio de aplicaciones: Tienda de Windows o Play Store.'
        ]},

        { tipo: 'callout', tono: 'examen', titulo: 'Las dos formas de instalar', texto:
          'Archivo (APK o EXE) o repositorio (Tienda de Windows / Play Store). Si la pregunta es "¿qué opciones de instalación hay?", la respuesta es: completa o seleccionar componentes.' }
      ],

      flashcards: [
        { q: '¿Qué son los requisitos hardware de una aplicación?', a: 'Las características que debe tener el hardware de una computadora para soportar o ejecutar esa aplicación o dispositivo.' },
        { q: 'Los 4 componentes que se comprueban.', a: 'CPU, memoria RAM, HDD (disco duro) y tarjeta gráfica.' },
        { q: '¿Qué son los requisitos mínimos?', a: 'Los que permiten que el programa funcione en el PC mínimamente.' },
        { q: '¿Qué son los requisitos recomendados?', a: 'Los necesarios para que el programa vaya fluido.' },
        { q: '¿Cuáles son las dos opciones de instalación?', a: 'Instalación completa o selección de qué componentes quieres instalar.' },
        { q: '¿De qué dos formas se puede lanzar una instalación?', a: 'Desde un archivo descargado (APK o EXE) o desde un repositorio de aplicaciones (Tienda de Windows o Play Store).' }
      ],

      quiz: [
        { p: 'Los requisitos hardware de una aplicación son:', o: ['El precio del programa y lo que cuesta cada licencia', 'El manual de usuario que viene incluido en el paquete', 'Lo que hay que pagar por la licencia cada mes o cada año', 'Las características que el hardware necesita para soportarla'], r: 3, e: 'Las características que debe tener el hardware para soportar o ejecutar la aplicación: CPU, RAM, HDD y tarjeta gráfica.', t: {0: 'El precio no es un requisito hardware.', 1: 'El manual es documentación, no un requisito.', 2: 'La licencia es un requisito legal, no hardware.'} },
        { p: 'Como requisitos hardware se consideran, al menos,', o: ['CPU, RAM, disco y tarjeta gráfica', 'Teclado, ratón, monitor y altavoces', 'Licencia, soporte y garantía comercial', 'Silla, mesa y papelera del puesto'], r: 0, e: 'CPU, RAM, HDD y tarjeta gráfica. Los mínimos y los recomendados.', t: {1: 'Teclado y ratón no son los requisitos que se comparan con la CPU y la RAM.', 2: 'Eso es garantía comercial, no hardware.', 3: 'Eso es mobiliario, no hardware del equipo.'} },
        { p: 'Los requisitos recomendados sirven para que el programa:', o: ['Funcione mínimamente', 'Vaya fluido', 'Sea más barato', 'Ocupe menos espacio'], r: 1, e: 'Los mínimos = funcionar; los recomendados = ir fluido.' },
        { p: '¿Cuáles son las dos opciones de instalación?', o: ['Completa o seleccionar componentes', 'Rápida o lenta', 'Local o remota', 'Con o sin internet'], r: 0, e: 'Completa o por componentes.' },
        { p: 'Una instalación se puede lanzar desde:', o: ['Solo un archivo descargado, porque el DVD ya no se usa', 'Un archivo descargado o un repositorio de aplicaciones', 'Solo la línea de comandos, porque es la forma más rápida', 'Un disco DVD, porque es el único soporte válido'], r: 1, e: 'Desde un archivo descargado (APK o EXE) o desde un repositorio: Tienda de Windows o Play Store.', t: {0: 'El temario también admite el repositorio: no es solo el archivo.', 2: 'La línea de comandos no aparece como forma de lanzar la instalación.', 3: 'El DVD no aparece en el temario como forma válida.'} },
        { p: 'Un APK es:', o: ['Un archivo de instalación de Android', 'Un tipo de licencia de pago mensual', 'Un tipo de procesador de dos núcleos', 'Un tipo de cable de red troncal'], r: 0, e: 'Un archivo de instalación de Android. Un APK es a Android lo que un EXE es a Windows.', t: {1: 'Una licencia es un contrato, no un archivo de instalación.', 2: 'El procesador es la CPU, no el APK.', 3: 'Un cable de red no instala nada.'} },
        { p: 'V/F: "Los requisitos mínimos son los necesarios para que el programa vaya fluido."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: los mínimos permiten funcionar mínimamente; los recomendados son los que lo hacen ir fluido.' },
        { p: 'V/F: "La Tienda de Windows y la Play Store son repositorios de aplicaciones."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto.' }
      ],

      emparejar: {
        titulo: 'Componente ↔ significado',
        pares: [
          ['CPU', 'Procesador'],
          ['RAM', 'Memoria'],
          ['HDD', 'Disco duro'],
          ['GPU / tarjeta gráfica', 'Procesamiento gráfico'],
          ['Mínimos', 'Funciona mínimamente'],
          ['Recomendados', 'Va fluido']
        ]
      }
    },

    /* ============================================================ */
    {
      id: 'office',
      num: 6,
      icono: '🪟',
      color: '#f87171',
      titulo: 'Requisitos de Microsoft Office',
      sub: 'Office 2019 · Office 2024 · Office 365 · LibreOffice 26.8',
      resumen:
        'Tabla de requisitos de instalación de Office 2019 y 2024, especificaciones detalladas y la comparación Office 2024 vs Office 365. También los requisitos de la última versión estable de LibreOffice.',
      contenido: [
        { tipo: 'tabla',
          cols: ['Requisito', 'Office 2019', 'Office 2024'],
          rows: [
            ['CPU', '1,6 GHz', '1,6 GHz'],
            ['RAM', '4 GB de RAM', '4 GB de RAM'],
            ['Disco duro', '4 GB libres', '4 GB libres'],
            ['Gráfica', 'DirectX 9 o superior', 'DirectX 10'],
            ['Sistema operativo', 'Win 10 o superior, Mac', 'Win 10, Mac']
          ],
          caption: 'Tabla de la pregunta 6 del temario: requisitos de instalación de Office 2019 y 2024. Cifra literal del examen.'
        },

        { tipo: 'callout', tono: 'examen', titulo: 'Aviso: el temario se contradice con la hoja real de Microsoft', texto:
          'En la tabla del temario, Office 2019 pide DirectX 9 y Office 2024 pide DirectX 10. En la página de especificaciones equivalentes el temario dice "DirectX 9 o posterior con WDDM 2.0" para ambos. Si el examen se basó en la tabla, manda la tabla (DirectX 10 para 2024). Escribe siempre "DirectX 9 o superior (con WDDM 2.0)" y, si insisten, la tabla.' },

        { tipo: 'ul', titulo: 'Especificaciones de Microsoft Office 2019', items: [
          'Procesador de 2 núcleos a 1,6 GHz o superior.',
          '4 GB de RAM.',
          '4 GB de espacio disponible en disco.',
          'Resolución de pantalla de 1280 x 768.',
          'La aceleración gráfica por hardware requiere DirectX 9 o posterior, con WDDM 2.0 o superior para Windows 10.',
          'Funcionalidad de Internet.',
          'Cuenta Microsoft.'
        ]},

        { tipo: 'ul', titulo: 'Especificaciones de Microsoft Office 2024', items: [
          'Sistema operativo Windows 10 (versión 1809 o posterior) o Windows 11.',
          'Procesador de doble núcleo a 1,6 GHz o superior.',
          'RAM: 4 GB para 32 bits y 8 GB para 64 bits.',
          'Al menos 4 GB de espacio disponible en disco.',
          'Resolución de pantalla de 1280 x 768 píxeles o superior.',
          'Gráficos DirectX 9 o posterior con WDDM 2.0 o superior para Windows 10 y Windows 11.',
          'Conexión a Internet: necesaria para algunas funciones, actualizaciones y validar el software. Se recomienda banda ancha.',
          'Cuenta Microsoft: necesaria para algunas funciones y para acceder a los servicios en línea.'
        ]},

        { tipo: 'callout', tono: 'clave', titulo: 'Los números que más se caen', items: [
          '1,6 GHz — procesador (2 núcleos en 2019 y 2024).',
          '4 GB de RAM (8 GB para Office 2024 en 64 bits).',
          '4 GB libres de disco.',
          '1280 x 768 de resolución mínima.',
          'DirectX 9 o superior (DirectX 10 en la tabla del temario para 2024).',
          'Windows 10 versión 1809 o posterior, o Windows 11.'
        ]},

        { tipo: 'ul', titulo: 'Office 365 frente a Office 2024 (pregunta 5 del temario)', items: [
          'Administración: pagar un único coste (2024) frente a pagar mensualmente (365).',
          'Aplicaciones: Excel, Word y PowerPoint (2024) frente a Excel, Word, PowerPoint, Outlook y OneNote (365).',
          'Actualizaciones: en 2024 solo actualizaciones de seguridad y no nuevas características; en 365 las aplicaciones siempre están mejorando.',
          'Equipos: 2024 se instala una vez en un equipo PC o Mac; 365 se puede instalar en todos los dispositivos e iniciar sesión en cinco a la vez.',
          'Tabletas y teléfonos: 2024 da características básicas de edición; 365 da características adicionales al iniciar sesión.',
          'Almacenamiento online adicional: 2024 no lo incluye; 365 permite almacenar en la nube y acceder desde cualquier lugar.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Office 2024 = pago único y*\u00a0*fijo', texto:
          'Regla mnemotécnica: "2024 se paga UNA vez y se queda QUIETO". 365 se paga cada mes y se actualiza SIEMPRE. Al revés de lo que parece: el pago único es el más barato a corto plazo, pero el más caro a largo.' },

        { tipo: 'p', texto:
          'En cuanto a LibreOffice, la última versión estable es la 26.8.0. Para instalarla necesitas un ordenador con Windows 10/11, macOS 11 o superior o una versión compatible de Linux. También hace falta tener al menos 256 MB de RAM y espacio suficiente en disco, aunque se recomienda tener algo más. En general no necesita muchos recursos y funciona en la mayoría de ordenadores actuales.' },

        { tipo: 'callout', tono: 'clave', titulo: 'LibreOffice: números', items: [
          'Versión estable (según el temario): 26.8.0.',
          'Sistemas: Windows 10/11, macOS 11 o superior, Linux compatible.',
          'Memoria mínima: 256 MB de RAM.',
          'Disco: espacio suficiente (se recomienda algo más).'
        ]}
      ],

      flashcards: [
        { q: 'Requisitos de CPU de Office 2019 y 2024.', a: '1,6 GHz. En las especificaciones detalladas, procesador de 2 núcleos a 1,6 GHz o superior.' },
        { q: '¿Cuánta RAM pide Office 2019?', a: '4 GB de RAM.' },
        { q: '¿Cuánta RAM pide Office 2024?', a: '4 GB para 32 bits y 8 GB para 64 bits (en la tabla del temario, 4 GB de RAM).' },
        { q: '¿Cuánto disco libre necesitan los dos?', a: '4 GB libres.' },
        { q: '¿Qué resolución de pantalla mínima exigen?', a: '1280 x 768 píxeles.' },
        { q: '¿Qué nivel de DirectX requiere Office 2019?', a: 'DirectX 9 o posterior, con WDDM 2.0 o superior para Windows 10.' },
        { q: '¿Qué nivel de DirectX pone en la tabla del temario para Office 2024?', a: 'DirectX 10 (la tabla del temario) / DirectX 9 o posterior en las especificaciones.' },
        { q: '¿Qué sistema operativo necesita Office 2024?', a: 'Windows 10 (versión 1809 o posterior) o Windows 11.' },
        { q: '¿Qué dos cosas más necesita Office además del hardware?', a: 'Conexión a Internet (se recomienda banda ancha) y una cuenta Microsoft.' },
        { q: 'Oficina 2024 frente a Office 2024: administración.', a: 'Office 2024 se paga una sola vez; Office 365 se paga mensualmente.' },
        { q: '¿Qué aplicaciones trae 365 que no trae 2024?', a: 'Outlook y OneNote (además de Excel, Word y PowerPoint).' },
        { q: '¿En cuántos equipos a la vez puedes entrar con Microsoft 365?', a: 'En cinco a la vez.' },
        { q: '¿En cuántos equipos instalas una compra de pago único?', a: 'En uno: un único equipo PC o Mac.' },
        { q: 'Última versión estable de LibreOffice según el temario.', a: 'La 26.8.0.' },
        { q: 'Requisitos mínimos de memoria de LibreOffice.', a: 'Al menos 256 MB de RAM y espacio suficiente en disco.' },
        { q: '¿En qué sistemas funciona LibreOffice 26.8?', a: 'Windows 10/11, macOS 11 o superior o una versión compatible de Linux.' },
        { q: 'Almacenamiento online adicional: ¿en cuál de los dos está incluido?', a: 'Solo en Microsoft 365.' }
      ],

      quiz: [
        { p: '¿Qué procesador exige Office 2019 según la tabla del temario?', o: ['1,6 GHz', '2,4 GHz', '3 GHz', '800 MHz'], r: 0, e: '1,6 GHz.' },
        { p: '¿Cuánta RAM exige Office 2019?', o: ['2 GB', '4 GB', '8 GB', '16 GB'], r: 1, e: '4 GB de RAM.' },
        { p: '¿Cuánto espacio de disco necesitan Office 2019 y 2024?', o: ['2 GB libres', '4 GB libres', '8 GB libres', '20 GB libres'], r: 1, e: '4 GB libres en ambos.' },
        { p: 'La resolución de pantalla mínima es:', o: ['1024 x 768', '1280 x 768', '1920 x 1080', '800 x 600'], r: 1, e: '1280 x 768 píxeles o superior.' },
        { p: 'Según la tabla del temario, Office 2024 requiere gráfica:', o: ['DirectX 9 o superior', 'DirectX 10', 'DirectX 12', 'OpenGL 4'], r: 1, e: 'DirectX 10 en la tabla del temario.' },
        { p: '¿Qué sistema operativo necesita Office 2024?', o: ['Windows 10 u 11', 'Windows 7 u 8', 'Windows XP', 'Windows 3.1'], r: 0, e: 'Windows 10 versión 1809 o posterior, o Windows 11.', t: {1: 'Windows 7 y 8 ya quedaron atrás: el mínimo es Windows 10 en su versión 1809.', 2: 'Windows XP es anterior a Office 2016.', 3: 'Windows 3.1 es de 1992.'} },
        { p: 'Para Office 2024 en un equipo de 64 bits se recomiendan:', o: ['4 GB de RAM', '8 GB de RAM', '16 GB de RAM', '2 GB de RAM'], r: 1, e: '4 GB para 32 bits y 8 GB para 64 bits.' },
        { p: 'La aceleración gráfica de Office 2019 requiere:', o: ['DirectX 9 o posterior con WDDM 2.0 o superior', 'DirectX 12 con WDDM 4.0 o superior y tarjeta de 2 GB', 'Solo una tarjeta gráfica con 2 GB de memoria de vídeo', 'Nada en especial, si la CPU es de doble núcleo'], r: 0, e: 'DirectX 9 o posterior, con WDDM 2.0 o superior para Windows 10.', t: {1: 'DirectX 12 y WDDM 4.0 no aparecen en el temario.', 2: 'Los 2 GB de tarjeta no son ningún requisito del temario.', 3: 'Sí que requiere algo: la aceleración gráfica por hardware.'} },
        { p: 'Office 365 incluye además de Excel, Word y PowerPoint:', o: ['Publisher', 'Outlook y OneNote', 'Gmail', 'Photoshop'], r: 1, e: 'Outlook y OneNote.' },
        { p: 'La administración de Office 2024, de pago único, consiste en:', o: ['Pagar un único coste', 'Pagar cada mes', 'Pagar cada uso', 'Pagar cada año'], r: 0, e: 'Pago único. Pagar mensualmente es de Microsoft 365.', t: {1: 'Pagar cada mes es el modelo de suscripción de Microsoft 365.', 2: 'Pagar por uso no aparece en el temario.', 3: 'El pago único no es una suscripción anual.'} },
        { p: 'La administración de Office 365 es:', o: ['Pagar un único coste', 'Pagar mensualmente', 'Pagar cada 5 años', 'Gratis durante 1 mes'], r: 1, e: 'Pago mensual (suscripción mensual o anual).' },
        { p: '¿Cuántos dispositivos pueden usar la misma cuenta de Microsoft 365 simultáneamente?', o: ['Uno', 'Tres', 'Cinco', 'Diez'], r: 2, e: 'Cinco a la vez.' },
        { p: 'El almacenamiento online adicional está incluido en Office 2024.', o: ['Verdadero', 'Falso'], r: 1, e: 'Falso: se incluye en Microsoft 365, no en el pago único de 2024.' },
        { p: 'La última versión estable de LibreOffice según el temario es:', o: ['24.2.0', '25.8.1', '26.8.0', '7.6'], r: 2, e: 'La 26.8.0.' },
        { p: '¿Cuánta RAM mínima necesita LibreOffice?', o: ['256 MB', '4 GB', '8 GB', '512 MB obligatorios'], r: 0, e: 'Al menos 256 MB de RAM.' },
        { p: 'LibreOffice es compatible con:', o: ['Windows, macOS o una versión compatible de Linux', 'Windows, porque es la plataforma para la que se diseñó', 'macOS, porque fue quien lo puso en el mercado', 'Linux, porque nació como alternativa a MS Office'], r: 0, e: 'Windows 10/11, macOS 11 o superior, o una versión compatible de Linux.', t: {1: 'También corre en macOS y Linux: no es exclusivo de Windows.', 2: 'No nació en el mercado de Apple.', 3: 'Linux es una de las tres plataformas, no la única.'} },
        { p: 'La cuenta Microsoft en Office sirve para:', o: ['Instalar la licencia sin tarjeta de crédito ni comprobación', 'Usar algunas funciones y acceder a los servicios en línea', 'Guardar la clave de activación para no perderla nunca', 'Nada: todo funciona igual sin tener cuenta'], r: 1, e: 'Hace falta para determinadas funciones y para acceder a actualizaciones y servicios.', t: {0: 'Instalar la licencia no depende de la cuenta Microsoft.', 2: 'Guardar la clave de activación es cosa del producto, no de la cuenta.', 3: 'El temario dice que hace falta para algunas funciones.'} },
        { p: 'V/F: "Una compra de pago único de Office se puede instalar en varios equipos a la vez."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: se instala una vez en un equipo PC o Mac.' },
        { p: 'V/F: "Office 2024 incluye almacenamiento online adicional en la nube."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: en 2024 no se incluye; sí en Microsoft 365.' },
        { p: 'V/F: "Microsoft Office 2024 y Office 2019 exigen el mismo espacio de disco: 4 GB libres."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto: 4 GB libres en ambos.' }
      ],

      emparejar: {
        titulo: 'Requisito ↔ valor',
        pares: [
          ['CPU (2019 y 2024)', '1,6 GHz'],
          ['RAM (2019)', '4 GB'],
          ['RAM (2024, 64 bits)', '8 GB'],
          ['Disco libre', '4 GB'],
          ['Resolución mínima', '1280 x 768'],
          ['DirectX (2019)', '9 o posterior'],
          ['DirectX (2024, tabla del temario)', '10'],
          ['Sistema operativo (2024)', 'Windows 10 1809+ o Windows 11'],
          ['RAM mínima de LibreOffice', '256 MB'],
          ['Versión estable de LibreOffice', '26.8.0']
        ]
      }
    },

    /* ============================================================ */
    {
      id: 'atajos',
      num: 7,
      icono: '⌨️',
      color: '#22d3ee',
      titulo: 'Atajos de teclado',
      sub: 'Windows · Office · navegación · Explorer',
      resumen:
        'La pregunta 12 del examen pide el atajo de 10 funciones concretas. Aquí están todos los del temario, con la función y para qué sirve. Aprende los de Windows y los de Ctrl como mínimo.',
      contenido: [
        { tipo: 'callout', tono: 'examen', titulo: 'Los 10 atajos que pide la pregunta 12', items: [
          'Minimizar ventana: CTRL + M (o Win + M).',
          'Administrador de tareas: CTRL + SHIFT + ESC.',
          'Cambiar a la última ventana utilizada: ALT + TAB.',
          'Cerrar ventana: ALT + F4.',
          'Copiar: CTRL + C.',
          'Pegar: CTRL + V.',
          'Cortar: CTRL + X.',
          'Deshacer: CTRL + Z.',
          'Rehacer: CTRL + Y.',
          'Seleccionar una lista de ficheros de un punto a otro: CTRL + SHIFT + CLIC.',
          'Seleccionar todo el contenido: CTRL + A o CTRL + E.'
        ]},

        { tipo: 'tabla',
          cols: ['Atajo', 'Función'],
          rows: [
            ['Win', 'Abre el menú de inicio'],
            ['Win + M', 'Minimiza la ventana'],
            ['Win + Shift + ESC', 'Restaura la ventana minimizada'],
            ['F10', 'Activa la barra de menús del programa'],
            ['F1', 'Ayuda'],
            ['ALT + TAB', 'Cambia a la última ventana utilizada'],
            ['ALT + F4', 'Cierra la ventana'],
            ['ALT + Enter / ALT + clic', 'Abre las propiedades del objeto seleccionado'],
            ['CTRL + C', 'Copiar'],
            ['CTRL + V', 'Pegar'],
            ['CTRL + X', 'Cortar'],
            ['CTRL + Z', 'Deshacer'],
            ['CTRL + Y', 'Rehacer'],
            ['CTRL + A', 'Selecciona todo el contenido'],
            ['CTRL + E', 'Selecciona todo el contenido (en algunos programas)'],
            ['CTRL + clic', 'Selecciona varios ficheros a la vez'],
            ['CTRL + SHIFT + clic', 'Selecciona una lista de ficheros desde un punto a otro'],
            ['CTRL + SHIFT + arrastrar', 'Crea un acceso directo'],
            ['CTRL + M', 'Minimiza la ventana (según la práctica del temario)'],
            ['Mayús + F10', 'Muestra el menú contextual del elemento seleccionado'],
            ['Alt + flecha izquierda', 'Retroceder en la navegación'],
            ['Alt + flecha derecha', 'Adelantar en la navegación'],
            ['CTRL + TAB', 'Cambia a la pestaña de la derecha'],
            ['CTRL + Shift + TAB', 'Cambia a la pestaña de la izquierda'],
            ['Esc', 'Cancela la tarea actual']
          ],
          caption: 'Tabla completa de atajos del temario (páginas 23-24).'
        },

        { tipo: 'callout', tono: 'aviso', titulo: 'Dos confusiones del temario', items: [
          'Minimizar: el temario pone Win + M en el apartado de atajos y CTRL + M en la práctica de la pregunta 12. Las dos funcionan en Windows; si te exigen una, escribe la de la pregunta 12 (CTRL + M).',
          'Seleccionar una lista de ficheros de un punto a otro: en la página 23 aparece CTRL + SHIFT + clic, pero en la práctica de la pregunta 12 pone CTRL + clic. La correcta es CTRL + SHIFT + clic; CTRL + clic solo añade archivos sueltos a la selección.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Familias de atajos', items: [
          'Win = ventanas y sistema.',
          'Alt = cambiar y cerrar (Alt+Tab, Alt+F4).',
          'Ctrl = control de texto y archivos (C copiar, V pegar, X cortar, Z deshacer, Y rehacer, A/E todo).',
          'F = ayuda y barras (F1 ayuda, F10 barra de menús, Mayús+F10 contextual).',
          'Esc = cancelar.'
        ]},

        { tipo: 'callout', tono: 'clave', titulo: 'Foto de la posición de los dedos', texto:
          'El temario pide una foto de la posición de los dedos. Truco práctico: la tecla F y la J tienen un relieve o raya para localizar los dedos índices sin mirar. Las teclas ASDF y JKL; son las que más usas. Y posición: muñeca recta, codos pegados al cuerpo, antebrazos a 90º.' }
      ],

      flashcards: [
        { q: '¿Qué hace Win?', a: 'Abre el menú de inicio.' },
        { q: '¿Qué hace Win + M?', a: 'Minimiza la ventana.' },
        { q: '¿Qué hace Win + Shift + ESC?', a: 'Restaura la ventana minimizada.' },
        { q: '¿Qué hace CTRL + M?', a: 'Minimiza la ventana (según la práctica de la pregunta 12).' },
        { q: '¿Qué hace CTRL + SHIFT + ESC?', a: 'Abre el Administrador de tareas.' },
        { q: '¿Qué hace F10?', a: 'Activa la barra de menús del programa.' },
        { q: '¿Qué hace F1?', a: 'Ayuda.' },
        { q: '¿Qué hace Mayús + F10?', a: 'Muestra el menú contextual del elemento seleccionado.' },
        { q: '¿Qué hace ALT + TAB?', a: 'Cambia a la última ventana utilizada.' },
        { q: '¿Qué hace ALT + F4?', a: 'Cierra la ventana.' },
        { q: 'Copiar, pegar, cortar.', a: 'CTRL + C copiar, CTRL + V pegar, CTRL + X cortar.' },
        { q: 'Deshacer y rehacer.', a: 'CTRL + Z deshacer, CTRL + Y rehacer.' },
        { q: '¿Cómo se selecciona todo el contenido?', a: 'CTRL + A o CTRL + E.' },
        { q: '¿Qué hace CTRL + clic?', a: 'Selecciona varios ficheros a la vez.' },
        { q: '¿Qué hace CTRL + SHIFT + clic?', a: 'Selecciona una lista de ficheros desde un punto a otro.' },
        { q: '¿Qué hace CTRL + SHIFT + arrastrar?', a: 'Crea un acceso directo.' },
        { q: '¿Qué hace Alt + flecha izquierda?', a: 'Retrocede en la navegación.' },
        { q: '¿Qué hace Alt + flecha derecha?', a: 'Avanza en la navegación.' },
        { q: '¿Qué hace CTRL + TAB?', a: 'Cambia a la pestaña de la derecha.' },
        { q: '¿Qué hace CTRL + Shift + TAB?', a: 'Cambia a la pestaña de la izquierda.' },
        { q: '¿Qué hace Esc?', a: 'Cancela la tarea actual.' },
        { q: '¿Qué hace ALT + Enter o ALT + clic?', a: 'Abre las propiedades del objeto seleccionado.' },
        { q: '¿Por qué las teclas F y J tienen un relieve?', a: 'Para localizar los dedos índices sin mirar la pantalla (mecanografía a ciegas).' }
      ],

      quiz: [
        { p: '¿Qué combinación abre el Administrador de tareas?', o: ['CTRL + ESC', 'CTRL + SHIFT + ESC', 'ALT + CTRL + DEL', 'F8'], r: 1, e: 'CTRL + SHIFT + ESC.' },
        { p: '¿Qué combinación cambia a la última ventana utilizada?', o: ['ALT + TAB', 'CTRL + TAB', 'WIN + TAB', 'ESC + TAB'], r: 0, e: 'ALT + TAB.' },
        { p: '¿Qué combinación cierra la ventana?', o: ['ALT + F4', 'CTRL + W', 'CTRL + Q', 'F4'], r: 0, e: 'ALT + F4.' },
        { p: 'Para deshacer se usa:', o: ['CTRL + Y', 'CTRL + Z', 'CTRL + X', 'CTRL + D'], r: 1, e: 'CTRL + Z deshace; CTRL + Y rehace.' },
        { p: 'Para rehacer se usa:', o: ['CTRL + Z', 'CTRL + Y', 'CTRL + R', 'F5'], r: 1, e: 'CTRL + Y.' },
        { p: 'Para copiar se usa:', o: ['CTRL + C', 'CTRL + V', 'CTRL + X', 'CTRL + B'], r: 0, e: 'CTRL + C copiar.' },
        { p: 'Para cortar se usa:', o: ['CTRL + X', 'CTRL + C', 'CTRL + P', 'CTRL + T'], r: 0, e: 'CTRL + X cortar.' },
        { p: '¿Qué hace CTRL + SHIFT + clic?', o: ['Crear un acceso directo al archivo en el que se hace clic', 'Seleccionar una lista de ficheros desde un punto a otro', 'Seleccionar varios ficheros sueltos uno a uno, sin rango', 'Deshacer la última acción hecha sobre el fichero'], r: 1, e: 'CTRL+SHIFT+clic selecciona un rango de ficheros. CTRL+clic a secas selecciona varios sueltos.', t: {0: 'El acceso directo es CTRL+SHIFT+ARRASTRAR, no CTRL+SHIFT+clic.', 2: 'Varios sueltos, sin rango, es CTRL+clic sin Shift.', 3: 'Deshacer es CTRL+Z.'} },
        { p: '¿Qué hace CTRL + SHIFT + arrastrar?', o: ['Cortar', 'Pegar', 'Copiar', 'Crear acceso directo'], r: 3, e: 'Crea un acceso directo. Con CTRL + SHIFT + clic se selecciona un rango de ficheros.', t: {0: 'Cortar es CTRL+X.', 1: 'Pegar es CTRL+V.', 2: 'Copiar es CTRL+C.'} },
        { p: '¿Qué hace F10?', o: ['Cierra el programa abierto', 'Abre la barra de menús', 'Guarda el documento en el disco', 'Maximiza la ventana actual'], r: 1, e: 'F10 activa la barra de menús del programa.', t: {0: 'Cerrar es ALT+F4.', 2: 'Guardar es CTRL+G o el icono del disquete.', 3: 'Maximizar no tiene tecla propia en el temario.'} },
        { p: '¿Qué hace Mayús + F10?', o: ['Seleccionar todo el contenido', 'Minimizar la ventana abierta', 'Abrir la ayuda en línea', 'Mostrar el menú contextual'], r: 3, e: 'Muestra el menú contextual del elemento seleccionado. F1 es la ayuda.', t: {0: 'Seleccionar todo es CTRL+E.', 1: 'Minimizar es Win+M.', 2: 'La ayuda en línea es F1.'} },
        { p: '¿Qué hace Esc?', o: ['Cancela la tarea actual', 'Guarda', 'Cierra Windows', 'Abre el menú Inicio'], r: 0, e: 'Cancela la tarea actual.' },
        { p: '¿Qué hace CTRL + TAB?', o: ['Cambia a la pestaña de la derecha', 'Cambia a la pestaña de la izquierda', 'Cierra la pestaña', 'Abre una pestaña nueva'], r: 0, e: 'Pestaña de la derecha; con Shift es la izquierda.' },
        { p: '¿Qué hace Alt + flecha izquierda?', o: ['Adelantar en la navegación', 'Retroceder en la navegación', 'Ir al inicio', 'Minimizar'], r: 1, e: 'Retroceder; con la derecha se adelanta.' },
        { p: '¿Cómo se abre el menú Inicio?', o: ['Con la tecla F1', 'Con la tecla Win', 'Con la tecla Esc', 'Con la tecla Imprimir'], r: 1, e: 'La tecla Win abre el menú Inicio.', t: {0: 'F1 es la ayuda en línea.', 2: 'Esc cancela la tarea actual.', 3: 'Imprimir es Ctrl+P.'} },
        { p: '¿Cómo se restaura una ventana minimizada con el teclado?', o: ['Con CTRL y luego la M', 'Con ALT y luego la F4', 'Con MAYÚS y luego la F10', 'Con Win y luego Mayús y ESC'], r: 3, e: 'Win+Shift+ESC restaura la ventana minimizada. Win+M la minimiza.', t: {0: 'CTRL+M minimiza en algunos programas, no restaura.', 1: 'ALT+F4 cierra la ventana, no la restaura.', 2: 'Mayús+F10 abre el menú contextual.'} },
        { p: 'V/F: "ALT + Enter o ALT + clic abren las propiedades del objeto seleccionado."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto.' },
        { p: 'V/F: "CTRL + TAB cambia a la pestaña de la izquierda."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: sin Shift va a la derecha; con Shift va a la izquierda.' },
        { p: 'V/F: "CTRL + clic selecciona varios ficheros a la vez."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto.' },
        { p: 'V/F: "F10 abre el Administrador de tareas."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: activa la barra de menús. El Administrador de tareas es CTRL + SHIFT + ESC.' }
      ],

      emparejar: {
        titulo: 'Atajo ↔ función',
        pares: [
          ['CTRL + C', 'Copiar'],
          ['CTRL + V', 'Pegar'],
          ['CTRL + X', 'Cortar'],
          ['CTRL + Z', 'Deshacer'],
          ['CTRL + Y', 'Rehacer'],
          ['CTRL + M', 'Minimizar ventana'],
          ['CTRL + SHIFT + ESC', 'Administrador de tareas'],
          ['ALT + TAB', 'Cambiar a la última ventana'],
          ['ALT + F4', 'Cerrar ventana'],
          ['F1', 'Ayuda'],
          ['F10', 'Barra de menús'],
          ['Mayús + F10', 'Menú contextual'],
          ['CTRL + clic', 'Seleccionar varios ficheros'],
          ['CTRL + SHIFT + clic', 'Seleccionar un rango de ficheros'],
          ['CTRL + SHIFT + arrastrar', 'Crear acceso directo'],
          ['Esc', 'Cancelar la tarea'],
          ['Win + Shift + ESC', 'Restaurar ventana minimizada']
        ]
      }
    },

    /* ============================================================ */
    {
      id: 'libreoffice-práctico',
      num: 8,
      icono: '📥',
      color: '#4ade80',
      titulo: 'Instalar y desinstalar LibreOffice',
      sub: 'Prácticas 8 y 9 del temario',
      resumen:
        'Cómo se descarga LibreOffice de su web, cómo se deja solo el paquete de idioma español y cómo se desinstala desde Agregar o quitar programas.',
      contenido: [
        { tipo: 'callout', tono: 'clave', titulo: 'Datos de la versión', items: [
          'Última versión estable (según el temario): 26.8.0.',
          'Descarga: https://www.libreoffice.org/download/',
          'Botón: Descargar para Windows.'
        ]},

        { tipo: 'ol', titulo: 'Instalación paso a paso', items: [
          'Entramos en https://www.libreoffice.org/download/.',
          'Pulsamos el botón de Descargar para Windows.',
          'Dentro del programa de instalación elegimos las opciones (idiomas y componentes).',
          'Le damos a Continuar.',
          'La descarga y la instalación se hacen automáticamente.',
          'Al terminar, comprobamos que LibreOffice queda instalado.',
          'Para dejar solo el paquete de idioma español: desmarcamos el resto de idiomas en las opciones.'
        ]},

        { tipo: 'ol', titulo: 'Desinstalación paso a paso', items: [
          'Abrimos el panel de búsqueda de Windows.',
          'Buscamos "Agregar o quitar programas".',
          'Buscamos LibreOffice en la lista.',
          'Le damos a Desinstalar.',
          'Esperamos a que termine.',
          'Después se vuelve a instalar (y hay que volver a hacer pantallazos).'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Lo que te van a preguntar', texto:
          'De esta parte no suelen salir preguntas de teoría, pero sí de procedimiento: "Pasos para instalar LibreOffice" y "Pasos para desinstalarlo". Memorízalos como listas cortas y en orden.' }
      ],

      flashcards: [
        { q: '¿De qué web se descarga LibreOffice?', a: 'De https://www.libreoffice.org/download/' },
        { q: '¿Qué botón se pulsa para Windows?', a: 'El botón de Descargar de la versión para Windows.' },
        { q: '¿Cómo se deja solo el paquete de idioma español?', a: 'En las opciones de instalación se desmarcan todos los idiomas y se deja únicamente el español.' },
        { q: '¿Cómo se desinstala LibreOffice?', a: 'Buscando "Agregar o quitar programas" en el panel de búsqueda, localizando LibreOffice y pulsando Desinstalar.' },
        { q: '¿Cuál es la última versión estable de LibreOffice según el temario?', a: 'La 26.8.0.' },
        { q: '¿Qué botón se pulsa tras elegir las opciones de instalación?', a: 'Continuar; a partir de ahí la instalación se hace automáticamente.' }
      ],

      quiz: [
        { p: '¿De qué dirección se descarga LibreOffice?', o: ['https://www.libreoffice.org/download/', 'https://www.microsoft.com/office', 'https://download.ubuntu.com', 'https://www.google.com'], r: 0, e: 'libreoffice.org/download.' },
        { p: 'Para desinstalar LibreOffice se usa:', o: ['El explorador de archivos, borrando la carpeta del programa', 'El panel de control, en agregar o quitar programas', 'La tienda de Windows, buscando el nombre y desinstalando', 'El antivirus, con la opción de cuarentena del programa'], r: 1, e: 'Panel de control → Agregar o quitar programas → Desinstalar.', t: {0: 'Borrar la carpeta a mano no desinstala: deja restos en el registro.', 2: 'La tienda solo desinstala lo que se instaló desde ella.', 3: 'El antivirus pone en cuarentena, no desinstala.'} },
        { p: 'Para instalar LibreOffice solo en español se debe:', o: ['Desinstalar y volver a instalar, ya con la casilla de español', 'Pulsar siguiente en todas las pantallas sin tocar nada', 'Marcar solo español en las opciones de idioma de la instalación', 'Instalar el paquete de idioma aparte, después de instalar todo'], r: 2, e: 'En las opciones de instalación se desmarcan los demás idiomas y se deja solo español.', t: {0: 'Reinstalar desde cero no hace falta si las opciones de idioma están ahí.', 1: 'Pulsar siguiente sin tocar nada instala todos los idiomas.', 3: 'El paquete de idioma aparte es para añadir, no para limitar.'} },
        { p: 'V/F: "Antes de instalar una aplicación hay que comprobar sus requisitos hardware."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto, es el paso previo del apartado de instalación.' }
      ],

      emparejar: {
        titulo: 'Paso ↔ acción',
        pares: [
          ['Instalar', 'Descargar desde libreoffice.org'],
          ['Opciones', 'Elegir idiomas y componentes'],
          ['Continuar', 'Lanzar la instalación automática'],
          ['Desinstalar', 'Agregar o quitar programas']
        ]
      }
    },

    /* ============================================================ */
    {
      id: 'ingles',
      num: 9,
      icono: '🌐',
      color: '#60a5fa',
      titulo: 'Vocabulario en inglés',
      sub: 'Las quince traducciones de la pregunta 10',
      resumen:
        'Las quince palabras del temario y su traducción literal. Pregunta fácil: si te sabes la tabla, el cien por cien. Además: cómo se leen en voz alta y los errores típicos que se repiten en cada examen.',
      contenido: [
        { tipo: 'tabla',
          cols: ['Español', 'Inglés', 'Cómo se lee', 'Ojo, no confundir'],
          rows: [
            ['Aplicación', 'Application', 'a-plica-shon', 'App es la forma corta'],
            ['Ergonomía', 'Ergonomics', 'er-go-NO-mics', 'Empieza por er-'],
            ['Instalar', 'Install', 'ins-TOL', 'El sustantivo es installation'],
            ['Requisitos del sistema', 'System requirements', 'SIS-tem ri-KWAI-rents', 'requirements siempre en plural'],
            ['Herramientas', 'Tools', 'tuls', 'Es plural, sin tilde'],
            ['Mecanografía', 'Typing', 'TAI-ping', 'No es typewriting'],
            ['Licencia', 'License', 'LAI-sens', 'Con s en americano'],
            ['Empresa', 'Company', 'COM-pa-ni', 'No es enterprise'],
            ['Configuración', 'Settings', 'SE-tings', 'El temario usa Settings, no Configuration'],
            ['Riesgos laborales', 'Occupational hazards', 'o-kyu-TA-sho-nal ha-ZARDS', 'Occupational, no labour'],
            ['Condiciones ambientales', 'Environmental conditions', 'en-vai-ron-MEN-tal', 'Environmental, no ambient'],
            ['Procesador de textos', 'Word processor', 'WERD pro-se-sor', 'Word, no text'],
            ['Software propietario', 'Proprietary software', 'pro-PRI-e-ta-ri', 'Empieza por pro-'],
            ['Paquete ofimático', 'Office suite', 'O-fis suit', 'Suite = suite'],
            ['Hoja de cálculo', 'Spreadsheet', 'SPRED-chit', 'Una sola palabra, con dch']
          ],
          caption: 'Pregunta 10 del temario. Memorízala entera en ambos sentidos.'
        },

        { tipo: 'callout', tono: 'truco', titulo: 'Aprenderlo en 3 pasos', texto:
          'Paso 1: la tabla con flashcards (modo inglés → español y español → inglés). Paso 2: el test, que te lo mezcla con ergonomía. Paso 3: dilo en voz alta tres veces mientras haces café. Son quince palabras, no te escapas.' },

        { tipo: 'callout', tono: 'examen', titulo: 'Errores que cometen los alumnos', items: [
          'Instalar = Install (el sustantivo es installation).',
          'Configuración = Settings (según el temario). Si el profesor acepta Configuration, mejor, pero la tabla dice Settings.',
          'Riesgos laborales = Occupational hazards (nunca labour risks).',
          'Procesador de textos = Word processor (nunca text processor).',
          'Hoja de cálculo = Spreadsheet, una sola palabra y con dch (se escribe spred-JIT).'
        ]}
      ],

      flashcards: [
        { q: 'Aplicación = ?', a: 'Application' },
        { q: 'Ergonomía = ?', a: 'Ergonomics' },
        { q: 'Instalar = ?', a: 'Install' },
        { q: 'Requisitos del sistema = ?', a: 'System requirements' },
        { q: 'Herramientas = ?', a: 'Tools' },
        { q: 'Mecanografía = ?', a: 'Typing' },
        { q: 'Licencia = ?', a: 'License' },
        { q: 'Empresa = ?', a: 'Company' },
        { q: 'Configuración = ?', a: 'Settings' },
        { q: 'Riesgos laborales = ?', a: 'Occupational hazards' },
        { q: 'Condiciones ambientales = ?', a: 'Environmental conditions' },
        { q: 'Procesador de textos = ?', a: 'Word processor' },
        { q: 'Software propietario = ?', a: 'Proprietary software' },
        { q: 'Paquete ofimático = ?', a: 'Office suite' },
        { q: 'Hoja de cálculo = ?', a: 'Spreadsheet' },
        { q: 'Application en español...', a: 'Aplicación' },
        { q: 'Ergonomics en español...', a: 'Ergonomía' },
        { q: 'Install en español...', a: 'Instalar' },
        { q: 'System requirements en español...', a: 'Requisitos del sistema' },
        { q: 'Typing en español...', a: 'Mecanografía' },
        { q: 'License en español...', a: 'Licencia' },
        { q: 'Company en español...', a: 'Empresa' },
        { q: 'Settings en español...', a: 'Configuración' },
        { q: 'Occupational hazards en español...', a: 'Riesgos laborales' },
        { q: 'Word processor en español...', a: 'Procesador de textos' },
        { q: 'Proprietary software en español...', a: 'Software propietario' },
        { q: 'Office suite en español...', a: 'Paquete ofimático' },
        { q: 'Spreadsheet en español...', a: 'Hoja de cálculo' }
      ],

      quiz: [
        { p: '"Software propietario" en inglés es:', o: ['Free software', 'Proprietary software', 'Open software', 'Private software'], r: 1, e: 'Proprietary software.' },
        { p: '"Hoja de cálculo" en inglés es:', o: ['Spread sheet', 'Spreadsheet', 'Calculation sheet', 'Excel sheet'], r: 1, e: 'Spreadsheet, una sola palabra.' },
        { p: '"Riesgos laborales" en inglés es:', o: ['Work risks', 'Occupational hazards', 'Labour dangers', 'Job risks'], r: 1, e: 'Occupational hazards.' },
        { p: '"Paquete ofimático" en inglés es:', o: ['Office package', 'Office suite', 'Office set', 'Office group'], r: 1, e: 'Office suite.' },
        { p: '"Configuración" según el temario se traduce como:', o: ['Configuration', 'Settings', 'Setup', 'Adjustments'], r: 1, e: 'Settings.' },
        { p: '"Procesador de textos" en inglés es:', o: ['Text processor', 'Word processor', 'Words processor', 'Text editor'], r: 1, e: 'Word processor.' },
        { p: '"Herramientas" en inglés es:', o: ['Tool', 'Tools', 'Tooling', 'Utilities'], r: 1, e: 'Tools (plural).' },
        { p: '"Mecanografía" en inglés es:', o: ['Typing', 'Typewriting', 'Typology', 'Keyboard'], r: 0, e: 'Typing.' },
        { p: '"Ergonomía" en inglés es:', o: ['Ergonomics', 'Ergonomical', 'Ergonomi', 'Economics'], r: 0, e: 'Ergonomics.' },
        { p: '"Condiciones ambientales" en inglés es:', o: ['Environmental conditions', 'Ambient conditions', 'Atmospheric conditions', 'Nature conditions'], r: 0, e: 'Environmental conditions.' },
        { p: '"Empresa" en inglés es:', o: ['Firm', 'Company', 'Business', 'Enterprise'], r: 1, e: 'Company.' },
        { p: '"Licencia" en inglés es:', o: ['Licence', 'License', 'Permit', 'Licencing'], r: 1, e: 'License.' },
        { p: '"Requisitos del sistema" en inglés es:', o: ['System requirements', 'System requisites', 'System requests', 'System demands'], r: 0, e: 'System requirements.' },
        { p: 'V/F: "El sustantivo de install es installation."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto: install = instalar (verbo), installation = instalación (sustantivo).' },
        { p: 'V/F: "Spreadsheet se escribe con guion: spread-sheet."', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf', e: 'Falso: spreadsheet, una sola palabra.' }
      ],

      emparejar: {
        titulo: 'Español ↔ inglés',
        pares: [
          ['Aplicación', 'Application'],
          ['Ergonomía', 'Ergonomics'],
          ['Instalar', 'Install'],
          ['Requisitos del sistema', 'System requirements'],
          ['Herramientas', 'Tools'],
          ['Mecanografía', 'Typing'],
          ['Licencia', 'License'],
          ['Empresa', 'Company'],
          ['Configuración', 'Settings'],
          ['Riesgos laborales', 'Occupational hazards'],
          ['Condiciones ambientales', 'Environmental conditions'],
          ['Procesador de textos', 'Word processor'],
          ['Software propietario', 'Proprietary software'],
          ['Paquete ofimático', 'Office suite'],
          ['Hoja de cálculo', 'Spreadsheet']
        ]
      }
    },

    /* ============================================================ */
    {
      id: 'donaciones',
      num: 10,
      icono: '💛',
      color: '#fbbf24',
      titulo: 'Contribuir a proyectos de software libre',
      sub: 'Pregunta 11: donar a Ubuntu y Wikipedia',
      resumen:
        'Cómo se dona a Wikipedia y a Ubuntu: la página exacta, qué se selecciona y qué métodos de pago hay. Y las otras formas de contribuir sin dinero.',
      contenido: [
        { tipo: 'ul', titulo: 'Donar a Wikipedia', items: [
          'Entrar en https://donate.wikimedia.org/w/index.php?title=Special:LandingPage&country=ES&uselang=es',
          'En esa página se selecciona cuánto dinero se quiere donar.',
          'Se elige el método de pago preferido y se completa la donación.'
        ]},

        { tipo: 'ul', titulo: 'Donar a Ubuntu', items: [
          'Entrar en https://ubuntu.com/download/desktop/thank-you#contributions-form',
          'En esta página se selecciona a qué se quiere contribuir con dinero.',
          'Se pulsa "Contribute with PayPal" o se elige otro método de pago preferido.'
        ]},

        { tipo: 'callout', tono: 'clave', titulo: 'Las dos webs, de memoria', items: [
          'Wikipedia → donate.wikimedia.org (donate.wikimedia.org/w/...Special:LandingPage).',
          'Ubuntu → ubuntu.com/download/desktop/thank-you#contributions-form.'
        ]},

        { tipo: 'ul', titulo: 'Otras formas de contribuir (no solo dinero)', items: [
          'Aportar tiempo: testar versiones, responder preguntas, escribir documentación.',
          'Programar o corregir errores (bugs).',
          'Traducir la interfaz y la documentación.',
          'Difundir el proyecto (redes sociales, tutorials, %).',
          'Donar hardware o tiempo de cómputo.'
        ]},

        { tipo: 'callout', tono: 'truco', titulo: 'Respuesta modelo para el examen', texto:
          'Para contribuir económicamente a un proyecto libre se entra en la página oficial de donación del proyecto (donate.wikimedia.org en el caso de Wikipedia, la página de contribuciones de Ubuntu en ubuntu.com/download/desktop/thank-you), se selecciona la cantidad y se elige el método de pago preferido. Si no se puede donar dinero, se puede contribuir con tiempo, traducciones, programación o dicendo bien qué es.' }
      ],

      flashcards: [
        { q: '¿En qué página se dona a Wikipedia?', a: 'En https://donate.wikimedia.org/w/index.php?title=Special:LandingPage&country=ES&uselang=es' },
        { q: '¿En qué página se dona a Ubuntu?', a: 'En https://ubuntu.com/download/desktop/thank-you#contributions-form' },
        { q: '¿Qué se selecciona en la página de donación de Wikipedia?', a: 'Cuánto dinero se quiere donar y el método de pago preferido.' },
        { q: '¿Qué botón aparece para donar a Ubuntu?', a: '"Contribute with PayPal", u otro método de pago preferido.' },
        { q: 'Nombra 3 formas de contribuir al software libre sin dinero.', a: 'Traducir, programar/corregir errores, escribir documentación, hacer pruebas o difundir.' }
      ],

      quiz: [
        { p: 'La web oficial para donar a Wikipedia es:', o: ['https://donate.wikimedia.org', 'https://wikipedia.org/donate-money', 'https://wiki.pay', 'https://ubuntu.com/donate'], r: 0, e: 'donate.wikimedia.org.' },
        { p: 'Según el temario, la página de contribuciones de Ubuntu es:', o: ['https://ubuntu.com/donate', 'https://pay.ubuntu.com', 'https://ubuntu.com/download/desktop/thank-you#contributions-form', 'https://canonical.com/pay'], r: 2, e: 'La del temario es ubuntu.com/download/desktop/thank-you#contributions-form.', t: {0: 'Es una página real de Canonical, pero no es la que cita el temario.', 1: 'pay.ubuntu.com existe, pero no es la ruta del temario.', 3: 'canonical.com/pay no es la página de contribuciones.'} },
        { p: 'En la página de donación hay que seleccionar:', o: ['Solo la cantidad, el método se elige luego en el correo', 'Solo el método de pago, la cantidad es siempre la misma', 'El número de tarjeta, y la cantidad se pone después', 'La cantidad y el método de pago preferido, y listo'], r: 3, e: 'Se selecciona cuánto dinero y con qué método de pago, y ya está.', t: {0: 'La cantidad sin método no completa la donación.', 1: 'La cantidad sí se elige: no es fija.', 2: 'El número de tarjeta se rellena después, no se selecciona al principio.'} },
        { p: '¿Cuál de estas NO es una forma de contribuir al software libre?', o: ['Traducir la interfaz al español', 'Corregir errores del programa', 'Escribir documentación de ayuda', 'Comprar el software cada mes'], r: 3, e: 'Comprar el programa cada mes no es contribuir: es pagarlo. Las otras tres sí son formas de contribuir.', t: {0: 'Traducir es una de las formas clásicas de contribuir.', 1: 'Corregir errores es contribuir al código.', 2: 'Escribir documentación es contribuir al proyecto.'} },
        { p: 'V/F: "Se puede contribuir a un proyecto libre con tiempo y traducciones, no solo con dinero."', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf', e: 'Correcto.' }
      ],

      emparejar: {
        titulo: 'Proyecto ↔ página de donación',
        pares: [
          ['Wikipedia', 'donate.wikimedia.org'],
          ['Ubuntu', 'ubuntu.com/download/desktop/thank-you']
        ]
      }
    },

    /* ============================================================ */
    {
      id: 'equivalencias',
      num: 11,
      icono: '🔄',
      color: '#f472b6',
      titulo: 'Equivalencias entre suites ofimáticas',
      sub: 'La tabla de los logos: OpenOffice/LibreOffice · Microsoft Office · iWork · Google Workspace',
      resumen:
        'Tabla clave del temario (página 11): para cada función —procesador de textos, hoja de cálculo, presentaciones, base de datos y otros— qué aplicación es en cada una de las cuatro suites. Los logos del PDF están incrustados en la web para que los puedas drillar de verdad.',
      contenido: [
        { tipo: 'p', texto:
          'Esta tabla es de las que más cae: es una pregunta fácil si te la sabes y un cero si no. Memoriza el par suite → aplicación, no solo los nombres sueltos. En la pestaña 🔄 Equivalencias tienes los logos reales del PDF, el modo "sin nombres" para autoexaminarte y botones para drilling.' },

        { tipo: 'callout', tono: 'examen', titulo: 'El atajo para memorizarlo', texto:
          'Lee siempre por filas horizontales de izquierda a derecha, una función por vez, y repite la fila entera tres veces. Al ser cuatro suites, la Trick Mnemotécnica es 4 × 5 = 20 celdas: 20 tarjetas y te la sabes. Al revés también funciona: recorre cada suite de arriba abajo como una columna.' },

        { tipo: 'ul', titulo: 'Las tres funciones que existen en las cuatro suites', items: [
          'Procesador de textos: Writer · Word · Pages · Documentos de Google.',
          'Hojas de cálculo: Calc · Excel · Numbers · Hojas de cálculo de Google.',
          'Gestor de presentaciones: Impress · PowerPoint · Keynote · Presentaciones de Google.'
        ]},

        { tipo: 'ul', titulo: 'La fila de base de datos solo tiene dos', items: [
          'Gestor de base de datos: Base (LibreOffice) · Access (Microsoft).',
          'iWork y Google Workspace no tienen base de datos en esta tabla: casillas en blanco. Si te preguntan por iWork y base de datos, la respuesta es que no la tiene.'
        ]},

        { tipo: 'ul', titulo: 'La fila "Otros"', items: [
          'LibreOffice: Draw (dibujo) y Math (fórmulas).',
          'Microsoft: Outlook (correo) y Publisher (publicaciones).',
          'Google: Gmail (correo), Google Drive (almacenamiento), Formularios, Meet (videoconferencias) y Keep (notas).'
        ]},

        { tipo: 'callout', tono: 'aviso', titulo: 'Ojo con el PDF', texto:
          'En la celda de Google de la fila "Otros" el temario coloca solo 3 logos pero nombra 5 herramientas. Para el examen memoriza los 5 NOMBRES (Gmail, Drive, Formularios, Meet y Keep), que es lo que se pregunta; los logos de esa celda no cubren los cinco.' },

        { tipo: 'ul', titulo: 'Mnemotecnias para esta tabla', items: [
          'LibreOffice en orden alfabético: Base, Calc, Draw, Impress, Math, Writer → "BCDI-MW". Es el mismo orden en que aparecen en el menú de inicio.',
          'iWork: Pages, Numbers, Keynote → "Pa-Nu-Ke" (las tres en P/N/K).',
          'Microsoft en el orden de las pestañas: Word, Excel, PowerPoint, Access → "WEPA".',
          'Pares que comparten letra inicial: Writer↔Word (doble W) y Numbers↔Novedades no aplican; el resto se aprende repitiendo la fila.',
          'Columna "otros" por función: LibreOffice dibuja y calcula (Draw y Math), Microsoft envía e imprime (Outlook y Publisher), Google almacena y se comunica (Drive, Gmail, Meet, Keep).'
        ]},

        { tipo: 'callout', tono: 'clave', titulo: 'Y no confundas las dos cosas', texto:
          'La tabla dice qué aplicación cumple cada función. El temario también explica quién desarrolla cada suite: LibreOffice es libre y gratuito y nació como bifurcación de OpenOffice; Microsoft Office es de pago o por suscripción (Microsoft 365) y también tiene pago único (Office 2024); iWork es de Apple para macOS e iOS; Google Workspace funciona en la nube. Suite y fabricante son cosas distintas.' }
      ],

      flashcards: [
        { q: '¿Qué aplicación de LibreOffice es el procesador de textos?', a: 'Writer' },
        { q: '¿Qué aplicación de Microsoft Office es el procesador de textos?', a: 'Word' },
        { q: '¿Qué aplicación de iWork es el procesador de textos?', a: 'Pages' },
        { q: '¿Qué aplicación de Google Workspace es el procesador de textos?', a: 'Documentos de Google' },
        { q: '¿Qué aplicación de LibreOffice es la hoja de cálculo?', a: 'Calc' },
        { q: '¿Qué aplicación de Microsoft Office es la hoja de cálculo?', a: 'Excel' },
        { q: '¿Qué aplicación de iWork es la hoja de cálculo?', a: 'Numbers' },
        { q: '¿Qué aplicación de Google Workspace es la hoja de cálculo?', a: 'Hojas de cálculo de Google' },
        { q: '¿Qué aplicación de LibreOffice es el gestor de presentaciones?', a: 'Impress' },
        { q: '¿Qué aplicación de Microsoft Office es el gestor de presentaciones?', a: 'PowerPoint' },
        { q: '¿Qué aplicación de iWork es el gestor de presentaciones?', a: 'Keynote' },
        { q: '¿Qué aplicación de Google Workspace es el gestor de presentaciones?', a: 'Presentaciones de Google' },
        { q: '¿Qué aplicación de LibreOffice es el gestor de base de datos?', a: 'Base' },
        { q: '¿Qué aplicación de Microsoft Office es el gestor de base de datos?', a: 'Access' },
        { q: 'Writer es equivalente a…', a: 'Microsoft Word, Pages (iWork) y Documentos de Google' },
        { q: 'Calc es equivalente a…', a: 'Microsoft Excel, Numbers (iWork) y Hojas de cálculo de Google' },
        { q: 'Impress es equivalente a…', a: 'Microsoft PowerPoint, Keynote (iWork) y Presentaciones de Google' },
        { q: 'Base es equivalente a…', a: 'Microsoft Access. En iWork y Google Workspace no hay equivalente en esta tabla' },
        { q: '¿Para qué sirve Draw?', a: 'Dibujar. Es de LibreOffice' },
        { q: '¿Para qué sirve Math?', a: 'Fórmulas. Es de LibreOffice' },
        { q: '¿Para qué sirve Outlook?', a: 'Correo. Es de Microsoft Office' },
        { q: '¿Para qué sirve Publisher?', a: 'Publicaciones. Es de Microsoft Office' },
        { q: 'Nombra las 5 herramientas de Google Workspace en la fila "Otros"', a: 'Gmail (correo), Google Drive (almacenamiento), Formularios, Meet (videoconferencias) y Keep (notas)' },
        { q: 'Nombra las 4 suites de la tabla, de izquierda a derecha', a: 'OpenOffice/LibreOffice, Microsoft Office, iWork y Google Workspace' },
        { q: '¿De qué empresa es iWork y para qué dispositivos?', a: 'De Apple, para macOS e iOS' },
        { q: '¿Qué suite ofimática funciona en la nube?', a: 'Google Workspace' },
        { q: '¿De qué surged LibreOffice?', a: 'Es la bifurcación más actualizada de OpenOffice, libre y gratuito' },
        { q: '¿Cómo ofrece Microsoft su paquete ofimático?', a: 'Microsoft 365 por suscripción mensual o anual, u Office 2024 con pago único (sin versiones principales futuras, sí actualizaciones de seguridad)' },
        { q: 'iWork en orden: Pages, Numbers y Keynote. ¿Cuál es la hoja de cálculo?', a: 'Numbers' },
        { q: 'Microsoft Office en orden de pestañas: Word, Excel, PowerPoint y…', a: 'Access' },
        { q: 'LibreOffice en orden alfabético', a: 'Base, Calc, Draw, Impress, Math y Writer' },
        { q: 'Corel WordPerfect Office ¿de quién es y para qué se usaba?', a: 'De Corel; en su momento fue muy popular en entornos legales y administrativos' },
        { q: 'Las cinco funciones de las filas de la tabla', a: 'Procesador de textos, hojas de cálculo, gestor de presentaciones, gestor de base de datos y otros' },
        { q: '¿Qué dos programas de Microsoft aparecen en la fila "Otros" y para qué son?', a: 'Outlook para el correo y Publisher para las publicaciones' },
        { q: 'Keynote es el equivalente a…', a: 'Impress (LibreOffice), PowerPoint (Microsoft) y Presentaciones de Google' },
        { q: 'Access es el equivalente a…', a: 'Base de LibreOffice' },
        { q: '¿Qué programa de Google corresponde a Microsoft Word?', a: 'Documentos de Google' },
        { q: '¿Qué programa de Google corresponde a Microsoft Excel?', a: 'Hojas de cálculo de Google' },
        { q: '¿Qué programa de Google corresponde a Microsoft PowerPoint?', a: 'Presentaciones de Google' },
        { q: 'Dime las 4 aplicaciones que se emparejan con la función "procesador de textos"', a: 'Writer, Word, Pages y Documentos de Google' }
      ],

      quiz: [
        { p: '¿Cuál de estas aplicaciones es el gestor de base de datos de LibreOffice?', o: ['Base', 'Draw', 'Access', 'Math'], r: 0,
          e: 'Base es el gestor de base de datos de LibreOffice; su equivalente en Microsoft Office es Access.' },
        { p: 'Keynote pertenece a…', o: ['LibreOffice', 'Microsoft Office', 'iWork', 'Google Workspace'], r: 2,
          e: 'Keynote es el gestor de presentaciones de iWork, la suite de Apple para macOS e iOS.' },
        { p: '¿Cuál es el equivalente de Microsoft Excel en Google Workspace?', o: ['Documentos', 'Presentaciones', 'Hojas de cálculo', 'Gmail'], r: 2, e: 'Hojas de cálculo de Google es el equivalente de Excel.', t: {0: 'Documentos de Google es el equivalente de Word.', 1: 'Presentaciones de Google es el equivalente de PowerPoint.', 3: 'Gmail es correo, no hoja de cálculo.'} },
        { p: 'De las siguientes aplicaciones, ¿cuál NO pertenece a LibreOffice?', o: ['Writer', 'Calc', 'Access', 'Impress'], r: 2,
          e: 'Access es de Microsoft Office. En LibreOffice el gestor de bases de datos es Base.' },
        { p: '¿Para qué sirve la aplicación Math de LibreOffice?', o: ['Para el correo electrónico', 'Para las fórmulas', 'Para dibujar', 'Para publicar'], r: 1,
          e: 'En la fila "Otros": Draw sirve para dibujo y Math para fórmulas. Los dos son de LibreOffice.' },
        { p: 'Microsoft ofrece dos formas de adquirir su paquete ofimático. ¿Cuáles?', o: ['Por suscripción o por pago único', 'Solo por pago único y ya está', 'Solo por suscripción y ya está', 'Por suscripción o por uso medido'], r: 0, e: 'Microsoft 365 por suscripción u Office 2024 con pago único.', t: {1: 'El pago único no es la única forma.', 2: 'La suscripción no es la única forma.', 3: 'El pago por uso medido no existe en el temario.'} },
        { p: '¿Qué suite ofimática es de Apple?', o: ['OpenOffice/LibreOffice', 'Corel WordPerfect Office', 'iWork', 'Microsoft Office'], r: 2,
          e: 'iWork es el paquete de Apple, diseñado para dispositivos macOS e iOS.' },
        { p: '¿Cuál de estas herramientas de Google Workspace es de videoconferencias?', o: ['Keep', 'Meet', 'Drive', 'Formularios'], r: 1,
          e: 'Meet es la videoconferencia. El resto: Gmail (correo), Drive (almacenamiento), Formularios y Keep (notas).' },
        { p: 'Google Drive es…', o: ['Un gestor de bases de datos', 'Un gestor de almacenamiento', 'Un procesador de textos', 'Un gestor de presentaciones'], r: 1,
          e: 'Drive es almacenamiento. El gestor de bases de datos de la tabla es Base (LibreOffice) y Access (Microsoft).' },
        { p: 'LibreOffice es, respecto a OpenOffice…', o: ['La versión de pago', 'La bifurcación más actualizada, libre y gratuita', 'Un competidor de Microsoft en la nube', 'La versión antigua sin soporte'], r: 1,
          e: 'LibreOffice es la bifurcación más actualizada de OpenOffice, con mayor soporte de la comunidad.' },
        { p: 'En la tabla de equivalencias del temario, las filas son:', o: ['Las cinco categorías comparadas entre OpenOffice, MS Office, iWork y Google', 'Las cuatro categorías comparadas entre OpenOffice, MS Office, iWork y Google', 'Solo las categorías en las que las cuatro suites tienen equivalente', 'Solo dos categorías, porque las otras son de otra unidad del temario'], r: 0, e: 'Son cinco filas: procesador de textos, hojas de cálculo, presentaciones, base de datos y otros.', t: {1: 'Hay cinco filas, no cuatro: falta la de otros.', 2: 'Se comparan también las celdas donde no hay equivalente, y eso es justamente lo que hay que saber.', 3: 'La tabla tiene cinco filas, todas de esta unidad.'} },
        { p: '¿Qué aplicación de iWork corresponde a las hojas de cálculo?', o: ['Pages', 'Keynote', 'Numbers', 'Notes'], r: 2,
          e: 'Pages es procesador de textos, Numbers hoja de cálculo y Keynote presentaciones.' },
        { p: '¿En qué celdas de la tabla no hay aplicación para iWork ni Google Workspace?', o: ['Procesador de textos', 'Hojas de cálculo', 'Presentaciones', 'Bases de datos'], r: 3, e: 'La fila de gestor de base de datos solo tiene Base (LibreOffice) y Access (Microsoft).', t: {0: 'iWork tiene Pages y Google tiene Documentos.', 1: 'iWork tiene Numbers y Google tiene Hojas de cálculo.', 2: 'iWork tiene Keynote y Google tiene Presentaciones.'} },
        { p: 'Publisher pertenece a…', o: ['LibreOffice', 'Microsoft Office', 'iWork', 'Google Workspace'], r: 1,
          e: 'En la fila "Otros", Microsoft aporta Outlook (correo) y Publisher (publicaciones).' },
        { p: 'LibreOffice es un paquete ofimático…', o: ['Libre y gratuito', 'De pago por suscripción', 'Solo disponible en la nube', 'Exclusivo de Windows'], r: 0,
          e: 'Es software libre y gratuito. Microsoft Office es el que ofrece suscripción (Microsoft 365) o pago único (Office 2024).' },
        { p: 'Corel WordPerfect Office se caracterizó por ser popular en…', o: ['El sector aéreo', 'Entornos legales', 'Los videojuegos', 'La agricultura'], r: 1, e: 'Se popularizó en entornos legales y administrativos por su edición de documentos y sus tipos de letra.', t: {0: 'El sector aéreo es de Airbus y de Boeing, no de ofimática.', 2: 'Los videojuegos no tienen nada que ver con WordPerfect.', 3: 'La agricultura no es el sector donde se popularizó.'} },
        { p: 'V/F: en Google Workspace, "Presentaciones de Google" es el equivalente a PowerPoint.', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf',
          e: 'Correcto: Presentaciones de Google ↔ PowerPoint ↔ Impress ↔ Keynote.' },
        { p: 'V/F: en la tabla, iWork tiene aplicación de gestor de base de datos.', o: ['Verdadero', 'Falso'], r: 1, tipo: 'vf',
          e: 'Falso: la celda de iWork en la fila de base de datos está vacía.' },
        { p: 'V/F: Publisher es una aplicación de Microsoft Office para crear publicaciones.', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf',
          e: 'Verdadero, aparece en la fila "Otros" de la columna Microsoft Office.' },
        { p: 'V/F: las cuatro suites de la tabla son OpenOffice/LibreOffice, Microsoft Office, iWork y Google Workspace.', o: ['Verdadero', 'Falso'], r: 0, tipo: 'vf',
          e: 'Verdadero, son las cuatro columnas de la tabla de la página 11.' }
      ],

      emparejar: {
        titulo: 'Función ↔ aplicación (las cuatro suites)',
        pares: [
          ['LibreOffice · procesador de textos', 'Writer'],
          ['Microsoft · procesador de textos', 'Word'],
          ['iWork · procesador de textos', 'Pages'],
          ['Google · procesador de textos', 'Documentos de Google'],
          ['LibreOffice · hoja de cálculo', 'Calc'],
          ['Microsoft · hoja de cálculo', 'Excel'],
          ['iWork · hoja de cálculo', 'Numbers'],
          ['Google · hoja de cálculo', 'Hojas de cálculo de Google'],
          ['LibreOffice · presentaciones', 'Impress'],
          ['Microsoft · presentaciones', 'PowerPoint'],
          ['iWork · presentaciones', 'Keynote'],
          ['Google · presentaciones', 'Presentaciones de Google'],
          ['LibreOffice · base de datos', 'Base'],
          ['Microsoft · base de datos', 'Access'],
          ['LibreOffice · dibujo', 'Draw'],
          ['LibreOffice · fórmulas', 'Math'],
          ['Microsoft · correo', 'Outlook'],
          ['Microsoft · publicaciones', 'Publisher'],
          ['Google · correo', 'Gmail'],
          ['Google · almacenamiento', 'Google Drive'],
          ['Google · videoconferencias', 'Meet'],
          ['Google · notas', 'Keep']
        ]
      }
    }
  ],

  /* ---------------------------------------------------------------
     TABLA DE EQUIVALENCIAS — los logos son los del propio PDF (pág. 11),
     extraídos como imagen. Sirve para el bloque 11 y para la pestaña
     🔄 Equivalencias, que la pinta en grande y en modo "sin nombres".
     --------------------------------------------------------------- */
  tablaEquivalencias: {
    suites: [
      { id: 'libreoffice', nombre: 'OpenOffice/LibreOffice', logo: 'img/logos/suite-libreoffice.png' },
      { id: 'microsoft', nombre: 'Microsoft Office', logo: 'img/logos/suite-microsoft.png' },
      { id: 'iwork', nombre: 'iWork', logo: 'img/logos/suite-iwork.png' },
      { id: 'google', nombre: 'Google Workspace', logo: 'img/logos/suite-google.png' }
    ],
    filas: [
      {
        fn: 'Procesador de textos',
        celdas: {
          libreoffice: [{ logo: 'textos-libreoffice.png', txt: 'Writer' }],
          microsoft: [{ logo: 'textos-microsoft.png', txt: 'Word' }],
          iwork: [{ logo: 'textos-iwork.png', txt: 'Pages' }],
          google: [{ logo: 'textos-google.png', txt: 'Documentos de Google' }]
        }
      },
      {
        fn: 'Hojas de cálculo',
        celdas: {
          libreoffice: [{ logo: 'calculo-libreoffice.png', txt: 'Calc' }],
          microsoft: [{ logo: 'calculo-microsoft.png', txt: 'Excel' }],
          iwork: [{ logo: 'calculo-iwork.png', txt: 'Numbers' }],
          google: [{ logo: 'calculo-google.png', txt: 'Hojas de cálculo de Google' }]
        }
      },
      {
        fn: 'Gestor de presentaciones',
        celdas: {
          libreoffice: [{ logo: 'presentaciones-libreoffice.png', txt: 'Impress' }],
          microsoft: [{ logo: 'presentaciones-microsoft.png', txt: 'PowerPoint' }],
          iwork: [{ logo: 'presentaciones-iwork.png', txt: 'Keynote' }],
          google: [{ logo: 'presentaciones-google.png', txt: 'Presentaciones de Google' }]
        }
      },
      {
        fn: 'Gestor de base de datos',
        celdas: {
          libreoffice: [{ logo: 'datos-libreoffice.png', txt: 'Base' }],
          microsoft: [{ logo: 'datos-microsoft.png', txt: 'Access' }]
        }
      },
      {
        fn: 'Otros',
        celdas: {
          libreoffice: [
            { logo: 'otros-libreoffice-draw.png', txt: 'Draw', sub: 'dibujo' },
            { logo: 'otros-libreoffice-math.png', txt: 'Math', sub: 'fórmulas' }
          ],
          microsoft: [
            { logo: 'otros-microsoft-outlook.png', txt: 'Outlook', sub: 'correo' },
            { logo: 'otros-microsoft-publisher.png', txt: 'Publisher', sub: 'publicaciones' }
          ],
          google: [
            { logo: 'otros-google-1.png', txt: 'Gmail' },
            { logo: 'otros-google-2.png', txt: 'Google Drive' },
            { logo: 'otros-google-3.png', txt: 'Meet' }
          ],
          nota: 'El PDF coloca 3 logos pero nombra 5 herramientas: Gmail (correo), Google Drive (almacenamiento), Formularios, Meet (videoconferencias) y Keep (notas). Memoriza los 5 nombres.'
        }
      }
    ]
  },

  /* ---------------------------------------------------------------
     MÉTODO DE ESTUDIO — lo que funciona de verdad, contrastado con
     bibliografía university + clínica sobre memoria. No es temario:
     es cómo usarlo mañana.
     --------------------------------------------------------------- */
  metodo: {
    principios: [
      {
        n: '1',
        t: 'Recuerdo activo, no relectura',
        d: 'Releer el temario da la sensación de saberlo y no es cierto. Lo que consolida es sacar la información de la cabeza sin mirar: responder, escribir de memoria, hacerse el test. Cada vez que fallas y corriges, esa conexión se refuerza.',
        mal: 'Lo que NO funciona: volver a leer las mismas notas cinco veces seguidas.',
        hoy: 'Cierra la web, escribe de memoria las 20 celdas de la tabla de logos y luego comprueba. Luego hazte un test de 20 sin mirar.'
      },
      {
        n: '2',
        t: 'Repetición espaciada (patrón 2-3-5-7)',
        d: 'Volver al mismo material a intervalos crecientes. Tras la primera vez, repasa al día 2, al 3, al 5 y al 7, y luego cada semana. Cada repaso bien programado reinicia la curva del olvido y fija la memoria a mayor profundidad.',
        mal: 'Empollar la noche antes mete información en la memoria a corto plazo, de donde se escapa en días.',
        hoy: 'Mañana solo te cabe una sesión: hazla a fondo y anota que hay que repasar el mismo tema en días alternos aunque yapassed el examen.'
      },
      {
        n: '3',
        t: 'Troceado (chunking)',
        d: 'La memoria a corto plazo sostiene unos 5-9 elementos a la vez. La tabla de logos son 20 celdas: no la mires como 20, mírala como 5 filas de 4. Y cada fila como un grupo.',
        mal: 'Querer memorizar las 20 celdas de una sentada.',
        hoy: 'Una fila por intento: "textos = Writer, Word, Pages, Documentos". Cinco repasos de cuatro elementos caben en media hora.'
      },
      {
        n: '4',
        t: 'Intercalado: mezcla temas',
        d: 'Alternar bloques en una misma sesión (5 de ergonomía, 5 de atajos, 5 de la tabla) obliga al cerebro a elegir cada vez qué aplicar, que es justo lo que exige un examen. Rinde más que 20 seguidas del mismo tema.',
        mal: 'Hacer 40 preguntas de un solo bloque seguidas.',
        hoy: 'Usa el generador de tests marcando varios bloques a la vez en lugar de uno.'
      },
      {
        n: '5',
        t: 'Técnica Feynman: explícalo en voz alta',
        d: 'Explica el tema como si tuvieras delante a alguien de 5 años. Donde te atasques, ahí está tu agujero. Se aprende el doble que leyendo, y se retiene quien lo ha explicado.',
        mal: 'Releer la explicación porque "no lo entendí".',
        hoy: 'Explícale en voz alta a qué corresponde cada logo de la tabla. Si dudas de uno, ese es el siguiente que hay que machacar.'
      },
      {
        n: '6',
        t: 'Mnemotecnia solo donde aporta',
        d: 'Una regla mnemotécnica es útil cuando los datos son aislados, abstractos o parecidos entre sí (nombres propios, cifras). En datos que ya tienen significado no hace falta: la memoria retiene mejor si lo asocias a algo que ya conoces.',
        mal: 'Inventar un truco complicadísimo para algo que ya entiendes.',
        hoy: 'Úsala solo en: los 6 módulos de LibreOffice en orden alfabético (B-C-D-I-M-W), las 3 de iWork (Pa-Nu-Ke) y las cifras (40-60 cm, 17-27 °C, 30-70 %, 20-20-20).'
      },
      {
        n: '7',
        t: 'Pomodoro: 25-5',
        d: '25 minutos de estudio y 5 de descanso, en bucle. La concentración decae a partir de los 30-40 minutos, así que los bloques largos pierden rendimiento.',
        mal: 'Tres horas seguidas sin parar.',
        hoy: 'Cuatro pomodoros para la tabla de logos y los atajos, que es donde está la nota fácil.'
      },
      {
        n: '8',
        t: 'Duerme. La consolidación ocurre durmiendo',
        d: 'La memoria se consolida durante el sueño: una siesta de 20-90 minutos después de estudiar puede subir la retención hasta un 40 %.',
        mal: 'Vela la noche antes del examen.',
        hoy: 'Si puedes, una siesta corta después de la última sesión. Descansa igual de importante como repasar.'
      },
      {
        n: '9',
        t: 'La regla 1-2-3 de última hora',
        d: 'La última sesión solo refuerza: fórmulas, esquemas y los temas flojos. Nada nuevo, cero información nueva, cero pánico.',
        mal: 'Descubrir un bloque que no habías mirado a las 23:00.',
        hoy: 'Repasa las tablas y los números sueltos, y haz un test para ver dónde estás.'
      }
    ],
    hoy: [
      { t: 'Antes de dormir: test de 20 preguntas de todo el temario, en modo cronómetro', d: 'Sirve para saber por dónde vas, no para aprender. Anota los bloques donde fallas.' },
      { t: 'Los 30 minutos que más rendían: la tabla de equivalencias', d: '20 celdas. Cinco filas de cuatro. El botón "sin nombres" de la pestaña 🔄 te hace el examen a ti mismo.' },
      { t: 'Las cifras sueltas: 40-60 cm, 10-15 min, 90 min, 20-20-20, 17-27 °C, 30-70 %, 90º, 1,6 GHz, 2 núcleos, 4 GB, 8 GB, 1280x768, DirectX 9', d: 'Están todas en la pestaña 🔢 Datos clave con su contexto. Es memoria de datos puros: aquí sí mnemotecnia.' },
      { t: 'Los 12 atajos de la pregunta 12', d: 'Están marcados en rojo en la pestaña ⌨️ Atajos. Repítelos hasta teclearlos sin mirar.' },
      { t: 'Frases de desarrollo: la implantación', d: 'Análisis de necesidades → planificación → instalación y configuración → pruebas → mantenimiento y seguridad. Es una cadena, no puntos sueltos: si te sabes la cadena, te sabes el bloque entero.' },
      { t: 'Al despertar, antes de mirar nada: repaso en ayunas de lo que fallaste', d: '30-40 % es el pico de retención tras dormir. No empieces por leer: empieza por recordar.' }
    ]
  },

  /* ---------------------------------------------------------------
     BANCO DE DATOS NUMÉRICOS — el drill más rentable del examen.
     --------------------------------------------------------------- */
  numeros: [
    { v: '40-60', u: 'cm', ctx: 'Distancia entre la pantalla y el usuario', b: 'ergonomia' },
    { v: '10-15', u: 'min', ctx: 'Duración del descanso', b: 'ergonomia' },
    { v: '90', u: 'min', ctx: 'Cada cuánto se descansa', b: 'ergonomia' },
    { v: '20-20-20', u: 'regla', ctx: '20 min → 20 pies (6 m) → 20 segundos', b: 'ergonomia' },
    { v: '6', u: 'm', ctx: 'Distancia equivalente a 20 pies en la regla 20-20-20', b: 'ergonomia' },
    { v: '20', u: 's', ctx: 'Segundos de la regla 20-20-20', b: 'ergonomia' },
    { v: '17-27', u: '°C', ctx: 'Temperatura del local de trabajo', b: 'ergonomia' },
    { v: '30-70', u: '%', ctx: 'Humedad relativa', b: 'ergonomia' },
    { v: '90º', u: 'ángulo', ctx: 'Brazos/antebrazos y muslo/espalda', b: 'ergonomia' },
    { v: '1,6', u: 'GHz', ctx: 'CPU de Office 2019 y Office 2024', b: 'office' },
    { v: '2', u: 'núcleos', ctx: 'Procesador de Office 2019 y 2024', b: 'office' },
    { v: '4', u: 'GB', ctx: 'RAM de Office 2019', b: 'office' },
    { v: '8', u: 'GB', ctx: 'RAM de Office 2024 en 64 bits', b: 'office' },
    { v: '4', u: 'GB', ctx: 'Espacio libre en disco para Office', b: 'office' },
    { v: '1280 x 768', u: 'px', ctx: 'Resolución mínima de pantalla', b: 'office' },
    { v: '9', u: 'DirectX', ctx: 'Gráfica de Office 2019', b: 'office' },
    { v: '10', u: 'DirectX', ctx: 'Gráfica de Office 2024 (tabla del temario)', b: 'office' },
    { v: '1809', u: 'versión', ctx: 'Windows 10 mínima para Office 2024', b: 'office' },
    { v: '5', u: 'dispositivos', ctx: 'Sesiones simultáneas de Microsoft 365', b: 'office' },
    { v: '1', u: 'equipo', ctx: 'Instalación de la compra de pago único (Office 2024)', b: 'office' },
    { v: '26.8.0', u: 'versión', ctx: 'Última versión estable de LibreOffice', b: 'office' },
    { v: '256', u: 'MB', ctx: 'RAM mínima de LibreOffice', b: 'office' },
    { v: '4', u: 'libertades', ctx: 'Libertades del software libre', b: 'licencias' },
    { v: '4', u: 'GB', ctx: 'RAM de Office 2024 en 32 bits', b: 'office' }
  ]
};

/* Las imagenes van aparte, no dentro del bloque, para no ensuciar el
   temario en texto. Son recortes reales del PDF del profe. La tabla de
   logos esta aparte, en img/logos, porque se usa también en el drill
   de equivalencias. */
UD1.imagenes = {
  ergonomia: [
    {
      src: 'img/pdf/ergonomia-portada.jpg',
      pie: 'Recomendaciones de ergonomía en el puesto de trabajo.',
      nota: 'El temario las agrupa en pantalla, iluminación, teclado, ambiente, postura, cargas y sonido.'
    },
    {
      src: 'img/pdf/ergonomia-cargas.jpg',
      pie: 'Normas en la manipulación de cargas.',
      nota: 'Pies separados y bien apoyados, rodillas flexionadas, espalda recta y la carga cerca del cuerpo.'
    },
    {
      src: 'img/pdf/ergonomia-acustico.jpg',
      pie: 'Confort acústico: los ruidos no deseados molestan e interfieren.',
      nota: 'El temario encadena tres: molestia, interferencia con la concentración y daño fisiológico.'
    }
  ],
  office: [
    {
      src: 'img/pdf/office-m365.jpg',
      pie: 'Office 365 frente a Office 2024: sesión en las aplicaciones y almacenamiento en la nube.',
      nota: 'La tabla del temario dice: actualizaciones de características, varios equipos y almacenamiento online; 2024, pago único y un equipo.'
    },
    {
      src: 'img/pdf/office-hardware.png',
      pie: 'Características hardware del equipo para instalar Microsoft Office 2019.',
      nota: 'El temario compara Office 2019 (DirectX 9) con Office 2024 (DirectX 10).'
    },
    {
      src: 'img/pdf/office-instalador.jpg',
      pie: 'El MO19.RAR descomprimido: se seleccionan las opciones y se le da a instalar.',
      nota: 'El primer paso del ejercicio es meternos en la IP 10.212.0.20.'
    },
    {
      src: 'img/pdf/office-powershell.png',
      pie: 'Abrir PowerShell y ejecutar el comando para activar las licencias.',
      nota: 'El temario lo pide como paso a paso, con pantallazos.'
    },
    {
      src: 'img/pdf/office-pestana2a.jpg',
      pie: 'Instalador completo: elegir las opciones de instalación.',
      nota: 'Recuerda: completa o selección de componentes.'
    },
    {
      src: 'img/pdf/office-pestana2b.jpg',
      pie: 'Seleccionar la pestaña número 2 y ya se hace todo automáticamente.',
      nota: 'Es el paso final del ejercicio de instalación.'
    }
  ],
  atajos: [
    {
      src: 'img/pdf/atajos-panel1.jpg',
      pie: 'Esquema de atajos del temario (página 24), lámina 1 de 6: arriba a la izquierda.',
      nota: 'En esa página están los atajos de navegación y ventanas. La lista completa, con lo que hace cada uno, está en la tabla de atajos de este bloque.'
    },
    {
      src: 'img/pdf/atajos-panel2.jpg',
      pie: 'Esquema de atajos del temario (página 24), lámina 2 de 6: arriba en el centro.',
      nota: 'La lista completa, con lo que hace cada atajo, está en la tabla de atajos de este bloque.'
    },
    {
      src: 'img/pdf/atajos-panel3.jpg',
      pie: 'Esquema de atajos del temario (página 24), lámina 3 de 6: arriba a la derecha.',
      nota: 'La lista completa, con lo que hace cada atajo, está en la tabla de atajos de este bloque.'
    },
    {
      src: 'img/pdf/atajos-panel4.jpg',
      pie: 'Esquema de atajos del temario (página 24), lámina 4 de 6: abajo a la izquierda.',
      nota: 'La lista completa, con lo que hace cada atajo, está en la tabla de atajos de este bloque.'
    },
    {
      src: 'img/pdf/atajos-panel5.jpg',
      pie: 'Esquema de atajos del temario (página 24), lámina 5 de 6: abajo en el centro.',
      nota: 'La lista completa, con lo que hace cada atajo, está en la tabla de atajos de este bloque.'
    },
    {
      src: 'img/pdf/atajos-panel6.jpg',
      pie: 'Esquema de atajos del temario (página 24), lámina 6 de 6: abajo a la derecha.',
      nota: 'La lista completa, con lo que hace cada atajo, está en la tabla de atajos de este bloque.'
    },
    {
      src: 'img/pdf/atajos-teclado.jpg',
      pie: 'La posición de los dedos que pide la pregunta 12 del temario.',
      nota: 'La pregunta 12 te da las acciones y tú pones la combinación: CTRL+M, CTRL+SHIFT+ESC, ALT+TAB, ALT+F4, CTRL+C, CTRL+V, CTRL+X.'
    }
  ],
  instalacion: [
    {
      src: 'img/pdf/instalacion-continuar.png',
      pie: 'Le damos a continuar y la descarga se hace sola.',
      nota: 'Paso a paso del temario para instalar LibreOffice.'
    },
    {
      src: 'img/pdf/instalacion-programa.jpg',
      pie: 'Dentro ya del programa, estas son las opciones.',
      nota: 'Antes hay que comprobar la versión estable y los requisitos.'
    },
    {
      src: 'img/pdf/instalacion-descarga.jpg',
      pie: 'La descarga en marcha después de darle a continuar.',
      nota: 'El temario dice que la descarga se hace automáticamente.'
    },
    {
      src: 'img/pdf/instalacion-listo.jpg',
      pie: 'Listo: ya tendríamos instalado LibreOffice.',
      nota: 'Después toca desinstalarlo y volver a instalarlo, con pantallazos.'
    }
  ],
  donaciones: [
    {
      src: 'img/pdf/donaciones-paypal.jpg',
      pie: 'Donar a Wikipedia: cuánto dinero y método de pago.',
      nota: 'En Ubuntu la página es la de contribución: eliges a qué quieres aportar con dinero y le das a contribute with paypal.'
    }
  ]
};