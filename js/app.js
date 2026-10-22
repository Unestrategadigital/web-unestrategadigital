/* ============================================================
   CONFIGURACIÓN: edita aquí tus datos, precios y enlaces de pago
   ============================================================ */
const CONFIG = {
  contacto: { whatsapp: "+593 99 000 0000", email: "hola@unestrategadigital.com" },
  pagos: { binancePayId: "TU-PAY-ID", tarjetaGeneral: "" },
  plataformas: {
    hotmart: { nombre: "Biblioteca Estratega", url: "", texto: "Mi plataforma de contenido con plantillas, guiones y clases nuevas cada mes. Se compra y se accede por Hotmart." },
    afiliado: { nombre: "Herramienta para redes", url: "", texto: "La plataforma que uso para programar publicaciones y medir mis redes. Soy afiliado y recomiendo solo lo que uso." }
  },
  // Biblioteca de skills: instrucciones listas para cargar en tu IA. url vacía = "Próximamente". precio "" = gratis para estudiantes.
  skills: [
    // Módulos de Kael, mi asistente de marketing, listos para cargar por separado
    { nombre:"Trafficker digital", tipo:"Meta Ads", texto:"Decide qué anuncios hacer y en qué orden, lee hook rate, retención, CTR y conversión para iterar, y aplica el Sistema ADP para que tus mejores piezas sigan vendiendo meses.", porque:"Incluye el Sistema ADP completo.", precio:"", url:"" },
    { nombre:"Anuncios que venden", tipo:"Video UGC", texto:"Le das tu producto y te devuelve dolores, objeciones, 10 ángulos y los guiones clip por clip, listos para grabar o para avatar.", precio:"", url:"" },
    { nombre:"Creador de personajes IA", tipo:"Avatar IA", texto:"Diseña un avatar realista y consistente: ficha de identidad, foto base y láminas para que su cara no cambie entre videos.", precio:"", url:"" },
    { nombre:"Ganchos y copy por canal", tipo:"Copy", texto:"Ganchos en matriz y textos para Meta, Google, TikTok y LinkedIn, respetando los caracteres de cada plataforma.", precio:"", url:"" },
    { nombre:"Kit de 7 estáticos", tipo:"Anuncios", texto:"Siete creatividades de respuesta directa para Meta, cada una con su formato, su rol y el prompt de imagen.", precio:"", url:"" },
    { nombre:"Conceptos visuales", tipo:"Diseño", texto:"Convierte una idea en una imagen que se entiende sola en 2 segundos, como el gorila fichado de esta página.", precio:"", url:"" },
    { nombre:"Texto sin cara de IA", tipo:"Escritura", texto:"Revisa cualquier texto y le quita las muletillas, las rayas y el ritmo que delatan que lo escribió una IA.", precio:"", url:"" }
  ],
  // Imágenes y videos generados con los prompts. Si un archivo no existe, la web muestra su versión hecha con código.
  assets: {
    // Tu cara solo aparece en el bloque de los ojos vendados.
    hero:"", heroVideo:"assets/servicios.mp4", heroVideoVertical:"assets/hero-vertical.mp4",
    vendado:"assets/vendado.jpg", hilos:"assets/hilos.jpg", salida:"assets/salida.jpg",
    // Mockups de cada servicio (4:5)
    publicidad:"assets/svc-publicidad.jpg", contenido:"assets/svc-contenido.jpg", apps:"assets/svc-apps.jpg",
    // Inicio: cada pieza proyecta la sombra de lo que logra
    "pz-publicidad":"assets/pz-publicidad.jpg", "pz-contenido":"assets/pz-contenido.jpg", "pz-apps":"assets/pz-apps.jpg",
    gorila:"assets/gorila.jpg",
    // Vitrina de servicios: objetos flotando sobre el mismo color de su tarjeta
    "sc-publicidad":"assets/sc-publicidad.jpg", "sc-contenido":"assets/sc-contenido.jpg", "sc-apps":"assets/sc-apps.jpg"
  },
  // Videos en bucle detrás de cada capítulo (generados en Google Flow)
  videos: { vendado:"assets/vendado.mp4", hilos:"assets/hilos.mp4", bienvenida:"assets/bienvenida.mp4" },
  analizador: { precio: 3 },
  // Productos que ve el estudiante en la demostración del área de estudiantes
  estudiantes: { demo: ["c5","c1","e1","e5"] },
  // Descuento del combo según cuántos productos lleva (2, 3, 4 o más) [confirmar con Leo]
  combos: { descuentos: { 2:10, 3:15, 4:20 } },
  // Calificaciones reales de cada producto: { e1:[{nombre:"Ana", estrellas:5, texto:"..."}] }. Vacío = "Aún sin calificaciones".
  calificaciones: {}
};

const SERVICES = {
  publicidad: { glyph:"♛", pieza:"Dama", nota:"La pieza con más alcance",
    titulo:"Publicidad en Meta Ads", corto:"Campañas en Facebook e Instagram enfocadas en ventas y clientes potenciales.",
    largo:"Diseño, lanzo y optimizo tus campañas para que cada dólar tenga un objetivo. Trabajamos con los datos reales de tu cuenta.",
    incluye:["Auditoría de tu cuenta publicitaria","Configuración de píxel y API de conversiones","Estructura de campañas y públicos","Copys y creatividades para cada anuncio","Optimización y pruebas A/B","Reporte con métricas claras"],
    paquetes:[
      {id:"pub-1",nombre:"Apertura",precio:150,per:"/mes",items:["1 campaña activa","3 anuncios","Reporte mensual"]},
      {id:"pub-2",nombre:"Medio juego",precio:300,per:"/mes",feat:true,items:["Hasta 3 campañas","9 anuncios","Optimización semanal","Reporte quincenal"]},
      {id:"pub-3",nombre:"Final",precio:550,per:"/mes",items:["Hasta 6 campañas","Retargeting y embudo completo","Reunión semanal","Reporte semanal"]}],
    faq:[["¿El precio incluye el presupuesto de anuncios?","No. El presupuesto lo pagas directo a Meta con tu tarjeta. Recomiendo empezar con al menos $5 diarios por campaña."],["¿En cuánto tiempo veo resultados?","Las primeras 2 semanas son de aprendizaje. Desde la tercera ya hay datos para optimizar y escalar."]]},
  contenido: { glyph:"♜", pieza:"Torre", nota:"Constancia en línea recta",
    titulo:"Creación de contenido", corto:"Reels, TikToks y carruseles con guion y edición. Grabas tú o lo presenta tu avatar de IA.",
    largo:"Un sistema de contenido que publica siempre, con ganchos que detienen el scroll y llamados a la acción que convierten. Si no quieres grabarte, lo presenta un avatar de IA con tu imagen y tu voz.",
    incluye:["Estrategia y calendario mensual","Guiones con gancho, desarrollo y cierre","Avatar de IA con tu imagen o un personaje de marca","Edición de video vertical y subtítulos","Diseño de carruseles e historias","Revisión de métricas cada mes"],
    paquetes:[
      {id:"con-1",nombre:"Esencial",precio:180,per:"/mes",items:["8 piezas al mes","Guiones incluidos","1 ronda de cambios"]},
      {id:"con-2",nombre:"Crecimiento",precio:320,per:"/mes",feat:true,items:["16 piezas al mes","Videos con tu avatar de IA","Calendario y copys","2 rondas de cambios"]},
      {id:"con-3",nombre:"Dominio",precio:550,per:"/mes",items:["30 piezas al mes","Podcast con dos avatares","Historias diarias","Reporte de métricas"]}],
    faq:[["¿Necesito grabar yo?","No. Puedes grabar con tu celular siguiendo los guiones, o usar un avatar de IA con tu imagen y tu voz para no grabarte."],
      ["¿Cuánto cuesta crear el avatar?","Se crea una sola vez por $120 y desde ahí entra en tu paquete mensual. [dato a confirmar]"],
      ["¿Puedo usar la imagen de otra persona?","Solo con su autorización por escrito. Los avatares se hacen con tu imagen, con la de alguien que lo autorice o con personajes originales."],
      ["¿Se nota que es IA?","La calidad es muy alta, y aun así recomiendo indicar que es contenido hecho con IA. Las plataformas lo piden y genera confianza."],
      ["¿En qué redes publican?","Instagram, TikTok, Facebook y YouTube Shorts."]]},
  apps: { glyph:"♞", pieza:"Caballo", nota:"Salta los obstáculos",
    titulo:"Aplicaciones y webs", corto:"Landing pages, tiendas, apps web y automatizaciones.",
    largo:"Construyo la herramienta que tu negocio necesita: una página que vende, una tienda o una app a medida conectada con tus pagos y tus clientes.",
    incluye:["Diseño a medida en tu marca","Versión para celular","Pagos con tarjeta y Binance","Formularios y WhatsApp","Automatizaciones con IA","Soporte después de la entrega"],
    paquetes:[
      {id:"app-1",nombre:"Landing page",precio:250,per:"",items:["1 página de venta","Formulario y WhatsApp","Entrega en 7 días"]},
      {id:"app-2",nombre:"Web completa",precio:600,per:"",feat:true,items:["Hasta 6 páginas","Blog o catálogo","Pagos integrados"]},
      {id:"app-3",nombre:"App a medida",precio:1200,per:"",desde:true,items:["Usuarios y panel","Integraciones y API","Plan de mantenimiento"]}],
    gancho:"Tu negocio no cierra. Tu web tampoco debería.",
    // Tiempos de entrega por tipo [confirmar con Leo]
    tipos:[["Landing page","Una sola página para vender una oferta o recibir clientes por WhatsApp.","7 días"],
      ["Tienda online","Catálogo, carrito y pagos con tarjeta o Binance, lista para vender.","2 a 3 semanas"],
      ["App web a medida","Usuarios, panel de control y lo que tu negocio necesite para funcionar.","Desde 4 semanas"],
      ["Automatizaciones con IA","Respuestas, citas y seguimiento a clientes que se hacen solos.","1 a 2 semanas"]],
    pasos:[["Diagnóstico","20 minutos para entender qué vendes, a quién y qué necesitas que haga la web."],
      ["Diseño","Te muestro cómo se va a ver antes de construir nada."],
      ["Construcción","La armo con IA y la reviso pieza por pieza, en celular y computador."],
      ["Publicación","Queda en tu dominio, conectada a tus pagos y lista para recibir clientes."]],
    prueba:true,
    faq:[["¿Quién es dueño de la web?","Tú. Te entrego el dominio, el código y los accesos."],
      ["¿Necesito saber de tecnología?","No. Tú me cuentas qué vendes y cómo atiendes; yo me encargo de que funcione."],
      ["¿Puedo cobrar desde la web?","Sí, con tarjeta de débito o crédito y con Binance Pay."],
      ["¿Hacen mantenimiento?","Sí, con un plan mensual opcional después de la entrega."]]}
};

