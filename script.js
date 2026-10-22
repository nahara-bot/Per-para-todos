const destinations = [
  {name:"Machu Picchu",place:"Cusco",region:"Sierra",type:"Cultura",tag:"Maravilla del mundo",time:"1–2 días",season:"Mayo a septiembre suele ser más seco",image:"https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=85",description:"La ciudadela inca, rodeada de montañas verdes y nubes, es uno de los sitios arqueológicos más reconocidos del planeta. Su arquitectura y su entorno revelan la extraordinaria adaptación de los incas al paisaje andino.",tips:["Compra las entradas con anticipación mediante los canales oficiales.","Confirma el circuito de visita y los horarios vigentes.","Lleva agua, protección solar y calzado cómodo."]},
  {name:"Montaña de Siete Colores",place:"Cusco",region:"Sierra",type:"Aventura",tag:"Paisaje de altura",time:"Día completo",season:"Temporada seca, según condiciones locales",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",description:"Vinicunca es conocida por sus franjas minerales de colores y sus vistas de la cordillera. La caminata alcanza gran altitud, por lo que la aclimatación y la condición física son importantes.",tips:["Aclimátate en Cusco antes de hacer la excursión.","Consulta el estado del camino y el clima el día anterior.","Considera una alternativa si tienes síntomas relacionados con la altura."]},
  {name:"Centro Histórico de Arequipa",place:"Arequipa",region:"Sierra",type:"Cultura",tag:"Arquitectura de sillar",time:"1–2 días",season:"Abril a noviembre suele ofrecer días más secos",image:"https://images.unsplash.com/photo-1596395819057-e37f55c8516c?auto=format&fit=crop&w=1000&q=85",description:"La Ciudad Blanca combina casonas, patios y templos construidos con sillar volcánico, con el volcán Misti como telón de fondo. Su cocina regional es parte esencial de la visita.",tips:["Recorre el centro histórico a pie durante el día.","Prueba la gastronomía local en establecimientos reconocidos.","Consulta las condiciones de acceso si planeas visitar el Colca."]},
  {name:"Lago Titicaca",place:"Puno",region:"Sierra",type:"Naturaleza",tag:"Cultura lacustre",time:"2–3 días",season:"Mayo a octubre suele ser más seco y frío",image:"https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=85",description:"En el altiplano, el Titicaca reúne paisajes amplios y comunidades con tradiciones ancestrales. Las visitas a islas y poblaciones permiten conocer formas de vida vinculadas al lago.",tips:["Lleva ropa abrigadora: la temperatura puede bajar rápidamente.","Elige operadores que trabajen respetuosamente con las comunidades.","Confirma horarios y salidas de embarcaciones."]},
  {name:"Líneas de Nasca",place:"Nasca, Ica",region:"Costa",type:"Cultura",tag:"Misterio en el desierto",time:"Medio día–1 día",season:"Todo el año, sujeto al clima",image:"https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=85",description:"En la pampa de Nasca se extienden geoglifos monumentales de animales, figuras y líneas geométricas creados por culturas prehispánicas. Pueden apreciarse desde miradores y sobrevuelos autorizados.",tips:["Si eliges sobrevuelo, revisa la seguridad y autorización del operador.","Protege tus pertenencias del polvo y el sol.","Respeta las zonas arqueológicas delimitadas."]},
  {name:"Reserva Nacional de Paracas",place:"Ica",region:"Costa",type:"Naturaleza",tag:"Desierto y océano",time:"1–2 días",season:"Todo el año; revisa viento y condiciones marinas",image:"https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=85",description:"Un paisaje donde el desierto se encuentra con el Pacífico. Sus acantilados, playas, fauna marina y excursiones en barco convierten a Paracas en una escapada ideal desde Lima.",tips:["Usa protector solar, sombrero y agua.","Las excursiones marítimas dependen del estado del mar.","No alimentes ni molestes a la fauna silvestre."]},
  {name:"Huacachina",place:"Ica",region:"Costa",type:"Aventura",tag:"Oasis entre dunas",time:"Medio día–1 día",season:"Todo el año, con calor intenso en verano",image:"https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=85",description:"Este oasis rodeado de dunas ofrece atardeceres, paseos por el desierto y actividades como sandboard en servicios autorizados. La ciudad de Ica queda a poca distancia.",tips:["Contrata conductores y operadores formales para actividades en dunas.","Evita las horas de mayor radiación solar.","Lleva lentes de sol y protege tus dispositivos de la arena."]},
  {name:"Centro Histórico de Lima",place:"Lima",region:"Costa",type:"Gastronomía",tag:"Capital gastronómica",time:"1–3 días",season:"Todo el año; invierno con neblina frecuente",image:"https://images.unsplash.com/photo-1531968455001-5c5272a41129?auto=format&fit=crop&w=1000&q=85",description:"La capital mezcla arquitectura histórica, museos, barrios costeros y una escena gastronómica reconocida. Barranco, Miraflores y el centro histórico ofrecen experiencias muy distintas.",tips:["Revisa horarios de museos y monumentos antes de ir.","Usa transporte confiable y mantén tus objetos personales seguros.","Reserva con anticipación restaurantes populares."]},
  {name:"Máncora",place:"Piura",region:"Costa",type:"Playa",tag:"Sol y mar",time:"2–4 días",season:"Más cálido entre diciembre y abril, según el año",image:"https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",description:"Máncora es conocida por sus playas, surf, clima cálido y ambiente relajado. En la costa norte también puedes explorar caletas, cocina marina y otros balnearios cercanos.",tips:["Consulta el oleaje y las indicaciones de salvavidas.","Usa protección solar y mantente hidratado.","Pregunta por temporadas de fauna marina y normas locales."]},
  {name:"Cañón del Colca",place:"Arequipa",region:"Sierra",type:"Naturaleza",tag:"Cóndores y andenes",time:"2–3 días",season:"Abril a noviembre suele ser más seco",image:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85",description:"Uno de los paisajes más impresionantes del sur peruano, con terrazas agrícolas, pueblos tradicionales y miradores donde, con suerte, se observa el vuelo del cóndor andino.",tips:["Planifica el recorrido considerando la altitud y las distancias.","Lleva capas de abrigo y protección solar.","Confirma rutas y condiciones del camino localmente."]},
  {name:"Kuélap",place:"Amazonas",region:"Selva",type:"Cultura",tag:"Fortaleza en las nubes",time:"1–2 días",season:"Consulta lluvias y operación de accesos",image:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85",description:"El complejo arqueológico de Kuélap, asociado a la cultura Chachapoya, se encuentra en un paisaje de montaña y bosque nuboso. Su visita permite acercarse a una historia distinta de la tradición inca.",tips:["Verifica el estado del acceso y las restricciones vigentes antes de viajar.","Lleva impermeable y calzado con buen agarre.","Respeta los circuitos señalizados y las indicaciones del personal."]},
  {name:"Parque Nacional del Manu",place:"Madre de Dios y Cusco",region:"Selva",type:"Naturaleza",tag:"Biodiversidad amazónica",time:"Varios días",season:"Mayo a octubre suele ser menos lluvioso",image:"https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=85",description:"El Manu protege ecosistemas que van desde los Andes hasta la Amazonía baja. Es un destino para observar biodiversidad con guías autorizados y bajo normas estrictas de conservación.",tips:["Organiza la visita con operadores autorizados y con experiencia.","Respeta las restricciones de acceso y la vida silvestre.","Lleva ropa ligera de manga larga y protección contra insectos."]},
  {name:"Iquitos y el río Amazonas",place:"Loreto",region:"Selva",type:"Aventura",tag:"Puerta a la Amazonía",time:"3–5 días",season:"Todo el año; el nivel del río cambia por temporada",image:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85",description:"Iquitos es una puerta de entrada a la selva amazónica peruana. Los paseos fluviales, mercados y excursiones comunitarias permiten conocer la vida vinculada al gran río y sus afluentes.",tips:["Comprueba vacunas y recomendaciones sanitarias con un profesional de salud.","Elige excursiones responsables que no exploten fauna silvestre.","Lleva repelente, ropa fresca y bolsas impermeables."]},
  {name:"Oxapampa",place:"Pasco",region:"Selva",type:"Naturaleza",tag:"Bosques y cultura",time:"2–3 días",season:"Consulta el pronóstico: puede llover durante todo el año",image:"https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=85",description:"Entre bosques, cataratas y colinas verdes, Oxapampa reúne herencias culturales diversas y una gastronomía propia. Es una base para explorar áreas naturales y pequeñas localidades de la selva central.",tips:["Lleva impermeable y calzado apropiado para senderos.","Consulta el estado de las vías si viajas en época de lluvias.","Compra productos locales y respeta las áreas protegidas."]},
  {name:"Choquequirao",place:"Cusco",region:"Sierra",type:"Aventura",tag:"Trekking desafiante",time:"4–5 días",season:"Mayo a septiembre suele ser más seco",image:"https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85",description:"Un complejo arqueológico de gran extensión en los Andes, accesible mediante una caminata exigente. Su relativa lejanía ofrece una experiencia de trekking y exploración histórica para viajeros preparados.",tips:["Contrata guía o planifica con experiencia en trekking de varios días.","Lleva suficiente agua, equipo y suministros apropiados.","Verifica el estado de los senderos y permisos antes de salir."]},
  {name:"Chiclayo y Sipán",place:"Lambayeque",region:"Costa",type:"Cultura",tag:"Legado mochica",time:"2 días",season:"Todo el año; consulta el clima local",image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=85",description:"La región de Lambayeque permite conocer la sofisticación de la cultura mochica a través de museos y sitios arqueológicos, además de disfrutar de una cocina norteña con identidad propia.",tips:["Consulta horarios de museos y sitios arqueológicos.","Combina las visitas con tiempo para probar la gastronomía local.","Lleva agua y protección solar en recorridos al aire libre."]},
  {name:"Cajamarca",place:"Cajamarca",region:"Sierra",type:"Cultura",tag:"Historia y aguas termales",time:"2–3 días",season:"Según lluvias y festividades",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85",description:"Cajamarca combina arquitectura colonial, memoria histórica, paisajes rurales y aguas termales. Sus alrededores ofrecen rutas hacia granjas, miradores y comunidades andinas.",tips:["Reserva alojamiento durante festividades importantes.","Consulta condiciones de carretera para excursiones rurales.","Respeta los espacios patrimoniales y las costumbres locales."]},
  {name:"Tarapoto",place:"San Martín",region:"Selva",type:"Naturaleza",tag:"Cataratas y lagunas",time:"3–4 días",season:"Todo el año; lluvias pueden afectar rutas",image:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1000&q=85",description:"Tarapoto es una base popular para visitar cataratas, lagunas y paisajes tropicales. La región ofrece frutas amazónicas, café, cacao y una gran variedad de platos locales.",tips:["Consulta el estado de los caminos y cataratas tras lluvias fuertes.","Usa calzado antideslizante para senderos húmedos.","Contrata guías locales cuando el recorrido lo requiera."]},
  {name:"Reserva Nacional de Tambopata",place:"Madre de Dios",region:"Selva",type:"Naturaleza",tag:"Fauna amazónica",time:"3–5 días",season:"Mayo a octubre suele ser menos lluvioso",image:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",description:"Lagos, bosques tropicales y una enorme diversidad de aves, mamíferos y plantas hacen de Tambopata un lugar destacado para el ecoturismo y la observación de naturaleza.",tips:["Reserva con operadores formales y comprometidos con la conservación.","No alimentes ni intentes tocar animales silvestres.","Confirma los traslados fluviales y el equipo recomendado."]},
  {name:"Parque Nacional Huascarán",place:"Áncash",region:"Sierra",type:"Aventura",tag:"Cordillera Blanca",time:"2–5 días",season:"Mayo a septiembre suele ser más seco",image:"https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=85",description:"La Cordillera Blanca ofrece montañas nevadas, lagunas turquesas y rutas para distintos niveles de experiencia. Es un destino de alta montaña donde la planificación y el respeto por el entorno son fundamentales.",tips:["Aclimátate y evalúa tu condición física antes de caminar en altura.","Consulta permisos, estado de senderos y pronóstico meteorológico.","No dejes residuos y sigue las rutas establecidas."]},
  {name:"Trujillo y Chan Chan",place:"La Libertad",region:"Costa",type:"Cultura",tag:"Ciudad de barro",time:"2 días",season:"Todo el año; clima generalmente seco",image:"https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1000&q=85",description:"Trujillo combina casonas coloridas, tradición marinera y el legado de Chan Chan, la gran ciudad de adobe de la cultura Chimú. Cerca se encuentran otros importantes sitios arqueológicos.",tips:["Protege la piel del sol en visitas a sitios abiertos.","Consulta qué sectores están habilitados para visitantes.","Dedica tiempo a conocer la gastronomía y las tradiciones locales."]},
  {name:"Pachacámac",place:"Lima",region:"Costa",type:"Cultura",tag:"Santuario ancestral",time:"Medio día",season:"Todo el año; consulta horarios",image:"https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?auto=format&fit=crop&w=1000&q=85",description:"Este importante centro ceremonial prehispánico al sur de Lima reúne templos, plazas y un museo de sitio. Es una excursión accesible para conocer las culturas que precedieron al periodo inca.",tips:["Comprueba horarios y tarifas en el museo o canal oficial.","Lleva agua y sombrero para caminar por áreas expuestas.","Permanece en los senderos permitidos."]},
  {name:"Valle Sagrado de los Incas",place:"Cusco",region:"Sierra",type:"Cultura",tag:"Pueblos y terrazas",time:"2–3 días",season:"Mayo a septiembre suele ser más seco",image:"https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1000&q=85",description:"El Valle Sagrado reúne pueblos andinos, terrazas agrícolas, mercados y restos arqueológicos en un paisaje de montañas y río. Es una buena forma de conocer el entorno cultural de Cusco con un ritmo más pausado.",tips:["Planifica traslados entre pueblos y sitios arqueológicos.","Pregunta por normas de fotografía en comunidades y mercados.","Aclimátate antes de realizar caminatas exigentes."]},
  {name:"Punta Sal",place:"Tumbes",region:"Costa",type:"Playa",tag:"Descanso junto al mar",time:"2–4 días",season:"Más cálido entre diciembre y abril, según el año",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85",description:"Punta Sal es conocida por sus playas de arena clara y aguas cálidas en el extremo norte peruano. Es ideal para combinar descanso, paseos en el mar y cocina de pescados y mariscos.",tips:["Consulta el estado del mar y las indicaciones de seguridad.","Usa protector solar y evita dejar residuos en la playa.","Reserva alojamiento con anticipación en fechas de alta demanda."]}
];

const grid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
let selectedRegion = "Todos";

function destinationCard(destination, index) {
  const card = document.createElement("article");
  card.className = "destination-card";
  card.style.setProperty("--card-index", index % 6);
  card.innerHTML = `
    <button class="card-image-button" aria-label="Ver detalles de ${destination.name}">
      <img src="${destination.image}" alt="Paisaje de ${destination.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback')">
      <span class="region-label">${destination.region}</span><span class="image-arrow">↗</span>
    </button>
    <div class="card-body">
      <p class="card-location">${destination.place}</p>
      <h3>${destination.name}</h3>
      <p class="card-description">${destination.description}</p>
      <div class="card-footer"><span>${destination.tag}</span><button class="details-button" aria-label="Más información sobre ${destination.name}">Explorar ↗</button></div>
    </div>`;
  card.querySelector("button").addEventListener("click", () => openDestination(destination));
  card.querySelector(".details-button").addEventListener("click", () => openDestination(destination));
  return card;
}

function renderDestinations() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");
  const type = typeFilter.value;
  const filtered = destinations.filter(d => {
    const matchesQuery = [d.name, d.place, d.region, d.type, d.tag, d.description].join(" ").toLocaleLowerCase("es").includes(query);
    return matchesQuery && (selectedRegion === "Todos" || d.region === selectedRegion) && (type === "Todos" || d.type === type);
  });
  grid.replaceChildren(...filtered.map(destinationCard));
  resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? "destino encontrado" : "destinos encontrados"}`;
  emptyState.hidden = filtered.length !== 0;
}

function openDestination(d) {
  const dialog = document.getElementById("destinationDialog");
  const image = document.getElementById("dialogImage");
  image.src = d.image;
  image.alt = `Paisaje de ${d.name}`;
  image.onerror = () => { image.style.display = "none"; };
  image.onload = () => { image.style.display = "block"; };
  document.getElementById("dialogRegion").textContent = `${d.region} · ${d.place}`;
  document.getElementById("dialogTitle").textContent = d.name;
  document.getElementById("dialogDescription").textContent = d.description;
  document.getElementById("dialogMeta").innerHTML = `<span>◷ ${d.time}</span><span>✦ ${d.season}</span><span>⌁ ${d.type}</span>`;
  const tips = document.getElementById("dialogTips");
  tips.replaceChildren(...d.tips.map(tip => { const li = document.createElement("li"); li.textContent = tip; return li; }));
  dialog.showModal();
}

document.querySelectorAll(".filter-chip").forEach(button => {
  button.addEventListener("click", () => {
    selectedRegion = button.dataset.region;
    document.querySelectorAll(".filter-chip").forEach(b => b.classList.toggle("active", b === button));
    renderDestinations();
  });
});
searchInput.addEventListener("input", renderDestinations);
typeFilter.addEventListener("change", renderDestinations);
document.querySelectorAll("[data-experience]").forEach(button => {
  button.addEventListener("click", () => {
    typeFilter.value = button.dataset.experience;
    document.getElementById("destinos").scrollIntoView({behavior:"smooth"});
    renderDestinations();
  });
});
document.getElementById("dialogClose").addEventListener("click", () => document.getElementById("destinationDialog").close());
document.getElementById("destinationDialog").addEventListener("click", event => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  mainNav.classList.toggle("nav-open", !expanded);
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("nav-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderDestinations();