const PRODUCTS = [
  {id:"c1",tipo:"curso",titulo:"Meta Ads avanzado",desc:"Estructura de cuenta, API de conversiones, pruebas de creativos y cómo escalar sin que se dispare el costo por venta.",precio:12,dur:"3 h",nivel:"Avanzado",lecciones:["Estructura de cuenta que escala","Píxel y API de conversiones bien configurados","Pruebas de creativos: qué medir y cuándo cortar","Leer el embudo: gancho, retención, clic y venta","Retargeting por etapas","Sistema ADP: anuncios que siguen vendiendo meses","Escalar sin romper el costo por venta"]},
  {id:"c2",tipo:"curso",titulo:"Guiones que venden en 30 segundos",desc:"Ganchos, estructura y cierre para reels y TikToks que convierten.",precio:10,dur:"90 min",nivel:"Principiante",lecciones:["El gancho de 3 segundos","Estructura problema, solución y prueba","Llamados a la acción","20 plantillas listas"]},
  {id:"c3",tipo:"curso",titulo:"Avatares de IA para contenido",desc:"Crea un avatar, su voz y tus primeros videos sin grabarte.",precio:12,dur:"3 h",nivel:"Intermedio",lecciones:["Herramientas y costos","Crear tu avatar","Voz y guion","Formato podcast dual","Publicar y medir"]},
  {id:"c5",tipo:"curso",titulo:"Crea aplicaciones con IA en un día",desc:"En un solo día aprendes a construir apps con IA sin saber programar, listas para venderlas a negocios y empresas.",precio:12,dur:"1 día",nivel:"Principiante",lecciones:["Qué apps puedes construir y con qué herramientas","Cómo pedirle una app a la IA para que salga bien","Tu primera app con usuarios y datos","Cobros dentro de la app","Publicarla y entregarla a tu cliente","Mejorarla con lo que te piden tus clientes"],
    porque:"Sales el mismo día con tu primera app funcionando y una habilidad que las empresas pagan."},
  {id:"c4",tipo:"curso",titulo:"Copywriting para anuncios",desc:"Textos que hacen clic: fórmulas, pruebas y ejemplos reales.",precio:10,dur:"75 min",nivel:"Principiante",lecciones:["Fórmulas AIDA y PAS","Titulares","Pruebas de copy"]},
  {id:"p1",tipo:"programa",titulo:"Programa Estratega Digital",desc:"Marca, contenido, anuncios y ventas en 8 semanas, con mentorías en vivo para que salgas con tu sistema funcionando.",precio:15,dur:"8 semanas",nivel:"Completo",lecciones:["Semana 1: Posicionamiento","Semana 2: Oferta irresistible","Semana 3: Sistema de contenido","Semana 4: Avatar de IA","Semana 5: Meta Ads","Semana 6: Embudo y WhatsApp","Semana 7: Escalar","Semana 8: Vender servicios"]},
  {id:"p2",tipo:"programa",titulo:"Agencia de Contenido con IA",desc:"Monta, empaqueta y vende servicios de contenido con IA en 6 semanas.",precio:14,dur:"6 semanas",nivel:"Intermedio",lecciones:["Nicho y oferta","Herramientas","Producción en lote","Precios y propuestas","Conseguir clientes","Entrega y retención"]},
  {id:"e1",tipo:"ebook",titulo:"Copy que vende",desc:"Fórmulas de copy que convierten y por qué funcionan, ganchos listos para usar y el manual para que la IA escriba como un copywriter.",precio:5,dur:"Fórmulas + ganchos + manual IA",nivel:"PDF"},
  {id:"e2",tipo:"ebook",titulo:"Ser un buen jefe",desc:"Liderar sin plantillas: cómo dirigir un equipo pequeño sin copiar los estereotipos del jefe tradicional.",precio:3,dur:"Lectura completa",nivel:"PDF"},
  {id:"k1",tipo:"kit",titulo:"Cerebro de Marketing IA",desc:"Mis asistentes de IA listos para copiar: Marketing Brain, copywriter, diseñador y director de contenido en formatos de video.",precio:10,dur:"5 asistentes",nivel:"Prompts"},
  {id:"e3",tipo:"ebook",titulo:"Marketing 47 en 1",desc:"Los 47 pensadores más importantes del marketing y la persuasión, reunidos en una sola conversación donde debaten sus ideas.",precio:5,dur:"Preventa",nivel:"PDF",pronto:true},
  {id:"e4",tipo:"ebook",titulo:"Vender es manipular",desc:"Sí, y te lo demuestro: entender al ser humano, su naturaleza y la comunicación, sin fórmulas de gurú.",precio:3,dur:"Preventa",nivel:"PDF",pronto:true},
  {id:"e5",tipo:"ebook",titulo:"Sistema ADP",desc:"Activos Digitales Persistentes: contenido que sigue trayendo clientes meses después, en vez de morir en 24 horas.",precio:5,dur:"Lectura corta",nivel:"PDF",pronto:true,
    porque:"Un sistema de pauta evergreen: contenido que sigue atrayendo clientes mientras tú haces otra cosa."},
  {id:"e6",tipo:"ebook",titulo:"El maldito branding",desc:"Qué vendes, a quién y por qué importa: la base que va antes de cualquier campaña.",precio:3,dur:"Preventa",nivel:"PDF",pronto:true},
  {id:"e7",tipo:"ebook",titulo:"Ser autosuficiente",desc:"Cómo vivir de tus habilidades: elegir una, volverte bueno y convertirla en ingresos.",precio:3,dur:"Preventa",nivel:"PDF",pronto:true}
];
const TIPO_LABEL = {curso:"Curso corto",programa:"Programa",ebook:"Ebook",kit:"Kit de IA",herramienta:"Herramienta"};
/* Página de cada producto: gancho, dolores, antes/después, módulos con resultado, para quién y preguntas propias */
const PAG = {
  c5:{gancho:"Aprende a construir apps con IA y véndelas a negocios.",
    dolores:["Quieres generar ingresos con algo que las empresas paguen de verdad.","Ves negocios que llevan todo en papel o en Excel y sabes que una app se lo resolvería.","Aprender a programar te tomaría años.","Probaste la IA, pero te dio código que no sabes dónde poner."],
    puente:"Las empresas pagan por apps que les ahorran trabajo. Con IA, tú puedes hacerlas en un día.",
    antes:[["Aprender a programar te tomaría años.","Construyes apps con IA desde el primer día."],["Una app te tomaría meses.","Entregas tu primera app en un día."],["No tienes nada que mostrarle a un cliente.","Sales con tu primera app para tu portafolio."]],
    mods:[["Qué apps puedes construir y con qué herramientas","Reservas, inventario, cotizaciones, citas o atención al cliente: las apps que más piden los negocios y las herramientas justas para hacerlas.","Sabes qué app ofrecer antes de tocar nada."],
      ["Cómo pedirle una app a la IA para que salga bien","La forma de describir lo que quieres para que la IA lo construya completo y no a pedazos.","Tu primera app sale funcionando."],
      ["Tu primera app con usuarios y datos","Construyes una app que guarda información, tiene usuarios y funciona en celular y computador.","Tienes tu primera app lista para mostrar."],
      ["Cobros dentro de la app","Conectas pagos con tarjeta y Binance para que la app cobre sola.","Sabes armar apps que venden."],
      ["Publicarla y entregarla a tu cliente","La subes a internet y se la entregas a tu cliente con su propio enlace.","Sabes entregar una app funcionando."],
      ["Mejorarla con lo que te piden tus clientes","Cómo hacer cambios rápidos cada vez que tu cliente los pida.","Puedes mantenerla y cobrar por cada mejora."]],
    para:["Eres joven y quieres una habilidad que las empresas paguen.","Eres freelancer y quieres sumar apps a tus servicios.","Estudias diseño, marketing o sistemas y quieres cobrar por proyectos."],
    sin:["Saber programar","Haber usado IA antes","Estudiar una carrera de sistemas","Instalar programas complicados"],
    prueba:true,
    faq:[["¿De verdad en un día?","Las lecciones se ven en una tarde y tu primera app sale ese mismo día. Los cobros y la publicación pueden tardar más si tu banco o tu proveedor demoran en aprobarlos."],["¿Qué herramientas vamos a usar?","Las vemos en la primera lección, junto con lo que cuesta cada una."]]},
  c1:{gancho:"Si escalas y el costo por venta se dispara, el problema está en la estructura.",
    dolores:["Subes el presupuesto y la campaña se rompe.","No sabes si falló el creativo o falló la segmentación.","El píxel reporta ventas que no cuadran con tu caja.","Apagas anuncios por intuición, no por datos."],
    puente:"Más presupuesto no arregla una cuenta mal armada. La multiplica.",
    antes:[["Pruebas al azar y apagas por intuición.","Mides gancho, retención, clic y venta, y cortas con criterio."],["Escalar te sube el costo por venta.","Escalas por etapas sin romper lo que funciona."],["El píxel pierde conversiones.","Píxel y API de conversiones bien conectados."]],
    para:["Ya pautas en Meta y quieres pasar de probar a escalar.","Manejas cuentas de clientes y necesitas un método repetible.","Vendes online y tu costo por venta no baja."],
    req:["Haber lanzado campañas antes","Acceso a tu Business Manager"],
    faq:[["¿Incluye el Sistema ADP?","Sí. Es una de las lecciones del curso: cómo convertir tus mejores piezas en anuncios que siguen vendiendo meses."]]},
  c2:{gancho:"Tienes 3 segundos. Casi todos los gastan diciendo hola.",
    dolores:["Publicas y los videos se quedan en 200 vistas.","Te sientas a grabar y no sabes cómo empezar.","Tus videos gustan, pero nadie compra.","Copias tendencias que no tienen nada que ver con lo que vendes."],
    puente:"No te falta carisma. Te falta estructura.",
    antes:[["Empiezas presentándote.","Abres con un gancho que frena el scroll."],["Cuentas todo y nadie llega al final.","Problema, solución y prueba en 30 segundos."],["Cierras con un “síguenme”.","Cierras con una acción concreta."]],
    para:["Creas contenido para tu negocio y quieres que venda.","Eres community manager y escribes guiones para clientes.","Quieres empezar en reels sin improvisar."],
    sin:["Tener seguidores","Equipo de grabación","Experiencia escribiendo"]},
  c3:{gancho:"Publica todas las semanas sin ponerte frente a la cámara.",
    dolores:["Sabes que debes publicar video, pero grabarte te paraliza.","No tienes tiempo de grabar, editar y repetir.","Tu contenido depende de que tengas un buen día.","Viste avatares de IA, pero no sabes cuánto cuestan ni por dónde empezar."],
    puente:"Tu contenido no debería depender de tu agenda.",
    antes:[["Grabas, repites y editas por horas.","Escribes el guion y tu avatar lo graba."],["Publicas cuando puedes.","Produces en lote y publicas con constancia."],["No sabes qué herramienta elegir.","Herramientas y costos claros desde la primera clase."]],
    para:["No te gusta grabarte pero necesitas video.","Tienes una marca y quieres más volumen de contenido.","Quieres ofrecer contenido con avatar a tus clientes."],
    sin:["Cámara ni micrófono profesional","Saber editar","Experiencia con IA"]},
  c4:{gancho:"Tu anuncio no falla por el diseño. Falla por lo que dice.",
    dolores:["Escribes el anuncio y suena igual al de tu competencia.","Te cuesta más el titular que todo el anuncio.","Cambias la imagen diez veces y el texto nunca.","Le pides textos a la IA y salen genéricos."],
    puente:"Escribir un anuncio que vende es un método. Se aprende.",
    antes:[["Escribes lo primero que se te ocurre.","Usas AIDA o PAS según el momento del cliente."],["Un solo texto y a esperar.","Pruebas versiones y te quedas con la que gana."],["Titulares planos.","Titulares que hacen detenerse."]],
    para:["Pautas tus propios anuncios.","Escribes para clientes y quieres un método.","Vendes en redes y tus textos no convierten."],
    sin:["Ser escritor","Experiencia en publicidad"]},
  p1:{gancho:"Ocho semanas para dejar de improvisar tu marketing.",
    dolores:["Haces un poco de todo y nada termina de funcionar.","Publicas, pautas y vendes sin un sistema que lo conecte.","Cada curso que compras te deja otra pieza suelta.","Sabes qué hacer, pero nadie revisa si lo estás haciendo bien."],
    puente:"Las piezas sueltas no venden. El sistema sí.",
    antes:[["Tácticas sueltas.","Un sistema de marca, contenido, anuncios y ventas."],["Aprendes solo y te trabas.","Mentorías en vivo para corregir sobre la marcha."],["Terminas el curso y no aplicas.","Sales con tu sistema funcionando."]],
    para:["Tienes un negocio y quieres un sistema completo.","Quieres trabajar como estratega digital.","Ya probaste cursos sueltos y te faltó unirlos."],
    sin:["Experiencia previa","Un equipo de marketing"]},
  p2:{gancho:"Vende contenido con IA como servicio, no como pasatiempo.",
    dolores:["Sabes usar IA pero no sabes cobrar por eso.","No sabes qué paquete ofrecer ni cuánto cobrar.","Produces cada video desde cero y no escalas.","Consigues un cliente y no sabes cómo retenerlo."],
    puente:"Las herramientas son la parte fácil. Lo difícil es empaquetar, cobrar y retener.",
    antes:[["Haces trabajos sueltos.","Tienes una oferta y paquetes claros."],["Cada pieza desde cero.","Produces en lote."],["Cobras lo que te ofrecen.","Precios y propuestas con criterio."]],
    para:["Creas contenido con IA y quieres convertirlo en negocio.","Eres freelancer y quieres montar tu agencia.","Tienes una agencia y quieres sumar contenido con IA."],
    sin:["Oficina ni empleados","Experiencia en ventas"]},
  e1:{gancho:"Las fórmulas que uso para escribir anuncios, listas para copiar.",
    venta:"Escribir un anuncio que vende no depende de la inspiración. Depende de saber qué fórmula usar y en qué momento. Aquí tienes las que uso para escribir mis anuncios, explicadas para que entiendas por qué funcionan, ganchos listos para copiar y el manual para que tu IA deje de escribir como robot. Lo abres, eliges la fórmula y escribes.",
    dolores:["Te quedas en blanco frente a la hoja.","Tus textos suenan a los de todos los demás.","La IA te escribe cosas que nadie diría."],
    puente:"Con la fórmula correcta, escribir deja de depender de la inspiración.",
    dentro:["Fórmulas de copy que convierten y por qué funcionan","Ganchos listos para usar","El manual para que tu IA escriba como un copywriter"],
    para:["Escribes tus propios anuncios y publicaciones.","Quieres que tu IA escriba mejor."]},
  e2:{gancho:"Nadie te enseñó a dirigir. Igual te toca hacerlo.",
    venta:"A nadie le enseñan a dirigir. Te toca un equipo y terminas copiando al jefe que tuviste, aunque no te gustara. Este ebook te da otra forma de liderar un equipo pequeño, sin plantillas ni estereotipos del jefe tradicional, para que tu gente trabaje contigo y tú dejes de hacer el trabajo de todos.",
    dolores:["Tienes tu primer equipo y nadie te enseñó a dirigirlo.","Copias al jefe que tuviste y no te gusta el resultado.","Terminas haciendo el trabajo de todos."],
    puente:"Dirigir bien no es copiar al jefe que tuviste.",
    dentro:["Cómo dirigir un equipo pequeño sin plantillas","Por qué los estereotipos del jefe tradicional te juegan en contra"],
    para:["Diriges un equipo pequeño.","Vas a contratar a tu primera persona."]},
  k1:{gancho:"Mis asistentes de IA, listos para trabajar para ti.",
    dolores:["Le preguntas a la IA y te responde como a todo el mundo.","Explicas tu negocio cada vez que abres un chat.","Sabes que la IA puede más, pero no sabes cómo entrenarla."],
    puente:"La IA responde según cómo la entrenas. Estos asistentes ya vienen entrenados.",
    dentro:["Marketing Brain","Copywriter","Diseñador","Director de contenido en formatos de video"],
    para:["Usas ChatGPT, Claude o Gemini para tu marketing.","Quieres resultados profesionales sin escribir prompts desde cero."]},
  e3:{gancho:"47 pensadores del marketing en una sola conversación.",
    venta:"Leer a los grandes del marketing te tomaría años, y al final cada uno te diría algo distinto. Aquí los 47 pensadores más importantes del marketing y la persuasión se sientan en la misma conversación y debaten. Ves dónde coinciden, dónde chocan y con qué idea te quedas tú.",
    dolores:["Leíste resúmenes de libros y no recuerdas nada.","Cada autor dice algo distinto y no sabes a quién creerle."],
    puente:"Las ideas se entienden mejor cuando chocan.",
    dentro:["Los 47 pensadores más importantes del marketing y la persuasión","Sus ideas enfrentadas en un mismo debate"],
    para:["Quieres entender el marketing desde sus bases.","Te gusta aprender comparando ideas."]},
  e4:{gancho:"Sí, vender es manipular. Te lo demuestro.",
    venta:"Si te incomoda vender porque sientes que presionas, este ebook te cambia la pregunta. Toda venta influye en una decisión. La diferencia está en si entiendes a la persona o le recitas un guion. Aquí ves cómo decide el ser humano, qué lo mueve y cómo comunicarte sin fórmulas de gurú.",
    dolores:["Te incomoda vender porque sientes que presionas.","Los cursos de ventas te dan guiones que suenan falsos."],
    puente:"Si entiendes cómo decide una persona, dejas de necesitar guiones.",
    dentro:["Cómo decide el ser humano cuando compra","Naturaleza y comunicación, sin fórmulas de gurú"],
    para:["Vendes y quieres entender por qué la gente compra.","Te cansaron las fórmulas de gurú."]},
  e5:{gancho:"Contenido que sigue vendiendo meses después de publicarlo.",
    venta:"Casi todos publican a diario y cada pieza muere en 24 horas. El Sistema ADP convierte tu mejor contenido en activos: lo publicas, lo pruebas con poca pauta, escalas lo que gana y lo reciclas para que siga atrayendo clientes durante meses. Es el método que enseño dentro de Meta Ads avanzado, en una lectura corta para aplicarlo esta semana.",
    dolores:["Publicas todos los días y cada post muere en 24 horas.","Pautas cada pieza desde cero.","Tu contenido depende de que tú sigas produciendo."],
    puente:"Si tu contenido caduca en un día, trabajas para el algoritmo. Con ADP, tu contenido trabaja para ti.",
    antes:[["Cada post muere en 24 horas.","Cada pieza se vuelve un activo que dura meses."],["Pautas al azar.","Pruebas con pauta moderada y escalas lo que gana."],["Produces sin parar.","Reciclas y acumulas activos."]],
    dentro:["Crear cada pieza con intención publicitaria","Publicar orgánico y probar con pauta moderada","Escalar las ganadoras como anuncios permanentes","Reciclar cada 30 a 90 días","Sumar de 5 a 10 activos trabajando a la vez"],
    para:["Creas contenido y sientes que no rinde.","Pautas y quieres anuncios que duren.","Tienes poco tiempo para producir."],
    faq:[["¿Lo veo también en Meta Ads avanzado?","Sí, el curso lo incluye como una de sus lecciones. El ebook te lo deja por escrito para consultarlo cuando lo necesites."],
      ["¿También existe como skill?",`Sí. El método va dentro de la skill Trafficker digital, en la <a href="#plataformas">Biblioteca de skills</a>, para que tu IA lo aplique por ti.`]]},
  e6:{gancho:"Antes de cualquier campaña: qué vendes, a quién y por qué le importa.",
    venta:"Cuando una campaña no despega, casi nunca es culpa del anuncio. Es que no está claro qué vendes, a quién y por qué debería importarle. Este ebook resuelve esa base para que dejes de gastar en pauta que empieza de cero cada vez.",
    dolores:["Lanzas campañas y no sabes por qué no funcionan.","Tu marca dice lo mismo que todas."],
    puente:"Sin base, cada campaña empieza de cero.",
    dentro:["Qué vendes de verdad","A quién se lo vendes","Por qué le debería importar"],
    para:["Vas a lanzar tu marca.","Tu marketing no despega y sospechas que falta la base."]},
  e7:{gancho:"Vive de lo que sabes hacer.",
    venta:"Sabes hacer muchas cosas y no cobras por ninguna. Este ebook te ayuda a elegir una habilidad, volverte bueno en ella y convertirla en ingresos, para que dejes de depender de un sueldo que no controlas.",
    dolores:["Sabes hacer muchas cosas y no cobras por ninguna.","Dependes de un sueldo que no controlas."],
    puente:"Una habilidad bien elegida vale más que diez a medias.",
    dentro:["Elegir una habilidad","Volverte bueno en ella","Convertirla en ingresos"],
    para:["Quieres generar ingresos con tus habilidades.","Estás empezando y no sabes por cuál apostar."]}
};
const TIPO_ESTE = {curso:"este curso",programa:"el programa",ebook:"el ebook",kit:"el kit",herramienta:"la herramienta"};

/* ---------- utilidades ---------- */
const $ = (s,el=document)=>el.querySelector(s);
const $$ = (s,el=document)=>Array.from(el.querySelectorAll(s));
const esc = s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const PIECE = {"♛":"queen","♜":"rook","♝":"bishop","♞":"knight","♚":"king","♟":"pawn"};
const SVGP = c=>`<svg class="pc" aria-hidden="true"><use href="#pc-${PIECE[c]||"pawn"}"/></svg>`;
const G = c=>`<span class="glyph">${SVGP(c)}</span>`;
const money = (n,d=0)=>"$"+Number(n).toLocaleString("es-EC",{minimumFractionDigits:d,maximumFractionDigits:d});
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const HAS_GSAP = typeof gsap!=="undefined" && typeof ScrollTrigger!=="undefined";
const store = {
  get(k,def){try{const v=localStorage.getItem(k);return v==null?def:JSON.parse(v)}catch(e){return def}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},
  del(k){try{localStorage.removeItem(k)}catch(e){}}
};
function toast(msg){const t=document.createElement("div");t.className="toast";t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)}
function copyText(text,btn){
  const done=()=>{const o=btn.textContent;btn.textContent="Copiado";setTimeout(()=>btn.textContent=o,1600)};
  const fb=()=>{const code=btn.previousElementSibling;const r=document.createRange();r.selectNodeContents(code);const s=getSelection();s.removeAllRanges();s.addRange(r);toast("Texto seleccionado: cópialo con Ctrl+C")};
  try{navigator.clipboard.writeText(text).then(done).catch(fb)}catch(e){fb()}
}
function allItems(){
  const out={};
  PRODUCTS.forEach(p=>out[p.id]={id:p.id,nombre:p.titulo,tipo:TIPO_LABEL[p.tipo],precio:p.precio,per:"",link:p.link});
  Object.values(SERVICES).forEach(s=>s.paquetes.forEach(pk=>out[pk.id]={id:pk.id,nombre:`${s.titulo}: ${pk.nombre}`,tipo:"Servicio",precio:pk.precio,per:pk.per,desde:pk.desde,link:pk.link}));
  out.ana={id:"ana",nombre:"Analizador de campañas Meta Ads",tipo:"Herramienta",precio:CONFIG.analizador.precio,per:""};
  return out;
}
/* Imagen con respaldo hecho con código */
function media(key,fallbackHtml,extra=""){
  return `<div class="media vignette" data-asset="${key}" ${extra}><div class="fallback">${fallbackHtml}</div></div>`;
}
function hydrateMedia(root=document){
  $$("[data-asset]",root).forEach(box=>{
    const src=CONFIG.assets[box.dataset.asset];
    if(src){
      const img=new Image(); img.alt=""; img.decoding="async";
      img.onload=()=>{box.prepend(img);box.classList.add("has-img");if(HAS_GSAP) ScrollTrigger.refresh()};
      img.src=src;
    }
    const vsrc=CONFIG.videos&&CONFIG.videos[box.dataset.asset];
    if(vsrc&&!REDUCED){
      const v=document.createElement("video"); v.muted=true; v.loop=true; v.playsInline=true; v.autoplay=true; v.preload="auto"; v.setAttribute("muted","");
      v.addEventListener("loadeddata",()=>{box.insertBefore(v,box.querySelector(".fallback"));box.classList.add("has-img");v.play().catch(()=>{})});
      v.src=vsrc;
    }
  });
}
function splitWords(el){el.innerHTML=el.textContent.trim().split(/\s+/).map(w=>`<span class="w">${esc(w)}</span>`).join(" ")}
function splitChars(el){el.innerHTML=Array.from(el.textContent).map(c=>c===" "?" ":`<span class="ch">${esc(c)}</span>`).join("")}

/* ---------- portada inmersiva ---------- */
function boardFallback(){
  const pieces={0:"♜",1:"♞",2:"♝",3:"♛",4:"♚",5:"♝",6:"♞",7:"♜",8:"♟",9:"♟",10:"♟",11:"♟",12:"♟",13:"♟",14:"♟",15:"♟",27:"♟r",35:"♞r",36:"♟r"};
  let h=""; for(let i=0;i<64;i++){const r=Math.floor(i/8),f=i%8, p=pieces[i];
    h+=`<span class="${(r+f)%2?"d":""}">${p?`<b class="glyph ${p.endsWith("r")?"r":""}">${SVGP(p[0])}</b>`:""}</span>`}
  return `<div class="board3d"><div class="plane" id="plane">${h}</div><div class="spot"></div></div>`;
}
function rain(list){return `<div class="pieces-rain" aria-hidden="true">${list.map(([g,x,y,s,c,rot,sp])=>`<span class="glyph" data-speed="${sp}" style="left:${x}%;top:${y}%;--s:${s}rem;--c:${c};transform:rotate(${rot}deg)">${SVGP(g)}</span>`).join("")}</div>`}
function viewHome(){
  return `
  <section class="hero" id="hero">
    ${media("hero",boardFallback(),'id="heroMedia"')}
    <div class="hero-copy wrap">
      <div class="stack" style="gap:22px">
        <h1 class="big" id="heroTitle" aria-label="Desconocido.">Desconocido.</h1>
        <div class="stack" style="gap:10px;max-width:52ch">
          <p class="sub" style="font-size:clamp(1.25rem,2.2vw,1.7rem);font-weight:700;line-height:1.25;max-width:none">Tu cliente no elige a la mejor empresa.<br>Elige a la que reconoce.</p>
          <p class="muted">Publicidad en Meta, contenido, avatares de IA y apps para que tu marca sea la que reconocen. Y una academia si prefieres aprender a jugar tú.</p>
        </div>
      </div>
    </div>
  </section>
  <button class="nav-down" id="navDown" type="button" aria-label="Navegar al siguiente bloque">Navega<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 4v15M6 13l6 6 6-6"/></svg></button>

  <div class="marquee" aria-hidden="true"><div class="t">${Array(2).fill(`<span>Estrategia</span><span style="color:#000">${SVGP("♞")}</span><span>Meta Ads</span><span style="color:#000">${SVGP("♛")}</span><span>Contenido</span><span style="color:#000">${SVGP("♜")}</span><span>Avatar de IA</span><span style="color:#000">${SVGP("♝")}</span><span>Aplicaciones</span><span style="color:#000">${SVGP("♚")}</span>`).join("")}</div></div>

  <section class="chapter" id="ch-vendado">
    ${media("vendado",`<div style="position:absolute;inset:0;background:repeating-conic-gradient(#1d1c1b 0 25%,#0c0c0c 0 50%) 0 0/22vmax 22vmax;opacity:.7;transform:perspective(900px) rotateX(35deg) scale(1.6)"></div>`,'data-parallax="0.18"')}
    ${rain([["♞",72,18,9,"var(--red)",-24,.5],["♟",86,62,5,"var(--red)",18,.8],["♜",8,70,6,"#000",-8,.35],["♝",60,78,4,"var(--red)",40,1],["♟",20,12,3.5,"#ECE9E3",-30,.65]])}
    <div class="copy wrap">
      <div class="stack" style="gap:24px;max-width:780px">
        <span class="chapter-num">I · Apertura</span>
        <h2 class="big">Con los ojos <span class="red">vendados</span></h2>
        <p class="lede reveal">La mayoría hace marketing a ciegas: publica sin plan, paga anuncios sin leer las métricas y espera que algo funcione.</p>
      </div>
    </div>
  </section>

  <section class="chapter" id="ch-hilos">
    ${media("hilos",`<div style="position:absolute;inset:0;background:radial-gradient(40% 40% at 50% 70%,#2a1412,#0a0a0a 70%)"></div>`,'data-parallax="0.12"')}
    <div class="copy wrap" style="text-align:right">
      <div class="stack" style="gap:24px;max-width:820px;margin-left:auto;align-items:flex-end">
        <span class="chapter-num">II · Medio juego</span>
        <h2 class="big">El algoritmo mueve <span class="outline">los hilos</span></h2>
        <p class="lede reveal">Las redes deciden qué ves, cuánto pagas y a quién le llegas. Aprende a mover los hilos tú, en vez de que te muevan a ti.</p>
      </div>
    </div>
  </section>

  <section class="welcome" id="bienvenida">
    <div class="wrap">
      <div class="reel" id="reel">
        <div class="reel-fallback">Video de bienvenida</div>
        <button class="sound" id="soundBtn" type="button" aria-label="Activar sonido del video de bienvenida"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg><span>Escúchame</span></button>
      </div>
      <div class="stack" style="gap:20px">
        <h2>Bienvenido<span class="red">.</span></h2>
        <p class="lede muted">Dale sonido. Son 10 segundos y te digo por dónde empezar.</p>
        <div class="row"><a class="btn magnetic" href="#servicios">Ver servicios</a><a class="btn ghost magnetic" href="#academia">Entrar a la academia</a></div>
      </div>
    </div>
  </section>

  <section class="hscroll" id="hsSvc">
    ${media("servicios",`<div style="position:absolute;inset:0;background:#0a0a0a"></div>`,'id="svcBg"')}
    <div class="hs-head wrap stack" style="gap:14px">
      <span class="chapter-num">IV · Las piezas</span>
      <h2 class="big" style="font-size:clamp(3rem,8vw,7rem)">Tres piezas <span class="serif red">para ganar</span></h2>
    </div>
    <div class="hs-track" id="hsTrack">
      ${Object.entries(SERVICES).map(([k,s])=>`<a class="svc" href="#${k}">
        ${media("pz-"+k,`${G(s.glyph)}`)}
        <div class="info"><span class="note">${s.pieza} · ${s.nota}</span><h3>${s.titulo}</h3><p class="muted">${s.corto}</p></div>
      </a>`).join("")}
      <a class="svc" href="#servicios" style="display:grid;place-items:center;background:var(--red);border-color:var(--red)"><div class="stack" style="gap:10px;text-align:center;padding:24px"><span class="big" style="font-size:3.4rem;color:#fff">Ver todo</span><span style="color:#fff">Paquetes y precios →</span></div></a>
    </div>
  </section>

  <section class="band alt"><div class="wrap stack" style="gap:32px">
    <div class="row" style="justify-content:space-between;align-items:end">
      <div class="stack" style="gap:12px"><span class="chapter-num">V · Academia</span><h2 class="big" style="font-size:clamp(3rem,8vw,6.5rem)">Aprende rápido y <span class="serif red">entrena a tu IA</span></h2><p class="muted lede">Cursos cortos para una habilidad concreta, programas con mentorías y ebooks para consultar cuando lo necesites.</p></div>
      <a class="btn ghost magnetic" href="#academia">Ver la academia</a>
    </div>
    <div class="grid3">${["c1","p1","k1"].map(id=>productCard(PRODUCTS.find(p=>p.id===id))).join("")}</div>
  </div></section>

  <section class="band"><div class="wrap split" style="align-items:center">
    <div class="stack" style="gap:16px"><span class="chapter-num">VI · Herramienta para estudiantes</span><h2 class="big" style="font-size:clamp(2.8rem,6vw,5rem)">Analizador de Meta Ads</h2>
      <p class="muted lede">Sube el reporte del Administrador de anuncios y recibe un veredicto por campaña: qué pausar, qué corregir y qué escalar.</p>
      <div class="row"><a class="btn magnetic" href="#analizador">Conocer el analizador</a><span class="muted">Incluido para estudiantes · o ${money(CONFIG.analizador.precio)} USD aparte</span></div></div>
    <div class="stack" style="gap:12px">
      ${[["mate","Jaque mate","Pausar. Pierde dinero o no da resultados."],["jaque","Jaque","Ajustar. Tiene un problema que se puede corregir."],["buena","Buena jugada","Escalar. Rinde mejor que tu objetivo."]].map(([c,t,d])=>`<div class="row" style="gap:14px;flex-wrap:nowrap;padding:16px 18px;border:1px solid var(--line);border-radius:var(--r)"><span class="chip ${c}">${t}</span><span class="muted">${d}</span></div>`).join("")}
    </div>
  </div></section>

  <section class="exit" id="ch-salida">
    ${media("salida",`<div style="position:absolute;inset:0;background:radial-gradient(30% 35% at 70% 50%,rgba(215,38,30,.35),transparent 70%),#0a0a0a"></div>`,'data-parallax="0.15"')}
    <div class="copy wrap" style="position:relative;z-index:2;padding-block:120px">
      <div class="stack" style="gap:26px;max-width:860px">
        <span class="chapter-num">VII · Final</span>
        <h2 class="big">Tu salida del <span class="red">juego de siempre</span></h2>
        <p class="lede">Presiona <button class="esc-key" id="escKey" aria-label="Tecla Escape: ir a servicios">Esc</button> y empecemos tu estrategia.</p>
        <div class="row"><a class="btn magnetic wa-cta" href="#servicios" target="_blank" rel="noopener">Agenda tu diagnóstico de 20 minutos</a><span class="muted">WhatsApp ${esc(CONFIG.contacto.whatsapp)}</span></div>
      </div>
    </div>
  </section>`;
}
let lenis=null;
const portrait=matchMedia("(max-aspect-ratio: 1/1)");
const HERO_V_START=3.5;
function mountHome(){
  const t=$("#heroTitle"); splitChars(t); t.lastElementChild.classList.add("red"); if(t.textContent.startsWith("¿")) t.firstElementChild.classList.add("red");
  // La palabra de portada siempre en una línea: si no cabe, se achica hasta caber
  const fitTitle=()=>{ if(!t.isConnected){removeEventListener("resize",fitTitle);return} t.style.fontSize=""; t.style.whiteSpace="nowrap";
    const w=t.clientWidth, sw=t.scrollWidth; if(sw>w) t.style.fontSize=(parseFloat(getComputedStyle(t).fontSize)*w/sw*.98)+"px" };
  fitTitle(); if(document.fonts) document.fonts.ready.then(fitTitle); addEventListener("resize",fitTitle);
  // Navegar: baja al siguiente bloque y se desvanece cuando ese bloque entra en pantalla
  const nd=$("#navDown"), next=$("#ch-vendado");
  if(nd&&next){
    nd.addEventListener("click",()=>{ if(lenis) lenis.scrollTo(next,{offset:0}); else next.scrollIntoView({behavior:REDUCED?"auto":"smooth"}) });
    const fade=()=>{ if(!nd.isConnected){removeEventListener("scroll",fade);return} nd.classList.toggle("gone",next.getBoundingClientRect().top<innerHeight*.88) };
    addEventListener("scroll",fade,{passive:true}); fade();
  }
  $$(".reveal").forEach(splitWords);
  // Video de portada si existe
  const hm=$("#heroMedia");
  if(CONFIG.assets.heroVideo){
    const v=document.createElement("video"); v.muted=true; v.playsInline=true; v.preload="auto"; v.loop=false; v.setAttribute("muted","");
    v.className="main";
    // Copia difuminada detrás, para que el video 16:9 se vea completo en pantallas verticales
    const vb=document.createElement("video"); vb.className="blur"; vb.muted=true; vb.playsInline=true; vb.preload="auto"; vb.setAttribute("muted",""); vb.setAttribute("aria-hidden","true");
    v.addEventListener("loadeddata",()=>{hm.prepend(v);hm.prepend(vb);hm.classList.add("has-img");hm.dataset.video="1";
      // En la versión vertical el caballo aparece hacia el segundo 3.5: arrancamos ahí para que se vea de entrada
      if(hm.dataset.orient==="v"){
        // Celular: sin depender del scroll, se reproduce solo y repite desde que aparece el caballo
        if(v.currentTime<HERO_V_START) v.currentTime=HERO_V_START; v.play().catch(()=>{}); return }
      if(REDUCED||!HAS_GSAP){v.loop=true;vb.loop=true;v.play().catch(()=>{});vb.play().catch(()=>{})} });
    // Si el teléfono bloquea la reproducción automática (ahorro de datos), arranca al primer toque
    addEventListener("touchstart",()=>{ if(hm.dataset.orient==="v"&&v.paused) v.play().catch(()=>{}) },{once:true,passive:true});
    v.addEventListener("ended",()=>{ if(hm.dataset.orient==="v"){v.currentTime=HERO_V_START;v.play().catch(()=>{})} });
    // Celular: versión vertical 9:16 a pantalla completa. Computador: versión horizontal 16:9.
    const pickHero=()=>{const vert=portrait.matches&&CONFIG.assets.heroVideoVertical;
      const src=vert?CONFIG.assets.heroVideoVertical:CONFIG.assets.heroVideo;
      hm.dataset.orient=vert?"v":"h"; if(v.getAttribute("src")!==src){v.src=src;vb.src=src}};
    pickHero(); portrait.addEventListener("change",pickHero); hm._video=v; hm._blur=vb;
  }
  hydrateMedia($("#app"));
  $("#escKey").addEventListener("click",()=>{location.hash="servicios"});
  // Bienvenida: arranca en silencio al verse; el botón activa el sonido desde el inicio
  const reel=$("#reel"), sb=$("#soundBtn");
  if(reel&&CONFIG.videos.bienvenida){
    const rv=document.createElement("video"); rv.muted=true; rv.playsInline=true; rv.loop=true; rv.preload="auto"; rv.setAttribute("muted","");
    rv.addEventListener("loadeddata",()=>{reel.classList.add("has-video"); if(rv.paused&&rv.currentTime===0) rv.currentTime=1.2});
    rv.src=CONFIG.videos.bienvenida; reel.prepend(rv);
    new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ if(!REDUCED||!rv.muted) rv.play().catch(()=>{}) } else rv.pause() }),{threshold:.4}).observe(reel);
    sb.addEventListener("click",()=>{ const on=rv.muted; rv.muted=!on; if(on){rv.currentTime=0;rv.play().catch(()=>{})}
      reel.classList.toggle("unmuted",on); sb.querySelector("span").textContent=on?"Silenciar":"Escúchame";
      sb.setAttribute("aria-label",on?"Silenciar video de bienvenida":"Activar sonido del video de bienvenida") });
  } else if(sb) sb.hidden=true;
  // Botones de diagnóstico: abren WhatsApp con un mensaje listo
  const wa="https://wa.me/"+CONFIG.contacto.whatsapp.replace(/\D/g,"")+"?text="+encodeURIComponent("Hola, quiero agendar mi diagnóstico de 20 minutos.");
  $$("#heroCta, .wa-cta").forEach(a=>a.href=wa);
  if(!HAS_GSAP||REDUCED){$$(".reveal .w").forEach(w=>w.style.opacity=1);return}

  // Portada animada con el scroll solo en pantallas horizontales; en celular queda fija y el video corre solo
  gsap.matchMedia().add("(min-aspect-ratio: 1/1)",()=>{
    gsap.from("#heroTitle .ch",{yPercent:110,rotate:8,opacity:0,stagger:.06,duration:1.1,ease:"expo.out",delay:.15});
    const tl=gsap.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"+=120%",scrub:.6,pin:true,
      onUpdate:self=>{const v=hm._video; if(v&&hm.dataset.video&&hm.dataset.orient!=="v"&&v.duration){v.currentTime=Math.min(v.duration-.05,self.progress*v.duration)}}}});
    tl.to("#heroMedia",{scale:1.25,ease:"none"},0)
      .to("#heroTitle .ch",{yPercent:-60,opacity:0,stagger:.03,ease:"power2.in"},0.15)
      .to(".hero .sub, .hero .muted",{opacity:0,y:-30,ease:"none"},0.1);
    const plane=$("#plane"); if(plane) tl.to(plane,{rotateX:48,yPercent:6,ease:"none"},0);
  });

  // Parallax de imágenes y piezas
  // Fondo que se mueve con el scroll (solo en pantallas horizontales; en celular la imagen va completa arriba)
  gsap.matchMedia().add("(min-aspect-ratio: 1/1)",()=>{
    $$("[data-parallax]").forEach(el=>{const k=parseFloat(el.dataset.parallax);
      gsap.fromTo(el,{yPercent:-k*100},{yPercent:k*100,ease:"none",scrollTrigger:{trigger:el.parentElement,start:"top bottom",end:"bottom top",scrub:true}})});
    $$(".pieces-rain .glyph").forEach(el=>{const sp=parseFloat(el.dataset.speed);
      gsap.to(el,{y:()=>-innerHeight*sp,rotate:"+="+(sp*90),ease:"none",scrollTrigger:{trigger:el.closest(".chapter"),start:"top bottom",end:"bottom top",scrub:true}})});
  });
  // Texto palabra por palabra
  $$(".reveal").forEach(p=>gsap.to(p.querySelectorAll(".w"),{opacity:1,stagger:.08,ease:"none",scrollTrigger:{trigger:p,start:"top 85%",end:"top 40%",scrub:true}}));
  // Servicios en horizontal (escritorio)
  const mm=gsap.matchMedia();
  mm.add("(min-width: 761px)",()=>{
    const track=$("#hsTrack"); const dist=()=>Math.max(0,track.scrollWidth-innerWidth);
    gsap.to(track,{x:()=>-dist(),ease:"none",scrollTrigger:{trigger:"#hsSvc",start:"top top",end:()=>"+="+dist(),pin:true,scrub:.6,invalidateOnRefresh:true}});
  });
  // Tarjetas
}

/* ---------- vistas de páginas ---------- */
/* Rareza tipo videojuego: común, raro, épico, legendario. Cámbiala aquí por id de producto o nombre de skill. */
// Legendario solo los que Leo indique (por ahora: Sistema ADP y Crea aplicaciones con IA).
const RAREZA={ e5:"legendario", c5:"legendario", p1:"epico", c1:"epico", p2:"epico", k1:"epico",
  c2:"raro", c3:"raro", e1:"raro", e3:"raro", e4:"raro", c4:"comun", e2:"comun", e6:"comun", e7:"comun",
  "Trafficker digital":"epico", "Anuncios que venden":"epico", "Creador de personajes IA":"epico", "Kit de 7 estáticos":"epico",
  "Ganchos y copy por canal":"raro", "Conceptos visuales":"raro", "Texto sin cara de IA":"comun" };
const RZ_RANK={legendario:3,epico:2,raro:1,comun:0}, RZ_LABEL={legendario:"Legendario",epico:"Épico",raro:"Raro",comun:"Común"};
const rz=x=>RAREZA[x.id]||RAREZA[x.nombre]||"comun";
const byBadge=(a,b)=>RZ_RANK[rz(b)]-RZ_RANK[rz(a)];
const rzBadge=x=>{const r=rz(x); return `<span class="ribbon r-${r}">${r==="legendario"?FIRE:""}${RZ_LABEL[r]}</span>`};
const FIRE=`<svg class="fire" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.5 2c.6 3.1-1 4.9-2.6 6.6C8.5 10.1 7 11.7 7 14.3 7 17.5 9.3 20 12.2 20c3 0 5.3-2.4 5.3-5.6 0-2.4-1.1-3.9-2.2-5.3-.2 1.3-.8 2.3-1.9 2.9.4-3.1-.3-6.9-.9-10zM12 21.9c-4 0-7-3.2-7-7.5 0-3.4 1.9-5.5 3.5-7.2.6-.7 1.2-1.3 1.6-2 .3 1.8.1 3.4-.8 4.8 2.6-1.1 4-3.9 3.7-7.9 2.4 1.6 6 5.3 6 10.3 0 5.2-3.1 9.5-7 9.5z" opacity=".35"/></svg>`;
function productCard(p){
  return `<article class="card rz-${rz(p)}${rz(p)==="legendario"?" feat":""}">
    ${rzBadge(p)}
    <span class="kind ${p.tipo==="programa"?"solid":""}">${TIPO_LABEL[p.tipo]}</span>
    <h3><a class="card-link" href="#p-${p.id}">${esc(p.titulo)}</a></h3>
    <p class="muted">${esc(p.desc)}</p>
    ${p.porque?`<p class="why">${esc(p.porque)}</p>`:""}
    <div class="meta"><span>${esc(p.dur)}</span><span>${esc(p.nivel)}</span></div>
    <div class="price">${money(p.precio)} <small>USD · ${p.pronto?"preventa":"pago único"}</small></div>
    <div class="actions"><a class="btn" href="#p-${p.id}">Ver detalles</a>${p.pronto?`<button class="btn ghost" data-buy="${p.id}">Reservar</button>`:`<button class="btn ghost" data-buy="${p.id}">Comprar</button>`}</div>
  </article>`;
}
function processBand(){
  return `<section class="band alt"><div class="wrap stack" style="gap:32px">
    <div class="stack" style="gap:10px"><span class="eyebrow">Cómo trabajamos</span><h2 class="big" style="font-size:clamp(2.6rem,6vw,4.8rem)">Una partida en cuatro tiempos</h2></div>
    <div class="steps">${[["Diagnóstico","Revisamos tu negocio, tus redes y tus números."],["Estrategia","Definimos objetivo, público, oferta y plan."],["Ejecución","Producimos, lanzamos y publicamos."],["Medición","Medimos cada semana y ajustamos."]].map(([t,d],i)=>`<div class="step"><b>${i+1}. ${["Apertura","Plan","Medio juego","Final"][i]}</b><h3>${t}</h3><p class="muted">${d}</p></div>`).join("")}</div>
  </div></section>`;
}
function viewServicios(){
  const wa="https://wa.me/"+CONFIG.contacto.whatsapp.replace(/\D/g,"")+"?text="+encodeURIComponent("Hola, quiero agendar mi diagnóstico de 20 minutos.");
  const desde=s=>{const p=Math.min(...s.paquetes.map(x=>x.precio)); const per=s.paquetes.find(x=>x.precio===p).per; return `${money(p)}<small>${per||" pago único"}</small>`};
  return `<div class="page"><section class="band light-band"><div class="wrap stack" style="gap:clamp(48px,8vw,96px)">
    <div class="svc-intro">
      <div class="svc-mug">${media("gorila",`<div class="fallback"></div>`)}</div>
      <div class="stack" style="gap:16px;max-width:52ch"><h1 class="big page-title">Elige tu <span class="red">pieza</span></h1><p class="lede muted">Tres servicios, cada uno con su paquete. Si no sabes por dónde empezar, el diagnóstico de 20 minutos es gratis.</p></div>
    </div>
  </div></section>
  <section class="band alt" id="embudo"><div class="wrap funnel">
    <div class="stack" style="gap:18px;max-width:46ch">
      <h2 class="big" style="font-size:clamp(2.6rem,6vw,4.8rem)">Así se te <span class="red">escapan</span> los clientes</h2>
      <p class="lede muted">Cada bolita es una persona que vio tu marca. En cada curva del camino se pierde gente. La estrategia tapa esas fugas.</p>
      <div class="seg" role="group" aria-label="Ver el embudo"><button type="button" data-mode="sin" aria-pressed="true">Sin estrategia</button><button type="button" data-mode="con" aria-pressed="false">Con estrategia</button></div>
      <p class="funnel-count" aria-live="polite"><b id="fCount">0</b> de 100 llegan a ser clientes</p>
      <p class="muted" style="font-size:.78rem;margin-top:-8px">Simulación ilustrativa. Tus números reales salen del diagnóstico.</p>
    </div>
    <div class="funnel-stage"><canvas id="funnelCv" role="img" aria-label="Animación: personas que ven tu marca caen por un embudo; en cada curva se escapan por falta de recuerdo, claridad, confianza y seguimiento, y solo algunas llegan a ser clientes."></canvas></div>
  </div></section>
  <section class="band"><div class="wrap">${showcase()}</div></section>${processBand()}
  <section class="band"><div class="wrap stack" style="gap:20px;align-items:flex-start;max-width:820px">
    <h2 class="big" style="font-size:clamp(2.4rem,6vw,4.4rem)">¿No sabes <span class="red">cuál mover primero?</span></h2>
    <p class="lede muted">En 20 minutos revisamos tu negocio y te digo qué servicio te conviene, o si ninguno todavía.</p>
    <a class="btn magnetic" href="${wa}" target="_blank" rel="noopener">Agenda tu diagnóstico de 20 minutos</a>
  </div></section></div>`;
}
/* ---------- vitrina de servicios: cada servicio con su color ---------- */
const SC_BG={publicidad:"radial-gradient(60% 70% at 50% 40%,#a6020d 0%,#8e010a 60%,#7a0108 100%)",
  contenido:"radial-gradient(60% 70% at 50% 40%,#171717 0%,#101010 60%,#0b0b0b 100%)",
  apps:"radial-gradient(60% 70% at 50% 40%,#28292e 0%,#1e1f24 60%,#17181d 100%)"};
function showcase(){
  const ks=Object.keys(SERVICES), arrow=d=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="${d}"/></svg>`;
  return `<div class="showcase" id="showcase" tabindex="0" role="region" aria-roledescription="carrusel" aria-label="Servicios">
    ${ks.map((k,i)=>`<div class="sc-bg${i?"":" on"}" data-i="${i}" style="background:${SC_BG[k]||SC_BG.contenido}"></div>`).join("")}
    <div class="sc-top"><button class="sc-arrow" data-dir="-1" type="button" aria-label="Servicio anterior">${arrow("M15 6l-6 6 6 6")}</button><button class="sc-arrow" data-dir="1" type="button" aria-label="Servicio siguiente">${arrow("M9 6l6 6-6 6")}</button><span class="sc-count"><b>01</b> / ${String(ks.length).padStart(2,"0")}</span></div>
    <div class="sc-stage">${ks.map((k,i)=>`<img class="sc-img${i?"":" on"}" data-i="${i}" src="${CONFIG.assets["sc-"+k]||CONFIG.assets[k]||""}" alt="${esc(SERVICES[k].titulo)}" loading="lazy">`).join("")}</div>
    ${ks.map((k,i)=>{const s=SERVICES[k], f=s.paquetes.find(p=>p.feat)||s.paquetes[0];
      return `<div class="sc-copy${i?"":" on"}" data-i="${i}" aria-hidden="${!!i}">
        <span class="note">${s.pieza} · ${s.nota}</span>
        <h2>${s.titulo}</h2>
        <p>${s.corto}</p>
        <a class="btn sc-cta" href="#${k}">Ver qué incluye ${arrow("M9 6l6 6-6 6")}</a>
      </div>
      <div class="sc-side${i?"":" on"}" data-i="${i}" aria-hidden="${!!i}">
        <div class="sc-price"><b data-price>${money(f.precio)}</b><small data-per>${f.per||"pago único"}</small></div>
        <span class="sc-label">Elige tu paquete:</span>
        <div class="sc-chips" role="radiogroup" aria-label="Paquetes de ${esc(s.titulo)}">${s.paquetes.map(p=>`<button type="button" role="radio" class="sc-chip" aria-checked="${p===f}" data-id="${p.id}" data-price="${money(p.precio)}" data-per="${p.per||"pago único"}">${esc(p.nombre)}</button>`).join("")}</div>
        <button class="btn ghost sc-buy" type="button" data-buy="${f.id}">Contratar ${esc(f.nombre)}</button>
      </div>`}).join("")}
    <button class="sc-thumb" type="button" aria-label="Ver el siguiente servicio">${ks.map((k,i)=>`<img data-i="${i}" class="${i===1%ks.length?"on":""}" src="${CONFIG.assets["sc-"+k]||CONFIG.assets[k]||""}" alt="">`).join("")}<span>Siguiente</span></button>
    <p class="sc-tag">${ks.map((k,i)=>`<span class="${i?"":"on"}" data-i="${i}">${["Que te vean los que van a comprar.","Que te recuerden cuando te necesiten.","Que entiendan qué vendes en 5 segundos."][i]||""}</span>`).join("")}</p>
  </div>`;
}
function mountShowcase(){
  const el=$("#showcase"); if(!el) return; const n=Object.keys(SERVICES).length; let i=0, busy=false, timer=0, hover=false;
  const set=(sel,cls,k)=>$$(sel,el).forEach(x=>x.classList.toggle(cls,+x.dataset.i===k));
  const go=to=>{ if(busy) return; busy=true; const prev=i; i=(to+n)%n;
    const imgs=$$(".sc-img",el); imgs[prev].classList.remove("on"); imgs[prev].classList.add("out"); imgs[i].classList.remove("out"); imgs[i].classList.add("on");
    setTimeout(()=>{imgs[prev].classList.remove("out")},460); setTimeout(()=>{busy=false},240);
    set(".sc-bg","on",i); set(".sc-copy","on",i); set(".sc-side","on",i); set(".sc-tag span","on",i); set(".sc-thumb img","on",(i+1)%n);
    $$(".sc-copy,.sc-side",el).forEach(x=>x.setAttribute("aria-hidden",String(+x.dataset.i!==i)));
    $(".sc-count b",el).textContent=String(i+1).padStart(2,"0"); arm() };
  const arm=()=>{clearTimeout(timer); if(!REDUCED) timer=setTimeout(()=>{ if(!el.isConnected) return; const r=el.getBoundingClientRect(); if(!hover&&r.bottom>0&&r.top<innerHeight) go(i+1); else arm() },5000)};
  $$(".sc-arrow",el).forEach(b=>b.addEventListener("click",()=>go(i+ +b.dataset.dir)));
  $(".sc-thumb",el).addEventListener("click",()=>go(i+1));
  // Deslizar con el dedo (o arrastrar con el mouse) para pasar de servicio
  let sx=null, sy=0;
  el.addEventListener("pointerdown",e=>{ if(e.target.closest("button,a")) return; sx=e.clientX; sy=e.clientY },{passive:true});
  el.addEventListener("pointerup",e=>{ if(sx===null) return; const dx=e.clientX-sx, dy=e.clientY-sy; sx=null;
    if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)) go(i+(dx<0?1:-1)) },{passive:true});
  el.addEventListener("pointercancel",()=>sx=null);
  el.addEventListener("keydown",e=>{ if(e.key==="ArrowRight") go(i+1); if(e.key==="ArrowLeft") go(i-1) });
  el.addEventListener("mouseenter",()=>hover=true); el.addEventListener("mouseleave",()=>hover=false);
  el.addEventListener("focusin",()=>hover=true); el.addEventListener("focusout",()=>hover=false);
  // Paquetes: al elegir uno cambia el precio y el botón de contratar
  $$(".sc-side",el).forEach(side=>side.addEventListener("click",e=>{const c=e.target.closest(".sc-chip"); if(!c) return;
    $$(".sc-chip",side).forEach(x=>x.setAttribute("aria-checked",String(x===c)));
    $("[data-price]",side).textContent=c.dataset.price; $("[data-per]",side).textContent=c.dataset.per;
    const b=$(".sc-buy",side); b.dataset.buy=c.dataset.id; b.textContent="Contratar "+c.textContent}));
  arm();
}
/* ---------- embudo animado (servicios) ---------- */
function mountFunnel(){
  const cv=$("#funnelCv"); if(!cv) return;
  const ctx=cv.getContext("2d"), cnt=$("#fCount"), segBtns=$$("#embudo .seg button");
  // Camino del tubo en coordenadas 0..1 (ancho, alto) de un lienzo 9:16
  const CP=[[.25,.16],[.25,.24],[.40,.28],[.70,.30],[.80,.35],[.66,.41],[.32,.44],[.20,.50],[.30,.56],[.66,.59],[.80,.64],[.74,.70],[.74,.77]];
  // Cada fuga: punto del tubo donde ocurre (p) y dónde va su etiqueta (lb), en coordenadas 0..1
  // t: la fuga (sin estrategia) · c: lo que pasa al taparla · fix: qué la tapa (con estrategia)
  const LEAKS=[{p:[.58,.29],lb:[.36,.215],al:"left",t:"No te\nrecuerdan",c:"Te\nrecuerdan",fix:"Contenido"},
    {p:[.80,.36],lb:[.50,.365],al:"center",t:"No entienden\nqué vendes",c:"Entienden\nqué vendes",fix:"Web que vende"},
    {p:[.20,.50],lb:[.36,.505],al:"left",t:"No confían",c:"Confían",fix:"Casos y prueba"},
    {p:[.80,.645],lb:[.64,.715],al:"right",t:"Nadie les hace\nseguimiento",c:"Les haces\nseguimiento",fix:"Retargeting"}];
  const P_LEAK={sin:[.35,.35,.4,.45],con:[.04,.04,.05,.05]};
  const N=100; let W=0,H=0,dpr=1,path=[],L=0,mode="sin",balls=[],t0=0,last=0,released=0,arrived=0,doneAt=0,raf=0;
  const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  const BONE=css("--bone")||"#ece8e1", RED=css("--red")||"#d7261e", RED_TXT=css("--red-text")||"#FF5A4F", INK="#050505";
  function catmull(pts,seg=24){const o=[];for(let i=0;i<pts.length-1;i++){const p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||p2;
    for(let k=0;k<seg;k++){const t=k/seg,t2=t*t,t3=t2*t;o.push([.5*((2*p1[0])+(-p0[0]+p2[0])*t+(2*p0[0]-5*p1[0]+4*p2[0]-p3[0])*t2+(-p0[0]+3*p1[0]-3*p2[0]+p3[0])*t3),
      .5*((2*p1[1])+(-p0[1]+p2[1])*t+(2*p0[1]-5*p1[1]+4*p2[1]-p3[1])*t2+(-p0[1]+3*p1[1]-3*p2[1]+p3[1])*t3)])}}o.push(pts.at(-1));return o}
  function layout(){const r=cv.getBoundingClientRect(); if(!r.width) return; dpr=Math.min(2,devicePixelRatio||1); W=r.width; H=r.height;
    cv.width=Math.round(W*dpr); cv.height=Math.round(H*dpr); ctx.setTransform(dpr,0,0,dpr,0,0);
    path=catmull(CP).map(([x,y])=>({x:x*W,y:y*H})); L=0; path[0].d=0; for(let i=1;i<path.length;i++){L+=Math.hypot(path[i].x-path[i-1].x,path[i].y-path[i-1].y); path[i].d=L}
    // Ubica cada fuga en el tubo y decide hacia qué lado salen las bolitas (lejos de su etiqueta)
    LEAKS.forEach(lk=>{let best=path[0],bd=1e9; for(const q of path){const dd=Math.hypot(q.x-lk.p[0]*W,q.y-lk.p[1]*H); if(dd<bd){bd=dd;best=q}}
      lk.s=best.d/L; const a=at(best.d), nx=-a.ty, ny=a.tx; lk.side=(nx*(lk.lb[0]*W-a.x)+ny*(lk.lb[1]*H-a.y))>0?-1:1 }) }
  function at(d){d=Math.max(0,Math.min(L,d)); let i=1; while(i<path.length-1&&path[i].d<d) i++; const a=path[i-1],b=path[i],k=(d-a.d)/((b.d-a.d)||1);
    const tx=(b.x-a.x),ty=(b.y-a.y),tl=Math.hypot(tx,ty)||1; return {x:a.x+(b.x-a.x)*k,y:a.y+(b.y-a.y)*k,tx:tx/tl,ty:ty/tl}}
  const R=()=>W*.0105, TW=()=>W*.056;
  function pile(){const r=R(),out=[];let y=.155*H-r;const cx=.25*W;
    while(out.length<N&&y>.015*H){const f=(.16*H-y)/(.13*H),hw=TW()/2+(.18*W-TW()/2)*Math.min(1,f)-r; const n=Math.max(1,Math.floor(hw*2/(2.1*r))+1);
      for(let k=0;k<n&&out.length<N;k++) out.push({x:cx-hw+(n===1?hw:k*(2*hw)/(n-1))+(out.length%2?r*.3:0),y}); y-=1.85*r}
    return out}
  function reset(){layout(); const pl=pile().sort((a,b)=>b.y-a.y); balls=pl.map((p,i)=>({x:p.x,y:p.y,st:"pile",i,d:0,v:0,leakIdx:0,a:1}));
    released=0; arrived=0; doneAt=0; t0=performance.now(); cnt.textContent="0"}
  function release(now){const gap=mode==="con"?75:85; const want=Math.floor((now-t0-500)/gap); while(released<Math.min(balls.length,want)){const b=balls[released++]; b.st="drop"}}
  function step(dt,now){release(now); const g=H*1.2, sp=L/4.6, start=path[0];
    for(const b of balls){
      if(b.st==="drop"){const dx=start.x-b.x,dy=start.y-b.y,dl=Math.hypot(dx,dy); const m=Math.min(dl,H*.5*dt); if(dl<1){b.st="pipe";b.v=sp*(.85+Math.random()*.3)} else {b.x+=dx/dl*m;b.y+=dy/dl*m}}
      else if(b.st==="pipe"){b.d+=b.v*dt; const lk=LEAKS[b.leakIdx];
        if(lk&&b.d>=lk.s*L){ if(Math.random()<P_LEAK[mode][b.leakIdx]){const p=at(b.d),side=lk.side||1; b.st="leak"; b.x=p.x;b.y=p.y; b.vx=p.tx*b.v*.5+(-p.ty)*side*b.v*.45; b.vy=p.ty*b.v*.5+(p.tx)*side*b.v*.45} b.leakIdx++ }
        if(b.st==="pipe"){ if(b.d>=L){b.st="fall";const p=at(L);b.x=p.x;b.y=p.y;b.vy=b.v*.3;b.slot=arrived++;cnt.textContent=arrived} else {const p=at(b.d);b.x=p.x;b.y=p.y} } }
      else if(b.st==="leak"){b.vy+=g*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;b.a=Math.max(0,b.a-dt*.35); if(b.y>H+20||b.a<=0) b.st="gone"}
      else if(b.st==="fall"){const r=R(),cols=9,c=b.slot%cols,row=Math.floor(b.slot/cols); const tx=.66*W+r+c*(.18*W-2*r)/(cols-1), ty=.885*H-r-row*1.8*r;
        b.vy+=g*dt; b.y+=b.vy*dt; b.x+=(tx-b.x)*Math.min(1,dt*10); if(b.y>=ty){b.y=ty;b.x=tx;b.st="cup"}}
    }
    if(!doneAt&&released>=balls.length&&balls.every(b=>b.st==="gone"||b.st==="cup")) doneAt=now;
    if(doneAt&&now-doneAt>2600) reset()}
  function label(txt,x,y,align){ctx.textAlign=align;const lines=txt.split("\n"),lh=W*.042;lines.forEach((l,i)=>ctx.fillText(l,x,y+(i-(lines.length-1)/2)*lh))}
  function draw(){ctx.clearRect(0,0,W,H); ctx.fillStyle=INK; ctx.fillRect(0,0,W,H); const tw=TW(),lw=Math.max(1.5,W*.005);
    ctx.lineCap="butt"; ctx.lineJoin="round";
    // Embudo de arriba
    ctx.strokeStyle=BONE; ctx.lineWidth=lw; ctx.beginPath(); ctx.moveTo(.07*W,.03*H); ctx.lineTo(.25*W-tw/2,.16*H); ctx.moveTo(.43*W,.03*H); ctx.lineTo(.25*W+tw/2,.16*H); ctx.stroke();
    // Tubo: trazo grueso claro y trazo interior oscuro
    ctx.beginPath(); path.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));
    ctx.lineWidth=tw+lw*2; ctx.strokeStyle=BONE; ctx.stroke(); ctx.lineWidth=tw; ctx.strokeStyle=INK; ctx.stroke();
    // Vaso
    ctx.lineWidth=lw; ctx.strokeStyle=BONE; ctx.beginPath(); ctx.moveTo(.64*W,.79*H); ctx.lineTo(.66*W,.89*H); ctx.lineTo(.84*W,.89*H); ctx.lineTo(.86*W,.79*H); ctx.stroke();
    // Fugas y etiquetas
    ctx.font=`600 ${Math.max(11,W*.034)}px "Schibsted Grotesk",system-ui,sans-serif`; ctx.textBaseline="middle";
    LEAKS.forEach(lk=>{const p=at(lk.s*L),nx=-p.ty,ny=p.tx,side=lk.side;
      if(mode==="con"){ctx.save();ctx.translate(p.x+nx*side*tw*.5,p.y+ny*side*tw*.5);ctx.rotate(Math.atan2(p.ty,p.tx));ctx.fillStyle=RED;ctx.fillRect(-tw*.4,-lw*1.8,tw*.8,lw*3.6);ctx.restore()}
      if(mode==="con"){ const lines=lk.c.toUpperCase().split("\n"), lh=W*.042, x=lk.lb[0]*W, y0=lk.lb[1]*H-lines.length*lh/2;
        ctx.fillStyle=BONE; label(lk.c.toUpperCase(),x,y0+(lines.length-1)*lh/2,lk.al);
        ctx.fillStyle=RED_TXT; label(lk.fix.toUpperCase(),x,y0+lines.length*lh,lk.al) }
      else { ctx.fillStyle=BONE; label(lk.t.toUpperCase(),lk.lb[0]*W,lk.lb[1]*H,lk.al) } });
    ctx.fillStyle=BONE; label("GENTE QUE\nTE VE",.47*W,.09*H,"left"); label("TUS\nCLIENTES",.6*W,.85*H,"right");
    // Bolitas
    const r=R(); for(const b of balls){ if(b.st==="gone"||b.st==="pile"&&false) continue; ctx.globalAlpha=b.a; ctx.fillStyle=(b.st==="cup"||b.st==="fall")?RED:BONE; ctx.beginPath(); ctx.arc(b.x,b.y,r,0,7); ctx.fill()} ctx.globalAlpha=1 }
  function frame(now){ if(!cv.isConnected){cancelAnimationFrame(raf);return} raf=requestAnimationFrame(frame);
    const rr=cv.getBoundingClientRect(); const vis=rr.bottom>0&&rr.top<innerHeight; const dt=Math.min(.05,(now-last)/1000||0); last=now;
    if(!vis){t0+=dt*1000; if(doneAt) doneAt+=dt*1000; return} step(dt,now); draw()}
  segBtns.forEach(b=>b.addEventListener("click",()=>{mode=b.dataset.mode; segBtns.forEach(x=>x.setAttribute("aria-pressed",String(x===b))); reset()}));
  addEventListener("resize",()=>{ if(cv.isConnected) reset() });
  reset(); last=performance.now(); raf=requestAnimationFrame(frame);
}
function viewService(key){
  const s=SERVICES[key];
  const wa="https://wa.me/"+CONFIG.contacto.whatsapp.replace(/\D/g,"")+"?text="+encodeURIComponent("Hola, quiero agendar mi diagnóstico de 20 minutos para "+s.titulo.toLowerCase()+".");
  const img=CONFIG.assets["sc-"+key]||CONFIG.assets[key]||"";
  return `<div class="page"><section class="svc-top" style="background:${SC_BG[key]||SC_BG.contenido}"><div class="wrap svc-top-grid">
    <div class="stack" style="gap:18px">
      <a class="svc-back" href="#servicios"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>Servicios</a>
      <span class="svc-note">${s.pieza} · ${s.nota}</span>
      <h1 class="big page-title">${s.titulo}</h1>
      ${s.gancho?`<p class="svc-hook">${s.gancho}</p>`:""}
      <p class="lede" style="color:rgba(236,232,225,.78)">${s.largo}</p>
      <div class="row"><button class="btn sc-cta" data-scroll="paquetes">Ver paquetes</button><a class="btn ghost" href="${wa}" target="_blank" rel="noopener">Agenda tu diagnóstico</a></div>
    </div>
    ${img?`<img class="svc-top-img" src="${img}" alt="${esc(s.titulo)}">`:""}
  </div></section>
  ${s.tipos?`<section class="band"><div class="wrap stack" style="gap:28px">
    <h2 class="big" style="font-size:clamp(2.4rem,5vw,4rem)">Qué puedo <span class="red">construirte</span></h2>
    <div class="types">${s.tipos.map(([t,d,time],i)=>`<article class="type">
      <span class="type-n">${String(i+1).padStart(2,"0")}</span><h3>${t}</h3><p class="muted">${d}</p><span class="type-time">${time}</span></article>`).join("")}</div>
  </div></section>`:""}
  ${s.pasos?`<section class="band alt"><div class="wrap stack" style="gap:28px">
    <h2 class="big" style="font-size:clamp(2.4rem,5vw,4rem)">De la idea <span class="red">a publicada</span></h2>
    <ol class="timeline">${s.pasos.map(([t,d],i)=>`<li><span class="tl-dot">${i+1}</span><h3>${t}</h3><p class="muted">${d}</p></li>`).join("")}</ol>
  </div></section>`:""}
  ${s.prueba?`<section class="band proof"><div class="wrap proof-grid">
    <div class="stack" style="gap:16px;max-width:48ch">
      <h2 class="big" style="font-size:clamp(2.4rem,5.5vw,4.4rem)">Esta página <span class="red">la construí yo</span></h2>
      <p class="lede muted">Las animaciones, el embudo, los pagos y el área de estudiantes que estás viendo los hice con IA. Imagina lo mismo con tu marca y tus productos.</p>
      <div class="row"><a class="btn" href="${wa}" target="_blank" rel="noopener">Quiero algo así</a><a class="btn ghost" href="#inicio">Volver a verla</a></div>
    </div>
    <ul class="proof-list">${["Diseño a medida en tu marca, no plantilla","Se ve bien en celular y computador","Pagos con tarjeta y Binance","Formularios y WhatsApp conectados","Automatizaciones con IA","Soporte después de la entrega"].map(x=>`<li>${x}</li>`).join("")}</ul>
  </div></section>`:""}
  ${s.prueba?"":`<section class="band alt"><div class="wrap split">
    <div class="stack" style="gap:10px"><span class="eyebrow">Qué incluye</span><h2 class="big" style="font-size:clamp(2.4rem,5vw,4rem)">Todo para ejecutar</h2></div>
    <ul class="checks">${s.incluye.map(i=>`<li>${i}</li>`).join("")}</ul>
  </div></section>`}
  <section class="band" id="paquetes"><div class="wrap stack" style="gap:28px">
    <div class="stack" style="gap:10px"><span class="eyebrow">Paquetes</span><h2 class="big" style="font-size:clamp(2.4rem,5vw,4rem)">Elige tu nivel</h2></div>
    <div class="packs">${s.paquetes.map(p=>`<div class="pack ${p.feat?"feat":""}">
      <span class="eyebrow" ${p.feat?'style="color:#f0c9c6"':""}>${p.feat?"Mejor equilibrio":"Paquete"}</span>
      <h3>${p.nombre}</h3>
      <div class="price">${p.desde?'<small class="muted" style="font-family:var(--f-body);font-size:.9rem">desde </small>':""}${money(p.precio)}<small class="muted" style="font-family:var(--f-body);font-size:.9rem">${p.per}</small></div>
      <ul>${p.items.map(i=>`<li>${i}</li>`).join("")}</ul>
      <div style="margin-top:auto;padding-top:8px"><button class="btn ${p.feat?"":"ghost"}" data-buy="${p.id}">Contratar</button></div>
    </div>`).join("")}</div>
  </div></section>
  ${s.pasos?"":processBand()}
  <section class="band"><div class="wrap split">
    <div class="stack" style="gap:10px"><span class="eyebrow">Preguntas</span><h2 class="big" style="font-size:clamp(2.4rem,5vw,4rem)">Antes de mover ficha</h2></div>
    <div>${s.faq.map(([q,a])=>`<details class="faq"><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>
  </div></section></div>`;
}
/* ---------- página corta de ebook: texto que vende, calificaciones y combos ---------- */
const STAR=`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"/></svg>`;
const stars=(n,cls="")=>`<span class="stars ${cls}" aria-label="${n.toFixed(1)} de 5 estrellas">${[1,2,3,4,5].map(i=>`<i class="${i<=Math.round(n)?"on":""}">${STAR}</i>`).join("")}</span>`;
function califs(p){const l=(CONFIG.calificaciones||{})[p.id]||[];return {l,n:l.length,avg:l.length?l.reduce((s,x)=>s+x.estrellas,0)/l.length:0}}
function comboPct(n){const d=CONFIG.combos.descuentos;let pct=0;Object.keys(d).map(Number).sort((a,b)=>a-b).forEach(k=>{if(n>=k) pct=d[k]});return pct}
function comboCalc(ids){
  const ps=ids.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean), base=ps.reduce((s,p)=>s+p.precio,0), pct=comboPct(ps.length);
  return {ps,base,pct,total:Math.round(base*(100-pct))/100};
}
function comboItem(sel){
  if(!sel||!sel.startsWith("combo:")) return null;
  const c=comboCalc(sel.slice(6).split("+")); if(c.ps.length<2) return null;
  return {id:sel,ref:"COMBO",nombre:"Combo: "+c.ps.map(p=>p.titulo).join(" + "),tipo:`Combo · ${c.pct}% de descuento`,precio:c.total,per:""};
}
function viewEbook(p){
  const g=PAG[p.id]||{}, c=califs(p);
  const pool=PRODUCTS.filter(x=>x.id!==p.id&&x.tipo!=="programa").sort((a,b)=>(a.pronto?1:0)-(b.pronto?1:0)||byBadge(a,b));
  const opts=[...pool.filter(x=>x.tipo==="ebook").slice(0,3),...pool.filter(x=>x.tipo!=="ebook").slice(0,3)];
  const d=CONFIG.combos.descuentos, tiers=Object.keys(d).map(Number).sort((a,b)=>a-b);
  const cta=`<button class="btn" data-buy="${p.id}">${p.pronto?"Reservar en preventa":"Comprar ahora"}</button>`;
  return `<div class="page pd eb"><section class="pd-top"><div class="wrap pd-top-grid">
    <div class="stack" style="gap:18px">
      <a class="svc-back" href="#academia"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>Academia</a>
      <div class="pd-tags"><span class="kind">${TIPO_LABEL[p.tipo]}</span>${rzBadge(p)}</div>
      <h1 class="big page-title">${esc(p.titulo)}</h1>
      <a class="eb-rate" href="#calificaciones" data-scroll="calificaciones">${c.n?`${stars(c.avg)}<b>${c.avg.toFixed(1)}</b><span>(${c.n} ${c.n===1?"calificación":"calificaciones"})</span>`:`${stars(0,"off")}<span>Aún sin calificaciones</span>`}</a>
      ${g.gancho?`<p class="svc-hook">${g.gancho}</p>`:""}
      <p class="eb-copy">${g.venta||esc(p.desc)}</p>
      ${g.dentro?`<ul class="eb-list">${g.dentro.map(x=>`<li>${CHECK}<span>${x}</span></li>`).join("")}</ul>`:""}
      <div class="pd-buy"><div class="pd-price">${money(p.precio)}<small>USD · ${p.pronto?"preventa":"pago único"}</small></div><div class="row">${cta}</div></div>
      <p class="muted" style="font-size:.88rem">${p.pronto?"Reservas hoy al precio de preventa y te llega a tu correo el día que sale.":"Lo recibes en tu correo apenas se confirma el pago y queda en tu área de estudiantes."}</p>
    </div>
    <div class="pd-cover rz-${rz(p)}" aria-hidden="true">
      <div class="pd-cover-k">${TIPO_LABEL[p.tipo]}</div>${SVGP("♝")}
      <div class="stack" style="gap:14px"><div class="pd-cover-t">${esc(p.titulo)}</div>
        <div class="pd-cover-b"><span>Un Estratega Digital</span><span>${esc(p.dur)}</span></div></div>
    </div>
  </div></section>
  <section class="band alt"><div class="wrap stack" style="gap:24px">
    <div class="stack" style="gap:10px"><span class="eyebrow">Combos</span><h2 class="big" style="font-size:clamp(2.2rem,4.6vw,3.6rem)">Llévalo en <span class="red">combo</span></h2>
      <p class="muted">${tiers.map((k,i)=>`${k}${i===tiers.length-1?" o más":""} productos: ${d[k]}% menos`).join(" · ")}</p></div>
    <form class="eb-combo" id="ebCombo" data-base="${p.id}">
      <ul class="eb-opts">
        <li><label class="eb-opt fixed"><input type="checkbox" checked disabled><span class="t"><b>${esc(p.titulo)}</b><small>${TIPO_LABEL[p.tipo]}</small></span><span class="mono">${money(p.precio)}</span></label></li>
        ${opts.map((x,i)=>`<li><label class="eb-opt"><input type="checkbox" name="cb" value="${x.id}" ${i===0?"checked":""}><span class="t"><b>${esc(x.titulo)}</b><small>${TIPO_LABEL[x.tipo]}${x.pronto?" · preventa":""}</small></span><span class="mono">${money(x.precio)}</span></label></li>`).join("")}
      </ul>
      <div class="eb-total"><div class="stack" style="gap:4px"><span class="muted" id="ebCount"></span><div class="eb-price"><s id="ebBase"></s><b id="ebTotal"></b></div><span class="eb-save" id="ebSave"></span></div>
        <button class="btn" type="submit">Comprar el combo</button></div>
    </form>
  </div></section>
  <section class="band" id="calificaciones"><div class="wrap stack" style="gap:24px">
    <h2 class="big" style="font-size:clamp(2.2rem,4.6vw,3.6rem)">Califica<span class="red">ciones</span></h2>
    ${c.n?`<div class="eb-avg"><b>${c.avg.toFixed(1)}</b>${stars(c.avg)}<span class="muted">${c.n} ${c.n===1?"calificación":"calificaciones"}</span></div>
      <div class="eb-revs">${c.l.map(x=>`<article class="eb-rev">${stars(x.estrellas)}${x.texto?`<p>${esc(x.texto)}</p>`:""}<span class="muted">${esc(x.nombre)}</span></article>`).join("")}</div>`
      :`<p class="muted">Aún no tiene calificaciones. Quienes lo compran lo califican desde su área de estudiantes.</p>`}
    ${g.faq?`<div>${g.faq.map(([q,a])=>`<details class="faq"><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`:""}
  </div></section></div>`;
}
function mountCombo(){
  const f=$("#ebCombo"); if(!f) return;
  const ids=()=>[f.dataset.base,...$$("input[name=cb]:checked",f).map(i=>i.value)];
  const upd=()=>{const c=comboCalc(ids());
    $("#ebCount").textContent=`${c.ps.length} productos`;
    $("#ebBase").textContent=c.pct?money(c.base,2):""; $("#ebTotal").textContent=money(c.total,2)+" USD";
    const nxt=Object.keys(CONFIG.combos.descuentos).map(Number).sort((a,b)=>a-b).find(k=>k>c.ps.length);
    $("#ebSave").textContent=c.pct?`Ahorras ${money(c.base-c.total,2)} (${c.pct}%)`:"";
    if(nxt&&c.pct) $("#ebSave").textContent+=` · con ${nxt} productos llegas a ${CONFIG.combos.descuentos[nxt]}%`;
    if(!c.pct) $("#ebSave").textContent="Suma otro producto para activar el descuento";
    f.querySelector("button[type=submit]").disabled=c.ps.length<2};
  f.addEventListener("change",upd);
  f.addEventListener("submit",e=>{e.preventDefault();const s=ids();if(s.length<2) return;
    try{sessionStorage.setItem("ed_item","combo:"+s.join("+"))}catch(x){} location.hash="checkout"});
  upd();
}
function viewProduct(id){
  const p=PRODUCTS.find(x=>x.id===id), g=PAG[id]||{}, r=rz(p), este=TIPO_ESTE[p.tipo];
  if(p.tipo==="ebook") return viewEbook(p);
  const PZ={curso:"♞",programa:"♛",ebook:"♝",kit:"♜"}[p.tipo]||"♟";
  const cta=(cls="")=>`<button class="btn ${cls}" data-buy="${p.id}">${p.pronto?"Reservar en preventa":"Comprar ahora"}</button>`;
  const precio=`<div class="pd-price">${money(p.precio)}<small>USD · ${p.pronto?"preventa":"pago único"}</small></div>`;
  const wa="https://wa.me/"+CONFIG.contacto.whatsapp.replace(/\D/g,"")+"?text="+encodeURIComponent("Hola, tengo una duda sobre "+p.titulo+".");
  const mods=g.mods||(g.dentro||p.lecciones||[]).map(t=>[t]);
  const modLbl={programa:"Semana",ebook:"Parte",kit:"Asistente"}[p.tipo]||"Lección";
  const nivel=p.nivel==="Avanzado"?"Sí: está pensado para quien ya lanzó campañas y quiere escalar.":p.nivel==="Intermedio"?"Ayuda haber usado alguna herramienta de IA, pero lo básico lo vemos dentro.":"No. Está explicado para empezar desde cero.";
  const faq=[...(g.faq||[]),
    ["¿Cómo recibo mi acceso?",p.pronto?"Reservas hoy al precio de preventa. Cuando salga, te llega a tu correo y queda en tu área de estudiantes.":"Después del pago recibes tu acceso en tu correo y el contenido queda en tu área de estudiantes."],
    ["¿Cómo puedo pagar?","Con tarjeta de débito o crédito, o con Binance Pay en USDT."],
    ["¿Necesito experiencia previa?",nivel],
    ["¿Y si me quedo con dudas?",`Escríbeme al <a href="${wa}" target="_blank" rel="noopener">WhatsApp</a> y te respondo.`]];
  const rel=PRODUCTS.filter(x=>x.id!==p.id).sort((a,b)=>(b.tipo===p.tipo)-(a.tipo===p.tipo)||byBadge(a,b)).slice(0,3);
  const h2=(t,cls="")=>`<h2 class="big ${cls}" style="font-size:clamp(2.4rem,5vw,4rem)">${t}</h2>`;
  return `<div class="page pd"><section class="pd-top"><div class="wrap pd-top-grid">
    <div class="stack" style="gap:18px">
      <a class="svc-back" href="#academia"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>Academia</a>
      <div class="pd-tags"><span class="kind ${p.tipo==="programa"?"solid":""}">${TIPO_LABEL[p.tipo]}</span>${rzBadge(p)}</div>
      <h1 class="big page-title">${esc(p.titulo)}</h1>
      ${g.gancho?`<p class="svc-hook">${g.gancho}</p>`:""}
      <p class="lede muted">${esc(p.desc)}</p>
      <ul class="pd-chips"><li>${esc(p.dur)}</li><li>${esc(p.nivel)}</li><li>Acceso al área de estudiantes</li></ul>
      <div class="pd-buy">${precio}<div class="row">${cta()}<button class="btn ghost" data-scroll="contenido">Ver contenido</button></div></div>
    </div>
    <div class="pd-cover rz-${r}" aria-hidden="true">
      <div class="pd-cover-k">${TIPO_LABEL[p.tipo]}</div>
      ${SVGP(PZ)}
      <div class="stack" style="gap:14px"><div class="pd-cover-t">${esc(p.titulo)}</div>
        <div class="pd-cover-b"><span>Un Estratega Digital</span><span>${esc(p.dur)}</span></div></div>
    </div>
  </div></section>
  ${g.dolores?`<section class="band alt"><div class="wrap stack" style="gap:32px">
    ${h2('¿Te <span class="red">suena?</span>')}
    <ul class="pd-pains">${g.dolores.map(d=>`<li>${d}</li>`).join("")}</ul>
    ${g.puente?`<p class="pd-bridge">${g.puente}</p>`:""}
  </div></section>`:""}
  ${g.antes?`<section class="band"><div class="wrap stack" style="gap:28px">
    ${h2(`Lo que cambia con <span class="red">${este}</span>`)}
    <div class="pd-vs"><div class="h a">Hasta ahora</div><div class="h b">Con ${este}</div>
      ${g.antes.map(([a,b])=>`<div class="a">${a}</div><div class="b">${b}</div>`).join("")}</div>
  </div></section>`:""}
  <section class="band ${g.antes?"alt":""}" id="contenido"><div class="wrap stack" style="gap:28px">
    ${h2(g.dentro?'Qué hay <span class="red">dentro</span>':'Qué vas a <span class="red">aprender</span>')}
    <div class="pd-mods">${mods.map(([t,d,res],i)=>`<article class="pd-mod">
      <span class="type-n">${modLbl} ${String(i+1).padStart(2,"0")}</span>
      <h3>${esc(t.replace(/^Semana \d+:\s*/,""))}</h3>${d?`<p class="muted">${d}</p>`:""}
      ${res?`<p class="pd-res"><b>Resultado</b>${res}</p>`:""}</article>`).join("")}</div>
  </div></section>
  ${g.prueba?`<section class="band proof"><div class="wrap proof-grid">
    <div class="stack" style="gap:16px;max-width:48ch">
      ${h2('Esta plataforma <span class="red">la hice con IA</span>')}
      <p class="lede muted">El área de estudiantes, los pagos y el analizador de Meta Ads que tienes aquí funcionan como una app, y los construí con el mismo método que te enseño en este curso. Es el tipo de proyecto que puedes venderle a un negocio.</p>
    </div>
    <ul class="proof-list">${["Usuarios y área privada","Cobros con tarjeta y Binance","Funciona en celular y computador","Lista para entregar a un cliente"].map(x=>`<li>${x}</li>`).join("")}</ul>
  </div></section>`:""}
  ${g.para?`<section class="band ${g.prueba?"alt":""}"><div class="wrap split" style="align-items:start">
    <div class="stack" style="gap:20px">${h2('Es para ti <span class="red">si…</span>')}
      <ol class="pd-for">${g.para.map((x,i)=>`<li><span>${String(i+1).padStart(2,"0")} /</span>${x}</li>`).join("")}</ol></div>
    ${g.sin||g.req?`<div class="pd-need stack" style="gap:14px"><b>${g.req?"Lo que necesitas":"Y no necesitas"}</b>
      <ul>${(g.req||g.sin).map(x=>`<li>${x}</li>`).join("")}</ul></div>`:""}
  </div></section>`:""}
  <section class="band"><div class="wrap">
    <div class="pd-gift"><span class="eyebrow">Con tu compra</span>
      <h3>Acceso al área de estudiantes</h3>
      <p class="muted">Tus cursos, programas y ebooks en un solo lugar, y el analizador de campañas de Meta Ads incluido.</p></div>
  </div></section>
  <section class="band alt"><div class="wrap split">
    <div class="stack" style="gap:10px"><span class="eyebrow">Preguntas</span>${h2("Antes de mover ficha")}</div>
    <div>${faq.map(([q,a])=>`<details class="faq"><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>
  </div></section>
  <section class="band pd-fin" id="pdFin"><div class="wrap stack" style="gap:22px;align-items:center;text-align:center">
    ${h2(esc(p.titulo))}
    ${g.gancho?`<p class="lede muted" style="max-width:40ch">${g.gancho}</p>`:""}
    ${precio}${cta()}
  </div></section>
  <section class="band alt"><div class="wrap stack" style="gap:28px">
    ${h2('También te <span class="red">puede servir</span>')}
    <div class="grid3">${rel.map(productCard).join("")}</div>
  </div></section>
  <div class="pd-bar" id="pdBar"><div class="wrap pd-bar-in">
    <div class="pd-bar-t"><b>${esc(p.titulo)}</b><span>${money(p.precio)} USD</span></div>${cta()}
  </div></div></div>`;
}
function mountProduct(){
  mountCombo();
  const bar=$("#pdBar"), top=$(".pd-top"), fin=$("#pdFin"); if(!bar) return;
  document.body.classList.add("has-bar");
  const on=()=>{ if(!bar.isConnected){removeEventListener("scroll",on);return}
    bar.classList.toggle("on",top.getBoundingClientRect().bottom<0&&fin.getBoundingClientRect().top>innerHeight*.85) };
  addEventListener("scroll",on,{passive:true}); on();
}
let acadFilter="todos";
/* ---------- video de texto: qué hay en la academia ---------- */
const TXT_SCENES=[
  {big:"¿Qué vas a encontrar aquí?",sub:"20 segundos y sabes por dónde empezar."},
  {n:"01",big:"Cursos cortos",sub:"Una habilidad concreta en una tarde. Desde $10."},
  {n:"02",big:"Programas",sub:"8 semanas con mentorías en vivo. Sales con tu sistema funcionando."},
  {n:"03",big:"Ebooks",sub:"Fórmulas y métodos para consultar cuando los necesites."},
  {n:"04",big:"Kits de IA",sub:"Mis asistentes listos para copiar y entrenar a tu IA."},
  {n:"05",big:"Área de estudiantes",sub:"Con cada compra. Incluye el analizador de Meta Ads."},
  {big:"Elige por dónde empezar",sub:"Filtra abajo por tipo.",end:true}];
function txtVideo(){
  return `<div class="txtvid" id="txtvid" role="region" aria-roledescription="presentación" aria-label="Video de texto: qué hay en la academia">
    <div class="tv-bars">${TXT_SCENES.map(()=>'<span><i></i></span>').join("")}</div>
    ${TXT_SCENES.map((s,i)=>`<div class="tv-scene${s.end?" end":""}" data-i="${i}" aria-hidden="true">
      ${s.n?`<span class="tv-n">${s.n}</span>`:""}
      <h2 class="tv-big">${s.big.split(" ").map((w,k)=>`<span class="w" style="--k:${k}">${esc(w)}</span>`).join(" ")}</h2>
      <p class="tv-sub">${esc(s.sub)}</p>
      ${s.end?'<svg class="tv-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 4v15M6 13l6 6 6-6"/></svg>':""}
    </div>`).join("")}
    <button class="tv-zone prev" type="button" aria-label="Anterior"></button><button class="tv-zone next" type="button" aria-label="Siguiente"></button>
    <button class="tv-play" type="button" aria-label="Pausar"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path class="i-pause" d="M7 5h3v14H7zM14 5h3v14h-3z"/><path class="i-play" d="M8 5v14l11-7z"/></svg></button>
    <p class="sr-only" aria-live="polite" id="tvLive"></p>
  </div>`;
}
function mountTxtVid(){
  const el=$("#txtvid"); if(!el) return;
  const scenes=$$(".tv-scene",el), bars=$$(".tv-bars i",el), live=$("#tvLive"), btn=$(".tv-play",el);
  const DUR=2800; let i=-1, t=0, last=performance.now(), playing=true;
  const show=n=>{ i=(n+scenes.length)%scenes.length; t=0;
    scenes.forEach((s,k)=>{s.classList.toggle("on",k===i); s.setAttribute("aria-hidden",String(k!==i))});
    bars.forEach((b,k)=>b.style.transform=`scaleX(${k<i?1:0})`);
    live.textContent=TXT_SCENES[i].big+". "+TXT_SCENES[i].sub };
  const setPlay=p=>{playing=p; el.classList.toggle("paused",!p); btn.setAttribute("aria-label",p?"Pausar":"Reproducir")};
  btn.addEventListener("click",()=>setPlay(!playing));
  $(".tv-zone.next",el).addEventListener("click",()=>show(i+1));
  $(".tv-zone.prev",el).addEventListener("click",()=>show(i-1));
  const tick=now=>{ if(!el.isConnected) return; requestAnimationFrame(tick);
    const dt=now-last; last=now; const r=el.getBoundingClientRect(); if(!playing||r.bottom<0||r.top>innerHeight) return;
    t+=dt; if(bars[i]) bars[i].style.transform=`scaleX(${Math.min(1,t/DUR)})`;
    if(t>=DUR) show(i+1) };
  show(0); requestAnimationFrame(tick);
}
function viewAcademia(){
  const list=PRODUCTS.filter(p=>acadFilter==="todos"||p.tipo===acadFilter).sort(byBadge);
  const f=[["todos","Todo"],["curso","Cursos cortos"],["programa","Programas"],["ebook","Ebooks"],["kit","Kits de IA"]];
  return `<div class="page"><section class="band"><div class="wrap stack" style="gap:32px">
    <div class="acad-intro">
      <div class="stack" style="gap:12px"><span class="eyebrow">Academia</span><h1 class="big page-title">Aprende hoy, <span class="serif red">aplícalo mañana</span></h1>
        <p class="lede muted">Cursos cortos para dominar una habilidad en una tarde, programas con mentorías y ebooks prácticos. Al comprar recibes tu acceso al área de estudiantes, con el analizador de Meta Ads incluido.</p></div>
      ${txtVideo()}
    </div>
    <div class="tabs" role="group" aria-label="Filtrar">${f.map(([k,l])=>`<button class="tab" data-filter="${k}" aria-pressed="${acadFilter===k}">${l}</button>`).join("")}</div>
    <div class="grid3">${list.map(productCard).join("")}</div>
  </div></section></div>`;
}
function viewPlataformas(){
  const P=CONFIG.plataformas;
  const box=(p,tag,feat)=>`<div class="card" style="padding:36px;gap:16px;${feat?"border-top:3px solid var(--red)":""}">
      <span class="eyebrow">${tag}</span><h2 class="big" style="font-size:clamp(2.2rem,4vw,3.4rem)">${esc(p.nombre)}</h2><p class="muted">${esc(p.texto)}</p>
      <div>${p.url?`<a class="btn" href="${esc(p.url)}" target="_blank" rel="noopener">Ir a la plataforma</a>`:`<button class="btn" disabled>Enlace próximamente</button>`}</div></div>`;
  return `<div class="page"><section class="band"><div class="wrap stack" style="gap:32px">
    <div class="stack" style="gap:12px"><span class="eyebrow">Plataformas</span><h1 class="big page-title">Herramientas <span class="red">para tu jugada</span></h1><p class="lede muted">Mi plataforma de contenido, la que uso para redes todos los días y una biblioteca de skills para que tu IA trabaje con mi método.</p></div>
    <div class="split" style="gap:20px">${box(P.hotmart,"Plataforma de contenido · Hotmart",true)}${box(P.afiliado,"Plataforma para redes · Enlace de afiliado",false)}</div>
    <p class="notice">Transparencia: el enlace de la plataforma para redes es de afiliado. Si compras con él recibo una comisión y a ti no te cuesta más.</p>
  </div></section>
  <section class="band" id="skills"><div class="wrap stack" style="gap:28px">
    <div class="stack" style="gap:12px;max-width:62ch"><h2 class="big" style="font-size:clamp(2.4rem,6vw,4.4rem)">Biblioteca <span class="red">de skills</span></h2>
      <p class="lede muted">Un skill es un archivo de instrucciones que cargas en tu IA (Claude, ChatGPT o Gemini) para que trabaje con mi método y no con respuestas genéricas. Lo cargas una vez y lo usas siempre.</p></div>
    <div class="skills">${(CONFIG.skills||[]).slice().sort(byBadge).map(s=>`<article class="card skill rz-${rz(s)}${rz(s)==="legendario"?" feat":""}">
      ${rzBadge(s)}
      <span class="skill-tag">${esc(s.tipo)}</span>
      <h3>${esc(s.nombre)}</h3><p class="muted">${esc(s.texto)}</p>
      ${s.porque?`<p class="why">${esc(s.porque)}</p>`:""}
      <div class="skill-foot"><span class="skill-price">${s.precio?esc(s.precio):"Incluido para estudiantes"}</span>
      ${s.url?`<a class="btn" href="${esc(s.url)}" target="_blank" rel="noopener">Descargar</a>`:`<button class="btn" disabled>Próximamente</button>`}</div></article>`).join("")}</div>
  </div></section></div>`;
}

/* ---------- checkout ---------- */
function viewCheckout(){
  const items=allItems(); let sel=null; try{sel=sessionStorage.getItem("ed_item")}catch(e){}
  const it=items[sel]||comboItem(sel);
  if(!it) return `<div class="page"><section class="band"><div class="wrap stack" style="gap:20px"><span class="eyebrow">Pago</span><h1 class="big page-title">Elige qué comprar</h1><p class="muted lede">No hay ningún producto seleccionado.</p><div class="row"><a class="btn" href="#academia">Ver la academia</a><a class="btn ghost" href="#servicios">Ver servicios</a></div></div></section></div>`;
  const ref="ED-"+(it.ref||it.id).toUpperCase()+"-"+Math.random().toString(36).slice(2,6).toUpperCase();
  return `<div class="page"><section class="band"><div class="wrap split" style="grid-template-columns:minmax(0,1.3fr) minmax(0,1fr)">
    <form class="stack" id="payForm" style="gap:24px" novalidate data-item="${it.id}" data-ref="${ref}">
      <div class="stack" style="gap:10px"><span class="eyebrow">Pago seguro</span><h1 class="big" style="font-size:clamp(2.6rem,6vw,4.6rem)">Completa tu compra</h1></div>
      <div class="split" style="gap:14px;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr))">
        <label class="f">Nombre completo<input type="text" id="cName" autocomplete="name" required></label>
        <label class="f">Correo electrónico<input type="email" id="cEmail" autocomplete="email" required></label>
      </div>
      <div class="stack" style="gap:10px"><b>Método de pago</b>
        <div class="pay-opts">
          <label class="pay-opt"><input type="radio" name="pm" id="pmCard" value="tarjeta" checked><span><b>Tarjeta</b><br><span class="muted" style="font-size:.88rem">Débito o crédito: Visa, Mastercard, Diners</span></span></label>
          <label class="pay-opt"><input type="radio" name="pm" id="pmBin" value="binance"><span><b>Binance Pay</b><br><span class="muted" style="font-size:.88rem">USDT sin comisión entre usuarios Binance</span></span></label>
        </div>
      </div>
      <div id="pmPanel"></div>
      <p class="err" id="payErr" hidden></p>
    </form>
    <aside class="summary">
      <span class="eyebrow">Tu pedido</span>
      <div class="stack" style="gap:8px"><span class="kind">${it.tipo}</span><h3 style="font-family:var(--f-display);text-transform:uppercase;font-size:1.7rem;line-height:1">${esc(it.nombre)}</h3></div>
      <div class="line"><span class="muted">Precio</span><span class="mono">${it.desde?"desde ":""}${money(it.precio,2)}${it.per}</span></div>
      <div class="line"><span class="muted">Referencia</span><span class="mono">${ref}</span></div>
      <div class="line" style="border-top:1px solid var(--line);padding-top:12px"><b>Total</b><b class="mono">${money(it.precio,2)} USD</b></div>
      <p class="muted" style="font-size:.85rem">Después del pago recibirás tu acceso o la confirmación del servicio en tu correo.</p>
    </aside>
  </div></section></div>`;
}
function mountCheckout(){
  const form=$("#payForm"); if(!form) return;
  const it=allItems()[form.dataset.item]||comboItem(form.dataset.item), ref=form.dataset.ref, panel=$("#pmPanel"), err=$("#payErr");
  const valid=()=>{const n=$("#cName").value.trim(),e=$("#cEmail").value.trim();
    if(!n){err.textContent="Escribe tu nombre para continuar.";err.hidden=false;return false}
    if(!/^\S+@\S+\.\S+$/.test(e)){err.textContent="Revisa tu correo: debe tener el formato nombre@dominio.com.";err.hidden=false;return false}
    err.hidden=true;return true};
  const render=()=>{
    const m=form.querySelector("input[name=pm]:checked").value;
    if(m==="tarjeta"){
      const link=it.link||CONFIG.pagos.tarjetaGeneral;
      panel.innerHTML=`<div class="stack" style="gap:12px"><p class="muted">Te llevamos a la pasarela de pago segura para ingresar tu tarjeta. Este sitio no guarda los datos de tu tarjeta.</p>
        ${link?`<div><a class="btn" id="goCard" href="${esc(link)}" target="_blank" rel="noopener">Pagar ${money(it.precio,2)} con tarjeta</a></div>`:`<p class="notice">El pago con tarjeta se está activando. Mientras tanto puedes pagar con Binance Pay o escribir al WhatsApp <b class="mono">${esc(CONFIG.contacto.whatsapp)}</b>.</p>`}</div>`;
      const a=$("#goCard"); if(a) a.addEventListener("click",ev=>{if(!valid()) ev.preventDefault()});
    } else {
      panel.innerHTML=`<div class="stack" style="gap:14px">
        <ol class="stack" style="gap:6px;margin:0;padding-left:20px">
          <li>Abre Binance y ve a <b>Pagar → Enviar</b>.</li>
          <li>Pega este Pay ID y envía <b>${it.precio} USDT</b>.</li>
          <li>En la nota escribe tu referencia.</li>
          <li>Envía la captura del pago al WhatsApp <b class="mono">${esc(CONFIG.contacto.whatsapp)}</b>.</li>
        </ol>
        <div class="stack" style="gap:6px"><span class="eyebrow">Pay ID</span><div class="copy"><code>${esc(CONFIG.pagos.binancePayId)}</code><button type="button" data-copy="${esc(CONFIG.pagos.binancePayId)}">Copiar</button></div></div>
        <div class="stack" style="gap:6px"><span class="eyebrow">Referencia para la nota</span><div class="copy"><code>${ref}</code><button type="button" data-copy="${ref}">Copiar</button></div></div>
        <div><button class="btn" type="submit">Ya envié el pago</button></div>
        <div id="binDone" hidden class="notice" style="border-style:solid;border-color:var(--red);color:var(--bone)"></div>
      </div>`;
    }
  };
  form.addEventListener("change",e=>{if(e.target.name==="pm") render()});
  form.addEventListener("submit",e=>{e.preventDefault(); if(!valid()) return; const d=$("#binDone"); if(!d) return;
    d.hidden=false; d.innerHTML=`<b>Pedido registrado: ${ref}.</b> Ahora envía la captura del pago al WhatsApp <b class="mono">${esc(CONFIG.contacto.whatsapp)}</b> con tu referencia. Verificamos el pago y te enviamos el acceso a <b>${esc($("#cEmail").value.trim())}</b>.`});
  render();
}

/* ---------- estudiantes (demostración local) ---------- */
const PZ_TIPO={curso:"♞",programa:"♛",ebook:"♝",kit:"♜"};
const CHECK=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
const BACK=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>`;
function stCover(p){return `<div class="st-cover rz-${rz(p)}" aria-hidden="true">${SVGP(PZ_TIPO[p.tipo]||"♟")}<span>${TIPO_LABEL[p.tipo]}</span></div>`}
function stState(){
  const prog=store.get("ed_progress",{});
  const done=p=>p.lecciones?p.lecciones.filter((_,i)=>prog[p.id+"-"+i]).length:0;
  const pct=p=>p.lecciones?Math.round(done(p)/p.lecciones.length*100):0;
  const next=p=>{const i=p.lecciones.findIndex((_,k)=>!prog[p.id+"-"+k]);return i<0?p.lecciones.length-1:i};
  return {prog,done,pct,next};
}
const stOwned=()=>CONFIG.estudiantes.demo.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean);
const lsName=t=>t.replace(/^Semana \d+:\s*/,"");
function stCta(p,s){const d=s.done(p);return d===0?"Empezar":d===p.lecciones.length?"Repasar":"Continuar"}
function viewEstudiantes(){
  const u=store.get("ed_user",null);
  const wa="https://wa.me/"+CONFIG.contacto.whatsapp.replace(/\D/g,"")+"?text="+encodeURIComponent("Hola, no puedo entrar a mi área de estudiantes.");
  if(!u) return `<div class="page"><section class="band"><div class="wrap split">
      <div class="stack" style="gap:14px"><span class="eyebrow">Área de estudiantes</span><h1 class="big page-title">Tu <span class="red">tablero</span></h1><p class="lede muted">Entra para ver tus cursos, programas y ebooks, retomar donde lo dejaste y usar el analizador de Meta Ads.</p>
        <p class="notice">Versión de demostración: el acceso se guarda solo en este navegador. Puedes entrar con cualquier correo para ver cómo funciona.</p></div>
      <form class="card stack" id="loginForm" style="gap:16px;padding:32px;border-top:3px solid var(--red)" novalidate>
        <h3>Iniciar sesión</h3>
        <label class="f">Correo<input type="email" id="lEmail" autocomplete="email" required></label>
        <label class="f">Contraseña<input type="password" id="lPass" autocomplete="current-password" required></label>
        <p class="err" id="lErr" hidden></p>
        <div><button class="btn" type="submit">Entrar</button></div>
        <p class="muted" style="font-size:.88rem">¿Olvidaste tu contraseña? <a href="${wa}" target="_blank" rel="noopener">Escríbeme al WhatsApp</a>.<br>¿Aún no tienes acceso? <a href="#academia">Elige un curso</a>.</p>
      </form>
    </div></section></div>`;
  const owned=stOwned(), s=stState();
  const v=store.get("ed_view",null), vp=v&&owned.find(p=>p.id===v.p&&p.lecciones);
  if(vp) return viewLeccion(vp,Math.min(Math.max(0,v.l|0),vp.lecciones.length-1),s);
  const courses=owned.filter(p=>p.lecciones);
  const total=courses.reduce((n,p)=>n+p.lecciones.length,0), hechas=courses.reduce((n,p)=>n+s.done(p),0);
  const last=store.get("ed_last",null), cont=courses.find(p=>p.id===last)||courses.find(p=>s.pct(p)<100)||courses[0];
  const free=CONFIG.skills.filter(k=>!k.precio).length;
  const rec=PRODUCTS.filter(p=>!owned.includes(p)&&!p.pronto).sort(byBadge).slice(0,3);
  const item=p=>{
    let foot;
    if(p.lecciones) foot=`<div class="course-row"><div class="prog"><i style="width:${s.pct(p)}%"></i></div><span class="mono" style="font-size:.8rem">${s.pct(p)}%</span></div>
      <div class="row"><button class="btn" data-st-open="${p.id}:${s.next(p)}">${stCta(p,s)}</button><span class="muted" style="font-size:.85rem">${s.done(p)} de ${p.lecciones.length} lecciones</span></div>`;
    else if(p.pronto) foot=`<p class="st-note">Preventa: te llega a tu correo y aparece aquí el día que sale.</p>`;
    else{ const mine=(store.get("ed_rating",{}))[p.id]||0;
      foot=`<div class="row">${p.pdf?`<a class="btn" href="${esc(p.pdf)}" download>Descargar PDF</a>`:`<button class="btn" disabled>PDF en preparación</button>`}<span class="muted" style="font-size:.85rem">${esc(p.dur)}</span></div>
      <div class="st-rate"><span class="muted">${mine?"Tu calificación":"Califícalo"}</span><span class="stars">${[1,2,3,4,5].map(n=>`<button type="button" class="${n<=mine?"on":""}" data-st-rate="${p.id}:${n}" aria-label="${n} de 5 estrellas">${STAR}</button>`).join("")}</span></div>`; }
    return `<article class="st-item rz-${rz(p)}">${stCover(p)}<div class="stack" style="gap:10px">
      <div class="pd-tags"><span class="kind ${p.tipo==="programa"?"solid":""}">${TIPO_LABEL[p.tipo]}</span>${rzBadge(p)}</div>
      <h3><a class="card-link" href="#p-${p.id}">${esc(p.titulo)}</a></h3>${foot}</div></article>`;
  };
  return `<div class="page st"><section class="band"><div class="wrap stack" style="gap:36px">
    <div class="st-head"><div class="stack" style="gap:8px"><span class="eyebrow">Área de estudiantes</span><h1 class="big" style="font-size:clamp(2.6rem,6vw,4.6rem)">Hola, <span class="red">${esc(u.name)}</span></h1></div>
      <button class="btn ghost" id="logout">Cerrar sesión</button></div>
    ${cont?`<div class="st-cont">${stCover(cont)}
      <div class="stack" style="gap:10px"><span class="st-meta">${s.done(cont)?"Continúa donde lo dejaste":"Empieza por aquí"}</span>
        <h2>${esc(cont.titulo)}</h2>
        <p class="muted">${cont.tipo==="programa"?"Semana":"Lección"} ${String(s.next(cont)+1).padStart(2,"0")} de ${String(cont.lecciones.length).padStart(2,"0")} · ${esc(lsName(cont.lecciones[s.next(cont)]))}</p>
        <div class="course-row"><div class="prog"><i style="width:${s.pct(cont)}%"></i></div><span class="mono" style="font-size:.8rem">${s.pct(cont)}%</span></div></div>
      <div class="st-cont-go"><button class="btn" data-st-open="${cont.id}:${s.next(cont)}">${stCta(cont,s)}</button></div></div>`:""}
    <div class="st-stats">
      <div class="st-stat"><b>${owned.length}</b><span>Productos</span></div>
      <div class="st-stat"><b>${hechas}<small>/${total}</small></b><span>Lecciones hechas</span></div>
      <div class="st-stat"><b>${total?Math.round(hechas/total*100):0}%</b><span>Avance total</span></div></div>
    <div class="stack" style="gap:16px"><span class="eyebrow">Mis productos</span><div class="st-grid">${owned.map(item).join("")}</div></div>
    <div class="stack" style="gap:16px"><span class="eyebrow">Herramientas incluidas</span><div class="st-grid">
      <a class="st-tool" href="#analizador"><span class="kind solid">Herramienta</span><h3>Analizador de Meta Ads</h3><p class="muted">Sube el reporte de tus campañas y recibe un veredicto por cada una.</p><span class="st-go">Abrir el analizador</span></a>
      <a class="st-tool" href="#plataformas"><span class="kind">Biblioteca</span><h3>Skills para tu IA</h3><p class="muted">${free} skills incluidas para estudiantes, listas para cargar en tu IA.</p><span class="st-go">Ver las skills</span></a>
    </div></div>
  </div></section>
  ${rec.length?`<section class="band alt"><div class="wrap stack" style="gap:28px">
    <h2 class="big" style="font-size:clamp(2.4rem,5vw,4rem)">Tu siguiente <span class="red">jugada</span></h2>
    <div class="grid3">${rec.map(productCard).join("")}</div></div></section>`:""}</div>`;
}
function viewLeccion(p,i,s){
  const n=p.lecciones.length, lbl=p.tipo==="programa"?"Semana":"Lección", ok=!!s.prog[p.id+"-"+i];
  const vid=p.videos&&p.videos[i];
  return `<div class="page st"><section class="band"><div class="wrap stack" style="gap:24px">
    <a class="svc-back" href="#estudiantes" data-st-back>${BACK}Mi tablero</a>
    <div class="st-lesson">
      <div class="stack" style="gap:20px">
        <div class="st-player">${vid?`<video src="${esc(vid)}" controls playsinline preload="metadata"></video>`:`${SVGP(PZ_TIPO[p.tipo]||"♟")}<span>Video de la lección</span>`}</div>
        <div class="stack" style="gap:8px"><span class="st-meta">${esc(p.titulo)} · ${lbl} ${String(i+1).padStart(2,"0")} de ${String(n).padStart(2,"0")}</span>
          <h1 class="big st-title">${esc(lsName(p.lecciones[i]))}</h1></div>
        <div class="row">
          <button class="btn ${ok?"ghost":""}" data-st-done="${p.id}:${i}">${ok?CHECK+" Completada":"Marcar como completada"}</button>
          ${i<n-1?`<button class="btn ${ok?"":"ghost"}" data-st-next="${p.id}:${i}">Siguiente ${lbl.toLowerCase()}</button>`:`<a class="btn ghost" href="#estudiantes" data-st-back>Volver al tablero</a>`}
        </div>
      </div>
      <aside class="st-side">
        <b>${esc(p.titulo)}</b>
        <div class="course-row" style="margin-top:10px"><div class="prog"><i style="width:${s.pct(p)}%"></i></div><span class="mono" style="font-size:.8rem">${s.pct(p)}%</span></div>
        <ol class="st-list">${p.lecciones.map((l,k)=>`<li><button class="${k===i?"on":""}" data-st-open="${p.id}:${k}" ${k===i?'aria-current="step"':""}>
          <span class="st-check ${s.prog[p.id+"-"+k]?"ok":""}">${s.prog[p.id+"-"+k]?CHECK:""}</span><span>${esc(lsName(l))}</span></button></li>`).join("")}</ol>
      </aside>
    </div>
  </div></section></div>`;
}
function mountEstudiantes(){
  const f=$("#loginForm");
  if(f) f.addEventListener("submit",e=>{e.preventDefault();const em=$("#lEmail").value.trim(),pw=$("#lPass").value,er=$("#lErr");
    if(!/^\S+@\S+\.\S+$/.test(em)){er.textContent="Escribe un correo válido, por ejemplo nombre@gmail.com.";er.hidden=false;return}
    if(pw.length<4){er.textContent="La contraseña debe tener al menos 4 caracteres.";er.hidden=false;return}
    const n=em.split("@")[0]; store.set("ed_user",{email:em,name:n.charAt(0).toUpperCase()+n.slice(1)}); route();});
  const lo=$("#logout"); if(lo) lo.addEventListener("click",()=>{store.del("ed_user");store.del("ed_view");route()});
  const pick=v=>{const [id,l]=v.split(":");return {p:id,l:+l}};
  const setLesson=(id,l,done)=>{const pr=store.get("ed_progress",{});pr[id+"-"+l]=done;store.set("ed_progress",pr)};
  $$("[data-st-open]").forEach(b=>b.addEventListener("click",()=>{const v=pick(b.dataset.stOpen);store.set("ed_view",v);store.set("ed_last",v.p);route()}));
  $$("[data-st-back]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();store.del("ed_view");route()}));
  $$("[data-st-done]").forEach(b=>b.addEventListener("click",()=>{const v=pick(b.dataset.stDone),pr=store.get("ed_progress",{});setLesson(v.p,v.l,!pr[v.p+"-"+v.l]);route(false)}));
  $$("[data-st-rate]").forEach(b=>b.addEventListener("click",()=>{const [id,n]=b.dataset.stRate.split(":"),r=store.get("ed_rating",{});r[id]=+n;store.set("ed_rating",r);toast("Gracias por calificarlo");route(false)}));
  $$("[data-st-next]").forEach(b=>b.addEventListener("click",()=>{const v=pick(b.dataset.stNext);setLesson(v.p,v.l,true);store.set("ed_view",{p:v.p,l:v.l+1});route()}));
}

/* ---------- analizador Meta Ads (exclusivo) ---------- */
const SAMPLE_CSV=`Nombre de la campaña,Importe gastado (USD),Impresiones,Alcance,Clics en el enlace,Resultados,Valor de conversión de compras
Ventas - Curso Meta Ads - Lookalike 1%,184.20,41250,15800,742,21,777.00
Ventas - Ebook ganchos - Intereses,96.50,38900,9100,212,4,36.00
Leads - Diagnóstico gratis - Ecuador,142.80,52300,24100,1180,58,0
Retargeting - Visitantes 30 días,61.30,14800,3100,301,9,333.00
Reconocimiento - Video avatar IA,75.00,96400,61200,388,0,0`;
const DEF_BENCH={cpa:10,ctr:1,freq:3,roas:2};
let anaData=null, anaSource="ejemplo";
function norm(s){return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\(.*?\)/g,"").replace(/\s+/g," ").trim()}
function num(v){
  if(v==null) return 0; let s=String(v).replace(/[^\d,.\-]/g,""); if(!s) return 0;
  const c=s.lastIndexOf(","), d=s.lastIndexOf(".");
  if(c>-1&&d>-1){ s = c>d ? s.replace(/\./g,"").replace(",",".") : s.replace(/,/g,""); }
  else if(c>-1){ s = /,\d{1,2}$/.test(s) ? s.replace(/\./g,"").replace(",",".") : s.replace(/,/g,""); }
  else if((s.match(/\./g)||[]).length>1){ s=s.replace(/\./g,""); }
  const n=parseFloat(s); return isFinite(n)?n:0;
}
function parseCSV(text){
  text=text.replace(/^﻿/,""); const first=text.split(/\r?\n/)[0]||"";
  const delim=[",",";","\t"].sort((a,b)=>first.split(b).length-first.split(a).length)[0];
  const rows=[]; let row=[], cell="", q=false;
  for(let i=0;i<text.length;i++){const ch=text[i];
    if(q){ if(ch==='"'){ if(text[i+1]==='"'){cell+='"';i++} else q=false } else cell+=ch; }
    else if(ch==='"') q=true;
    else if(ch===delim){row.push(cell);cell=""}
    else if(ch==="\n"||ch==="\r"){ if(ch==="\r"&&text[i+1]==="\n") i++; row.push(cell); rows.push(row); row=[]; cell=""; }
    else cell+=ch;
  }
  if(cell||row.length){row.push(cell);rows.push(row)}
  return rows.filter(r=>r.some(c=>c.trim()!==""));
}
function mapCols(header){
  const h=header.map(norm), find=(...keys)=>h.findIndex(x=>keys.some(k=>typeof k==="string"?x.startsWith(k):k.test(x)));
  return {
    name:find("nombre de la campana","campaign name","nombre del conjunto","ad set name","nombre del anuncio","ad name"),
    spend:find("importe gastado","amount spent","gasto"),
    impr:find("impresiones","impressions"),
    reach:find("alcance","reach"),
    clicks:(()=>{const i=find("clics en el enlace","link clicks");return i>-1?i:find("clics","clicks")})(),
    results:find(/^resultados$/,/^results$/,"compras","purchases","clientes potenciales","leads"),
    value:find("valor de conversion de compras","purchases conversion value","valor de conversion","conversion value"),
    freq:find("frecuencia","frequency")
  };
}
function analyze(text){
  const rows=parseCSV(text); if(rows.length<2) throw new Error("El archivo no tiene filas de datos. Exporta el reporte con al menos una campaña.");
  const m=mapCols(rows[0]);
  const missing=[["spend","Importe gastado"],["impr","Impresiones"]].filter(([k])=>m[k]<0).map(([,l])=>l);
  if(missing.length) throw new Error("No encontré las columnas: "+missing.join(", ")+". En el Administrador de anuncios exporta con las columnas de Rendimiento y clics.");
  return rows.slice(1).map((r,i)=>{
    const spend=num(r[m.spend]), impr=num(r[m.impr]), reach=m.reach>-1?num(r[m.reach]):0, clicks=m.clicks>-1?num(r[m.clicks]):0,
      results=m.results>-1?num(r[m.results]):0, value=m.value>-1?num(r[m.value]):0;
    const freq=m.freq>-1&&num(r[m.freq])?num(r[m.freq]):(reach?impr/reach:0);
    return {name:(m.name>-1?r[m.name]:"")||("Fila "+(i+2)),spend,impr,reach,clicks,results,value,freq,
      ctr:impr?clicks/impr*100:0,cpc:clicks?spend/clicks:0,cpm:impr?spend/impr*1000:0,cpa:results?spend/results:0,roas:spend&&value?value/spend:0,hasValue:m.value>-1};
  }).filter(r=>r.spend>0||r.impr>0);
}
function diagnose(r,b){
  const issues=[], wins=[]; let level="tablas";
  const ord={tablas:0,buena:1,jaque:2,mate:3}, bump=l=>{if(ord[l]>ord[level]) level=l};
  if(r.hasValue&&r.value>0&&r.roas<1){issues.push(`ROAS de ${r.roas.toFixed(2)}: por cada $1 invertido recuperas ${money(r.roas,2)}. Está perdiendo dinero.`);bump("mate")}
  if(r.results===0&&r.spend>=b.cpa*2){issues.push(`Gastó ${money(r.spend,2)} sin resultados. Revisa el objetivo, la oferta o la página de destino.`);bump("mate")}
  if(r.results>0&&r.cpa>b.cpa*2){issues.push(`Costo por resultado de ${money(r.cpa,2)}: más del doble de tu objetivo (${money(b.cpa,2)}).`);bump("mate")}
  else if(r.results>0&&r.cpa>b.cpa){issues.push(`Costo por resultado de ${money(r.cpa,2)}, por encima de tu objetivo de ${money(b.cpa,2)}.`);bump("jaque")}
  if(r.impr>1000&&r.ctr<b.ctr){issues.push(`CTR de ${r.ctr.toFixed(2)}% (mínimo ${b.ctr}%): el anuncio no llama la atención. Prueba otro gancho en los primeros 3 segundos o una imagen distinta.`);bump("jaque")}
  if(r.freq>b.freq){issues.push(`Frecuencia de ${r.freq.toFixed(1)}: la misma gente ve el anuncio demasiadas veces. Renueva creatividades o amplía el público.`);bump("jaque")}
  if(r.hasValue&&r.roas>=1&&r.roas<b.roas){issues.push(`ROAS de ${r.roas.toFixed(2)}, debajo de tu mínimo de ${b.roas}. Gana poco margen.`);bump("jaque")}
  if(r.ctr>=b.ctr*1.5) wins.push(`CTR fuerte (${r.ctr.toFixed(2)}%): el creativo funciona, reutilízalo en otras campañas.`);
  if(r.results>0&&r.cpa<=b.cpa*0.7) wins.push(`Costo por resultado de ${money(r.cpa,2)}: 30% o más por debajo de tu objetivo.`);
  if(r.hasValue&&r.roas>=b.roas) wins.push(`ROAS de ${r.roas.toFixed(2)}: rentable.`);
  if(level==="tablas"&&wins.length&&r.freq<=b.freq&&r.results>0) level="buena";
  const verdict={mate:["Jaque mate","Pausa esta campaña o cambia la oferta antes de seguir invirtiendo."],
    jaque:["Jaque","Corrige los puntos marcados antes de subir el presupuesto."],
    buena:["Buena jugada","Escala el presupuesto 20% cada 3 días mientras el costo se mantenga."],
    tablas:["Tablas","Rendimiento estable. Mantén y prueba un creativo nuevo."]}[level];
  return {level,issues,wins,verdict};
}
function benchVals(){const g=id=>{const el=$("#"+id);const v=el?parseFloat(el.value):NaN;return isFinite(v)&&v>0?v:null};
  const b={cpa:g("bCpa")??DEF_BENCH.cpa,ctr:g("bCtr")??DEF_BENCH.ctr,freq:g("bFreq")??DEF_BENCH.freq,roas:g("bRoas")??DEF_BENCH.roas}; store.set("ed_bench",b); return b}
const hasAnalyzer=()=>!!store.get("ed_user",null);
function analyzerInputs(){
  const b=store.get("ed_bench",DEF_BENCH);
  return `<div class="split" style="gap:24px">
      <div class="stack" style="gap:12px">
        <label class="f">Archivo CSV del Administrador de anuncios<input type="file" id="csvFile" accept=".csv,text/csv,.txt"></label>
        <label class="f">O pega el contenido del CSV<textarea id="csvText" placeholder="Nombre de la campaña,Importe gastado (USD),Impresiones,..."></textarea></label>
        <div class="row"><button class="btn" id="anaRun">Analizar</button><button class="btn ghost" id="anaSample">Cargar ejemplo</button></div>
        <p class="err" id="anaErr" hidden></p>
      </div>
      <div class="stack" style="gap:12px"><b>Tus objetivos</b><p class="muted" style="font-size:.9rem">El diagnóstico compara cada campaña con estos valores. Ajústalos a tu negocio.</p>
        <div class="bench">
          <label class="f">CPA objetivo ($)<input type="number" id="bCpa" min="0" step="0.5" value="${b.cpa}"></label>
          <label class="f">CTR mínimo (%)<input type="number" id="bCtr" min="0" step="0.1" value="${b.ctr}"></label>
          <label class="f">Frecuencia máx.<input type="number" id="bFreq" min="0" step="0.1" value="${b.freq}"></label>
          <label class="f">ROAS mínimo<input type="number" id="bRoas" min="0" step="0.1" value="${b.roas}"></label>
        </div>
      </div>
    </div>`;
}
function viewAnalizador(){
  const ok=hasAnalyzer();
  const head=`<div class="stack" style="gap:12px"><span class="eyebrow">${ok?"Herramienta de estudiantes":"Exclusivo para estudiantes"}</span><h1 class="big page-title">Analizador <span class="red">Meta Ads</span></h1>
      <p class="lede muted">En el Administrador de anuncios entra a <b>Campañas</b>, elige las fechas y pulsa <b>Exportar → Exportar datos de la tabla (.csv)</b>. Sube ese archivo y recibe un veredicto por campaña. Los datos se analizan en tu navegador y no se envían a ningún lado.</p></div>`;
  if(ok) return `<div class="page"><section class="band" style="padding-bottom:40px"><div class="wrap stack" style="gap:28px">${head}${analyzerInputs()}</div></section><section id="anaOut"></section></div>`;
  return `<div class="page"><section class="band" style="padding-bottom:40px"><div class="wrap stack" style="gap:28px">${head}</div></section>
    <section class="locked"><div class="preview" id="anaOut" aria-hidden="true"></div>
      <div class="lock-card wrap"><div class="card">
        <span class="kind solid">Acceso exclusivo</span>
        <h2 class="big" style="font-size:clamp(2.2rem,5vw,3.4rem)">Desbloquea el analizador</h2>
        <p class="muted">Incluido gratis si eres estudiante de cualquier curso, programa o ebook. Si solo quieres la herramienta, cuesta ${money(CONFIG.analizador.precio)} USD y la usas desde tu área de estudiantes.</p>
        <ul class="checks"><li>Veredicto por campaña: pausar, corregir o escalar</li><li>CTR, CPC, CPM, frecuencia, CPA y ROAS calculados</li><li>Recomendaciones concretas para cada problema</li></ul>
        <div class="row"><button class="btn" data-buy="ana">Comprar por ${money(CONFIG.analizador.precio)}</button><a class="btn ghost" href="#estudiantes">Ya soy estudiante</a></div>
      </div></div>
    </section></div>`;
}
function renderAnalysis(){
  const out=$("#anaOut"); if(!out||!anaData) return;
  const b=$("#bCpa")?benchVals():store.get("ed_bench",DEF_BENCH), rows=anaData.map(r=>({...r,d:diagnose(r,b)}));
  const T=rows.reduce((a,r)=>({spend:a.spend+r.spend,impr:a.impr+r.impr,clicks:a.clicks+r.clicks,results:a.results+r.results,value:a.value+r.value}),{spend:0,impr:0,clicks:0,results:0,value:0});
  const anyValue=rows.some(r=>r.hasValue&&r.value>0);
  const counts={mate:0,jaque:0,buena:0,tablas:0}; rows.forEach(r=>counts[r.d.level]++);
  const maxSpend=Math.max(...rows.map(r=>r.spend),1), ord={mate:0,jaque:1,buena:2,tablas:3};
  const cls=(cond,lvl)=>cond?` class="${lvl}"`:"";
  out.innerHTML=`<div class="band alt" style="padding-block:56px"><div class="wrap stack" style="gap:28px">
    <div class="row" style="justify-content:space-between;align-items:end"><div class="stack" style="gap:8px"><h2 class="big" style="font-size:clamp(2.4rem,5vw,4rem)">Resumen de la partida</h2><p class="muted">${anaSource==="ejemplo"?"Datos de ejemplo":"Tu reporte"} · ${rows.length} campañas</p></div>
      <div class="row" style="gap:8px">${counts.mate?`<span class="chip mate">${counts.mate} jaque mate</span>`:""}${counts.jaque?`<span class="chip jaque">${counts.jaque} jaque</span>`:""}${counts.buena?`<span class="chip buena">${counts.buena} buena jugada</span>`:""}${counts.tablas?`<span class="chip tablas">${counts.tablas} tablas</span>`:""}</div></div>
    <div class="tiles">
      <div class="tile"><div class="k">Gasto total</div><div class="v">${money(T.spend,2)}</div></div>
      <div class="tile"><div class="k">Resultados</div><div class="v">${T.results.toLocaleString("es-EC")}</div></div>
      <div class="tile"><div class="k">Costo por resultado</div><div class="v">${T.results?money(T.spend/T.results,2):"—"}</div></div>
      <div class="tile"><div class="k">CTR promedio</div><div class="v">${T.impr?(T.clicks/T.impr*100).toFixed(2)+"%":"—"}</div></div>
      <div class="tile"><div class="k">ROAS</div><div class="v">${anyValue?(T.value/T.spend).toFixed(2):"—"}</div></div>
    </div>
  </div></div>
  <div class="band"><div class="wrap stack" style="gap:40px">
    <div class="stack" style="gap:16px"><span class="eyebrow">Dónde se va el dinero</span>
      <div class="bars">${rows.slice().sort((a,c)=>c.spend-a.spend).map(r=>`<div class="bar"><span class="bn" title="${esc(r.name)}">${esc(r.name)}</span><div class="bt"><div class="bf" style="width:${(r.spend/maxSpend*100).toFixed(1)}%"></div></div><span class="bv">${money(r.spend,2)}</span></div>`).join("")}</div>
    </div>
    <div class="stack" style="gap:16px"><span class="eyebrow">Métricas por campaña</span>
      <div class="tbl-wrap"><table><thead><tr><th>Campaña</th><th>Veredicto</th><th>Gasto</th><th>Impr.</th><th>CTR</th><th>CPC</th><th>CPM</th><th>Frec.</th><th>Result.</th><th>CPA</th><th>ROAS</th></tr></thead><tbody>
      ${rows.map(r=>`<tr><td>${esc(r.name)}</td><td><span class="chip ${r.d.level}">${r.d.verdict[0]}</span></td><td>${money(r.spend,2)}</td><td>${r.impr.toLocaleString("es-EC")}</td>
        <td${cls(r.impr>1000&&r.ctr<b.ctr,"warn")}>${r.ctr.toFixed(2)}%</td><td>${r.clicks?money(r.cpc,2):"—"}</td><td>${money(r.cpm,2)}</td>
        <td${cls(r.freq>b.freq,"warn")}>${r.freq?r.freq.toFixed(1):"—"}</td><td${cls(r.results===0&&r.spend>=b.cpa*2,"bad")}>${r.results}</td>
        <td${cls(r.results&&r.cpa>b.cpa*2,"bad")||cls(r.results&&r.cpa>b.cpa,"warn")}>${r.results?money(r.cpa,2):"—"}</td>
        <td${cls(r.hasValue&&r.value>0&&r.roas<1,"bad")||cls(r.hasValue&&r.roas>0&&r.roas<b.roas,"warn")}>${r.hasValue&&r.value>0?r.roas.toFixed(2):"—"}</td></tr>`).join("")}
      </tbody></table></div>
    </div>
    <div class="stack" style="gap:16px"><span class="eyebrow">Diagnóstico y siguiente jugada</span>
      <div class="diag">${rows.slice().sort((a,c)=>ord[a.d.level]-ord[c.d.level]).map(r=>`<div class="card ${r.d.level}">
        <div class="row" style="justify-content:space-between"><b style="min-width:0;overflow-wrap:anywhere">${esc(r.name)}</b><span class="chip ${r.d.level}">${r.d.verdict[0]}</span></div>
        <p><b>${r.d.verdict[1]}</b></p>
        ${r.d.issues.length?`<ul>${r.d.issues.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
        ${r.d.wins.length?`<ul class="muted">${r.d.wins.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
      </div>`).join("")}</div>
    </div>
  </div></div>`;
}
function mountAnalizador(){
  if(!anaData){anaData=analyze(SAMPLE_CSV);anaSource="ejemplo"}
  if(!hasAnalyzer()){renderAnalysis();return}
  const err=$("#anaErr");
  const run=(text,src)=>{try{anaData=analyze(text);anaSource=src;err.hidden=true;renderAnalysis()}catch(e){err.textContent=e.message;err.hidden=false}};
  $("#anaRun").addEventListener("click",()=>{const t=$("#csvText").value.trim(); if(!t){err.textContent="Sube un archivo o pega el contenido del CSV para analizar.";err.hidden=false;return} run(t,"propio")});
  $("#anaSample").addEventListener("click",()=>{$("#csvText").value=SAMPLE_CSV;run(SAMPLE_CSV,"ejemplo")});
  $("#csvFile").addEventListener("change",e=>{const f=e.target.files[0]; if(!f) return; const rd=new FileReader(); rd.onload=()=>{$("#csvText").value=rd.result;run(rd.result,"propio")}; rd.readAsText(f)});
  ["bCpa","bCtr","bFreq","bRoas"].forEach(id=>$("#"+id).addEventListener("input",renderAnalysis));
  renderAnalysis();
}

/* ---------- efectos globales ---------- */
function grain(){
  const c=$("#grain"), x=c.getContext("2d"); if(!x) return; c.width=160; c.height=160;
  const img=x.createImageData(160,160);
  const draw=()=>{for(let i=0;i<img.data.length;i+=4){const v=Math.random()*255;img.data[i]=img.data[i+1]=img.data[i+2]=v;img.data[i+3]=255}x.putImageData(img,0,0)};
  draw(); if(!REDUCED) setInterval(draw,90);
}
function cursor(){
  const cu=$("#cursor"); if(matchMedia("(pointer:coarse)").matches){cu.remove();return}
  let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my;
  addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY});
  document.addEventListener("mouseover",e=>cu.classList.toggle("hot",!!e.target.closest("a,button,label,.svc,.pill")));
  const tick=()=>{cx+=(mx-cx)*.2;cy+=(my-cy)*.2;cu.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(tick)}; tick();
  document.addEventListener("mousemove",e=>{const b=e.target.closest(".magnetic"); $$(".magnetic").forEach(m=>{if(m!==b) m.style.transform=""});
    if(b){const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.35}px)`}});
}
function initLenis(){
  if(REDUCED||typeof Lenis==="undefined"||!HAS_GSAP) return;
  lenis=new Lenis({lerp:.1,smoothWheel:true});
  lenis.on("scroll",ScrollTrigger.update);
  gsap.ticker.add(t=>lenis.raf(t*1000)); gsap.ticker.lagSmoothing(0);
}

/* ---------- router ---------- */
const ROUTES={inicio:viewHome,servicios:viewServicios,academia:viewAcademia,plataformas:viewPlataformas,checkout:viewCheckout,estudiantes:viewEstudiantes,analizador:viewAnalizador};
function route(scrollTop=true){
  let r=(location.hash||"#inicio").slice(1); if(r==="avatar-ia") r="contenido"; // el avatar IA ahora vive dentro de Contenido
  const prod=r.startsWith("p-")?PRODUCTS.find(x=>"p-"+x.id===r):null;
  if(!ROUTES[r]&&!SERVICES[r]&&!prod) r="inicio";
  if(HAS_GSAP){ScrollTrigger.getAll().forEach(t=>t.kill())}
  const y=scrollY;
  document.body.classList.remove("has-bar");
  $("#app").innerHTML=SERVICES[r]?viewService(r):prod?viewProduct(prod.id):ROUTES[r]();
  $$("[data-nav]").forEach(a=>a.classList.toggle("on",a.dataset.nav===r||(r in SERVICES&&a.dataset.nav==="servicios")||(prod&&a.dataset.nav==="academia")));
  if(prod) mountProduct();
  $("#mainNav").classList.remove("open"); $("#menuBtn").setAttribute("aria-expanded","false");
  if(scrollTop){ if(lenis) lenis.scrollTo(0,{immediate:true}); window.scrollTo(0,0) } else window.scrollTo(0,y);
  if(r==="inicio") mountHome(); else hydrateMedia($("#app"));
  if(r==="servicios"){ mountFunnel(); mountShowcase() }
  if(r==="academia") mountTxtVid();
  if(r==="checkout") mountCheckout(); if(r==="estudiantes") mountEstudiantes(); if(r==="analizador") mountAnalizador();
  if(r!=="inicio"&&HAS_GSAP&&!REDUCED){ gsap.from("#app .page h1, #app .page .lede",{y:40,opacity:0,duration:.9,stagger:.08,ease:"expo.out"}) }
  if(HAS_GSAP) ScrollTrigger.refresh();
}
document.addEventListener("click",e=>{
  const buy=e.target.closest("[data-buy]"); if(buy){try{sessionStorage.setItem("ed_item",buy.dataset.buy)}catch(x){} if(location.hash==="#checkout") route(); else location.hash="checkout"; return}
  const go=e.target.closest("[data-go]"); if(go){location.hash=go.dataset.go;return}
  const fl=e.target.closest("[data-filter]"); if(fl){acadFilter=fl.dataset.filter;route(false);return}
  const cp=e.target.closest("[data-copy]"); if(cp){copyText(cp.dataset.copy,cp);return}
  const sc=e.target.closest("[data-scroll]"); if(sc){e.preventDefault();const t=document.getElementById(sc.dataset.scroll); if(t){ if(lenis) lenis.scrollTo(t,{offset:-80}); else t.scrollIntoView({behavior:"smooth"}) } return}
});
$("#menuBtn").addEventListener("click",()=>{const n=$("#mainNav");n.classList.toggle("open");$("#menuBtn").setAttribute("aria-expanded",n.classList.contains("open"))});
addEventListener("hashchange",()=>route());
$("#yr").textContent=new Date().getFullYear();
$("#footContact").textContent="WhatsApp "+CONFIG.contacto.whatsapp;
grain(); cursor(); initLenis();
route(false);
