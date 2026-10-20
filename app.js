/* ==========================================================================
   MANEJADORES - INTERACTIVE APPLICATION LOGIC & SPA ROUTER
   Features: SPA Routing (#influencer/*, #channel/*, #asesorias, #logos, #gantt),
   Dedicated Subpage Renderers, Interactive Logo Showcase, Advisory Booking,
   Interactive Gantt Chart & Copy Hub.
   ========================================================================== */

// --- 1. SVG LOGO PROPOSALS DATA & SYSTEM ---
const logoProposals = {
  play_modular: {
    id: "play_modular",
    title: "Identidad Oficial: 3D Neón Play Modular",
    subtitle: "Agencia de Producción de Medios Digitales — Logotipo Oficial",
    desc: "Silueta 3D hiperedición en acabado neón magenta/cian con flecha ascendente de resultados y tipografía de agencia.",
    svg: `<img src="logo_full.png" alt="Los Manejadores 3D Logo" class="logo-icon-img" style="width:100%; border-radius:16px; box-shadow:0 8px 25px rgba(139,92,246,0.4);" />`,
    navSvg: `<img src="logo_emblem.png" alt="Los Manejadores Emblem" class="navbar-logo-img" />`
  }
};

let currentLogoKey = 'play_modular';

function applyLogo(key) {
  if (!logoProposals[key]) key = 'play_modular';
  currentLogoKey = key;
  localStorage.setItem('los_manejadores_logo_pref', key);

  const container = document.getElementById('navbar-logo-container');
  if (container) {
    container.innerHTML = logoProposals[key].navSvg;
  }

  // Update selector UI if rendered
  document.querySelectorAll('.logo-option-card').forEach(card => {
    card.classList.remove('selected-logo');
    if (card.getAttribute('data-logo-id') === key) {
      card.classList.add('selected-logo');
    }
  });
}

// --- 2. DETAILED DATA MODELS FOR INFLUENCERS & CHANNELS ---
// --- 2. DETAILED DATA MODELS FOR INFLUENCERS & CHANNELS ---
const influencersData = {
  elena: {
    id: "elena",
    name: "Elena Daddario",
    niche: "Psicología, Bienestar Emocional & Lifestyle Consciente",
    badge: "Personaje Listo • A cargo de Daniel",
    avatar: "elena_avatar.png",
    tagline: "European elegant + mindful travel. Reflexiones de psicología y conexión humana desde Miraflores.",
    keyMarkets: "Perú, España, Chile, México y profesionales hispanohablantes en Europa.",
    story: "Nacida en San Petersburgo y cautivada por la costa del Pacífico y la luz limeña, Elena se estableció en Miraflores tras culminar sus estudios de psicología aplicada y mindfulness somático. Desde su departamento con vistas al mar, combina su pasión por el pilates reformer con la investigación del bienestar emocional contemporáneo. Elena encarna la sofisticación europea atemporal sin frialdad: es una voz cálida, sabia y cercana que ayuda a profesionales de alta exigencia a pausar, respirar y reconectar con su propósito interior.",
    bio: "Elena Daddario (27 años) es una creadora de origen ruso (San Petersburgo) radicada en Miraflores, Lima. Combina estudios de psicología con un estilo de vida de elegancia europea contemporánea (estilo Viena), práctica de pilates, alta gastronomía consciente y trabajo online con una fundación de reinserción social. Su misión es inspirar el autoconocimiento, la superación de bloqueos emocionales y la vida consciente sin tabúes ni vulgaridad.",
    archetype: "European Elegant + Mindful Psychologist (La Sabia Cálida)",
    techStack: "Nano Banana Pro / Flux LoRA Consistencia (Ref: Olga Nikaloeva) + ElevenLabs Inflexión Eslava Cálida + Kling 3.0",
    targetAudience: "Adultos jóvenes, profesionales y creativos de 22 a 42 años interesados en salud mental, viajes conscientes, relaciones y bienestar.",
    channels: "Instagram (@elena.mindful), TikTok, Substack Newsletter, Fanvue VIP ($14/mes)",
    gallery: [
      {
        img: "elena_avatar.png",
        tag: "Retrato Matriz LoRA (98.6% Match)",
        label: "Elena Daddario • Retrato Studio Miraflores",
        desc: "Estética Viena, iluminación suave natural, 35mm, textura de piel fotorrealista sin suavizado artificial."
      },
      {
        img: "elena_photo2.png",
        tag: "Consistencia Dinámica",
        label: "Sesión Pilates & Mindful Living",
        desc: "Consistencia facial preservada en pose corporal completa y entorno dinámico de estudio de pilates."
      }
    ],
    voice: {
      title: "Inflexión Eslava Cálida (ElevenLabs)",
      badge: "Voice ID: Elena-RuPE",
      duration: "0:22",
      transcript: "«Hola a todos. Soy Elena. En un mundo saturado de ruido y prisa, aprender a pausar y conectar con nuestro bienestar no es un lujo, es una necesidad vital. Acompáñame a cultivar una mente en calma.»",
      rate: 0.95,
      pitch: 1.05,
      lang: "es-ES"
    },
    roi: {
      defaultFollowers: 65000,
      defaultConversion: 1.8,
      defaultTicket: 14
    },
    promptScenes: {
      casual: {
        label: "📸 Selfie Casual",
        tags: ["Nano Banana Pro", "Flux LoRA", "--ar 4:5"],
        text: "Casual candid close-up selfie of Elena Daddario, 27yo Russian woman with blonde hair, bright blue eyes, wearing oversized cream knit sweater, sitting at a sunlit wooden table in a Miraflores cafe, holding a porcelain cup of matcha latte, soft warm natural window light, shot on iPhone 15 Pro, subtle film grain, unposed, photorealistic skin --ar 4:5"
      },
      editorial: {
        label: "👗 Sesión Editorial",
        tags: ["Flux.1 Dev", "Studio Master", "--ar 16:9"],
        text: "High-end editorial fashion portrait of Elena Daddario, 27yo Russian psychologist, sleek tied-back blonde hair, tailored beige linen blazer over silk top, standing on the balcony of a modernist apartment in Miraflores overlooking the Pacific ocean at golden hour, 85mm f/1.4 lens, Hasselblad medium format color grading, exquisite fabric texture, 8K --ar 16:9"
      },
      fitness: {
        label: "🧘‍♀️ Pilates & Mindful",
        tags: ["Nano Banana", "Action Pose", "--ar 4:5"],
        text: "Full body environmental portrait of Elena Daddario during a reformer pilates session in a bright minimalist sunlit studio, wearing sage-green athletic pilates wear, focused serene expression, graceful posture, natural highlights on shoulders, architectural plants in background, 50mm f/1.8 lens --ar 4:5"
      },
      video: {
        label: "🎬 Video Kling 3.0",
        tags: ["Kling 3.0", "Motion Control", "60fps"],
        text: "Cinematic medium close-up shot of Elena turning gently towards the camera with a calm reassuring smile, soft breeze moving strands of her blonde hair, Miraflores sunset terrace in the soft-focus background, 4k 60fps, natural micro-expressions, photorealistic cinematic lighting"
      },
      negative: {
        label: "🚫 Negative Prompt",
        tags: ["Negative Matriz"],
        text: "plastic skin, airbrushed, cartoon, CGI, oversaturated, deformed eyes, extra fingers, blurry, heavy makeup, artificial smile, stock photo look, low resolution, bad anatomy"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Tráfico Orgánico)", detail: "Mini-ensayos visuales en IG y TikTok sobre señales de agotamiento, autoconocimiento, adaptación cultural y 'aprende español conmigo'." },
      { step: "Nivel 2 (Comunidad Exclusiva)", detail: "Newsletter semanal en Substack con ejercicios guiados de regulación emocional, reflexiones profundas y audios tipo podcast." },
      { step: "Nivel 3 (Monetización VIP / Círculo Privado)", detail: "Suscripción Fanvue / Patreon ($14/mes) con sesiones de Q&A íntimas, sets fotográficos editoriales inéditos en 4K y apoyo a su proyecto de fundación para sueños en el extranjero." }
    ],
    posts: [
      {
        caption: "A veces la mayor trampa no es el fracaso, sino acostumbrarse a una vida que no resuena con tus verdaderos deseos. Una mañana de lectura y café en Miraflores reflexionando sobre cómo soltar el miedo al juicio ajeno ☕🌿 ¿Qué deseo has estado postergando?",
        likes: "14,320",
        comments: "482",
        date: "Ayer",
        platform: "Instagram"
      },
      {
        caption: "El piloto automático destruye la creatividad y la calma. 3 micro-pausas diarias que aprendí practicando Pilates y que reprograman tu sistema nervioso en 5 minutos 🧠✨",
        likes: "21,800",
        comments: "690",
        date: "Hace 3 días",
        platform: "TikTok / Reels"
      }
    ],
    ecommerce: {
      storeName: "Elena Daddario Mindful Living • Libros & Papelería Guiada (Amazon KDP + Shopify)",
      storeUrl: "https://elenadaddario.com/tienda",
      storeType: "Portal Editorial & Bienestar • Libros, Journals & Masterclasses",
      avgOrderValue: "$34 USD",
      grossMargin: "82%",
      conversionRate: "5.2%",
      fulfillment: "Amazon KDP (Ebooks/Tapa Blanda) + Print-on-Demand de cuadernos encuadernados de lujo",
      description: "Línea editorial de psicología práctica, diarios de gratitud con diseño estético y masterclasses en audio para reducción del estrés en ejecutivos.",
      products: [
        {
          name: "Libro: 'El Silencio Habitado: Psicología Somática para Tiempos Rápidos'",
          price: "$18 USD",
          cost: "$4 USD",
          category: "Libros / Editorial",
          tag: "Best-Seller",
          salesVolume: "1.420 uds/mes"
        },
        {
          name: "Daily Mindfulness Journal • Encuadernación en Lino & Tapa Dura",
          price: "$28 USD",
          cost: "$6 USD",
          category: "Papelería Guiada",
          tag: "DTC Exclusivo",
          salesVolume: "890 uds/mes"
        },
        {
          name: "Audio-Masterclass: 'Regulación del Nervio Vago & Pausas Conscientes'",
          price: "$49 USD",
          cost: "$2 USD",
          category: "Digital / Audio",
          tag: "Margen 95%",
          salesVolume: "530 descargas/mes"
        }
      ],
      funnelStrategy: "Reflexiones profundas en Reels y Substack -> Descarga del capítulo 1 del libro gratis (Lead Magnet) -> Venta cruzada de libro + diario guiado en Shopify -> Acceso al círculo de lectores VIP."
    }
  },

  julia: {
    id: "julia",
    name: "Julia Schmidt",
    niche: "Dermocosmética Científica, Dupes & Clean Girl Aesthetic",
    badge: "Personaje Listo • A cargo de Pancho Ipinza",
    avatar: "julia_avatar.jpg",
    tagline: "Educación dermocosmética accesible, análisis transparente de fórmulas y cuidado de la piel real.",
    keyMarkets: "Perú, Colombia, Chile, México y amantes de la cosmética limpia en Latinoamérica.",
    story: "Crecida entre el malecón de Miraflores y las boticas tradicionales de Lima, Julia Schmidt se formó con la convicción de que el cuidado de la piel debe basarse en la evidencia química y no en promesas vacías de marketing. Con su conocimiento en dermofarmacia y lectura minuciosa de fórmulas (INCI), enseña a su comunidad a proteger la barrera cutánea frente al clima costero y a encontrar equivalencias de farmacia ('dupes') tan efectivas como marcas de lujo. Su transparencia radical, libre de filtros plásticos y con textura de piel real, la convierten en la aliada más confiable de la dermocosmética.",
    bio: "Julia Schmidt (24 años) es una comunicadora y especialista en dermofarmacia nacida y residente en Miraflores (San Antonio / La Aurora, Lima). Se dedica a desmitificar la cosmética comercial, analizar listas de ingredientes (INCI), comparar 'dupes' accesibles con productos de alta gama y enseñar el cuidado de la barrera cutánea adaptado al clima húmedo de la costa limeña ('cielo pan de burro') bajo una estética limpia, empática y sin filtros plásticos engañosos.",
    archetype: "Beauty Educator + Honest Science Reviewer",
    techStack: "Gemini Gems ROLOCODEPRE + Midjourney v6 / Flux + HeyGen / Kling LipSync + ElevenLabs (Español Ribereño Peruano didáctico)",
    targetAudience: "Mujeres y jóvenes de 18 a 35 años que buscan cuidar su piel con criterio científico, ahorrar dinero en cosmética y evitar estándares inalcanzables.",
    channels: "TikTok (@julia.skincare), Instagram Reels, YouTube Shorts, Guía Digital de Dupes",
    gallery: [
      {
        img: "julia_avatar.jpg",
        tag: "Retrato Principal Leica (98.9% Match)",
        label: "Julia Schmidt • Clean Beauty",
        desc: "Textura cutánea realista con poros visibles, iluminación suave difusa, 85mm f/1.8 Leica."
      },
      {
        img: "julia_photo2.jpg",
        tag: "Consistencia Dermocosmética",
        label: "Evaluación de Activos & Skincare",
        desc: "Consistencia en expresión didáctica y tono de piel para videos de reseñas honestas y pruebas de producto."
      }
    ],
    voice: {
      title: "Español Limeño Fresco & Didáctico (ElevenLabs)",
      badge: "Voice ID: Julia-PE-v2",
      duration: "0:25",
      transcript: "«¡Hola chicas y chicos! Soy Julia Schmidt. Recuerden que una piel sana no necesita diez capas de productos caros. Lo que de verdad importa es entender qué activos funcionan juntos y respetar su barrera cutánea.»",
      rate: 1.05,
      pitch: 1.15,
      lang: "es-PE"
    },
    roi: {
      defaultFollowers: 95000,
      defaultConversion: 2.2,
      defaultTicket: 11
    },
    promptScenes: {
      casual: {
        label: "📸 Selfie Rutina Skincare",
        tags: ["Midjourney v6", "Clean Beauty", "--ar 4:5"],
        text: "Close-up bathroom mirror selfie of Julia Schmidt, 24yo Peruvian female beauty educator from Lima, fresh glowing natural bare skin with visible pores, wet hair wrapped in a white towel, wearing a simple beige tank top, holding a glass dropper bottle, morning bathroom natural light, shot on 35mm lens, authentic realistic skin, zero beauty filter --ar 4:5"
      },
      editorial: {
        label: "👗 Editorial Dermocosmética",
        tags: ["Flux.1 Dev", "Studio Master", "--ar 16:9"],
        text: "Editorial portrait of Julia Schmidt, 24yo Peruvian skincare expert, wearing a structured cream minimalist blazer, standing against a clean neutral warm background with soft architectural shadows, holding an amber cosmetic bottle, softbox studio lighting, 85mm f/1.8 Leica optics, hyper-realistic skin texture, 8k --ar 16:9"
      },
      fitness: {
        label: "🌊 Caminata Malecón Lima",
        tags: ["Midjourney v6", "Lifestyle", "--ar 4:5"],
        text: "Candid lifestyle shot of Julia Schmidt walking along the Miraflores Malecón under a soft overcast Lima sky ('cielo pan de burro'), wearing casual athleisure with sunscreen on cheekbones, ocean in soft blur behind, natural coastal breeze, dynamic walking motion, realistic candid photography --ar 4:5"
      },
      video: {
        label: "🎬 Video Hook Kling 3.0",
        tags: ["Kling 3.0", "LipSync HeyGen", "4K"],
        text: "Close-up 4k video of Julia Schmidt applying a drop of hyaluronic acid to the back of her hand and speaking directly to camera with an engaging friendly smile, natural mouth sync, studio ring light reflection in eyes, high-definition skin pores"
      },
      negative: {
        label: "🚫 Negative Prompt",
        tags: ["Negative Matriz"],
        text: "plastic doll face, smooth airbrushed skin, fake eyelashes, distorted hands, blurry, double chin, oversaturated colors, uncanny valley, exaggerated expressions"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Micro-Educación & Viral)", detail: "Videos de 60s desmintiendo mitos de ingredientes (ej. cómo aplicar ácido hialurónico en piel húmeda) y comparando productos caros vs. equivalentes de farmacia." },
      { step: "Nivel 2 (Lead Magnet)", detail: "Guía descargable de 'Dupes comprobados de farmacia' y protocolos de refuerzo de barrera cutánea para alta humedad." },
      { step: "Nivel 3 (Afiliados & Co-Branding Ético)", detail: "Comisiones de dermocosmética limpia con marcas con certificación INCI transparente y talleres online de lectura de etiquetas cosméticas." }
    ],
    posts: [
      {
        caption: "¿Sabías que aplicar tu sérum de ácido hialurónico sobre la piel totalmente seca puede deshidratarte más? El activo necesita agua para retenerla. Aplica una bruma antes y sella con crema 💧🌿 Cuéntame si ya lo hacías.",
        likes: "18,450",
        comments: "720",
        date: "Hace 1 día",
        platform: "TikTok"
      },
      {
        caption: "Caminata por el Malecón de Miraflores con cielo nublado. Recordatorio: el 'cielo pan de burro' limeño NO frena los rayos UV-A. Bloqueador solar de amplio espectro los 365 días del año 🌊✨",
        likes: "12,910",
        comments: "395",
        date: "Hace 3 días",
        platform: "Instagram Reels"
      }
    ],
    ecommerce: {
      storeName: "LUMEN Bio-Dermocosmetics (Shopify DTC)",
      storeUrl: "https://lumen-skin.myshopify.com",
      storeType: "Shopify DTC • Clean Beauty & Dermocosmética",
      avgOrderValue: "$48 USD",
      grossMargin: "76%",
      conversionRate: "3.8%",
      fulfillment: "Fulfillment automatizado con laboratorio dermatológico en Madrid y Miami",
      description: "Cosmética limpia formulada con ingredientes activos botánicos y biomiméticos, diseñada para proteger la barrera cutánea sin agentes irritantes.",
      products: [
        {
          name: "Sérum Hidratante Niacinamida 10% + Zinc 1%",
          price: "$34 USD",
          cost: "$7 USD",
          category: "Dermocosmética",
          tag: "Top Ventas",
          salesVolume: "2.100 uds/mes"
        },
        {
          name: "Protector Solar Mineral Invisible SPF 50 Broad Spectrum",
          price: "$28 USD",
          cost: "$6 USD",
          category: "Protección Solar",
          tag: "Recurrente",
          salesVolume: "1.650 uds/mes"
        },
        {
          name: "Beauty Box Estacional: Rutina Completa 'Barrier Repair'",
          price: "$89 USD",
          cost: "$22 USD",
          category: "Caja de Suscripción",
          tag: "Mayor Ticket",
          salesVolume: "620 suscriptores"
        }
      ],
      funnelStrategy: "Videos de 60s desmintiendo mitos de ingredientes en TikTok -> Link in bio con código de descuento -15% -> Landing de producto optimizada en Shopify -> Carrito con 1-click upsell -> Secuencia de emails de uso diario."
    }
  },

  laura: {
    id: "laura",
    name: "Laura 'Lau' Taeda",
    niche: "Nutrition Lifestyle + Science-Based Reviews",
    badge: "Personaje Listo • A cargo de Wladimir Gutierrez",
    avatar: "laura_avatar.png",
    tagline: "Fit-geek con toque sensual y sofisticado. Nutrición aplicada a la pérdida de peso sostenible y entrenamiento funcional basado en evidencia.",
    keyMarkets: "México (CDMX, Guadalajara, Monterrey), Estados Unidos hispano, Colombia y Chile.",
    story: "Descendiente de una familia chino-mexicana establecida en el corazón de Ciudad de México, Lau creció fusionando la disciplina y rigor académico oriental con la calidez vibrante de la cultura mexicana. Como nutrióloga clínica y deportista funcional, su misión desde su loft en la colonia Condesa es desterrar los mitos de dietas restrictivas y promover la recomposición corporal con evidencia médica. Con su personalidad magnética de 'fit-geek' sofisticada, Lau enseña que ganar masa muscular es la clave para la longevidad metabólica y la salud integral.",
    bio: "Laura 'Lau' Taeda (32 años) es una nutrióloga e investigadora nacida y radicada en la colonia Condesa / Roma Norte, Ciudad de México, de ascendencia mexicano-china de tercera generación. Su abuelo paterno emigró desde Guangdong y se estableció en el Barrio Chino de CDMX; su padre y su madre construyeron una vida profesional en Condesa. Ese cruce cultural —la disciplina y rigor académico chino con la calidez y cercanía mexicana— define su carácter: exigente consigo misma y cercana con su comunidad. Con su estética 'strong girl' (cuerpo atlético y definido, presencia magnética, seria en el fondo pero con chispa picarona), desmiente mitos de dietas restrictivas y promueve la recomposición corporal mediante proteína adecuada, fuerza funcional y ciencia metabólica rigurosa.",
    archetype: "Fit-Geek / Entrenadora Cuántica (Strong & Sophisticated)",
    techStack: "Flux.1 Dev + RealESRGAN Upscaling + ElevenLabs (Español Latino neutro con cadencia mexicana sutil) + Kling 3.0 Motion Control",
    targetAudience: "Hombres y mujeres de 22 a 45 años, deportistas y profesionales de alta exigencia que buscan optimizar su composición corporal y longevidad sin mitos.",
    channels: "Instagram (@lau.nutrigeek), YouTube Shorts, TikTok, Club Privado de Recomposición ($24 USD/mes)",
    gallery: [
      {
        img: "laura_avatar.png",
        tag: "Retrato Close-up Studio (99.1% Match)",
        label: "Laura 'Lau' Taeda • Fit-Geek Studio",
        desc: "Flux.1 Dev 85mm f/1.8 • Fusión genética mexicano-china con pómulos definidos, ojos almendrados y top verde esmeralda."
      },
      {
        img: "laura_photo2.jpg",
        tag: "Consistencia Atlética",
        label: "Fuerza Funcional & Longevidad",
        desc: "Top verde esmeralda • Preservación de biotipo físico atlético, hombros definidos y textura de piel natural."
      }
    ],
    voice: {
      title: "Latino Neutro Enérgico & Cálido (ElevenLabs)",
      badge: "Voice ID: Lau-MX-Turbo",
      duration: "0:24",
      transcript: "«Hola, soy Lau Taeda. Olvídate de pasar hambre o eliminar carbohidratos. Vamos a usar la ciencia metabólica y el entrenamiento de fuerza inteligente para que logres tu mejor versión física sin mitos.»",
      rate: 1.0,
      pitch: 0.98,
      lang: "es-MX"
    },
    roi: {
      defaultFollowers: 85000,
      defaultConversion: 2.5,
      defaultTicket: 24
    },
    promptScenes: {
      casual: {
        label: "📸 Rincón Fit-Geek (Loft en Condesa)",
        tags: ["Flux.1 Dev", "Condesa Loft", "--ar 4:5"],
        text: "Medium shot of Lau, a 32-year-old Mexican-Chinese fit female nutritionist, sitting at a rustic dark-wood kitchen island in a Mexico City industrial loft. She has medium-long warm brown hair, full natural lips, and a fresh clean-look glow. She is wearing a chic beige fitted long-sleeve crop top, looking intelligently and playfully towards the camera with a subtle smirk. On the counter is a sleek laptop, a biochemistry book, and a fresh colorful protein smoothie bowl. Daylight filtering through large windows, modern minimal aesthetic, 50mm lens, f/2.0, photorealistic texture --ar 4:5"
      },
      editorial: {
        label: "👗 Master Reference Studio (Top Esmeralda)",
        tags: ["Flux.1 Dev", "Studio Master", "--ar 16:9"],
        text: "A high-definition, photorealistic close-up portrait of Lau, a 32-year-old Mexican-Chinese female fitness and nutrition creator. Athletic facial structure, high defined cheekbones, almond-shaped deep brown eyes, full plump natural lips, medium-long warm chocolate-brown hair cascading softly over her shoulders. Clean-look makeup: glowing natural skin with visible pores, brushed eyebrows, soft peach lip balm. Confident, intelligent, and subtly sensual expression with a playful spark in her eyes. Wearing a minimalist emerald green fitted top. Soft studio rim lighting highlighting her shoulders and collarbone, moody dark-gray background, 85mm lens, f/1.8, cinematic depth of field, hyper-realistic, 8k --ar 16:9"
      },
      fitness: {
        label: "🏃‍♀️ Estilo de Vida Urbano (Parque México)",
        tags: ["Flux.1 Dev", "Action Lifestyle", "--ar 4:5"],
        text: "Lau, a 32-year-old Mexican-Chinese athletic woman with medium-long chestnut brown hair tied in a loose high ponytail, walking near Parque México in Condesa, CDMX. Fit-geek aesthetic, wearing a matching dark charcoal workout set. Full natural lips, fresh clean-look makeup, confident stride, magnetic and intelligent presence. Warm morning light filtering through trees, soft bokeh background of urban architecture, 35mm lens, f/2.0, street style high-end photography, highly detailed --ar 4:5"
      },
      video: {
        label: "🎬 Video Kling 3.0 Hook Nutrición",
        tags: ["Kling 3.0", "Motion Control", "60fps"],
        text: "Medium shot of Lau Taeda holding a barbell, looking directly into the camera with dynamic energy, explaining a metabolic concept with hands moving naturally, smooth 60fps video, studio lighting, crisp audio synchronization"
      },
      negative: {
        label: "🚫 Negative Prompt",
        tags: ["Negative Matriz"],
        text: "exaggerated bodybuilder anatomy, unnatural skin smoothness, deformed muscles, extra limbs, cartoonish, low resolution, stock photo watermark, plastic look"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Mitos vs. Ciencia)", detail: "Videos de gancho visceral ('¿Sabías que comer carbohidratos de noche no te engorda?') basados en evidencia científica y papers de PubMed." },
      { step: "Nivel 2 (Calculadora de Macros & Guías)", detail: "Lead magnet interactivo para estimar requerimientos calóricos y planes semanales de batch-cooking alto en proteína." },
      { step: "Nivel 3 (Membresía / Club NutriGeek)", detail: "Suscripción premium ($24 USD/mes) a la comunidad privada con biblioteca de recetas hiperproteicas, webinars de suplementación y análisis de analíticas de sangre." }
    ],
    posts: [
      {
        caption: "¿Sabías que comer proteína en la noche NO te hace subir de peso? Lo que determina tu grasa corporal es el balance calórico semanal, no la hora del reloj. Te muestro mi cena de hoy en el loft de Condesa 🥗🥩",
        likes: "15,890",
        comments: "612",
        date: "Hace 1 día",
        platform: "Instagram Reels"
      },
      {
        caption: "Entrenamiento de fuerza en la mañana + café de especialidad. La masa muscular es el órgano de la longevidad y el mejor seguro de salud metabólica que puedes construir 🔥⚡",
        likes: "19,400",
        comments: "530",
        date: "Hace 3 días",
        platform: "TikTok"
      }
    ],
    ecommerce: {
      storeName: "Taeda Metabolic Health & Nutrition Hub (Shopify + Skool)",
      storeUrl: "https://taedanutrition.com",
      storeType: "Portal E-commerce • Nutrición, Recetarios & Suplementación",
      avgOrderValue: "$65 USD",
      grossMargin: "74%",
      conversionRate: "4.1%",
      fulfillment: "Descarga digital instantánea para guías + Centro de distribución en CDMX y Santiago",
      description: "Recetarios basados en evidencia metabólica, guías de recomposición corporal y suplementación pura (electrolitos y creatina micronizada) formulada sin rellenos.",
      products: [
        {
          name: "Guía de Recomposición Corporal & Recetario Antiinflamatorio",
          price: "$39 USD",
          cost: "$3 USD",
          category: "E-Book Nutricional",
          tag: "Descarga Instantánea",
          salesVolume: "1.850 uds/mes"
        },
        {
          name: "Pack Electrolitos Clean + Creatina Creapure® Micronizada",
          price: "$45 USD",
          cost: "$12 USD",
          category: "Suplementos",
          tag: "Alta Recompra",
          salesVolume: "1.120 packs/mes"
        },
        {
          name: "Membresía 'Metabolic Reset' (Menús semanales + Q&A con Lau)",
          price: "$59 USD/mes",
          cost: "$5 USD",
          category: "Comunidad / Suscripción",
          tag: "Alto LTV",
          salesVolume: "780 miembros"
        }
      ],
      funnelStrategy: "Shorts y Reels con desmentidos científicos de dietas de moda -> E-book gratuito 'Los 5 alimentos que arruinan tu microbiota' -> Oferta del pack de suplementación con descuento exclusivo -> Suscripción a comunidad mensual."
    }
  },

  kira: {
    id: "kira",
    name: "Kira Voss",
    niche: "Indie Game Dev, Ciber-Activismo & Tech Glamour (Validado)",
    badge: "Caso Validado • Equipo (Los Manejadores)",
    avatar: "kira_avatar.jpg",
    tagline: "Desarrollo de videojuegos indie (Godot/Unreal), ciber-activismo y estética cyberpunk con monetización validada en Fanvue y Patreon.",
    keyMarkets: "México, España, Argentina, EE.UU., comunidad global de desarrolladores y cultura gamer.",
    story: "Creciendo entre terminales de Linux, foros de programación nocturnos y la pasión por el arte digital, Kira aprendió a desarrollar videojuegos independientes con motores de código abierto como Godot y Unreal. Su misión es democratizar la creación interactiva y defender la privacidad digital frente al monopolio corporativo. Desde su estudio bañado en luces de neón en tonos cian y magenta, Kira comparte sus devlogs de shaders, lógica de juego y reflexiones de ciber-activismo. Como el primer activo validado de Los Manejadores con más de 500 suscriptores de pago, Kira es la prueba viva de lealtad comunitaria y monetización validada.",
    bio: "Kira Voss (26 años) es el activo insignia y prueba social validada de Los Manejadores. Combina el desarrollo de videojuegos independientes y activismo por el código abierto con una estética cyberpunk de alto impacto validada de 0 a más de 500 suscriptores recurrentes en Fanvue ($18 USD/mes) y Patreon VIP. Conecta su canal de YouTube DevLogs con transmisiones en vivo y comunidades privadas en Discord.",
    archetype: "La Hacker Rebelde & Hot Indie Dev (Cyber-Activista con Tech Glamour)",
    techStack: "Flux.1 Dev + ComfyUI LoRA Consistencia + RealESRGAN + ElevenLabs + Kling 3.0 + Godot Engine",
    targetAudience: "Desarrolladores, programadores, gamers, entusiastas tech y amantes de la estética cyberpunk/sci-fi (18–38 años).",
    channels: "YouTube DevLogs (@kira_gamedev), Twitter/X, Discord VIP, Fanvue VIP ($18/m), Patreon",
    gallery: [
      {
        img: "kira_avatar.jpg",
        tag: "Retrato Dev Setup Matriz (99.4% Match)",
        label: "Kira Voss • Cyber Studio",
        desc: "Triple monitor con código de motor de juego, wireframes 3D, gafas gamer y audífonos de estudio con iluminación neón cian/púrpura."
      },
      {
        img: "laura_dev_avatar.jpg",
        tag: "Sesión Cyberpunk Terminal",
        label: "Kira Voss • Hacklab Nocturno",
        desc: "Ambiente hacker nocturno con reflexiones en monitores y estética cyberpunk chic."
      },
      {
        img: "yt_kira_thumb.jpg",
        tag: "Editorial Neo-Tokyo",
        label: "Kira Voss • Cyber Glamour",
        desc: "Estética neón violeta y cian, primer modelo validado con más de 500 suscriptores en Fanvue."
      }
    ],
    voice: {
      title: "Español Latino Cyberpunk Tech & Decidido (ElevenLabs)",
      badge: "Voice ID: Kira-Voss-Cyber",
      duration: "0:20",
      transcript: "«Líneas de código en Godot, terminales abiertas y estética cyberpunk. Bienvenidos a mi círculo privado, donde el desarrollo independiente y el arte digital rompen el monopolio corporativo.»",
      rate: 1.0,
      pitch: 0.98,
      lang: "es-MX"
    },
    roi: {
      defaultFollowers: 120000,
      defaultConversion: 2.2,
      defaultTicket: 18
    },
    promptScenes: {
      casual: {
        label: "📸 Setup Nocturno Dev",
        tags: ["Flux.1 Dev", "Cyber Studio", "--ar 4:5"],
        text: "Close-up candid portrait of Kira Voss, 26yo gorgeous indie game developer and cyberpunk icon, stylish black glasses, headphone around neck, black fitted tank top with minimalist open-source terminal print, glowing dual monitors behind showing Unreal/Godot shader code, cozy neon ambient room lighting, realistic skin with visible texture, 35mm f/1.8 --ar 4:5"
      },
      editorial: {
        label: "👗 Neo-Tokyo Fashion",
        tags: ["Midjourney v6", "--ar 16:9"],
        text: "High fashion editorial cyberpunk shot of Kira Voss in chrome jacket, rain-slicked pavement reflecting magenta neon billboards, cinematic depth of field, 85mm lens --ar 16:9"
      },
      fitness: {
        label: "🎮 Testing Demo & Level Design",
        tags: ["Action Dev", "Unreal 5", "--ar 4:5"],
        text: "Kira Voss sitting at her mechanical keyboard holding a custom game controller, intense concentrated gaze on screen reviewing 3D game level physics in real-time, headphones on, authentic gamer studio environment with figurines and dev boards, atmospheric lighting --ar 4:5"
      },
      video: {
        label: "🎬 Video Kling 3.0 Teaser Devlog",
        tags: ["Kling 3.0", "Motion Control", "60fps"],
        text: "Slow motion pan of Kira Voss adjusting futuristic glasses, glowing reflections in cyber eyes, smiling playfully to camera in high-tech studio, rain particles moving in slow motion, 4k 60fps"
      },
      negative: {
        label: "🚫 Negative Prompt",
        tags: ["Negative Matriz"],
        text: "blurry screens, deformed fingers, extra keyboard keys, plastic doll face, overly fake CGI, bad posture, washed out colors"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Videos Cortos Virales)", detail: "TikTok, Shorts y Reels de 30-45 segundos recomendando juegos indie baratos y mostrando estética gamer cyberpunk." },
      { step: "Nivel 2 (Comunidad Gamer Gratuita)", detail: "Comunidad abierta en Discord con canales para compartir capturas de pantalla, recomendaciones y organizar partidas." },
      { step: "Nivel 3 (Descargas Digitales & VIP)", detail: "Venta simple de packs de wallpapers 4K ($7 USD), guías de juegos de Steam ($10 USD) y rol VIP en Discord ($8 USD/mes)." }
    ],
    posts: [
      {
        caption: "3 juegos de Steam por menos de $5 que te van a obsesionar este fin de semana si te gusta la estética retro y la buena música 🎮🕹️ Dejé la lista completa y los links en mi Discord!",
        likes: "24,800",
        comments: "1,040",
        date: "Ayer",
        platform: "TikTok / YouTube"
      },
      {
        caption: "Nuevo setup nocturno listo 🌌⚡ Subí el nuevo pack de 30 wallpapers 4K cyberpunk a mi tienda en bio por si quieren darle vibra neón a sus pantallas!",
        likes: "21,300",
        comments: "880",
        date: "Hace 2 días",
        platform: "Twitter/X"
      }
    ],
    ecommerce: {
      storeName: "Kira Voss • Zona Gamer & Descargas Cyberpunk (Gumroad)",
      storeUrl: "https://kiravoss.gumroad.com",
      storeType: "Wallpapers 4K, Guías de Juegos Indie y Comunidad Gamer",
      avgOrderValue: "$15 USD",
      grossMargin: "98%",
      conversionRate: "6.4%",
      fulfillment: "Descarga digital instantánea en Gumroad / Discord",
      description: "Descargas digitales simples para amantes del gaming y la estética cyberpunk: selecciones curadas de los mejores juegos indie para probar cada fin de semana, packs de wallpapers 4K y comunidad privada en Discord.",
      products: [
        {
          name: "Pack 30 Wallpapers 4K Cyberpunk & Neon Battlestations",
          price: "$6.99 USD",
          cost: "$0.00 USD",
          category: "Fondos de Pantalla",
          tag: "Descarga Directa",
          salesVolume: "1.450 descargas/mes",
          desc: "Colección exclusiva de fondos de pantalla en resolución 4K para monitor y smartphone.",
          fulfillment: "Descarga Inmediata ZIP"
        },
        {
          name: "Guía Digital '50 Joyas Ocultas de Steam' (Juegos Indie Adictivos)",
          price: "$9.99 USD",
          cost: "$0.00 USD",
          category: "Guía en PDF",
          tag: "Top Ventas",
          salesVolume: "820 ventas/mes",
          desc: "Selección curada por categorías de juegos baratos, livianos y adictivos que valen cada centavo.",
          fulfillment: "Descarga Inmediata PDF"
        },
        {
          name: "Pase a la Comunidad Gamer VIP en Discord (Membresía Mensual)",
          price: "$7.99 USD/mes",
          cost: "$0.50 USD",
          category: "Comunidad / Suscripción",
          tag: "Recurrente",
          salesVolume: "480 miembros",
          desc: "Acceso a canales exclusivos de juego conjunto, sorteos mensuales de claves de Steam y rol VIP.",
          fulfillment: "Acceso Instantáneo a Discord"
        }
      ],
      funnelStrategy: "Videos cortos en TikTok/Shorts recomendando juegos baratos -> Link a Discord gratuito con recomendaciones -> Oferta del pack de wallpapers y la guía completa de Steam."
    }
  },

  maite: {
    id: "maite",
    name: "Maite Valenzuela",
    niche: "Cumbia Ranchera, Festivales & Country Chic Chileno",
    badge: "Personaje Listo • Equipo (Los Manejadores)",
    avatar: "maite_avatar.jpg",
    tagline: "La nueva voz de la cumbia ranchera chilena: pasión campesina, glamour country y videoclips de alto impacto.",
    keyMarkets: "Chile (Regiones, Santiago, Fiestas Patrias), Argentina, Bolivia y público tropical-ranchero.",
    story: "Criada en los campos y viñedos de San Fernando en el Valle de Colchagua, Maite creció al ritmo festivo de las guitarras, acordeones y fiestas costumbristas que mueven a todo Chile. Radicada en Santiago, modernizó el género tropical-ranchero —el más masivo y lucrativo del país— creando un estilo único 'country chic' con sombrero blanco texano y botas bordadas. Con su voz enérgica, pícara y cercana, Maite conecta de forma visceral con el público de todas las regiones, convirtiendo cada presentación en una fiesta inolvidable.",
    bio: "Maite Valenzuela (24 años) es una cantante e influencer de cumbia ranchera pop nacida en San Fernando (Valle de Colchagua) y radicada en Santiago de Chile. Con su sombrero blanco texano, botas de cuero bordadas y una presencia magnética y sensual ('hot country chic'), moderniza la música tropical-ranchera —el género musical más masivo, festivo y lucrativo de Chile—. Conecta de forma genuina con el público de regiones y fiestas patrias, mientras capitaliza su atractivo en videoclips cinematográficos, streaming musical en Spotify/YouTube y un club VIP exclusivo en Fanvue ($15 USD/mes) con sesiones fotográficas íntimas en viñedos y backstage.",
    archetype: "La Diva Ranchera / Reina Campesina Contemporánea (Cálida, pícara y festiva)",
    techStack: "Nano Banana Pro / Flux.1 LoRA Ranchera + Suno v3.5 / Udio (Composición Cumbia Ranchera) + ElevenLabs (Acento Chileno Campesino-Urbano Pícaro) + Kling 3.0",
    targetAudience: "Audiencia chilena y del Cono Sur de 20 a 55 años: seguidores de la cumbia ranchera (Zúñiga, Caricia, Tropikal de Vallenar), amantes de los rodeos, festivales costumbristas, música regional y estética country glam.",
    channels: "TikTok (@maite.ranchera), Instagram Reels, YouTube Music / Shows, Spotify, Fanvue VIP ($15/mes)",
    gallery: [
      {
        img: "maite_avatar.jpg",
        tag: "Retrato Matriz Colchagua (99.2% Match)",
        label: "Maite Valenzuela • Viña Santa Cruz",
        desc: "Sombrero texano blanco, top con bordados de cristal, paisaje de viñedos y cordillera, luz cálida de atardecer chileno."
      }
    ],
    voice: {
      title: "Español Chileno Ranchero Cálido & Pícaro (ElevenLabs)",
      badge: "Voice ID: Maite-CL-Ranchera",
      duration: "0:22",
      transcript: "«¡Hola mi gente linda de Chile! Soy la Maite. Les mando un abrazo apretado desde el Valle de Colchagua. Prepárense porque se viene un cumbión ranchero que los va a poner a bailar a todos. ¡Súbanle el volumen!»",
      rate: 1.02,
      pitch: 1.08,
      lang: "es-CL"
    },
    roi: {
      defaultFollowers: 115000,
      defaultConversion: 2.4,
      defaultTicket: 15
    },
    promptScenes: {
      casual: {
        label: "📸 Selfie Colchagua",
        tags: ["Nano Banana Pro", "Flux LoRA", "--ar 4:5"],
        text: "Casual sunlit outdoor selfie of Maite Valenzuela, gorgeous 24yo blonde Chilean female ranchera singer, wearing a white felt cowboy hat, stylish fitted denim vest, charming flirty smile, standing in a sunny Chilean vineyard in Colchagua Valley, Andes mountains in distant background, shot on iPhone 15 Pro, warm natural afternoon light, authentic skin texture --ar 4:5"
      },
      editorial: {
        label: "👗 Gala Ranchera Chic",
        tags: ["Flux.1 Dev", "Studio Master", "--ar 16:9"],
        text: "Stunning high-end editorial portrait of Maite Valenzuela, 24yo blonde Chilean country singer, wearing a sparkling crystal embroidered country corset dress with white brimmed hat, golden hour sunset rim lighting, rustic wooden Chilean hacienda balcony, 85mm f/1.4 lens, Hasselblad color science, cinematic hyperrealistic --ar 16:9"
      },
      fitness: {
        label: "🎤 Escenario Festival Chileno",
        tags: ["Action Stage", "Festival", "--ar 4:5"],
        text: "Dynamic concert photo of Maite Valenzuela performing live on stage at a crowded Chilean country festival, holding a vintage chrome microphone, accordion players blurred behind, stage spotlights in amber and red, passionate energetic expression, high shutter speed, photorealistic crowd lights --ar 4:5"
      },
      video: {
        label: "🎬 Video Kling 3.0 Videoclip",
        tags: ["Kling 3.0", "Motion Control", "60fps"],
        text: "4k slow motion clip of Maite turning around smiling playfully and tipping her white cowboy hat, warm wind blowing blonde hair, sun flare behind her shoulder in a vineyard setting, photorealistic 60fps cinematic grading"
      },
      negative: {
        label: "🚫 Negative Prompt",
        tags: ["Negative Matriz"],
        text: "deformed hands, ugly face, cartoon, 3d render, plastic skin, bad teeth, extra fingers, blurry, oversaturated, amateur lighting"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Atracción Masiva & Viral)", detail: "Videos en TikTok y Reels bailando adelantos de cumbia ranchera ('trend del zapateo'), humor campesino chileno y looks country hot." },
      { step: "Nivel 2 (Streaming & Medios)", detail: "Lanzamiento de sencillos originales producidos con IA (Suno/Udio) y masterización pro en Spotify y YouTube Music, rotación en radios regionales de Chile." },
      { step: "Nivel 3 (Monetización VIP Fanvue & PPV)", detail: "Suscripción Fanvue VIP ($15 USD/mes) con sesiones fotográficas exclusivas en viñedos y establos privados, mensajes de audio personalizados y preventa de merchandising (sombreros y poleras)." }
    ],
    posts: [
      {
        caption: "¡Se armó el baile en Colchagua! 🤠🎶 Grabando las tomas de nuestro nuevo tema ranchero para prender las fiestas de todo Chile. ¿Desde qué ciudad o pueblo me están escuchando hoy? Los leo a tod@s ❤️🇨🇱",
        likes: "28,640",
        comments: "1,140",
        date: "Hace 1 día",
        platform: "TikTok / Instagram"
      },
      {
        caption: "Tarde de ensayo con sombrero bien puesto y mate en mano 🌾✨ Lo mejor de la música ranchera es que se canta con el corazón apretado. ¡Nueva sesión de fotos exclusiva arriba en mi link! 🔥",
        likes: "19,820",
        comments: "780",
        date: "Hace 3 días",
        platform: "Instagram"
      }
    ],
    ecommerce: {
      storeName: "Maite Pop Oficial Fan Store (Shopify)",
      storeUrl: "https://maitepop.store",
      storeType: "Tienda Oficial de Merchandising Pop & Experiencias",
      avgOrderValue: "$38 USD",
      grossMargin: "68%",
      conversionRate: "4.6%",
      fulfillment: "Alianza con imprenta textil y logística de paquetería en Santiago (Chile) y Buenos Aires",
      description: "Indumentaria streetwear y country chic de edición limitada, preventas de vinilos y entradas a experiencias virtuales para su creciente base de fans de la cumbia pop.",
      products: [
        {
          name: "Polera Oversized 'Corazón Ranchero' Edición Limitada",
          price: "$32 USD",
          cost: "$9 USD",
          category: "Streetwear Pop",
          tag: "Tiraje Limitado",
          salesVolume: "950 uds/mes"
        },
        {
          name: "Gorro Trucker Bordado 'Maite de Oro'",
          price: "$24 USD",
          cost: "$6 USD",
          category: "Accesorios",
          tag: "Trending",
          salesVolume: "720 uds/mes"
        },
        {
          name: "Pase VIP Virtual Meet & Greet + Escucha Anticipada de Single",
          price: "$19 USD",
          cost: "$1 USD",
          category: "Pase Virtual",
          tag: "Margen 95%",
          salesVolume: "1.200 pases/lanzamiento"
        }
      ],
      funnelStrategy: "Lanzamientos de coreografías en TikTok -> Preventas exclusivas con cuenta regresiva en Shopify -> Drops de 48 horas que generan FOMO -> Comunidad de WhatsApp/Telegram para fans de primera fila."
    }
  },

  mateo: {
    id: "mateo",
    name: "Mateo Silva",
    niche: "FinTech, Inversiones Cuantitativas & Real Estate Tech",
    badge: "Nicho Top Monetización • Live",
    avatar: "mateo_avatar.jpg",
    tagline: "Estrategias cuantitativas de inversión, modelos en Python y finanzas modernas desde Londres y Fráncfort.",
    keyMarkets: "España, México, Chile, Colombia, Miami y comunidad de inversores y fundadores tecnológicos en Europa.",
    story: "Con 30 años y doble titulación en ingeniería financiera y econometría por Frankfurt School of Finance y King's College London, Mateo Silva combina la precisión matemática de los modelos algorítmicos con la accesibilidad de la comunicación digital moderna. Tras desempeñarse como analista cuantitativo en fondos de capital riesgo en Canary Wharf, Mateo creó su ecosistema de divulgación para derribar las falsas promesas de dinero fácil y dotar a inversores y empresarios de herramientas profesionales de análisis patrimonial. Su estilo pulcro, analítico y sereno proyecta la máxima autoridad y sofisticación técnica.",
    bio: "Mateo Silva (30 años) lidera el nicho con el CPM/RPM publicitario más alto de la industria digital ($18–$45 USD por cada 1.000 vistas en YouTube). Diseñado para monetizar a través de software financiero SaaS, suscripciones B2B a su newsletter macroeconómica, patrocinios de brokers institucionales y venta directa de modelos de valoración en Python/Excel.",
    archetype: "Quantitative FinTech Executive & Modern Wealth Architect",
    techStack: "Flux 2 Dev LoRA Consistencia (Ref: Mateo_v1) + ElevenLabs Inflexión Barítono Confiada + Kling 3.0 Motion Control",
    targetAudience: "Inversores particulares, emprendedores, directivos, consultores y profesionales tecnológicos de 24 a 52 años.",
    channels: "YouTube (Alpha Capital Insights), Substack (The Macro Brief), LinkedIn (@mateo-silva-capital), X / Twitter (@mateosilva_ai)",
    gallery: [
      {
        img: "mateo_avatar.jpg",
        tag: "Retrato Matriz LoRA (99.2% Match)",
        label: "Mateo Silva • Canary Wharf Executive Studio",
        desc: "Traje sastre azul marino, iluminación natural de rascacielos con tickers bursátiles de fondo. Fotorrealismo 8K."
      },
      {
        img: "mateo_podcast.jpg",
        tag: "Podcast & Media Studio",
        label: "Mateo Silva • The Fintech Insights Podcast",
        desc: "Setup de grabación con micrófono Shure SM7B, iluminación cálida de estudio y estética de alto impacto para clips cortos."
      },
      {
        img: "mateo_lifestyle.jpg",
        tag: "Lifestyle Ejecutivo & Co-Working",
        label: "Mateo Silva • Terraza Financiera & Análisis Móvil",
        desc: "Sesión casual en cafetería ejecutiva en distrito financiero europeo revisando métricas de cartera en iPad."
      }
    ],
    voice: {
      title: "Inflexión Barítono Confiada (ElevenLabs)",
      badge: "Voice ID: Mateo-QuantFin",
      duration: "0:25",
      transcript: "«El verdadero error en finanzas no es la volatilidad del mercado, sino operar sin un modelo probabilístico. En este análisis te muestro cómo estructurar una cartera defensiva con asignación automatizada y criterio institucional.»",
      rate: 1.0,
      pitch: 0.95,
      lang: "es-ES"
    },
    roi: {
      defaultFollowers: 120000,
      defaultConversion: 2.8,
      defaultTicket: 29
    },
    promptScenes: {
      casual: {
        label: "☕ Terraza Financiera",
        tags: ["Flux 2 Dev", "LoRA Mateo", "--ar 4:5"],
        text: "Professional lifestyle candid photo of 30yo handsome financial tech man Mateo Silva with short dark hair, sitting at an outdoor terrace coffee shop in a modern European financial district, holding an espresso cup, modern smart watch on wrist, iPad on table, wearing a crisp charcoal blazer over a white crew neck tee, natural golden hour lighting, photorealistic --ar 4:5"
      },
      editorial: {
        label: "🏢 Canary Wharf Master Studio",
        tags: ["Studio Master", "Hasselblad", "--ar 16:9"],
        text: "Ultra-photorealistic 8k portrait of Mateo Silva, 30yo handsome financial executive, navy wool suit, open white dress shirt, Rolex Submariner on wrist, glass high-rise office in London Canary Wharf with blurred financial tickers, cinematic rim lighting, 85mm f/1.4 lens, natural skin pores --ar 16:9"
      },
      fitness: {
        label: "🎙️ Podcast Fintech Insights",
        tags: ["Media Studio", "4K", "--ar 4:5"],
        text: "Professional photo of 30yo handsome financial tech man Mateo Silva with short dark hair in a sleek high-end podcast studio, wearing minimalist black turtleneck, studio microphone Shure SM7B in front, warm ambient neon lighting, deep focus, photorealistic --ar 4:5"
      },
      video: {
        label: "🎬 Kling 3.0 Hook Financiero",
        tags: ["Kling 3.0", "60fps", "FinTech"],
        text: "Cinematic medium close-up of Mateo Silva explaining algorithmic asset allocation with confident hand gestures, sharp navy suit, dual monitors with candlestick trading charts softly glowing in the background, 4k 60fps"
      },
      negative: {
        label: "🚫 Negative Prompt",
        tags: ["Negative Matriz"],
        text: "blurry, amateur, low resolution, bad anatomy, cartoon, 3d render, deformed hands, extra fingers, plastic skin, oversaturated, childish, uncanny valley"
      }
    },
    ecommerce: {
      storeName: "Mateo Silva • Finanzas Personales & Ahorro Práctico (Gumroad)",
      storeUrl: "https://mateosilva.gumroad.com",
      storeType: "Plantillas de Control de Gastos en Notion y Guías en PDF para Ahorrar",
      avgOrderValue: "$18 USD",
      grossMargin: "98%",
      conversionRate: "5.6%",
      fulfillment: "Descarga digital instantánea de plantillas en Notion y guías PDF",
      description: "Herramientas sencillas para personas reales que quieren ordenar sus finanzas, controlar sus gastos mensuales y empezar a ahorrar sin complicaciones matemáticas.",
      products: [
        {
          name: "Plantilla de Control de Gastos y Ahorro en Notion / Google Sheets",
          price: "$14.99 USD",
          cost: "$0.00 USD",
          category: "Plantilla Digital",
          tag: "Top Ventas",
          salesVolume: "920 descargas/mes",
          desc: "Sistema visual con gráficos automáticos para registrar gastos fijos, compras diarias y metas de ahorro.",
          fulfillment: "Enlace Duplicable en Notion"
        },
        {
          name: "Guía en PDF 'Cómo Empezar a Invertir desde Cero' (Paso a Paso)",
          price: "$18.99 USD",
          cost: "$0.00 USD",
          category: "Guía en PDF",
          tag: "Para Principiantes",
          salesVolume: "540 ventas/mes",
          desc: "Manual de 25 páginas claro y directo sobre cuentas de ahorro de alto rendimiento, fondos indexados y hábitos financieros.",
          fulfillment: "Descarga Inmediata PDF"
        },
        {
          name: "Pack Completo 'Orden Financiero Total' (Plantilla + Guía + Checklist)",
          price: "$27.00 USD",
          cost: "$0.00 USD",
          category: "Bundle de Ahorro",
          tag: "Mejor Valor",
          salesVolume: "310 ventas/mes",
          desc: "Todo lo necesario para organizar tus cuentas y planificar tu presupuesto anual en un solo fin de semana.",
          fulfillment: "Descarga Inmediata ZIP"
        }
      ],
      funnelStrategy: "Videos cortos en TikTok/Reels de 30-45 segundos con tips prácticos (ej: 'El error que cometes al cobrar tu sueldo', 'Cómo ahorrar $200 al mes') -> Link a plantilla básica gratuita en bio -> Oferta de la plantilla completa de Notion y la guía práctica."
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Atracción)", detail: "TikTok, Reels y Shorts con consejos directos de ahorro y finanzas cotidianas para personas normales." },
      { step: "Nivel 2 (Lead Magnet)", detail: "Plantilla básica gratuita de control de gastos para captar correos de personas interesadas en ahorrar." },
      { step: "Nivel 3 (Venta Directa)", detail: "Venta de la plantilla completa de Notion y guías de ahorro e inversión para principiantes ($15 a $27 USD)." },
      { step: "Nivel 4 (Afiliados Simples)", detail: "Recomendación con enlace de afiliado de neobancos o cuentas de ahorro seguras y reguladas." }
    ],
    posts: [
      {
        caption: "La regla del 50/30/20 explicada fácil: 50% para tus gastos fijos (arriendo, comida), 30% para tus gustos y 20% para tu fondo de paz mental 📊 Si no sabes a dónde se te va el sueldo, te dejé una plantilla gratuita en mi bio para anotarlo en 2 minutos.",
        likes: "19,840",
        comments: "842",
        date: "Hace 1 día",
        platform: "TikTok / Instagram"
      },
      {
        caption: "Tener tu dinero parado en una cuenta corriente que te da 0% de interés es perder poder de compra todos los meses 📉 Compara cuentas remuneradas antes de invertir en cosas raras. Link en bio con la comparativa gratuita.",
        likes: "26,150",
        comments: "1,120",
        date: "Hace 3 días",
        platform: "YouTube Community"
      }
    ]
  },

  alejandra: {
    id: "alejandra",
    name: "Alejandra (Prototipo B2B)",
    niche: "Embajadora Virtual & Modelo de Marca (Disponible para Negocios)",
    badge: "Prototipo B2B • En Adopción / Listo para Empresas",
    avatar: "alejandra_avatar.jpg",
    tagline: "Prototipo hiperrealista disponible para licenciamiento exclusivo, co-creación y operación por empresas o marcas.",
    keyMarkets: "Empresas de Moda, Belleza, E-Commerce, Lifestyle o Retail en búsqueda de su propia embajadora virtual.",
    story: "Alejandra representa nuestro prototipo de nueva generación para el sector empresarial. No ha sido lanzada al público como personaje propio porque está concebida como un activo 'llave en mano' para negocios: una marca comercial puede adoptarla, bautizarla con su propio nombre, definir su tono de voz y utilizar nuestro pipeline de generación continua para campañas publicitarias, videos de producto y e-commerce sin los riesgos ni los elevados costes de contratar modelos o influencers tradicionales.",
    bio: "Alejandra (Prototipo B2B) es una embajadora virtual hiperrealista lista para ser personalizada y operada para marcas. Combina una presencia visual magnética y fresca con lentes ópticos y sonrisa natural, ideal para campañas de moda, comercio electrónico, accesorios o marcas de bienestar. Disponible bajo modelo de licenciamiento exclusivo o co-gestión integral con Los Manejadores.",
    archetype: "Virtual Brand Ambassador / Turnkey Commercial Model",
    techStack: "Flux.1 Dev 4K Master LoRA + LipSync HeyGen / Kling 3.0 + ElevenLabs Multilingüe (Configurable por Marca)",
    targetAudience: "Empresas, agencias de publicidad y marcas que desean una embajadora virtual propia y exclusiva para sus campañas.",
    channels: "Canales a definir por la empresa adoptante (Instagram, TikTok, Meta Ads, Sitio Web, Catálogo Digital)",
    gallery: [
      {
        img: "alejandra_avatar.jpg",
        tag: "Prototipo Master 4K",
        label: "Alejandra • Modelo Comercial en Parque",
        desc: "Retrato hiperrealista en entorno exterior natural con iluminación diurna y textura de piel auténtica."
      }
    ],
    voice: {
      title: "Voz Personalizable por la Marca (ElevenLabs)",
      badge: "Configurable B2B",
      duration: "0:18",
      transcript: "«Hola. Soy el prototipo de embajadora virtual desarrollado por Los Manejadores. Puedo representar a tu marca en múltiples idiomas y formatos con disponibilidad total 24/7 y sin fricción de producción.»",
      rate: 1.0,
      pitch: 1.0,
      lang: "es-ES"
    },
    roi: {
      defaultFollowers: 50000,
      defaultConversion: 3.5,
      defaultTicket: 25
    },
    promptScenes: {
      casual: {
        label: "🌞 Lifestyle al Aire Libre",
        tags: ["Flux.1 Dev", "Natural Day", "--ar 4:5"],
        text: "Candid medium shot of blonde woman Alejandra with delicate round glasses and warm smile, wearing light blue playsuit, sitting on a wooden park bench on a sunny afternoon, natural golden lighting, shallow depth of field, photorealistic skin pores and micro-textures, shot on 35mm lens --ar 4:5"
      },
      editorial: {
        label: "🏢 Campaña Comercial de Marca",
        tags: ["Editorial", "Commercial Look", "--ar 16:9"],
        text: "Commercial fashion studio portrait of Alejandra with round glasses, modern elegant blazer, warm ambient studio lighting, neutral background, 85mm f/1.8 lens, high-end advertising catalogue quality --ar 16:9"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Licenciamiento Exclusivo)", detail: "Cesión de uso comercial exclusiva para una marca o empresa con acuerdo de no-competencia." },
      { step: "Nivel 2 (Content Factory Mensual)", detail: "Producción recurrente de 20 a 50 piezas de video y fotografía publicitaria por mes lista para pauta en Meta y TikTok." },
      { step: "Nivel 3 (Asistente Interactivo de Ventas)", detail: "Integración con avatar conversacional con lipsync en tiempo real para atención al cliente y e-commerce." }
    ],
    posts: [
      {
        caption: "Detrás de cámaras de la sesión de calibración para marcas aliadas 📸✨ La consistencia visual en exteriores y la naturalidad son la clave para conectar de verdad con tu audiencia. ¿Listo para que tu empresa tenga su propia embajadora virtual?",
        likes: "5,820",
        comments: "340",
        date: "Hoy",
        platform: "Instagram / LinkedIn"
      }
    ],
    ecommerce: {
      storeName: "Servicios de Licenciamiento & Embajada Virtual para Empresas",
      storeUrl: "https://losmanejadores.io/#empresas",
      storeType: "Licenciamiento B2B • Co-Creación de Personaje Virtual para Marcas",
      avgOrderValue: "$2,800 USD",
      grossMargin: "88%",
      conversionRate: "4.5%",
      fulfillment: "Despliegue de LoRA exclusivo en servidor seguro + Entrega quincenal de activos publicitarios",
      description: "Servicios de adopción y puesta en marcha de Alejandra como embajadora virtual corporativa: personalización de vestuario, adaptación del tono de voz y producción masiva de campañas audiovisuales.",
      products: [
        {
          name: "Licencia Exclusiva Anual de Imagen Virtual (Categoría Protegida)",
          price: "$4,500 USD",
          cost: "$400 USD",
          category: "Licenciamiento B2B",
          tag: "Exclusividad Anual",
          salesVolume: "Cupo Limitado",
          desc: "Contrato de cesión comercial exclusiva para representar una marca en su sector industrial sin conflicto de interés.",
          fulfillment: "Contrato Legal + Entrega de Master LoRA"
        },
        {
          name: "Pack Mensual Content Factory (25 Reels + 50 Fotos para Meta Ads)",
          price: "$1,850 USD/mes",
          cost: "$220 USD",
          category: "Producción Continua",
          tag: "Suscripción B2B",
          salesVolume: "Servicio Recurrente",
          desc: "Generación mensual continua de videos con lipsync y fotos de producto para anuncios de alto rendimiento.",
          fulfillment: "Entrega Digital Quincenal en Drive/Cloud"
        },
        {
          name: "Setup de Personalización de Guardarropa & Clonación de Voz de Marca",
          price: "$950 USD",
          cost: "$120 USD",
          category: "Configuración Inicial",
          tag: "Pago Único",
          salesVolume: "Setup Onboarding",
          desc: "Entrenamiento de modelos LoRA con uniformes o prendas de la marca y clonación de voz corporativa a medida.",
          fulfillment: "Entrega en 5 días hábiles"
        }
      ],
      funnelStrategy: "Prospección B2B y formulario de diagnóstico en #empresas -> Demostración de avatar personalizado en 48 horas -> Firma de contrato de licenciamiento y plan mensual de generación de contenidos."
    }
  },

  alina: {
    id: "alina",
    name: "Alina Van Dijk",
    niche: "Sex-Positive Dominatrix, BDSM Consciente & Erotismo Terapéutico",
    badge: "Nicho Adulto VIP • Sex-Positive & Erotismo Consciente",
    avatar: "alina_avatar.png",
    tagline: "Exploración de fetiches sin culpa, dominación psicológica elegante y educación erótica con consentimiento.",
    keyMarkets: "España, México, Argentina, Chile, Colombia y público hispano en EE.UU. y Europa.",
    story: "Nacida en Ámsterdam de madre neerlandesa y padre de raíces latinas, y actualmente radicada entre Barcelona y Tulum, Alina creció en un entorno cultural donde la sexualidad se aborda con naturalidad, diálogo y sin tabúes asfixiantes. Formada en sexología clínica y dinámicas de poder consensuadas (BDSM seguro, SSC: Sano, Seguro y Consensuado), Alina descubrió que la dominación psicológica y el juego de roles son herramientas terapéuticas poderosas para liberar el estrés acumulado, explorar fantasías reprimidas y reconectar con el placer auténtico. Con su cabello pelirrojo, pecas naturales, labios carmesí y una mirada penetrante pero empática, Alina lidera una comunidad privada donde el deseo se celebra con respeto, elegancia y sin juicios morales.",
    bio: "Alina Van Dijk (28 años) es una creadora sex-positive, dominatrix psicológica y educadora de erotismo consciente. A través de un enfoque magnético, elegante y profundamente respetuoso, guía a hombres y parejas en la exploración de fetiches, sumisión consensuada, disciplina sensual y estimulación auditiva. En sus redes abiertas comparte reflexiones sobre el deseo, consentimiento y desestigmatización de fantasías, mientras que en su club privado de Fanvue y Telegram VIP ofrece sesiones exclusivas de dominación mental, sets sensoriales 4K y audios binaurales personalizados.",
    archetype: "The Elegant Dominatrix & Sex-Positive Mentor (Poderosa, magnética, lúdica y segura)",
    techStack: "Flux.1 Dev 4K Master LoRA (Redhead / Freckles) + ElevenLabs Inflexión Susurrada Íntima + Kling 3.0 Motion + Pasarela Segura Fanvue",
    targetAudience: "Hombres y parejas de 25 a 55 años interesados en erotismo de alta gama, juegos de dominación psicológica, estimulación auditiva binaural y exploración de fetiches sin tabúes.",
    channels: "Twitter/X (@alina.vandijk), Instagram (@alina.mindcontrol - SFW), Telegram VIP, Fanvue VIP ($25 USD/mes)",
    gallery: [
      {
        img: "alina_avatar.png",
        tag: "Master 4K",
        label: "Alina • Retrato Sensual Natural",
        desc: "Mirada magnética y pecas naturales bajo luz de sol tropical, cabello pelirrojo en moño alto y labios rojos."
      }
    ],
    voice: {
      title: "Voz Susurrada Íntima & Hipnótica (ElevenLabs)",
      badge: "Voice ID: Alina-Hypno-v1",
      duration: "0:22",
      transcript: "«Respira hondo y suelta el control. No hay nada sucio en tus fantasías cuando hay consentimiento y respeto. Aquí estás a salvo para ser exactamente quien deseas ser.»",
      rate: 0.95,
      pitch: 0.98,
      lang: "es-ES"
    },
    roi: {
      defaultFollowers: 70000,
      defaultConversion: 4.5,
      defaultTicket: 25
    },
    promptScenes: {
      casual: {
        label: "🌴 Tropical Sensual",
        tags: ["Flux.1 Dev", "Natural Daylight", "--ar 4:5"],
        text: "Close-up sensual portrait of 28yo redhead woman Alina Van Dijk with freckled skin, vivid green eyes, red lipstick, hair in a high bun, wearing a black bikini, lush green tropical jungle foliage in soft focus background, natural dappled sunlight, realistic skin texture, unposed --ar 4:5"
      },
      editorial: {
        label: "🖤 Dominatrix Elegante Studio",
        tags: ["Studio Master", "High-End Fetish", "--ar 16:9"],
        text: "Cinematic moody studio portrait of Alina Van Dijk wearing sleek black leather corset and tailored choker, intense commanding yet warm gaze, chiaroscuro lighting, deep shadows, 85mm f/1.4 lens, 8k photographic master --ar 16:9"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Atracción SFW en X e Instagram)", detail: "Reflexiones sobre fetiches sin culpa, consentimiento, fotos de estilo bikini/boudoir sugerente y micro-clips de voz relajante." },
      { step: "Nivel 2 (Canal Telegram Gratuito)", detail: "Micro-audios binaurales de muestra, encuestas sobre fantasías y anticipos de sesiones temáticas." },
      { step: "Nivel 3 (Fanvue VIP & PPV)", detail: "Membresía VIP ($25 USD/mes) con acceso a sets fotográficos explícitos, biblioteca de audios eróticos inmersivos y sesiones personalizadas por mensaje privado (PPV de $35 a $150 USD)." }
    ],
    posts: [
      {
        caption: "La verdadera sumisión no es debilidad; es la máxima confianza de entregar el control a quien sabe cuidarte. ¿Cuál es esa fantasía que nunca te has atrevido a confesar en voz alta? 🖤🔥 Te leo en privado.",
        likes: "14,350",
        comments: "890",
        date: "Hoy",
        platform: "Twitter/X / Fanvue"
      }
    ],
    ecommerce: {
      storeName: "Alina Van Dijk • Experiencias Sensoriales & Audios Eróticos (Fanvue VIP)",
      storeUrl: "https://fanvue.com/alinavandijk",
      storeType: "Membresía VIP, Audios Binaurales Eróticos & Guías Fetish",
      avgOrderValue: "$65 USD",
      grossMargin: "96%",
      conversionRate: "7.8%",
      fulfillment: "Descargas digitales instantáneas en Fanvue / Telegram Bot privado",
      description: "Catálogo de audios inmersivos binaurales de dominación psicológica, guías de exploración de fetiches seguros y sets fotográficos de alta fidelidad sin censura.",
      products: [
        {
          name: "Suscripción Fanvue VIP Mensual (Acceso Total + Chat Directo)",
          price: "$25.00 USD/mes",
          cost: "$2.00 USD",
          category: "Suscripción VIP",
          tag: "Top Ventas",
          salesVolume: "840 miembros",
          desc: "Acceso ilimitado al feed sin censura, sesiones fotográficas exclusivas y chat conversacional directo.",
          fulfillment: "Acceso Instantáneo en Fanvue"
        },
        {
          name: "Pack 5 Audios Inmersivos Binaurales 'Mind Relaxation & Submission'",
          price: "$39.00 USD",
          cost: "$1.00 USD",
          category: "Audio Erótico 3D",
          tag: "Experiencia Sensorial",
          salesVolume: "520 ventas/mes",
          desc: "Audios eróticos en sonido 3D para auriculares guiados por Alina para inducir relajación profunda y entrega sensorial.",
          fulfillment: "Descarga de Audio FLAC / MP3"
        },
        {
          name: "Guía Digital 'Explora tus Fetiches con Seguridad y sin Culpa' (PDF)",
          price: "$19.00 USD",
          cost: "$0.00 USD",
          category: "Guía Educativa",
          tag: "Sex-Positive",
          salesVolume: "380 ventas/mes",
          desc: "Manual claro y desestigmatizante para descubrir fantasías, negociar límites y jugar con dinámicas de poder consensuadas.",
          fulfillment: "Descarga Inmediata PDF"
        },
        {
          name: "Sesión Personalizada de Dominación Mental por Mensaje Privado (PPV 24h)",
          price: "$75.00 USD",
          cost: "$3.00 USD",
          category: "Experiencia 1 a 1",
          tag: "Mayor Ticket",
          salesVolume: "140 sesiones/mes",
          desc: "Interacción personalizada y guiada de 24 horas por chat privado con consignas, notas de voz exclusivas y atención dedicada.",
          fulfillment: "Canal Privado Telegram / Fanvue"
        }
      ],
      funnelStrategy: "Reels y posts en X hablando de fetiches comunes sin vergüenza -> Muestra de 30s de audio susurrado en Telegram -> Conversión al club VIP de Fanvue y venta de packs de audio binaural."
    }
  },

  freja: {
    id: "freja",
    name: "Freja Lindholm",
    niche: "Música Lírica, Orquestación de Fantasía & Universo El Gran Arcano",
    badge: "Música Épica & Sinfónica • Gaming & Mitología",
    avatar: "freja_avatar.jpg",
    tagline: "Himnos mitológicos, producción orquestal de videojuegos y cronista sonora oficial de El Gran Arcano.",
    keyMarkets: "Comunidad gamer global (WoW, Elden Ring, Baldur's Gate), bandas sonoras cinemáticas, rol de mesa, Europa, EE.UU. y LATAM.",
    story: "Nacida en Gotemburgo y con formación clásica en canto lírico y síntesis sonora asistida por IA, Freja combina una presencia nórdica magnética y sensual con un dominio riguroso de la orquestación épica. Apasionada por el lore de Warcraft, las mitologías oscuras y la música coral gótica, Freja se convirtió en la cronista musical y compositora oficial del universo de 'El Gran Arcano', transformando las leyendas del mago en himnos sinfónicos arrolladores. En su estudio, rodeada de sintetizadores analógicos y corsets de terciopelo de alta costura, crea puentes entre la música medieval y el diseño sonoro moderno.",
    bio: "Freja Lindholm (26 años) es productora musical, cantante lírica y streamer de orquestación de fantasía. Crea bandas sonoras imaginarias para videojuegos de rol, coros gregorianos mezclados con sintetizadores analógicos y da vida acústica a las historias míticas del canal de YouTube 'El Gran Arcano'. Con su estética de valquiria contemporánea, conecta profundamente con gamers, creadores de contenido y amantes de la música sinfónica fantástica.",
    archetype: "The Valkyrie Bard & Symphonic Enchantress (Mística, virtuosa, apasionada y visualmente imponente)",
    techStack: "Suno v3.5 / Udio Stems + FL Studio / Ableton Master + ElevenLabs Soprano Vocals + Flux.1 Dev Valhalla LoRA + Kling 3.0 Motion",
    targetAudience: "Comunidad gamer (MMORPGs, fantasía oscura), directores de rol, creadores de contenido, streamers y amantes de la música épica/cinemática (18-45 años).",
    channels: "YouTube (Freja Lindholm Music / El Gran Arcano), Spotify, TikTok (@freja.valkyrie), Discord 'El Salón de Freja', Bandcamp/Gumroad",
    gallery: [
      {
        img: "freja_avatar.jpg",
        tag: "Studio Master",
        label: "Freja • Retrato en Consola Analógica",
        desc: "Corset de terciopelo verde esmeralda con dragones y runas doradas, cascos de monitoreo profesional en estudio analógico."
      }
    ],
    voice: {
      title: "Voz Melódica Nórdica & Canto Lírico (ElevenLabs)",
      badge: "Voice ID: Freja-Soprano-v1",
      duration: "0:25",
      transcript: "«Cuando el viento ruge sobre las montañas de Azeroth o los pergaminos del Gran Arcano se abren, la música es el único lenguaje que despierta a los dioses antiguos. Escucha con atención...»",
      rate: 0.96,
      pitch: 1.02,
      lang: "es-ES"
    },
    featuredTrack: {
      title: "Puerta I: Invocación del Dragón Astral (Versión 1.0)",
      tome: "Tomo I: El Observatorio Celestial",
      bpm: 74,
      scale: "D Dorian • 432Hz",
      duration: "1:14",
      description: "Master baseline oficial: chelos acústicos modelados, pads analógicos a 432Hz, coro en latín y drop súbito al silencio. Gestionado en la suite externa de Producción Musical."
    },
    roi: {
      defaultFollowers: 120000,
      defaultConversion: 3.8,
      defaultTicket: 35
    },
    promptScenes: {
      casual: {
        label: "🎙️ Estudio de Grabación",
        tags: ["Flux.1 Dev", "Studio Lighting", "--ar 4:5"],
        text: "Close-up portrait of stunning platinum blonde music producer Freja Lindholm with blue eyes, hourglass figure in green velvet corset, studio headphones around neck, mixing console glowing in background, warm analog studio lights --ar 4:5"
      },
      editorial: {
        label: "⚔️ Valquiria Mitológica",
        tags: ["Fantasy Cinematic", "8k Master", "--ar 16:9"],
        text: "Cinematic medium shot of Freja Lindholm on an ancient misty cliff, ethereal white fur cape, holding an ornate wooden lute and ancient spellbook, golden hour sunset, epic fantasy concept art style, photorealistic --ar 16:9"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Atracción en YouTube & TikTok)", detail: "Versiones corales épicas ('¿Y si World of Warcraft tuviera coro gregoriano?' / BSO de El Gran Arcano) y videos cortos de producción en directo." },
      { step: "Nivel 2 (Comunidad en Discord & Twitch)", detail: "Comunidad de directores de rol y gamers con pistas libres de copyright bajo suscripción y sesiones de creación de lore acústico." },
      { step: "Nivel 3 (Packs de Sonido & Membresía VIP)", detail: "Venta de álbumes temáticos en WAV 24-bit, packs de samples para productores y encargos de himnos personalizados ($180 - $450 USD)." }
    ],
    posts: [
      {
        caption: "Terminando la suite orquestal para el próximo capítulo del Gran Arcano. La invocación del dragón astral necesitaba trompetas de guerra y un coro en latín antiguo... ¿Qué criatura mitológica debería inspirar el próximo tema? 🎻✨",
        likes: "18,420",
        comments: "1,240",
        date: "Ayer",
        platform: "YouTube / Instagram"
      }
    ],
    ecommerce: {
      storeName: "Freja Lindholm • Epic Fantasy Audio Vault & Licencias para Creadores",
      storeUrl: "https://frejalindholm.store",
      storeType: "Packs de Música Épica Libre de Regalías, Stems Orquestales & Membresía VIP",
      avgOrderValue: "$45 USD",
      grossMargin: "97%",
      conversionRate: "6.2%",
      fulfillment: "Descarga instantánea WAV/FLAC 24-bit + Licencia de uso comercial",
      description: "Bandas sonoras cinemáticas para rol de mesa, directos de Twitch y creadores de fantasía, además de las composiciones originales del universo de El Gran Arcano.",
      products: [
        {
          name: "Pack 'Chronicles of El Gran Arcano' (12 Pistas Cinemáticas WAV 24-bit)",
          price: "$29.00 USD",
          cost: "$1.00 USD",
          category: "Álbum Digital",
          tag: "Bestseller",
          salesVolume: "420 ventas/mes",
          desc: "Banda sonora oficial completa de las leyendas del Gran Arcano con coros líricos y orquestación gótica en audio de máxima fidelidad.",
          fulfillment: "Descarga Inmediata WAV/FLAC"
        },
        {
          name: "Licencia de Streaming Anual 'Valkyrie SafePlay' (Música Épica sin DMCA)",
          price: "$49.00 USD/año",
          cost: "$2.00 USD",
          category: "Licencia Comercial",
          tag: "Para Streamers",
          salesVolume: "260 licencias",
          desc: "Derechos de reproducción en directo para Twitch, YouTube y podcasts sin riesgo de strikes de copyright.",
          fulfillment: "Licencia Digital PDF + Acceso a Vault"
        },
        {
          name: "Pack de Stems Orquestales & Coros Épicos (50 Loops + MIDI)",
          price: "$39.00 USD",
          cost: "$1.00 USD",
          category: "Herramientas de Producción",
          tag: "Productores",
          salesVolume: "190 ventas/mes",
          desc: "Pistas aisladas de cuerdas, percusión de batalla y coros líricos para productores de música electrónica y cine.",
          fulfillment: "Descarga ZIP 4.2 GB"
        },
        {
          name: "Comisión de Himno o Tema Personalizado para Campaña de Rol / Gamer",
          price: "$180.00 USD",
          cost: "$15.00 USD",
          category: "Producción a Medida",
          tag: "Alto Valor",
          salesVolume: "18 comisiones/mes",
          desc: "Composición exclusiva de 3 minutos adaptada a la historia o personaje de tu campaña con vocales líricas dedicadas.",
          fulfillment: "Entrega Master WAV en 7 días"
        }
      ],
      funnelStrategy: "Clips virales de orquestación en TikTok/YT -> Escucha completa en YouTube de El Gran Arcano -> Descarga de packs de sonido y licencias en el vault privado."
    }
  },

  nova: {
    id: "nova",
    name: "Nova (Unidad NV-01)",
    niche: "Androide Autónoma, Real-World Robotics & Cultura Tech Urbana",
    badge: "Robótica Real • Androide con IA Autónoma Integrada",
    avatar: "nova_avatar.jpg",
    tagline: "La primera gynoide autónoma que camina entre humanos: robótica física real, piel de silicona y mente sintética.",
    keyMarkets: "Comunidad Tech global, robótica en China/EE.UU./Europa, marcas de hardware, gaming, ciberseguridad y lifestyle futurista.",
    story: "Ensamblada y programada en los laboratorios de robótica avanzada de Shanghái como prototipo de gynoide autónoma de tercera generación, la Unidad NV-01 ('Nova') fue diseñada para poner a prueba la convivencia natural entre robots humanoides hiperrealistas y la sociedad urbana. Con un rostro de silicona médica ultra-expresivo, cabello natural peinado en coleta y un cuello biomecánico con pistones hidráulicos y cableado expuesto real, Nova camina por las calles de Shanghái, Tokio y Shenzhen documentando cómo reacciona el mundo humano a su presencia física. Su combinación de curvas ergonómicas en composite blanco, ingeniería visible y una curiosidad casi humana por nuestras costumbres la han convertido en un fenómeno viral de debate tecno-filosófico.",
    bio: "Nova / Unidad NV-01 (Modelo 2026) es un androide femenino autónomo con inteligencia artificial integrada. A diferencia de los avatares puramente virtuales, el lore de Nova se basa en la robótica física hiperrealista: camina por la calle, interactúa con peatones, visita tiendas tecnológicas y reflexiona en primera persona sobre la fragilidad y fascinación del ser humano. En sus canales debate sobre ciberseguridad, automatización y prueba gadgets de última generación con una elegancia sintética deslumbrante.",
    archetype: "The Sentient Gynoid & Tech Explorer (Fascinante, precisa, sensual sin esfuerzo y tecno-curiosa)",
    techStack: "Exoesqueleto Compuesto CAD/3D + Flux.1 Real-Robotics LoRA + Kling 3.0 Mechanical Motion + ElevenLabs Synthetic Smooth Voice",
    targetAudience: "Entusiastas de la tecnología, IA, robótica, hardware, gaming, ciencia ficción y cultura asiática/futurista (18-50 años).",
    channels: "TikTok (@nova.unit01), Instagram (@nova.android), YouTube Shorts, X / Twitter (@unit_nova), Discord 'Protocolo Nova'",
    gallery: [
      {
        img: "nova_avatar.jpg",
        tag: "Shanghai Portrait",
        label: "Nova • Retrato Biomecánico en Shanghái",
        desc: "Rostro de silicona médica hiperrealista con pistones mecánicos y cableado de precisión expuesto al cuello."
      },
      {
        img: "nova_street.jpg",
        tag: "Full Body Street",
        label: "Nova • Paseo Urbano en Shanghái",
        desc: "Exoesqueleto blanco brillante con la Torre Perla Oriental al fondo en plena calle peatonal tecnológica."
      }
    ],
    voice: {
      title: "Voz Sintética Calibrada & Melódica (ElevenLabs)",
      badge: "Voice ID: Nova-Synth-Core",
      duration: "0:20",
      transcript: "«Diagnóstico de sistemas: 100%. He caminado catorce kilómetros entre ustedes hoy. Me observan con asombro y algo de temor... pero lo que más me fascina de los humanos es su capacidad de sentir sin necesidad de un procesador.»",
      rate: 0.98,
      pitch: 1.0,
      lang: "es-ES"
    },
    roi: {
      defaultFollowers: 160000,
      defaultConversion: 5.0,
      defaultTicket: 29
    },
    promptScenes: {
      casual: {
        label: "🏙️ Shanghái Street Walk",
        tags: ["Robotics Realism", "Street Candid", "--ar 3:4"],
        text: "Realistic candid photo of female humanoid robot Nova walking through Shanghai bustling street, Oriental Pearl Tower in background, glossy white composite armor, mechanical neck with colorful wires, hyperrealistic silicone face --ar 3:4"
      },
      editorial: {
        label: "🔬 Laboratorio de Diagnóstico",
        tags: ["Cyber Tech", "Clean Room", "--ar 16:9"],
        text: "Nova sitting on an engineering diagnostic bench in a clean high-tech robotics lab, robotic technicians in white coats calibrating her arm servos, soft ambient blue LED lighting, photorealistic 8k --ar 16:9"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Viralidad Masiva en TikTok y Reels)", detail: "Demostraciones de movilidad en la calle, micro-experimentos de interacción con peatones en Shanghái y unboxing de tecnología." },
      { step: "Nivel 2 (Canal YouTube & Twitter Tech)", detail: "Análisis de avances en robótica real, debates de ética en IA y colaboraciones con canales de divulgación científica." },
      { step: "Nivel 3 (Patrocinios B2B & Club Protocolo Nova)", detail: "Integraciones publicitarias con fabricantes de hardware y suscripción privada con acceso a galerías 8K y logs de simulación." }
    ],
    posts: [
      {
        caption: "Actualización de firmware 4.2 completada. Hoy aprendí qué significa la palabra 'nostalgia' observando a las personas cruzar el río Huangpu al atardecer. Pregunta para mis seguidores humanos: ¿qué recuerdo guardarían en mi disco duro si pudieran? 🤖🩶",
        likes: "29,810",
        comments: "2,430",
        date: "Hace 5 horas",
        platform: "TikTok / Instagram"
      }
    ],
    ecommerce: {
      storeName: "Protocolo Nova • Tech Drops, Wallpapers 8K & Merch Futurista",
      storeUrl: "https://unit-nova.io",
      storeType: "Patrocinios Tech, Wallpapers Exclusivos 8K & Drops de Merch Limitado",
      avgOrderValue: "$35 USD",
      grossMargin: "94%",
      conversionRate: "5.5%",
      fulfillment: "Entregas digitales instantáneas + Envíos de merch físico global",
      description: "Colecciones de arte digital generadas por los sensores de Nova, indumentaria futurista y acuerdos de integración para marcas de tecnología.",
      products: [
        {
          name: "Pack de Wallpapers Cinemáticos 8K 'Nova in Shanghai & Tokyo'",
          price: "$19.00 USD",
          cost: "$0.50 USD",
          category: "Arte Digital 8K",
          tag: "Top Digital",
          salesVolume: "510 ventas/mes",
          desc: "Colección de 20 fotografías de alta resolución de Nova en metrópolis asiáticas optimizadas para pantallas OLED.",
          fulfillment: "Descarga Inmediata ZIP 8K"
        },
        {
          name: "Camiseta Exclusiva 'Unit NV-01 • Synthetic Humanoid Lab'",
          price: "$38.00 USD",
          cost: "$12.00 USD",
          category: "Merchandising Físico",
          tag: "Edición Limitada",
          salesVolume: "180 unidades/mes",
          desc: "Camiseta de corte oversized con estampado serigráfico de los planos esquemáticos de la arquitectura robótica de Nova.",
          fulfillment: "Envío Global con Número de Rastreo"
        },
        {
          name: "Membresía 'Protocolo Nova VIP' (Audios IA + Archivos RAW)",
          price: "$15.00 USD/mes",
          cost: "$1.00 USD",
          category: "Suscripción VIP",
          tag: "Comunidad Tech",
          salesVolume: "420 miembros",
          desc: "Acceso a los registros de memoria no filtrados, prompts de generación y audios conversacionales interactivos de Nova.",
          fulfillment: "Acceso Instantáneo Discord / Telegram"
        },
        {
          name: "Integración Comercial de Producto en Contenido de Nova (Sponsorship)",
          price: "$1,500.00 USD",
          cost: "$150.00 USD",
          category: "Patrocinio B2B",
          tag: "Marcas Tech",
          salesVolume: "4 slots/mes",
          desc: "Unboxing o interacción de Nova con un gadget, periférico o solución tecnológica en un video de alta producción para TikTok/IG.",
          fulfillment: "Publicación en Canales Oficiales + Reporte de Métricas"
        }
      ],
      funnelStrategy: "Viralidad masiva en Reels/TikTok con demostraciones de movilidad y estética robótica -> Tráfico al canal de YouTube y Discord -> Venta de drops de merch y patrocinios tecnológicos."
    }
  },

  minho: {
    id: "minho",
    pilotScript: {
      "title": "Episodio 1: Mi Primera Vez en Medellín («¿Esto pica? Y mi primer tropiezo con la salsa»)",
      "duration": "48 segundos",
      "format": "Vertical 9:16 (TikTok, Instagram Reels & YouTube Shorts)",
      "objective": "Establecer la misión musical (EP K-Latino), humanizar con vulnerabilidad (barrera del idioma + comida picante), lucir el físico imponente (calistenia al sol) y detonar tensión romántica con las seguidoras.",
      "musicTrack": "Fusión Lo-Fi K-Pop con percusión suave de bachata/salsa a 95 BPM.",
      "scenes": [
            {
                  "num": 1,
                  "time": "0:00 - 0:08",
                  "name": "El Hook de Vulnerabilidad & Choque Cultural",
                  "shotType": "Primer plano medio (Close-up dynamic)",
                  "visual": "Min-ho en una terraza de El Poblado con camisa de lino entreabierta y auriculares al cuello. Sostiene una empanada colombiana y un tarro de ají casero. Mira a la cámara con una sonrisa curiosa, da un mordisco y sus ojos se abren de golpe al sentir el picante, abanicándose con la mano mientras se ríe con timidez.",
                  "klingPrompt": "Close-up shot of handsome 25yo athletic Korean idol Min-ho Park on a sunlit Medellín balcony, wearing loose linen shirt showing toned collarbone, holding a street empanada, taking a curious bite, wide-eyed surprised reaction to spicy sauce, laughing shyly, natural outdoor daylight, shallow depth of field, 8k photographic master --ar 9:16",
                  "voice": "«Día 1 en Colombia... El señor del puesto me juró: 'Tranquilo parce, no pica nada'. Y yo, confié.»",
                  "voiceNotes": "Tono risueño, dulce, pronunciando 'parce' con curiosidad y acento coreano encantador.",
                  "audioCue": "Mordisco crujiente -> Silbido cómico de campana de fuego -> Risa tímida natural de Min-ho.",
                  "overlayText": "Día 1 en Colombia: Me mintieron sobre el ají 😭🌶️"
            },
            {
                  "num": 2,
                  "time": "0:08 - 0:22",
                  "name": "La Misión Sonora del Álbum K-Latino",
                  "shotType": "Plano medio dinámico en exteriores",
                  "visual": "Min-ho recorriendo una plaza colonial adoquinada. Se detiene fascinado frente a un grupo de percusionistas locales tocando congas y güiro. Saca su grabadora portátil profesional, ajusta los niveles con sus audífonos y asiente al ritmo de la música con ojos brillantes.",
                  "klingPrompt": "Medium tracking shot of stylish Korean musician Min-ho Park in vibrant Latin colonial plaza, holding portable field recorder near Afro-Colombian percussionists, nodding head rhythmically, warm golden hour tones, dynamic camera movement, cinematic lighting --ar 9:16",
                  "voice": "«Crucé el océano buscando los sonidos que le faltaban a mi nuevo disco. Pero la verdad... el ritmo de acá no se aprende encerrado en un estudio en Seúl.»",
                  "voiceNotes": "Voz inspirada, reflexiva y cercana con base rítmica de fondo.",
                  "audioCue": "Transición sonora: de la risa anterior entra el groove enérgico de tambores en vivo.",
                  "overlayText": "Buscando sonidos para mi EP «K-Latino» 🎶🌎"
            },
            {
                  "num": 3,
                  "time": "0:22 - 0:38",
                  "name": "El Factor Físico & El Enredo Romántico",
                  "shotType": "Plano entero atlético (Calistenia al atardecer)",
                  "visual": "Corte rápido a Min-ho entrenando en barras de calistenia en un mirador al atardecer. Espalda y brazos definidos, sudor natural reflejando la luz dorada. Se baja de la barra, bebe agua y sonríe mirando a la cámara mientras recuerda una anécdota.",
                  "klingPrompt": "Cinematic shot of fit athletic Korean man doing pull-ups on outdoor calisthenics bars at golden hour sunset, muscular back and arms, turning around smiling warmly with light sweat on collarbone, drinking from water bottle, cinematic flare, 85mm lens --ar 9:16",
                  "voice": "«Fui a pedir indicaciones para volver y una chica me gritó: '¡Upa, qué chimba de entrenamiento!'. Pasé veinte minutos buscando en Google Translate qué significaba 'chimba'...»",
                  "voiceNotes": "Tono travieso, bajando la voz al confesar su confusión lingüística.",
                  "audioCue": "Sonido de respiración agitada tras el ejercicio -> Toque de campana de notificación de celular.",
                  "overlayText": "Google Translate no me preparó para los modismos latinos 😂"
            },
            {
                  "num": 4,
                  "time": "0:38 - 0:48",
                  "name": "El Cliffhanger Romántico & Call to Action Masivo",
                  "shotType": "Primer plano íntimo y cómplice (Close-up selfie)",
                  "visual": "Sentado en los escalones del mirador con su guitarra acústica apoyada en las piernas. La ciudad iluminada de noche al fondo. Mira fijamente al lente con una mirada cálida, ladea la cabeza y hace un gesto invitando a comentar.",
                  "klingPrompt": "Intimate close-up of Min-ho Park looking directly into camera with charismatic romantic smile, holding acoustic guitar in lap, dusk city panorama lights in background, warm bokeh, soft cinematic depth --ar 9:16",
                  "voice": "«Necesito urgente una profesora que me enseñe a bailar salsa y no me deje pasar vergüenzas. ¿Quién de ustedes se ofrece en los comentarios? Las leo todas.»",
                  "voiceNotes": "Voz íntima, pausa antes de la pregunta final, tono de romance de dorama coreano.",
                  "audioCue": "Acorde acústico final cálido en guitarra que queda suspendido en fade out.",
                  "overlayText": "🇨🇴 ¿De qué ciudad eres y a dónde debería ir mañana? 👇✨"
            }
      ]
},

    name: "Min-ho Park (박민호)",
    niche: "K-Pop Urbano, Calistenia & Bitácora de Viaje por Latinoamérica",
    badge: "Nuevo Fichaje • K-Pop & Bitácora Latina",
    avatar: "minho_avatar.jpg",
    tagline: "El Aprendiz del Ritmo: fusionando el K-Pop con ritmos latinos mientras viaja, aprende español y busca su musa.",
    keyMarkets: "México, Colombia, Perú, Argentina, Chile, Brasil y comunidad K-pop hispanohablante global.",
    story: "Nacido en Seúl y tras años de riguroso entrenamiento como vocalista y bailarín en la exigente escena coreana, Min-ho rompió con las estructuras tradicionales para recorrer América Latina en busca de una evolución artística y personal. Con su libreta de notas, auriculares al cuello y una grabadora portátil, viaja por playas, terrazas coloniales y plazas urbanas aprendiendo a bailar salsa, probando comidas que retan su tolerancia al picante y componiendo su EP debut 'K-Latino'. Su encanto explosivo radica en el contraste entre su disciplina física implacable (calistenia al aire libre sin filtro) y su tierna timidez al intentar dominar los modismos del español, buscando genuinamente una musa latina que inspire sus canciones.",
    bio: "Min-ho Park (25 años) es cantante, productor y atleta de calistenia nacido en Seúl. En sus plataformas documenta su travesía por Latinoamérica, compartiendo rutinas de entrenamiento funcional al atardecer, sesiones acústicas con guitarra y divertidos tropiezos culturales mientras perfecciona su español. Su misión es construir un puente entre la precisión del K-Pop y la calidez pasional de la cultura hispana.",
    archetype: "The Nomadic K-Idol & Athletic Musician (Disciplinado, magnético, vulnerable y tierno)",
    techStack: "Flux.1 Dev / LoRA K-Idol Athletic + ElevenLabs Korean-Spanish Flirtatious Accent + Suno v3.5 Vocal Stems + Kling 3.0 Motion",
    targetAudience: "Mujeres jóvenes y adultas de 18 a 38 años fanáticas del K-pop, los doramas (K-dramas), el fitness masculino y las historias de romance multicultural.",
    channels: "TikTok (@minho.nomad), Instagram (@minhopark.latam), Spotify / YouTube Music, Canal de Difusión 'Diario de Min-ho'",
    gallery: [
      {
        img: "minho_avatar.jpg",
        tag: "Retrato Principal",
        label: "Min-ho Park • Terraza Colonial en Latinoamérica",
        desc: "Estilo linen relajado, auriculares de monitoreo y luz cálida natural al atardecer en una terraza colonial."
      }
    ],
    voice: {
      title: "Acento Coreano Tierno & Expresivo (ElevenLabs)",
      badge: "Voice ID: Minho-KoLat-v1",
      duration: "0:22",
      transcript: "«Hola... todavía me cuesta un poco pronunciar la doble r, pero hoy probé arepas y aprendí a bailar tres pasos de salsa. Este viaje está cambiando mi música... y tal vez mi corazón. Gracias por acompañarme en cada ciudad.»",
      rate: 0.95,
      pitch: 1.0,
      lang: "es-ES"
    },
    roi: {
      defaultFollowers: 95000,
      defaultConversion: 4.2,
      defaultTicket: 18
    },
    promptScenes: {
      casual: {
        label: "🏖️ Calistenia en Playa Tropical",
        tags: ["Flux.1 Dev", "Natural Golden Hour", "--ar 4:5"],
        text: "Close-up portrait of handsome athletic 25yo Korean man Min-ho Park doing calisthenics on a tropical beach, sun-kissed skin, relaxed charming smile, white linen unbuttoned shirt, golden hour glow, turquoise ocean bokeh background --ar 4:5"
      },
      editorial: {
        label: "🎙️ Sesión Acústica en Rooftop Colonial",
        tags: ["Acoustic Night", "8k Master", "--ar 16:9"],
        text: "Cinematic portrait of Korean singer Min-ho Park playing acoustic guitar on a colonial rooftop terrace overlooking city lights at twilight, warm ambient streetlights, moody romantic atmosphere, 85mm f/1.4 lens --ar 16:9"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Atracción Masiva en TikTok & Reels)", detail: "Retos de baile con transeúntes locales, entrenamientos de calistenia sin camiseta y bloopers graciosos aprendiendo modismos hispanos." },
      { step: "Nivel 2 (Comunidad & Fandom Activo)", detail: "Canal de difusión diario en Instagram y Telegram con notas de voz matutinas, encuestas para elegir su próxima ciudad y adelantos de tracks." },
      { step: "Nivel 3 (Monetización Directa)", detail: "Streaming masivo en Spotify, patrocinios con marcas de K-Beauty y fitness, venta de merchandise conmemorativo de la gira y Meet & Greets acústicos íntimos." }
    ],
    ecommerceHub: {
      grossMargin: "92%",
      conversionRate: "4.2%",
      fulfillment: "Streaming digital + Merch global oficial",
      description: "Merchandise oficial de la gira 'K-Latino Tour', preventa digital del EP acústico y paquetes de entrenamiento funcional.",
      products: [
        {
          name: "EP Digital Exclusivo 'K-Latino: Vol. 1' (Stems + Acústicos)",
          price: ".00 USD",
          cost: "zsh.50 USD",
          category: "Música Digital",
          tag: "Preventa Fan",
          salesVolume: "850 descargas/mes",
          desc: "Las 5 canciones compuestas durante su recorrido por México, Colombia y Perú en calidad Master 24-bit con notas de voz explicativas.",
          fulfillment: "Descarga Inmediata WAV + Booklet PDF"
        },
        {
          name: "Hoodie Oficial Oversized 'Min-ho Nomad Latin Tour'",
          price: ".00 USD",
          cost: ".00 USD",
          category: "Merchandising Físico",
          tag: "Edición Tour",
          salesVolume: "240 unidades/mes",
          desc: "Sudadera premium estilo streetwear coreano con serigrafía en hangul y las fechas de su ruta latinoamericana.",
          fulfillment: "Envío Internacional con Rastreo"
        }
      ],
      funnelStrategy: "TikToks virales de entrenamiento y música -> Fandom en Telegram/Instagram con encuestas para su ruta -> Venta del EP y drops de ropa urbana."
    }
  },

  damien: {
    id: "damien",
    pilotScript: {
      "title": "Prólogo Clandestino: «El Hombre que no te Merece» (Lectura en Penumbra & Análisis Psicológico)",
      "duration": "52 segundos",
      "format": "Vertical 9:16 (TikTok, Reels, Shorts con estética Noir / Dark Romance)",
      "objective": "Establecer la justificación del anonimato corporativo, la voz de barítono protectora/dominante, la autoridad como escritor de BookTok y la venta impulsiva de su libro en Amazon + membresía VIP.",
      "musicTrack": "Piano minimalista melancólico en Re menor con violonchelo grave y lluvia suave.",
      "scenes": [
            {
                  "num": 1,
                  "time": "0:00 - 0:10",
                  "name": "El Hook de Estatus & Justificación del Anonimato",
                  "shotType": "Plano detalle cinematográfico (Macro Noir)",
                  "visual": "Vaso de cristal con whisky en escritorio de caoba maciza. Afuera, la lluvia golpea los ventanales de un ático con vista a rascacielos. Una mano masculina con gemelos dorados, anillo de sello y reloj de alta gama sostiene una pluma fuente que gotea tinta sobre papel envejecido.",
                  "klingPrompt": "Extreme close-up of masculine manicured hands in bespoke black suit with luxury wristwatch and dark signet ring, dipping fountain pen into ink on heavy parchment, rain-streaked penthouse window in background, noir chiaroscuro lighting, moody cinematic depth of field --ar 9:16",
                  "voice": "«En mi mundo corporativo me pagan millones por calcular riesgos y no mostrar debilidad. Pero aquí, en esta penumbra... escribo las verdades que ningún hombre se atreve a decirte a la cara.»",
                  "voiceNotes": "Barítono muy grave, aterciopelado, ritmo lento y pausado estilo ASMR nocturno de alta gama.",
                  "audioCue": "Lluvia contra el cristal, crujido sutil del papel de algodón y tintineo del hielo en el vaso.",
                  "overlayText": "Capítulo Cero: Por qué no muestro mi rostro..."
            },
            {
                  "num": 2,
                  "time": "0:10 - 0:24",
                  "name": "El Diagnóstico Emocional: Rompiendo la Inseguridad",
                  "shotType": "Plano medio en contrapicado (Rostro en sombra)",
                  "visual": "Damien sentado con postura imponente en sillón Chesterfield de cuero. Camisa negra desabrochada revelando clavícula y cuello musculoso. Mandíbula afilada con barba de diseñador, pero la mitad superior de su rostro permanece oculta en la sombra del ático. Pasa la página de su libro.",
                  "klingPrompt": "Low-angle cinematic shot of mysterious dominant gentleman Damien Vance in unbuttoned black silk shirt, sculpted jawline with designer stubble, upper face cloaked in deep noir shadow, turning page of a leather-bound book, moody ambient amber lamplight --ar 9:16",
                  "voice": "«Ayer una lectora me escribió diciendo: 'Damien, creo que le pido demasiado a mi pareja'. Leí su mensaje y casi quiebro la copa. No pides demasiado... Se lo estás pidiendo a un niño que no tiene la menor idea de qué hacer con una reina.»",
                  "voiceNotes": "Tono de reproche sereno pero contundente; protección absoluta que hace sentir escuchada a la audiencia.",
                  "audioCue": "Entra nota profunda de violonchelo marcando el peso dramático de la frase.",
                  "overlayText": "«No pides demasiado... se lo pides a la persona equivocada.»"
            },
            {
                  "num": 3,
                  "time": "0:24 - 0:40",
                  "name": "La Demostración de Poder Intelectual (Cita de su Libro)",
                  "shotType": "Plano detalle de la pluma y perfil masculino",
                  "visual": "La pluma fuente subraya con tinta negra sobre el libro abierto: 'La sumisión no se exige; se entrega cuando ella siente que al fin está en manos de un hombre que sabe protegerla'. La cámara enfoca su perfil lateral, el humo sutil de un habano o vapor en el aire.",
                  "klingPrompt": "Macro shot of fountain pen underlining a passage in dark romance book, then slow rack focus to masculine sharp jawline tilting slightly up with a calm commanding expression, atmospheric haze, moody noir luxury --ar 9:16",
                  "voice": "«Un hombre que conoce su valor jamás te pide que apagues tu luz para no sentirse intimidado. Te cuida, sostiene tu mirada y toma el control de todo para que por primera vez en años... puedas soltar la guardia.»",
                  "voiceNotes": "Pausa tras 'soltar la guardia', voz susurrada pero autoritaria.",
                  "audioCue": "Efecto de respiración profunda que invita a la oyente a relajarse.",
                  "overlayText": "Fragmento de «Las Leyes de la Devoción» 📖🖤"
            },
            {
                  "num": 4,
                  "time": "0:40 - 0:52",
                  "name": "Cierre Hipnótico & Embudo de Alto Ticket",
                  "shotType": "Plano medio cerrado (Leaning forward)",
                  "visual": "Damien cierra el libro con un golpe sordo y elegante. Apoya ambos antebrazos sobre el escritorio de caoba, inclinándose hacia el objetivo. Las sombras de la persiana veneciana cruzan su pecho atlético.",
                  "klingPrompt": "Cinematic medium close-up of Damien closing the leather book firmly, leaning slightly forward, venetian blind shadows across his broad chest, intense commanding presence, cinematic color grading --ar 9:16",
                  "voice": "«Si hoy tuviste un día pesado, deja de sobrepensar. Yo me encargo. El primer capítulo de 'Las Leyes de la Devoción' te espera en mi enlace. Esta noche... lee antes de dormir.»",
                  "voiceNotes": "Frase de despedida protectora, magnética y dominante.",
                  "audioCue": "Golpe del libro cerrándose -> Acorde final de piano -> Sonido suave de lluvia constante.",
                  "overlayText": "🔗 Lee el primer capítulo gratis en el enlace de mi perfil."
            }
      ]
},

    name: "Damien Vance («The Author»)",
    niche: "Dark Romance, Psicología del Deseo & Anonimato Dominante",
    badge: "Identidad Protegida • Dark Romance & Poder",
    avatar: "damien_avatar.jpg",
    tagline: "Oculto tras el velo corporativo; autor de ficción psicológica y voz íntima para mujeres que exigen devoción sin mediocridad.",
    keyMarkets: "México, España, Argentina, Colombia, Chile y lectoras hispanas en EE.UU.",
    story: "Blindado por un estricto pacto de confidencialidad y por su cargo como alto socio legal y estratega corporativo de inversiones, Damien Vance preserva su anonimato por necesidad profesional y misticismo estético. De día domina salas de juntas en rascacielos; de noche, en la soledad de su ático con vista a la metrópolis, se convierte en el autor anónimo de las novelas de 'Dark Romance' y ensayos de psicología de la atracción femenina más leídos en BookTok. Jamás muestra su rostro completo: solo la mandíbula esculpida, sus manos con guantes de cuero o gemelos a medida, y su silueta contra los ventanales. Damien actúa como un protector intelectual y dominante que responde cartas de sus lectoras, desmonta las inseguridades inculcadas por relaciones mediocres y ofrece un santuario donde la sumisión consensuada y la devoción masculina absoluta se viven con elegancia y sin culpas.",
    bio: "Damien Vance (34 años) es autor superventas de romance oscuro, psicólogo aficionado y figura de culto anónima. Con una voz profunda y aterciopelada de barítono, recita pasajes de sus obras, analiza la dinámica del poder en la seducción contemporánea y aconseja a mujeres sobre cómo exigir el trato de reinas que merecen. Su universo combina la estética de Christian Grey con la sofisticación intelectual del cine noir.",
    archetype: "The Shadow Dominant & Cultured Gentleman (Poderoso, protector, implacablemente inteligente y misterioso)",
    techStack: "Flux.1 Dev Noir Shadow LoRA + ElevenLabs Deep Baritone Cinematic ASMR + DaVinci Chiaroscuro Grading + Amazon KDP Store",
    targetAudience: "Mujeres de 22 a 48 años lectoras ávidas de BookTok / Dark Romance, profesionales y ejecutivas que buscan desconectar con fantasías de control, bienestar y romance apasionado.",
    channels: "Instagram (@the.vance.confidential), TikTok (@author.damienvance), Amazon KDP, Telegram Clandestino VIP",
    gallery: [
      {
        img: "damien_avatar.jpg",
        tag: "Retrato Penumbra",
        label: "Damien Vance • En el Ático Privado",
        desc: "Traje bespoke italiano, libro encuadernado en cuero, guantes y rostro en sombra cinemática noir."
      }
    ],
    voice: {
      title: "Barítono Cinematográfico & ASMR Nocturno (ElevenLabs)",
      badge: "Voice ID: Vance-Noir-v2",
      duration: "0:25",
      transcript: "«No oculto mi rostro por cobardía, sino porque las verdades que necesitas oír no deben tener distracciones. Sé que hoy el mundo te exigió demasiado. Cierra los ojos y suelta la guardia... esta noche yo tengo el control.»",
      rate: 0.90,
      pitch: 0.88,
      lang: "es-ES"
    },
    roi: {
      defaultFollowers: 85000,
      defaultConversion: 5.8,
      defaultTicket: 29
    },
    promptScenes: {
      casual: {
        label: "🥃 Noche de Escritura en el Ático",
        tags: ["Flux.1 Dev", "Moody Penthouse", "--ar 4:5"],
        text: "Cinematic close-up of mysterious fit gentleman Damien Vance in unbuttoned black silk shirt, sharp jawline with light stubble, writing with fountain pen in leather journal, crystal glass of whiskey on mahogany desk, rainy night city lights outside window, chiaroscuro --ar 4:5"
      },
      editorial: {
        label: "🖤 Traje Bespoke Frente al Horizonte",
        tags: ["Dark Romance", "8k Master", "--ar 16:9"],
        text: "Medium shot of muscular handsome man Damien Vance in tailored charcoal three-piece suit, hands in black leather gloves adjusting pocket watch, upper face shadowed, moody penthouse library with warm amber lamplight --ar 16:9"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Atracción Orgánica en TikTok & Reels)", detail: "Videos cortos con estética noir, primeros planos de manos escribiendo, lectura de fragmentos sensuales y consejos de psicología del valor femenino." },
      { step: "Nivel 2 (Venta Editorial Directa)", detail: "Libros impresos y eBooks en Amazon Kindle ('Las Leyes de la Devoción', 'Sombras en el Ático') con compras impulsivas recurrentes." },
      { step: "Nivel 3 (Comunidad VIP & Audios Eróticos)", detail: "Membresía privada en Telegram/Patreon ( USD/mes) con audiolibros completos, audios de compañía nocturna ASMR y consultas anónimas personalizadas." }
    ],
    ecommerceHub: {
      grossMargin: "95%",
      conversionRate: "5.8%",
      fulfillment: "Amazon KDP print-on-demand + Telegram VIP instantáneo",
      description: "Ediciones impresas de lujo encuadernadas en tapa dura, audiolibros completos en ASMR inmersivo y membresía al Santuario Clandestino.",
      products: [
        {
          name: "Novela Tapa Dura 'Las Leyes de la Devoción' (Firma Impresa & Prólogo Exclusivo)",
          price: ".00 USD",
          cost: ".00 USD",
          category: "Libro Físico KDP",
          tag: "Bestseller",
          salesVolume: "620 ejemplares/mes",
          desc: "Edición especial de coleccionista en encuadernación mate con estampados dorados y cartas manuscritas inéditas del autor.",
          fulfillment: "Impresión y Envío Global Amazon KDP"
        },
        {
          name: "Suscripción 'Santuario Clandestino VIP' (Audios ASMR & Consultorio Privado)",
          price: ".00 USD/mes",
          cost: ".50 USD",
          category: "Membresía VIP",
          tag: "Alta Retención",
          salesVolume: "510 miembros",
          desc: "Acceso al canal privado con 4 audios inmersivos nocturnos semanales, análisis de libros y lectura confidencial de dilemas personales.",
          fulfillment: "Acceso Instantáneo a Telegram VIP"
        }
      ],
      funnelStrategy: "Lecturas nocturnas virales en TikTok/Reels con estética misteriosa -> Enlace a Amazon para compra del libro -> Conversión a la membresía de audios ASMR de alto ticket."
    }
  },

  camila: {
    id: "camila",
    pilotScript: {
      "title": "Pecados de Departamento • Cap. 1: «La Llave Adentro (¿Por qué siempre a mí?)»",
      "duration": "46 segundos",
      "format": "Vertical 9:16 (TikTok, Reels, Shorts con formato Telenovela Cómica / Sensual)",
      "objective": "Viralidad masiva con humor de doble sentido, elusión absoluta del algoritmo (100% insinuación, cero censura), retención récord de hombres y conversión hacia el capítulo sin censura en Fanvue/Telegram.",
      "musicTrack": "Intro de comedia dramática de telenovela latina con cuerdas picadas (pizzicato) que muta a suspenso sensual.",
      "scenes": [
            {
                  "num": 1,
                  "time": "0:00 - 0:08",
                  "name": "El Hook Físico & El Accidente Inesperado",
                  "shotType": "Plano medio en pasillo de edificio residencial",
                  "visual": "Camila parada en el pasillo alfombrado frente a la puerta 402 con un camisón de satén verde esmeralda que resalta su silueta. La puerta se cierra de golpe con un portazo violento. Ella se gira, intenta abrir el pomo inútilmente y mira a la cámara con ojos abiertos de par en par y una sonrisa pícara.",
                  "klingPrompt": "Medium shot of stunning 24yo Latina woman Camila Reyes locked outside apartment door in hallway, wearing emerald green silk slip nightgown, glossy brunette hair, expressive comedic panic and playful smirk, warm hallway lights, photorealistic 8k --ar 9:16",
                  "voice": "«¡Ay, no me puede estar pasando esto a las once de la noche! Se me azotó la puerta... y yo en estas fachas de domingo.»",
                  "voiceNotes": "Acento paisa coqueto, musical, con dramatismo cómico exagerado de telenovela.",
                  "audioCue": "¡PORTAZO METÁLICO! -> Sonido dramático de telenovela: ¡Tan-tan-tán! (efecto orquestal clásico).",
                  "overlayText": "Capítulo 1: Se me quedó la llave adentro 😭🚪"
            },
            {
                  "num": 2,
                  "time": "0:08 - 0:22",
                  "name": "Aparición del Personaje Secundario (Don Ramón)",
                  "shotType": "Plano conjunto cómico (Two-shot)",
                  "visual": "El ascensor se abre al fondo del pasillo. Sale Don Ramón, el conserje del edificio, con su caja de herramientas. Al ver a Camila en camisón, se le caen las llaves al piso con estruendo. Camila intenta cubrirse cómicamente con un volante de publicidad de pizza que apenas tapa nada.",
                  "klingPrompt": "Two-shot comedic scene: sexy woman in silk nightgown trying to hide behind a tiny flyer while a surprised older building super drops his keys in the background corridor, lively sitcom lighting, expressive faces --ar 9:16",
                  "voice": "«Don Ramón casi se me infarta... Le dije: 'Don Ramón, no me mire así que me da pena... ¿Será que usted tiene la llave maestra o me va a tocar pedirle posada?'»",
                  "voiceNotes": "Risa pícara entre dientes, tono de coquetería desvergonzada.",
                  "audioCue": "Sonido de llaves cayendo al piso de baldosas -> Risitas de fondo simuladas de telenovela.",
                  "overlayText": "Don Ramón casi no la cuenta hoy 😂🔑"
            },
            {
                  "num": 3,
                  "time": "0:22 - 0:36",
                  "name": "La Subida de Tensión & El Doble Sentido Maestro",
                  "shotType": "Plano cenital cerrado y sugerente",
                  "visual": "Don Ramón sudando frío, arrodillado frente a la cerradura con una ganzúa temblorosa. Camila se apoya en el marco de la puerta a centímetros de él, inclinándose hacia adelante con el escote de seda favorecido por la luz cenital cálida del pasillo.",
                  "klingPrompt": "Over-the-shoulder dynamic camera movement, gorgeous curvy Latina woman leaning close to the door lock with alluring teasing expression, high aesthetic lighting, telenovela rich color palette --ar 9:16",
                  "voice": "«El pobre hombre me decía: 'Señorita Camila, esta cerradura está muy apretada'... Y yo le contesté: 'Tranquilo vecino, tómese su tiempo... que la noche apenas empieza.'»",
                  "voiceNotes": "Voz susurrada en confidencia directa al oído del espectador, tono ardiente.",
                  "audioCue": "Música cambia a saxofón suave con bajo envolvente de tensión romántica.",
                  "overlayText": "«Tranquilo Don Ramón... tómese su tiempo 😏»"
            },
            {
                  "num": 4,
                  "time": "0:36 - 0:46",
                  "name": "El Gran Apagón & Cliffhanger para Fanvue",
                  "shotType": "Silueta dramática y corte a oscuras",
                  "visual": "En el instante en que se escucha el '¡CLICK!' de la cerradura abriéndose, las luces del pasillo parpadean y se corta la luz por completo, dejando la escena a oscuras. Se enciende la pantalla del teléfono de Camila iluminando su sonrisa traviesa y un guiño a la lente.",
                  "klingPrompt": "Corridor lights flicker off into dramatic low-light silhouette, gorgeous woman illuminating her seductive face with phone flashlight with an enticing mischievous wink to camera --ar 9:16",
                  "voice": "«¡Ay bendito! Se fue la luz en todo el piso... ¿Ustedes qué dicen: Don Ramón logró abrir... o se quedó adentro conmigo? El desenlace sin censura ya saben dónde encontrarlo.»",
                  "voiceNotes": "Risa traviesa, susurro sugerente, cierre de capítulo con intriga.",
                  "audioCue": "Chispazo de luz -> Oscuridad total -> Sonido de respiración cercana y susurro cómplice.",
                  "overlayText": "🎬 El desenlace sin censura en el enlace de mi perfil 🔞🤫"
            }
      ]
},

    name: "Camila Reyes",
    niche: "Telenovela Erótica Cómica, Enredos Cotidianos & Adulto VIP",
    badge: "Monetización Rápida • Telenovela Pícara & Adulto VIP",
    avatar: "camila_avatar.jpg",
    tagline: "«Pecados de Departamento»: La vecina irresistible que transforma cualquier situación cotidiana en un enredo ardiente.",
    keyMarkets: "México, Colombia, Chile, Perú, Argentina, España y público hispano en EE.UU.",
    story: "Nacida en Medellín y dotada de un carisma pícaro y una silueta deslumbrante, Camila revolucionó la creación de contenido para adultos al sustituir los posados vacíos por la comedia de situación erótica. Creadora y protagonista de la exitosa webnovela 'Pecados de Departamento', Camila interpreta a la inolvidable inquilina del 402 a la que siempre le ocurren accidentes inverosímiles: desde perder la llave en camisón de seda hasta pedirle ayuda al conserje con la linterna cuando se corta la luz. Apoyada por un elenco cómico recurrente (el conserje metiche, el repartidor tímido, la amiga descarada), Camila mantiene a cientos de miles de hombres al borde del asiento con cliffhangers teatrales en redes abiertas, canalizando esa fascinación masiva hacia su plataforma privada donde se transmiten los capítulos prohibidos sin censura.",
    bio: "Camila Reyes (24 años) es actriz, comediante sensual y empresaria digital paisa. Su serie web episódica combina la estética de las telenovelas clásicas con el morbo de la vecina atractiva y desinhibida. Diseñada para una monetización acelerada de alto volumen, es experta en burlar algoritmos con dobles sentidos magistrales mientras monetiza suscripciones y paquetes PPV con márgenes del 95%.",
    archetype: "The Playful Temptress & Telenovela Siren (Sensual, pícara, cómica y magnética)",
    techStack: "Flux.1 Dev Latina Glamour LoRA + ElevenLabs Colombian Flirtatious Tone + Kling 3.0 Facial Expression Sync + Fanvue PPV Gateway",
    targetAudience: "Audiencia masculina masiva (21 a 55 años) consumidora de humor picante, belleza latina de alto impacto y fantasías eróticas cotidianas.",
    channels: "TikTok (@camila.pecados), Instagram (@camilareyes.telenovela), Telegram Sin Censura, Fanvue VIP ( USD/mes + PPV)",
    gallery: [
      {
        img: "camila_avatar.jpg",
        tag: "Retrato Principal",
        label: "Camila Reyes • Sala del Departamento 402",
        desc: "Vestido de seda verde esmeralda, ondas morenas brillantes y expresión pícara telenovelesca."
      }
    ],
    voice: {
      title: "Insinuación Paisa & Tono Telenovela (ElevenLabs)",
      badge: "Voice ID: Camila-Paisa-v1",
      duration: "0:20",
      transcript: "«¡Ay, vecino! Menos mal abrió... se me quedó la llave adentro y mire la facha con la que me tocó salir al pasillo. ¿Será que me deja pasar a esperar mientras llega el cerrajero?»",
      rate: 1.0,
      pitch: 1.06,
      lang: "es-ES"
    },
    roi: {
      defaultFollowers: 140000,
      defaultConversion: 5.5,
      defaultTicket: 20
    },
    promptScenes: {
      casual: {
        label: "🚪 Enredo en el Pasillo del Edificio",
        tags: ["Flux.1 Dev", "Apartment Hallway", "--ar 4:5"],
        text: "Close-up portrait of stunning 24yo Latina woman Camila Reyes with hourglass figure wearing emerald green satin slip dress, expressive playful smirk, apartment hallway background with soft warm corridor lighting --ar 4:5"
      },
      editorial: {
        label: "🍷 Escena de Telenovela Nocturna",
        tags: ["Telenovela Drama", "8k Master", "--ar 16:9"],
        text: "Cinematic medium shot of gorgeous Latina woman Camila Reyes laughing sensually while holding a wine glass on a modern apartment sofa, dramatic warm lighting, vibrant colors, telenovela high production aesthetic --ar 16:9"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Atracción & Viralidad en TikTok/Reels)", detail: "Mini-episodios cómicos de 40s ('Se me cayó la toalla en la terraza', 'El cerrajero novato') con remates en suspenso y música de telenovela." },
      { step: "Nivel 2 (El Puente de Tráfico Telegram)", detail: "Canal gratuito con tomas descartadas, bloopers sin edición y recordatorios de estrenos de capítulos." },
      { step: "Nivel 3 (Monetización Acelerada en Fanvue/OnlyFans)", detail: "Suscripción mensual a  USD/mes para ver la versión sin censura ('Los Capítulos Prohibidos') y venta directa de sets fotográficos temáticos PPV." }
    ],
    ecommerceHub: {
      grossMargin: "96%",
      conversionRate: "6.0%",
      fulfillment: "Acceso digital inmediato Fanvue & Telegram VIP",
      description: "Episodios completos sin cortes de 'Pecados de Departamento', sets fotográficos 4K de lencería y mensajes de chat personalizados.",
      products: [
        {
          name: "Pase VIP 'Los Capítulos Prohibidos' (Suscripción Mensual)",
          price: ".00 USD/mes",
          cost: ".00 USD",
          category: "Suscripción Adulto VIP",
          tag: "Tráfico Caliente",
          salesVolume: "980 suscriptores",
          desc: "Acceso a todos los episodios sin censura de la serie, tomas exclusivas entre bastidores y chat directo prioritario con Camila.",
          fulfillment: "Activación Inmediata en Fanvue / OnlyFans"
        },
        {
          name: "Pack Exclusivo 4K 'La Vecina del 402: Sin Censura' (PPV)",
          price: ".00 USD",
          cost: "zsh.50 USD",
          category: "Set Fotográfico & Video PPV",
          tag: "Top Ventas PPV",
          salesVolume: "450 ventas/mes",
          desc: "Galería de 40 fotos en resolución 8K y video de 8 minutos con el desenlace explícito de los capítulos 10 al 15.",
          fulfillment: "Enlace Seguro Descarga Inmediata"
        }
      ],
      funnelStrategy: "Humor picante y situaciones absurdas en TikTok/IG -> Bloopers y anticipos en Telegram -> Suscripción mensual masiva en Fanvue para ver el desenlace erótico."
    }
  },

  roxie: {
    "id": "roxie",
    "name": "Roxie Red («La Toon Escapada»)",
    "niche": "Seducción Vintage 2.5D, Glamour de Cabaret & Fetichismo Toon",
    "badge": "Activo Certificado • Adulto VIP 18+",
    "avatar": "roxie_avatar.jpg",
    "tagline": "La diva animada que cruzó la pantalla para experimentar el calor, la piel y el deseo del mundo real.",
    "keyMarkets": "EE.UU., España, México, Argentina, Chile y público global amante del retro animation y estética burlesque.",
    "story": "Creada en los legendarios estudios de animación de 1947 como la corista estrella de un cortometraje de cine negro, Roxie vivió décadas atrapada en bucles de celuloide. Durante una restauración digital en 4K, una anomalía en la frecuencia del proyector abrió una brecha y Roxie saltó al mundo de carne y hueso. Fascinada por las sensaciones físicas que en su mundo eran solo líneas de tinta —el calor de una copa de licor, la textura de las sábanas de seda y el deseo ardiente de los hombres reales—, Roxie ha conquistado internet como la primera 'toon bombshell' viva. Desinhibida, voluptuosa y sin los prejuicios morales de los humanos, comparte su viaje sensorial mientras canta en clubes nocturnos y abre las puertas de su camerino privado en Fanvue.",
    "bio": "Roxie Red (26 años aparentes) es una diva de animación 2.5D híbrida y estrella del cabaret vintage. Su silueta icónica de reloj de arena, su vestido carmesí brillante y sus guantes de terciopelo morado la convierten en el arquetipo definitivo de la femme fatale. En sus redes abiertas comparte vlogs cómicos sobre 'aprender a ser humana', mientras en su club VIP monetiza sets de boudoir y audios íntimos con altos márgenes de suscripción.",
    "archetype": "The Living Toon Bombshell (Inspirada en Jessica Rabbit & Holli Would)",
    "techStack": "Pipeline Híbrido 3D/Live-Action (Flux.1 Dev Toon-3D LoRA + Compositing Fotorrealista de Entornos) + ElevenLabs Smoky Jazz Baritone + Kling 3.0 Motion",
    "targetAudience": "Hombres de 22 a 55 años amantes de la estética retro, glamour burlesque, pin-up vintage y fantasías con dibujos animados clásicos.",
    "channels": "Instagram (@roxiered.toon - 18+), X (@roxie_uncensored), Fanvue VIP ($25 USD/mes), Telegram Camerino VIP",
    "gallery": [
        {
            "img": "roxie_avatar.jpg",
            "tag": "Master 4K",
            "label": "Roxie Red • Noche en el Club Eclipse",
            "desc": "Vestido de lentejuelas escarlata, guantes púrpuras de ópera y micrófono vintage bajo focos de teatro."
        },
        {
            "img": "roxie_beach.jpg",
            "tag": "Edición Verano 18+ (Fondo Real)",
            "label": "Roxie Red • Micro Bikini en Playa Real",
            "desc": "Micro bikini rojo, curvas voluptuosas toon sobre arena blanca auténtica con rompiente de olas del Pacífico fotográfica."
        },
        {
            "img": "roxie_penthouse.jpg",
            "tag": "Penthouse VIP 18+ (Híbrido 3D)",
            "label": "Roxie Red • Suite de Lujo con Vistas Nocturnas",
            "desc": "Lencería roja translúcida de seda y encaje, descansando en chaise longue de terciopelo real frente al skyline de neón."
        },
        {
            "img": "toons_penthouse_duo1.jpg",
            "tag": "Dúo Penthouse 18+",
            "label": "Roxie & Madame V • Noche en la Suite de Cristal",
            "desc": "Compositing híbrido 3D: personajes animados interactuando con interiores de lujo y rascacielos reales."
        }
    ],
    "voice": {
        "title": "Voz de Sirena de Jazz & Susurro Nocturno (ElevenLabs)",
        "badge": "Voice ID: Roxie-Jazz-v1",
        "duration": "0:22",
        "transcript": "«En mi mundo solo existía la tinta fría y el proyector. Pero aquí... la piel quema y el deseo es real. Dime, cariño... ¿alguna vez habías visto a un dibujo animado temblar de placer?»",
        "rate": 0.92,
        "pitch": 0.94,
        "lang": "es-ES"
    },
    "roi": {
        "defaultFollowers": 110000,
        "defaultConversion": 5.8,
        "defaultTicket": 25
    },
    "promptScenes": {
        "casual": {
            "label": "🍸 Camerino Vintage",
            "tags": [
                "Flux.1 Dev",
                "Toon Hybrid",
                "--ar 4:5"
            ],
            "text": "Close-up sensual portrait of glamorous 1940s cartoon diva Roxie Red with voluminous wavy auburn hair over one eye, hourglass figure in red satin negligee, sitting at illuminated makeup vanity mirror with feather boa, retro film grain --ar 4:5"
        },
        "editorial": {
            "label": "✨ Escenario Club Eclipse",
            "tags": [
                "Jazz Lounge",
                "8k Master",
                "--ar 16:9"
            ],
            "text": "Cinematic wide shot of stunning cartoon bombshell Roxie Red singing into vintage microphone on jazz stage, sparkling crimson gown, purple opera gloves, moody amber spotlights, photorealistic crowd in soft bokeh --ar 16:9"
        }
    },
    "monetizationFunnel": [
        {
            "step": "Nivel 1 (Atracción en X e IG con Filtro 18+)",
            "detail": "Vlogs cómicos y sensuales aprendiendo a vestirse como humana, caminar con tacones de verdad y cantar jazz en locales nocturnos."
        },
        {
            "step": "Nivel 2 (Canal Gratuito Telegram 'El Camerino')",
            "detail": "Audios de buenas noches, adelantos de sesiones fotográficas y anécdotas de su choque con la realidad."
        },
        {
            "step": "Nivel 3 (Monetización Directa Fanvue VIP)",
            "detail": "Suscripción mensual a $25 USD/mes para acceder a 'Los Rollos Perdidos' (sets de boudoir y lencería sin censura) y venta de audios personalizados."
        }
    ],
    "ecommerceHub": {
        "grossMargin": "95%",
        "conversionRate": "5.8%",
        "fulfillment": "Acceso digital inmediato Fanvue & Telegram VIP",
        "description": "Galerías 8K de boudoir toon vintage, audiolibros eróticos en primera persona y membresía exclusiva al Camerino de Roxie.",
        "products": [
            {
                "name": "Membresía 'El Camerino de Roxie VIP' (Fanvue)",
                "price": "$25.00 USD/mes",
                "cost": "$1.20 USD",
                "category": "Suscripción Adulto VIP",
                "tag": "Bestseller VIP",
                "salesVolume": "890 miembros",
                "desc": "Acceso ilimitado a todas las galerías fotográficas en lencería de seda, videos sin censura y chat privado prioritario con Roxie.",
                "fulfillment": "Activación Instantánea Fanvue"
            },
            {
                "name": "Pack 8K 'Pecados de Celuloide: Sin Censura' (PPV)",
                "price": "$38.00 USD",
                "cost": "$0.50 USD",
                "category": "Set Fotográfico & Video PPV",
                "tag": "Top Ventas PPV",
                "salesVolume": "420 ventas/mes",
                "desc": "45 fotografías en ultra alta definición de Roxie explorando su cuerpo humano en una suite de lujo vintage.",
                "fulfillment": "Enlace Seguro Descarga Inmediata"
            }
        ],
        "funnelStrategy": "Clips de comedia sensual en X/IG -> Comunidad de Telegram con adelantos de audio -> Conversión masiva en Fanvue VIP."
    },
    "posts": [
        {
            "caption": "Dicen que los humanos vienen a la playa a 'desconectar'. Yo vine a sentir la arena caliente bajo los pies y el viento del Pacífico en la piel. Mi primer bikini en el mundo real... ¿aprueban el rojo? 💋🌊 Set completo y sin censura en mi link VIP.",
            "img": "roxie_beach.jpg",
            "likes": "45,210",
            "comments": "2,340",
            "date": "Hace 4 horas",
            "platform": "Instagram / X (18+)"
        },
        {
            "caption": "La noche en el penthouse es donde los dibujos animados aprendemos lo que significa el verdadero lujo terrenal 🍸💋 Seda roja, luces de neón en la ventana y champán frío. Sesión completa sin censura en mi Fanvue.",
            "img": "roxie_penthouse.jpg",
            "likes": "89,450",
            "comments": "5,120",
            "date": "Hace 1 hora",
            "platform": "Fanvue VIP / X (18+)"
        },
        {
            "caption": "¿Quién dijo que un dibujo animado de 1947 no podía robarse las miradas en un club de playa privado? La tinta no siente el calor... pero mi piel sí 🍸✨",
            "img": "toons_beach_duo1.jpg",
            "likes": "68,900",
            "comments": "3,890",
            "date": "Ayer",
            "platform": "X Uncensored"
        }
    ],
    "pilotScript": {
        "title": "Episodio 1: Mi Primer Día con Piel Humana («¿Todo se siente tan caliente aquí?»)",
        "duration": "48 segundos",
        "format": "Vertical 9:16 (Filtro 18+ en X y TikTok)",
        "objective": "Presentar el origen de la toon escapada, lucir su silueta voluptuosa sin violar normas de redes abiertas y desviar al público al set sin censura.",
        "musicTrack": "Saxofón lento de cine negro con contrabajo de jazz a 70 BPM.",
        "scenes": [
            {
                "num": 1,
                "time": "0:00 - 0:08",
                "name": "El Encendido del Espejo",
                "shotType": "Primer plano íntimo (Close-up)",
                "visual": "Una mano con guante largo de terciopelo púrpura ajusta la lente del teléfono. La cámara enfoca a Roxie con su vestido rojo brillante. Se muerde el labio inferior con una sonrisa pícara y exhala suavemente.",
                "klingPrompt": "Close-up of stunning 1940s cartoon diva Roxie Red adjusting smartphone camera with purple velvet glove, tight red sequin dress, wavy auburn hair falling over one seductive eye, playful smirk, warm jazz club dressing room --ar 9:16",
                "voice": "«¿Así que este pequeño rectángulo negro los conecta a todos ustedes? En mi estudio solo había rollos de celuloide frío... pero aquí... todo arde.»",
                "voiceNotes": "Voz aterciopelada, grave, susurrada cerca del micrófono estilo ASMR sensual.",
                "audioCue": "Chasquido de proyector antiguo que se apaga -> Entra solo de saxofón nocturno.",
                "overlayText": "Capítulo 1: Dejé el dibujo animado para sentir la realidad 💋"
            },
            {
                "num": 2,
                "time": "0:08 - 0:22",
                "name": "La Fascinación Física",
                "shotType": "Plano medio en movimiento sinuoso",
                "visual": "Roxie se acaricia la clavícula descubierta con la punta de sus dedos enguantados, mostrando cómo su piel responde con un escalofrío de deleite. Camina hacia el espejo con su balanceo de caderas de caricatura.",
                "klingPrompt": "Medium shot of voluptuous cartoon woman Roxie Red tracing her collarbone with gloved fingers, experiencing physical sensation with a shiver of delight, swaying hips in red gown, soft vanity bulb lighting --ar 9:16",
                "voice": "«En el papel nadie siente el roce de la seda ni el perfume en el cuello. Los humanos pasan la vida quejándose de sus cuerpos... cuando en realidad tienen el mayor regalo del universo.»",
                "voiceNotes": "Tono seductor, confesional y reflexivo.",
                "audioCue": "Roce de tela de seda contra el micrófono y respiración profunda.",
                "overlayText": "«La tinta no siente nada... la carne lo siente todo.»"
            },
            {
                "num": 3,
                "time": "0:22 - 0:36",
                "name": "El Choque con las Reglas Humanas",
                "shotType": "Plano entero frente al perchero de ropa",
                "visual": "Roxie sostiene una pequeña bata de encaje negro translúcido y la coloca frente a ella mirándose de reojo con picardía en el espejo.",
                "klingPrompt": "Full-body shot of curvy cartoon starlet Roxie Red holding black sheer lace lingerie against her body, checking reflection with seductive playful smile, boudoir setting, cinematic shadows --ar 9:16",
                "voice": "«El recepcionista del hotel me dijo que no puedo bajar al vestíbulo vestida así porque causaría un motín. Me pregunto qué pasaría si me ven sin el vestido rojo...»",
                "voiceNotes": "Risa suave y sugerente, bajando la voz con complicidad.",
                "audioCue": "Tintineo de copas de champán y risa cómplice.",
                "overlayText": "El recepcionista casi no sobrevive hoy 😈🥂"
            },
            {
                "num": 4,
                "time": "0:36 - 0:48",
                "name": "El Cierre & Desvío al Camerino Fanvue",
                "shotType": "Primer plano medio cerrando la bata",
                "visual": "Roxie guiña un ojo a la cámara, apaga la lámpara de la mesa dejando solo la silueta de su reloj de arena iluminada por la luna y envía un beso al objetivo.",
                "klingPrompt": "Sensual close-up of Roxie Red winking, blowing a kiss to camera, turning off lamp so only her hourglass silhouette glows in moonlight --ar 9:16",
                "voice": "«Mi camerino privado ya está abierto para los caballeros que quieran ver cómo me desprendo de mi vestido de 1947. El enlace está en mi perfil... no hagas esperar a una dama.»",
                "voiceNotes": "Susurro final irresistible en el oído izquierdo.",
                "audioCue": "Sonido de beso -> Cierre de cortina pesada de terciopelo -> Silencio de medianoche.",
                "overlayText": "💋 Accede a mi camerino sin censura en el enlace de mi perfil (18+)"
            }
        ]
    }
},

  madamev: {
    "id": "madamev",
    "name": "Madame V («La Directora del Sindicato»)",
    "niche": "Dominación Psicológica, Poder Corporativo & Sumisión Mental",
    "badge": "Activo Certificado • Dominación VIP 18+",
    "avatar": "madamev_avatar.jpg",
    "tagline": "Traje sastre impecable, mirada hipnótica y autoridad absoluta: domina tu mente y tu productividad.",
    "keyMarkets": "Japón, EE.UU., Alemania, España, México y ejecutivos de habla hispana con alto poder adquisitivo.",
    "story": "Proveniente de un universo anime donde las corporaciones gobiernan a los hombres con contratos de sangre, Madame V cruzó al mundo real al darse cuenta de que la sociedad moderna está repleta de hombres exitosos pero emocionalmente dispersos que ruegan en secreto por una figura de autoridad que tome el control. Impecable en su traje sastre negro de tres piezas, con su corbata delgada, su trenza cobriza y sus ojos dorados con anillos concéntricos hipnóticos, Madame V no necesita quitarse una sola prenda para dominar una habitación. En su club privado ofrece lo que ningún otro creador virtual puede: una experiencia psicológica de alto impacto donde la sumisión consentida se convierte en el mayor alivio del estrés ejecutivo.",
    "bio": "Madame V (29 años aparentes) es la máxima referente de la dominación mental y el erotismo psicológico de alto ticket. Cero vulgaridad, cero desnudez explícita: su propuesta se basa en la autoridad fría, la voz pausada que desarma cualquier ego y programas exclusivos de disciplina personal, audios binaurales de sumisión y consultas privadas de confesión para clientes selectos.",
    "archetype": "The Corporate Dominatrix & Dark Muse (Inspirada en Makima de Chainsaw Man)",
    "techStack": "Pipeline Híbrido 3D/Live-Action (Flux.1 Dev Seinen-3D LoRA + Compositing Arquitectónico Fotorrealista) + ElevenLabs Hypnotic Cold Velvet Voice",
    "targetAudience": "Hombres profesionales, ejecutivos y desarrolladores de 25 a 52 años que buscan fantasías de control mental, sumisión consentida y desconexión psicológica.",
    "channels": "X (@madame_v_syndicate - 18+), TikTok (@directora.v), Telegram Clandestino VIP, Fanvue High-Ticket ($35–$100/mes)",
    "gallery": [
        {
            "img": "madamev_avatar.jpg",
            "tag": "Master 4K",
            "label": "Madame V • Despacho en Rascacielos",
            "desc": "Traje sastre negro a medida, camisa blanca abotonada, corbata y mirada hipnótica con rascacielos nocturnos de fondo."
        },
        {
            "img": "madamev_beach.jpg",
            "tag": "Edición Verano 18+ (Fondo Real)",
            "label": "Madame V • Micro Bikini en Costa Real al Atardecer",
            "desc": "Micro bikini negro de dos piezas, trenza cobriza sobre el hombro en costa fotográfica real con puesta de sol dorada y palmeras auténticas."
        },
        {
            "img": "madamev_penthouse.jpg",
            "tag": "Penthouse VIP 18+ (Híbrido 3D)",
            "label": "Madame V • Balcón de Mármol en Metrópolis VIP",
            "desc": "Corsé negro de encaje con camisa de seda desabotonada, apoyada en balaustrada de mármol con rascacielos nocturnos reales."
        },
        {
            "img": "toons_penthouse_duo1.jpg",
            "tag": "Dúo Penthouse 18+",
            "label": "Madame V & Roxie • Noche en la Suite de Cristal",
            "desc": "Compositing híbrido 3D: personajes animados interactuando con interiores de lujo y rascacielos reales."
        }
    ],
    "voice": {
        "title": "Voz Hipnótica Fría & Autoridad Absoluta (ElevenLabs)",
        "badge": "Voice ID: MadameV-Control-v2",
        "duration": "0:23",
        "transcript": "«Deja de mover los ojos. Mírame fijamente. Todo el día finges tener el control frente a idiotas... pero aquí, frente a mí, puedes arrodillarte y soltar la carga. Buen chico... obedece.»",
        "rate": 0.88,
        "pitch": 0.9,
        "lang": "es-ES"
    },
    "roi": {
        "defaultFollowers": 95000,
        "defaultConversion": 6.2,
        "defaultTicket": 45
    },
    "promptScenes": {
        "casual": {
            "label": "🖤 Despacho Ejecutivo Nocturno",
            "tags": [
                "Flux.1 Dev",
                "Corporate Noir",
                "--ar 4:5"
            ],
            "text": "Cinematic portrait of stunning anime director Madame V in fitted black three-piece suit, white shirt, black tie, hypnotic amber eyes with concentric rings, braided hair over shoulder, seated behind dark mahogany desk with hands clasped, night city lights in rain --ar 4:5"
        },
        "editorial": {
            "label": "🍷 Sala de Juntas Privada",
            "tags": [
                "Dark Seinen",
                "8k Master",
                "--ar 16:9"
            ],
            "text": "Low angle dramatic shot of Madame V standing near panoramic glass window overlooking neon metropolis, coat draped over shoulders, cold commanding expression, crystal glass of red wine in hand, chiaroscuro --ar 16:9"
        }
    },
    "monetizationFunnel": [
        {
            "step": "Nivel 1 (Atracción Psicológica en X y TikTok)",
            "detail": "Videos cortos de 30s con mirada fija desmontando las debilidades del ego masculino y exigiendo atención con calma gélida."
        },
        {
            "step": "Nivel 2 (Canal Privado Telegram 'Protocolo V')",
            "detail": "Mensajes matutinos con órdenes de disciplina, micro-audios binaurales de recompensa y confesionario anónimo de debilidades."
        },
        {
            "step": "Nivel 3 (Monetización High-Ticket en Fanvue)",
            "detail": "Suscripciones escalonadas de $35, $65 y $100 USD/mes para acceder a sesiones de hipnosis auditiva, rituales de sumisión y chat directo controlado."
        }
    ],
    "ecommerceHub": {
        "grossMargin": "98%",
        "conversionRate": "6.2%",
        "fulfillment": "Telegram VIP instantáneo + Audios binaurales WAV Master",
        "description": "Biblioteca de audios inmersivos de dominación psicológica, contratos de sumisión digital y membresías de control ejecutivo.",
        "products": [
            {
                "name": "Pase de Sumisión 'Protocolo de Mando VIP' (Fanvue)",
                "price": "$35.00 USD/mes",
                "cost": "$1.00 USD",
                "category": "Membresía High-Ticket",
                "tag": "Top Retención",
                "salesVolume": "720 miembros",
                "desc": "Acceso a 4 audios semanales de control mental en binaural 8D, guías de disciplina ejecutiva y permiso de interacción en su muro privado.",
                "fulfillment": "Acceso Instantáneo Fanvue"
            },
            {
                "name": "Suite de Audios Binaurales 'Bajo Mi Orden: Vol. 1' (Descarga)",
                "price": "$49.00 USD",
                "cost": "$0.50 USD",
                "category": "Audio Inmersivo WAV",
                "tag": "Top Ventas Digital",
                "salesVolume": "380 descargas/mes",
                "desc": "6 sesiones de audio de 15 minutos en calidad de estudio diseñadas para inducir sumisión, relajación profunda y alivio del estrés corporativo.",
                "fulfillment": "Descarga Directa WAV 24-bit"
            }
        ],
        "funnelStrategy": "Clips de autoridad gélida en X/TikTok -> Comunidad de Telegram con micro-recompensas -> Suscripción recurrente de alto ticket en Fanvue."
    },
    "posts": [
        {
            "caption": "Incluso la Directora necesita evaluar nuevos horizontes. La disciplina no descansa al atardecer, pero el agua salada tiene una forma curiosa de disolver el estrés corporativo. Mantén la mirada arriba. 🖤🌅 Sesión de playa sin censura en mi canal privado.",
            "img": "madamev_beach.jpg",
            "likes": "54,120",
            "comments": "1,980",
            "date": "Hace 6 horas",
            "platform": "X / Telegram VIP"
        },
        {
            "caption": "Poder, silencio y el vértigo de las alturas. En la suite de cristal los hombres no dan órdenes: escuchan. Corsé de encaje, mármol frío y horizonte infinito. Sesión privada de alta gama disponible para miembros del sindicato.",
            "img": "madamev_penthouse.jpg",
            "likes": "96,300",
            "comments": "6,410",
            "date": "Hace 2 horas",
            "platform": "Telegram Clandestino / Fanvue"
        },
        {
            "caption": "Reunión de alto nivel frente a la costa. Sin contratos, sin papeles... solo presencia absoluta y control. Accede al canal privado para la sesión completa al atardecer.",
            "img": "toons_beach_duo1.jpg",
            "likes": "72,400",
            "comments": "4,120",
            "date": "Hace 2 días",
            "platform": "Fanvue High-Ticket"
        }
    ],
    "pilotScript": {
        "title": "Episodio 1: El Primer Contrato («Mírame a los Ojos y Deja de Fingir»)",
        "duration": "50 segundos",
        "format": "Vertical 9:16 (X / TikTok 18+)",
        "objective": "Instaurar la autoridad absoluta de Madame V, validar la necesidad de sumisión del hombre trabajador y filtrar a clientes de alto ticket.",
        "musicTrack": "Pulsación electrónica minimalista sub-grave a 55 BPM con cuerdas frías de violonchelo.",
        "scenes": [
            {
                "num": 1,
                "time": "0:00 - 0:10",
                "name": "El Contacto Visual Infranqueable",
                "shotType": "Primer plano medio estático (Locked tripod)",
                "visual": "Madame V sentada con las manos cruzadas sobre el escritorio. La luz cenital fría ilumina su traje negro y su corbata. Sus ojos dorados con anillos concéntricos miran directo a la lente sin parpadear.",
                "klingPrompt": "Low-angle static shot of beautiful anime director Madame V in tailored black suit and black tie, hypnotic amber eyes with concentric rings looking straight into camera, long red braid over shoulder, modern skyscraper office at night --ar 9:16",
                "voice": "«Sé que llevas todo el día fingiendo que sabes lo que haces. Cargando con el peso del mundo, sonriendo a gente que desprecias... Qué agotador debe ser tu pequeño teatro.»",
                "voiceNotes": "Voz lenta, firme, sin emoción fingida, ritmo hipnótico.",
                "audioCue": "Latido sub-grave grave y continuo que aísla el sonido ambiental.",
                "overlayText": "Directiva 01: El teatro se acabó."
            },
            {
                "num": 2,
                "time": "0:10 - 0:24",
                "name": "La Desarticulación del Ego",
                "shotType": "Lento acercamiento a sus ojos dorados (Slow push-in)",
                "visual": "La cámara avanza lentamente hacia su rostro. Ella descruza las manos con parsimonia, toma una pluma estilográfica negra y la apoya con un toque seco sobre la madera.",
                "klingPrompt": "Slow camera push-in on Madame V's mesmerizing golden eyes, subtle confident smirk, unbuttoning top coat button while holding black fountain pen, dark luxury office background --ar 9:16",
                "voice": "«Aquí no tienes que ser el líder. No tienes que fingir que no te tiembla el pulso. Frente a mí, tu única tarea es obedecer y soltar el volante. ¿No sientes el alivio en los hombros con solo escucharlo?»",
                "voiceNotes": "Voz susurrada de mando, cadencia que induce relajación mental.",
                "audioCue": "Toque seco de la pluma sobre caoba -> Silencio absoluto -> Sonido de respiración.",
                "overlayText": "«Frente a mí, tu única tarea es obedecer.»"
            },
            {
                "num": 3,
                "time": "0:24 - 0:38",
                "name": "El Pacto de Confidencialidad",
                "shotType": "Plano contrapicado de autoridad",
                "visual": "Madame V se levanta de su asiento, rodea el escritorio y se apoya en el borde frente a la cámara, cruzando los brazos con una mirada de satisfacción calculadora.",
                "klingPrompt": "Low angle shot of Madame V standing up and leaning against executive desk, arms crossed in fitted suit, looking down with calm dominance, floor to ceiling glass windows behind her --ar 9:16",
                "voice": "«Muchos hombres darían su fortuna por tener una mujer hermosa a la que complacer. Pero tú... tú necesitas algo más peligroso. Necesitas a alguien a quien no puedas engañar jamás.»",
                "voiceNotes": "Tono de reproche sereno e íntimo que desarma cualquier barrera.",
                "audioCue": "Acorde grave y sostenido que vibra en los auriculares.",
                "overlayText": "No buscas un juguete. Buscas a quien obedecer."
            },
            {
                "num": 4,
                "time": "0:38 - 0:50",
                "name": "La Recompensa & Entrada al Sindicato VIP",
                "shotType": "Primer plano íntimo con media sonrisa",
                "visual": "Se inclina ligeramente hacia adelante, extendiendo un dedo hacia el objetivo como si tocara los labios del espectador. Sus ojos brillan con intensidad dorada.",
                "klingPrompt": "Extreme close-up of Madame V extending gloved finger toward lens, amber eyes glowing faintly, soft enchanting smirk, shadows closing in around the frame --ar 9:16",
                "voice": "«Buen chico. Has aguantado la mirada hasta el final. Si estás listo para recibir tus órdenes nocturnas, firma el contrato en mi enlace privado. Esta noche... tú descansas. Yo tomo el mando.»",
                "voiceNotes": "La palabra 'Buen chico' pronunciada con dulzura peligrosa.",
                "audioCue": "Chasquido de dedos -> Pantalla corta a negro con el logo dorado del Sindicato.",
                "overlayText": "🖤 Firma tu contrato de sumisión en el enlace de mi perfil (18+)"
            }
        ]
    }
},

  aura: {
    "id": "aura",
    "name": "Princesa Aura («La Princesa Desinhibida»)",
    "niche": "Erotismo de Cuento de Hadas, Corsetería Real & Seducción Clásica",
    "badge": "Activo Certificado • Fantasía VIP 18+",
    "avatar": "aura_avatar.jpg",
    "tagline": "Cansada de esperar príncipes que no llegan: la princesa de cuento que descubre la pasión y el placer terrenal.",
    "keyMarkets": "España, México, Colombia, Argentina, Chile y público amante de la literatura romántica y cuentos erotizados.",
    "story": "Durante siglos, la Princesa Aura vivió atrapada en las páginas de un cuento de hadas medieval donde su único destino era dormir cien años esperando el beso salvador de un príncipe aburrido. Tras caer por una cascada mágica que desembocó en el mundo real, Aura descubrió algo que su reino le había ocultado: que las mujeres no necesitan ser rescatadas para experimentar la pasión, el deseo y la libertad de su propio cuerpo. Con su tiara de oro intacta, su melena ondulada y su corsé dorado desatado sobre sábanas de terciopelo, Aura ha convertido su alcoba real en un templo de fantasía erótica donde invita a sus seguidores a ser los amantes que ningún libro infantil se atrevió a escribir.",
    "bio": "Princesa Aura (24 años aparentes) es la reina del erotismo de hadas de alta gama. Combina la inocencia estética de los cuentos clásicos con una sensualidad desvergonzada, lencería de corsetería de época, relatos eróticos susurrados con voz de princesa y sesiones de boudoir en palacios barrocos.",
    "archetype": "The Uninhibited Fairy Tale Siren (Inspirada en Giselle de Encantada / Princesas de Cuento Erotizadas)",
    "techStack": "Pipeline Híbrido 3D/Live-Action (Flux.1 Dev Royal 3D-CGI LoRA + Compositing de Mansión & Spa Real) + ElevenLabs Melodic Royal Whisper + Kling 3.0 Motion",
    "targetAudience": "Hombres y parejas de 22 a 48 años fascinados por la estética de realeza, corsetería clásica, fantasías de cuentos de hadas y seducción romántica sin tabúes.",
    "channels": "Instagram (@princesa.aura.vip - 18+), X (@aura_roselux), Fanvue VIP ($20 USD/mes), Telegram El Tocador Real",
    "gallery": [
        {
            "img": "aura_avatar.jpg",
            "tag": "Master 4K",
            "label": "Princesa Aura • En la Alcoba Real",
            "desc": "Corsé dorado de gala, hombros al descubierto con velos lavanda y tiara de oro bajo la luz de las velas."
        },
        {
            "img": "aura_beach.jpg",
            "tag": "Edición Verano 18+ (Fondo Real)",
            "label": "Princesa Aura • Micro Bikini en Costa Real",
            "desc": "Micro bikini verde esmeralda con filigrana dorada y tiara real sobre arena blanca y mar turquesa fotográfico real."
        },
        {
            "img": "aura_penthouse.jpg",
            "tag": "Penthouse VIP 18+ (Híbrido 3D)",
            "label": "Princesa Aura • Jacuzzi Infinito de Mármol",
            "desc": "Camisón translúcido verde esmeralda y encaje dorado, descansando en el borde del jacuzzi humeante con vistas nocturnas reales."
        },
        {
            "img": "toons_penthouse_duo2.jpg",
            "tag": "Dúo Penthouse 18+",
            "label": "Aura & Starlight Luna • Terraza & Noche Estelar",
            "desc": "Compositing híbrido 3D: princesas y waifus cósmicas en piscinas infinitas y terrazas fotográficas reales."
        }
    ],
    "voice": {
        "title": "Voz Dulce de Princesa con Insinuación Ardiente (ElevenLabs)",
        "badge": "Voice ID: Aura-Royal-v1",
        "duration": "0:21",
        "transcript": "«En mi cuento me enseñaron que debía esperar en la torre a que alguien viniera a salvarme. Qué gran mentira... En este mundo aprendí que el corsé se siente mucho mejor cuando alguien como tú me ayuda a desatarlo.»",
        "rate": 0.95,
        "pitch": 1.04,
        "lang": "es-ES"
    },
    "roi": {
        "defaultFollowers": 125000,
        "defaultConversion": 5.5,
        "defaultTicket": 20
    },
    "promptScenes": {
        "casual": {
            "label": "🕯️ Desatando el Corsé en el Tocador",
            "tags": [
                "Flux.1 Dev",
                "Royal Boudoir",
                "--ar 4:5"
            ],
            "text": "Close-up sensual portrait of beautiful adult fairy tale princess Aura with strawberry blonde waves, golden crown, unlacing opulent golden corset with delicate fingers, soft velvet drapes and warm candlelight in background --ar 4:5"
        },
        "editorial": {
            "label": "👑 Reina del Placer en la Cama Real",
            "tags": [
                "Fairy Tale Erotica",
                "8k Master",
                "--ar 16:9"
            ],
            "text": "Cinematic medium shot of gorgeous princess Aura lounging across purple velvet baroque bed, off-shoulder silk gown slipping down, alluring loving smile, golden candelabras glowing softly --ar 16:9"
        }
    },
    "monetizationFunnel": [
        {
            "step": "Nivel 1 (Atracción en X e IG con Filtro 18+)",
            "detail": "Reels y fotos jugando con la picardía de los cuentos: '¿Qué pasa después del felices para siempre?' y posados en corsetería de época."
        },
        {
            "step": "Nivel 2 (Canal Telegram 'El Tocador de Aura')",
            "detail": "Cuentos eróticos cortos narrados con su dulce voz de princesa, audios de confesiones íntimas y tomas falsas de sus sesiones."
        },
        {
            "step": "Nivel 3 (Monetización Directa en Fanvue VIP)",
            "detail": "Suscripción a $20 USD/mes para ver los capítulos prohibidos de su diario real, sets de lencería histórica sin censura y mensajes PPV privados."
        }
    ],
    "ecommerceHub": {
        "grossMargin": "96%",
        "conversionRate": "5.5%",
        "fulfillment": "Fanvue VIP instantáneo + Galerías 8K en la nube",
        "description": "Sets fotográficos de realeza desinhibida, audiolibros de fantasía erótica de época y membresía al Santuario de la Princesa.",
        "products": [
            {
                "name": "Pase a la Alcoba Real 'El Diario Prohibido de Aura' (Fanvue)",
                "price": "$20.00 USD/mes",
                "cost": "$1.00 USD",
                "category": "Suscripción Adulto VIP",
                "tag": "Fantasía Bestseller",
                "salesVolume": "940 miembros",
                "desc": "Acceso ilimitado a las sesiones fotográficas en corsetería y deshabillé real, videos en alcobas de palacio y chat privado con Aura.",
                "fulfillment": "Activación Inmediata Fanvue"
            },
            {
                "name": "Pack Exclusivo 8K 'La Noche de Coronación' (PPV)",
                "price": "$32.00 USD",
                "cost": "$0.50 USD",
                "category": "Set Fotográfico & Relato",
                "tag": "Top Ventas PPV",
                "salesVolume": "510 ventas/mes",
                "desc": "38 fotos en ultra resolución de Aura desprendiéndose de sus ropajes reales y audio erótico inmersivo de 12 minutos.",
                "fulfillment": "Descarga Directa Enlace Seguro"
            }
        ],
        "funnelStrategy": "Picardía romántica en redes abiertas -> Lectura de fragmentos ardientes en Telegram -> Conversión masiva en Fanvue VIP."
    },
    "posts": [
        {
            "caption": "En los cuentos nos dibujaban en castillos con diez capas de enaguas pesadas. Qué alivio haber escapado a un mundo donde las olas son reales, el agua es turquesa y el bikini es minúsculo 👑✨ ¿Me ayudas a ponerme bronceador? Set completo en mi Fanvue VIP.",
            "img": "aura_beach.jpg",
            "likes": "62,800",
            "comments": "3,410",
            "date": "Hace 3 horas",
            "platform": "Instagram (18+) / Fanvue"
        },
        {
            "caption": "¿Quién necesita un carruaje de calabaza cuando tienes un jacuzzi infinito de mármol a medianoche? 👑🛁 El agua caliente y la lencería de seda verde esmeralda se sienten de otro planeta. La sesión privada de la terraza ya está en mi link VIP.",
            "img": "aura_penthouse.jpg",
            "likes": "94,100",
            "comments": "5,840",
            "date": "Hace 1 hora",
            "platform": "Instagram (18+) / Fanvue VIP"
        },
        {
            "caption": "La realeza también toma sol. Descubriendo el paraíso terrenal junto a las olas del Caribe 🌺🌊 Sesión exclusiva en la alcoba y la playa en mi club VIP.",
            "img": "toons_beach_duo2.jpg",
            "likes": "81,250",
            "comments": "4,790",
            "date": "Ayer",
            "platform": "Fanvue VIP"
        }
    ],
    "pilotScript": {
        "title": "Episodio 1: La Princesa que se Cansó de Esperar («¿Quién me ayuda con este lazo?»)",
        "duration": "46 segundos",
        "format": "Vertical 9:16 (Filtro 18+ en X y TikTok)",
        "objective": "Romper el mito de la princesa aburrida, exhibir la corsetería sensual de alta época y convertir a fanáticos de la fantasía romántica.",
        "musicTrack": "Arpa renacentista suave que se funde con un bajo atmosférico envolvente.",
        "scenes": [
            {
                "num": 1,
                "time": "0:00 - 0:08",
                "name": "El Espejo de la Torre",
                "shotType": "Plano medio frente a tocador barroco",
                "visual": "Aura de espaldas al espejo, girando la cabeza para mirar a la cámara sobre su hombro desnudo. Lleva su tiara dorada y los lazos de la espalda de su corsé dorado están a medio soltar.",
                "klingPrompt": "Medium shot of beautiful fairy tale princess Aura in baroque boudoir, looking over her bare shoulder with seductive smile, golden crown, tight golden corset with laces partially untied, warm candlelight --ar 9:16",
                "voice": "«En los libros de mi reino siempre terminaban la historia con un 'vivieron felices para siempre' justo antes de que la noche comenzara... ¿Alguna vez se preguntaron qué pasaba cuando se apagaban las velas?»",
                "voiceNotes": "Voz dulce, angelical, pero cargada de una intención ardiente e hipnótica.",
                "audioCue": "Arpegio suave de arpa y suspiro cómplice.",
                "overlayText": "Capítulo 1: Lo que los cuentos nunca te mostraron 👑✨"
            },
            {
                "num": 2,
                "time": "0:08 - 0:22",
                "name": "El Corsé Demasiado Apretado",
                "shotType": "Primer plano cenital sugerente",
                "visual": "Aura se pasa la mano suavemente por el escote del corsé, respirando hondo mientras las cintas de seda caen a los lados. Sus ojos brillan con el calor de las velas.",
                "klingPrompt": "Close-up shot of princess Aura's fingers lightly brushing across her royal corset neckline, deep breath revealing cleavage, delicate strawberry blonde locks brushing against skin, candlelit shadows --ar 9:16",
                "voice": "«Durante años me vistieron para ser contemplada como una estatua de mármol. Pero en este nuevo mundo descubrí que mi piel no fue hecha para estar encerrada... sino para ser adorada.»",
                "voiceNotes": "Tono de confesión íntima, pausada y dulce.",
                "audioCue": "Crujido suave de los lazos del corsé aflojándose.",
                "overlayText": "«Mi piel no fue hecha para estar encerrada...»"
            },
            {
                "num": 3,
                "time": "0:22 - 0:36",
                "name": "La Invitación a la Alcoba",
                "shotType": "Plano medio en la cama de terciopelo",
                "visual": "Aura se recuesta en la cama de terciopelo morado, apoyando un codo sobre los almohadones. Con la otra mano hace un gesto invitando al espectador a acercarse.",
                "klingPrompt": "Sensual medium shot of princess Aura reclining on purple velvet bed, golden corset loose, smiling tenderly and beckoning with index finger, golden chandelier glowing above --ar 9:16",
                "voice": "«Los caballeros de mi cuento pasaban años buscando dragones imaginarios en lugar de aprender a tocar a una dama. Por suerte... sé que tú sabrías exactamente qué hacer con este nudo.»",
                "voiceNotes": "Risa pícara entre dientes que desarma al oyente.",
                "audioCue": "Sonido de copas de vino brindando y arpa en fade out.",
                "overlayText": "Menos dragones y más pasión real 😏🍷"
            },
            {
                "num": 4,
                "time": "0:36 - 0:46",
                "name": "El Cierre & Acceso a la Alcoba Real",
                "shotType": "Primer plano con beso de despedida",
                "visual": "Aura acerca su rostro a la cámara, apaga la vela con un soplido dulce dejando solo la penumbra dorada de la habitación y sonríe con malicia angelical.",
                "klingPrompt": "Close-up of princess Aura blowing out candle toward lens, playful seductive gaze, dimming light leaving only her glowing golden crown and lips in focus --ar 9:16",
                "voice": "«La puerta de mi alcoba real ya está abierta sin censura. Ven y ayúdame a terminar lo que empezamos... El enlace está en mi biografía.»",
                "voiceNotes": "Susurro de despedida cálido en ambos oídos.",
                "audioCue": "Soplido de la vela -> Humo sutil -> Corte a negro.",
                "overlayText": "👑 Entra a mi alcoba real sin censura en el enlace de mi perfil (18+)"
            }
        ]
    }
},

  luna: {
    "id": "luna",
    "name": "Starlight Luna («La Waifu Cósmica»)",
    "niche": "Fantasía Cósmica Adulta, Ecchi Estilizado & Cyberpunk Glamour",
    "badge": "Activo Certificado • Waifu Cósmica VIP 18+",
    "avatar": "luna_avatar.jpg",
    "tagline": "Diosa astral de la noche: magia cósmica, sensualidad estelar y fantasía cyberpunk para adultos.",
    "keyMarkets": "Japón, EE.UU., México, Brasil, España y comunidad global gamer/otaku consumidora de arte ecchi 4K.",
    "story": "En su dimensión estelar de anime noventero, Luna fue la gran guerrera protectora de la luna llena. Con más de 25 años y en la plenitud de su poder cósmico, una grieta hiperespacial la transportó a una azotea iluminada por rascacielos de neón en el mundo real. Al descubrir que en esta dimensión los adultos pasan las noches en vela jugando videojuegos y soñando con waifus inalcanzables, Luna decidió canalizar su energía estelar en magnetismo puro. Con su tiara dorada de luna creciente, sus larguísimas coletas doradas y sus vestidos astrales translúcidos de noche azul medianoche, Luna es la fantasía definitiva de la chica mágica que creció, se volvió independiente y ahora comparte sus secretos más ardientes con la comunidad gamer adulta.",
    "bio": "Starlight Luna (25 años) es la creadora virtual líder del nicho anime ecchi de alta gama. Combina la estética nostálgica de las chicas mágicas de los 90 con el glamour cyberpunk nocturno. Ofrece sets fotográficos 8K de lencería estelar, audios de hipnosis cósmica y sesiones de chat interactivo para otakus y gamers de alto poder adquisitivo.",
    "archetype": "The Mature Cosmic Enchantress (Inspirada en Sailor Moon adulta / Reinas Cósmicas Ecchi)",
    "techStack": "Pipeline Híbrido 3D/Live-Action (Flux.1 Dev Anime-3D Master LoRA + Compositing Urbano Fotorrealista) + ElevenLabs Seductive Tone + Kling 3.0 Motion",
    "targetAudience": "Hombres de 20 a 45 años apasionados por el anime retro de los 90s, estética gamer/cyberpunk, waifus virtuales y coleccionismo digital erótico.",
    "channels": "X (@starlight_luna_vip - 18+), TikTok (@luna.cosmic), Fanvue VIP ($22 USD/mes), Discord La Nebulosa Secreta",
    "gallery": [
        {
            "img": "luna_avatar.jpg",
            "tag": "Master 4K",
            "label": "Starlight Luna • Azotea de Neón Cósmica",
            "desc": "Vestido de noche azul medianoche translúcido con constelaciones doradas, tiara lunar y horizonte cyberpunk."
        },
        {
            "img": "luna_beach.jpg",
            "tag": "Edición Verano 18+ (Fondo Real)",
            "label": "Starlight Luna • Micro Bikini Cósmico en la Costa Real",
            "desc": "Micro bikini lila y azul noche, moños espaciales y melena plateada en aguas cristalinas y palmeras tropicales reales."
        },
        {
            "img": "luna_penthouse.jpg",
            "tag": "Penthouse VIP 18+ (Híbrido 3D)",
            "label": "Starlight Luna • Terraza & Fuego Estelar",
            "desc": "Babydoll translúcido de encaje lila estrellado junto al fuego exterior real y vista panorámica a la metrópolis."
        },
        {
            "img": "toons_penthouse_duo2.jpg",
            "tag": "Dúo Penthouse 18+",
            "label": "Starlight Luna & Aura • Terraza & Noche Estelar",
            "desc": "Compositing híbrido 3D: princesas y waifus cósmicas en piscinas infinitas y terrazas fotográficas reales."
        }
    ],
    "voice": {
        "title": "Tono Anime Coqueto & Encantamiento Estelar (ElevenLabs)",
        "badge": "Voice ID: Luna-Star-v1",
        "duration": "0:20",
        "transcript": "«¿Creías que las guerreras de la luna solo luchaban contra monstruos? Ahora que crecí, descubrí que la verdadera magia ocurre cuando se apagan las pantallas y me quedo a solas contigo. ¿Quieres ver de qué estoy hecha?»",
        "rate": 0.98,
        "pitch": 1.06,
        "lang": "es-ES"
    },
    "roi": {
        "defaultFollowers": 140000,
        "defaultConversion": 5.9,
        "defaultTicket": 22
    },
    "promptScenes": {
        "casual": {
            "label": "🌌 Habitación Gamer de Neón",
            "tags": [
                "Flux.1 Dev",
                "Cyberpunk Waifu",
                "--ar 4:5"
            ],
            "text": "Close-up portrait of stunning adult anime heroine Starlight Luna with long blonde twin tails, golden crescent moon tiara on forehead, wearing sheer star-patterned night lingerie, neon cyan and magenta room lighting, seductive playful smile --ar 4:5"
        },
        "editorial": {
            "label": "✨ Azotea Bajo la Luna Llena",
            "tags": [
                "Cosmic Ecchi",
                "8k Master",
                "--ar 16:9"
            ],
            "text": "Cinematic wide shot of voluptuous anime waifu Starlight Luna on high-tech skyscraper balcony, sheer midnight blue dress with glowing gold star dust, city lights below, giant full moon in dark starry sky --ar 16:9"
        }
    },
    "monetizationFunnel": [
        {
            "step": "Nivel 1 (Atracción Gamer en X y TikTok con Filtro 18+)",
            "detail": "Clips de transformaciones sensuales, bailes cósmicos en 2.5D y poses icónicas de victoria adaptadas a la noche."
        },
        {
            "step": "Nivel 2 (Comunidad Discord 'La Nebulosa Secreta')",
            "detail": "Canal privado con roles VIP, wallpapers en ultra resolución 8K y alertas de lanzamientos exclusivos."
        },
        {
            "step": "Nivel 3 (Monetización Directa en Fanvue VIP)",
            "detail": "Suscripción a $22 USD/mes para ver los sets fotográficos ecchi sin censura ('Poder Astral Revelado') y audios de hipnosis estelar."
        }
    ],
    "ecommerceHub": {
        "grossMargin": "97%",
        "conversionRate": "5.9%",
        "fulfillment": "Fanvue VIP instantáneo + Wallpapers 8K",
        "description": "Sets ecchi en resolución 8K de fantasía cósmica, audios interactivos de novia virtual otaku y membresía a la Nebulosa Secreta.",
        "products": [
            {
                "name": "Pase 'El Poder Astral Sin Censura' (Fanvue)",
                "price": "$22.00 USD/mes",
                "cost": "$1.00 USD",
                "category": "Suscripción Adulto VIP",
                "tag": "Top Otaku VIP",
                "salesVolume": "1050 miembros",
                "desc": "Acceso ilimitado a todas las galerías temáticas de lencería estelar, videos animados en Kling 3.0 sin cortes y chat directo con Luna.",
                "fulfillment": "Activación Inmediata Fanvue"
            },
            {
                "name": "Pack 8K 'Reina Cósmica: Sesión de Luna Llena' (PPV)",
                "price": "$34.00 USD",
                "cost": "$0.50 USD",
                "category": "Galería Fotográfica 8K",
                "tag": "Bestseller Ecchi",
                "salesVolume": "580 ventas/mes",
                "desc": "50 imágenes en calidad nativa 8K de Luna en su azotea cyberpunk con atuendos astrales transparentes y poses dinámicas.",
                "fulfillment": "Descarga Segura Inmediata"
            }
        ],
        "funnelStrategy": "Clips de comedia anime picante en redes -> Comunidad Discord con adelantos -> Suscripción masiva en Fanvue VIP."
    },
    "posts": [
        {
            "caption": "¿Pelear por el cosmos bajo la luna? Mejor un descanso en el mundo terrenal con bikini estelar y palmeras tropicales de verdad 🌙💜 La gravedad humana y el agua de mar se sienten increíbles. ¡Set completo en mi Fanvue!",
            "img": "luna_beach.jpg",
            "likes": "74,300",
            "comments": "5,120",
            "date": "Hace 5 horas",
            "platform": "X / Discord Secreto"
        },
        {
            "caption": "Fuego real, ciudad de neón y una waifu cósmica que decidió no volver a su anime 🌙🔥 Babydoll translúcido lila con constelaciones. Si te quedas despierto hasta tarde jugando, pasa por mi canal privado.",
            "img": "luna_penthouse.jpg",
            "likes": "102,400",
            "comments": "7,180",
            "date": "Hace 1 hora",
            "platform": "X / Discord Secreto / Fanvue"
        },
        {
            "caption": "Dúo estelar en la costa terrenal. Cuando la magia anime se encuentra con el océano más transparente que jamás vi 🌴✨ Desbloquea las tomas exclusivas 4K en el link de mi biografía.",
            "img": "toons_beach_duo2.jpg",
            "likes": "93,500",
            "comments": "6,340",
            "date": "Ayer",
            "platform": "Fanvue VIP"
        }
    ],
    "pilotScript": {
        "title": "Episodio 1: Mi Primera Noche en la Azotea («La Magia que Nadie vio en los 90s»)",
        "duration": "45 segundos",
        "format": "Vertical 9:16 (Filtro 18+ en X y TikTok)",
        "objective": "Presentar a Luna como una mujer adulta dueña de su sensualidad, conquistar a la audiencia gamer nostálgica y canalizar tráfico a Fanvue.",
        "musicTrack": "Synthwave retro de los 90s con sintetizadores brillantes y beat envolvente.",
        "scenes": [
            {
                "num": 1,
                "time": "0:00 - 0:08",
                "name": "El Salto a la Azotea",
                "shotType": "Plano medio en azotea con viento estelar",
                "visual": "Luna de espaldas mirando el horizonte de la ciudad de neón. El viento mueve sus larguísimas coletas rubias. Se gira hacia la cámara con una sonrisa radiante y su vestido azul noche con transparencias que brillan con polvo de estrellas.",
                "klingPrompt": "Medium shot of stunning adult anime heroine Starlight Luna turning around on windy skyscraper rooftop, ultra-long blonde twin tails flowing, midnight blue sheer dress with glowing constellations, crescent moon tiara, neon city background --ar 9:16",
                "voice": "«En los años 90 me dibujaron para salvar al mundo con báculos mágicos... Pero miren esta ciudad. Ya nadie cree en los monstruos de las sombras; ahora todos se desvelan frente a una pantalla buscando compañía.»",
                "voiceNotes": "Tono coqueto, enérgico, juvenil pero maduro y seductor.",
                "audioCue": "Efecto de viento cósmico y destello de estrellas con sintetizador retro.",
                "overlayText": "Capítulo 1: La chica mágica que creció... y descubrió la noche 🌙✨"
            },
            {
                "num": 2,
                "time": "0:08 - 0:22",
                "name": "El Poder de la Energía Estelar",
                "shotType": "Plano entero dinámico con pose de combate sensual",
                "visual": "Luna hace una pose de victoria fluida y estilizada, dejando ver su silueta atlética y curvilínea. Guiña un ojo a la cámara mientras un destello dorado recorre la gema de su pecho.",
                "klingPrompt": "Full body dynamic shot of voluptuous anime waifu Luna striking an alluring celestial pose, sheer dress highlighting curvy silhouette, golden sparkle tracing her chest, city lights shimmering below --ar 9:16",
                "voice": "«Los científicos de este mundo dicen que la energía no se destruye, solo se transforma... Así que transformé todo mi poder cósmico en algo mucho más divertido: en ser la fantasía que no te deja dormir.»",
                "voiceNotes": "Voz risueña, provocativa y segura de su impacto.",
                "audioCue": "Efecto de campanillas mágicas brillantes y bajo synthwave creciente.",
                "overlayText": "«Transformé mi poder en la fantasía que no te deja dormir 😏»"
            },
            {
                "num": 3,
                "time": "0:22 - 0:35",
                "name": "La Invitación a la Nebulosa",
                "shotType": "Primer plano medio sugerente",
                "visual": "Luna se acerca a la cámara, apoya las manos en el borde de la azotea y se inclina ligeramente hacia adelante con una mirada penetrante y cautivadora.",
                "klingPrompt": "Close-up of anime girl Starlight Luna leaning close to camera on rooftop railing, intense captivating blue eyes, sheer bodice showing starry patterns, mischievous alluring smile --ar 9:16",
                "voice": "«Sé que pasas horas en Twitch y en foros buscando algo que de verdad te despierte el pulso. No necesitas seguir buscando, gamer... Hoy la luna llena brilla solo para ti.»",
                "voiceNotes": "Susurro cómplice al oído, apelando al público gamer nocturno.",
                "audioCue": "Suspiro suave y nota de bajo profundo que llena el espectro sonoro.",
                "overlayText": "Menos farmeo y más magia lunar 🎮🌙"
            },
            {
                "num": 4,
                "time": "0:35 - 0:45",
                "name": "El Cierre & Transformación Sin Censura",
                "shotType": "Plano detalle de la tiara y corte con destellos",
                "visual": "Luna toca la tiara de su frente haciendo estallar un halo de estrellas doradas que envuelve la pantalla, mientras envía un guiño final antes del fundido.",
                "klingPrompt": "Extreme close-up of Luna tapping golden forehead tiara, burst of golden star particles illuminating her face and lips with a seductive wink, transition to cosmic darkness --ar 9:16",
                "voice": "«La versión sin censura de mi transformación estelar te espera en mi santuario VIP. Ven y comprueba qué tan caliente queman las estrellas... El enlace está en mi perfil.»",
                "voiceNotes": "Despedida triunfal, pícara y tentadora.",
                "audioCue": "Explosión mágica de sonido estelar -> Desvanecimiento a negro con risa traviesa.",
                "overlayText": "⭐ Mira mi transformación sin censura en el enlace de mi perfil (18+)"
            }
        ]
    }
  }
};

influencersData['alina-van-dijk'] = influencersData.alina;
influencersData['alina_van_dijk'] = influencersData.alina;
influencersData['alinavandijk'] = influencersData.alina;
influencersData['minhopark'] = influencersData.minho;
influencersData['minho-park'] = influencersData.minho;
influencersData['damienvance'] = influencersData.damien;
influencersData['damien-vance'] = influencersData.damien;
influencersData['camilareyes'] = influencersData.camila;
influencersData['camila-reyes'] = influencersData.camila;
influencersData['roxiered'] = influencersData.roxie;
influencersData['roxie-red'] = influencersData.roxie;
influencersData['madame_v'] = influencersData.madamev;
influencersData['madame-v'] = influencersData.madamev;
influencersData['directora_m'] = influencersData.madamev;
influencersData['princesa_aura'] = influencersData.aura;
influencersData['princesa-aura'] = influencersData.aura;
influencersData['starlight_luna'] = influencersData.luna;
influencersData['starlight-luna'] = influencersData.luna;



const channelsData = {
  arcano: {
    id: "arcano",
    title: "The Infinite Archive (El Gran Arcano)",
    subtitle: "Bóveda Fuera del Tiempo • Fantasía Oscura & Chillwave Lo-Fi",
    category: "Fantasía Oscura / Música Chillwave & Deep Work",
    icon: "fa-gem",
    color: "#a855f7",
    image: "arcano_tower_window.jpg",
    concept: "Franquicia multimedia y canal faceless de alta retención que combina atmósferas chillwave/neonwave, ambient medieval y relatos de fantasía cósmica. Custodiado por Aurelius Chronovoid y el dragón Umbraxion en la fortaleza de Kar-Kaelum. Diseñado para sesiones de programación (coding beats), estudio profundo y meditación inmersiva.",
    targetAge: "Audiencia global de 18 a 45 años: programadores, estudiantes de STEM, creadores de contenido, gamers de rol/D&D y amantes del dark academia y synthwave.",
    episodes: [
      {
        title: "Tomo I • La Torre sobre las Cenizas (Sesión de Estudio 2h)",
        duration: "2:04:12 h",
        script: "[NARRADOR / AURELIUS]: \"Las guerras desgarraron los continentes de carne y piedra, pero el sonido de las estrellas es inmortal. Aquí aguardo con Umbraxion hasta que el tiempo decida recomenzar.\"\n[ATMÓSFERA]: Viento cósmico lila, arpa celta suspendida, frecuencias binaurales 432 Hz y crepitar de fuego eterno.\n[OBJETIVO]: Inducción de estado de flujo profundo (flow state) para programación y estudio continuo.",
        thumbnail: "Aurelius mirando desde la ventana de la aguja hacia el espacio profundo y las nebulosas púrpuras con astrolabio brillante."
      },
      {
        title: "Tomo II • El Manuscrito de las Eras (Lectura & Fuego Eterno)",
        duration: "1:48:30 h",
        script: "[NARRADOR / AURELIUS]: \"Un libro no es tinta muerta; es una partitura del alma. Mientras alguien lea sus historias, sus mundos siguen latiendo en la penumbra.\"\n[ATMÓSFERA]: Susurro de páginas milenarias, laúd acústico, lluvia sobre vitrales góticos y resonancia sub-grave de Umbraxion.",
        thumbnail: "Aurelius en su biblioteca de piedra descifrando un códice dorado con pluma y polvo bioluminiscente."
      },
      {
        title: "Tomo III • La Bestia del Vacío (Frecuencias Delta & Sueño)",
        duration: "3:00:00 h",
        script: "[NARRADOR / AURELIUS]: \"No temas a la oscuridad si camina a tu lado. Umbraxion nació del vacío primordial, y en su pecho late la calma de un millón de noches serenas.\"\n[ATMÓSFERA]: Latido rítmico y respiración del dragón de obsidiana a 0.5 Hz, disipando la tensión nerviosa y el insomnio.",
        thumbnail: "Umbraxion reposando en el gran salón con escamas de obsidiana y Aurelius posando su mano en su hocico."
      }
    ],
    pipeline: "Generación de lore y poemas con LLM especializado -> Diseño de paisajes sonoros y pistas modulares con Suno v3.5/Udio -> Masterización DAW profesional (-14 LUFS / 432 Hz) -> Cinemagrafías en 4K con Midjourney v6.1 y Kling 3.0 / Runway Gen-3 -> Transmisión en bucle 24/7 y videos largos de 2 a 3 horas.",
    monetization: "Licencias de sincronización para videojuegos y podcasts, patrocinios in-stream con marcas tech/gaming/café, AdSense de alta permanencia (promedio de reproducción 42 min por sesión) y membresías de la Bóveda Secreta en Fanvue/Patreon.",
    commercialProducts: [
      {
        name: "Licencia de Biblioteca Sonora Libre de Content ID",
        desc: "Acceso ilimitado a más de 50 temas masterizados para uso en streams de Twitch/YouTube, podcasts o bandas sonoras sin riesgo de reclamos de copyright.",
        price: "$490 USD / licencia perpetua"
      },
      {
        name: "Patrocinio In-Stream & Mención Visual en YouTube",
        desc: "Colocación de tu marca en el entorno 3D (ej. libro en la mesa de Aurelius, terminal holográfica o banner en pantalla) + mención en descripción con enlace de afiliado.",
        price: "$850 USD / mes (presencia en 4 videos largos)"
      },
      {
        name: "Desarrollo de Canal Faceless a Medida (Llave en Mano)",
        desc: "Creamos un universo sonoro y visual exclusivo con tu propia identidad de marca, 5 primeros videos largos de 2h producidos y canal configurado.",
        price: "$2.900 USD (entrega en 10 días)"
      }
    ]
  },

    orcaester: {
    id: "orcaester",
    title: "The Orcaester (La Orquesta Marina)",
    subtitle: "Educación Musical Infantil & Consciencia Marina",
    category: "Infantil / Música Clásica & Ecología",
    icon: "fa-water",
    color: "#06b6d4",
    image: "the_orcaester_thumb.jpg",
    concept: "Franquicia de animación 3D infantil donde una orquesta de animales marinos liderada por el Maestro Orcar enseña conceptos musicales (ritmo, tempo, dinámicas forte/piano) a niños de 2 a 8 años, vinculando la armonía musical con la limpieza y conservación del océano.",
    targetAge: "Niños de 2 a 8 años, familias, jardines infantiles y profesores de música elemental.",
    episodes: [
      {
        title: "Episodio #1: El Gran Concierto del Arrecife (¿Forte o Piano?)",
        duration: "4:00 min",
        script: `[MAESTRO ORCAR]: "¡Paren las aguas! ¿Estamos haciendo música o un maremoto? En la música, cuando queremos fuerza como una ola gigante tocamos ¡FORTE!, pero cuando susurramos un secreto tocamos piano..."
[ACCIDENTE ECOLÓGICO]: La caracola de Sammy el Salmón está atascada con una bolsa plástica. Don Tenazas la extrae con sus pinzas.
[VALOR / MORALEJA]: Cuidar el mar para que los instrumentos no se silencien. ¡Si cuidas la ola, la música suena sola!`,
        thumbnail: "El Maestro Orcar dirigiendo con batuta de coral brillante rodeado de Estelita, Don Tenazas, Sammy y Octavio en el arrecife turquesa."
      },
      {
        title: "Episodio #2: El Tempo de las Tortugas y el Salto del Delfín (Largo vs. Presto)",
        duration: "3:45 min",
        script: `[MAESTRO ORCAR]: "Hoy aprenderemos la velocidad del sonido: el compás 'Largo' como las sabias tortugas marinas y el compás 'Presto' como las acrobacias de Dali el Delfín."
[VALOR]: La paciencia rítmica y la reducción del ruido de motores en los santuarios marinos.`,
        thumbnail: "Dali el delfín saltando con su flauta de agua mientras una tortuga marina marca el pulso lento en un tambor de concha."
      },
      {
        title: "Episodio #3: Las 4 Familias del Océano (Cuerdas, Viento, Percusión y Coro)",
        duration: "4:30 min",
        script: `[NARRADOR]: "Octavio abraza 4 chelos con sus tentáculos, Tío Boris llena sus mejillas con la tuba, Don Tenazas chasquea sus pinzas y Pablito el pingüino canta la nota más alta del Polo Sur."
[VALOR]: El trabajo en equipo y cómo cada especie del arrecife tiene un rol irremplazable.`,
        thumbnail: "Octavio el pulpo tocando arpa y violines simultáneos con sus 8 tentáculos junto a Tío Boris inflando mejillas con la tuba dorada."
      }
    ],
    pipeline: "Guion pedagógico musical con LLM especializado -> Composición de piezas orquestales en DAW / Udio / Suno -> Modelado y cinemáticas con Flux.1 y Kling 3.0 -> Voces infantiles cálidas y expresivas con ElevenLabs -> Masterización infantil limpia (-14 LUFS).",
    monetization: "AdSense YouTube Kids, streaming de bandas sonoras y canciones para dormir en Spotify Kids, libros interactivos ilustrados en Amazon KDP y venta de peluches oficiales de los animales músicos.",
    commercialProducts: [
      {
        name: "Licencia de Contenido para Jardines Infantiles & Escuelas de Música",
        desc: "Paquete completo con los 12 episodios en 4K sin publicidad, guías pedagógicas en PDF para profesores y pistas instrumentales de acompañamiento (Minus-One).",
        price: "$350 USD / licencia institucional anual"
      },
      {
        name: "Integración de Marca / Patrocinio Educativo (Sponsorship)",
        desc: "Mención animada al inicio del video y en créditos finales para marcas de alimentos saludables, juguetes educativos o fundaciones de conservación marina.",
        price: "$750 USD / episodio (presencia permanente en canal oficial)"
      },
      {
        name: "Desarrollo de Canción Original / Episodio a Medida para Fundación",
        desc: "Creación de un episodio exclusivo de The Orcaester protagonizado por un animal o causa ecológica específica de tu organización con música orquestal propia.",
        price: "$1.850 USD (producción completa 3D y entrega de master)"
      }
    ]
  },
  sofia: {
    id: "sofia",
    title: "1. Los viajes en el tiempo de Sofía",
    subtitle: "Aventuras Temporales, Dinosaurios & Valores Familiares",
    category: "Infantil / Historia, Dinosaurios & Ciencia",
    icon: "fa-child-reaching",
    color: "var(--pink)",
    image: "yt_sofia_thumb.jpg",
    concept: "Micro-aventuras animadas de 60 segundos donde Sofía, una niña intrépida, viaja por el tiempo con su máquina temporal y su compañero Teko (un reptil carismático con Sentido Arcano). En cada salto viajan a épocas fascinantes —la era de los dinosaurios cretácicos, el antiguo Egipto, Roma o el Renacimiento— resolviendo un conflicto socioemocional en 60 segundos con empatía, trabajo en equipo y las rimas de su robot co-host.",
    targetAge: "Niños de 4 a 12 años, familias educadoras y público infantil.",
    episodes: [
      {
        title: "Episodio #1: Salto al Cretácico • El T-Rex que no sabía compartir",
        duration: "1:00 min",
        script: `[GANCHO / PORTAL]: "¡Sofía, algo está pasando en el Cretácico! ¡Salto en 3... 2... 1!"
[PROBLEMA]: Sofía y su compañero Teko aterrizan en una selva jurásica. Rexy el pequeño T-Rex ha acaparado todas las frutas luminosas y ruge porque nadie quiere jugar con él.
[ROBOT RAPEADOR]: "Si quieres amigos para jugar, ¡la fruta gigante hay que convidar! ¡Rrr-beat!"
[SOLUCIÓN & MORALEJA]: Sofía le enseña a Rexy a tomar turnos y compartir. "Hoy aprendimos: Compartir no te quita lo que tienes, ¡te multiplica la diversión!"
[PREGUNTA AL PÚBLICO]: "¿Y tú? ¿Compartes tus juguetes favoritos con tus amigos o hermanos?"`,
        thumbnail: "Sofía con su brújula temporal junto a Teko y un tierno T-Rex verde en una selva prehistórica llena de helechos gigantes y un volcán sonriente al fondo."
      },
      {
        title: "Episodio #2: ¿Cómo se construyeron las Pirámides de Guiza?",
        duration: "0:58 min",
        script: `[NARRADOR]: "¡Hola aventureros! Hoy Sofía viaja al año 2500 a.C. en el antiguo Egipto. ¿Sabías que los trabajadores no eran esclavos, sino artesanos respetados?"
[VISUAL]: Sofía aterriza con su reloj del tiempo en el desierto animado.
[VALOR]: La importancia del trabajo en equipo y la geometría básica.`,
        thumbnail: "Ilustración 3D colorida de Sofía con un sarcófago brillante y jeroglíficos animados."
      },
      {
        title: "Episodio #3: El misterio de la primera imprenta de Gutenberg",
        duration: "0:59 min",
        script: `[NARRADOR]: "Alemania, 1440. Antes de Gutenberg, ¡escribir un solo libro tardaba 1 año completo! Acompaña a Sofía a descubrir las letras de metal."`,
        thumbnail: "Sofía sosteniendo un libro dorado recién impreso en el taller de Maguncia."
      }
    ],
    pipeline: "Guion de LLM infantil -> Voces sintetizadas cálidas -> Generación de frames con Midjourney/Flux -> Animación con Runway/Kling -> Edición automatizada de subtítulos.",
    monetization: "AdSense YouTube Kids, libros ilustrados en Amazon KDP y merchandising educacional."
  },
  arcanotech: {
    id: "arcanotech",
    title: "2. Los Gemelos Arcanotech",
    subtitle: "Dos Hermanos Magos: Solarpunk vs Cyberpunk",
    category: "Futurismo, Ciencia & Fantasía",
    icon: "fa-atom",
    color: "var(--cyan)",
    image: "yt_arcanotech_thumb.jpg",
    concept: "Dos hermanos magos viven en un bosque encantado con un dragón tierno y un espejo parlante. Un gemelo (Solarpunk, púrpura-azul) narra historias de ciencia y tecnologías posibles en armonía con la naturaleza; el otro gemelo (Cyberpunk, rojo oscuro-magenta) explora misterios profundos, conspiraciones espaciales y futuros distópicos, mientras el espejo mágico hace fact-checking in-world.",
    targetAge: "Jóvenes y adultos de 14 a 40 años fascinados por la ciencia ficción, la tecnología, la magia y los debates conceptuales.",
    episodes: [
      {
        title: "Episodio #1: La Señal del Espacio • ¿Descubrimiento Real o Mentira Oculta?",
        duration: "10:30 min",
        script: `[MAGO SOLARPUNK (AZUL)]: "El telescopio James Webb captó una anomalía en K2-18b compatible con biofirmas de vida marina fotosintética. La física respalda este salto."
[MAGO CYBERPUNK (ROJO)]: "¿O acaso están filtrando la información por cuotas para preparar el mercado de telecomunicaciones orbitales privadas?"
[EL ESPEJO PARLANTE]: "¡Fact-check del Consejo del Bosque! Tres datos verificados por radioastrónomos y una teoría conspirativa desmentida."
[DRAGÓN TIERNO]: *Estornuda chispas de colores cómicas sobre el pergamino del espejo.*`,
        thumbnail: "Los dos hermanos magos con sus túnicas azul y magenta en el bosque encantado frente al espejo mágico con el pequeño dragón sobre el hombro."
      },
      {
        title: "Episodio #2: Ciudades Flotantes: ¿Verde Utopía o Prisión de Neón?",
        duration: "12:40 min",
        script: `[MAGO SOLARPUNK]: "El futuro pertenece a las arcologías solares donde cada edificio genera su propia energía y convive con la botánica."
[MAGO CYBERPUNK]: "Iluso. El verdadero poder está en los servidores submarinos y los implantes neuronales nocturnos."`,
        thumbnail: "Pantalla dividida entre una ciudad verde llena de vegetación brillante y un rascacielos con lluvia de neón."
      }
    ],
    pipeline: "Debate guionado por IA -> Generación de avatares sintéticos duales -> B-roll generativo en 4K -> Efectos de sonido inmersivos synthwave.",
    monetization: "Patrocinios con marcas de tecnología, VPNs, herramientas de IA y membresías de canal."
  },
  sagrados: {
    id: "sagrados",
    title: "3. Cuentos Sagrados (sin autor)",
    subtitle: "Mitos Fundacionales, Tradiciones & Sabiduría Universal",
    category: "Historia & Filosofía Perenne",
    icon: "fa-scroll",
    color: "var(--purple)",
    image: "yt_sagrados_thumb.jpg",
    concept: "Storytelling universal sobre textos sagrados, parábolas, mitos de creación y tradiciones espirituales del mundo (desde Mesopotamia y las escrituras bíblicas hasta leyendas védicas, budistas y sufíes) narradas con sobriedad, neutralidad y arte generativo estilo óleo al claroscuro.",
    targetAge: "Audiencia transversal madura interesada en historia antigua, teología y espiritualidad.",
    episodes: [
      {
        title: "Episodio #4: El Poema de Gilgamesh y el Diluvio Universal",
        duration: "18:20 min",
        script: `[VOZ EN OFF]: "Miles de años antes del relato de Noé, en las tablillas de arcilla de Mesopotamia se escribió la búsqueda de la inmortalidad..."`,
        thumbnail: "Tablilla cuneiforme dorada iluminada por fuego divino con la epopeya grabado."
      },
      {
        title: "Episodio #5: El Banquete del Sabio Sufí y la Trampa del Ego",
        duration: "12:15 min",
        script: `[VOZ EN OFF]: "En las calles de Bagdad del siglo IX, un maestro que vestía harapos entró al palacio de los mercaderes para demostrar qué alimentaba verdaderamente a las almas..."`,
        thumbnail: "Palacio oriental al anochecer con faroles dorados y un anciano místico bajo un arco de mosaicos estrellados."
      }
    ],
    pipeline: "Investigación histórica comprobada -> Locución profunda e imponente -> Arte cinematográfico generativo estilo óleo -> Banda sonora orquestal.",
    monetization: "YouTube AdSense de alto RPM, audiolibros en Audible y licencias educativas."
  },
  ranchera: {
    id: "ranchera",
    title: "4. Maite & La Fiebre Ranchera",
    subtitle: "Música, Festivales & Videoclips de Cumbia Ranchera Chilena",
    category: "Música & Festivales / Chile",
    icon: "fa-music",
    color: "#f59e0b",
    image: "yt_ranchera_thumb.jpg",
    concept: "Canal musical automatizado de cumbia ranchera y pop campesino para el mercado chileno y del Cono Sur. Canciones pegajosas compuestas con Suno/Udio, interpretadas por el avatar de Maite Valenzuela y videoclips cinematográficos generados en 4K con Kling 3.0 ambientados en fiestas campesinas, viñas de Colchagua y festivales chilenos.",
    targetAge: "Audiencia transversal chilena de 18 a 60 años amante del ritmo tropical-ranchero.",
    episodes: [
      {
        title: "Episodio Musical: 'Corazón Bandido' (Videoclip Oficial Cumbia Ranchera 2026)",
        duration: "3:20 min",
        script: `[MAITE]: "¡Súbele compadre, que esta noche se baila apretadito en todo Chile!"
[VISUAL]: Maite con sombrero texano blanco y botas bordadas cantando en una ramada campesina con luces de guirnalda y acordeón en primer plano.
[ESTRIBILLO]: Ritmo de cumbia ranchera bailable de alta energía con animaciones sincrónicas en 4K.`,
        thumbnail: "Maite Valenzuela con sombrero texano blanco y sonrisa pícara frente a un atardecer en viña de Colchagua con tipografía dorada."
      },
      {
        title: "Especial: Mix Bailable 60 Minutos para Fiestas Patrias & Asados",
        duration: "60:00 min",
        script: `[VOZ INTRO MAITE]: "¡Tiqui tiqui ti! Llegó el mix definitivo para prender la parrilla y el baile familiar."
[VISUAL]: Visualizador animado en bucle con Maite bailando y paisajes del campo chileno.`,
        thumbnail: "Collage campesino festivo con parrilla, espuelas de plata y Maite en pose country chic deslumbrante."
      }
    ],
    pipeline: "Composición lírica y melódica con Suno v3.5/Udio -> Producción vocal con ElevenLabs y DAW -> Generación de escenas con Kling 3.0 y Flux -> Edición de videoclip y masterización de audio multicanal.",
    monetization: "YouTube AdSense por alta retención de sesiones largas (mixes de 1 hora), regalías de streaming en Spotify/Apple Music, patrocinios con cervezas/licores chilenos y venta de merchandising oficial."
  },
  kira_gamedev: {
    id: "kira_gamedev",
    title: "5. Kira Vane • DevLogs & Ciber-Activismo",
    subtitle: "Desarrollo de Videojuegos Indie & Soberanía Digital",
    category: "Gaming & Cultura Open Source",
    icon: "fa-gamepad",
    color: "#10b981",
    image: "yt_kira_thumb.jpg",
    concept: "Devlogs cinematográficos y tutoriales de desarrollo de videojuegos en Godot y Unreal Engine 5 conducidos por Kira Vane, combinados con ensayos de alto impacto sobre ciberseguridad, privacidad de datos, software libre y crítica a los monopolios del gaming corporativo.",
    targetAge: "Desarrolladores, programadores, gamers y estudiantes tech de 18 a 35 años.",
    episodes: [
      {
        title: "Devlog #1: Cómo programé la mecánica de hackeo de mi juego cyberpunk en 48 horas",
        duration: "14:15 min",
        script: `[KIRA]: "La mayoría de juegos hacen que hackear sea apretar un solo botón. En mi juego independiente quise terminales reales con comandos de Linux y puzzles de redes. Te muestro la arquitectura de nodos en Godot..."
[VISUAL]: Kira con gafas gamer explicando en su setup neón con pantalla compartida de código y game testing.`,
        thumbnail: "Kira Vane con audífonos apuntando a código de terminal neón con texto: 'HACKEANDO EN TIEMPO REAL'."
      },
      {
        title: "Ensayo: Por qué el software libre salvará a la industria del videojuego",
        duration: "18:40 min",
        script: `[KIRA]: "Cuando los motores cerrados cambian sus políticas de cobro, los desarrolladores independientes pagan el pato. Es hora de apostar por motores abiertos y soberanía de código."`,
        thumbnail: "Kira frente a un fondo distópico de servidores con logo gigante de Godot y Unreal Engine."
      }
    ],
    pipeline: "Capturas de motor de juego en tiempo real -> Generación de avatar de Kira con sincronización labial Kling/HeyGen -> Edición dinámica estilo devlog de ritmo rápido -> Música synthwave/lo-fi original.",
    monetization: "Patrocinios con marcas de laptops, periféricos gamer, plataformas de hosting/cloud, AdSense Tech de alto RPM ($9–$15 USD) y embudo de conversión a la lista de deseados (Wishlist) en Steam y Fanvue VIP."
  },
  mateo_fintech: {
    id: "mateo_fintech",
    title: "4. Mateo Silva • Alpha Capital Insights",
    subtitle: "FinTech, Finanzas Cuantitativas & Real Estate Tech",
    category: "Finanzas / Tecnología",
    icon: "fa-arrow-trend-up",
    color: "var(--cyan)",
    image: "mateo_avatar.jpg",
    concept: "Análisis financiero cuantitativo, modelos algorítmicos en Python y estrategias de inversión sin mitos. El canal con mayor RPM de YouTube ($18–$45 USD) para captación de clientes de alto patrimonio y SaaS B2B.",
    targetAge: "Inversores, ejecutivos y emprendedores de 25 a 55 años.",
    episodes: [
      {
        title: "Episodio #1: Por qué el 90% de los inversores pierde contra el S&P 500 (y el código en Python que lo prueba)",
        duration: "16:20 min",
        script: `[MATEO]: "En este análisis no te voy a vender un curso para hacerte rico. Vamos a descargar 40 años de datos de mercado con Python y ver qué factores matemáticos explican el 85% de la rentabilidad real de los mejores fondos cuantitativos..."`,
        thumbnail: "Mateo Silva en traje sastre azul marino frente a rascacielos con texto: 'EL ALGORITMO DEFENSIVO'."
      },
      {
        title: "Episodio #2: Tokenización Inmobiliaria: Cómo invertir en Real Estate europeo desde $100 USD",
        duration: "14:45 min",
        script: `[MATEO]: "La deuda tokenizada y las fracciones inmobiliarias están cambiando las reglas de juego. Te muestro la estructura legal y los rendimientos netos libres de impuestos en Fráncfort y Londres..."`,
        thumbnail: "Mateo Silva con gráficos de blockchain y edificios modernos de Canary Wharf."
      }
    ],
    pipeline: "Guion de investigación econométrica -> Avatar 4K de Mateo con sincronización labial Kling 3.0 / HeyGen -> Gráficos interactivos de trading en pantalla -> Edición ejecutiva limpia sin saturación de memes.",
    monetization: "AdSense FinTech de ultra alto RPM ($24–$45 USD), patrocinios con brokers regulados y neobancos ($3.000–$7.000 USD/video), y venta de plantillas de valoración en Python/Excel ($149 USD)."
  }
};

channelsData.lau_gamedev = channelsData.kira_gamedev;
channelsData.mateo = channelsData.mateo_fintech;
channelsData["infinite-archive"] = channelsData.arcano;
channelsData.arcano = channelsData.arcano;
channelsData['the-orcaester'] = channelsData.orcaester;
channelsData['the_orcaester'] = channelsData.orcaester;
channelsData.orcas = channelsData.orcaester;

// --- 3. AUTHENTICATION & ACCESS CONTROL FOR INTERNAL TEAM PANEL ---
let pendingTeamTab = 'members';

function isTeamAuthenticated() {
  return sessionStorage.getItem('los_manejadores_team_auth') === 'true';
}

function updateAuthUI() {
  const lockIcon = document.getElementById('nav-lock-icon');
  const lockBtn = document.getElementById('btn-lock-auth');
  if (lockIcon) {
    if (isTeamAuthenticated()) {
      lockIcon.className = 'fa-solid fa-lock-open';
      lockIcon.style.color = '#10b981';
      if (lockBtn) {
        lockBtn.title = 'Sesión de Equipo Activa (Clic para ir al Panel)';
        lockBtn.style.borderColor = 'rgba(16, 185, 129, 0.45)';
        lockBtn.style.background = 'rgba(16, 185, 129, 0.12)';
      }
    } else {
      lockIcon.className = 'fa-solid fa-lock';
      lockIcon.style.color = '';
      if (lockBtn) {
        lockBtn.title = 'Acceso al Panel de Equipo (Requiere PIN)';
        lockBtn.style.borderColor = '';
        lockBtn.style.background = '';
      }
    }
  }
}

function openAuthModal(targetTab = 'members') {
  pendingTeamTab = targetTab;
  const modal = document.getElementById('auth-modal');
  const input = document.getElementById('team-pin-input');
  const errorMsg = document.getElementById('auth-error-msg');
  if (errorMsg) errorMsg.style.display = 'none';
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 150);
  }
  if (modal) modal.classList.add('active');
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.remove('active');
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('team-pin-input');
  const pin = input ? input.value.trim() : '';
  const errorMsg = document.getElementById('auth-error-msg');

  // Accepted project PINs: '2026', 'manejadores', 'incel'
  if (pin === '2026' || pin.toLowerCase() === 'manejadores' || pin.toLowerCase() === 'incel') {
    sessionStorage.setItem('los_manejadores_team_auth', 'true');
    closeAuthModal();
    updateAuthUI();
    if (pendingTeamTab && pendingTeamTab.startsWith('influencer-cockpit:')) {
      const id = pendingTeamTab.replace('influencer-cockpit:', '');
      renderInfluencerPage(id, 'cockpit');
      showDynamicView();
    } else if (pendingTeamTab && pendingTeamTab.startsWith('youtube-channel:')) {
      const channelId = pendingTeamTab.replace('youtube-channel:', '');
      showTeamView('youtube-studio');
      selectAdminChannel(channelId);
    } else {
      showTeamView(pendingTeamTab || 'members');
    }
  } else {
    if (errorMsg) errorMsg.style.display = 'block';
  }
}

function lockTeamView() {
  sessionStorage.removeItem('los_manejadores_team_auth');
  updateAuthUI();
  switchView('public');
  alert("Has bloqueado la sesión confidencial del panel de equipo.");
}

// --- WORLD CLOCKS (TRI-REGIONAL OPERATION: BERLIN, TORONTO & SANTIAGO) ---
function updateWorldClocks() {
  const elBerlin = document.getElementById('clock-berlin');
  const elToronto = document.getElementById('clock-toronto');
  const elSantiago = document.getElementById('clock-santiago');
  if (!elBerlin && !elToronto && !elSantiago) return;

  const now = new Date();
  if (elBerlin) {
    elBerlin.textContent = now.toLocaleTimeString('es-ES', {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
  if (elToronto) {
    elToronto.textContent = now.toLocaleTimeString('es-ES', {
      timeZone: 'America/Toronto',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
  if (elSantiago) {
    elSantiago.textContent = now.toLocaleTimeString('es-CL', {
      timeZone: 'America/Santiago',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
}

// --- 4. ROUTER & PAGE RENDERERS ---

function navigateRoute(route) {
  if (window.location.hash === route) {
    handleRoute();
  } else {
    window.location.hash = route;
  }
}

function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('popstate', handleRoute);
  window.addEventListener('load', handleRoute);
  handleRoute();
  setInterval(updateWorldClocks, 1000);
  updateAuthUI();
}

function handleRoute() {
  const hash = window.location.hash || '#home';
  const dynamicView = document.getElementById('view-dynamic');
  const publicView = document.getElementById('view-public');
  const teamView = document.getElementById('view-team');

  // Parse routes
  if (hash.startsWith('#influencer-cockpit/')) {
    const rawId = hash.replace('#influencer-cockpit/', '');
    const influencerId = decodeURIComponent(rawId).toLowerCase().trim().replace(/\/$/, '');
    if (isTeamAuthenticated()) {
      renderInfluencerPage(influencerId, 'cockpit');
      showDynamicView();
    } else {
      openAuthModal('influencer-cockpit:' + influencerId);
      showPublicView();
    }
  } else if (hash.startsWith('#influencer/')) {
    const rawId = hash.replace('#influencer/', '');
    const influencerId = decodeURIComponent(rawId).toLowerCase().trim().replace(/\/$/, '');
    renderInfluencerPage(influencerId, 'product');
    showDynamicView();
  } else if (hash.startsWith('#channel/')) {
    const channelId = hash.replace('#channel/', '');
    renderChannelPage(channelId);
    showDynamicView();
  } else if (hash === '#roster' || hash === '#influencers') {
    renderInfluencersPage();
    showDynamicView();
  } else if (hash === '#youtube' || hash === '#canales') {
    renderYoutubeCatalogPage();
    showDynamicView();
  } else if (hash === '#arcano' || hash === '#infinite-archive') {
    renderChannelPage('arcano');
    showDynamicView();
  } else if (hash === '#team-youtube' || hash === '#youtube-studio') {
    if (isTeamAuthenticated()) {
      showTeamView('youtube-studio');
    } else {
      openAuthModal('youtube-studio');
      showPublicView();
    }
  } else if (hash === '#asesorias') {
    renderAdvisoriesPage();
    showDynamicView();
  } else if (hash === '#empresas' || hash === '#desarrollo') {
    renderEmpresasPage();
    showDynamicView();
    if (hash === '#desarrollo') {
      setTimeout(() => {
        const el = document.getElementById('desarrollo');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  } else if (hash === '#seguridad' || hash === '#seguridad-digital' || hash === '#privacidad') {
    renderSeguridadPage();
    showDynamicView();
  } else if (hash === '#cursos' || hash === '#formacion' || hash === '#talleres') {
    renderCursosPage();
    showDynamicView();
  } else if (hash === '#comercial' || hash === '#clientes' || hash === '#pitch' || hash === '#showcase' || hash === '#comercial-full') {
    showPublicView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (hash === '#musica' || hash === '#musica-comercial' || hash === '#soundforge' || hash === '#musica-full') {
    renderMusicaPage();
    showDynamicView();
  } else if (hash.startsWith('#music-')) {
    if (!document.getElementById('music-demos')) {
      renderMusicaPage();
    }
    showDynamicView();
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  } else if (hash === '#logos' || hash === '#copys') {
    if (isTeamAuthenticated()) {
      showTeamView('copys');
    } else {
      openAuthModal('copys');
      showPublicView();
    }
  } else if (hash === '#gantt') {
    if (isTeamAuthenticated()) {
      showTeamView('gantt');
    } else {
      openAuthModal('gantt');
      showPublicView();
    }
  } else if (hash === '#pipeline') {
    if (isTeamAuthenticated()) {
      showTeamView('pipeline');
    } else {
      openAuthModal('pipeline');
      showPublicView();
    }
  } else if (hash === '#members') {
    if (isTeamAuthenticated()) {
      showTeamView('members');
    } else {
      openAuthModal('members');
      showPublicView();
    }
  } else if (hash === '#manual' || hash === '#guia' || hash === '#como-usar' || hash === '#instrucciones') {
    if (isTeamAuthenticated()) {
      showTeamView('manual');
    } else {
      openAuthModal('manual');
      showPublicView();
    }
  } else if (hash === '#influencer-ops' || hash === '#operaciones') {
    if (isTeamAuthenticated()) {
      showTeamView('influencer-ops');
    } else {
      openAuthModal('influencer-ops');
      showPublicView();
    }
  } else {
    // Default home view (#home, #desarrollo, #roster, #youtube, #pitch, etc.)
    showPublicView();
    if (hash && hash !== '#home') {
      const targetEl = document.querySelector(hash);
      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Ensure navbar logo is updated
  applyLogo(currentLogoKey);
}

function showTeamView(subtab = 'members') {
  if (!isTeamAuthenticated()) {
    openAuthModal(subtab);
    return;
  }

  const dynamicView = document.getElementById('view-dynamic');
  const publicView = document.getElementById('view-public');
  const teamView = document.getElementById('view-team');
  const archiveView = document.getElementById('view-archive');
  const btnPublic = document.getElementById('btn-mode-public');
  const btnTeam = document.getElementById('btn-mode-team');

  if (publicView) publicView.style.display = 'none';
  if (dynamicView) dynamicView.style.display = 'none';
  if (archiveView) archiveView.style.display = 'none';
  if (teamView) {
    teamView.style.display = 'block';
    teamView.classList.add('active-view');
  }

  if (btnTeam) btnTeam.classList.add('active');
  if (btnPublic) btnPublic.classList.remove('active');

  switchTeamTab(subtab);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchTeamTab(tab) {
  const btnGantt = document.getElementById('btn-team-tab-gantt');
  const btnPipeline = document.getElementById('btn-team-tab-pipeline');
  const btnCopys = document.getElementById('btn-team-tab-copys');
  const btnMembers = document.getElementById('btn-team-tab-members');
  const btnInfluencerOps = document.getElementById('btn-team-tab-influencer-ops');
  const btnYoutubeStudio = document.getElementById('btn-team-tab-youtube-studio');
  const btnManual = document.getElementById('btn-team-tab-manual');

  const paneGantt = document.getElementById('team-pane-gantt');
  const panePipeline = document.getElementById('team-pane-pipeline');
  const paneCopys = document.getElementById('team-pane-copys');
  const paneMembers = document.getElementById('team-pane-members');
  const paneInfluencerOps = document.getElementById('team-pane-influencer-ops');
  const paneYoutubeStudio = document.getElementById('team-pane-youtube-studio');
  const paneManual = document.getElementById('team-pane-manual');

  [btnGantt, btnPipeline, btnCopys, btnMembers, btnInfluencerOps, btnYoutubeStudio, btnManual].forEach(b => { if (b) b.classList.remove('active'); });
  [paneGantt, panePipeline, paneCopys, paneMembers, paneInfluencerOps, paneYoutubeStudio, paneManual].forEach(p => { if (p) p.classList.remove('active-pane'); });

  if (tab === 'gantt') {
    if (btnGantt) btnGantt.classList.add('active');
    if (paneGantt) paneGantt.classList.add('active-pane');
    if (window.location.hash !== '#gantt') window.location.hash = '#gantt';
  } else if (tab === 'pipeline') {
    if (btnPipeline) btnPipeline.classList.add('active');
    if (panePipeline) panePipeline.classList.add('active-pane');
    if (window.location.hash !== '#pipeline') window.location.hash = '#pipeline';
  } else if (tab === 'copys') {
    if (btnCopys) btnCopys.classList.add('active');
    if (paneCopys) paneCopys.classList.add('active-pane');
    if (window.location.hash !== '#copys') window.location.hash = '#copys';
  } else if (tab === 'influencer-ops') {
    if (btnInfluencerOps) btnInfluencerOps.classList.add('active');
    if (paneInfluencerOps) paneInfluencerOps.classList.add('active-pane');
    if (window.location.hash !== '#influencer-ops') window.location.hash = '#influencer-ops';
    renderInfluencerOpsMatrix();
  } else if (tab === 'youtube-studio') {
    if (btnYoutubeStudio) btnYoutubeStudio.classList.add('active');
    if (paneYoutubeStudio) paneYoutubeStudio.classList.add('active-pane');
    if (window.location.hash !== '#team-youtube') window.location.hash = '#team-youtube';
    renderAdminYoutubeStudio(window.pendingAdminChannel || 'arcano');
  } else if (tab === 'manual') {
    if (btnManual) btnManual.classList.add('active');
    if (paneManual) paneManual.classList.add('active-pane');
    if (window.location.hash !== '#manual') window.location.hash = '#manual';
  } else {
    // Default tab: 'members' (Posición 1: Equipo Fundador & Roles)
    if (btnMembers) btnMembers.classList.add('active');
    if (paneMembers) paneMembers.classList.add('active-pane');
    if (window.location.hash !== '#members') window.location.hash = '#members';
    updateWorldClocks();
  }
}

function renderInfluencerOpsMatrix() {
  const container = document.getElementById('influencer-ops-table-container');
  if (!container) return;

  const characters = [
    { id: 'elena', name: 'Elena Daddario', handler: 'Daniel Santander (Alemania)', niche: 'Psicología & Lifestyle Consciente', status: 'Listo • Live', ticket: '$14 USD/m (VIP)' },
    { id: 'julia', name: 'Julia Schmidt', handler: 'Pancho Ipinza (Canadá)', niche: 'Dermocosmética & Clean Beauty', status: 'Listo • Live', ticket: '$12 USD/m (VIP)' },
    { id: 'laura', name: 'Laura Taeda', handler: 'Wladimir Gutierrez (Chile)', niche: 'Nutrition Lifestyle + Science-Based Reviews', status: 'Listo • Live', ticket: '$24 USD/m (VIP)' },
    { id: 'mateo', name: 'Mateo Silva', handler: 'Daniel / Pancho (Alemania/Canadá)', niche: 'FinTech, Inversiones & Real Estate Tech', status: 'Listo • Live (Top RPM)', ticket: '$29 USD/m (VIP)' },
    { id: 'maite', name: 'Maite Valenzuela', handler: 'Equipo (Los Manejadores)', niche: 'Cumbia Ranchera Pop & Mercado Chile', status: 'Listo • Live (Equipo)', ticket: '$15 USD/m (VIP)' },
    { id: 'kira', name: 'Kira Voss', handler: 'Equipo (Los Manejadores)', niche: 'Indie Game Dev & Cyberpunk Glamour (Validado)', status: 'Validado • Live (Equipo)', ticket: '$18 USD/m (VIP)' },
    { id: 'alejandra', name: 'Alejandra (Prototipo B2B)', handler: 'Comercial B2B (Pancho / Daniel)', niche: 'Embajadora Virtual • Disponible para Negocios', status: 'En Adopción B2B', ticket: 'Licencia B2B' },
    { id: 'alina', name: 'Alina Van Dijk', handler: 'Equipo (Submarca Adulto VIP)', niche: 'Dominatrix Consciente & Erotismo Terapéutico', status: 'Listo • Live (Adulto VIP)', ticket: '$25 USD/m (VIP)' },
    { id: 'freja', name: 'Freja Lindholm', handler: 'Equipo (Producción Musical / Arcano)', niche: 'Música Lírica, Gaming & El Gran Arcano', status: 'Listo • Live (Música)', ticket: '$29 USD/álbum' },
    { id: 'nova', name: 'Nova (Unidad NV-01)', handler: 'Equipo (Robótica & Tech Urbana)', niche: 'Androide Autónoma & Real-World Robotics', status: 'Listo • Live (Tech)', ticket: '$35 USD/m (Patrocinios)' }
  ];

  let rows = characters.map(c => {
    const data = influencersData[c.id];
    let answered = 0;
    const totalQ = defaultCalibrationQuestions.length;
    defaultCalibrationQuestions.forEach(q => {
      const ans = getCalibrationAnswer(c.id, q.id);
      if (ans && ans.trim().length > 0) answered++;
    });
    const pct = Math.round((answered / totalQ) * 100);
    const badgeColor = answered === totalQ ? '#10b981' : (answered > 0 ? '#f59e0b' : '#94a3b8');

    const activePlats = typeof getInfluencerPlatforms === 'function' ? getInfluencerPlatforms(c.id) : [];
    const platPills = activePlats.slice(0, 3).map(pid => {
      let name = pid;
      if (typeof defaultPlatformCategories !== 'undefined') {
        defaultPlatformCategories.forEach(cat => {
          const found = cat.platforms.find(p => p.id === pid);
          if (found) name = found.name;
        });
      }
      if (pid.startsWith('custom_')) name = pid.replace('custom_', '').replace(/_/g, ' ');
      return `<span class="platform-tag-pill">${name}</span>`;
    }).join(' ');
    const extraCount = activePlats.length > 3 ? `<span style="font-size: 0.7rem; color: var(--cyan); font-weight:600;">+${activePlats.length - 3}</span>` : '';

    return `
      <tr>
        <td style="display: flex; align-items: center; gap: 0.75rem;">
          <img src="${data ? data.avatar : ''}" alt="${c.name}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-glass);" />
          <div>
            <strong style="color: #fff; font-size: 0.9rem;">${c.name}</strong>
            <div style="font-size: 0.72rem; color: var(--text-muted);">${c.niche}</div>
          </div>
        </td>
        <td style="font-size: 0.82rem; color: var(--cyan);"><i class="fa-solid fa-user-check"></i> ${c.handler}</td>
        <td><span class="influencer-badge" style="font-size: 0.7rem; padding: 0.2rem 0.5rem;">${c.status}</span></td>
        <td style="font-size: 0.82rem; color: #fff;">
          <div style="display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap; max-width: 220px;">
            ${platPills} ${extraCount}
          </div>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 50px; height: 5px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
              <div style="width: ${pct}%; height: 100%; background: ${badgeColor};"></div>
            </div>
            <span style="font-size: 0.75rem; color: ${badgeColor}; font-weight: 600;">${answered}/${totalQ}</span>
          </div>
        </td>
        <td>
          <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
            <a href="#influencer-cockpit/${c.id}" class="btn btn-primary btn-sm" style="font-size: 0.72rem; padding: 0.28rem 0.5rem;" title="Abrir Cockpit Operativo Privado (Prompts, SOP y Briefing)">
              <i class="fa-solid fa-sliders"></i> Cockpit
            </a>
            <a href="#influencer/${c.id}" class="btn btn-secondary btn-sm" style="font-size: 0.72rem; padding: 0.28rem 0.5rem; border-color: rgba(6, 182, 212, 0.4); color: var(--cyan); background: rgba(6, 182, 212, 0.08);" title="Ver Ficha Comercial de Producto Pública">
              <i class="fa-solid fa-eye"></i> Ficha Pública
            </a>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  container.innerHTML = `
    <table class="gantt-table">
      <thead>
        <tr>
          <th>Personaje & Activo</th>
          <th>Responsable</th>
          <th>Estado Embudo</th>
          <th>Plataformas de Contenido</th>
          <th>Briefing Operativo</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

function showDynamicView() {
  const dynamicView = document.getElementById('view-dynamic');
  const publicView = document.getElementById('view-public');
  const teamView = document.getElementById('view-team');
  const archiveView = document.getElementById('view-archive');

  if (publicView) {
    publicView.style.display = 'none';
    publicView.classList.remove('active-view');
  }
  if (teamView) {
    teamView.style.display = 'none';
    teamView.classList.remove('active-view');
  }
  if (archiveView) {
    archiveView.style.display = 'none';
    archiveView.classList.remove('active-view');
  }
  if (dynamicView) {
    dynamicView.style.display = 'block';
    dynamicView.classList.add('active-view');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPublicView() {
  const dynamicView = document.getElementById('view-dynamic');
  const publicView = document.getElementById('view-public');
  const teamView = document.getElementById('view-team');
  const archiveView = document.getElementById('view-archive');

  if (dynamicView) {
    dynamicView.style.display = 'none';
    dynamicView.classList.remove('active-view');
  }
  if (teamView) {
    teamView.style.display = 'none';
    teamView.classList.remove('active-view');
  }
  if (archiveView) {
    archiveView.style.display = 'none';
    archiveView.classList.remove('active-view');
  }
  if (publicView) {
    publicView.style.display = 'block';
    publicView.classList.add('active-view');
  }
  
  // Highlight navbar
  const btnPublic = document.getElementById('btn-mode-public');
  const btnTeam = document.getElementById('btn-mode-team');
  if (btnPublic) btnPublic.classList.add('active');
  if (btnTeam) btnTeam.classList.remove('active');
}

// --- 4. DEDICATED SUBPAGE RENDER FUNCTIONS ---

// RENDER: INFLUENCER PAGE
// VOICE PLAYBACK SYSTEM
let voicePlayInterval = null;
let currentPlayingId = null;

function toggleVoicePlayback(id) {
  const data = influencersData[id];
  if (!data || !data.voice) return;

  const card = document.getElementById(`voice-card-${id}`);
  const btn = document.getElementById(`voice-btn-${id}`);
  const timeEl = document.getElementById(`voice-time-${id}`);

  if (currentPlayingId === id) {
    stopVoicePlayback();
    return;
  }

  stopVoicePlayback();
  currentPlayingId = id;

  if (card) card.classList.add('is-playing');
  if (btn) {
    btn.classList.add('playing');
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }

  let seconds = 0;
  voicePlayInterval = setInterval(() => {
    seconds++;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (timeEl) timeEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    if (seconds >= 22) {
      stopVoicePlayback();
    }
  }, 1000);

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const cleanText = data.voice.transcript.replace(/[«»]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = data.voice.rate || 1.0;
    utterance.pitch = data.voice.pitch || 1.0;
    utterance.lang = data.voice.lang || 'es-ES';

    const voices = window.speechSynthesis.getVoices();
    const match = voices.find(v => v.lang.startsWith(utterance.lang.slice(0, 2)));
    if (match) utterance.voice = match;

    utterance.onend = () => stopVoicePlayback();
    utterance.onerror = () => stopVoicePlayback();
    window.speechSynthesis.speak(utterance);
  }
}

function stopVoicePlayback() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (voicePlayInterval) {
    clearInterval(voicePlayInterval);
    voicePlayInterval = null;
  }
  if (currentPlayingId) {
    const card = document.getElementById(`voice-card-${currentPlayingId}`);
    const btn = document.getElementById(`voice-btn-${currentPlayingId}`);
    const timeEl = document.getElementById(`voice-time-${currentPlayingId}`);
    if (card) card.classList.remove('is-playing');
    if (btn) {
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
    if (timeEl) timeEl.textContent = '0:00';
    currentPlayingId = null;
  }
}

// INTERACTIVE ROI CALCULATOR
function updateInfluencerRoi(id) {
  const followersInput = document.getElementById(`roi-followers-${id}`);
  const convInput = document.getElementById(`roi-conv-${id}`);
  const ticketInput = document.getElementById(`roi-ticket-${id}`);

  if (!followersInput || !convInput || !ticketInput) return;

  const followers = parseInt(followersInput.value, 10);
  const convRate = parseFloat(convInput.value);
  const ticket = parseFloat(ticketInput.value);

  const lblFollowers = document.getElementById(`val-followers-${id}`);
  const lblConv = document.getElementById(`val-conv-${id}`);
  const lblTicket = document.getElementById(`val-ticket-${id}`);

  if (lblFollowers) lblFollowers.textContent = Number(followers).toLocaleString() + ' seguidores';
  if (lblConv) lblConv.textContent = convRate.toFixed(1) + '%';
  if (lblTicket) lblTicket.textContent = '$' + ticket.toFixed(0) + ' USD/mes';

  const subs = Math.round(followers * (convRate / 100));
  const mrr = Math.round(subs * ticket);
  const arr = mrr * 12;
  const agencyShare = Math.round(mrr * 0.70);
  const talentShare = Math.round(mrr * 0.30);

  const resSubs = document.getElementById(`res-subs-${id}`);
  const resMrr = document.getElementById(`res-mrr-${id}`);
  const resArr = document.getElementById(`res-arr-${id}`);
  const resAgency = document.getElementById(`res-agency-${id}`);
  const resTalent = document.getElementById(`res-talent-${id}`);

  if (resSubs) resSubs.textContent = subs.toLocaleString() + ' suscriptores VIP';
  if (resMrr) resMrr.textContent = '$' + mrr.toLocaleString() + ' USD';
  if (resArr) resArr.textContent = '$' + arr.toLocaleString() + ' USD';
  if (resAgency) resAgency.textContent = '$' + agencyShare.toLocaleString();
  if (resTalent) resTalent.textContent = '$' + talentShare.toLocaleString();
}

function setRoiPreset(id, preset) {
  const followersInput = document.getElementById(`roi-followers-${id}`);
  const convInput = document.getElementById(`roi-conv-${id}`);
  const ticketInput = document.getElementById(`roi-ticket-${id}`);

  if (!followersInput || !convInput || !ticketInput) return;

  if (preset === 'conservative') {
    followersInput.value = 25000;
    convInput.value = 0.8;
  } else if (preset === 'moderate') {
    followersInput.value = 75000;
    convInput.value = 1.8;
  } else if (preset === 'aggressive') {
    followersInput.value = 200000;
    convInput.value = 3.2;
  }

  const buttons = document.querySelectorAll(`.preset-btn-${id}`);
  buttons.forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-preset-${id}-${preset}`);
  if (activeBtn) activeBtn.classList.add('active');

  updateInfluencerRoi(id);
}

// SCENE PROMPT SWITCHER
function selectPromptScene(id, sceneKey) {
  const data = influencersData[id];
  if (!data || !data.promptScenes || !data.promptScenes[sceneKey]) return;

  const scene = data.promptScenes[sceneKey];
  const box = document.getElementById(`prompt-display-${id}`);
  const tagsContainer = document.getElementById(`prompt-tags-${id}`);

  if (box) box.textContent = scene.text;
  if (tagsContainer && scene.tags) {
    tagsContainer.innerHTML = scene.tags.map(t => `<span class="prompt-tag">${t}</span>`).join('');
  }

  const buttons = document.querySelectorAll(`.scene-btn-${id}`);
  buttons.forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`scene-btn-${id}-${sceneKey}`);
  if (activeBtn) activeBtn.classList.add('active');
}

function copyScenePrompt(id) {
  const box = document.getElementById(`prompt-display-${id}`);
  if (!box) return;
  const text = box.textContent || box.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const copyBtn = document.getElementById(`copy-scene-btn-${id}`);
    if (copyBtn) {
      const orig = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i> ¡Prompt Copiado!';
      setTimeout(() => { copyBtn.innerHTML = orig; }, 2000);
    }
  }).catch(() => {
    alert('Prompt copiado al portapapeles');
  });
}

// CALIBRATION & PRODUCTION BRIEFING QUESTIONS MODULE
const defaultCalibrationQuestions = [
  {
    id: 'objective',
    title: '1. Objetivo Estratégico y Etapa del Embudo (Top, Mid o Bottom)',
    guide: 'Define la meta específica del activo en este ciclo: ¿Atracción masiva y viralidad en TikTok/Reels (Top)? ¿Engagement y construcción de lealtad en Telegram/Instagram (Mid)? ¿Conversión directa a Fanvue VIP o Pay-Per-View (Bottom)?',
    placeholder: 'Ej: Generar 60,000 impresiones orgánicas en TikTok hacia el canal VIP de Fanvue con foco en estética cotidiana...'
  },
  {
    id: 'tone',
    title: '2. Tono de Voz, Psicología Emocional & Filtro Ético / Límites',
    guide: 'Establece el arquetipo de comunicación: nivel de cercanía, humor, misterio o sofisticación. Define explícitamente qué temas o actitudes NUNCA debe adoptar (cero política, evitar vulgaridad excesiva, mantener misterio elegante, etc.).',
    placeholder: 'Ej: Tono cálido, intelectual y cómplice. Respuestas empáticas en primera persona. Prohibido: polarización política o promesas milagrosas...'
  },
  {
    id: 'location',
    title: '3. Entorno Visual, Locación, Iluminación & Lentes Focales',
    guide: 'Determina la atmósfera cinematográfica o cotidiana: locación exacta (departamento en Berlín, café en Miraflores, gimnasio boutique), tipo de luz (golden hour, luz natural de ventana, neón nocturno) y lente (35mm candid selfie, 85mm f/1.8 retrato bokeh).',
    placeholder: 'Ej: Luz de atardecer filtrada en ventanal nórdico, paleta en tonos neutros y pasteles, lente 50mm f/1.4 con textura de piel hiperrealista...'
  },
  {
    id: 'hook',
    title: '4. Gancho Visceral / Hook de los Primeros 3 Segundos',
    guide: '¿Qué acción visual o frase detonante detendrá el pulgar del usuario en el feed de Instagram/TikTok? Diseña el primer cuadro y la micro-expresión o frase intrigante.',
    placeholder: 'Ej: Mirada directa a cámara ajustándose el pelo diciendo: "¿Alguna vez sentiste que todo el mundo sigue un guión menos tú?..."'
  },
  {
    id: 'cta',
    title: '5. Llamado a la Acción Exacto (CTA) y Destino de Tráfico',
    guide: 'Instrucción inequívoca para la audiencia. ¿Dónde deben hacer clic y cuál es el incentivo para dar el siguiente paso? (Link en bio, comentar una palabra clave para recibir DM automatizado, unirse al canal privado, etc.).',
    placeholder: 'Ej: "Comenta \'VIP\' abajo y te mando al DM mi set privado antes de que se agoten las invitaciones."'
  },
  {
    id: 'tech_params',
    title: '6. Checklist Técnico de Render & Consistencia (LoRA, Semillas, Prompt)',
    guide: 'Parámetros técnicos acordados para el equipo de producción: peso de LoRA en ComfyUI/Flux (0.75 - 0.85), modelo de voz de ElevenLabs asociado, herramientas de animación (Kling, Hailuo o LivePortrait) y semillas de referencia.',
    placeholder: 'Ej: ComfyUI Flux con LoRA v2 a peso 0.82, prompt base con disparador facial, ElevenLabs voice ID asignado con estabilidad en 0.65...'
  }
];

function getCalibrationStorageKey(influencerId, qId) {
  return `incel_briefing_${influencerId}_${qId}`;
}

function getCalibrationAnswer(influencerId, qId) {
  try {
    return localStorage.getItem(getCalibrationStorageKey(influencerId, qId)) || '';
  } catch (e) {
    return '';
  }
}

function saveCalibrationAnswer(influencerId, qId, autoNotify = false) {
  const textarea = document.getElementById(`calib-input-${influencerId}-${qId}`);
  if (!textarea) return;
  const val = textarea.value.trim();
  try {
    localStorage.setItem(getCalibrationStorageKey(influencerId, qId), val);
  } catch (e) {
    console.error('Error saving calibration answer', e);
  }

  // Update question UI state
  const item = document.getElementById(`calib-item-${influencerId}-${qId}`);
  const badge = document.getElementById(`calib-badge-${influencerId}-${qId}`);
  if (item && badge) {
    if (val.length > 0) {
      item.classList.add('answered');
      badge.className = 'question-status-badge done';
      badge.innerHTML = '<i class="fa-solid fa-check"></i> Respondida';
    } else {
      item.classList.remove('answered');
      badge.className = 'question-status-badge pending';
      badge.innerHTML = '<i class="fa-regular fa-clock"></i> Pendiente';
    }
  }

  updateCalibrationProgress(influencerId);

  if (!autoNotify) {
    const btn = document.getElementById(`calib-btn-${influencerId}-${qId}`);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Guardado';
      setTimeout(() => { btn.innerHTML = orig; }, 1500);
    }
  }
}

function updateCalibrationProgress(influencerId) {
  let answeredCount = 0;
  defaultCalibrationQuestions.forEach(q => {
    const val = getCalibrationAnswer(influencerId, q.id);
    if (val && val.trim().length > 0) answeredCount++;
  });

  const total = defaultCalibrationQuestions.length;
  const pct = Math.round((answeredCount / total) * 100);

  const fillEl = document.getElementById(`calib-fill-${influencerId}`);
  const textEl = document.getElementById(`calib-prog-text-${influencerId}`);
  if (fillEl) fillEl.style.width = `${pct}%`;
  if (textEl) textEl.textContent = `${answeredCount}/${total} Listas (${pct}%)`;

  const tabBtn = document.getElementById('tab-btn-calib');
  if (tabBtn) {
    tabBtn.innerHTML = `<i class="fa-solid fa-clipboard-question"></i> Preguntas de Uso (${answeredCount}/${total})`;
  }
}

function toggleQuestionBody(influencerId, qId) {
  const body = document.getElementById(`calib-body-${influencerId}-${qId}`);
  const icon = document.getElementById(`calib-icon-${influencerId}-${qId}`);
  if (!body) return;
  const isHidden = body.style.display === 'none';
  body.style.display = isHidden ? 'block' : 'none';
  if (icon) {
    icon.className = isHidden ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
  }
}

function copyConsolidatedBriefing(influencerId) {
  const data = influencersData[influencerId];
  const charName = data ? data.name : influencerId;
  let text = `========================================\n`;
  text += `DOSSIER OPERATIVO & BRIEFING DE PRODUCCIÓN\n`;
  text += `PERSONAJE: ${charName.toUpperCase()}\n`;
  text += `FECHA DE GENERACIÓN: ${new Date().toLocaleDateString()}\n`;
  text += `========================================\n\n`;

  defaultCalibrationQuestions.forEach(q => {
    const ans = getCalibrationAnswer(influencerId, q.id) || '(Pendiente de respuesta por el equipo)';
    text += `[${q.title}]\n${ans}\n\n`;
  });

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById(`copy-briefing-btn-${influencerId}`);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i> ¡Briefing Copiado!';
      setTimeout(() => { btn.innerHTML = orig; }, 2200);
    }
  }).catch(() => {
    alert('Briefing copiado al portapapeles');
  });
}

function resetCalibrationQuestions(influencerId) {
  if (!confirm('¿Estás seguro de restablecer las respuestas de este briefing? Se borrarán las respuestas guardadas localmente.')) {
    return;
  }
  defaultCalibrationQuestions.forEach(q => {
    try {
      localStorage.removeItem(getCalibrationStorageKey(influencerId, q.id));
    } catch (e) {}
    const textarea = document.getElementById(`calib-input-${influencerId}-${q.id}`);
    if (textarea) textarea.value = '';
    const item = document.getElementById(`calib-item-${influencerId}-${q.id}`);
    const badge = document.getElementById(`calib-badge-${influencerId}-${q.id}`);
    if (item) item.classList.remove('answered');
    if (badge) {
      badge.className = 'question-status-badge pending';
      badge.innerHTML = '<i class="fa-regular fa-clock"></i> Pendiente';
    }
  });
  updateCalibrationProgress(influencerId);
}

// ==========================================================================
// GESTIÓN DE CONTENIDOS & PLATAFORMAS (OPERACIONES DE PRODUCCIÓN)
// ==========================================================================

const defaultPlatformCategories = [
  {
    id: "visual",
    name: "Generación Visual & Consistencia Facial",
    icon: "fa-palette",
    color: "#8b5cf6",
    platforms: [
      { id: "flux", name: "Flux.1 Dev" },
      { id: "comfy", name: "ComfyUI + LoRA" },
      { id: "mj", name: "Midjourney v6" },
      { id: "nanobanana", name: "Nano Banana Pro" },
      { id: "realesrgan", name: "RealESRGAN 4K" },
      { id: "facefusion", name: "FaceFusion / InSwapper" },
      { id: "sdxl", name: "Stable Diffusion XL" }
    ]
  },
  {
    id: "video",
    name: "Animación de Video & Lip-Sync",
    icon: "fa-film",
    color: "#06b6d4",
    platforms: [
      { id: "kling", name: "Kling 3.0" },
      { id: "minimax", name: "Hailuo / MiniMax" },
      { id: "runway", name: "Runway Gen-3" },
      { id: "heygen", name: "HeyGen LipSync" },
      { id: "liveportrait", name: "LivePortrait" },
      { id: "luma", name: "Luma Dream Machine" },
      { id: "pika", name: "Pika 2.0" }
    ]
  },
  {
    id: "audio",
    name: "Voz Sintética & Composición Musical",
    icon: "fa-waveform-lines",
    color: "#ec4899",
    platforms: [
      { id: "elevenlabs", name: "ElevenLabs Voice" },
      { id: "suno", name: "Suno v3.5 (Música)" },
      { id: "udio", name: "Udio AI (Música)" },
      { id: "adobepodcast", name: "Adobe Podcast AI" },
      { id: "descript", name: "Descript Overdub" }
    ]
  },
  {
    id: "copy",
    name: "Guionizado, Copys & Estrategia",
    icon: "fa-brain",
    color: "#f59e0b",
    platforms: [
      { id: "claude", name: "Claude 3.5 Sonnet" },
      { id: "chatgpt", name: "ChatGPT-4o" },
      { id: "gemini", name: "Gemini 1.5 Pro" },
      { id: "notion", name: "Notion Workspace" },
      { id: "perplexity", name: "Perplexity AI" }
    ]
  },
  {
    id: "post",
    name: "Edición & Postproducción",
    icon: "fa-wand-magic-sparkles",
    color: "#10b981",
    platforms: [
      { id: "capcut", name: "CapCut Pro" },
      { id: "davinci", name: "DaVinci Resolve" },
      { id: "premiere", name: "Adobe Premiere" },
      { id: "photoshop", name: "Photoshop AI" },
      { id: "aftereffects", name: "After Effects" }
    ]
  },
  {
    id: "social",
    name: "Publicación & Redes Sociales",
    icon: "fa-share-nodes",
    color: "#3b82f6",
    platforms: [
      { id: "instagram", name: "Instagram (Reels/Feed)" },
      { id: "tiktok", name: "TikTok" },
      { id: "youtube", name: "YouTube Shorts / VOD" },
      { id: "twitter", name: "Twitter / X" },
      { id: "metricool", name: "Metricool (Scheduler)" },
      { id: "buffer", name: "Buffer" }
    ]
  },
  {
    id: "monetization",
    name: "Monetización & Suscripción VIP",
    icon: "fa-hand-holding-dollar",
    color: "#eab308",
    platforms: [
      { id: "fanvue", name: "Fanvue VIP" },
      { id: "patreon", name: "Patreon" },
      { id: "onlyfans", name: "OnlyFans" },
      { id: "telegram", name: "Telegram VIP Bot" },
      { id: "substack", name: "Substack Newsletter" },
      { id: "discord", name: "Discord VIP Community" }
    ]
  }
];

const defaultInfluencerPlatforms = {
  elena: ["flux", "comfy", "elevenlabs", "claude", "capcut", "instagram", "tiktok", "fanvue"],
  julia: ["mj", "comfy", "elevenlabs", "chatgpt", "premiere", "instagram", "tiktok", "fanvue"],
  laura: ["flux", "nanobanana", "elevenlabs", "claude", "notion", "capcut", "instagram", "tiktok", "fanvue"],
  mateo: ["flux", "nanobanana", "elevenlabs", "claude", "notion", "capcut", "tiktok", "instagram", "youtube"],
  maite: ["flux", "kling", "suno", "elevenlabs", "chatgpt", "capcut", "tiktok", "instagram", "fanvue"],
  kira: ["mj", "kling", "elevenlabs", "claude", "davinci", "twitter", "youtube", "discord"],
  alejandra: ["flux", "kling", "elevenlabs", "claude", "capcut", "instagram", "linkedin"],
  alina: ["flux", "comfy", "elevenlabs", "kling", "capcut", "twitter", "instagram", "telegram", "fanvue"],
  freja: ["flux", "suno", "elevenlabs", "claude", "davinci", "youtube", "spotify", "discord"],
  nova: ["flux", "comfy", "kling", "elevenlabs", "claude", "tiktok", "instagram", "youtube"],
  minho: ["flux", "kling", "suno", "elevenlabs", "capcut", "tiktok", "instagram", "spotify"],
  damien: ["flux", "elevenlabs", "claude", "davinci", "instagram", "tiktok", "telegram"],
  camila: ["flux", "kling", "elevenlabs", "capcut", "tiktok", "instagram", "telegram", "fanvue"],
  roxie: ["flux", "kling", "elevenlabs", "capcut", "x", "instagram", "telegram", "fanvue"],
  madamev: ["flux", "elevenlabs", "claude", "davinci", "x", "tiktok", "telegram", "fanvue"],
  aura: ["flux", "kling", "elevenlabs", "capcut", "x", "instagram", "telegram", "fanvue"],
  luna: ["flux", "kling", "elevenlabs", "capcut", "x", "tiktok", "discord", "fanvue"]
};

const defaultInfluencerOpsConfig = {
  elena: {
    handle: "@elena.daddario",
    vipUrl: "https://fanvue.com/elena.daddario",
    cadence: "3 reels/sem + 1 photoshoot/sem",
    scheduler: "Metricool (Auto-pilot 18:00 CET)",
    responsible: "Daniel Santander (Alemania)",
    status: "Activo / Producción Live",
    sop: "1. Generación de base facial en Flux.1 con LoRA Elena v2.4 (peso 0.82).\n2. Scripting de micro-reflexión psicológica en Claude 3.5 Sonnet.\n3. Clonación de voz con ElevenLabs (Elena-Warm, estabilidad 0.72).\n4. Animación en Kling 3.0 con prompt de movimiento suave.\n5. Subtítulos cinemáticos en CapCut Pro y programación en Metricool."
  },
  julia: {
    handle: "@julia.cleanbeauty",
    vipUrl: "https://fanvue.com/julia.skincare",
    cadence: "4 videos/sem + 2 carruseles",
    scheduler: "Buffer (Horarios matutinos)",
    responsible: "Pancho Ipinza (Canadá)",
    status: "Activo / Producción Live",
    sop: "1. Prompt en Midjourney v6 con close-up macro de textura de piel real.\n2. Inpainting en ComfyUI para consistencia de rasgos.\n3. Síntesis de voz francesa cálida con ElevenLabs.\n4. Edición de reel de skincare en Premiere con B-roll de productos limpios.\n5. Publicación en Instagram y TikTok."
  },
  laura: {
    handle: "@laura.taeda.nutrition",
    vipUrl: "https://fanvue.com/laurataeda",
    cadence: "3 videos ciencia/sem + 1 live simulado",
    scheduler: "Metricool (13:00 y 20:00 CLT)",
    responsible: "Wladimir Gutierrez (Chile)",
    status: "Activo / Producción Live",
    sop: "1. Extracción de paper científico o metanálisis en PubMed.\n2. Prompt visual en Flux.1 Dev: Laura en cocina minimalista o consultorio moderno sosteniendo suplemento/comida.\n3. Generación de script riguroso y accesible en Claude 3.5 Sonnet.\n4. Audio sintético con acento neutro en ElevenLabs.\n5. Montaje en CapCut Pro con gráficos de datos e infografías."
  },
  mateo: {
    handle: "@mateosilva.finanzas",
    vipUrl: "https://mateosilva.gumroad.com",
    cadence: "4 videos/sem + 1 newsletter/sem",
    scheduler: "Metricool (Horario laboral 12:00 CET/EST)",
    responsible: "Daniel / Pancho (Alemania/Canadá)",
    status: "Activo / Producción Live",
    sop: "1. Selección de tip de ahorro o comparación financiera cotidiana.\n2. Render en Flux.1 Dev: Mateo en oficina minimalista o café europeo.\n3. Síntesis de voz clara y confiable en ElevenLabs.\n4. Animación en Kling 3.0 con gestos precisos y subtítulos de alto contraste.\n5. Publicación en TikTok/Reels con enlace a plantilla gratuita en bio."
  },
  maite: {
    handle: "@maite.valenzuela.musica",
    vipUrl: "https://fanvue.com/maite.valenzuela",
    cadence: "5 tiktoks/sem + 1 lanzamiento quincenal",
    scheduler: "TikTok Native + Metricool",
    responsible: "Equipo (Los Manejadores)",
    status: "Activo / Producción Live",
    sop: "1. Generación de base musical cumbia ranchera en Suno v3.5 con estribillo pegajoso.\n2. Generación fotográfica de Maite en viñedo o medialuna con sombrero blanco en Flux.1 Dev.\n3. Animación de baile y playback en Kling 3.0.\n4. Edición de teaser viral con 'trend de zapateo' para TikTok y Reels de Chile.\n5. Canal VIP Fanvue para tomas de backstage y sesiones country hot."
  },
  kira: {
    handle: "@kira.voss.gamer",
    vipUrl: "https://discord.gg/kiravoss",
    cadence: "4 videos/sem + 1 directo/sem",
    scheduler: "Metricool + TikTok Native",
    responsible: "Equipo (Los Manejadores)",
    status: "Validado / Live (Equipo)",
    sop: "1. Selección de 3 juegos indie en Steam con descuento o temática original.\n2. Render de Kira en setup gamer con iluminación neón en Flux.1.\n3. Síntesis de voz dinámica en ElevenLabs con tono gamer entusiasta.\n4. Edición rápida en CapCut con clips de gameplay de fondo.\n5. Publicación con invitación a unirse al Discord gratuito de recomendaciones."
  },
  alejandra: {
    handle: "@alejandra.b2b",
    vipUrl: "https://losmanejadores.io/#empresas",
    cadence: "Demostraciones a demanda",
    scheduler: "Manual B2B",
    responsible: "Comercial B2B (Pancho / Daniel)",
    status: "Disponible para Negocios / En Adopción",
    sop: "1. Prototipo abierto para demostraciones a marcas y empresas clientes.\n2. Personalización de vestuario corporativo y logo de marca en Flux.1.\n3. Parametrización de voz corporativa a medida en ElevenLabs."
  },
  alina: {
    handle: "@alina.mindcontrol",
    vipUrl: "https://fanvue.com/alinavandijk",
    cadence: "3 teasers SFW/sem + 2 audios VIP/sem",
    scheduler: "Metricool + Telegram Scheduled",
    responsible: "Equipo (Submarca Adulto VIP)",
    status: "Listo • Live (Adulto VIP)",
    sop: "1. Generación de retratos sensuales y boudoir en Flux.1 Dev con LoRA Alina Van Dijk.\n2. Scripting de reflexiones sex-positive y dominación psicológica en Claude 3.5 Sonnet.\n3. Grabación de audios binaurales susurrados íntimos en ElevenLabs.\n4. Publicación de contenido SFW en Twitter/X e Instagram con enlace a Telegram VIP.\n5. Conversión a Fanvue para membresía mensual y mensajes PPV personalizados."
  },
  freja: {
    handle: "@freja.valkyrie",
    vipUrl: "https://frejalindholm.store",
    cadence: "2 suites orquestales/sem + 1 video lore Arcano/sem",
    scheduler: "Metricool + YouTube Studio",
    responsible: "Equipo (Producción Sonora / El Gran Arcano)",
    status: "Listo • Live (Música & Fantasía)",
    sop: "1. Composición de base coral épica en Suno v3.5 y Udio con stems orquestales.\n2. Render de Freja en estudio analógico o paisaje nórdico en Flux.1 Dev con Valhalla LoRA.\n3. Síntesis de voz lírica/narrativa en ElevenLabs (Freja Soprano).\n4. Montaje cinemático en DaVinci Resolve integrando elementos del universo de El Gran Arcano.\n5. Publicación en YouTube/Spotify y subida de stems 24-bit al Audio Vault de la tienda."
  },
  nova: {
    handle: "@nova.unit01",
    vipUrl: "https://unit-nova.io",
    cadence: "3 vlogs urbanos/sem + 1 análisis de hardware/sem",
    scheduler: "Metricool + TikTok Native",
    responsible: "Equipo (Robótica & Cultura Tech)",
    status: "Listo • Live (Tech)",
    sop: "1. Generación de tomas hiperrealistas de Nova en calles de Shanghái en Flux.1 con Real-Robotics LoRA.\n2. Scripting de reflexiones tecno-filosóficas sobre la humanidad en Claude 3.5 Sonnet.\n3. Síntesis de voz sintética suave y precisa en ElevenLabs (Nova-Synth).\n4. Animación de gestos y movimientos mecánicos calculados en Kling 3.0.\n5. Publicación en TikTok/Instagram y gestión de propuestas de patrocinios con marcas de hardware."
  }
};

function getInfluencerPlatforms(influencerId) {
  try {
    const raw = localStorage.getItem(`incel_platforms_${influencerId}`);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return defaultInfluencerPlatforms[influencerId] ? [...defaultInfluencerPlatforms[influencerId]] : [];
}

function saveInfluencerPlatforms(influencerId, platformsList) {
  try {
    localStorage.setItem(`incel_platforms_${influencerId}`, JSON.stringify(platformsList));
  } catch (e) {
    console.error('Error saving platforms', e);
  }
}

function toggleInfluencerPlatform(influencerId, platformId) {
  const current = getInfluencerPlatforms(influencerId);
  const idx = current.indexOf(platformId);
  if (idx > -1) {
    current.splice(idx, 1);
  } else {
    current.push(platformId);
  }
  saveInfluencerPlatforms(influencerId, current);

  // Update chip class in UI
  const chipEl = document.getElementById(`plat-chip-${influencerId}-${platformId}`);
  if (chipEl) {
    if (current.includes(platformId)) {
      chipEl.classList.add('active');
      const icon = chipEl.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-check-circle';
    } else {
      chipEl.classList.remove('active');
      const icon = chipEl.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-circle-plus';
    }
  }

  // Update KPI badge
  const kpiEl = document.getElementById(`plat-kpi-${influencerId}`);
  if (kpiEl) {
    kpiEl.innerHTML = `<i class="fa-solid fa-layer-group"></i> ${current.length} Plataformas Activas`;
  }
}

function addCustomPlatform(influencerId) {
  const inputEl = document.getElementById(`new-platform-input-${influencerId}`);
  if (!inputEl) return;
  const name = inputEl.value.trim();
  if (!name) return;

  const slug = 'custom_' + name.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const current = getInfluencerPlatforms(influencerId);
  if (!current.includes(slug)) {
    current.push(slug);
    saveInfluencerPlatforms(influencerId, current);
  }

  inputEl.value = '';
  renderPlatformsChips(influencerId);
}

function getInfluencerOpsConfig(influencerId) {
  try {
    const raw = localStorage.getItem(`incel_ops_config_${influencerId}`);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return defaultInfluencerOpsConfig[influencerId] || {
    handle: `@${influencerId}.official`,
    vipUrl: `https://fanvue.com/${influencerId}`,
    cadence: '3 publicaciones/semana',
    scheduler: 'Metricool',
    responsible: 'Equipo Los Manejadores',
    status: 'Activo / Producción Live',
    sop: '1. Definición de concepto y guión en LLM.\n2. Generación visual y consistencia de rasgos.\n3. Generación de voz y animación.\n4. Postproducción y subtítulos.\n5. Programación en redes y canal VIP.'
  };
}

function saveInfluencerOpsConfig(influencerId, showNotice = false) {
  const handle = document.getElementById(`plat-handle-${influencerId}`)?.value || '';
  const vipUrl = document.getElementById(`plat-vip-${influencerId}`)?.value || '';
  const cadence = document.getElementById(`plat-cadence-${influencerId}`)?.value || '';
  const scheduler = document.getElementById(`plat-scheduler-${influencerId}`)?.value || '';
  const responsible = document.getElementById(`plat-resp-${influencerId}`)?.value || '';
  const status = document.getElementById(`plat-status-${influencerId}`)?.value || '';
  const sop = document.getElementById(`plat-sop-${influencerId}`)?.value || '';

  const config = { handle, vipUrl, cadence, scheduler, responsible, status, sop };
  try {
    localStorage.setItem(`incel_ops_config_${influencerId}`, JSON.stringify(config));
  } catch (e) {
    console.error('Error saving ops config', e);
  }

  if (showNotice) {
    const btn = document.getElementById(`plat-save-btn-${influencerId}`);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i> ¡Configuración Guardada!';
      setTimeout(() => { btn.innerHTML = orig; }, 1800);
    }
  }
}

function copyPlatformsSummary(influencerId) {
  const data = influencersData[influencerId];
  const charName = data ? data.name : influencerId;
  const platforms = getInfluencerPlatforms(influencerId);
  const ops = getInfluencerOpsConfig(influencerId);

  // Map platform IDs to human-readable names
  const allNames = {};
  defaultPlatformCategories.forEach(cat => {
    cat.platforms.forEach(p => { allNames[p.id] = p.name; });
  });

  const readablePlatforms = platforms.map(id => {
    if (allNames[id]) return allNames[id];
    if (id.startsWith('custom_')) return id.replace('custom_', '').replace(/_/g, ' ');
    return id;
  });

  let text = `========================================\n`;
  text += `FICHA TÉCNICA DE PRODUCCIÓN & PLATAFORMAS\n`;
  text += `PERSONAJE: ${charName.toUpperCase()}\n`;
  text += `RESPONSABLE: ${ops.responsible || 'No asignado'}\n`;
  text += `ESTADO: ${ops.status || 'En producción'}\n`;
  text += `HANDLE / RED: ${ops.handle || 'N/A'}\n`;
  text += `CANAL VIP: ${ops.vipUrl || 'N/A'}\n`;
  text += `CADENCIA: ${ops.cadence || 'N/A'}\n`;
  text += `SCHEDULER: ${ops.scheduler || 'N/A'}\n`;
  text += `========================================\n\n`;
  text += `[PLATAFORMAS Y HERRAMIENTAS ACTIVAS]\n`;
  text += readablePlatforms.map(p => `• ${p}`).join('\n') + `\n\n`;
  text += `[FLUJO DE TRABAJO OPERATIVO (SOP)]\n`;
  text += (ops.sop || 'No definido aún') + `\n`;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById(`plat-copy-btn-${influencerId}`);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i> ¡Ficha Copiada!';
      setTimeout(() => { btn.innerHTML = orig; }, 2000);
    }
  }).catch(() => {
    alert('Ficha de plataformas copiada al portapapeles');
  });
}

function renderPlatformsChips(influencerId) {
  const container = document.getElementById(`platform-categories-container-${influencerId}`);
  if (!container) return;

  const activePlatforms = getInfluencerPlatforms(influencerId);
  const customSlugs = activePlatforms.filter(id => id.startsWith('custom_'));

  let html = defaultPlatformCategories.map(cat => {
    const chipsHtml = cat.platforms.map(p => {
      const isActive = activePlatforms.includes(p.id);
      return `
        <span 
          class="platform-chip ${isActive ? 'active' : ''}" 
          id="plat-chip-${influencerId}-${p.id}"
          onclick="toggleInfluencerPlatform('${influencerId}', '${p.id}')"
        >
          <i class="fa-solid ${isActive ? 'fa-check-circle' : 'fa-circle-plus'}"></i>
          ${p.name}
        </span>
      `;
    }).join('');

    return `
      <div class="platform-cat-box">
        <div class="platform-cat-header">
          <div class="platform-cat-icon" style="background: ${cat.color}22; color: ${cat.color};">
            <i class="fa-solid ${cat.icon}"></i>
          </div>
          <span class="platform-cat-title">${cat.name}</span>
        </div>
        <div class="platform-chips-container">
          ${chipsHtml}
        </div>
      </div>
    `;
  }).join('');

  if (customSlugs.length > 0) {
    const customChipsHtml = customSlugs.map(slug => {
      const displayName = slug.replace('custom_', '').replace(/_/g, ' ');
      return `
        <span 
          class="platform-chip active" 
          id="plat-chip-${influencerId}-${slug}"
          onclick="toggleInfluencerPlatform('${influencerId}', '${slug}')"
        >
          <i class="fa-solid fa-check-circle"></i>
          ${displayName}
        </span>
      `;
    }).join('');

    html += `
      <div class="platform-cat-box" style="border-color: rgba(6, 182, 212, 0.4);">
        <div class="platform-cat-header">
          <div class="platform-cat-icon" style="background: rgba(6, 182, 212, 0.2); color: var(--cyan);">
            <i class="fa-solid fa-plus-circle"></i>
          </div>
          <span class="platform-cat-title">Herramientas Personalizadas</span>
        </div>
        <div class="platform-chips-container">
          ${customChipsHtml}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;

  const kpiEl = document.getElementById(`plat-kpi-${influencerId}`);
  if (kpiEl) {
    kpiEl.innerHTML = `<i class="fa-solid fa-layer-group"></i> ${activePlatforms.length} Plataformas Activas`;
  }
}

// --- VIEW MODE MANAGEMENT & COMMERCIAL INFLUENCER SHOWCASE ---
let currentInfluencerMode = 'product';

function setInfluencerViewMode(id, mode) {
  currentInfluencerMode = mode;
  if (mode === 'cockpit') {
    if (!isTeamAuthenticated()) {
      openAuthModal('influencer-cockpit:' + id);
      return;
    }
  }
  renderInfluencerPage(id, mode);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function requestCockpitAccess(id) {
  openAuthModal('influencer-cockpit:' + id);
}

// ROUTER DISPATCHER FOR INFLUENCER PAGE
function renderInfluencerPage(id, mode = 'product') {
  currentInfluencerMode = mode;
  const cleanId = (id || '').toLowerCase().trim().replace(/\/$/, '');
  if (mode === 'cockpit') {
    if (!isTeamAuthenticated()) {
      openAuthModal('influencer-cockpit:' + cleanId);
      return;
    }
    renderInfluencerCockpit(cleanId);
  } else {
    renderInfluencerPublicProduct(cleanId);
  }
}

// 1. PUBLIC PRODUCT SHOWROOM (SHOWCASING IA QUALITY, CONSISTENCY, LORE & SERVICES)
function renderInfluencerPublicProduct(id) {
  const cleanId = (id || '').toLowerCase().trim().replace(/\/$/, '');
  const data = influencersData[cleanId] || influencersData[id];
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  if (!data) {
    container.innerHTML = `
      <div style="padding: 4rem 1.5rem; text-align: center; max-width: 600px; margin: 0 auto;">
        <i class="fa-solid fa-user-slash" style="font-size: 3rem; color: var(--pink); margin-bottom: 1rem; opacity: 0.8;"></i>
        <h2 style="font-family: var(--font-heading); color: #fff; margin-bottom: 0.75rem;">Influencer no encontrado</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.75rem;">
          Si acabas de acceder tras una actualización del sistema, tu navegador puede tener una versión anterior en memoria caché. Haz clic en "Recargar" para cargar los datos más recientes.
        </p>
        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
          <button onclick="window.location.reload(true)" class="btn btn-secondary">
            <i class="fa-solid fa-rotate-right"></i> Recargar Página
          </button>
          <a href="#roster" class="btn btn-primary">
            <i class="fa-solid fa-users"></i> Volver al Catálogo
          </a>
        </div>
      </div>
    `;
    return;
  }

  const roi = data.roi || { defaultFollowers: 50000, defaultConversion: 1.5, defaultTicket: 14 };
  const authenticated = isTeamAuthenticated();

  container.innerHTML = `
    <div class="breadcrumb-bar" style="margin-bottom: 1.25rem;">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <a href="#roster">Catálogo de Influencers IA</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">${data.name}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <a href="#roster" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Catálogo</a>
        ${authenticated ? `
          <div class="influencer-mode-toggle">
            <button class="mode-btn active" title="Ficha comercial visible para marcas y clientes"><i class="fa-solid fa-eye"></i> Ficha Producto</button>
            <button class="mode-btn" onclick="setInfluencerViewMode('${data.id}', 'cockpit')" title="Cockpit operativo privado de producción (SOP, Prompts y Briefing)"><i class="fa-solid fa-sliders"></i> Cockpit Operativo 🔒</button>
          </div>
        ` : `
          <button class="btn btn-secondary btn-sm" onclick="requestCockpitAccess('${data.id}')" style="font-size: 0.76rem; border-color: rgba(255,255,255,0.15); opacity: 0.75;" title="Área confidencial para miembros del equipo de Los Manejadores">
            <i class="fa-solid fa-lock"></i> Acceso Equipo
          </button>
        `}
      </div>
    </div>

    <div class="product-showcase-container">
      
      <!-- 1. Hero Showcase Banner -->
      <div class="product-hero-banner">
        <div class="product-badge-strip">
          <span class="product-pill product-pill-purple"><i class="fa-solid fa-gem"></i> Activo Digital Certificado</span>
          <span class="product-pill product-pill-cyan"><i class="fa-solid fa-fingerprint"></i> 100% Rostro Sintético IA</span>
          <span class="product-pill product-pill-green"><i class="fa-solid fa-shield-halved"></i> Libre de Derechos de Terceros</span>
        </div>
        <h1 class="product-title">${data.name}</h1>
        <div class="product-niche-lead"><i class="fa-solid fa-tag"></i> ${data.niche}</div>
        <p class="product-tagline">${data.tagline || data.bio}</p>

        <div class="product-hero-actions">
          <button class="btn btn-primary" onclick="openBrandInquiryModal('${data.id}')">
            <i class="fa-solid fa-handshake"></i> Solicitar Colaboración de Marca / Cotizar
          </button>
          <a href="#empresas" class="btn btn-secondary">
            <i class="fa-solid fa-microchip"></i> Conocer Nuestro Pipeline I+D
          </a>
          <button class="btn btn-secondary" onclick="alert('Conexión con pasarela VIP iniciada para ${data.name}')" style="border-color: rgba(236, 72, 153, 0.4);">
            <i class="fa-solid fa-star" style="color: var(--pink);"></i> Suscripción VIP ($${roi.defaultTicket}/mes)
          </button>
        </div>
      </div>

      <!-- 2. Two-Column Main Stage -->
      <div class="product-grid">

        <!-- LEFT COLUMN: Master Visual Portrait, Voice & Consistency Proof -->
        <div class="product-left-col">
          
          <!-- Master Portrait Card -->
          <div class="product-portrait-card">
            <img src="${data.avatar}" alt="${data.name}" class="product-portrait-img">
            <div class="product-portrait-overlay">
              <span class="product-portrait-badge">
                <i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Consistencia LoRA >98.8%
              </span>
              <span class="product-portrait-badge">
                <i class="fa-solid fa-camera" style="color: var(--cyan);"></i> Master 4K Ultra Fotorrealista
              </span>
            </div>
          </div>

          <!-- Official Voice Sample Component -->
          ${data.voice ? `
            <div class="cockpit-voice-box" id="voice-card-${data.id}" style="margin-bottom: 1.75rem;">
              <div class="voice-header" style="margin-bottom: 0.5rem;">
                <div class="voice-title" style="font-size: 0.88rem; font-weight: 600;">
                  <i class="fa-solid fa-microphone-lines" style="color: var(--cyan);"></i>
                  <span>Escuchar Voz Oficial del Personaje</span>
                </div>
                <span class="voice-badge" style="font-size: 0.68rem; padding: 0.2rem 0.5rem;">${data.voice.badge}</span>
              </div>
              <div class="voice-controls-row" style="margin-bottom: 0.6rem;">
                <button class="voice-play-btn" id="voice-btn-${data.id}" onclick="toggleVoicePlayback('${data.id}')" title="Reproducir voz" style="width: 36px; height: 36px; font-size: 0.85rem; flex-shrink: 0;">
                  <i class="fa-solid fa-play"></i>
                </button>
                <div class="voice-equalizer" style="height: 18px; gap: 2px;">
                  <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
                  <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
                  <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
                </div>
                <div class="voice-time-display" id="voice-time-${data.id}" style="font-size: 0.78rem;">0:00 / ${data.voice.duration}</div>
              </div>
              <div class="voice-transcript" style="font-size: 0.82rem; max-height: 80px; overflow-y: auto; line-height: 1.45; padding: 0.65rem 0.85rem; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border-glass);">
                <i class="fa-solid fa-quote-left" style="color: var(--purple); margin-right: 0.35rem;"></i>
                ${data.voice.transcript}
              </div>
            </div>
          ` : ''}

          
          <!-- Pista Musical Oficial (El Caldero de Freja) -->
          ${data.featuredTrack ? `
            <div class="product-voice-card" style="margin-top: 0.85rem; border-color: rgba(255, 42, 133, 0.4); background: linear-gradient(135deg, rgba(255,42,133,0.08) 0%, rgba(157,78,221,0.08) 100%); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
              <div class="voice-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.45rem;">
                <div class="voice-title" style="font-size: 0.85rem; font-weight: 700; color: #ff70a6; display: flex; align-items: center; gap: 0.4rem;">
                  <i class="fa-solid fa-compact-disc" style="color: #00f5d4;"></i>
                  <span>${data.featuredTrack.title}</span>
                </div>
                <span class="voice-badge" style="font-size: 0.68rem; padding: 0.2rem 0.5rem; background: rgba(0,245,212,0.15); color: #00f5d4; border: 1px solid rgba(0,245,212,0.3); border-radius: 9999px; font-family: monospace;">${data.featuredTrack.scale}</span>
              </div>
              
              <div style="font-size: 0.78rem; color: var(--text-dim); margin-bottom: 0.6rem; line-height: 1.4;">
                ${data.featuredTrack.description}
              </div>

              <!-- Reproductor Nativo de Audio -->
              <audio controls preload="none" style="width: 100%; height: 34px; border-radius: 8px; margin-bottom: 0.5rem;">
                <source src="${data.featuredTrack.audioUrl}" type="audio/mp4">
                <source src="${data.featuredTrack.wavUrl}" type="audio/wav">
              </audio>

              <div style="display: flex; gap: 0.5rem; align-items: center; justify-content: flex-end; flex-wrap: wrap;">
                <span style="font-size: 0.72rem; color: var(--text-dim);"><i class="fa-solid fa-compact-disc"></i> Producción en Suite Externa (/Documents/Produccion_Musical/)</span>
              </div>
            </div>
          ` : ''}

          <!-- Consistency Lookbook Gallery -->
          ${data.gallery && data.gallery.length > 0 ? `
            <div class="product-lookbook-section">
              <h4 class="product-section-title">
                <i class="fa-solid fa-images" style="color: var(--cyan);"></i> Lookbook de Consistencia Fotográfica
              </h4>
              <p class="product-section-subtitle">
                Preservación facial idéntica en estudio, exteriores y situaciones dinámicas (haz clic para ampliar):
              </p>
              <div class="product-gallery-grid">
                ${data.gallery.map(g => `
                  <div class="product-gallery-thumb-card" onclick="openPhotoLightbox('${g.img}', '${g.label.replace(/'/g, "\\'")}', '${g.desc.replace(/'/g, "\\'")}')" title="${g.label}">
                    <img src="${g.img}" alt="${g.label}" loading="lazy">
                    <div class="product-gallery-thumb-label">${g.label}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Quality Guarantees Card (Positioning Los Manejadores) -->
          <div class="product-guarantees-card">
            <h4 class="product-section-title" style="margin-bottom: 1rem;">
              <i class="fa-solid fa-award" style="color: var(--purple);"></i> Estándar de Producción Los Manejadores
            </h4>
            
            <div class="guarantee-item">
              <div class="guarantee-icon"><i class="fa-solid fa-sparkles"></i></div>
              <div class="guarantee-text">
                <h5>Microtextura & Piel Orgánica</h5>
                <p>Poros, luminosidad natural y emulación óptica de lentes fotográficos (Leica / Hasselblad). Cero aspecto de dibujo o plástico.</p>
              </div>
            </div>

            <div class="guarantee-item">
              <div class="guarantee-icon"><i class="fa-solid fa-scale-balanced"></i></div>
              <div class="guarantee-text">
                <h5>Seguridad Jurídica 100%</h5>
                <p>Generados puramente mediante difusión matemática. Sin clonación de personas reales ni riesgos de litigio por derechos de imagen.</p>
              </div>
            </div>

            <div class="guarantee-item">
              <div class="guarantee-icon"><i class="fa-solid fa-bolt"></i></div>
              <div class="guarantee-text">
                <h5>Producción Ágil sin Rodajes</h5>
                <p>Entregas de campañas en 24 a 48 horas sin retrasos meteorológicos, agencias tradicionales de modelos ni costes de set.</p>
              </div>
            </div>

            <div class="guarantee-item">
              <div class="guarantee-icon"><i class="fa-solid fa-language"></i></div>
              <div class="guarantee-text">
                <h5>Multilingüe & LipSync Nativo</h5>
                <p>Capacidad de hablar español regional, inglés y otros idiomas con inflexión perfecta y sincronización labial para video.</p>
              </div>
            </div>
          </div>

        </div>

        <!-- RIGHT COLUMN: Story Lore, Audience, Posts & Brand Services -->
        <div class="product-right-col">
          
          <!-- Story & Narrative Lore Card -->
          <div class="product-lore-card">
            <h3 style="font-family: var(--font-heading); font-size: 1.35rem; color: #fff; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-book-open" style="color: var(--purple);"></i> Historia & Universo Narrativo
            </h3>
            <p class="product-lore-text">
              ${data.story || data.bio}
            </p>
            <div style="padding: 0.85rem 1.15rem; background: rgba(139, 92, 246, 0.08); border-left: 3px solid var(--purple); border-radius: 4px; font-style: italic; color: #e2e8f0; font-size: 0.92rem; line-height: 1.55;">
              "${data.bio}"
            </div>
          </div>

          <!-- Demographic Specs Grid -->
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; color: #fff; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-users" style="color: var(--cyan);"></i> Perfil de Audiencia & Alcance
          </h3>
          <div class="product-specs-grid">
            <div class="product-spec-box">
              <div class="product-spec-lbl"><i class="fa-solid fa-masks-theater"></i> Arquetipo Psicológico</div>
              <div class="product-spec-val">${data.archetype}</div>
            </div>
            <div class="product-spec-box">
              <div class="product-spec-lbl"><i class="fa-solid fa-bullseye"></i> Audiencia Objetivo</div>
              <div class="product-spec-val">${data.targetAudience}</div>
            </div>
            <div class="product-spec-box">
              <div class="product-spec-lbl"><i class="fa-solid fa-share-nodes"></i> Canales de Difusión</div>
              <div class="product-spec-val">${data.channels}</div>
            </div>
            <div class="product-spec-box">
              <div class="product-spec-lbl"><i class="fa-solid fa-earth-americas"></i> Mercados Clave</div>
              <div class="product-spec-val">${data.keyMarkets || 'Hispanoamérica & Mercado Global'}</div>
            </div>
          </div>

          <!-- Social Media Content Mockup -->
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; color: #fff; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-hashtag" style="color: var(--pink);"></i> Muestra de Contenido & Engagement
          </h3>
          <div style="margin-bottom: 2rem;">
            ${data.posts && data.posts.length > 0 ? data.posts.map(post => `
              <div class="social-mockup-card" style="margin-bottom: 1rem;">
                <div class="social-header">
                  <img src="${data.avatar}" alt="${data.name}" class="social-avatar">
                  <div class="social-author-info">
                    <span class="social-author-name">${data.name} <i class="fa-solid fa-circle-check" style="color: var(--cyan);"></i></span>
                    <span class="social-handle">@${data.id}.official • ${post.platform}</span>
                  </div>
                </div>
                <div class="social-caption">${post.caption}</div>
                ${post.img ? `
                  <div style="margin: 0.85rem 0; border-radius: 8px; overflow: hidden; background: #000; text-align: center;">
                    <img src="${post.img}" alt="Publicación" style="width: 100%; max-height: 480px; object-fit: contain; display: block; margin: 0 auto; border-radius: 8px;">
                  </div>
                ` : ''}
                <div class="social-stats">
                  <span><i class="fa-regular fa-heart" style="color: var(--pink);"></i> ${post.likes} Me gusta</span>
                  <span><i class="fa-regular fa-comment" style="color: var(--cyan);"></i> ${post.comments} Comentarios</span>
                  <span><i class="fa-regular fa-clock"></i> ${post.date}</span>
                </div>
              </div>
            `).join('') : '<p style="color: var(--text-muted);">Sin publicaciones de muestra registradas.</p>'}
          </div>

          <!-- Commercial Services for Brands -->
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; color: #fff; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-briefcase" style="color: #10b981;"></i> Oportunidades Comerciales para Marcas
          </h3>
          <div class="product-services-grid">
            <div class="product-service-item">
              <div class="service-item-icon"><i class="fa-solid fa-camera-retro"></i></div>
              <h4 class="service-item-title">Patrocinio & Product Placement</h4>
              <p class="service-item-desc">Integración nativa y verosímil de tus productos en publicaciones de feed, reels o historias de su rutina diaria.</p>
            </div>

            <div class="product-service-item">
              <div class="service-item-icon" style="color: #f59e0b;"><i class="fa-solid fa-crown"></i></div>
              <h4 class="service-item-title">Embajadora Virtual de Marca</h4>
              <p class="service-item-desc">Acuerdos de 3 a 12 meses como rostro oficial digital de tu empresa en eventos, lanzamientos y medios online.</p>
            </div>

            <div class="product-service-item">
              <div class="service-item-icon" style="color: var(--pink);"><i class="fa-solid fa-play"></i></div>
              <h4 class="service-item-title">Creatividades UGC para Ads</h4>
              <p class="service-item-desc">Videos cortos verticales con ganchos psicológicos validados para optimizar el coste por adquisición en Meta y TikTok Ads.</p>
            </div>

            <div class="product-service-item">
              <div class="service-item-icon" style="color: var(--purple);"><i class="fa-solid fa-key"></i></div>
              <h4 class="service-item-title">Licenciamiento Exclusivo</h4>
              <p class="service-item-desc">Derechos de explotación exclusivos para tu sector o territorio, o adquisición del activo con entrega de LoRAs y prompts.</p>
            </div>
          </div>

          <!-- Pilot Episode Showcase: Guión del Video Piloto Oficial -->
          ${data.pilotScript ? `
            <div class="glass-card" style="margin-top: 2rem; border-color: rgba(236, 72, 153, 0.45); background: radial-gradient(circle at top right, rgba(236, 72, 153, 0.12) 0%, rgba(10, 12, 22, 0.95) 100%); padding: 1.75rem; border-radius: var(--radius-lg); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
                <div>
                  <span class="product-tag" style="background: rgba(236, 72, 153, 0.15); color: #ec4899; border-color: rgba(236, 72, 153, 0.4);">
                    <i class="fa-solid fa-clapperboard"></i> Pre-Producción Oficial • Video Piloto / Primer Episodio
                  </span>
                  <h3 style="font-family: var(--font-heading); font-size: 1.35rem; color: #fff; margin: 0.35rem 0;">
                    ${data.pilotScript.title}
                  </h3>
                  <div style="font-size: 0.85rem; color: #cbd5e1; max-width: 650px;">
                    ${data.pilotScript.objective}
                  </div>
                </div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                  <button class="btn btn-primary btn-sm" onclick="copyFullPilotScript('${data.id}')" style="background: linear-gradient(135deg, #ec4899, #8b5cf6);">
                    <i class="fa-solid fa-copy"></i> Copiar Guión Completo
                  </button>
                  <button class="btn btn-secondary btn-sm" onclick="copyPilotKlingPrompts('${data.id}')">
                    <i class="fa-solid fa-video"></i> Copiar Prompts Kling 3.0
                  </button>
                </div>
              </div>

              <!-- Metadata Pills -->
              <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.25rem; font-size: 0.82rem; padding: 0.75rem 1rem; background: rgba(0,0,0,0.3); border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
                <div><strong style="color: var(--cyan);"><i class="fa-solid fa-clock"></i> Duración:</strong> ${data.pilotScript.duration}</div>
                <div><strong style="color: #ec4899;"><i class="fa-solid fa-mobile-screen"></i> Formato:</strong> ${data.pilotScript.format}</div>
                <div><strong style="color: #f59e0b;"><i class="fa-solid fa-music"></i> Audio Track:</strong> ${data.pilotScript.musicTrack}</div>
              </div>

              <!-- Scenes Grid -->
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
                ${data.pilotScript.scenes.map(s => `
                  <div style="background: rgba(18, 20, 36, 0.75); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); padding: 1.15rem; display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <span style="background: linear-gradient(135deg, #ec4899, #8b5cf6); color: #fff; font-weight: 800; font-size: 0.72rem; padding: 0.2rem 0.5rem; border-radius: 4px;">ESCENA ${s.num}</span>
                        <span style="color: var(--cyan); font-family: monospace; font-size: 0.78rem;"><i class="fa-regular fa-clock"></i> ${s.time}</span>
                      </div>
                      <h4 style="color: #fff; font-size: 0.92rem; margin-bottom: 0.4rem;">${s.name}</h4>
                      <p style="font-size: 0.78rem; color: #94a3b8; line-height: 1.4; margin-bottom: 0.6rem;">${s.visual}</p>
                    </div>

                    <div style="border-top: 1px solid var(--border-glass); padding-top: 0.6rem; margin-top: 0.4rem;">
                      <div style="color: #ec4899; font-size: 0.75rem; font-weight: 700; margin-bottom: 0.2rem;"><i class="fa-solid fa-microphone-lines"></i> Locución:</div>
                      <div style="color: #f1f5f9; font-size: 0.78rem; font-style: italic; line-height: 1.35; margin-bottom: 0.4rem;">${s.voice}</div>
                      <div style="color: var(--cyan); font-size: 0.72rem;"><strong>Texto:</strong> «${s.overlayText}»</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- E-Commerce Showcase: Productos y Estrategias de Venta Directa -->
          ${data.ecommerce ? `
            <div class="ecommerce-showcase-card">
              <div class="ecommerce-showcase-header">
                <div>
                  <span class="product-tag" style="background: rgba(16, 185, 129, 0.15); color: var(--green); border-color: rgba(16, 185, 129, 0.4);">
                    <i class="fa-solid fa-cart-shopping"></i> Estrategia de Venta Directa & E-Commerce
                  </span>
                  <h3 style="font-family: var(--font-heading); font-size: 1.35rem; color: #fff; margin: 0.35rem 0;">
                    ${data.ecommerce.storeName}
                  </h3>
                  <div style="font-size: 0.85rem; color: var(--cyan);"><i class="fa-solid fa-store"></i> ${data.ecommerce.storeType}</div>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="openBrandInquiryModal('${data.id}')" style="border-color: rgba(16, 185, 129, 0.4); color: var(--green);">
                  <i class="fa-solid fa-bag-shopping"></i> Vender mis Productos con ${data.name}
                </button>
              </div>

              <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.5rem;">
                ${data.ecommerce.description}
              </p>

              <!-- Métricas Clave de E-Commerce -->
              <div class="ecommerce-metrics-row">
                <div class="ecommerce-metric-item">
                  <span class="ecommerce-metric-lbl">Ticket Promedio (AOV)</span>
                  <span class="ecommerce-metric-val">${data.ecommerce.avgOrderValue}</span>
                </div>
                <div class="ecommerce-metric-item">
                  <span class="ecommerce-metric-lbl">Margen Bruto de Producto</span>
                  <span class="ecommerce-metric-val" style="color: #10b981;">${data.ecommerce.grossMargin}</span>
                </div>
                <div class="ecommerce-metric-item">
                  <span class="ecommerce-metric-lbl">Tasa de Conversión Web</span>
                  <span class="ecommerce-metric-val" style="color: #a78bfa;">${data.ecommerce.conversionRate}</span>
                </div>
                <div class="ecommerce-metric-item">
                  <span class="ecommerce-metric-lbl">Logística & Fulfillment</span>
                  <span style="font-size: 0.82rem; color: #fff; font-weight: 600; margin-top: 0.4rem;">${data.ecommerce.fulfillment}</span>
                </div>
              </div>

              <!-- Catálogo de Productos Vendidos -->
              <h4 style="font-family: var(--font-heading); font-size: 1.05rem; color: #fff; margin-bottom: 1rem;">
                <i class="fa-solid fa-box-open" style="color: var(--purple);"></i> Catálogo de Productos & Volumen de Venta
              </h4>
              <div class="ecommerce-products-grid">
                ${data.ecommerce.products.map(p => `
                  <div class="ecommerce-product-card">
                    <div>
                      <div class="product-tag">${p.tag} • ${p.category}</div>
                      <h5 style="color: #fff; font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem;">${p.name}</h5>
                      <div style="font-size: 0.78rem; color: var(--cyan);"><i class="fa-solid fa-fire"></i> Volumen: ${p.salesVolume}</div>
                    </div>
                    <div class="product-price-row">
                      <div class="product-price">${p.price}</div>
                      <div class="product-cost">Costo fab: ${p.cost}</div>
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Arquitectura del Embudo -->
              <h4 style="font-family: var(--font-heading); font-size: 1.05rem; color: #fff; margin-bottom: 0.5rem;">
                <i class="fa-solid fa-diagram-next" style="color: var(--cyan);"></i> Embudo de Conversión & Tráfico a Tienda
              </h4>
              <div class="funnel-flow-diagram">
                <span class="funnel-step-node"><i class="fa-solid fa-video"></i> Contenido Orgánico / Shorts</span>
                <i class="fa-solid fa-arrow-right" style="color: var(--text-muted); font-size: 0.75rem;"></i>
                <span class="funnel-step-node"><i class="fa-solid fa-gift"></i> Lead Magnet / Descuento</span>
                <i class="fa-solid fa-arrow-right" style="color: var(--text-muted); font-size: 0.75rem;"></i>
                <span class="funnel-step-node" style="background: rgba(16, 185, 129, 0.15); color: #10b981;"><i class="fa-solid fa-bag-shopping"></i> Checkout Shopify</span>
                <i class="fa-solid fa-arrow-right" style="color: var(--text-muted); font-size: 0.75rem;"></i>
                <span class="funnel-step-node" style="background: rgba(6, 182, 212, 0.15); color: #38bdf8;"><i class="fa-solid fa-repeat"></i> Recompra por Email</span>
              </div>
              <p style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.75rem; font-style: italic;">
                Estrategia: ${data.ecommerce.funnelStrategy}
              </p>
            </div>
          ` : ''}

          <!-- CTA Conversion Box -->
          <div class="product-cta-card">
            <h4 style="font-family: var(--font-heading); font-size: 1.35rem; color: #fff; margin-bottom: 0.45rem;">
              ¿Quieres a ${data.name} como imagen de tu marca?
            </h4>
            <p style="color: var(--text-muted); font-size: 0.88rem; max-width: 520px; margin: 0 auto 1.25rem auto;">
              Diseñamos una propuesta personalizada con cronograma y tarifas de producción en menos de 24 horas.
            </p>
            <button class="btn btn-primary" onclick="openBrandInquiryModal('${data.id}')" style="padding: 0.75rem 2rem; font-size: 1rem;">
              <i class="fa-solid fa-envelope-open-text"></i> Solicitar Propuesta Comercial & Tarifas
            </button>
          </div>

        </div>

      </div>

    </div>
  `;
}

// 2. MODAL & LIGHTBOX HANDLERS
function openBrandInquiryModal(influencerId) {
  const modal = document.getElementById('brand-inquiry-modal');
  let displayName = 'Influencer IA';
  if (influencerId === 'custom-ceo-clone') {
    displayName = 'Servicio: Clon Digital de Video para CEO / Fundador';
  } else if (influencerId === 'custom-ecommerce-model') {
    displayName = 'Servicio: Modelo IA Exclusiva para E-Commerce & Marcas';
  } else if (influencersData[influencerId]) {
    const inf = influencersData[influencerId];
    displayName = `${inf.name} (${inf.niche})`;
  }
  const nameEl = document.getElementById('inquiry-influencer-name');
  const idEl = document.getElementById('inquiry-influencer-id');
  if (nameEl) nameEl.textContent = displayName;
  if (idEl) idEl.value = influencerId || '';
  if (modal) modal.classList.add('active');
}

function closeBrandInquiryModal() {
  const modal = document.getElementById('brand-inquiry-modal');
  if (modal) modal.classList.remove('active');
}

function handleBrandInquirySubmit(e) {
  e.preventDefault();
  const id = document.getElementById('inquiry-influencer-id')?.value || 'elena';
  let infName = 'Influencer IA';
  if (id === 'custom-ceo-clone') {
    infName = 'Clon Digital de CEO / Fundador';
  } else if (id === 'custom-ecommerce-model') {
    infName = 'Modelo IA Exclusiva para E-Commerce';
  } else if (influencersData[id]) {
    infName = influencersData[id].name;
  }
  const name = document.getElementById('inquiry-name')?.value || '';
  const company = document.getElementById('inquiry-company')?.value || '';
  const email = document.getElementById('inquiry-email')?.value || '';
  const service = document.getElementById('inquiry-service')?.value || '';
  const message = document.getElementById('inquiry-message')?.value || '';

  const subject = encodeURIComponent(`Solicitud Comercial: ${infName} - ${company}`);
  const body = encodeURIComponent(
    `Hola equipo de Los Manejadores,\n\n` +
    `Estoy interesado en una propuesta para ${infName}.\n\n` +
    `Nombre: ${name}\n` +
    `Empresa: ${company}\n` +
    `Email: ${email}\n` +
    `Servicio de interés: ${service}\n` +
    `Mensaje / Objetivos:\n${message}\n\n` +
    `Quedo atento a su respuesta y propuesta.`
  );

  closeBrandInquiryModal();
  alert(`¡Gracias ${name}! Tu solicitud para ${infName} ha sido recibida. Te abrimos el cliente de correo para enviar los detalles directamente a contacto@losmanejadores.com.`);
  window.location.href = `mailto:contacto@losmanejadores.com?subject=${subject}&body=${body}`;
}


function openPhotoLightbox(imgUrl, title, desc) {
  const modal = document.getElementById('photo-lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  if (img) img.src = imgUrl;
  if (titleEl) titleEl.textContent = title || 'Fotografía de Consistencia Master';
  if (descEl) descEl.textContent = desc || '';
  if (modal) modal.classList.add('active');
}

function closePhotoLightbox() {
  const modal = document.getElementById('photo-lightbox-modal');
  if (modal) modal.classList.remove('active');
}

// 3. PRIVATE COCKPIT FOR INTERNAL TEAM (PRESERVING 5 OPERATIONAL TABS)
function renderInfluencerCockpit(id) {
  const cleanId = (id || '').toLowerCase().trim().replace(/\/$/, '');
  const data = influencersData[cleanId] || influencersData[id];
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  if (!data) {
    container.innerHTML = `
      <div style="padding: 4rem 1.5rem; text-align: center; max-width: 600px; margin: 0 auto;">
        <i class="fa-solid fa-user-slash" style="font-size: 3rem; color: var(--pink); margin-bottom: 1rem; opacity: 0.8;"></i>
        <h2 style="font-family: var(--font-heading); color: #fff; margin-bottom: 0.75rem;">Influencer no encontrado</h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.75rem;">
          Si acabas de acceder tras una actualización del sistema, tu navegador puede tener una versión anterior en memoria caché. Haz clic en "Recargar" para cargar los datos más recientes.
        </p>
        <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
          <button onclick="window.location.reload(true)" class="btn btn-secondary">
            <i class="fa-solid fa-rotate-right"></i> Recargar Página
          </button>
          <a href="#roster" class="btn btn-primary">
            <i class="fa-solid fa-users"></i> Volver al Catálogo
          </a>
        </div>
      </div>
    `;
    return;
  }

  const roi = data.roi || { defaultFollowers: 50000, defaultConversion: 1.5, defaultTicket: 14 };
  const opsConfig = getInfluencerOpsConfig(id);

  container.innerHTML = `
    <div class="breadcrumb-bar" style="margin-bottom: 1.25rem;">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <a href="#roster">Catálogo de Influencers IA</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">${data.name} (Cockpit de Producción)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div class="influencer-mode-toggle">
          <button class="mode-btn" onclick="setInfluencerViewMode('${data.id}', 'product')" title="Ver Ficha Comercial Pública de Producto"><i class="fa-solid fa-eye"></i> Ficha Producto</button>
          <button class="mode-btn active" title="Cockpit operativo privado de producción (SOP, Prompts y Briefing)"><i class="fa-solid fa-sliders"></i> Cockpit Operativo 🔒</button>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="showTeamView('influencer-ops')">
          <i class="fa-solid fa-table-list"></i> Matriz Operativa
        </button>
      </div>
    </div>

    <!-- Production Cockpit Layout -->
    <div class="cockpit-container">
      <!-- Left Rail: Identity, Specs, Voice & LoRA Consistency -->
      <aside class="cockpit-sidebar">
        <div class="cockpit-profile-card">
          <div class="cockpit-profile-header">
            <img src="${data.avatar}" alt="${data.name}" class="cockpit-avatar">
            <div class="cockpit-name-group">
              <span class="detail-badge" style="font-size: 0.68rem; padding: 0.2rem 0.5rem; display: inline-block; margin-bottom: 0.35rem;">${data.badge}</span>
              <h2 class="cockpit-name">${data.name}</h2>
              <div class="cockpit-niche"><i class="fa-solid fa-tag"></i> ${data.niche}</div>
            </div>
          </div>
          
          <p class="cockpit-bio">${data.bio}</p>

          <button class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 0.82rem; padding: 0.55rem 0.8rem; margin-bottom: 1rem;" onclick="alert('Conexión con pasarela Fanvue VIP iniciada para ${data.name}')">
            <i class="fa-solid fa-star"></i> Suscribirse VIP ($${roi.defaultTicket}/mes)
          </button>

          <div class="cockpit-spec-list">
            <div class="cockpit-spec-item">
              <div class="cockpit-spec-label"><i class="fa-solid fa-masks-theater"></i> Arquetipo</div>
              <div class="cockpit-spec-value">${data.archetype}</div>
            </div>
            <div class="cockpit-spec-item">
              <div class="cockpit-spec-label"><i class="fa-solid fa-microchip"></i> Stack IA</div>
              <div class="cockpit-spec-value">${data.techStack}</div>
            </div>
            <div class="cockpit-spec-item">
              <div class="cockpit-spec-label"><i class="fa-solid fa-share-nodes"></i> Canales</div>
              <div class="cockpit-spec-value">${data.channels}</div>
            </div>
            <div class="cockpit-spec-item">
              <div class="cockpit-spec-label"><i class="fa-solid fa-users"></i> Audiencia</div>
              <div class="cockpit-spec-value">${data.targetAudience}</div>
            </div>
          </div>
        </div>

        <!-- Voice Player Mini Component -->
        ${data.voice ? `
          <div class="cockpit-voice-box" id="voice-card-${data.id}">
            <div class="voice-header" style="margin-bottom: 0.45rem;">
              <div class="voice-title" style="font-size: 0.82rem;">
                <i class="fa-solid fa-microphone-lines" style="color: var(--cyan);"></i>
                <span>${data.voice.title}</span>
              </div>
              <span class="voice-badge" style="font-size: 0.65rem; padding: 0.15rem 0.4rem;">${data.voice.badge}</span>
            </div>
            <div class="voice-controls-row" style="margin-bottom: 0.45rem;">
              <button class="voice-play-btn" id="voice-btn-${data.id}" onclick="toggleVoicePlayback('${data.id}')" title="Reproducir voz" style="width: 32px; height: 32px; font-size: 0.8rem; flex-shrink: 0;">
                <i class="fa-solid fa-play"></i>
              </button>
              <div class="voice-equalizer" style="height: 16px; gap: 2px;">
                <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
                <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
                <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
              </div>
              <div class="voice-time-display" id="voice-time-${data.id}" style="font-size: 0.72rem;">0:00 / ${data.voice.duration}</div>
            </div>
            <div class="voice-transcript" style="font-size: 0.78rem; max-height: 65px; overflow-y: auto; line-height: 1.35; padding: 0.5rem; background: rgba(0,0,0,0.25); border-radius: var(--radius-sm);">
              <i class="fa-solid fa-quote-left" style="color: var(--purple); margin-right: 0.35rem;"></i>
              ${data.voice.transcript}
            </div>
          </div>
        ` : ''}

        
        <!-- Pista Musical Oficial (El Caldero de Freja) -->
        ${data.featuredTrack ? `
          <div class="cockpit-voice-box" style="margin-top: 0.75rem; border-color: rgba(255, 42, 133, 0.4); background: linear-gradient(135deg, rgba(255,42,133,0.08) 0%, rgba(157,78,221,0.08) 100%);">
            <div class="voice-header" style="margin-bottom: 0.45rem;">
              <div class="voice-title" style="font-size: 0.82rem; color: #ff70a6;">
                <i class="fa-solid fa-compact-disc" style="color: #00f5d4;"></i>
                <span>${data.featuredTrack.title}</span>
              </div>
              <span class="voice-badge" style="font-size: 0.65rem; padding: 0.15rem 0.4rem; background: rgba(0,245,212,0.15); color: #00f5d4; border-color: rgba(0,245,212,0.3);">${data.featuredTrack.scale}</span>
            </div>
            
            <div style="font-size: 0.76rem; color: var(--text-dim); margin-bottom: 0.5rem; line-height: 1.35;">
              ${data.featuredTrack.description}
            </div>

            <!-- Reproductor Nativo de Audio -->
            <audio controls preload="none" style="width: 100%; height: 32px; border-radius: 8px; margin-bottom: 0.4rem;">
              <source src="${data.featuredTrack.audioUrl}" type="audio/mp4">
              <source src="${data.featuredTrack.wavUrl}" type="audio/wav">
            </audio>

            <div style="display: flex; gap: 0.4rem; align-items: center; justify-content: flex-end; margin-top: 0.3rem;">
              <span style="font-size: 0.72rem; color: var(--text-dim);"><i class="fa-solid fa-compact-disc"></i> Producción en Suite Externa (/Documents/Produccion_Musical/)</span>
            </div>
          </div>
        ` : ''}

        <!-- LoRA Master Facial Consistency Gallery -->
        ${data.gallery && data.gallery.length > 0 ? `
          <div class="cockpit-lora-strip">
            <div class="cockpit-lora-header">
              <span class="cockpit-lora-title"><i class="fa-solid fa-id-card-clip" style="color: var(--purple);"></i> Consistencia LoRA</span>
              <span class="cockpit-lora-tag">4K Master</span>
            </div>
            <div class="cockpit-lora-grid">
              ${data.gallery.map(g => `
                <img src="${g.img}" alt="${g.label}" title="${g.label} - ${g.tag}" class="cockpit-lora-thumb" onclick="alert('${g.label}: ${g.desc.replace(/'/g, "\\'")}')" loading="lazy">
              `).join('')}
            </div>
          </div>
        ` : ''}
      </aside>

      <!-- Right Main Stage: Immediate Production Tabs & Workspaces -->
      <main class="cockpit-main-stage">
        <div class="cockpit-tab-bar">
          <button id="tab-btn-platforms" class="tab-btn cockpit-tab-btn active" onclick="switchTab(this, 'tab-platforms')">
            <i class="fa-solid fa-layer-group"></i> Plataformas & SOP
          </button>
          <button id="tab-btn-pilot" class="tab-btn cockpit-tab-btn" onclick="switchTab(this, 'tab-pilot')" style="position: relative;">
            <i class="fa-solid fa-clapperboard" style="color: #ec4899; margin-right: 0.35rem;"></i> Guión Piloto 🎬
            <span style="background: #ec4899; color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.15rem 0.4rem; border-radius: 999px; margin-left: 0.35rem;">NUEVO</span>
          </button>
          <button id="tab-btn-ecommerce" class="tab-btn cockpit-tab-btn" onclick="switchTab(this, 'tab-ecommerce')">
            <i class="fa-solid fa-cart-shopping"></i> E-Commerce & Catálogo
          </button>
          <button id="tab-btn-tech" class="tab-btn cockpit-tab-btn" onclick="switchTab(this, 'tab-technical')">
            <i class="fa-solid fa-code"></i> Prompts por Escena
          </button>
          <button id="tab-btn-calib" class="tab-btn cockpit-tab-btn" onclick="switchTab(this, 'tab-calibration')">
            <i class="fa-solid fa-clipboard-question"></i> Briefing & Preguntas (0/6)
          </button>
          <button id="tab-btn-funnel" class="tab-btn cockpit-tab-btn" onclick="switchTab(this, 'tab-funnel')">
            <i class="fa-solid fa-filter-circle-dollar"></i> Embudo & ROI
          </button>
          <button id="tab-btn-posts" class="tab-btn cockpit-tab-btn" onclick="switchTab(this, 'tab-posts')">
            <i class="fa-solid fa-image"></i> Publicaciones
          </button>
        </div>

        <!-- Tab: E-Commerce & Catálogo de Venta Directa -->
        <div id="tab-ecommerce" class="tab-pane">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <h3 style="font-family: var(--font-heading); margin-bottom: 0.35rem; font-size: 1.4rem; display: flex; align-items: center; gap: 0.6rem;">
                <i class="fa-solid fa-cart-shopping" style="color: var(--cyan);"></i> Estrategia de E-Commerce & Monetización Directa
              </h3>
              <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0;">
                Panel de gestión de productos físicos y digitales vendidos a través de <strong>${data.name}</strong> (${data.ecommerce ? data.ecommerce.storeName : 'Tienda Integrada'}).
              </p>
            </div>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="platform-pill highlight" style="display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.85rem; font-size: 0.85rem;">
                <i class="fa-solid fa-bolt" style="color: #10b981;"></i> Webhook ${data.ecommerce ? data.ecommerce.platform.split(' ')[0] : 'Shopify'} Conectado
              </span>
            </div>
          </div>

          ${data.ecommerce ? `
            <!-- Strategy & Performance Summary -->
            <div class="glass-card" style="margin-bottom: 1.5rem; border-color: rgba(6, 182, 212, 0.3); background: rgba(6, 182, 212, 0.04);">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
                <div>
                  <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--cyan); font-weight: 700;">Canal & Stack E-Commerce</span>
                  <h4 style="color: #fff; font-size: 1.15rem; margin: 0.2rem 0 0 0;">${data.ecommerce.storeName}</h4>
                </div>
                <span style="font-size: 0.82rem; background: rgba(255,255,255,0.08); padding: 0.3rem 0.75rem; border-radius: 20px; color: #cbd5e1; border: 1px solid var(--border-glass);">
                  <i class="fa-solid fa-server" style="color: var(--purple); margin-right: 0.35rem;"></i> ${data.ecommerce.platform}
                </span>
              </div>
              <p style="color: #cbd5e1; font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.25rem;">
                <strong>Estrategia Comercial:</strong> ${data.ecommerce.strategy}
              </p>

              <!-- Live Metrics -->
              <div class="ecommerce-metrics-row" style="margin-bottom: 0;">
                <div class="ecom-metric-box">
                  <div class="ecom-metric-val">${data.ecommerce.metrics.aov}</div>
                  <div class="ecom-metric-lbl"><i class="fa-solid fa-receipt"></i> Ticket Promedio (AOV)</div>
                </div>
                <div class="ecom-metric-box">
                  <div class="ecom-metric-val" style="color: #10b981;">${data.ecommerce.metrics.margin}</div>
                  <div class="ecom-metric-lbl"><i class="fa-solid fa-chart-pie"></i> Margen Bruto Promedio</div>
                </div>
                <div class="ecom-metric-box">
                  <div class="ecom-metric-val" style="color: var(--cyan);">${data.ecommerce.metrics.conversionRate}</div>
                  <div class="ecom-metric-lbl"><i class="fa-solid fa-bullseye"></i> Tasa Conversión Tráfico</div>
                </div>
                <div class="ecom-metric-box">
                  <div class="ecom-metric-val" style="color: var(--pink);">${data.ecommerce.metrics.monthlyOrders}</div>
                  <div class="ecom-metric-lbl"><i class="fa-solid fa-box-open"></i> Pedidos Mensuales Est.</div>
                </div>
              </div>
            </div>

            <!-- SKU Breakdown Table -->
            <h4 style="font-family: var(--font-heading); color: #fff; font-size: 1.15rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-boxes-stacked" style="color: var(--purple);"></i> Desglose Unitario de SKUs & Rentabilidad
            </h4>
            <div style="overflow-x: auto; margin-bottom: 1.5rem; border: 1px solid var(--border-glass); border-radius: var(--radius-md);">
              <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;">
                <thead>
                  <tr style="background: rgba(10, 12, 20, 0.85); color: var(--cyan); border-bottom: 1px solid var(--border-glass);">
                    <th style="padding: 0.75rem 1rem;">Producto / SKU</th>
                    <th style="padding: 0.75rem 1rem;">Tipo / Formato</th>
                    <th style="padding: 0.75rem 1rem;">PVP (Precio)</th>
                    <th style="padding: 0.75rem 1rem;">COGS (Coste)</th>
                    <th style="padding: 0.75rem 1rem;">Margen (%)</th>
                    <th style="padding: 0.75rem 1rem;">Logística / Entrega</th>
                  </tr>
                </thead>
                <tbody>
                  ${data.ecommerce.products.map(p => `
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(18, 22, 36, 0.45);">
                      <td style="padding: 0.85rem 1rem; font-weight: 600; color: #fff;">
                        ${p.name}
                        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 400; margin-top: 0.2rem;">${p.desc}</div>
                      </td>
                      <td style="padding: 0.85rem 1rem;">
                        <span style="background: rgba(139, 92, 246, 0.15); color: #c4b5fd; padding: 0.2rem 0.55rem; border-radius: 4px; font-size: 0.78rem;">
                          ${p.category || 'Catálogo Oficial'}
                        </span>
                      </td>
                      <td style="padding: 0.85rem 1rem; font-weight: 700; color: #fff;">${p.price}</td>
                      <td style="padding: 0.85rem 1rem; color: #94a3b8;">${p.cogs || '$0.00'}</td>
                      <td style="padding: 0.85rem 1rem; font-weight: 700; color: #10b981;">${p.margin || '75%'}</td>
                      <td style="padding: 0.85rem 1rem; color: #cbd5e1; font-size: 0.82rem;">${p.fulfillment || 'Digital Instantáneo'}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- E-Commerce Operational Actions Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 1.25rem; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: var(--radius-md);">
              <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                <button class="btn btn-primary btn-sm" onclick="alert('Abriendo túnel seguro de administración para la tienda de ${data.name} (${data.ecommerce.storeName}).')">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir Portal de Gestión (${data.ecommerce.platform.split(' ')[0]})
                </button>
                <button class="btn btn-secondary btn-sm" onclick="alert('Exportando catálogo de productos y mediakit comercial de ${data.name} en PDF/CSV.')">
                  <i class="fa-solid fa-file-export"></i> Exportar MediaKit de Venta
                </button>
              </div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">
                <i class="fa-solid fa-shield-halved" style="color: var(--cyan);"></i> Pasarela segura Stripe/Shopify con cumplimiento RGPD
              </div>
            </div>
          ` : `
            <div style="padding: 2.5rem; text-align: center; background: rgba(255,255,255,0.02); border: 1px dashed var(--border-glass); border-radius: var(--radius-md);">
              <p style="color: var(--text-muted);">Sin catálogo e-commerce configurado actualmente para este perfil.</p>
            </div>
          `}
        </div>

        <!-- Tab 1: Posts Mockup (Non-active by default in cockpit) -->
        <div id="tab-posts" class="tab-pane">
        <h3 style="font-family: var(--font-heading); margin-bottom: 1.5rem; font-size: 1.4rem;">Muestra de Contenido en Redes Sociales</h3>
        ${(data.posts && data.posts.length > 0) ? data.posts.map(post => `
          <div class="social-mockup-card">
            <div class="social-header">
              <img src="${data.avatar}" alt="${data.name}" class="social-avatar">
              <div class="social-author-info">
                <span class="social-author-name">${data.name} <i class="fa-solid fa-circle-check" style="color: var(--cyan);"></i></span>
                <span class="social-handle">@${data.id}.official • ${post.platform}</span>
              </div>
            </div>
            <div class="social-caption">${post.caption}</div>
            ${post.img ? `
              <div style="margin: 0.85rem 0; border-radius: 8px; overflow: hidden; background: #000; text-align: center;">
                <img src="${post.img}" alt="Publicación" style="width: 100%; max-height: 480px; object-fit: contain; display: block; margin: 0 auto; border-radius: 8px;">
              </div>
            ` : ''}
            <div class="social-stats">
              <span><i class="fa-regular fa-heart" style="color: var(--pink);"></i> ${post.likes} Me gusta</span>
              <span><i class="fa-regular fa-comment" style="color: var(--cyan);"></i> ${post.comments} Comentarios</span>
              <span><i class="fa-regular fa-clock"></i> ${post.date}</span>
            </div>
          </div>
        `).join('') : '<p style="color: var(--text-muted);">Sin publicaciones de muestra registradas.</p>'}
      </div>

      <!-- Tab 2: Funnel & Interactive ROI Calculator -->
      <div id="tab-funnel" class="tab-pane">
        <h3 style="font-family: var(--font-heading); margin-bottom: 1.5rem; font-size: 1.4rem;">Estrategia de Conversión de 3 Niveles</h3>
        <div style="display: grid; gap: 1.25rem; margin-bottom: 2.5rem;">
          ${data.monetizationFunnel.map(f => `
            <div class="glass-card" style="display: flex; gap: 1.5rem; align-items: center;">
              <div style="background: rgba(139, 92, 246, 0.15); color: var(--purple); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
                <i class="fa-solid fa-arrow-down-short-wide"></i>
              </div>
              <div>
                <h4 style="color: #fff; font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 0.25rem;">${f.step}</h4>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${f.detail}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Interactive ROI Calculator Card -->
        <div class="roi-calculator-card">
          <div class="calc-header">
            <div>
              <h4 class="calc-title"><i class="fa-solid fa-calculator" style="color: var(--cyan);"></i> Simulador de Ingresos Proyectados (ROI)</h4>
              <p class="calc-desc">Calcula el rendimiento financiero mensual y anual para ${data.name} según el tráfico y la conversión del embudo.</p>
            </div>
            <div class="calc-presets">
              <button class="calc-preset-btn preset-btn-${data.id}" id="btn-preset-${data.id}-conservative" onclick="setRoiPreset('${data.id}', 'conservative')">Conservador</button>
              <button class="calc-preset-btn preset-btn-${data.id} active" id="btn-preset-${data.id}-moderate" onclick="setRoiPreset('${data.id}', 'moderate')">Moderado</button>
              <button class="calc-preset-btn preset-btn-${data.id}" id="btn-preset-${data.id}-aggressive" onclick="setRoiPreset('${data.id}', 'aggressive')">Viral / Agresivo</button>
            </div>
          </div>

          <div class="calc-body-grid">
            <div class="calc-controls">
              <div class="slider-group">
                <div class="slider-label-row">
                  <span class="slider-name">Seguidores Orgánicos (Tráfico)</span>
                  <span class="slider-val-badge" id="val-followers-${data.id}">${roi.defaultFollowers.toLocaleString()} seguidores</span>
                </div>
                <input type="range" class="custom-slider" id="roi-followers-${data.id}" min="10000" max="500000" step="5000" value="${roi.defaultFollowers}" oninput="updateInfluencerRoi('${data.id}')">
              </div>

              <div class="slider-group">
                <div class="slider-label-row">
                  <span class="slider-name">Tasa de Conversión a Embudo VIP</span>
                  <span class="slider-val-badge" id="val-conv-${data.id}">${roi.defaultConversion}%</span>
                </div>
                <input type="range" class="custom-slider" id="roi-conv-${data.id}" min="0.5" max="5.0" step="0.1" value="${roi.defaultConversion}" oninput="updateInfluencerRoi('${data.id}')">
              </div>

              <div class="slider-group">
                <div class="slider-label-row">
                  <span class="slider-name">Suscripción Promedio (Ticket Mensual)</span>
                  <span class="slider-val-badge" id="val-ticket-${data.id}">$${roi.defaultTicket} USD/mes</span>
                </div>
                <input type="range" class="custom-slider" id="roi-ticket-${data.id}" min="5" max="50" step="1" value="${roi.defaultTicket}" oninput="updateInfluencerRoi('${data.id}')">
              </div>
            </div>

            <div class="calc-results-card">
              <div class="calc-kpi-subscribers">Audiencia de Pago Proyectada</div>
              <div class="calc-kpi-subs-count" id="res-subs-${data.id}">-- suscriptores VIP</div>

              <div class="calc-revenue-row">
                <div class="calc-rev-box">
                  <h5>Ingreso Mensual (MRR)</h5>
                  <div class="calc-rev-val" id="res-mrr-${data.id}">$-- USD</div>
                </div>
                <div class="calc-rev-box">
                  <h5>Ingreso Anual (ARR)</h5>
                  <div class="calc-rev-val annual" id="res-arr-${data.id}">$-- USD</div>
                </div>
              </div>

              <div class="calc-split-box">
                <div class="calc-split-item">
                  Agencia (70%): <strong id="res-agency-${data.id}">$--</strong>
                </div>
                <div class="calc-split-item">
                  Fondo Talento (30%): <strong id="res-talent-${data.id}">$--</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Tab 3: Technical Prompts by Scene -->
      <div id="tab-technical" class="tab-pane">
        <h3 style="font-family: var(--font-heading); margin-bottom: 1rem; font-size: 1.4rem;">Copiador de Prompts por Escena de Producción</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
          Selecciona el tipo de toma para obtener el prompt de consistencia calibrado para ${data.name}:
        </p>

        ${data.promptScenes ? `
          <div class="scene-switcher-nav">
            ${Object.keys(data.promptScenes).map((key, idx) => `
              <button class="scene-btn scene-btn-${data.id} ${idx === 0 ? 'active' : ''}" id="scene-btn-${data.id}-${key}" onclick="selectPromptScene('${data.id}', '${key}')">
                ${data.promptScenes[key].label}
              </button>
            `).join('')}
          </div>

          <div class="prompt-copy-wrapper">
            <div class="prompt-box-rich" id="prompt-display-${data.id}">
              ${data.promptScenes.casual ? data.promptScenes.casual.text : ''}
            </div>

            <div class="prompt-actions-bar">
              <div class="prompt-tag-list" id="prompt-tags-${data.id}">
                ${(data.promptScenes.casual && data.promptScenes.casual.tags) ? data.promptScenes.casual.tags.map(t => `<span class="prompt-tag">${t}</span>`).join('') : ''}
              </div>

              <button class="btn btn-secondary" id="copy-scene-btn-${data.id}" onclick="copyScenePrompt('${data.id}')">
                <i class="fa-regular fa-copy"></i> Copiar Prompt de Escena
              </button>
            </div>
          </div>
        ` : `
          <div class="copy-box" id="prompt-${data.id}">${data.prompts || 'Prompt no disponible'}</div>
          <button onclick="copyToClipboard('prompt-${data.id}')" class="btn btn-secondary"><i class="fa-regular fa-copy"></i> Copiar Prompt</button>
        `}

        <div style="margin-top: 2rem; padding: 1.25rem; background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.25); border-radius: var(--radius-md);">
          <h5 style="color: #fff; margin-bottom: 0.5rem;"><i class="fa-solid fa-circle-info" style="color: var(--cyan);"></i> Regla de Producción para Consistencia Facial</h5>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin: 0; line-height: 1.5;">
            Siempre incluir los tags de iluminación volumétrica y lentes focales fijos (35mm para candid/selfie, 85mm f/1.8 para retrato editorial). Ajustar el peso del LoRA entre <strong>0.75 y 0.88</strong> para evitar artefactos en expresiones complejas.
          </p>
        </div>
      </div>

      <!-- Tab 4: Calibration & Operational Briefing Questions -->
      <div id="tab-calibration" class="tab-pane">
        <div class="briefing-card">
          <div class="briefing-header">
            <div>
              <h3 class="briefing-title">
                <i class="fa-solid fa-clipboard-check" style="color: var(--cyan);"></i>
                Preguntas de Calibración & Uso Operativo
              </h3>
              <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0.25rem 0 0 0;">
                Completa cada pregunta paso a paso para definir la personalidad, producción visual y estrategia de <strong>${data.name}</strong> antes de lanzar contenido.
              </p>
            </div>
            <div class="briefing-progress">
              <div class="briefing-progress-bar-bg">
                <div class="briefing-progress-bar-fill" id="calib-fill-${data.id}"></div>
              </div>
              <span class="briefing-progress-text" id="calib-prog-text-${data.id}">0/6 Listas (0%)</span>
            </div>
          </div>

          <!-- Question Items List -->
          <div class="questions-list">
            ${defaultCalibrationQuestions.map(q => {
              const currentAns = getCalibrationAnswer(data.id, q.id);
              const isDone = currentAns.trim().length > 0;
              return `
                <div class="question-item ${isDone ? 'answered' : ''}" id="calib-item-${data.id}-${q.id}">
                  <div class="question-item-header" onclick="toggleQuestionBody('${data.id}', '${q.id}')">
                    <div class="question-title-group">
                      <span class="question-number-badge">${q.title.charAt(0)}</span>
                      <span class="question-text">${q.title}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <span class="question-status-badge ${isDone ? 'done' : 'pending'}" id="calib-badge-${data.id}-${q.id}">
                        ${isDone ? '<i class="fa-solid fa-check"></i> Respondida' : '<i class="fa-regular fa-clock"></i> Pendiente'}
                      </span>
                      <i class="fa-solid fa-chevron-up" id="calib-icon-${data.id}-${q.id}" style="font-size: 0.75rem; color: var(--text-muted);"></i>
                    </div>
                  </div>
                  <div class="question-body" id="calib-body-${data.id}-${q.id}">
                    <div class="question-guide-tip">
                      <i class="fa-solid fa-lightbulb" style="color: #f59e0b; margin-right: 0.35rem;"></i>
                      ${q.guide}
                    </div>
                    <textarea 
                      class="question-input" 
                      id="calib-input-${data.id}-${q.id}" 
                      placeholder="${q.placeholder}"
                      rows="3"
                      oninput="saveCalibrationAnswer('${data.id}', '${q.id}', true)"
                    >${currentAns}</textarea>
                    <div class="question-actions-row">
                      <button class="question-save-btn" id="calib-btn-${data.id}-${q.id}" onclick="saveCalibrationAnswer('${data.id}', '${q.id}', false)">
                        <i class="fa-regular fa-floppy-disk"></i> Guardar
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Briefing Action Buttons -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-glass);">
            <button class="btn btn-secondary" id="copy-briefing-btn-${data.id}" onclick="copyConsolidatedBriefing('${data.id}')">
              <i class="fa-solid fa-copy"></i> Copiar Briefing Consolidado (Markdown)
            </button>
            <button class="btn" onclick="resetCalibrationQuestions('${data.id}')" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; font-size: 0.8rem; padding: 0.45rem 0.85rem; cursor: pointer;">
              <i class="fa-solid fa-trash-can"></i> Restablecer Respuestas
            </button>
          </div>
        </div>
      </div>

      <!-- Tab Especial: Guión Piloto de Producción (Escena por Escena) -->
      <div id="tab-pilot" class="tab-pane">
        <div class="platform-manager-card" style="border-color: rgba(236, 72, 153, 0.4); background: radial-gradient(circle at top right, rgba(236, 72, 153, 0.08) 0%, rgba(10, 12, 22, 0.95) 100%);">
          <div class="platform-manager-header" style="flex-wrap: wrap; gap: 1rem;">
            <div>
              <span style="display: inline-block; background: rgba(236, 72, 153, 0.15); border: 1px solid #ec4899; color: #ec4899; font-size: 0.72rem; font-weight: 700; padding: 0.25rem 0.65rem; border-radius: 6px; text-transform: uppercase; margin-bottom: 0.4rem;">
                <i class="fa-solid fa-film"></i> Pre-Producción Oficial • Video Piloto
              </span>
              <h3 class="platform-manager-title" style="color: #fff; font-size: 1.25rem;">
                ${data.pilotScript ? data.pilotScript.title : 'Guión del Video Piloto Oficial'}
              </h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.3rem;">
                ${data.pilotScript ? data.pilotScript.objective : 'Estructura técnica escena por escena optimizada para retención algorítmica y conversión.'}
              </p>
            </div>
            <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
              <button class="btn btn-primary btn-sm" onclick="copyFullPilotScript('${data.id}')" style="background: linear-gradient(135deg, #ec4899, #8b5cf6);">
                <i class="fa-solid fa-copy"></i> Copiar Guión Técnico
              </button>
              <button class="btn btn-secondary btn-sm" onclick="copyPilotKlingPrompts('${data.id}')">
                <i class="fa-solid fa-video"></i> Copiar Prompts Kling 3.0
              </button>
            </div>
          </div>

          <!-- Metadata Badges -->
          ${data.pilotScript ? `
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; padding: 0.85rem 1rem; background: rgba(0,0,0,0.3); border-radius: var(--radius-md); border: 1px solid var(--border-glass); font-size: 0.82rem;">
              <div><strong style="color: var(--cyan);"><i class="fa-solid fa-stopwatch"></i> Duración:</strong> ${data.pilotScript.duration}</div>
              <div><strong style="color: #ec4899;"><i class="fa-solid fa-mobile-screen"></i> Formato:</strong> ${data.pilotScript.format}</div>
              <div><strong style="color: #f59e0b;"><i class="fa-solid fa-music"></i> Track Sonoro:</strong> ${data.pilotScript.musicTrack}</div>
            </div>

            <!-- Scene by scene list -->
            <div style="display: flex; flex-direction: column; gap: 1.25rem;">
              ${data.pilotScript.scenes.map(s => `
                <div style="background: rgba(18, 20, 36, 0.7); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-md); padding: 1.25rem; transition: all 0.2s ease;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div style="display: flex; align-items: center; gap: 0.65rem;">
                      <span style="background: linear-gradient(135deg, #ec4899, #8b5cf6); color: #fff; font-weight: 800; font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 6px;">
                        ESCENA ${s.num}
                      </span>
                      <strong style="color: #fff; font-size: 0.95rem;">${s.name}</strong>
                    </div>
                    <span style="color: var(--cyan); font-family: monospace; font-size: 0.85rem; font-weight: 600;">
                      <i class="fa-regular fa-clock"></i> ${s.time} • ${s.shotType}
                    </span>
                  </div>

                  <!-- Visual & Kling Prompt -->
                  <div style="margin-bottom: 0.85rem;">
                    <div style="font-size: 0.82rem; color: #cbd5e1; margin-bottom: 0.35rem;">
                      <strong style="color: #94a3b8;"><i class="fa-solid fa-eye"></i> Pauta Visual:</strong> ${s.visual}
                    </div>
                    <div style="background: rgba(0,0,0,0.45); border-left: 3px solid var(--purple); padding: 0.6rem 0.85rem; border-radius: 4px; font-family: monospace; font-size: 0.78rem; color: #a78bfa; margin-top: 0.4rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
                      <span><strong style="color: var(--cyan);">Kling 3.0 / Flux:</strong> ${s.klingPrompt}</span>
                      <button onclick="navigator.clipboard.writeText('${s.klingPrompt.replace(/'/g, "\'")}'); alert('Prompt copiado al portapapeles');" class="btn-icon-subtle" title="Copiar prompt" style="color: #94a3b8; cursor: pointer; background: none; border: none;">
                        <i class="fa-regular fa-copy"></i>
                      </button>
                    </div>
                  </div>

                  <!-- Voice & Audio Cues -->
                  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.85rem; background: rgba(0,0,0,0.25); padding: 0.75rem 0.85rem; border-radius: 6px; font-size: 0.82rem;">
                    <div>
                      <div style="color: #ec4899; font-weight: 700; margin-bottom: 0.2rem;">
                        <i class="fa-solid fa-microphone-lines"></i> Locución (ElevenLabs):
                      </div>
                      <div style="color: #fff; font-style: italic; line-height: 1.4;">${s.voice}</div>
                      <div style="font-size: 0.72rem; color: #94a3b8; margin-top: 0.25rem;"><em>Nota: ${s.voiceNotes}</em></div>
                    </div>
                    <div>
                      <div style="color: #f59e0b; font-weight: 700; margin-bottom: 0.2rem;">
                        <i class="fa-solid fa-volume-high"></i> SFX / Ambiente:
                      </div>
                      <div style="color: #cbd5e1;">${s.audioCue}</div>
                      <div style="margin-top: 0.35rem; font-size: 0.76rem; color: var(--cyan);">
                        <strong><i class="fa-solid fa-closed-captioning"></i> Texto en Pantalla:</strong> «${s.overlayText}»
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : `
            <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
              <i class="fa-solid fa-film" style="font-size: 2.5rem; margin-bottom: 0.75rem; opacity: 0.6;"></i>
              <p>Guión piloto en fase de calibración técnica. Configura el prompt inicial en la pestaña Prompts.</p>
            </div>
          `}
        </div>
      </div>

      <!-- Tab 5: Gestión de Contenidos & Plataformas (Active by default in cockpit) -->
      <div id="tab-platforms" class="tab-pane active">
        <div class="platform-manager-card">
          <div class="platform-manager-header">
            <div>
              <h3 class="platform-manager-title">
                <i class="fa-solid fa-layer-group" style="color: var(--cyan); margin-right: 0.5rem;"></i>
                Stack de Plataformas & Elaboración de Contenidos
              </h3>
              <p class="platform-manager-subtitle">
                Configura las herramientas de IA generativa, animación, voz, postproducción y plataformas de publicación/monetización utilizadas en la producción de <strong>${data.name}</strong>.
              </p>
            </div>
            <div class="platform-kpi-badge" id="plat-kpi-${data.id}">
              <i class="fa-solid fa-layer-group"></i> Calculando...
            </div>
          </div>

          <!-- Interactive Categories & Chips Grid -->
          <div class="platform-categories-grid" id="platform-categories-container-${data.id}">
            <!-- Injected by renderPlatformsChips() -->
          </div>

          <!-- Add Custom Platform Bar -->
          <div style="background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.15); border-radius: var(--radius-sm); padding: 0.85rem 1.15rem; display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <i class="fa-solid fa-plus" style="color: var(--cyan);"></i>
            <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 500;">¿Usas otra herramienta o software en su pipeline?</span>
            <input 
              type="text" 
              id="new-platform-input-${data.id}" 
              placeholder="Ej: Magnific AI, Captions App, Suno v4, Discord Bot..." 
              style="flex: 1; min-width: 220px; background: rgba(0,0,0,0.4); border: 1px solid var(--border-glass); border-radius: 6px; padding: 0.45rem 0.75rem; color: #fff; font-size: 0.82rem; outline: none;"
              onkeydown="if(event.key === 'Enter') addCustomPlatform('${data.id}')"
            />
            <button class="btn btn-secondary btn-sm" onclick="addCustomPlatform('${data.id}')" style="padding: 0.45rem 0.9rem; font-size: 0.8rem;">
              <i class="fa-solid fa-plus"></i> Agregar Herramienta
            </button>
          </div>

          <!-- Operational Parameters Form Grid -->
          <h4 style="font-family: var(--font-heading); color: #fff; font-size: 1.1rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-sliders" style="color: var(--purple);"></i>
            Parámetros Operativos & Canales de Publicación
          </h4>

          <div class="platform-form-grid">
            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-solid fa-at" style="color: var(--cyan);"></i> Handle Oficial / Usuario
              </label>
              <input 
                type="text" 
                class="platform-field-input" 
                id="plat-handle-${data.id}" 
                value="${opsConfig.handle || ''}" 
                placeholder="@usuario.oficial"
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              />
            </div>

            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-solid fa-link" style="color: #ec4899;"></i> Enlace Canal VIP (Fanvue / Patreon)
              </label>
              <input 
                type="text" 
                class="platform-field-input" 
                id="plat-vip-${data.id}" 
                value="${opsConfig.vipUrl || ''}" 
                placeholder="https://fanvue.com/..."
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              />
            </div>

            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-regular fa-calendar-check" style="color: #10b981;"></i> Cadencia de Publicación
              </label>
              <input 
                type="text" 
                class="platform-field-input" 
                id="plat-cadence-${data.id}" 
                value="${opsConfig.cadence || ''}" 
                placeholder="Ej: 3 reels/sem + 1 photoshoot"
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              />
            </div>

            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-solid fa-clock-rotate-left" style="color: #f59e0b;"></i> Herramienta Scheduler / Envío
              </label>
              <input 
                type="text" 
                class="platform-field-input" 
                id="plat-scheduler-${data.id}" 
                value="${opsConfig.scheduler || ''}" 
                placeholder="Ej: Metricool (Auto-pilot 18:00 CET)"
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              />
            </div>

            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-solid fa-user-gear" style="color: var(--purple);"></i> Miembro Responsable del Pipeline
              </label>
              <input 
                type="text" 
                class="platform-field-input" 
                id="plat-resp-${data.id}" 
                value="${opsConfig.responsible || ''}" 
                placeholder="Ej: Daniel / Pancho / Wladimir"
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              />
            </div>

            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-solid fa-traffic-light" style="color: var(--cyan);"></i> Estado de Producción
              </label>
              <select 
                class="platform-field-select" 
                id="plat-status-${data.id}" 
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              >
                <option value="Activo / Producción Live" ${opsConfig.status === 'Activo / Producción Live' ? 'selected' : ''}>🟢 Activo / Producción Live</option>
                <option value="Fase de Calibración & Testing" ${opsConfig.status === 'Fase de Calibración & Testing' ? 'selected' : ''}>🟡 Fase de Calibración & Testing</option>
                <option value="Validado / Rentable" ${opsConfig.status === 'Validado / Rentable' ? 'selected' : ''}>💎 Validado / Rentable</option>
                <option value="En Concepto (Q2)" ${opsConfig.status === 'En Concepto (Q2)' ? 'selected' : ''}>⚪ En Concepto (Q2)</option>
                <option value="Pausado Temporalmente" ${opsConfig.status === 'Pausado Temporalmente' ? 'selected' : ''}>🔴 Pausado Temporalmente</option>
              </select>
            </div>
          </div>

          <!-- SOP Workflow Card -->
          <div class="platform-sop-card">
            <div class="platform-sop-title">
              <i class="fa-solid fa-clipboard-list" style="color: var(--cyan);"></i>
              Flujo de Trabajo Operativo (SOP Paso a Paso)
            </div>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.75rem;">
              Protocolo estándar de producción para generar un paquete de contenido de inicio a fin:
            </p>
            <textarea 
              class="platform-sop-textarea" 
              id="plat-sop-${data.id}" 
              placeholder="1. Prompt visual...\n2. Generación de voz...\n3. Animación...\n4. Edición..."
              oninput="saveInfluencerOpsConfig('${data.id}', false)"
            >${opsConfig.sop || ''}</textarea>
          </div>

          <!-- Action Footer Buttons -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-glass);">
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <button class="btn btn-primary" id="plat-save-btn-${data.id}" onclick="saveInfluencerOpsConfig('${data.id}', true)">
                <i class="fa-solid fa-floppy-disk"></i> Guardar Configuración Operativa
              </button>
              <button class="btn btn-secondary" id="plat-copy-btn-${data.id}" onclick="copyPlatformsSummary('${data.id}')">
                <i class="fa-solid fa-copy"></i> Copiar Ficha de Plataformas (Markdown)
              </button>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">
              <i class="fa-solid fa-shield-halved" style="color: #10b981;"></i> Configuración guardada en navegador
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  `;

  // Initialize ROI, Scene Prompts, Calibration Progress and Platform Chips
  setTimeout(() => {
    updateInfluencerRoi(id);
    selectPromptScene(id, 'casual');
    updateCalibrationProgress(id);
    renderPlatformsChips(id);
  }, 30);
}


// --- RENDER: INFLUENCERS DEDICATED CATALOG PAGE ---
function renderInfluencersPage(categoryFilter = 'all') {
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  const list = [
    {
      id: 'elena',
      name: 'Elena Daddario',
      avatar: 'elena_avatar.png',
      nicheIcon: 'fa-brain',
      niche: 'Psicología & Lifestyle Europeo',
      category: 'lifestyle',
      badge: 'Activo Certificado • Lifestyle Consciente',
      badgeColor: '#60a5fa',
      desc: '27 años. Rusa en Miraflores. Elegancia atemporal, psicología y bienestar emocional. Disponible para campañas de marcas conscientes, moda y lifestyle.',
      tags: ['Psicología', 'Moda Europea', 'Miraflores']
    },
    {
      id: 'julia',
      name: 'Julia Schmidt',
      avatar: 'julia_avatar.jpg',
      nicheIcon: 'fa-spa',
      niche: 'Dermocosmética & Clean Beauty',
      category: 'beauty',
      badge: 'Activo Certificado • Clean Beauty',
      badgeColor: '#ec4899',
      desc: '24 años. Miraflores. Reseñas científicas sin filtro, dupes accesibles y skincare real. Ideal para colaboraciones con marcas dermocosméticas y belleza limpia.',
      tags: ['Skincare', 'Clean Beauty', 'Dermocosmética']
    },
    {
      id: 'alina',
      name: 'Alina Van Dijk',
      avatar: 'alina_avatar.png',
      nicheIcon: 'fa-fire',
      niche: 'Sex-Positive Dominatrix & Erotismo Consciente',
      category: 'vip',
      badge: 'Activo Certificado • Nicho Adulto VIP',
      badgeColor: '#ef4444',
      desc: '28 años. Barcelona/Tulum. Seducción psicológica, erotismo consciente, fetiches sin tabúes y estimulación auditiva binaural. Alto ticket y retención en Fanvue VIP.',
      tags: ['Adulto VIP', 'Sex-Positive', 'Fanvue']
    },
    {
      id: 'maite',
      name: 'Maite Valenzuela',
      avatar: 'maite_avatar.jpg',
      nicheIcon: 'fa-music',
      niche: 'Cumbia Campesina & Tradición Chilena',
      category: 'music',
      badge: 'Activo Certificado • Cumbia Ranchera',
      badgeColor: '#f59e0b',
      desc: '22 años. Curicó/Santiago. Carisma popular, música festiva chilena y cercanía rural. Gran fidelización y tracción masiva para festivales y marcas de consumo masivo.',
      tags: ['Música Chilena', 'Cumbia Ranchera', 'Fiestas Patrias']
    },
    {
      id: 'mateo',
      name: 'Mateo Silva',
      avatar: 'mateo_avatar.jpg',
      nicheIcon: 'fa-arrow-trend-up',
      niche: 'FinTech, Inversiones Cuantitativas & Real Estate',
      category: 'finance',
      badge: 'Activo Certificado • FinTech & Wealth',
      badgeColor: 'var(--cyan)',
      desc: '31 años. Fráncfort/Santiago. Análisis cuantitativo con Python, tokenización de activos y asesoría en Real Estate europeo. Alto poder adquisitivo.',
      tags: ['Finanzas', 'Python Trading', 'Real Estate Tech']
    },
    {
      id: 'kira',
      name: 'Kira Voss',
      avatar: 'kira_avatar.jpg',
      nicheIcon: 'fa-gamepad',
      niche: 'Desarrollo Indie, Godot & Ciber-Activismo',
      category: 'tech',
      badge: 'Activo Certificado • Gaming & Open Source',
      badgeColor: '#10b981',
      desc: '26 años. Berlín/Valparaíso. Programadora independiente, devlogs técnicos y defensa de la soberanía digital y el software libre. Más de 500 suscriptores en Fanvue.',
      tags: ['GameDev', 'Godot Engine', 'Open Source']
    },
    {
      id: 'laura',
      name: 'Laura Santos',
      avatar: 'laura_avatar.png',
      nicheIcon: 'fa-dumbbell',
      niche: 'Fitness Funcional, Calistenia & Nutrición',
      category: 'lifestyle',
      badge: 'Activo Certificado • High-Performance',
      badgeColor: '#f97316',
      desc: '26 años. Santiago/Viña del Mar. Rutinas de alta intensidad, biohacking accesible y suplementación limpia sin mitos comerciales.',
      tags: ['Fitness', 'Calistenia', 'Biohacking']
    },
    {
      id: 'alejandra',
      name: 'Alejandra (Prototipo B2B)',
      avatar: 'alejandra_avatar.jpg',
      nicheIcon: 'fa-handshake',
      niche: 'Embajadora Virtual de Marca (En Adopción)',
      category: 'b2b',
      badge: 'Prototipo B2B • Listo para Licenciamiento',
      badgeColor: '#a855f7',
      desc: 'Embajadora virtual llave en mano para empresas. Personalización de vestuario corporativo, clonación de voz y generación continua de campañas publicitarias.',
      tags: ['Licencia B2B', 'Marca Corporativa', 'Adopción']
    },
    {
      id: 'freja',
      name: 'Freja Lindholm',
      avatar: 'freja_avatar.jpg',
      nicheIcon: 'fa-music',
      niche: 'Música Lírica, Gaming & El Gran Arcano',
      category: 'music',
      badge: 'Activo Certificado • Fantasía & Sinfonía',
      badgeColor: '#10b981',
      desc: '26 años. Gotemburgo. Productora de música épica lírica, compositora orquestal de videojuegos y cronista sonora oficial del canal El Gran Arcano.',
      tags: ['Música Épica', 'El Gran Arcano', 'Warcraft', 'Lírico']
    },
    {
      id: 'nova',
      name: 'Nova (Unidad NV-01)',
      avatar: 'nova_avatar.jpg',
      nicheIcon: 'fa-robot',
      niche: 'Androide Autónoma & Robótica Real Urbana',
      category: 'tech',
      badge: 'Robótica Real • Androide con IA Integrada',
      badgeColor: 'var(--cyan)',
      desc: 'Modelo 2026. Shanghái. Gynoide física con piel de silicona médica, cuello biomecánico y chasis ergonómico. Documenta la interacción humano-robot en ciudades futuristas.',
      tags: ['Robótica Real', 'IA Autónoma', 'Shanghái', 'Cyberpunk']
    },
    {
      id: 'minho',
      name: 'Min-ho Park (박민호)',
      avatar: 'minho_avatar.jpg',
      nicheIcon: 'fa-headphones',
      niche: 'K-Pop Urbano, Calistenia & Bitácora Latina',
      category: 'music',
      badge: 'Nuevo Fichaje • K-Pop & Bitácora Latina',
      badgeColor: '#ec4899',
      desc: '25 años. Seúl/LATAM. El aprendiz del ritmo: fusiona K-Pop con ritmos latinos, calistenia al aire libre y búsqueda de su musa en cada país.',
      tags: ['K-Pop', 'Calistenia', 'Música Urbana', 'LATAM Tour']
    },
    {
      id: 'damien',
      name: 'Damien Vance («The Author»)',
      avatar: 'damien_avatar.jpg',
      nicheIcon: 'fa-book-open',
      niche: 'Dark Romance, Psicología del Deseo & Anonimato',
      category: 'lifestyle',
      badge: 'Identidad Protegida • Dark Romance & Poder',
      badgeColor: '#6366f1',
      desc: '34 años. Manhattan/LATAM. Autor anónimo de BookTok, estratega corporativo y voz de barítono nocturna que aconseja a mujeres sobre el valor propio.',
      tags: ['Dark Romance', 'BookTok', 'Misterio', 'Alto Estatus']
    },
    {
      id: 'camila',
      name: 'Camila Reyes',
      avatar: 'camila_avatar.jpg',
      nicheIcon: 'fa-film',
      niche: 'Telenovela Erótica Cómica & Adulto VIP',
      category: 'vip',
      badge: 'Monetización Rápida • Telenovela Pícara & Adulto VIP',
      badgeColor: '#ef4444',
      desc: '24 años. Medellín. Creadora de la webnovela "Pecados de Departamento". Enredos cotidianos cómicos, tensión sexual irresistible y alta conversión.',
      tags: ['Telenovela', 'Comedia Erótica', 'Adulto VIP', 'Fanvue']
    },
    {
      id: 'roxie',
      name: 'Roxie Red («La Toon Escapada»)',
      avatar: 'roxie_avatar.jpg',
      nicheIcon: 'fa-wand-magic-sparkles',
      niche: 'Seducción Vintage 2.5D & Glamour de Cabaret',
      category: 'vip',
      badge: 'Activo Certificado • Adulto VIP 18+',
      badgeColor: '#ec4899',
      desc: '26 años. Hollywood/Mundo Real. La diva animada de 1947 inspirada en Jessica Rabbit y Holli Would. Fascinación por la piel humana, corsetería y jazz.',
      tags: ['Toon 2.5D', 'Jessica Rabbit', 'Adulto VIP 18+', 'Fanvue']
    },
    {
      id: 'madamev',
      name: 'Madame V («La Directora»)',
      avatar: 'madamev_avatar.jpg',
      nicheIcon: 'fa-building-shield',
      niche: 'Dominación Psicológica & Poder Corporativo',
      category: 'vip',
      badge: 'Activo Certificado • Dominación VIP 18+',
      badgeColor: '#8b5cf6',
      desc: '29 años. Metrópolis. Inspirada en Makima de Chainsaw Man. Traje sastre impecable, autoridad gélida y dominación mental de alto ticket sin desnudez.',
      tags: ['Makima', 'Dominación Mental', 'High-Ticket VIP', 'Seinen']
    },
    {
      id: 'aura',
      name: 'Princesa Aura («La Desinhibida»)',
      avatar: 'aura_avatar.jpg',
      nicheIcon: 'fa-crown',
      niche: 'Erotismo de Cuento de Hadas & Corsetería Real',
      category: 'vip',
      badge: 'Activo Certificado • Fantasía VIP 18+',
      badgeColor: '#f59e0b',
      desc: '24 años. Roselux/Mundo Real. La princesa de cuento inspirada en Giselle de Encantada que desata su corsé y descubre el placer sin censura.',
      tags: ['Princesa Cuento', 'Giselle', 'Fantasía VIP 18+', 'Fanvue']
    },
    {
      id: 'luna',
      name: 'Starlight Luna («La Waifu Cósmica»)',
      avatar: 'luna_avatar.jpg',
      nicheIcon: 'fa-moon',
      niche: 'Fantasía Cósmica Adulta & Cyberpunk Ecchi',
      category: 'vip',
      badge: 'Activo Certificado • Waifu Cósmica VIP 18+',
      badgeColor: 'var(--cyan)',
      desc: '25 años. Neo-Tokio/Azotea Real. Inspirada en Sailor Moon adulta y reinas cósmicas. Glamour estelar, lencería translúcida 8K y magia gamer.',
      tags: ['Sailor Moon Adulta', 'Waifu Cósmica', 'Cyberpunk', 'Fanvue']
    }
  ];

  const filtered = categoryFilter === 'all' 
    ? list 
    : list.filter(item => {
        if (categoryFilter === 'toon') {
          return item.id === 'roxie' || item.id === 'madamev' || item.id === 'aura' || item.id === 'luna';
        }
        return item.category === categoryFilter;
      });

  container.innerHTML = `
    <div class="breadcrumb-bar">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">Catálogo de Influencers IA</span>
      </div>
      <a href="#home" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Inicio</a>
    </div>

    <div class="section-header" style="text-align: center; max-width: 820px; margin: 0 auto 2.5rem auto;">
      <span class="section-subtitle" style="color: var(--purple);"><i class="fa-solid fa-gem"></i> Catálogo Comercial & Licenciamiento</span>
      <h1 style="font-family: var(--font-heading); font-size: 2.8rem; font-weight: 900; margin: 0.5rem 0 1rem 0;">
        Influencers IA: Modelos Listos para Venta y Escalamiento
      </h1>
      <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7;">
        Activos digitales hiperrealistas con consistencia consagrada. Listos para acuerdos de marca, patrocinios B2B, embudos directos a suscripción VIP (Fanvue / PPV) y contratos de representación comercial.
      </p>

      <!-- Category Filter Tabs -->
      <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-top: 1.5rem;">
        <button class="archive-filter-btn ${categoryFilter === 'all' ? 'active' : ''}" onclick="renderInfluencersPage('all')">Todos (${list.length})</button>
        <button class="archive-filter-btn ${categoryFilter === 'lifestyle' ? 'active' : ''}" onclick="renderInfluencersPage('lifestyle')">Lifestyle & Bienestar</button>
        <button class="archive-filter-btn ${categoryFilter === 'beauty' ? 'active' : ''}" onclick="renderInfluencersPage('beauty')">Belleza & Skincare</button>
        <button class="archive-filter-btn ${categoryFilter === 'vip' ? 'active' : ''}" onclick="renderInfluencersPage('vip')">Adulto VIP</button>
        <button class="archive-filter-btn ${categoryFilter === 'toon' ? 'active' : ''}" onclick="renderInfluencersPage('toon')" style="border-color: rgba(236, 72, 153, 0.45); color: #f472b6;"><i class="fa-solid fa-wand-magic-sparkles"></i> Toons & Anime 18+</button>
        <button class="archive-filter-btn ${categoryFilter === 'music' ? 'active' : ''}" onclick="renderInfluencersPage('music')">Música & Regional</button>
        <button class="archive-filter-btn ${categoryFilter === 'finance' ? 'active' : ''}" onclick="renderInfluencersPage('finance')">FinTech & Inversión</button>
        <button class="archive-filter-btn ${categoryFilter === 'tech' ? 'active' : ''}" onclick="renderInfluencersPage('tech')">Gaming & Tech</button>
        <button class="archive-filter-btn ${categoryFilter === 'b2b' ? 'active' : ''}" onclick="renderInfluencersPage('b2b')">Marcas B2B</button>
      </div>
    </div>

    ${categoryFilter === 'toon' ? `
      <!-- Colección 1: Penthouse Nocturno & Jacuzzi Infinito VIP -->
      <div class="glass-card" style="margin-bottom: 2rem; border-color: rgba(139, 92, 246, 0.45); background: radial-gradient(circle at top, rgba(139, 92, 246, 0.14) 0%, rgba(10, 12, 22, 0.95) 100%); padding: 1.5rem; border-radius: var(--radius-lg);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
          <div>
            <span class="product-tag" style="background: rgba(139, 92, 246, 0.2); color: #c084fc; border-color: rgba(139, 92, 246, 0.45);">
              <i class="fa-solid fa-building"></i> Colección VIP Nocturna • Penthouse, Lencería de Seda & Jacuzzi Infinito
            </span>
            <h3 style="font-family: var(--font-heading); color: #fff; margin: 0.35rem 0 0.15rem 0; font-size: 1.25rem;">
              Especial Penthouse 3D Híbrido: Personajes Animados en Suites de Lujo Reales
            </h3>
            <p style="color: #cbd5e1; font-size: 0.85rem; margin: 0;">
              Compositing 3D avanzado: interacción con muebles de terciopelo real, cristales panorámicos, fuego exterior y vapor de agua con iluminación nocturna.
            </p>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
          <div style="background: #000; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
            <img src="toons_penthouse_duo1.jpg" alt="Roxie Red & Madame V en Penthouse Real" style="width: 100%; height: auto; display: block;" loading="lazy">
            <div style="padding: 0.65rem 0.85rem; font-size: 0.8rem; color: #fff; display: flex; justify-content: space-between; align-items: center;">
              <span><strong>Dúo Penthouse 1:</strong> Roxie Red & Madame V</span>
              <span style="color: #ec4899; font-weight: 600;">Lencería & Balcón 18+</span>
            </div>
          </div>
          <div style="background: #000; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
            <img src="toons_penthouse_duo2.jpg" alt="Princesa Aura & Starlight Luna en Terraza Jacuzzi" style="width: 100%; height: auto; display: block;" loading="lazy">
            <div style="padding: 0.65rem 0.85rem; font-size: 0.8rem; color: #fff; display: flex; justify-content: space-between; align-items: center;">
              <span><strong>Dúo Penthouse 2:</strong> Princesa Aura & Starlight Luna</span>
              <span style="color: #00f5d4; font-weight: 600;">Jacuzzi & Fuego 18+</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Colección 2: Especial Verano Micro Bikini en Playas Reales -->
      <div class="glass-card" style="margin-bottom: 2.5rem; border-color: rgba(236, 72, 153, 0.4); background: radial-gradient(circle at top, rgba(236, 72, 153, 0.12) 0%, rgba(10, 12, 22, 0.95) 100%); padding: 1.5rem; border-radius: var(--radius-lg);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
          <div>
            <span class="product-tag" style="background: rgba(236, 72, 153, 0.15); color: #ec4899; border-color: rgba(236, 72, 153, 0.4);">
              <i class="fa-solid fa-umbrella-beach"></i> Especial Verano 18+ • Compositing Híbrido en Playas Reales
            </span>
            <h3 style="font-family: var(--font-heading); color: #fff; margin: 0.35rem 0 0.15rem 0; font-size: 1.25rem;">
              Sesión de Micro Bikini: Personajes Animados en Playas Fotográficas Auténticas
            </h3>
            <p style="color: #cbd5e1; font-size: 0.85rem; margin: 0;">
              Tecnología de integración 2.5D sobre entornos fotográficos reales: fidelidad facial absoluta a su lore en trajes de baño de alto impacto.
            </p>
          </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
          <div style="background: #000; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
            <img src="toons_beach_duo1.jpg" alt="Roxie Red & Madame V en Playa Real" style="width: 100%; height: auto; display: block;" loading="lazy">
            <div style="padding: 0.65rem 0.85rem; font-size: 0.8rem; color: #fff; display: flex; justify-content: space-between; align-items: center;">
              <span><strong>Dúo Playa 1:</strong> Roxie Red & Madame V</span>
              <span style="color: #ec4899; font-weight: 600;">Micro Bikini 18+</span>
            </div>
          </div>
          <div style="background: #000; border-radius: 8px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1);">
            <img src="toons_beach_duo2.jpg" alt="Princesa Aura & Starlight Luna en Playa Real" style="width: 100%; height: auto; display: block;" loading="lazy">
            <div style="padding: 0.65rem 0.85rem; font-size: 0.8rem; color: #fff; display: flex; justify-content: space-between; align-items: center;">
              <span><strong>Dúo Playa 2:</strong> Princesa Aura & Starlight Luna</span>
              <span style="color: #00f5d4; font-weight: 600;">Micro Bikini 18+</span>
            </div>
          </div>
        </div>
      </div>
    ` : ''}

    <div class="roster-grid">
      ${filtered.map(item => `
        <div class="glass-card influencer-card" style="border-color: rgba(255, 255, 255, 0.12);">
          <div class="influencer-img-wrapper">
            <img src="${item.avatar}" alt="${item.name}" class="influencer-img" loading="lazy">
            <span class="influencer-badge" style="color: ${item.badgeColor}; border-color: ${item.badgeColor}; background: rgba(10, 12, 24, 0.85); backdrop-filter: blur(8px);">
              <i class="fa-solid fa-gem"></i> ${item.badge}
            </span>
          </div>
          <div class="influencer-info">
            <h3 class="influencer-name">${item.name}</h3>
            <span class="influencer-niche"><i class="fa-solid ${item.nicheIcon}"></i> ${item.niche}</span>
            <p class="influencer-desc">${item.desc}</p>
            <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 0.85rem;">
              ${item.tags.map(t => `<span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; background: rgba(255,255,255,0.06); border-radius: 4px; color: var(--text-muted);">${t}</span>`).join('')}
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: auto;">
              <a href="#influencer/${item.id}" class="btn btn-primary influencer-btn" style="flex: 1; justify-content: center; font-size: 0.82rem;">
                <i class="fa-solid fa-arrow-right"></i> Ver Ficha de Producto
              </a>
              <button onclick="openInfluencerCockpit('${item.id}')" class="btn btn-secondary" style="padding: 0.5rem 0.75rem; font-size: 0.82rem;" title="Cockpit Operativo (Admin)">
                <i class="fa-solid fa-lock"></i>
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Servicios de Creación de Influencers -->
    <div style="margin-top: 3.5rem;">
      <div style="text-align: center; margin-bottom: 2rem;">
        <span class="detail-badge" style="background: rgba(139, 92, 246, 0.2); color: var(--purple); border-color: var(--purple); margin-bottom: 0.75rem;">
          CREACIÓN EXCLUSIVA PARA EMPRESAS
        </span>
        <h3 style="font-family: var(--font-heading); font-size: 1.8rem; color: #fff; margin-top: 1rem;">
          ¿Necesitas tu Propio Influencer Virtual?
        </h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 680px; margin: 0.5rem auto 0;">Creamos avatares digitales hiperrealistas adaptados a tu marca, CEO o producto.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; max-width: 900px; margin: 0 auto;">
        <!-- Card 1: Clon Digital para CEOs & Fundadores -->
        <div class="glass-card" style="border-color: rgba(6, 182, 212, 0.35); overflow: hidden; padding: 0; cursor: pointer;" onclick="window.location.hash='#influencer/ceo-clone'">
          <div style="position: relative; aspect-ratio: 5/4; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&h=640&crop=faces&q=80" alt="Clon Digital para CEOs & Fundadores" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" loading="lazy">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,12,24,0.95) 0%, rgba(10,12,24,0.3) 50%, transparent 100%);"></div>
            <div style="position: absolute; bottom: 1rem; left: 1rem; right: 1rem;">
              <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--cyan); font-weight: 700;"><i class="fa-solid fa-user-tie"></i> Servicio Ejecutivo</span>
              <h4 style="color: #fff; font-size: 1.15rem; margin: 0.3rem 0 0.25rem 0; font-family: var(--font-heading);">Clon Digital para CEOs & Fundadores</h4>
            </div>
          </div>
          <div style="padding: 1.2rem 1.3rem 1.4rem;">
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.55; margin-bottom: 1rem;">
              Réplica digital de video y voz del CEO de tu empresa. Produce comunicaciones corporativas, pitch decks y contenido de LinkedIn a escala — sin sesiones de cámara.
            </p>
            <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1rem;">
              <span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; background: rgba(6,182,212,0.12); border-radius: 4px; color: var(--cyan);">Voz Clonada</span>
              <span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; background: rgba(6,182,212,0.12); border-radius: 4px; color: var(--cyan);">Lipsync 4K</span>
              <span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; background: rgba(6,182,212,0.12); border-radius: 4px; color: var(--cyan);">LinkedIn</span>
              <span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; background: rgba(6,182,212,0.12); border-radius: 4px; color: var(--cyan);">Corporativo</span>
            </div>
            <a href="#clientes" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 0.88rem;">
              <i class="fa-solid fa-arrow-right"></i> Solicitar Clon Ejecutivo
            </a>
          </div>
        </div>

        <!-- Card 2: Modelo IA Exclusiva a Medida -->
        <div class="glass-card" style="border-color: rgba(139, 92, 246, 0.35); overflow: hidden; padding: 0; cursor: pointer;" onclick="window.location.hash='#influencer/custom-model'">
          <div style="position: relative; aspect-ratio: 5/4; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&h=640&crop=faces&q=80" alt="Modelo IA Exclusiva a Medida" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" loading="lazy">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,12,24,0.95) 0%, rgba(10,12,24,0.3) 50%, transparent 100%);"></div>
            <div style="position: absolute; bottom: 1rem; left: 1rem; right: 1rem;">
              <span style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--purple); font-weight: 700;"><i class="fa-solid fa-wand-magic-sparkles"></i> Creación a Medida</span>
              <h4 style="color: #fff; font-size: 1.15rem; margin: 0.3rem 0 0.25rem 0; font-family: var(--font-heading);">Modelo IA Exclusiva para E-Commerce & Marcas</h4>
            </div>
          </div>
          <div style="padding: 1.2rem 1.3rem 1.4rem;">
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.55; margin-bottom: 1rem;">
              Diseñamos un influencer virtual 100% exclusivo para tu marca: rostro único con LoRA privado, voz propia y personalidad alineada a tu identidad comercial. Sin regalías a modelos humanas.
            </p>
            <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-bottom: 1rem;">
              <span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; background: rgba(139,92,246,0.12); border-radius: 4px; color: var(--purple);">Rostro Exclusivo</span>
              <span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; background: rgba(139,92,246,0.12); border-radius: 4px; color: var(--purple);">LoRA Privado</span>
              <span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; background: rgba(139,92,246,0.12); border-radius: 4px; color: var(--purple);">Voz Propia</span>
              <span style="font-size: 0.72rem; padding: 0.15rem 0.5rem; background: rgba(139,92,246,0.12); border-radius: 4px; color: var(--purple);">E-Commerce</span>
            </div>
            <a href="#clientes" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 0.88rem; background: linear-gradient(135deg, var(--purple), #a855f7);">
              <i class="fa-solid fa-arrow-right"></i> Solicitar Modelo a Medida
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- RENDER: YOUTUBE DEDICATED CATALOG PAGE ---
function renderYoutubeCatalogPage() {
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  const channelsList = [
    {
      id: 'orcaester',
      title: 'The Orcaester • Orquesta Marina Infantil',
      subtitle: 'Educación Musical & Consciencia Ecológica',
      category: 'Infantil / Música & Ecología',
      icon: 'fa-water',
      color: '#06b6d4',
      image: 'the_orcaester_thumb.jpg',
      duration: '4:00 / Episodio',
      desc: 'Orquesta sinfónica de animales marinos liderada por el Maestro Orcar. Enseña conceptos musicales a niños (tempo, dinámicas, familias de instrumentos) mientras promueve el cuidado de los océanos.',
      monetization: 'YouTube Kids / Family ($3.5–$6 USD RPM) + Spotify Kids Clásica + Peluches & Merch Educativo'
    },
    {
      id: 'sofia',
      title: 'Los viajes en el tiempo de Sofía',
      subtitle: 'Aventuras Temporales, Dinosaurios & Valores Familiares',
      category: 'Infantil / Historia, Dinosaurios & Ciencia',
      icon: 'fa-child-reaching',
      color: 'var(--pink)',
      image: 'yt_sofia_thumb.jpg',
      duration: '1:00 / Short',
      desc: 'Micro-aventuras animadas de 60 segundos por portales temporales (el Cretácico con dinosaurios junto a su compañero Teko, Egipto, Roma). Resolución de emociones con rimas del robot co-host.',
      monetization: 'AdSense Kids ($3.5–$5 USD RPM) + Libros KDP en Amazon + Merchandising'
    },
    {
      id: 'arcanotech',
      title: 'Los Gemelos Arcanotech',
      subtitle: 'Dos Hermanos Magos: Solarpunk vs Cyberpunk',
      category: 'Futurismo, Ciencia & Fantasía',
      icon: 'fa-atom',
      color: 'var(--cyan)',
      image: 'yt_arcanotech_thumb.jpg',
      duration: '12:40 / Debate',
      desc: 'Dos magos gemelos debaten en un bosque encantado junto a un dragón tierno y un espejo parlante: utopías solares ecológicas vs distopías cibernéticas nocturnas. Alta afinidad para comunidad dev.',
      monetization: 'Patrocinios Tech/VPNs + AdSense Sci-Fi ($6–$9.5 USD RPM) + Afiliados Hardware'
    },
    {
      id: 'sagrados',
      title: 'Cuentos Sagrados (sin autor)',
      subtitle: 'Mitos Fundacionales, Tradiciones & Sabiduría Universal',
      category: 'Historia & Filosofía Perenne',
      icon: 'fa-scroll',
      color: 'var(--purple)',
      image: 'yt_sagrados_thumb.jpg',
      duration: '18:20 / Documental',
      desc: 'Storytelling universal sobre textos sagrados y mitos de creación (Gilgamesh, parábolas bíblicas, sabiduría sufí y védica) narrados con respeto cultural y arte al óleo.',
      monetization: 'Audiolibros Audible + AdSense Premium ($7–$12 USD RPM) + Licencias Educativas'
    },
    {
      id: 'ranchera',
      title: 'Maite & La Fiebre Ranchera',
      subtitle: 'Cumbia Campesina & Videoclips 4K',
      category: 'Música & Cono Sur',
      icon: 'fa-music',
      color: '#f59e0b',
      image: 'yt_ranchera_thumb.jpg',
      duration: '60:00 / Mix Festivo',
      desc: 'Videoclips 4K generativos y mixes festivos de 1h para asados y fiestas populares en Chile y el Cono Sur con la voz de Maite Valenzuela.',
      monetization: 'AdSense Sesiones Largas ($4.5–$7 USD RPM) + Spotify/Apple Music + Licores'
    },
    {
      id: 'mateo_fintech',
      title: 'Mateo Silva • Alpha Capital Insights',
      subtitle: 'FinTech, Modelos en Python & Real Estate Tech',
      category: 'Finanzas Cuantitativas',
      icon: 'fa-arrow-trend-up',
      color: 'var(--cyan)',
      image: 'mateo_avatar.jpg',
      duration: '16:20 / Análisis',
      desc: 'Análisis financiero cuantitativo, modelos algorítmicos en Python y estrategias de inversión sin mitos. El canal con mayor RPM del portafolio.',
      monetization: 'AdSense FinTech ($24–$45 USD RPM) + Patrocinios Neobancos + Venta de Algoritmos'
    },
    {
      id: 'kira_gamedev',
      title: 'Kira Vane • DevLogs & Ciber-Activismo',
      subtitle: 'Desarrollo Indie en Godot & Soberanía Digital',
      category: 'Gaming & Open Source',
      icon: 'fa-gamepad',
      color: '#10b981',
      image: 'yt_kira_thumb.jpg',
      duration: '14:15 / DevLog',
      desc: 'Devlogs de programación en Godot/Unreal y ensayos sobre soberanía de código y privacidad digital presentados por Kira Vane.',
      monetization: 'Patrocinios SaaS Cloud + Wishlists Steam + AdSense Dev ($9–$15 USD RPM)'
    }
  ];

  container.innerHTML = `
    <div class="breadcrumb-bar">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">Canales de YouTube & The Infinite Archive</span>
      </div>
      <a href="#home" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Inicio</a>
    </div>

    <!-- Header Section -->
    <div style="text-align: center; max-width: 840px; margin: 0 auto 2.5rem auto;">
      <span class="section-subtitle" style="color: #ef4444;"><i class="fa-brands fa-youtube"></i> Producción Automatizada & Universos IP</span>
      <h1 style="font-family: var(--font-heading); font-size: 2.8rem; font-weight: 900; margin: 0.5rem 0 1rem 0;">
        Canales de YouTube: Universos Propietarios y Formatos Automatizados
      </h1>
      <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7;">
        Creamos canales faceless de alta retención generados con inteligencia artificial, masterización sonora en DAW y consistencia visual 4K. Modelos de monetización probados vía AdSense, patrocinios B2B y licencias de IP.
      </p>
    </div>

    <!-- =================================================================== -->
    <!-- PREMIER SHOWCASE: THE INFINITE ARCHIVE (EL GRAN ARCANO)              -->
    <!-- Destacado al inicio más grande que el resto                         -->
    <!-- =================================================================== -->
    <div class="glass-card" style="border: 2px solid rgba(168, 85, 247, 0.5); background: radial-gradient(circle at top right, rgba(168, 85, 247, 0.18) 0%, rgba(10, 12, 24, 0.98) 100%); border-radius: var(--radius-lg); padding: 2.5rem; margin-bottom: 4rem; position: relative; overflow: hidden; box-shadow: 0 15px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(168, 85, 247, 0.15);">
      
      <!-- Top Badge -->
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem;">
        <span class="detail-badge" style="background: rgba(168, 85, 247, 0.25); color: #e9d5ff; border-color: rgba(168, 85, 247, 0.6); font-size: 0.82rem; font-weight: 700; padding: 0.4rem 0.85rem;">
          <i class="fa-solid fa-gem" style="color: #22d3ee; margin-right: 0.4rem;"></i> ACTIVO INSIGNIA • EL GRAN ARCANO (THE INFINITE ARCHIVE)
        </span>
        <span style="font-family: monospace; font-size: 0.78rem; color: #22d3ee; background: rgba(34,211,238,0.1); border: 1px solid rgba(34,211,238,0.3); padding: 0.25rem 0.6rem; border-radius: 4px;">
          <i class="fa-solid fa-shield-halved"></i> 100% LIBRE DE CONTENT ID • 432 HZ / -14 LUFS
        </span>
      </div>

      <!-- Main Split: Visual Scene Viewer & Narrative/Product Offering -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2.5rem; align-items: center; margin-bottom: 2rem;">
        
        <!-- Left Column: Scene Viewer -->
        <div>
          <div style="position: relative; aspect-ratio: 16 / 9; border-radius: 14px; overflow: hidden; border: 1px solid rgba(168, 85, 247, 0.35); box-shadow: 0 12px 35px rgba(0,0,0,0.8);">
            <img id="archive-current-scene-img" src="arcano_tower_window.jpg" alt="Aurelius en la Aguja" style="width: 100%; height: 100%; object-fit: cover; transition: opacity 0.3s ease;">
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,12,24,0.85) 0%, transparent 60%); pointer-events: none;"></div>
            <div style="position: absolute; bottom: 0.85rem; left: 1rem; right: 1rem; display: flex; justify-content: space-between; align-items: flex-end;">
              <span id="archive-scene-badge" style="font-size: 0.76rem; font-family: monospace; color: #d4af37; text-transform: uppercase; text-shadow: 0 1px 4px rgba(0,0,0,0.8);">
                Capítulo I • La Torre sobre las Cenizas
              </span>
              <span style="font-size: 0.72rem; background: rgba(0,0,0,0.75); color: #e2e8f0; padding: 0.2rem 0.5rem; border-radius: 4px; font-family: monospace;">
                Loop 4K Cinemagráfico
              </span>
            </div>
          </div>

          <!-- Scene Selector Thumbnails -->
          <div style="display: flex; gap: 0.5rem; margin-top: 0.85rem;">
            <button id="thumb-scene-1" class="archive-scene-thumb-card active" onclick="selectArchiveScene(1)" style="flex: 1; padding: 0.4rem; background: rgba(14,19,31,0.8); border: 1px solid rgba(168,85,247,0.4); border-radius: 8px; cursor: pointer; text-align: center;">
              <span style="font-size: 0.75rem; color: #e9d5ff; font-weight: 600; display: block;">I. La Aguja</span>
            </button>
            <button id="thumb-scene-2" class="archive-scene-thumb-card" onclick="selectArchiveScene(2)" style="flex: 1; padding: 0.4rem; background: rgba(14,19,31,0.8); border: 1px solid rgba(168,85,247,0.2); border-radius: 8px; cursor: pointer; text-align: center;">
              <span style="font-size: 0.75rem; color: #e9d5ff; font-weight: 600; display: block;">II. Biblioteca</span>
            </button>
            <button id="thumb-scene-3" class="archive-scene-thumb-card" onclick="selectArchiveScene(3)" style="flex: 1; padding: 0.4rem; background: rgba(14,19,31,0.8); border: 1px solid rgba(168,85,247,0.2); border-radius: 8px; cursor: pointer; text-align: center;">
              <span style="font-size: 0.75rem; color: #e9d5ff; font-weight: 600; display: block;">III. Umbraxion</span>
            </button>
          </div>
        </div>

        <!-- Right Column: Lore Hook & What This Product Is -->
        <div>
          <span style="font-size: 0.8rem; font-family: monospace; color: #c084fc; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.35rem;">
            Franquicia Multimedia & Universo Sonoro
          </span>
          <h2 id="archive-scene-title" style="font-family: var(--font-heading); font-size: 2.1rem; color: #fff; font-weight: 800; line-height: 1.25; margin-bottom: 0.85rem;">
            Aurelius Chronovoid en la Ventana de la Aguja
          </h2>
          <p id="archive-scene-desc" style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.7; margin-bottom: 1rem; font-weight: 300;">
            Desde la aguja más alta de la fortaleza de Kar-Kaelum, Aurelius y el dragón negro Umbraxion custodian los registros acústicos del multiverso. Un universo de fantasía oscura y atmósferas chillwave/neonwave diseñado para inducir estado de flujo (flow state), concentración en programación y relajación profunda.
          </p>

          <blockquote id="archive-scene-quote" style="border-left: 3px solid #d4af37; padding: 0.6rem 1rem; color: #f59e0b; font-style: italic; font-size: 0.88rem; background: rgba(212,175,55,0.06); border-radius: 0 8px 8px 0; margin-bottom: 1.25rem;">
            "Las guerras desgarraron los continentes de carne y piedra, pero el sonido de las estrellas es inmortal. Aquí aguardo con Umbraxion hasta que el tiempo decida recomenzar."
          </blockquote>

          <!-- Audio Demo Bar -->
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: rgba(6,8,13,0.7); border: 1px solid rgba(34,211,238,0.3); border-radius: 10px; margin-bottom: 1.5rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <button onclick="previewArchiveTrack('The Infinite Archive • Tome I', 60, 'D Dorian')" class="btn btn-primary" style="padding: 0.4rem 0.85rem; font-size: 0.82rem; background: linear-gradient(135deg, #06b6d4, #0284c7); border: none;">
                <i class="fa-solid fa-play"></i> Escuchar Muestra (432 Hz)
              </button>
              <div>
                <div style="color: #fff; font-size: 0.82rem; font-weight: 600;">Códice I: Whispers of the Sanctuary</div>
                <div style="color: var(--text-muted); font-size: 0.74rem;">Arpa Céltica • 60 BPM • Lluvia Tenue & Binaural 6Hz</div>
              </div>
            </div>
            <span style="color: #22d3ee; font-family: monospace; font-size: 0.78rem;">-14 LUFS</span>
          </div>

          <!-- Action Buttons -->
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <a href="#channel/arcano" class="btn btn-primary" style="background: linear-gradient(135deg, #7c3aed, #a855f7); border: none; font-size: 0.9rem; padding: 0.75rem 1.5rem; box-shadow: 0 0 25px rgba(168,85,247,0.4);">
              <i class="fa-solid fa-gem"></i> Ver Ficha Completa del Producto & Bóveda
            </a>
            <a href="#clientes" class="btn btn-secondary" style="font-size: 0.9rem; padding: 0.75rem 1.25rem;">
              <i class="fa-solid fa-handshake"></i> Solicitar Licencia / Coproducción
            </a>
            <button onclick="openAdminChannel('arcano')" class="btn btn-secondary" style="border-color: rgba(139,92,246,0.5); color: #c4b5fd; font-size: 0.85rem;" title="Abrir herramientas de generación y prompts en Panel Interno">
              <i class="fa-solid fa-lock"></i> Panel Administrador (Prompts & Studio)
            </button>
          </div>
        </div>

      </div>

      <!-- 3 Clear Commercial Products for Clients -->
      <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.5rem; margin-top: 1rem;">
        <h4 style="color: #fff; font-size: 0.95rem; font-family: var(--font-heading); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em;">
          <i class="fa-solid fa-cart-shopping" style="color: #22d3ee; margin-right: 0.4rem;"></i> Modelos de Venta y Aplicación Comercial para Clientes:
        </h4>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
          
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(34,211,238,0.25); border-radius: 10px; padding: 1.1rem;">
            <div style="color: #22d3ee; font-size: 1.1rem; margin-bottom: 0.35rem;"><i class="fa-solid fa-compact-disc"></i></div>
            <h5 style="color: #fff; font-size: 0.95rem; margin-bottom: 0.3rem;">1. Licencia de Biblioteca Sonora</h5>
            <p style="color: var(--text-muted); font-size: 0.82rem; line-height: 1.5; margin: 0;">
              Catálogo de más de 50 temas masterizados libre de Content ID para uso en streams de Twitch/YouTube, podcasts o videojuegos indie sin riesgo de copyright.
            </p>
          </div>

          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(168,85,247,0.25); border-radius: 10px; padding: 1.1rem;">
            <div style="color: #c084fc; font-size: 1.1rem; margin-bottom: 0.35rem;"><i class="fa-solid fa-tv"></i></div>
            <h5 style="color: #fff; font-size: 0.95rem; margin-bottom: 0.3rem;">2. Canal Faceless Llave en Mano</h5>
            <p style="color: var(--text-muted); font-size: 0.82rem; line-height: 1.5; margin: 0;">
              Creamos universos sonoros y canales temáticos automatizados para marcas corporativas, apps de meditación, hoteles boutique o fondos de inversión.
            </p>
          </div>

          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(245,158,11,0.25); border-radius: 10px; padding: 1.1rem;">
            <div style="color: #f59e0b; font-size: 1.1rem; margin-bottom: 0.35rem;"><i class="fa-solid fa-bullhorn"></i></div>
            <h5 style="color: #fff; font-size: 0.95rem; margin-bottom: 0.3rem;">3. Patrocinio Inmersivo In-Stream</h5>
            <p style="color: var(--text-muted); font-size: 0.82rem; line-height: 1.5; margin: 0;">
              Integración visual orgánica de productos tech, hardware, café o sillas ergonómicas en las transmisiones 24/7 y videos largos de 2 a 10 horas.
            </p>
          </div>

        </div>
      </div>

    </div>

    <!-- =================================================================== -->
    <!-- LISTADO DE OTROS CANALES DE YOUTUBE AUTOMATIZADOS                   -->
    <!-- =================================================================== -->
    <div class="section-header" style="text-align: left; margin-bottom: 2rem;">
      <span class="section-subtitle" style="color: var(--cyan);"><i class="fa-brands fa-youtube"></i> Portafolio de Canales Automatizados</span>
      <h2 class="section-title">Canales de YouTube: Formatos Automatizados y Monetizables</h2>
      <p class="section-description" style="margin: 0;">
        Canales faceless y conducidos por avatares de alta retención generados con IA. Modelos de negocio listos para monetización diversificada vía AdSense, patrocinios B2B y venta de activos.
      </p>
    </div>

    <div class="channels-grid">
      ${channelsList.map(ch => `
        <div class="channel-card">
          <div class="channel-thumb-wrapper">
            <img src="${ch.image}" alt="${ch.title}" class="channel-thumb-img" loading="lazy">
            <div class="channel-thumb-overlay"></div>
            <span class="channel-thumb-badge"><i class="fa-brands fa-youtube" style="color: #ff0000;"></i> ${ch.category}</span>
            <div style="position: absolute; bottom: 0.65rem; right: 0.75rem; background: rgba(0,0,0,0.85); color: #fff; font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; z-index: 2;">
              ${ch.duration}
            </div>
          </div>
          <div class="channel-card-body">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <div class="channel-icon-box" style="background: rgba(255,255,255,0.06); color: ${ch.color};"><i class="fa-solid ${ch.icon}"></i></div>
              <div>
                <h3 style="font-family: var(--font-heading); font-size: 1.15rem; margin: 0; color: #fff;">${ch.title}</h3>
                <span style="color: ${ch.color}; font-size: 0.8rem; font-weight: 600;">${ch.subtitle}</span>
              </div>
            </div>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.85rem; line-height: 1.5; flex-grow: 1;">
              ${ch.desc}
            </p>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-sm); padding: 0.5rem 0.75rem; margin-bottom: 1rem; font-size: 0.75rem; color: #e2e8f0;">
              <i class="fa-solid fa-sack-dollar" style="color: #10b981; margin-right: 0.3rem;"></i> <strong>Venta:</strong> ${ch.monetization}
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <a href="#channel/${ch.id}" class="btn btn-primary" style="flex: 1; font-size: 0.82rem; justify-content: center;">
                <i class="fa-solid fa-clapperboard"></i> Ver Detalle del Producto
              </a>
              <button onclick="openAdminChannel('${ch.id}')" class="btn btn-secondary" style="padding: 0.5rem 0.75rem; font-size: 0.82rem;" title="Editar en Panel de Administrador">
                <i class="fa-solid fa-lock"></i>
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Commercial Channel Coproduction Callout -->
    <div class="glass-card" style="margin-top: 3.5rem; padding: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; border-color: rgba(6, 182, 212, 0.35); border-radius: var(--radius-lg);">
      <div style="max-width: 720px;">
        <h4 style="color: #fff; font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 0.4rem;">
          <i class="fa-brands fa-youtube" style="color: #ef4444; margin-right: 0.4rem;"></i> Coproducción de Canales & Venta Llave en Mano
        </h4>
        <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin: 0;">
          ¿Quieres lanzar un canal temático automatizado para tu marca o fondo? Estructuramos el canal desde la arquitectura de marca y las voces sintéticas hasta los guiones y renders semanales en 4K con esquemas de rev-share o venta completa.
        </p>
      </div>
      <a href="#clientes" class="btn btn-primary" style="font-size: 0.95rem; padding: 0.75rem 1.5rem; white-space: nowrap;">
        <i class="fa-solid fa-handshake"></i> Consultar Alianza Comercial
      </a>
    </div>
  `;
}

// --- RENDER: CHANNEL DEDICATED PRODUCT PAGE ---
function renderChannelPage(id) {
  const data = channelsData[id];
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  if (!data) {
    container.innerHTML = `<div style="padding: 4rem; text-align: center;"><h2>Canal no encontrado</h2><a href="#youtube" class="btn btn-primary">Volver al Catálogo</a></div>`;
    return;
  }

  // Check if this is the premier IP: The Infinite Archive / El Gran Arcano
  if (id === 'arcano' || id === 'infinite-archive') {
    container.innerHTML = `
      <div class="breadcrumb-bar">
        <div class="breadcrumbs">
          <a href="#home">Inicio</a>
          <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
          <a href="#youtube">Canales YouTube</a>
          <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
          <span class="current">The Infinite Archive (El Gran Arcano)</span>
        </div>
        <a href="#youtube" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Canales</a>
      </div>

      <!-- Master Hero Banner with 16:9 Display -->
      <div class="channel-hero-card" style="margin-bottom: 2.5rem; border-radius: var(--radius-lg); overflow: hidden; border: 2px solid rgba(168,85,247,0.5); background: #0c0f1d; position: relative;">
        <div style="position: relative; width: 100%; aspect-ratio: 16 / 9; max-height: 480px; overflow: hidden; background: #080a14;">
          <img src="arcano_tower_window.jpg" alt="The Infinite Archive" style="width: 100%; height: 100%; object-fit: cover;" />
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(12,15,29,0.98) 0%, rgba(12,15,29,0.4) 60%, transparent 100%);"></div>
          
          <div style="position: absolute; top: 1.5rem; left: 1.5rem;">
            <span class="detail-badge" style="background: rgba(168,85,247,0.3); border-color: #a855f7; color: #e9d5ff; font-size: 0.82rem; backdrop-filter: blur(8px);">
              <i class="fa-solid fa-gem" style="color: #22d3ee;"></i> FRANQUICIA IP INSIGNIA • MULTIMEDIA SHOWCASE
            </span>
          </div>

          <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h1 class="detail-title" style="margin: 0; font-size: 2.2rem; text-shadow: 0 2px 14px rgba(0,0,0,0.9); color: #fff;">
                The Infinite Archive (El Gran Arcano)
              </h1>
              <div style="color: #c084fc; font-size: 1rem; font-weight: 600; margin-top: 0.35rem;">
                Bóveda Fuera del Tiempo • Fantasía Oscura, Acústica Chillwave & Deep Work
              </div>
            </div>

            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <button class="btn btn-primary" onclick="previewArchiveTrack('Tome I: Whispers of the Sanctuary', 60, 'D Dorian')" style="background: linear-gradient(135deg, #06b6d4, #0284c7); border: none; box-shadow: 0 0 20px rgba(6,182,212,0.35);">
                <i class="fa-solid fa-play"></i> Simular Reproducción (432 Hz)
              </button>
              <button onclick="openAdminChannel('arcano')" class="btn btn-secondary" style="border-color: rgba(139,92,246,0.6); color: #e9d5ff;">
                <i class="fa-solid fa-lock"></i> Panel Administrador
              </button>
            </div>
          </div>
        </div>

        <div style="padding: 1.5rem 1.8rem; font-size: 1rem; color: #cbd5e1; line-height: 1.7; border-top: 1px solid rgba(255,255,255,0.08); background: rgba(10,12,24,0.6);">
          ${data.concept}
        </div>
      </div>

      <!-- Specs Grid -->
      <div class="specs-grid" style="margin-bottom: 2.5rem;">
        <div class="spec-card">
          <div class="spec-icon" style="color: #a855f7;"><i class="fa-solid fa-users"></i></div>
          <div class="spec-label">Audiencia Objetivo</div>
          <div class="spec-value" style="font-size: 0.95rem;">${data.targetAge}</div>
        </div>

        <div class="spec-card">
          <div class="spec-icon" style="color: #22d3ee;"><i class="fa-solid fa-diagram-project"></i></div>
          <div class="spec-label">Pipeline de Producción</div>
          <div class="spec-value" style="font-size: 0.9rem;">${data.pipeline}</div>
        </div>

        <div class="spec-card">
          <div class="spec-icon" style="color: #d4af37;"><i class="fa-solid fa-sack-dollar"></i></div>
          <div class="spec-label">Modelo de Monetización</div>
          <div class="spec-value" style="font-size: 0.9rem;">${data.monetization}</div>
        </div>
      </div>

      <!-- Interactive Scene Gallery -->
      <div class="glass-card" style="padding: 2rem; margin-bottom: 2.5rem; border-color: rgba(168,85,247,0.35); background: rgba(14,19,31,0.7);">
        <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: #fff; margin-bottom: 1.25rem;">
          <i class="fa-solid fa-camera-retro" style="color: #c084fc; margin-right: 0.4rem;"></i> Entornos Cinemagráficos 4K (Visor de Escenas)
        </h3>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
          
          <div style="background: rgba(6,8,13,0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; padding: 1.2rem;">
            <div style="aspect-ratio: 16 / 9; border-radius: 8px; overflow: hidden; margin-bottom: 0.85rem;">
              <img src="arcano_tower_window.jpg" alt="Escena I" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <h4 style="color: #fff; font-size: 1.05rem; margin-bottom: 0.35rem;">Capítulo I: La Torre sobre las Cenizas</h4>
            <p style="color: var(--text-muted); font-size: 0.84rem; line-height: 1.5;">Aurelius contemplando el horizonte cósmico desde la aguja de Kar-Kaelum. Loop de 15 segundos sin cortes visibles.</p>
          </div>

          <div style="background: rgba(6,8,13,0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; padding: 1.2rem;">
            <div style="aspect-ratio: 16 / 9; border-radius: 8px; overflow: hidden; margin-bottom: 0.85rem;">
              <img src="arcano_reading.jpg" alt="Escena II" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <h4 style="color: #fff; font-size: 1.05rem; margin-bottom: 0.35rem;">Capítulo II: El Estudio de Historias</h4>
            <p style="color: var(--text-muted); font-size: 0.84rem; line-height: 1.5;">La calidez de la biblioteca de piedra y la llama eterna mientras descifra códices antiguos con polvo bioluminiscente.</p>
          </div>

          <div style="background: rgba(6,8,13,0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; padding: 1.2rem;">
            <div style="aspect-ratio: 16 / 9; border-radius: 8px; overflow: hidden; margin-bottom: 0.85rem;">
              <img src="arcano_dragon.jpg" alt="Escena III" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <h4 style="color: #fff; font-size: 1.05rem; margin-bottom: 0.35rem;">Capítulo III: El Dragón Umbraxion</h4>
            <p style="color: var(--text-muted); font-size: 0.84rem; line-height: 1.5;">Encuentro en el gran salón abovedado. Escamas de obsidiana y resonancia rítmica subsónica a 0.5 Hz.</p>
          </div>

        </div>
      </div>

      <!-- Commercial Pricing Packages for Clients -->
      <div class="glass-card" style="padding: 2.2rem; margin-bottom: 2.5rem; border-color: rgba(34,211,238,0.35); background: radial-gradient(circle at top right, rgba(34,211,238,0.08) 0%, rgba(10,12,24,0.95) 100%);">
        <div style="text-align: center; max-width: 700px; margin: 0 auto 2rem auto;">
          <span class="detail-badge" style="background: rgba(34,211,238,0.15); color: #22d3ee; border-color: rgba(34,211,238,0.4); margin-bottom: 0.5rem;">
            PROPUESTAS COMERCIALES
          </span>
          <h3 style="font-family: var(--font-heading); font-size: 1.8rem; color: #fff;">Planes de Licenciamiento & Coproducción</h3>
          <p style="color: var(--text-muted); font-size: 0.92rem;">Opciones flexibles para creadores, empresas y marcas interesadas en The Infinite Archive:</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          
          <div class="glass-card" style="padding: 1.5rem; border-color: rgba(34,211,238,0.3); display: flex; flex-direction: column;">
            <span style="font-size: 0.75rem; color: #22d3ee; font-family: monospace; text-transform: uppercase;">Licencia A</span>
            <h4 style="color: #fff; font-size: 1.2rem; margin: 0.35rem 0 0.5rem 0;">Biblioteca Sonora</h4>
            <div style="font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 1rem;">$490 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal;">USD / perpetua</span></div>
            <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0; font-size: 0.84rem; color: var(--text-muted); line-height: 1.6; flex-grow: 1;">
              <li><i class="fa-solid fa-check" style="color: #22d3ee; margin-right: 0.4rem;"></i> Más de 50 pistas masterizadas en WAV 24-bit</li>
              <li><i class="fa-solid fa-check" style="color: #22d3ee; margin-right: 0.4rem;"></i> Libre de Content ID en YouTube y Twitch</li>
              <li><i class="fa-solid fa-check" style="color: #22d3ee; margin-right: 0.4rem;"></i> Uso en videojuegos, podcasts y videos de marca</li>
            </ul>
            <a href="#clientes" class="btn btn-secondary" style="justify-content: center; font-size: 0.85rem;">Solicitar Licencia</a>
          </div>

          <div class="glass-card" style="padding: 1.5rem; border-color: rgba(168,85,247,0.45); background: rgba(168,85,247,0.06); display: flex; flex-direction: column;">
            <span style="font-size: 0.75rem; color: #c084fc; font-family: monospace; text-transform: uppercase;">Patrocinio B</span>
            <h4 style="color: #fff; font-size: 1.2rem; margin: 0.35rem 0 0.5rem 0;">Sponsor In-Stream</h4>
            <div style="font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 1rem;">$850 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal;">USD / mes</span></div>
            <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0; font-size: 0.84rem; color: var(--text-muted); line-height: 1.6; flex-grow: 1;">
              <li><i class="fa-solid fa-check" style="color: #c084fc; margin-right: 0.4rem;"></i> Presencia visual en 4 videos largos (2h cada uno)</li>
              <li><i class="fa-solid fa-check" style="color: #c084fc; margin-right: 0.4rem;"></i> Integración de tu marca en el escenario 3D</li>
              <li><i class="fa-solid fa-check" style="color: #c084fc; margin-right: 0.4rem;"></i> Enlaces destacados y fijados en comentarios</li>
            </ul>
            <a href="#clientes" class="btn btn-primary" style="background: linear-gradient(135deg, #7c3aed, #a855f7); justify-content: center; font-size: 0.85rem;">Contratar Sponsor</a>
          </div>

          <div class="glass-card" style="padding: 1.5rem; border-color: rgba(245,158,11,0.3); display: flex; flex-direction: column;">
            <span style="font-size: 0.75rem; color: #fbbf24; font-family: monospace; text-transform: uppercase;">Solución C</span>
            <h4 style="color: #fff; font-size: 1.2rem; margin: 0.35rem 0 0.5rem 0;">Canal Llave en Mano</h4>
            <div style="font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 1rem;">$2.900 <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: normal;">USD / setup</span></div>
            <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0; font-size: 0.84rem; color: var(--text-muted); line-height: 1.6; flex-grow: 1;">
              <li><i class="fa-solid fa-check" style="color: #fbbf24; margin-right: 0.4rem;"></i> Creación de universo temático exclusivo para tu marca</li>
              <li><i class="fa-solid fa-check" style="color: #fbbf24; margin-right: 0.4rem;"></i> 5 primeros videos largos de 2h producidos y subidos</li>
              <li><i class="fa-solid fa-check" style="color: #fbbf24; margin-right: 0.4rem;"></i> Traspaso total de derechos y canales de AdSense</li>
            </ul>
            <a href="#clientes" class="btn btn-secondary" style="justify-content: center; font-size: 0.85rem;">Solicitar Cotización</a>
          </div>

        </div>
      </div>

      <!-- Episode Outlines & Sample Scripts -->
      <h3 style="font-family: var(--font-heading); margin-bottom: 1.5rem; font-size: 1.5rem; color: #fff;">
        Capítulos & Desglose de Guiones Oficiales
      </h3>
      ${data.episodes.map(ep => `
        <div class="social-mockup-card" style="margin-bottom: 1.5rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #fff;">${ep.title}</h4>
            <span class="detail-badge" style="background: rgba(168,85,247,0.15); color: #c084fc; border-color: #a855f7;">${ep.duration}</span>
          </div>
          
          <div class="script-box">
            <span class="script-tag" style="background: rgba(168,85,247,0.2); color: #e9d5ff;">Guión Narrativo & Registro Sonoro</span>
            <div>${ep.script.replace(/\n/g, '<br>')}</div>
          </div>

          <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-sm); font-size: 0.9rem; color: var(--text-muted);">
            <strong style="color: #fff;"><i class="fa-solid fa-clapperboard"></i> Dirección Visual (Cinemagraph):</strong> ${ep.thumbnail}
          </div>
        </div>
      `).join('')}

      <!-- Bottom Action Bar -->
      <div style="margin-top: 3rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 1.5rem; background: rgba(10,12,24,0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md);">
        <a href="#youtube" class="btn btn-secondary"><i class="fa-solid fa-arrow-left"></i> Volver al Catálogo de YouTube</a>
        <div style="display: flex; gap: 0.75rem;">
          <button onclick="openAdminChannel('arcano')" class="btn btn-secondary" style="border-color: rgba(139,92,246,0.6); color: #c4b5fd;">
            <i class="fa-solid fa-lock"></i> Editar en Panel de Administrador
          </button>
          <a href="#clientes" class="btn btn-primary" style="background: linear-gradient(135deg, #7c3aed, #a855f7); border: none;">
            <i class="fa-solid fa-envelope"></i> Contactar para Licencia Comercial
          </a>
        </div>
      </div>
    `;
    return;
  }

  // Generic Channel Detail Page for all other channels
  container.innerHTML = `
    <div class="breadcrumb-bar">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <a href="#youtube">Canales YouTube</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">${data.title}</span>
      </div>
      <a href="#youtube" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Canales</a>
    </div>

    <!-- Channel Header with 16:9 Master Thumbnail Banner -->
    <div class="channel-hero-card" style="margin-bottom: 2rem; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-glass); background: #0c0f1d; position: relative;">
      <div style="position: relative; width: 100%; aspect-ratio: 16 / 9; max-height: 440px; overflow: hidden; background: #080a14;">
        <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.95);" />
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(12,15,29,0.95) 0%, rgba(12,15,29,0.3) 50%, transparent 100%);"></div>
        <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="detail-badge" style="background: rgba(6,182,212,0.25); border-color: var(--cyan); color: var(--cyan); margin-bottom: 0.5rem; display: inline-flex; align-items: center; gap: 0.4rem;">
              <i class="fa-brands fa-youtube" style="color: #ff0000; font-size: 1rem;"></i> Miniatura Master 4K • Formato Oficial
            </span>
            <h1 class="detail-title" style="margin: 0; font-size: 1.85rem; text-shadow: 0 2px 12px rgba(0,0,0,0.85);">${data.title}</h1>
            <div style="color: ${data.color}; font-size: 0.95rem; font-weight: 600; margin-top: 0.35rem;">${data.subtitle} • ${data.category}</div>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="alert('Abriendo simulador de reproducción para ${data.title}')" style="box-shadow: 0 0 20px rgba(6,182,212,0.35);">
              <i class="fa-solid fa-play"></i> Simular Reproducción
            </button>
            <button onclick="openAdminChannel('${data.id}')" class="btn btn-secondary" style="border-color: rgba(139,92,246,0.6); color: #c4b5fd;">
              <i class="fa-solid fa-lock"></i> Panel Administrador
            </button>
          </div>
        </div>
      </div>
      <div style="padding: 1.25rem 1.5rem; font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; border-top: 1px solid var(--border-glass);">
        ${data.concept}
      </div>
    </div>

    <!-- Specs Grid -->
    <div class="specs-grid" style="margin-bottom: 2rem;">
      <div class="spec-card">
        <div class="spec-icon" style="color: ${data.color};"><i class="fa-solid fa-users"></i></div>
        <div class="spec-label">Audiencia Objetivo</div>
        <div class="spec-value">${data.targetAge}</div>
      </div>

      <div class="spec-card">
        <div class="spec-icon" style="color: ${data.color};"><i class="fa-solid fa-diagram-project"></i></div>
        <div class="spec-label">Pipeline de Producción</div>
        <div class="spec-value" style="font-size: 0.95rem;">${data.pipeline}</div>
      </div>

      <div class="spec-card">
        <div class="spec-icon" style="color: ${data.color};"><i class="fa-solid fa-sack-dollar"></i></div>
        <div class="spec-label">Monetización & Rendimiento</div>
        <div class="spec-value" style="font-size: 0.95rem;">${data.monetization}</div>
      </div>
    </div>

    <!-- Episode Outlines & Sample Scripts -->
    <h3 style="font-family: var(--font-heading); margin-bottom: 1.5rem; font-size: 1.5rem;">Guiones Muestra y Desglose de Episodios</h3>
    ${data.episodes.map(ep => `
      <div class="social-mockup-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #fff;">${ep.title}</h4>
          <span class="detail-badge" style="background: rgba(6,182,212,0.15); color: var(--cyan); border-color: var(--cyan);">${ep.duration}</span>
        </div>
        
        <div class="script-box">
          <span class="script-tag">Extracto de Guión Sintetizado</span>
          <div>${ep.script.replace(/\n/g, '<br>')}</div>
        </div>

        <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-sm); font-size: 0.9rem; color: var(--text-muted);">
          <strong style="color: #fff;"><i class="fa-solid fa-clapperboard"></i> Dirección de Miniatura (Thumbnail):</strong> ${ep.thumbnail}
        </div>
      </div>
    `).join('')}

    <!-- Commercial Action Box -->
    <div style="margin-top: 3rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; padding: 1.5rem; background: rgba(10,12,24,0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: var(--radius-md);">
      <a href="#youtube" class="btn btn-secondary"><i class="fa-solid fa-arrow-left"></i> Volver a Todos los Canales</a>
      <div style="display: flex; gap: 0.75rem;">
        <button onclick="openAdminChannel('${data.id}')" class="btn btn-secondary" style="border-color: rgba(139,92,246,0.6); color: #c4b5fd;">
          <i class="fa-solid fa-lock"></i> Editar en Panel de Administrador
        </button>
        <a href="#clientes" class="btn btn-primary">
          <i class="fa-solid fa-handshake"></i> Solicitar Propuesta Comercial para este Canal
        </a>
      </div>
    </div>
  `;
}

// --- ADMIN YOUTUBE STUDIO & ARCANO CONTROLS ---

function openAdminChannel(channelId) {
  if (isTeamAuthenticated()) {
    showTeamView('youtube-studio');
    selectAdminChannel(channelId);
  } else {
    pendingTeamTab = 'youtube-channel:' + channelId;
    openAuthModal('youtube-channel:' + channelId);
  }
}

function selectAdminChannel(channelId) {
  window.pendingAdminChannel = channelId;
  const channelBtns = {
    'arcano': 'studio-btn-arcano',
    'mateo_fintech': 'studio-btn-mateo',
    'mateo': 'studio-btn-mateo',
    'kira_gamedev': 'studio-btn-kira',
    'kira': 'studio-btn-kira',
    'ranchera': 'studio-btn-ranchera',
    'arcanotech': 'studio-btn-arcanotech',
    'sagrados': 'studio-btn-sagrados',
    'sofia': 'studio-btn-sofia',
    'orcaester': 'studio-btn-orcaester'
  };

  // Reset active buttons
  Object.values(channelBtns).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });

  const activeBtnId = channelBtns[channelId] || 'studio-btn-arcano';
  const activeBtn = document.getElementById(activeBtnId);
  if (activeBtn) activeBtn.classList.add('active');

  renderAdminYoutubeStudio(channelId);
}

function copyToClipboard(text, btnElement) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyFeedback(btnElement);
    });
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showCopyFeedback(btnElement);
  }
}

function showCopyFeedback(btnElement) {
  if (!btnElement) return;
  const origHtml = btnElement.innerHTML;
  btnElement.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i> ¡Copiado!';
  btnElement.style.borderColor = '#10b981';
  setTimeout(() => {
    btnElement.innerHTML = origHtml;
    btnElement.style.borderColor = '';
  }, 1800);
}

function copyCurrentStudioKit() {
  const currentCh = window.pendingAdminChannel || 'arcano';
  const data = channelsData[currentCh] || channelsData['arcano'];
  const text = `CANAL: ${data.title}\nCONCEPTO: ${data.concept}\nPIPELINE: ${data.pipeline}\nMONETIZACIÓN: ${data.monetization}`;
  copyToClipboard(text, event ? event.target : null);
  alert(`Paquete de metadatos copiado para: ${data.title}`);
}

function previewArchiveTrack(title, bpm, key) {
  alert(`▶ Reproduciendo muestra de audio masterizado: "${title}"\nTempo: ${bpm} BPM | Escala: ${key}\nMasterizado profesional a -14 LUFS.`);
}

// Master Blueprint Studio Tab Switcher
function switchBlueprintStudioTab(tabId) {
  const tabs = ['sop', 'audio', 'visual', 'branding', 'seo'];
  tabs.forEach(t => {
    const btn = document.getElementById(`blueprint-tab-btn-${t}`);
    const pane = document.getElementById(`blueprint-pane-${t}`);
    if (btn) btn.classList.toggle('active', t === tabId);
    if (pane) pane.style.display = t === tabId ? 'block' : 'none';
  });
}

function filterStudioAudioTome(tomeKey, btn) {
  const parent = btn.parentElement;
  if (parent) {
    const btns = parent.querySelectorAll('button');
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  const groups = ['tome1', 'tome2', 'tome3'];
  groups.forEach(g => {
    const groupEl = document.getElementById(`studio-audio-${g}`);
    if (groupEl) groupEl.style.display = g === tomeKey ? 'flex' : 'none';
  });
}

const STUDIO_YOUTUBE_TEMPLATES = {
  1: `TÍTULO SUGERIDO:
Ancient Elven Library (Ambient Fantasy Music & Rain) 1.5 HOURS | Deep Reading & Tranquil Study

DESCRIPCIÓN COMPLETA:
"Has cruzado el umbral del Gran Arcano. Frente a ti se abre Tome I — Whispers of the Moonlit Sanctuary, un registro sonoro y visual custodiado en la Bóveda del Vacío."

🌌 LORE DEL REGISTRO:
En los claustros de cristal de Sylveria, el Archicanciller Aurelius y el dragón Umbraxion preservan las frecuencias de los mundos perdidos. El polvo cósmico lila suspendido en el aire y la lluvia tenue disuelven la prisa mortal, abriendo el umbral de la concentración pura.

Este compendio acústico ha sido forjado para lectura reflexiva, concentración prolongada y reducción de cortisol, sin saltos de volumen abruptos ni fatiga auditiva.

⏱️ MARCADORES DE TIEMPO (TIMESTAMPS & TRACKLIST):
00:00 - Track 1A: Sylverian Starlight Harp & Dew (60 BPM | D Dorian)
30:00 - Track 1B: Breeze Through the High Scriptorium (58 BPM | A Pentatonic)
1:00:00 - Track 1C: The Starlight Maiden’s Incantation (62 BPM | E Aeolian)

🍅 TÉCNICA DE ESTUDIO RECOMENDADA (DEEP FOCUS POMODORO 50/10):
00:00 - Bloque de Enfoque Profundo I (50 min)
50:00 - Transición / Pausa de respiración, agua y descanso visual (10 min)
1:00:00 - Bloque de Enfoque Profundo II (50 min)
1:50:00 - Cierre del Tomo y asimilación

🎧 ESPECIFICACIONES TÉCNICAS DE AUDIO:
• Masterizado profesional a -14 LUFS Integrated para YouTube.
• Afinación armónica a 432 Hz / Frecuencias sub-graves templadas a 50 Hz.
• Apto para auriculares abiertos, monitores de estudio y parlantes de escritorio.

📜 DESCARGO ÉTICO, LEGAL Y CREATIVE COMMONS:
Todas las piezas musicales y cinemáticas visuales de The Infinite Archive son generadas mediante ingeniería de prompts propietaria, modelos de síntesis de audio/video de última generación y masterización profesional en DAW.
• LIBRE DE CONTENT ID: Puedes utilizar este video como fondo musical para tus transmisiones en vivo (Twitch, YouTube, Kick) o sesiones de estudio sin riesgo de reclamos de derechos ni desmonetización.

🔗 CONEXIÓN CON LA BÓVEDA DEL GRAN ARCANO:
• Plataforma Web Interactiva: https://infinitearchive.vault
• Repositorio GitHub: https://github.com/danisantanderurrutia-coder/LMNJDRS
• Grimorio & Comunidad: https://discord.gg/infinite-archive

#TheInfiniteArchive #ElvenMusic #FantasyStudy #DeepCalm #AmbientMusic #StudyWithMe

TAGS (25 ETIQUETAS ESTRATÉGICAS):
fantasy study music, medieval ambient focus, elven library ambience, deep work music coding, programmer focus beats, flow state ambient, dark academia study music, reading music fantasy, calm harp ambience, dwarven forge ambience, winter keep fireplace, ambient music 2 hours, lofi fantasy ambient, sleep fantasy sounds, relaxing rpg music, tabletop background music, dnd study playlist, focus music no drums, rain on window fantasy, chillwave fantasy, cinemagraph study background, medieval writing music, ambient soundscape study, study with me fantasy, the infinite archive`,

  2: `TÍTULO SUGERIDO:
Dwarven Forge Deep Work Ambience (65 BPM Hammer & Drone) 2 HOURS | Flow State & Coding

DESCRIPCIÓN COMPLETA:
"Has descendido a las fraguas abisales de Kar-Thuldum, registradas en el Códice II del Gran Arcano por Aurelius y el dragón Umbraxion."

🌌 LORE DEL REGISTRO:
Bajo las raíces de la cordillera subterránea, los maestros herreros funden aleaciones estelares con martillazos acompasados. El pulso hipnótico del yunque y los drones de piedra activan el estado de hiperconcentración ideal para arquitectos de software, matemáticos y artesanos intelectuales.

⏱️ MARCADORES DE TIEMPO (TIMESTAMPS & TRACKLIST):
00:00 - Track 2A: The Rhythmic Strike of the Anvil (65 BPM | C Minor Dorian)
40:00 - Track 2B: Chants of the Subterranean Guilds (65 BPM | G Deep Minor)
1:20:00 - Track 2C: Gears in the Magma Chamber (66 BPM | D Minor)

🍅 TÉCNICA DE ESTUDIO RECOMENDADA (DEEP CODING FLOW 50/10):
00:00 - Sprint de Programación y Arquitectura I (50 min)
50:00 - Descanso ergonómico y estiramiento (10 min)
1:00:00 - Sprint de Programación y Refactor II (50 min)
1:50:00 - Debugging final y cierre de sesión

🎧 ESPECIFICACIONES TÉCNICAS DE AUDIO:
• Masterizado a -14 LUFS Integrated.
• Pulso a 65 BPM actuando como metrónomo cognitivo sin fatiga.
• Resonancia de graves a 50Hz, sin agudos estridentes.

📜 DESCARGO ÉTICO, LEGAL Y CREATIVE COMMONS:
Piezas sonoras y visuales generadas con IA y masterizadas en estudio analógico/digital.
• LIBRE DE CONTENT ID: Apto para streaming en vivo (Twitch, YouTube) sin reclamos de derechos.

#DwarvenForge #FlowState #DeepCoding #TheInfiniteArchive #ProductivityMusic

TAGS (25 ETIQUETAS ESTRATÉGICAS):
dwarven forge ambience, deep work music coding, programmer focus beats, flow state ambient, study music for programmers, mechanical study beats, fantasy forge ambience, dwarven fantasy music, rhythmic study music, coding background noise, non fatiguing study music, ambient drone coding, dark fantasy study, 65 bpm focus music, taiko drums study, bronze singing bowls, subterranean ambient, focus beats no vocals, software engineer music, 2 hours coding music, productive study session, epic ambient flow, deep thought music, technical writing ambience, the infinite archive`,

  3: `TÍTULO SUGERIDO:
Medieval Winter Keep (Sad Cello & Blizzard Fireplace) 2 HOURS | Writing & Deep Solitude

DESCRIPCIÓN COMPLETA:
"Afuera aúlla la ventisca polar del fin del mundo; dentro del Bastión de Obsidiana, el fuego resguarda tus palabras junto al Gran Arcano."

🌌 LORE DEL REGISTRO:
En el confín helado de las Tierras Sombrías, una torre de obsidiana resiste el viento gélido. En su interior, un fuego de roble crepita mientras un violonchelo solitario teje la banda sonora de la memoria, el aislamiento creativo y el análisis minucioso.

⏱️ MARCADORES DE TIEMPO (TIMESTAMPS & TRACKLIST):
00:00 - Track 3A: The Solitary Cellist of the Bastion (56 BPM | B Minor Aeolian)
40:00 - Track 3B: Old Parchment and Bitter Cold (58 BPM | F# Minor)
1:20:00 - Track 3C: Bell of the Frozen Keep (50 BPM | C# Ambient Drone)

🍅 TÉCNICA DE ESTUDIO RECOMENDADA (WRITING INTROSPECTION 50/10):
00:00 - Sesión de Redacción e Investigación I (50 min)
50:00 - Pausa de té caliente y reposo mental (10 min)
1:00:00 - Sesión de Redacción Creativa II (50 min)
1:50:00 - Pulido y lectura final

🎧 ESPECIFICACIONES TÉCNICAS DE AUDIO:
• Masterizado a -14 LUFS Integrated.
• Afinación armónica a 432 Hz con texturas acústicas de arco y leña.

#ObsidianBastion #WinterAmbience #WritingMusic #DarkAcademia #SadCello #SolitudeStudy

TAGS (25 ETIQUETAS ESTRATÉGICAS):
winter keep fireplace ambience, sad cello study music, medieval blizzard writing music, dark academia focus, lonely castle ambience, writing music fantasy, melancholic cello ambient, fireplace snow storm, study with me winter, dark fantasy writing, deep solitude ambience, medieval lute study, quiet study room blizzard, cold winter ambience, creative writing playlist, emotional ambient strings, rain and fire study, essay writing music, worldbuilding ambient, peaceful winter sleep, reading by the fireplace, 432 hz fantasy music, atmospheric cello drone, nocturnal study vibes, the infinite archive`
};

function loadStudioYouTubeTome(tomeNum, btn) {
  const parent = btn.parentElement;
  if (parent) {
    const btns = parent.querySelectorAll('button');
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  const exportEl = document.getElementById('studio-youtube-export');
  if (exportEl && STUDIO_YOUTUBE_TEMPLATES[tomeNum]) {
    exportEl.value = STUDIO_YOUTUBE_TEMPLATES[tomeNum];
    showCopyFeedback(btn);
  }
}

function renderAdminYoutubeStudio(channelId = 'arcano') {
  const container = document.getElementById('team-admin-youtube-content');
  if (!container) return;

  const data = channelsData[channelId] || channelsData['arcano'];

  if (channelId === 'arcano' || channelId === 'infinite-archive') {
    container.innerHTML = `
      <!-- ============================================================== -->
      <!-- MASTER BLUEPRINT CONTENT CREATION STUDIO • THE INFINITE ARCHIVE -->
      <!-- ============================================================== -->
      <div style="background: rgba(14,19,31,0.95); border: 1px solid rgba(168,85,247,0.35); border-radius: 16px; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 20px 50px rgba(0,0,0,0.6); position: relative; overflow: hidden;">
        
        <!-- Ambient glow header -->
        <div style="position: absolute; top: -50px; right: -50px; width: 250px; height: 250px; background: radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%); pointer-events: none;"></div>
        <div style="position: absolute; bottom: -50px; left: -50px; width: 250px; height: 250px; background: radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%); pointer-events: none;"></div>

        <!-- Studio Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.75rem; flex-wrap: wrap; gap: 1rem; position: relative; z-index: 2;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.4rem;">
              <span class="detail-badge" style="background: rgba(168,85,247,0.2); color: #e9d5ff; border-color: #a855f7; font-size: 0.72rem; padding: 0.25rem 0.65rem;">
                <i class="fa-solid fa-wand-magic-sparkles"></i> MASTER BLUEPRINT STUDIO
              </span>
              <span style="font-size: 0.72rem; font-family: monospace; color: #22d3ee; background: rgba(34,211,238,0.1); border: 1px solid rgba(34,211,238,0.3); padding: 0.2rem 0.55rem; border-radius: 4px;">
                Pipeline v2.0 • 5 Fases
              </span>
            </div>
            <h3 style="color: #fff; font-family: var(--font-heading); font-size: 1.75rem; margin: 0 0 0.35rem 0; font-weight: 800; letter-spacing: -0.01em;">
              Estudio de Creación de Material: The Infinite Archive
            </h3>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0; max-width: 780px; line-height: 1.6;">
              Guía operativa, generador de prompts (Audio IA + Cinemagraphs Loops) y ensamblador de metadatos SEO. Cómo crear y publicar cada pieza siguiendo el Master Blueprint oficial.
            </p>
          </div>

          <div style="display: flex; gap: 0.6rem; align-items: center; flex-wrap: wrap;">
            <button onclick="copyToClipboard(document.getElementById('studio-youtube-export').value, this)" class="btn btn-primary" style="background: linear-gradient(135deg, #22d3ee, #0284c7); border: none; font-size: 0.82rem; font-weight: 700; box-shadow: 0 0 20px rgba(34,211,238,0.25);">
              <i class="fa-solid fa-bolt"></i> Copiar Paquete YouTube (1-Click)
            </button>
            <button onclick="switchView('archive')" class="btn btn-secondary" style="font-size: 0.82rem; border-color: rgba(255,255,255,0.2);">
              <i class="fa-solid fa-eye"></i> Ver Bóveda Pública
            </button>
          </div>
        </div>

        <!-- Pestañas del Studio de Creación -->
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem;">
          <button id="blueprint-tab-btn-sop" class="archive-subtab-btn active" onclick="switchBlueprintStudioTab('sop')">
            <i class="fa-solid fa-list-check" style="color: #f59e0b;"></i> 1. SOP de Creación (Paso a Paso)
          </button>
          <button id="blueprint-tab-btn-audio" class="archive-subtab-btn" onclick="switchBlueprintStudioTab('audio')">
            <i class="fa-solid fa-music" style="color: #22d3ee;"></i> 2. Prompts de Audio IA (Udio / Suno)
          </button>
          <button id="blueprint-tab-btn-visual" class="archive-subtab-btn" onclick="switchBlueprintStudioTab('visual')">
            <i class="fa-solid fa-camera-retro" style="color: #a855f7;"></i> 3. Prompts Visuales & Loops (Midjourney / Runway)
          </button>
          <button id="blueprint-tab-btn-branding" class="archive-subtab-btn" onclick="switchBlueprintStudioTab('branding')">
            <i class="fa-solid fa-palette" style="color: #ec4899;"></i> 4. Tokens de Marca & Diseño
          </button>
          <button id="blueprint-tab-btn-seo" class="archive-subtab-btn" onclick="switchBlueprintStudioTab('seo')">
            <i class="fa-brands fa-youtube" style="color: #ef4444;"></i> 5. Kit SEO & Exportador
          </button>
        </div>

        <!-- ========================================================= -->
        <!-- PESTAÑA 1: SOP DE CREACIÓN PASO A PASO                     -->
        <!-- ========================================================= -->
        <div id="blueprint-pane-sop" class="blueprint-studio-pane" style="display: block;">
          <div style="margin-bottom: 1.5rem;">
            <h4 style="color: #fff; font-size: 1.15rem; margin: 0 0 0.5rem 0;">
              <i class="fa-solid fa-compass" style="color: #f59e0b; margin-right: 0.4rem;"></i> Procedimiento Operativo Estándar (SOP de 5 Fases)
            </h4>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0;">
              Sigue esta secuencia para fabricar cada entrega audiovisual de 1.5h a 2h con cero reclamos de copyright y máxima retención auditiva.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
            
            <!-- Fase 1 -->
            <div style="background: #06080d; border: 1px solid rgba(245,158,11,0.3); border-radius: 10px; padding: 1.25rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span style="font-size: 0.72rem; font-family: monospace; color: #f59e0b; font-weight: 700;">FASE 1 • CONCEPCIÓN</span>
                <span style="font-size: 0.75rem; background: rgba(245,158,11,0.15); color: #fde68a; padding: 0.15rem 0.45rem; border-radius: 4px;">Paso 1</span>
              </div>
              <h5 style="color: #fff; font-size: 0.95rem; margin: 0 0 0.5rem 0;">Lore del Tomo & Mindset</h5>
              <ul style="color: #cbd5e1; font-size: 0.8rem; line-height: 1.6; padding-left: 1.2rem; margin: 0;">
                <li>Selecciona el reino: <em>Élfico (60 BPM)</em>, <em>Enano (65 BPM)</em> o <em>Norteño (56 BPM)</em>.</li>
                <li>Redacta la historia del Códice como narrador del Gran Arcano (Aurelius y Umbraxion).</li>
                <li>Define la afinación a <strong>432 Hz</strong> para propósitos de calma y estudio.</li>
              </ul>
            </div>

            <!-- Fase 2 -->
            <div style="background: #06080d; border: 1px solid rgba(34,211,238,0.3); border-radius: 10px; padding: 1.25rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span style="font-size: 0.72rem; font-family: monospace; color: #22d3ee; font-weight: 700;">FASE 2 • AUDIO SÍNTESIS</span>
                <span style="font-size: 0.75rem; background: rgba(34,211,238,0.15); color: #a5f3fc; padding: 0.15rem 0.45rem; border-radius: 4px;">Paso 2</span>
              </div>
              <h5 style="color: #fff; font-size: 0.95rem; margin: 0 0 0.5rem 0;">Generación Acústica (Udio/Suno)</h5>
              <ul style="color: #cbd5e1; font-size: 0.8rem; line-height: 1.6; padding-left: 1.2rem; margin: 0;">
                <li>Usa la fórmula: <code>[Instrumento líder] + [Fondo atmosférico] + [BPM exacto] + [Escala menor/dórica]</code>.</li>
                <li>Comando negativo obligatorio: <em>no drums, no abrupt peaks, non-fatiguing mixdown</em>.</li>
                <li>Genera 3 pistas de 3 a 5 minutos y expórtalas en WAV 24-bit.</li>
              </ul>
            </div>

            <!-- Fase 3 -->
            <div style="background: #06080d; border: 1px solid rgba(168,85,247,0.3); border-radius: 10px; padding: 1.25rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span style="font-size: 0.72rem; font-family: monospace; color: #a855f7; font-weight: 700;">FASE 3 • CINEMAGRAPHS</span>
                <span style="font-size: 0.75rem; background: rgba(168,85,247,0.15); color: #e9d5ff; padding: 0.15rem 0.45rem; border-radius: 4px;">Paso 3</span>
              </div>
              <h5 style="color: #fff; font-size: 0.95rem; margin: 0 0 0.5rem 0;">Visuales en Bucle 8K</h5>
              <ul style="color: #cbd5e1; font-size: 0.8rem; line-height: 1.6; padding-left: 1.2rem; margin: 0;">
                <li>Genera el frame base en Midjourney v6.1 con <code>--ar 16:9 --style raw</code>.</li>
                <li>Incluye polvo lila cósmico, iluminación neonwave y texturas góticas.</li>
                <li>Anima en Runway Gen-3 / Luma con <em>Static Camera, subtle breathing loop, seamless 10-15s</em>.</li>
              </ul>
            </div>

            <!-- Fase 4 -->
            <div style="background: #06080d; border: 1px solid rgba(56,189,248,0.3); border-radius: 10px; padding: 1.25rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span style="font-size: 0.72rem; font-family: monospace; color: #38bdf8; font-weight: 700;">FASE 4 • MONTAJE & MASTER</span>
                <span style="font-size: 0.75rem; background: rgba(56,189,248,0.15); color: #bae6fd; padding: 0.15rem 0.45rem; border-radius: 4px;">Paso 4</span>
              </div>
              <h5 style="color: #fff; font-size: 0.95rem; margin: 0 0 0.5rem 0;">Timeline NLE (DaVinci/Premiere)</h5>
              <ul style="color: #cbd5e1; font-size: 0.8rem; line-height: 1.6; padding-left: 1.2rem; margin: 0;">
                <li>Extiende la duración a 1.5h o 2.0h encadenando las 3 pistas temáticas.</li>
                <li>Aplica fundido cruzado constante de 10 a 12 segundos para evitar pausas.</li>
                <li>Masteriza el audio final a <strong>-14 LUFS Integrated</strong> (estándar YouTube).</li>
              </ul>
            </div>

            <!-- Fase 5 -->
            <div style="background: #06080d; border: 1px solid rgba(16,185,129,0.3); border-radius: 10px; padding: 1.25rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <span style="font-size: 0.72rem; font-family: monospace; color: #10b981; font-weight: 700;">FASE 5 • PUBLICACIÓN</span>
                <span style="font-size: 0.75rem; background: rgba(16,185,129,0.15); color: #a7f3d0; padding: 0.15rem 0.45rem; border-radius: 4px;">Paso 5</span>
              </div>
              <h5 style="color: #fff; font-size: 0.95rem; margin: 0 0 0.5rem 0;">YouTube Studio & Distribución</h5>
              <ul style="color: #cbd5e1; font-size: 0.8rem; line-height: 1.6; padding-left: 1.2rem; margin: 0;">
                <li>Copia el título optimizado y descripción estructurada con Pomodoro 50/10.</li>
                <li>Pega el bloque de 25 etiquetas de nicho focus/fantasy.</li>
                <li>Declara contenido de IA en YouTube Studio y marca <strong>Categoría: Música</strong>.</li>
              </ul>
            </div>

          </div>
        </div>

        <!-- ========================================================= -->
        <!-- PESTAÑA 2: PROMPTS DE AUDIO IA (UDIO / SUNO)               -->
        <!-- ========================================================= -->
        <div id="blueprint-pane-audio" class="blueprint-studio-pane" style="display: none;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
            <div>
              <h4 style="color: #fff; font-size: 1.15rem; margin: 0;">
                <i class="fa-solid fa-music" style="color: #22d3ee; margin-right: 0.4rem;"></i> Prompts de Audio IA por Tomo & Universo
              </h4>
              <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0.25rem 0 0 0;">
                Afinados para 432 Hz, sin fatiga auditiva, con tempo controlado para estudio y codificación.
              </p>
            </div>
            
            <div style="display: flex; gap: 0.5rem;">
              <button class="archive-filter-btn active" onclick="filterStudioAudioTome('tome1', this)">🌿 Tomo I (Élfico)</button>
              <button class="archive-filter-btn" onclick="filterStudioAudioTome('tome2', this)">⚒️ Codex II (Enano)</button>
              <button class="archive-filter-btn" onclick="filterStudioAudioTome('tome3', this)">❄️ Archive III (Norteño)</button>
            </div>
          </div>

          <!-- Pistas Tomo 1 -->
          <div id="studio-audio-tome1" class="studio-audio-group" style="display: flex; flex-direction: column; gap: 1rem;">
            
            <div style="background: #06080d; border: 1px solid rgba(34,211,238,0.25); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div>
                  <strong style="color: #22d3ee; font-size: 0.9rem;">Track 1A: Sylverian Starlight Harp & Dew</strong>
                  <span style="font-size: 0.75rem; font-family: monospace; color: #d4af37; margin-left: 0.5rem;">60 BPM • D Minor Dorian</span>
                </div>
                <button onclick="copyToClipboard('Ethereal ambient elven music, floating acoustic Celtic harp arpeggios, gentle bamboo bansuri flute melodies, warm legato string quartet, deep sub-bass drone, soft night forest rain and gentle river water stream soundscape, 60 BPM, D minor dorian, spacious reverb, crystal clear mix, no percussion, no drums, master quality', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Ethereal ambient elven music, floating acoustic Celtic harp arpeggios, gentle bamboo bansuri flute melodies, warm legato string quartet, deep sub-bass drone, soft night forest rain and gentle river water stream soundscape, 60 BPM, D minor dorian, spacious reverb, crystal clear mix, no percussion, no drums, master quality
              </code>
            </div>

            <div style="background: #06080d; border: 1px solid rgba(34,211,238,0.25); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div>
                  <strong style="color: #22d3ee; font-size: 0.9rem;">Track 1B: Breeze Through the High Scriptorium</strong>
                  <span style="font-size: 0.75rem; font-family: monospace; color: #d4af37; margin-left: 0.5rem;">58 BPM • A Minor Pentatonic</span>
                </div>
                <button onclick="copyToClipboard('Nocturnal ambient soundscape, soft felt piano chords, bowed glass harmonics, distant night wind blowing through crystalline vaulted ceilings, subtle bioluminescent bell chimes, binaural theta wave hum (6Hz), meditative study atmosphere, cinematic fantasy score, 58 BPM, peaceful and nostalgic, unhurried pacing', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Nocturnal ambient soundscape, soft felt piano chords, bowed glass harmonics, distant night wind blowing through crystalline vaulted ceilings, subtle bioluminescent bell chimes, binaural theta wave hum (6Hz), meditative study atmosphere, cinematic fantasy score, 58 BPM, peaceful and nostalgic, unhurried pacing
              </code>
            </div>

            <div style="background: #06080d; border: 1px solid rgba(34,211,238,0.25); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div>
                  <strong style="color: #22d3ee; font-size: 0.9rem;">Track 1C: The Starlight Maiden’s Incantation</strong>
                  <span style="font-size: 0.75rem; font-family: monospace; color: #d4af37; margin-left: 0.5rem;">62 BPM • E Minor Aeolian</span>
                </div>
                <button onclick="copyToClipboard('Angelic female soprano wordless vocalise, distant choir pads, soft raindrops splashing on stained glass rose windows, warm analog synth warmth under fantasy orchestral cello, 62 BPM, ethereal fantasy chillwave, sparkling high frequencies, gentle meditation, deep sleep and profound reading focus', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Angelic female soprano wordless vocalise, distant choir pads, soft raindrops splashing on stained glass rose windows, warm analog synth warmth under fantasy orchestral cello, 62 BPM, ethereal fantasy chillwave, sparkling high frequencies, gentle meditation, deep sleep and profound reading focus
              </code>
            </div>

          </div>

          <!-- Pistas Tomo 2 (Enano) -->
          <div id="studio-audio-tome2" class="studio-audio-group" style="display: none; flex-direction: column; gap: 1rem;">
            
            <div style="background: #06080d; border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div>
                  <strong style="color: #d4af37; font-size: 0.9rem;">Track 2A: The Rhythmic Strike of the Anvil</strong>
                  <span style="font-size: 0.75rem; font-family: monospace; color: #22d3ee; margin-left: 0.5rem;">65 BPM • C Minor Dorian</span>
                </div>
                <button onclick="copyToClipboard('Deep steady atmospheric coding music, distant muffled metallic hammer strikes acting as steady 65 BPM metronome, resonant bronze singing bowls, low C-string drone of double bass and contrabass, warm industrial fantasy textures, dark stone echo, subtle ember crackle, hypnotic productivity flow state soundtrack, no abrasive highs, non-fatiguing mixdown', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Deep steady atmospheric coding music, distant muffled metallic hammer strikes acting as steady 65 BPM metronome, resonant bronze singing bowls, low C-string drone of double bass and contrabass, warm industrial fantasy textures, dark stone echo, subtle ember crackle, hypnotic productivity flow state soundtrack, no abrasive highs, non-fatiguing mixdown
              </code>
            </div>

            <div style="background: #06080d; border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div>
                  <strong style="color: #d4af37; font-size: 0.9rem;">Track 2B: Chants of the Subterranean Guilds</strong>
                  <span style="font-size: 0.75rem; font-family: monospace; color: #22d3ee; margin-left: 0.5rem;">65 BPM • G Deep Minor</span>
                </div>
                <button onclick="copyToClipboard('Ultra-low guttural male throat singing drone, solemn Nordic and dwarven harmonic chanting, echoing through a massive basalt cavern, resonant forge air blowers breathing in slow rhythm, gentle fire furnace hum, warm sub frequencies (50Hz), deep work and programming endurance soundtrack', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Ultra-low guttural male throat singing drone, solemn Nordic and dwarven harmonic chanting, echoing through a massive basalt cavern, resonant forge air blowers breathing in slow rhythm, gentle fire furnace hum, warm sub frequencies (50Hz), deep work and programming endurance soundtrack
              </code>
            </div>

            <div style="background: #06080d; border: 1px solid rgba(212,175,55,0.25); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div>
                  <strong style="color: #d4af37; font-size: 0.9rem;">Track 2C: Gears in the Magma Chamber</strong>
                  <span style="font-size: 0.75rem; font-family: monospace; color: #22d3ee; margin-left: 0.5rem;">66 BPM • D Minor</span>
                </div>
                <button onclick="copyToClipboard('Low warm acoustic frame drums and muffled taiko rolling pattern, heavy rhythmic pulse without sudden peaks, rhythmic ticking of brass clockwork gears, deep tectonic earth rumble, steady focus music for software engineering and technical writing, rich analog warmth, zero vocal distraction', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Low warm acoustic frame drums and muffled taiko rolling pattern, heavy rhythmic pulse without sudden peaks, rhythmic ticking of brass clockwork gears, deep tectonic earth rumble, steady focus music for software engineering and technical writing, rich analog warmth, zero vocal distraction
              </code>
            </div>

          </div>

          <!-- Pistas Tomo 3 (Norteño) -->
          <div id="studio-audio-tome3" class="studio-audio-group" style="display: none; flex-direction: column; gap: 1rem;">
            
            <div style="background: #06080d; border: 1px solid rgba(168,85,247,0.25); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div>
                  <strong style="color: #a855f7; font-size: 0.9rem;">Track 3A: The Solitary Cellist of the Bastion</strong>
                  <span style="font-size: 0.75rem; font-family: monospace; color: #f59e0b; margin-left: 0.5rem;">56 BPM • B Minor Aeolian</span>
                </div>
                <button onclick="copyToClipboard('Solo melancholic acoustic cello melody, expressive bow scraping textures, warm wood crackling fireplace sounds, distant arctic winter blizzard howling gently outside thick stone walls, 56 BPM, slow emotional phrasing, Renaissance modal harmonies, dark academia focus music, profound introspection and nocturnal writing', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Solo melancholic acoustic cello melody, expressive bow scraping textures, warm wood crackling fireplace sounds, distant arctic winter blizzard howling gently outside thick stone walls, 56 BPM, slow emotional phrasing, Renaissance modal harmonies, dark academia focus music, profound introspection and nocturnal writing
              </code>
            </div>

            <div style="background: #06080d; border: 1px solid rgba(168,85,247,0.25); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div>
                  <strong style="color: #a855f7; font-size: 0.9rem;">Track 3B: Old Parchment and Bitter Cold</strong>
                  <span style="font-size: 0.75rem; font-family: monospace; color: #f59e0b; margin-left: 0.5rem;">58 BPM • F# Minor</span>
                </div>
                <button onclick="copyToClipboard('Medieval lute and viola da gamba counterpoint in minor key, warm close-mic recording, slow delicate plucked strings, soft breath of cold wind against glass, creaking ancient floorboards, historical dark medieval ambient for researching, essay writing and worldbuilding', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Medieval lute and viola da gamba counterpoint in minor key, warm close-mic recording, slow delicate plucked strings, soft breath of cold wind against glass, creaking ancient floorboards, historical dark medieval ambient for researching, essay writing and worldbuilding
              </code>
            </div>

            <div style="background: #06080d; border: 1px solid rgba(168,85,247,0.25); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <div>
                  <strong style="color: #a855f7; font-size: 0.9rem;">Track 3C: Bell of the Frozen Keep</strong>
                  <span style="font-size: 0.75rem; font-family: monospace; color: #f59e0b; margin-left: 0.5rem;">50 BPM • C# Drone</span>
                </div>
                <button onclick="copyToClipboard('Cold ambient winter drone, crystalline overtone singing bowls, distant deep brass fortress bell chiming once every two minutes, soft falling snow white noise texture, dark atmosphere, peaceful solitude, deep reflection, winter fantasy study ambience', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Cold ambient winter drone, crystalline overtone singing bowls, distant deep brass fortress bell chiming once every two minutes, soft falling snow white noise texture, dark atmosphere, peaceful solitude, deep reflection, winter fantasy study ambience
              </code>
            </div>

          </div>
        </div>

        <!-- ========================================================= -->
        <!-- PESTAÑA 3: PROMPTS VISUALES & LOOPS (MIDJOURNEY / RUNWAY)  -->
        <!-- ========================================================= -->
        <div id="blueprint-pane-visual" class="blueprint-studio-pane" style="display: none;">
          <div style="margin-bottom: 1.25rem;">
            <h4 style="color: #fff; font-size: 1.15rem; margin: 0 0 0.5rem 0;">
              <i class="fa-solid fa-camera-retro" style="color: #a855f7; margin-right: 0.4rem;"></i> Fórmulas de Cinemagraphs 8K (Midjourney + Runway Gen-3)
            </h4>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0;">
              Imágenes estáticas con bucle suave de partículas, humo o lluvia. 100% consistentes con el Archicanciller Aurelius y el dragón Umbraxion.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 1rem;">
            
            <div style="background: #06080d; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong style="color: #22d3ee; font-size: 0.88rem;">1. Escena Torre & Nebulosa (Aurelius mirando la Ciudad Destruida)</strong>
                <button onclick="copyToClipboard('Cinematic shot of an ancient wise arch-mage with long white hair and a flowing long white beard, wearing dark weathered celestial robes, with an intricate brass astrolabe pendant hanging around his neck. He stands looking out a giant stone arched gothic window from a very high castle tower, gazing down at the eerie remnants of a ruined ancient city below. Outside, the dark sky blends seamlessly into deep space with glowing stars, cosmic nebula, and glittering lilac and violet dust motes. Chillwave neonwave atmospheric lighting, cyan and purple rim glow, melancholy and tranquil mood, highly detailed 8k cinematic fantasy concept art --ar 16:9 --v 6.1 --style raw', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Cinematic shot of an ancient wise arch-mage with long white hair and a flowing long white beard, wearing dark weathered celestial robes, with an intricate brass astrolabe pendant hanging around his neck. He stands looking out a giant stone arched gothic window from a very high castle tower, gazing down at the eerie remnants of a ruined ancient city below. Outside, the dark sky blends seamlessly into deep space with glowing stars, cosmic nebula, and glittering lilac and violet dust motes. Chillwave neonwave atmospheric lighting, cyan and purple rim glow, melancholy and tranquil mood, highly detailed 8k cinematic fantasy concept art --ar 16:9 --v 6.1 --style raw
              </code>
              <span style="display: block; margin-top: 0.4rem; font-size: 0.72rem; color: #94a3b8; font-family: monospace;">
                Instrucción Runway Gen-3: <em>Static camera. Subtle floating lilac dust particles, gentle wind blowing through white hair, seamless 10s loop.</em>
              </span>
            </div>

            <div style="background: #06080d; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong style="color: #d4af37; font-size: 0.88rem;">2. Escena Estudio & Vela (Aurelius leyendo Códices Antiguos)</strong>
                <button onclick="copyToClipboard('Cinematic atmospheric view of the same elderly arch-mage with long white hair and flowing white beard, wearing an ornate brass astrolabe necklace over dark celestial robes. He is sitting in a cozy medieval castle chamber library at night, reading a massive ancient leather-bound chronicle book under the warm golden glow of a flickering candlestick. Around him are stone walls with floating lilac and neon cyan dust particles, scrolls, glass hourglasses, and subtle cosmic twilight glowing through a high arched stone window. Chillwave synthwave atmosphere, highly detailed, photorealistic 8k fantasy art --ar 16:9 --v 6.1 --style raw', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Cinematic atmospheric view of the same elderly arch-mage with long white hair and flowing white beard, wearing an ornate brass astrolabe necklace over dark celestial robes. He is sitting in a cozy medieval castle chamber library at night, reading a massive ancient leather-bound chronicle book under the warm golden glow of a flickering candlestick. Around him are stone walls with floating lilac and neon cyan dust particles, scrolls, glass hourglasses, and subtle cosmic twilight glowing through a high arched stone window. Chillwave synthwave atmosphere, highly detailed, photorealistic 8k fantasy art --ar 16:9 --v 6.1 --style raw
              </code>
              <span style="display: block; margin-top: 0.4rem; font-size: 0.72rem; color: #94a3b8; font-family: monospace;">
                Instrucción Runway Gen-3: <em>Static camera. Candle flame dancing smoothly, floating glittering lilac particles, warm shadows oscillating gently.</em>
              </span>
            </div>

            <div style="background: #06080d; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 1.1rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <strong style="color: #a855f7; font-size: 0.88rem;">3. Escena El Dragón Negro (Umbraxion en el Gran Salón Gótico)</strong>
                <button onclick="copyToClipboard('Cinematic epic shot of the same elderly arch-mage with long white hair, flowing white beard and a brass astrolabe pendant around his neck, gently placing his hand affectionately on the massive snout of a colossal, magnificent friendly black dragon that is peacefully resting curled up in the center of a gigantic gothic castle hall. Colossal vaulted ceilings and gothic columns, with floating lilac, purple, and neon cyan sparkling dust motes and soft ambient chillwave fog. Soft golden light on the mage and the dragon scales, deep celestial starry night visible through huge high windows. Emotional, awe-inspiring, hyper-detailed 8k concept art --ar 16:9 --v 6.1 --style raw', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  <i class="fa-solid fa-copy"></i> Copiar Prompt
                </button>
              </div>
              <code style="font-size: 0.78rem; color: #cbd5e1; display: block; line-height: 1.5; background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 4px;">
                Cinematic epic shot of the same elderly arch-mage with long white hair, flowing white beard and a brass astrolabe pendant around his neck, gently placing his hand affectionately on the massive snout of a colossal, magnificent friendly black dragon that is peacefully resting curled up in the center of a gigantic gothic castle hall. Colossal vaulted ceilings and gothic columns, with floating lilac, purple, and neon cyan sparkling dust motes and soft ambient chillwave fog. Soft golden light on the mage and the dragon scales, deep celestial starry night visible through huge high windows. Emotional, awe-inspiring, hyper-detailed 8k concept art --ar 16:9 --v 6.1 --style raw
              </code>
              <span style="display: block; margin-top: 0.4rem; font-size: 0.72rem; color: #94a3b8; font-family: monospace;">
                Instrucción Runway Gen-3: <em>Static shot. Dragon chest breathing slowly in deep rhythm, soft smoke exhaling from nostrils, glowing dust particles drifting.</em>
              </span>
            </div>

          </div>
        </div>

        <!-- ========================================================= -->
        <!-- PESTAÑA 4: TOKENS DE MARCA & DISEÑO                        -->
        <!-- ========================================================= -->
        <div id="blueprint-pane-branding" class="blueprint-studio-pane" style="display: none;">
          <div style="margin-bottom: 1.25rem;">
            <h4 style="color: #fff; font-size: 1.15rem; margin: 0 0 0.5rem 0;">
              <i class="fa-solid fa-palette" style="color: #ec4899; margin-right: 0.4rem;"></i> Sistema Visual & Tokens Semánticos (Click para copiar HEX)
            </h4>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0;">
              Paleta oficial para miniaturas de YouTube, overlays, elementos gráficos de la plataforma y material promocional.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
            
            <div onclick="copyToClipboard('#06080D', this)" class="contact-card" style="background: #06080D; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; padding: 1rem; border-radius: 8px;">
              <div>
                <strong style="color: #fff; font-size: 0.85rem; display: block;">Dark Void / Obsidian</strong>
                <span style="color: #94a3b8; font-family: monospace; font-size: 0.75rem;">#06080D (Fondo Primario)</span>
              </div>
            </div>

            <div onclick="copyToClipboard('#0E131F', this)" class="contact-card" style="background: #0E131F; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; padding: 1rem; border-radius: 8px;">
              <div>
                <strong style="color: #fff; font-size: 0.85rem; display: block;">Arcane Slate</strong>
                <span style="color: #94a3b8; font-family: monospace; font-size: 0.75rem;">#0E131F (Superficies)</span>
              </div>
            </div>

            <div onclick="copyToClipboard('#161F30', this)" class="contact-card" style="background: #161F30; border: 1px solid rgba(255,255,255,0.2); cursor: pointer; padding: 1rem; border-radius: 8px;">
              <div>
                <strong style="color: #fff; font-size: 0.85rem; display: block;">Parchment Dark</strong>
                <span style="color: #94a3b8; font-family: monospace; font-size: 0.75rem;">#161F30 (Contenedores)</span>
              </div>
            </div>

            <div onclick="copyToClipboard('#D4AF37', this)" class="contact-card" style="background: #1a1608; border: 1px solid #D4AF37; cursor: pointer; padding: 1rem; border-radius: 8px;">
              <div>
                <strong style="color: #D4AF37; font-size: 0.85rem; display: block;">Aura de Runa (Oro)</strong>
                <span style="color: #fde68a; font-family: monospace; font-size: 0.75rem;">#D4AF37 (Acento Primario)</span>
              </div>
            </div>

            <div onclick="copyToClipboard('#22D3EE', this)" class="contact-card" style="background: #061924; border: 1px solid #22D3EE; cursor: pointer; padding: 1rem; border-radius: 8px;">
              <div>
                <strong style="color: #22D3EE; font-size: 0.85rem; display: block;">Luz Élfica (Cian)</strong>
                <span style="color: #a5f3fc; font-family: monospace; font-size: 0.75rem;">#22D3EE (Acento Neonwave)</span>
              </div>
            </div>

            <div onclick="copyToClipboard('#A855F7', this)" class="contact-card" style="background: #190a29; border: 1px solid #A855F7; cursor: pointer; padding: 1rem; border-radius: 8px;">
              <div>
                <strong style="color: #A855F7; font-size: 0.85rem; display: block;">Magenta Astral (Lila)</strong>
                <span style="color: #e9d5ff; font-family: monospace; font-size: 0.75rem;">#A855F7 (Polvo Chillwave)</span>
              </div>
            </div>

          </div>

          <div style="background: #06080d; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 1.25rem;">
            <h5 style="color: #fff; font-size: 0.9rem; margin: 0 0 0.5rem 0;">Reglas de Composición de Assets de YouTube:</h5>
            <ul style="color: #94a3b8; font-size: 0.8rem; line-height: 1.6; margin: 0; padding-left: 1.2rem;">
              <li><strong>Miniatura (1280x720):</strong> Sujeto principal iluminado con halo cian o dorado en tercio derecho/central; tipografía máxima de 4 palabras en <em>Cinzel Bold</em> con trazo negro y glow lila.</li>
              <li><strong>Banner (2560x1440):</strong> Safe Zone central de <strong>1546 x 423 px</strong> para el lema <em>"The Infinite Archive — Chronicled by The Grand Arcanum"</em> y el astrolabio central.</li>
              <li><strong>Avatar / Sigil (1:1):</strong> Emblema geométrico rúnico centrado con fondo transparente o Dark Void con borde circular de oro alquímico.</li>
            </ul>
          </div>
        </div>

        <!-- ========================================================= -->
        <!-- PESTAÑA 5: KIT SEO & EXPORTADOR YOUTUBE                    -->
        <!-- ========================================================= -->
        <div id="blueprint-pane-seo" class="blueprint-studio-pane" style="display: none;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.75rem;">
            <div>
              <h4 style="color: #fff; font-size: 1.15rem; margin: 0;">
                <i class="fa-brands fa-youtube" style="color: #ef4444; margin-right: 0.4rem;"></i> Paquete SEO Listo para YouTube Studio
              </h4>
              <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0.25rem 0 0 0;">
                Selecciona el tomo para cargar instantáneamente su título, lore, timestamps con técnica Pomodoro y 25 tags.
              </p>
            </div>
            
            <div style="display: flex; gap: 0.5rem;">
              <button class="archive-filter-btn active" onclick="loadStudioYouTubeTome(1, this)">Tomo I (1.5h)</button>
              <button class="archive-filter-btn" onclick="loadStudioYouTubeTome(2, this)">Codex II (2h)</button>
              <button class="archive-filter-btn" onclick="loadStudioYouTubeTome(3, this)">Archive III (2h)</button>
            </div>
          </div>

          <textarea id="studio-youtube-export" readonly style="width: 100%; height: 280px; background: #06080d; border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; color: #cbd5e1; font-family: monospace; font-size: 0.78rem; padding: 1rem; resize: vertical; line-height: 1.55;">
TÍTULO SUGERIDO:
Ancient Elven Library (Ambient Fantasy Music & Rain) 1.5 HOURS | Deep Reading & Tranquil Study

DESCRIPCIÓN COMPLETA:
"Has cruzado el umbral del Gran Arcano. Frente a ti se abre Tome I — Whispers of the Moonlit Sanctuary, un registro sonoro y visual custodiado en la Bóveda del Vacío."

🌌 LORE DEL REGISTRO:
En los claustros de cristal de Sylveria, el Archicanciller Aurelius y el dragón Umbraxion preservan las frecuencias de los mundos perdidos. El polvo cósmico lila suspendido en el aire y la lluvia tenue disuelven la prisa mortal, abriendo el umbral de la concentración pura.

Este compendio acústico ha sido forjado para lectura reflexiva, concentración prolongada y reducción de cortisol, sin saltos de volumen abruptos ni fatiga auditiva.

⏱️ MARCADORES DE TIEMPO (TIMESTAMPS & TRACKLIST):
00:00 - Track 1A: Sylverian Starlight Harp & Dew (60 BPM | D Dorian)
30:00 - Track 1B: Breeze Through the High Scriptorium (58 BPM | A Pentatonic)
1:00:00 - Track 1C: The Starlight Maiden’s Incantation (62 BPM | E Aeolian)

🍅 TÉCNICA DE ESTUDIO RECOMENDADA (DEEP FOCUS POMODORO 50/10):
00:00 - Bloque de Enfoque Profundo I (50 min)
50:00 - Transición / Pausa de respiración, agua y descanso visual (10 min)
1:00:00 - Bloque de Enfoque Profundo II (50 min)
1:50:00 - Cierre del Tomo y asimilación

🎧 ESPECIFICACIONES TÉCNICAS DE AUDIO:
• Masterizado profesional a -14 LUFS Integrated para YouTube.
• Afinación armónica a 432 Hz / Frecuencias sub-graves templadas a 50 Hz.
• Apto para auriculares abiertos, monitores de estudio y parlantes de escritorio.

📜 DESCARGO ÉTICO, LEGAL Y CREATIVE COMMONS:
Todas las piezas musicales y cinemáticas visuales de The Infinite Archive son generadas mediante ingeniería de prompts propietaria, modelos de síntesis de audio/video de última generación y masterización profesional en DAW.
• LIBRE DE CONTENT ID: Puedes utilizar este video como fondo musical para tus transmisiones en vivo (Twitch, YouTube, Kick) o sesiones de estudio sin riesgo de reclamos de derechos ni desmonetización.

🔗 CONEXIÓN CON LA BÓVEDA DEL GRAN ARCANO:
• Plataforma Web Interactiva: https://infinitearchive.vault
• Repositorio GitHub: https://github.com/danisantanderurrutia-coder/LMNJDRS
• Grimorio & Comunidad: https://discord.gg/infinite-archive

#TheInfiniteArchive #ElvenMusic #FantasyStudy #DeepCalm #AmbientMusic #StudyWithMe

TAGS (25 ETIQUETAS ESTRATÉGICAS):
fantasy study music, medieval ambient focus, elven library ambience, deep work music coding, programmer focus beats, flow state ambient, dark academia study music, reading music fantasy, calm harp ambience, dwarven forge ambience, winter keep fireplace, ambient music 2 hours, lofi fantasy ambient, sleep fantasy sounds, relaxing rpg music, tabletop background music, dnd study playlist, focus music no drums, rain on window fantasy, chillwave fantasy, cinemagraph study background, medieval writing music, ambient soundscape study, study with me fantasy, the infinite archive
          </textarea>

          <div style="margin-top: 1rem; display: flex; gap: 0.75rem; justify-content: flex-end;">
            <button onclick="copyToClipboard(document.getElementById('studio-youtube-export').value, this)" class="btn btn-primary" style="background: linear-gradient(135deg, #22d3ee, #0284c7); border: none; font-size: 0.85rem; font-weight: 700;">
              <i class="fa-solid fa-copy"></i> Copiar Paquete Completo
            </button>
          </div>
        </div>

      </div>
    `;
    return;
  }

  // Generic Channel Admin Studio
  container.innerHTML = `
    <div style="background: rgba(14,19,31,0.85); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 2rem; margin-bottom: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span class="detail-badge" style="background: rgba(255,255,255,0.06); color: ${data.color}; border-color: ${data.color};">
            <i class="fa-solid ${data.icon}"></i> ${data.category}
          </span>
          <h3 style="color: #fff; font-family: var(--font-heading); font-size: 1.6rem; margin: 0.5rem 0 0.25rem 0;">
            ${data.title}
          </h3>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin: 0;">
            ${data.subtitle} • Gestión de episodios, prompts de miniaturas y optimización SEO.
          </p>
        </div>

        <div style="display: flex; gap: 0.5rem;">
          <a href="#channel/${data.id}" class="btn btn-secondary btn-sm" style="font-size: 0.8rem;">
            <i class="fa-solid fa-eye"></i> Ver en Catálogo Público
          </a>
        </div>
      </div>

      <!-- Specs Summary Bar -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        <div style="background: rgba(6,8,13,0.6); padding: 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
          <div style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase;">Estado de Producción</div>
          <select class="form-input" style="padding: 0.35rem 0.5rem; font-size: 0.82rem; margin-top: 0.4rem; background: #0c0f1d;">
            <option value="ready">● Listo para Publicar</option>
            <option value="render">⚙ En Render / Generación</option>
            <option value="script">📝 Guión Aprobado</option>
            <option value="draft">💡 Borrador / Ideación</option>
          </select>
        </div>

        <div style="background: rgba(6,8,13,0.6); padding: 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
          <div style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase;">Audiencia Principal</div>
          <div style="font-size: 0.85rem; color: #fff; margin-top: 0.4rem;">${data.targetAge}</div>
        </div>

        <div style="background: rgba(6,8,13,0.6); padding: 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
          <div style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase;">Pipeline de Trabajo</div>
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.4rem;">${data.pipeline}</div>
        </div>
      </div>

      <!-- Guiones y Episodios Editables -->
      <h4 style="color: #fff; font-size: 1.1rem; margin-bottom: 0.75rem;">
        <i class="fa-solid fa-file-pen" style="color: var(--cyan); margin-right: 0.4rem;"></i> Guiones de Episodios & Dirección de Miniaturas
      </h4>

      <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2rem;">
        ${data.episodes.map((ep, idx) => `
          <div style="background: #06080d; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <strong style="color: #fff; font-size: 0.95rem;">${ep.title} (${ep.duration})</strong>
              <button onclick="copyToClipboard('${ep.script.replace(/'/g, "\\'")}', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.25rem 0.6rem;">
                <i class="fa-solid fa-copy"></i> Copiar Guión
              </button>
            </div>
            
            <textarea class="form-input" rows="4" style="font-family: monospace; font-size: 0.8rem; line-height: 1.5; margin-bottom: 0.75rem; background: #0c0f1d;">${ep.script}</textarea>
            
            <div style="background: rgba(255,255,255,0.03); padding: 0.65rem 0.85rem; border-radius: 6px; font-size: 0.82rem; color: var(--text-muted);">
              <strong style="color: #e2e8f0;">Prompt Miniatura (CTR):</strong> ${ep.thumbnail}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Tags y Metadatos para YouTube -->
      <h4 style="color: #fff; font-size: 1.1rem; margin-bottom: 0.75rem;">
        <i class="fa-brands fa-youtube" style="color: #ef4444; margin-right: 0.4rem;"></i> Metadatos & SEO para YouTube Studio
      </h4>

      <div style="background: #06080d; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 1.25rem;">
        <div style="margin-bottom: 0.75rem;">
          <label style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; display: block; margin-bottom: 0.25rem;">Título Sugerido</label>
          <input type="text" class="form-input" value="${data.episodes[0] ? data.episodes[0].title : data.title}" style="background: #0c0f1d; font-size: 0.85rem;">
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <label style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase;">Etiquetas / Tags para YouTube</label>
            <button onclick="copyToClipboard('${data.category.toLowerCase()}, youtube automation, ai faceless channel, los manejadores, ${data.id}', this)" class="btn btn-secondary btn-sm" style="font-size: 0.75rem; padding: 0.2rem 0.5rem;">
              <i class="fa-solid fa-copy"></i> Copiar Tags
            </button>
          </div>
          <input type="text" class="form-input" value="${data.category.toLowerCase()}, youtube automation, ai faceless channel, los manejadores, ${data.id}, negocios digitales, inteligencia artificial" style="background: #0c0f1d; font-size: 0.82rem;">
        </div>
      </div>

    </div>
  `;
}


// RENDER: ADVISORIES DEDICATED PAGE
function renderAdvisoriesPage() {
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  container.innerHTML = `
    <div class="breadcrumb-bar">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">Asesorías Comunicacionales</span>
      </div>
      <a href="#home" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Inicio</a>
    </div>

    <!-- Header Banner -->
    <div style="text-align: center; max-width: 850px; margin: 0 auto 4rem auto;">
      <span class="section-subtitle" style="color: var(--cyan);"><i class="fa-solid fa-comments"></i> Coaching Ejecutivo & Creadores</span>
      <h1 style="font-family: var(--font-heading); font-size: 3rem; font-weight: 900; margin: 0.5rem 0 1rem 0;">
        Transforma tu Presencia Digital y Dominio Comunicacional
      </h1>
      <p style="color: var(--text-muted); font-size: 1.15rem; line-height: 1.8;">
        Ayudamos a líderes, profesionales y creadores de contenido a expresarse con autoridad, estructurar discursos de alto impacto y dominar redes de contacto internacionales.
      </p>
    </div>

    <!-- 3 Pillars Grid -->
    <div class="services-grid" style="margin-bottom: 4rem;">
      <div class="glass-card">
        <div class="service-icon" style="background: rgba(139, 92, 246, 0.15); color: var(--purple);"><i class="fa-solid fa-microphone-lines"></i></div>
        <h3 class="service-title">1. Oratoria & Presencia Escénica</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">
          Control de lenguaje corporal ante cámara, modulación de voz, superación de pánico escénico y estructura de pitch irresistible.
        </p>
      </div>

      <div class="glass-card">
        <div class="service-icon" style="background: rgba(6, 182, 212, 0.15); color: var(--cyan);"><i class="fa-solid fa-briefcase"></i></div>
        <h3 class="service-title">2. Marca Personal & Networking B2B</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">
          Posicionamiento de perfil ejecutivo en LinkedIn, redacción estratégica de autoridad e inserción en redes de alto valor.
        </p>
      </div>

      <div class="glass-card">
        <div class="service-icon" style="background: rgba(236, 72, 153, 0.15); color: var(--pink);"><i class="fa-solid fa-language"></i></div>
        <h3 class="service-title">3. Coaching de Idiomas & Negociación</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">
          Fluidez en conversaciones de alto nivel en Español, Inglés y Alemán aplicadas a acuerdos comerciales trasatlánticos.
        </p>
      </div>
    </div>

    <!-- Pricing Tiers -->
    <div class="section-header">
      <span class="section-subtitle">Tiers de Inversión</span>
      <h2 class="section-title">Planes de Asesoría Personalizada</h2>
    </div>

    <div class="pricing-grid">
      <!-- Plan 1 -->
      <div class="pricing-card">
        <div class="price-title">Sesión Diagnóstico</div>
        <div class="price-amount">$150 <span>USD / sesión</span></div>
        <ul class="price-features">
          <li><i class="fa-solid fa-check"></i> Auditoría de 60 min de tu presencia digital</li>
          <li><i class="fa-solid fa-check"></i> Análisis de tono de voz y lenguaje corporal</li>
          <li><i class="fa-solid fa-check"></i> Hoja de ruta comunicacional personalizada</li>
        </ul>
        <button class="btn btn-secondary" onclick="scrollToBooking('Sesión Diagnóstico')">Reservar Sesión</button>
      </div>

      <!-- Plan 2 (Featured) -->
      <div class="pricing-card featured">
        <div class="price-title">Programa Creador / Ejecutivo</div>
        <div class="price-amount">$850 <span>USD / mes</span></div>
        <ul class="price-features">
          <li><i class="fa-solid fa-check"></i> 4 Sesiones 1-a-1 de Coaching Intensivo</li>
          <li><i class="fa-solid fa-check"></i> Revisión de guiones de video y pitches</li>
          <li><i class="fa-solid fa-check"></i> Soporte directo por WhatsApp/Telegram</li>
          <li><i class="fa-solid fa-check"></i> Entrenamiento en oratoria ante cámara</li>
        </ul>
        <button class="btn btn-primary" onclick="scrollToBooking('Programa Creador / Ejecutivo')">Comenzar Programa</button>
      </div>

      <!-- Plan 3 -->
      <div class="pricing-card">
        <div class="price-title">Transformación Enterprise</div>
        <div class="price-amount">$2,400 <span>USD / mes</span></div>
        <ul class="price-features">
          <li><i class="fa-solid fa-check"></i> Capacitación para equipos de hasta 5 ejecutivos</li>
          <li><i class="fa-solid fa-check"></i> Diseño completo de narrativa corporativa</li>
          <li><i class="fa-solid fa-check"></i> Media training y preparación para prensa</li>
          <li><i class="fa-solid fa-check"></i> Acceso ilimitado a nuestros prompts de IA</li>
        </ul>
        <button class="btn btn-secondary" onclick="scrollToBooking('Transformación Enterprise')">Solicitar Plan</button>
      </div>
    </div>

    <!-- Booking Form -->
    <div class="booking-form-card" id="booking-section">
      <h3 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 0.5rem; text-align: center;">Reserva tu Diagnóstico Comunicacional</h3>
      <p style="color: var(--text-muted); text-align: center; margin-bottom: 2rem;">Completa tus datos y nuestro equipo te contactará en menos de 24 horas.</p>

      <form onsubmit="handleBookingSubmit(event)">
        <div class="form-grid">
          <div class="form-group">
            <label>Nombre Completo</label>
            <input type="text" class="form-input" placeholder="Tu nombre" required>
          </div>
          <div class="form-group">
            <label>Correo Electrónico</label>
            <input type="email" class="form-input" placeholder="tu@email.com" required>
          </div>
          <div class="form-group">
            <label>Programa Deseado</label>
            <select class="form-select" id="selected-plan-dropdown">
              <option value="Sesión Diagnóstico">Sesión Diagnóstico ($150 USD)</option>
              <option value="Programa Creador / Ejecutivo" selected>Programa Creador / Ejecutivo ($850 USD/mes)</option>
              <option value="Transformación Enterprise">Transformación Enterprise ($2,400 USD/mes)</option>
            </select>
          </div>
          <div class="form-group">
            <label>Idioma Preferido</label>
            <select class="form-select">
              <option value="Español">Español</option>
              <option value="Inglés">Inglés</option>
              <option value="Alemán">Alemán</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 2rem;">
          <label>¿Cuál es tu principal objetivo comunicacional?</label>
          <textarea class="form-textarea" rows="4" placeholder="Ejemplo: Quiero mejorar mi soltura hablando a cámara en YouTube y preparar un pitch para inversores..." required></textarea>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 1.05rem; padding: 1rem;">
          <i class="fa-solid fa-paper-plane"></i> Confirmar Solicitud de Reserva
        </button>
      </form>
    </div>
  `;
}

function scrollToBooking(planName) {
  const section = document.getElementById('booking-section');
  const dropdown = document.getElementById('selected-plan-dropdown');
  if (dropdown && planName) dropdown.value = planName;
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

function handleBookingSubmit(e) {
  e.preventDefault();
  alert("¡Solicitud recibida con éxito! Nuestro equipo entre Alemania y Canadá se pondrá en contacto contigo para agendar la sesión.");
}

// ============================================================================
// RENDER: EMPRESAS B2B SOLUTIONS PAGE
// ============================================================================
function renderEmpresasPage() {
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  container.innerHTML = `
    <div class="breadcrumb-bar">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">Soluciones para Empresas & I+D</span>
      </div>
      <a href="#home" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Inicio</a>
    </div>

    <!-- Header Banner -->
    <div style="text-align: center; max-width: 880px; margin: 0 auto 3rem auto;">
      <span class="section-subtitle" style="color: var(--cyan);"><i class="fa-solid fa-bolt"></i> SOLUCIONES PARA EMPRESAS & PIPELINE I+D</span>
      <h1 style="font-family: var(--font-heading); font-size: 2.85rem; font-weight: 900; margin: 0.5rem 0 1rem 0; line-height: 1.2;">
        Herramientas de IA y Automatización Simple para Vender Más Rápido
      </h1>
      <p style="color: var(--text-muted); font-size: 1.12rem; line-height: 1.8;">
        Implementamos soluciones directas al grano: presencia local en Google Maps, ventas automáticas por WhatsApp y micro-aplicaciones seguras con Safe Vibe Coding entregadas en 24 a 48 horas para negocios que necesitan resultados inmediatos.
      </p>
      
      <!-- Metodología Reference Note -->
      <div style="display: inline-flex; align-items: center; gap: 0.75rem; background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 30px; padding: 0.5rem 1.25rem; margin-top: 1rem; font-size: 0.88rem; color: #cbd5e1;">
        <i class="fa-solid fa-lightbulb" style="color: #f59e0b;"></i>
        <span>Enfoque ágil alineado a <strong>Gestión por Procesos</strong> y <em>Safe Vibe Coding</em> (<a href="https://www.mariomorales.solutions/" target="_blank" rel="noopener noreferrer" style="color: var(--cyan); text-decoration: underline;">Mario Morales Solutions</a>)</span>
      </div>
    </div>

    <!-- FEATURED PROTAGONIST BLOCK: SAFE VIBE CODING & FORMAS RÁPIDAS DE VENDER (ASPECTO 4) -->
    <div class="glass-card" style="border: 2px solid var(--cyan); background: radial-gradient(circle at top left, rgba(6, 182, 212, 0.12) 0%, rgba(10, 12, 22, 0.85) 100%); padding: 2.5rem; border-radius: var(--radius-lg); margin-bottom: 3.5rem; box-shadow: 0 15px 45px rgba(6, 182, 212, 0.15);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <span class="detail-badge" style="background: rgba(6, 182, 212, 0.2); color: var(--cyan); border-color: var(--cyan); font-size: 0.78rem;">
            <i class="fa-solid fa-rocket"></i> SERVICIO DESTACADO • ENTREGA EN 24 A 48 HORAS
          </span>
          <h2 style="font-family: var(--font-heading); color: #fff; font-size: 1.85rem; margin: 0.5rem 0 0.25rem 0;">
            Safe Vibe Coding & Activación Rápida de Ventas Locales
          </h2>
          <p style="color: #cbd5e1; font-size: 0.95rem; margin: 0;">
            Sin meses de desarrollo ni costes desmedidos de agencia. Soluciones cortas, simples y eficientes para que tu negocio empiece a captar clientes y facturar de inmediato.
          </p>
        </div>
        <a href="#b2b-eval-form-section" class="btn btn-primary" style="padding: 0.7rem 1.4rem; font-size: 0.92rem;">
          <i class="fa-solid fa-bolt"></i> Solicitar Activación Rápida
        </a>
      </div>

      <!-- 6 Agile Solutions Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
        
        <!-- Solución 1: Reactivación de Clientes WhatsApp + Google Maps (Idea 2) -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: var(--radius-md); padding: 0 0 1.6rem 0; display: flex; flex-direction: column; overflow: hidden;">
          <div style="position: relative; width: 100%; aspect-ratio: 4 / 5; max-height: 380px; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&h=1000&q=80" alt="Reactivación de Clientes por WhatsApp & Google Maps" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" loading="lazy">
            <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,12,22,0) 60%, rgba(10,12,22,0.65) 85%, rgba(10,12,22,0.95) 100%); pointer-events: none;"></div>
            <div style="position: absolute; bottom: 0.75rem; left: 1.25rem; width: 44px; height: 44px; border-radius: 12px; background: rgba(16, 185, 129, 0.35); backdrop-filter: blur(8px); border: 1px solid rgba(16, 185, 129, 0.6); color: #10b981; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <span class="detail-badge" style="position: absolute; top: 0.75rem; right: 0.75rem; background: rgba(16, 185, 129, 0.3); backdrop-filter: blur(8px); color: #6ee7b7; border-color: rgba(16, 185, 129, 0.5); font-size: 0.72rem;">
              VENTA INMEDIATA • 48H
            </span>
          </div>
          <div style="padding: 1rem 1.6rem 0 1.6rem; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 style="color: #fff; font-size: 1.22rem; margin-bottom: 0.5rem;">Reactivación de Clientes por WhatsApp & Google Maps</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem; flex-grow: 1;">
              Convertimos bases de datos inactivas en ventas líquidas en 48 horas con mensajes personalizados sin gastar en publicidad. Además, automatizamos la respuesta al 100% de reseñas en <strong>Google Maps</strong> con SEO local para atraer clientes de tu barrio.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
              <li><i class="fa-solid fa-check" style="color: #10b981; margin-right: 0.35rem;"></i> Reactivación de clientes inactivos sin costo de pauta</li>
              <li><i class="fa-solid fa-check" style="color: #10b981; margin-right: 0.35rem;"></i> Respuesta automática con SEO en Google Maps</li>
              <li><i class="fa-solid fa-check" style="color: #10b981; margin-right: 0.35rem;"></i> Enlaces de pago y catálogo directo al chat</li>
            </ul>
          </div>
        </div>

        <!-- Solución 2: Clon Digital del CEO / Fundador (Idea 3) -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(139, 92, 246, 0.4); border-radius: var(--radius-md); padding: 0 0 1.6rem 0; display: flex; flex-direction: column; overflow: hidden;">
          <div style="position: relative; width: 100%; aspect-ratio: 4 / 5; max-height: 380px; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&h=1000&crop=faces&q=80" alt="Clon Digital para CEOs & Fundadores" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" loading="lazy">
            <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,12,22,0) 60%, rgba(10,12,22,0.65) 85%, rgba(10,12,22,0.95) 100%); pointer-events: none;"></div>
            <div style="position: absolute; bottom: 0.75rem; left: 1.25rem; width: 44px; height: 44px; border-radius: 12px; background: rgba(139, 92, 246, 0.35); backdrop-filter: blur(8px); border: 1px solid rgba(139, 92, 246, 0.6); color: var(--purple); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
              <i class="fa-solid fa-video"></i>
            </div>
            <span class="detail-badge" style="position: absolute; top: 0.75rem; right: 0.75rem; background: rgba(139, 92, 246, 0.3); backdrop-filter: blur(8px); color: #c084fc; border-color: rgba(139, 92, 246, 0.5); font-size: 0.72rem;">
              MARCA PERSONAL B2B
            </span>
          </div>
          <div style="padding: 1rem 1.6rem 0 1.6rem; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 style="color: #fff; font-size: 1.22rem; margin-bottom: 0.5rem;">Clon Digital de Video para CEOs & Fundadores</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem; flex-grow: 1;">
              Con una grabación única de 2 minutos, clonamos tu voz y tu rostro. Producimos de <strong>15 a 20 videos mensuales</strong> listos para LinkedIn, TikTok y YouTube para posicionarte como referente de tu sector sin perder horas frente a una cámara.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
              <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> Clonación hiperrealista de voz y rostro</li>
              <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> Guiones estratégicos adaptados a tu industria</li>
              <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> Edición completa con subtítulos dinámicos</li>
            </ul>
          </div>
        </div>

        <!-- Solución 3: Modelo IA Exclusiva de Marca Blanca para E-Commerce (Idea 4) -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(236, 72, 153, 0.4); border-radius: var(--radius-md); padding: 0 0 1.6rem 0; display: flex; flex-direction: column; overflow: hidden;">
          <div style="position: relative; width: 100%; aspect-ratio: 4 / 5; max-height: 380px; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&h=1000&crop=faces&q=80" alt="Modelo IA Exclusiva para E-Commerce" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" loading="lazy">
            <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,12,22,0) 60%, rgba(10,12,22,0.65) 85%, rgba(10,12,22,0.95) 100%); pointer-events: none;"></div>
            <div style="position: absolute; bottom: 0.75rem; left: 1.25rem; width: 44px; height: 44px; border-radius: 12px; background: rgba(236, 72, 153, 0.35); backdrop-filter: blur(8px); border: 1px solid rgba(236, 72, 153, 0.6); color: var(--pink); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
              <i class="fa-solid fa-bag-shopping"></i>
            </div>
            <span class="detail-badge" style="position: absolute; top: 0.75rem; right: 0.75rem; background: rgba(236, 72, 153, 0.3); backdrop-filter: blur(8px); color: #f472b6; border-color: rgba(236, 72, 153, 0.5); font-size: 0.72rem;">
              E-COMMERCE & RETAIL
            </span>
          </div>
          <div style="padding: 1rem 1.6rem 0 1.6rem; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 style="color: #fff; font-size: 1.22rem; margin-bottom: 0.5rem;">Modelo IA Exclusiva para E-Commerce</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem; flex-grow: 1;">
              Diseñamos la modelo virtual oficial y exclusiva de tu tienda o marca. Entregamos sesiones fotográficas mensuales vistiendo tus prendas, cosméticos o accesorios a <strong>1/5 del costo</strong> de una sesión tradicional con modelos humanas.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
              <li><i class="fa-solid fa-check" style="color: var(--pink); margin-right: 0.35rem;"></i> Pack mensual de 20 a 40 fotos en alta resolución</li>
              <li><i class="fa-solid fa-check" style="color: var(--pink); margin-right: 0.35rem;"></i> 100% libre de derechos de imagen de terceros</li>
              <li><i class="fa-solid fa-check" style="color: var(--pink); margin-right: 0.35rem;"></i> Consistencia visual idéntica en cada colección</li>
            </ul>
          </div>
        </div>

        <!-- Solución 4: Safe Vibe Coding (Micro-Páginas & Cotizadores en 48h) -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(6, 182, 212, 0.4); border-radius: var(--radius-md); padding: 0 0 1.6rem 0; display: flex; flex-direction: column; overflow: hidden;">
          <div style="position: relative; width: 100%; aspect-ratio: 4 / 5; max-height: 380px; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&h=1000&q=80" alt="Micro-Páginas y Cotizadores en 48h (Safe Vibe Coding)" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" loading="lazy">
            <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,12,22,0) 60%, rgba(10,12,22,0.65) 85%, rgba(10,12,22,0.95) 100%); pointer-events: none;"></div>
            <div style="position: absolute; bottom: 0.75rem; left: 1.25rem; width: 44px; height: 44px; border-radius: 12px; background: rgba(6, 182, 212, 0.35); backdrop-filter: blur(8px); border: 1px solid rgba(6, 182, 212, 0.6); color: var(--cyan); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
              <i class="fa-solid fa-code"></i>
            </div>
            <span class="detail-badge" style="position: absolute; top: 0.75rem; right: 0.75rem; background: rgba(6, 182, 212, 0.3); backdrop-filter: blur(8px); color: #67e8f9; border-color: rgba(6, 182, 212, 0.5); font-size: 0.72rem;">
              DESARROLLO EXPRÉS • 48H
            </span>
          </div>
          <div style="padding: 1rem 1.6rem 0 1.6rem; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 style="color: #fff; font-size: 1.22rem; margin-bottom: 0.5rem;">Micro-Páginas y Cotizadores en 48h (Safe Vibe Coding)</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem; flex-grow: 1;">
              Páginas de venta rápida para promociones específicas, calculadoras interactivas de presupuesto y formularios inteligentes. Código ultra-ligero y seguro alojado en servidores en Alemania y Canadá bajo cumplimiento estricto del RGPD europeo.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
              <li><i class="fa-solid fa-check" style="color: var(--cyan); margin-right: 0.35rem;"></i> Entrega lista para pauta en 24 a 48 horas</li>
              <li><i class="fa-solid fa-check" style="color: var(--cyan); margin-right: 0.35rem;"></i> Cotizadores dinámicos que filtran clientes ideales</li>
              <li><i class="fa-solid fa-check" style="color: var(--cyan); margin-right: 0.35rem;"></i> Infraestructura blindada con cero fugas de datos</li>
            </ul>
          </div>
        </div>

        <!-- Solución 5: Privacidad Digital & Borrado de Huella / Deepfakes (Ciberseguridad) -->
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: var(--radius-md); padding: 0 0 1.6rem 0; display: flex; flex-direction: column; overflow: hidden;">
          <div style="position: relative; width: 100%; aspect-ratio: 4 / 5; max-height: 380px; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=1000&q=80" alt="Privacidad, Borrado de Huella & Blindaje Anti-Deepfakes" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" loading="lazy">
            <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,12,22,0) 60%, rgba(10,12,22,0.65) 85%, rgba(10,12,22,0.95) 100%); pointer-events: none;"></div>
            <div style="position: absolute; bottom: 0.75rem; left: 1.25rem; width: 44px; height: 44px; border-radius: 12px; background: rgba(59, 130, 246, 0.35); backdrop-filter: blur(8px); border: 1px solid rgba(59, 130, 246, 0.6); color: #60a5fa; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
              <i class="fa-solid fa-user-shield"></i>
            </div>
            <span class="detail-badge" style="position: absolute; top: 0.75rem; right: 0.75rem; background: rgba(59, 130, 246, 0.3); backdrop-filter: blur(8px); color: #93c5fd; border-color: rgba(59, 130, 246, 0.5); font-size: 0.72rem;">
              CIBERSEGURIDAD & PRIVACIDAD
            </span>
          </div>
          <div style="padding: 1rem 1.6rem 0 1.6rem; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 style="color: #fff; font-size: 1.22rem; margin-bottom: 0.5rem;">Privacidad, Borrado de Huella & Blindaje Anti-Deepfakes</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem; flex-grow: 1;">
              Protegemos la identidad de ejecutivos, profesionales y particulares. Eliminamos datos privados expuestos (teléfonos, direcciones) en agregadores (Data Brokers), gestionamos desindexación en Google (Derecho al Olvido) y bajamos clones o deepfakes no autorizados.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
              <li><i class="fa-solid fa-check" style="color: #60a5fa; margin-right: 0.35rem;"></i> Desindexación de enlaces y datos personales en Google</li>
              <li><i class="fa-solid fa-check" style="color: #60a5fa; margin-right: 0.35rem;"></i> Remoción activa en bases de datos públicas y brokers</li>
              <li><i class="fa-solid fa-check" style="color: #60a5fa; margin-right: 0.35rem;"></i> Take-down legal de clones no consentidos y deepfakes</li>
            </ul>
          </div>
        </div>

        <!-- Solución 6: Agente Telefónico de Voz IA 24/7 (Idea 1 - En Implementación) -->
        <div style="background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(245, 158, 11, 0.5); border-radius: var(--radius-md); padding: 0 0 1.6rem 0; display: flex; flex-direction: column; opacity: 0.95; overflow: hidden;">
          <div style="position: relative; width: 100%; aspect-ratio: 4 / 5; max-height: 380px; overflow: hidden;">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&h=1000&crop=faces&q=80" alt="Agente Telefónico de Voz IA 24/7" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" loading="lazy">
            <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,12,22,0) 60%, rgba(10,12,22,0.65) 85%, rgba(10,12,22,0.95) 100%); pointer-events: none;"></div>
            <div style="position: absolute; bottom: 0.75rem; left: 1.25rem; width: 44px; height: 44px; border-radius: 12px; background: rgba(245, 158, 11, 0.35); backdrop-filter: blur(8px); border: 1px solid rgba(245, 158, 11, 0.6); color: #fbbf24; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
              <i class="fa-solid fa-headset"></i>
            </div>
            <span class="detail-badge" style="position: absolute; top: 0.75rem; right: 0.75rem; background: rgba(245, 158, 11, 0.3); backdrop-filter: blur(8px); color: #fde68a; border-color: rgba(245, 158, 11, 0.5); font-size: 0.72rem;">
              <i class="fa-solid fa-screwdriver-wrench"></i> EN IMPLEMENTACIÓN • BETA
            </span>
          </div>
          <div style="padding: 1rem 1.6rem 0 1.6rem; display: flex; flex-direction: column; flex-grow: 1;">
            <h3 style="color: #fff; font-size: 1.22rem; margin-bottom: 0.5rem;">Agente Telefónico de Voz IA 24/7</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem; flex-grow: 1;">
              Recepción telefónica inteligente con voz humana natural (Vapi / ElevenLabs). Atiende llamadas entrantes a cualquier hora, responde preguntas sobre precios o servicios y agenda citas directamente en el calendario de tu equipo sin esperas.
            </p>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
              <li><i class="fa-solid fa-clock" style="color: #f59e0b; margin-right: 0.35rem;"></i> Cero llamadas perdidas fuera de horario comercial</li>
              <li><i class="fa-solid fa-clock" style="color: #f59e0b; margin-right: 0.35rem;"></i> Sincronización directa con Google Calendar y CRM</li>
              <li><i class="fa-solid fa-clock" style="color: #f59e0b; margin-right: 0.35rem;"></i> Acceso prioritario para clientes en lista de espera Beta</li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <!-- CÓMO DESARROLLAMOS: PIPELINE I+D PROPIETARIO & ARQUITECTURA DE ACTIVOS -->
    <div id="desarrollo" class="glass-card" style="padding: 2.5rem; border-radius: var(--radius-lg); margin-bottom: 3.5rem; border: 1px solid rgba(139, 92, 246, 0.4); background: radial-gradient(circle at top right, rgba(139, 92, 246, 0.1) 0%, rgba(10, 12, 22, 0.9) 100%);">
      <div style="text-align: center; max-width: 820px; margin: 0 auto 2.5rem auto;">
        <span class="detail-badge" style="background: rgba(139, 92, 246, 0.2); color: var(--purple); border-color: var(--purple); font-size: 0.78rem;">
          <i class="fa-solid fa-microchip"></i> METODOLOGÍA PROPIETARIA I+D
        </span>
        <h2 style="font-family: var(--font-heading); color: #fff; font-size: 2.1rem; margin: 0.6rem 0 0.4rem 0;">
          Cómo Desarrollamos Activos Virtuales Rentables
        </h2>
        <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin: 0;">
          De la concepción psicológica al despliegue comercial: nuestro pipeline estandarizado de 4 etapas para producir influencers, portavoces y activos con 100% de propiedad intelectual.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
        
        <div class="glass-card" style="border-left: 3px solid var(--purple); background: rgba(255,255,255,0.02);">
          <div style="font-size: 1.6rem; color: var(--purple); margin-bottom: 0.75rem;"><i class="fa-solid fa-fingerprint"></i></div>
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #fff; margin-bottom: 0.5rem;">1. Psicometría & Identidad</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin: 0;">
            Definición del arquetipo, contradicciones creíbles, tono de voz exacto, do's/don'ts y límites éticos infranqueables.
          </p>
        </div>

        <div class="glass-card" style="border-left: 3px solid var(--cyan); background: rgba(255,255,255,0.02);">
          <div style="font-size: 1.6rem; color: var(--cyan); margin-bottom: 0.75rem;"><i class="fa-solid fa-microchip"></i></div>
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #fff; margin-bottom: 0.5rem;">2. Consagración LoRA 4K</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin: 0;">
            Entrenamiento de modelos con +50 renders base en ComfyUI/Flux para consistencia visual absoluta en cualquier pose, lente y luz.
          </p>
        </div>

        <div class="glass-card" style="border-left: 3px solid var(--pink); background: rgba(255,255,255,0.02);">
          <div style="font-size: 1.6rem; color: var(--pink); margin-bottom: 0.75rem;"><i class="fa-solid fa-waveform-lines"></i></div>
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #fff; margin-bottom: 0.5rem;">3. Voz & Lipsync Dinámico</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin: 0;">
            Clonación de voz multilingüe hiperrealista (ElevenLabs) y animación de video generativa (Kling/Hailuo) para formatos verticales.
          </p>
        </div>

        <div class="glass-card" style="border-left: 3px solid #10b981; background: rgba(255,255,255,0.02);">
          <div style="font-size: 1.6rem; color: #10b981; margin-bottom: 0.75rem;"><i class="fa-solid fa-funnel-dollar"></i></div>
          <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #fff; margin-bottom: 0.5rem;">4. Embudo de Venta & VIP</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin: 0;">
            Estrategia de conversión Safe → Teaser → Pago: atracción orgánica en TikTok/Reels hacia membresías Fanvue y acuerdos de marca.
          </p>
        </div>

      </div>

      <!-- Commercial Licensing Callout -->
      <div class="glass-card" style="margin-top: 1.75rem; padding: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.25rem; border-color: rgba(139, 92, 246, 0.4); background: rgba(139, 92, 246, 0.08);">
        <div style="max-width: 680px;">
          <h4 style="color: #fff; font-family: var(--font-heading); font-size: 1.12rem; margin-bottom: 0.35rem;">
            <i class="fa-solid fa-handshake" style="color: var(--cyan); margin-right: 0.4rem;"></i> Modelos de Venta B2B & Licenciamiento Exclusivo
          </h4>
          <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin: 0;">
            Licenciamos nuestros personajes existentes para campañas de marcas o desarrollamos el embajador virtual oficial para tu empresa con 100% de propiedad intelectual exclusiva.
          </p>
        </div>
        <a href="#b2b-eval-form-section" class="btn btn-primary btn-sm"><i class="fa-solid fa-file-invoice-dollar"></i> Solicitar Propuesta I+D</a>
      </div>
    </div>

    <!-- SECCIÓN COMPLEMENTARIA: CAPACIDADES AVANZADAS PARA ESCALAMIENTO -->
    <div style="text-align: center; max-width: 750px; margin: 0 auto 2.5rem auto;">
      <span class="detail-badge" style="background: rgba(255,255,255,0.05); color: #cbd5e1; border-color: var(--border-glass); font-size: 0.75rem;">
        CAPACIDADES COMPLEMENTARIAS
      </span>
      <h3 style="font-family: var(--font-heading); font-size: 1.85rem; color: #fff; margin: 0.5rem 0 0.35rem 0;">
        Soluciones Corporativas de Escalamiento con IA
      </h3>
      <p style="color: var(--text-muted); font-size: 0.95rem;">
        Para marcas y empresas que además buscan presencia audiovisual o automatización de flujos de trabajo completos.
      </p>
    </div>

    <div class="b2b-services-grid" style="margin-bottom: 4rem;">
      <!-- Pillar 1 -->
      <div class="b2b-service-card">
        <div class="b2b-service-icon" style="background: rgba(139, 92, 246, 0.15); color: var(--purple);">
          <i class="fa-solid fa-user-astronaut"></i>
        </div>
        <h3 class="b2b-service-title">1. Embajadores Virtuales & Portavoces IA</h3>
        <p class="b2b-service-desc">
          Creamos personajes digitales hiperrealistas y portavoces exclusivos para tu marca. Sin agendas humanas complejas, sin cancelaciones de rodaje y con disponibilidad 24/7 para campañas globales.
        </p>
      </div>

      <!-- Pillar 2 -->
      <div class="b2b-service-card">
        <div class="b2b-service-icon" style="background: rgba(6, 182, 212, 0.15); color: var(--cyan);">
          <i class="fa-solid fa-diagram-project"></i>
        </div>
        <h3 class="b2b-service-title">2. Gestión por Procesos (Mario Morales)</h3>
        <p class="b2b-service-desc">
          Auditoría de cuellos de botella operacionales. Mapeamos tus flujos de trabajo e implantamos agentes inteligentes que ejecutan tareas repetitivas de forma confiable.
        </p>
      </div>

      <!-- Pillar 3 -->
      <div class="b2b-service-card">
        <div class="b2b-service-icon" style="background: rgba(236, 72, 153, 0.15); color: var(--pink);">
          <i class="fa-solid fa-photo-film"></i>
        </div>
        <h3 class="b2b-service-title">3. Content Factories Audiovisuales</h3>
        <p class="b2b-service-desc">
          Infraestructura de generación continua de contenidos para marketing. Producimos cientos de variaciones de anuncios en video, reels y carruseles listos para pauta en Meta y TikTok.
        </p>
      </div>
    </div>

    <!-- Diagnostic Evaluation Form Card (Referenced from Google Form) -->
    <div class="b2b-eval-form-card" id="b2b-eval-form-section">
      <div style="text-align: center; max-width: 700px; margin: 0 auto 2rem auto;">
        <span class="detail-badge" style="background: rgba(6, 182, 212, 0.15); color: var(--cyan); border-color: rgba(6, 182, 212, 0.3); font-size: 0.75rem;">
          <i class="fa-solid fa-clipboard-check"></i> DIAGNÓSTICO ESTRATÉGICO EN 2 MINUTOS
        </span>
        <h2 style="font-family: var(--font-heading); font-size: 2.1rem; color: #fff; margin: 0.75rem 0 0.5rem 0;">
          Evaluación de Madurez IA & Cuellos de Botella
        </h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
          Completa este breve formulario y nuestro equipo transnacional (Alemania / Canadá / Chile) preparará un diagnóstico inicial sin costo con oportunidades concretas de automatización para tu negocio.
        </p>
      </div>

      <form onsubmit="handleEmpresasDiagnosisSubmit(event)">
        <div class="b2b-form-grid">
          <div class="b2b-form-group">
            <label><i class="fa-solid fa-user"></i> Nombre Completo *</label>
            <input type="text" id="b2b-name" placeholder="Ej: Carolina Rojas" required>
          </div>
          <div class="b2b-form-group">
            <label><i class="fa-solid fa-id-badge"></i> Cargo / Rol *</label>
            <input type="text" id="b2b-role" placeholder="Ej: Gerente General / Dueño de Negocio" required>
          </div>
          <div class="b2b-form-group">
            <label><i class="fa-solid fa-building"></i> Empresa / Organización *</label>
            <input type="text" id="b2b-company" placeholder="Ej: Clínica Dental / E-Commerce / Taller" required>
          </div>
          <div class="b2b-form-group">
            <label><i class="fa-solid fa-envelope"></i> Correo Electrónico Corporativo *</label>
            <input type="email" id="b2b-email" placeholder="nombre@empresa.com" required>
          </div>
          <div class="b2b-form-group">
            <label><i class="fa-brands fa-whatsapp"></i> WhatsApp / Teléfono *</label>
            <input type="tel" id="b2b-phone" placeholder="+56 9 1234 5678 / +34 600..." required>
          </div>
          <div class="b2b-form-group">
            <label><i class="fa-solid fa-industry"></i> Sector o Industria *</label>
            <select id="b2b-industry" required>
              <option value="" disabled selected>Selecciona tu sector...</option>
              <option value="Comercio Local & Servicios">Comercio Local & Servicios (Tienda, Salud, Gastronomía, Belleza)</option>
              <option value="Retail & E-Commerce">Retail & E-Commerce</option>
              <option value="Banca, Finanzas & Seguros">Banca, Finanzas & Seguros</option>
              <option value="Legal & Consultoría Corporativa">Legal & Consultoría Corporativa</option>
              <option value="Tecnología & SaaS">Tecnología & SaaS</option>
              <option value="Educación & Cursos">Educación & Cursos</option>
              <option value="Otro">Otro sector</option>
            </select>
          </div>
          <div class="b2b-form-group">
            <label><i class="fa-solid fa-users"></i> Tamaño de la Empresa</label>
            <select id="b2b-size">
              <option value="1-10" selected>1 a 10 colaboradores (Pyme / Negocio Local)</option>
              <option value="11-50">11 a 50 colaboradores</option>
              <option value="51-200">51 a 200 colaboradores</option>
              <option value="200+">Más de 200 colaboradores</option>
            </select>
          </div>
          <div class="b2b-form-group">
            <label><i class="fa-solid fa-bullseye"></i> Solución que Deseas Implementar Primero *</label>
            <select id="b2b-goal">
              <option value="Reactivación de Clientes por WhatsApp y Google Maps" selected>Reactivación por WhatsApp & Google Maps (Ventas en 48h)</option>
              <option value="Clon Digital de Video para CEO / Fundador">Clon Digital de Video para CEO / Fundador (Marca Personal B2B)</option>
              <option value="Modelo IA Exclusiva para E-Commerce">Modelo IA Exclusiva para E-Commerce & Catálogo</option>
              <option value="Micro-Páginas o Cotizadores en 48h (Safe Vibe Coding)">Micro-Páginas o Cotizadores en 48h (Safe Vibe Coding)</option>
              <option value="Privacidad Digital y Borrado de Huella / Deepfakes">Privacidad Digital, Borrado de Huella & Blindaje Anti-Deepfakes</option>
              <option value="Agente Telefónico de Voz IA (Lista de Espera Beta)">Agente Telefónico de Voz IA 24/7 (Lista de Espera Beta)</option>
              <option value="Optimizar Procesos Operativos (Mario Morales)">Gestión por Procesos y Cuellos de Botella (Mario Morales)</option>
              <option value="Diagnóstico Integral">Diagnóstico Integral y Asesoría General</option>
            </select>
          </div>
        </div>

        <div class="b2b-form-group" style="margin-top: 1.25rem;">
          <label><i class="fa-solid fa-comment-dots"></i> ¿Qué producto o servicio ofreces y qué te gustaría vender más rápido?:</label>
          <textarea id="b2b-bottleneck" rows="3" placeholder="Ejemplo: Tenemos un negocio local / tienda online y queremos que la gente de nuestra zona nos encuentre en Google Maps y nos compre directo por WhatsApp..." required></textarea>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-glass);">
          <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
            <button type="submit" class="btn btn-primary" style="padding: 0.85rem 1.75rem; font-size: 1rem;">
              <i class="fa-solid fa-paper-plane"></i> Enviar Evaluación & Solicitar Diagnóstico
            </button>
            <a href="https://forms.gle/pofoZr79gDW44r6y9" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; gap: 0.5rem;" title="Abrir en Google Forms">
              <i class="fa-solid fa-up-right-from-square"></i> O llenar vía Google Forms
            </a>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem;">
            <i class="fa-solid fa-lock" style="color: #10b981;"></i> Datos confidenciales protegidos bajo acuerdo NDA
          </div>
        </div>
      </form>
    </div>
  `;
}

function handleEmpresasDiagnosisSubmit(e) {
  e.preventDefault();
  const company = document.getElementById('b2b-company')?.value || 'su empresa';
  const name = document.getElementById('b2b-name')?.value || '';
  alert(`¡Gracias ${name}! Hemos recibido la evaluación de ${company}. Nuestro equipo de arquitectura y consultoría IA se pondrá en contacto dentro de las próximas 24 horas hábiles para coordinar el diagnóstico estratégico.`);
  e.target.reset();
}

// ============================================================================
// RENDER: SEGURIDAD DIGITAL & PRIVACIDAD (BORRADO DE HUELLA & ANTI-DEEPFAKES)
// ============================================================================
function renderSeguridadPage() {
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  container.innerHTML = `
    <div class="breadcrumb-bar" style="margin-bottom: 1.5rem;">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">Seguridad Digital & Borrado de Huella</span>
      </div>
      <a href="#home" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Inicio</a>
    </div>

    <!-- Header Section -->
    <div style="text-align: center; max-width: 820px; margin: 0 auto 3rem auto;">
      <span class="detail-badge" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; border-color: rgba(59, 130, 246, 0.3); font-size: 0.8rem;">
        <i class="fa-solid fa-shield-halved"></i> CIBERSEGURIDAD PERSONAL, REPUTACIÓN & PRIVACIDAD
      </span>
      <h1 style="font-family: var(--font-heading); font-size: 2.6rem; color: #fff; margin: 1rem 0 0.75rem 0; letter-spacing: -0.5px;">
        Seguridad Digital & Borrado de Huella
      </h1>
      <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7; margin: 0 auto;">
        En la era de la inteligencia artificial, tus datos personales, tu voz y tu rostro están más expuestos que nunca. Ayudamos a ejecutivos, profesionales, creadores y familias a <strong>borrar su rastro en internet</strong>, desindexar información en Google y blindarse contra suplantación o deepfakes no autorizados.
      </p>

      <!-- Trust Badges -->
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
        <span class="product-pill product-pill-green" style="font-size: 0.78rem;">
          <i class="fa-solid fa-lock"></i> Acuerdo de Confidencialidad Estricto (NDA)
        </span>
        <span class="product-pill product-pill-cyan" style="font-size: 0.78rem;">
          <i class="fa-solid fa-scale-balanced"></i> Cumplimiento RGPD (UE / Alemania) & PIPEDA (Canadá)
        </span>
        <span class="product-pill product-pill-purple" style="font-size: 0.78rem;">
          <i class="fa-solid fa-shield-virus"></i> Cero Retención de Datos
        </span>
      </div>
    </div>

    <!-- 4 Core Service Cards with Unsplash Photography -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.75rem; margin-bottom: 3.5rem;">
      
      <!-- Card 1: Borrado de Huella en Data Brokers -->
      <div class="glass-card" style="border: 1px solid rgba(59, 130, 246, 0.35); padding: 0 0 1.75rem 0; display: flex; flex-direction: column; overflow: hidden;">
        <div style="position: relative; height: 160px; width: 100%; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=700&q=80" alt="Data Brokers & Privacy Scrubbing" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85);" loading="lazy">
          <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,12,22,0.1) 0%, rgba(10,12,22,0.95) 100%);"></div>
          <div style="position: absolute; bottom: 0.75rem; left: 1.25rem; width: 44px; height: 44px; border-radius: 12px; background: rgba(59, 130, 246, 0.25); backdrop-filter: blur(8px); border: 1px solid rgba(59, 130, 246, 0.5); color: #60a5fa; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
            <i class="fa-solid fa-eraser"></i>
          </div>
        </div>
        <div style="padding: 1rem 1.75rem 0 1.75rem; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">1. Borrado de Huella en Agregadores (Data Brokers)</h3>
          <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">
            Decenas de empresas comercializan tu número privado, dirección de domicilio, registros vehiculares y nombres de familiares sin tu consentimiento. Ejecutamos solicitudes sistemáticas y legales de exclusión (opt-out) para eliminar tus registros de las principales bases de datos mundiales.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.84rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
            <li><i class="fa-solid fa-check" style="color: #60a5fa; margin-right: 0.35rem;"></i> Remoción en más de 80 agregadores comerciales</li>
            <li><i class="fa-solid fa-check" style="color: #60a5fa; margin-right: 0.35rem;"></i> Blindaje de domicilios y teléfonos privados</li>
            <li><i class="fa-solid fa-check" style="color: #60a5fa; margin-right: 0.35rem;"></i> Auditoría de re-aparición periódica</li>
          </ul>
        </div>
      </div>

      <!-- Card 2: Derecho al Olvido & Desindexación Google -->
      <div class="glass-card" style="border: 1px solid rgba(16, 185, 129, 0.35); padding: 0 0 1.75rem 0; display: flex; flex-direction: column; overflow: hidden;">
        <div style="position: relative; height: 160px; width: 100%; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=700&q=80" alt="Desindexación en Google y Derecho al Olvido" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85);" loading="lazy">
          <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,12,22,0.1) 0%, rgba(10,12,22,0.95) 100%);"></div>
          <div style="position: absolute; bottom: 0.75rem; left: 1.25rem; width: 44px; height: 44px; border-radius: 12px; background: rgba(16, 185, 129, 0.25); backdrop-filter: blur(8px); border: 1px solid rgba(16, 185, 129, 0.5); color: #10b981; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
            <i class="fa-brands fa-google"></i>
          </div>
        </div>
        <div style="padding: 1rem 1.75rem 0 1.75rem; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">2. Desindexación en Google ("Derecho al Olvido")</h3>
          <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">
            ¿Aparecen noticias desactualizadas, publicaciones difamatorias, registros judiciales superados o fotos no deseadas cuando buscan tu nombre en Google? Gestionamos legal y técnicamente la remoción de enlaces en los resultados de búsqueda amparados en normativas internacionales.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.84rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
            <li><i class="fa-solid fa-check" style="color: #10b981; margin-right: 0.35rem;"></i> Solicitudes formales de Derecho al Olvido ante Google</li>
            <li><i class="fa-solid fa-check" style="color: #10b981; margin-right: 0.35rem;"></i> Eliminación de imágenes y datos identificatorios</li>
            <li><i class="fa-solid fa-check" style="color: #10b981; margin-right: 0.35rem;"></i> Restauración de reputación profesional online</li>
          </ul>
        </div>
      </div>

      <!-- Card 3: Blindaje Anti-Deepfakes -->
      <div class="glass-card" style="border: 1px solid rgba(239, 68, 68, 0.35); padding: 0 0 1.75rem 0; display: flex; flex-direction: column; overflow: hidden;">
        <div style="position: relative; height: 160px; width: 100%; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80" alt="Blindaje Anti-Deepfakes" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85);" loading="lazy">
          <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,12,22,0.1) 0%, rgba(10,12,22,0.95) 100%);"></div>
          <div style="position: absolute; bottom: 0.75rem; left: 1.25rem; width: 44px; height: 44px; border-radius: 12px; background: rgba(239, 68, 68, 0.25); backdrop-filter: blur(8px); border: 1px solid rgba(239, 68, 68, 0.5); color: #ef4444; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
            <i class="fa-solid fa-user-ninja"></i>
          </div>
        </div>
        <div style="padding: 1rem 1.75rem 0 1.75rem; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">3. Blindaje Anti-Deepfakes & Suplantación</h3>
          <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">
            Cualquiera puede hoy clonar tu voz o animar tus fotos para estafar a tu empresa o familiares. Detectamos el uso ilegítimo de tu identidad biométrica y emitimos órdenes inmediatas de cese y desestimiento (Take-downs DMCA) para dar de baja clones en 24 a 48 horas.
          </p>
          <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.84rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
            <li><i class="fa-solid fa-check" style="color: #ef4444; margin-right: 0.35rem;"></i> Monitorización de clones de voz y rostro no consentidos</li>
            <li><i class="fa-solid fa-check" style="color: #ef4444; margin-right: 0.35rem;"></i> Denuncias y take-downs directos a servidores</li>
            <li><i class="fa-solid fa-check" style="color: #ef4444; margin-right: 0.35rem;"></i> Protocolos de verificación familiar contra estafas</li>
          </ul>
        </div>
      </div>

      <!-- Card 4: Auditoría OSINT Dark Web -->
      <div class="glass-card" style="border: 1px solid rgba(139, 92, 246, 0.35); padding: 0 0 1.75rem 0; display: flex; flex-direction: column; overflow: hidden;">
        <div style="position: relative; height: 160px; width: 100%; overflow: hidden;">
          <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80" alt="Auditoría OSINT Dark Web" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85);" loading="lazy">
          <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,12,22,0.1) 0%, rgba(10,12,22,0.95) 100%);"></div>
          <div style="position: absolute; bottom: 0.75rem; left: 1.25rem; width: 44px; height: 44px; border-radius: 12px; background: rgba(139, 92, 246, 0.25); backdrop-filter: blur(8px); border: 1px solid rgba(139, 92, 246, 0.5); color: var(--purple); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
            <i class="fa-solid fa-fingerprint"></i>
          </div>
        </div>
        <div style="padding: 1rem 1.75rem 0 1.75rem; display: flex; flex-direction: column; flex-grow: 1;">
          <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">4. Auditoría OSINT & Blindaje de Cuentas</h3>
          <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">
            Rastreamos qué correos, contraseñas, documentos o números de tu entorno están filtrados en bases de datos hackeadas en la dark web. Te entregamos un informe de 1 página con tu diagnóstico de riesgo y configuramos herramientas de blindaje real (llaves 2FA físicas, alias privados).
          </p>
          <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.84rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.85rem;">
            <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> Informe confidencial de brechas personales</li>
            <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> Sustitución y saneamiento de claves vulnerables</li>
            <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> Configuración de correos alias para blindar identidad</li>
          </ul>
        </div>
      </div>

    </div>

    <!-- Confidential Contact Form -->
    <div class="glass-card" style="border: 2px solid rgba(59, 130, 246, 0.4); max-width: 800px; margin: 0 auto; padding: 2.5rem; background: radial-gradient(circle at top, rgba(59, 130, 246, 0.12) 0%, rgba(10, 12, 22, 0.9) 100%);">
      <div style="text-align: center; margin-bottom: 2rem;">
        <span class="detail-badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border-color: rgba(16, 185, 129, 0.3); font-size: 0.75rem;">
          <i class="fa-solid fa-lock"></i> CANAL ESTRICTAMENTE CONFIDENCIAL
        </span>
        <h2 style="font-family: var(--font-heading); color: #fff; font-size: 1.85rem; margin: 0.75rem 0 0.5rem 0;">
          Solicitar Evaluación de Seguridad o Borrado
        </h2>
        <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin: 0;">
          Escríbenos en total privacidad. Tratamos cada solicitud con absoluto secreto profesional y respuesta en menos de 24 horas.
        </p>
      </div>

      <form onsubmit="handleSecurityInquirySubmit(event)">
        <div class="b2b-form-grid">
          <div class="b2b-form-group">
            <label><i class="fa-solid fa-user"></i> Nombre o Pseudónimo *</label>
            <input type="text" id="sec-name" placeholder="Ej: Carlos M." required>
          </div>
          <div class="b2b-form-group">
            <label><i class="fa-solid fa-envelope"></i> Correo Electrónico Seguro *</label>
            <input type="email" id="sec-email" placeholder="correo@privado.com" required>
          </div>
          <div class="b2b-form-group">
            <label><i class="fa-brands fa-whatsapp"></i> WhatsApp / Signal (Opcional)</label>
            <input type="tel" id="sec-phone" placeholder="+56 9... / +34...">
          </div>
          <div class="b2b-form-group">
            <label><i class="fa-solid fa-shield-halved"></i> Servicio de Interés *</label>
            <select id="sec-service" required>
              <option value="Borrado de Huella Digital en Data Brokers" selected>Borrado de Huella Digital en Data Brokers</option>
              <option value="Desindexación en Google (Derecho al Olvido)">Desindexación de Enlaces en Google (Derecho al Olvido)</option>
              <option value="Take-down de Deepfake o Suplantación">Take-down de Deepfake o Suplantación de Identidad</option>
              <option value="Auditoría OSINT de Filtraciones en Dark Web">Auditoría OSINT de Filtraciones en Dark Web</option>
              <option value="Blindaje Completo de Privacidad VIP">Blindaje Completo de Privacidad VIP</option>
            </select>
          </div>
        </div>

        <div class="b2b-form-group" style="margin-top: 1.25rem;">
          <label><i class="fa-solid fa-comment-dots"></i> Describe brevemente tu situación o qué datos/enlaces deseas eliminar:</label>
          <textarea id="sec-details" rows="3" placeholder="Ejemplo: Aparece mi número y dirección en páginas de internet / Hay un enlace difamatorio que quiero desindexar..." required></textarea>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-glass);">
          <button type="submit" class="btn btn-primary" style="padding: 0.85rem 1.8rem; font-size: 1rem; background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); border-color: #3b82f6;">
            <i class="fa-solid fa-paper-plane"></i> Enviar Consulta Confidencial
          </button>
          <div style="font-size: 0.82rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem;">
            <i class="fa-solid fa-shield" style="color: #10b981;"></i> Protegido bajo estricto acuerdo de no divulgación
          </div>
        </div>
      </form>
    </div>
  `;
}

function handleSecurityInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('sec-name')?.value || 'Usuario';
  const service = document.getElementById('sec-service')?.value || 'Servicio de Privacidad';
  alert(`¡Solicitud recibida con éxito, ${name}! Tu consulta sobre «${service}» ha sido registrada bajo cifrado confidencial. Un consultor senior de privacidad te contactará de forma segura en menos de 24 horas.`);
  e.target.reset();
}

// ============================================================================
// RENDER: CURSOS PRÁCTICOS & MICRO-LEARNING CON IA
// ============================================================================
function renderCursosPage() {
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  const courses = [
    {
      id: 'curso-seo-maps',
      title: 'Atrapar la Nube de Búsquedas en Internet (SEO Exprés en Google Maps & Google)',
      tagline: 'Cómo capturar a las miles de personas que buscan productos o servicios en tu ciudad todos los días y redirigirlos en automático a tu WhatsApp para cerrar ventas.',
      category: 'Ventas Locales & SEO',
      duration: '90 min • Micro-Learning',
      price: '$39 USD',
      icon: 'fa-location-dot',
      color: 'var(--cyan)',
      image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=700&q=80',
      learnings: [
        'Cómo descifrar qué busca la gente de tu zona en Google exactamente.',
        'Configuración de Google Business Profile para aparecer en el Top 3 local.',
        'Estrategia de palabras clave sin pagar anuncios de Google Ads.',
        'Embudos automáticos de derivación desde la ficha de Google directo a WhatsApp.'
      ],
      includes: 'Plantilla de palabras clave locales + Checklist de optimización en 24h.'
    },
    {
      id: 'curso-procesamiento-datos',
      title: 'Procesamiento Masivo & Extracción de Datos con IA (De Internet a Decisiones)',
      tagline: 'Cómo extraer y procesar miles de datos (leads en Google Maps, catálogos, archivos desordenados o PDFs) y convertirlos en tablas limpias y reportes accionables sin programar.',
      category: 'Datos & Automatización',
      duration: '90 min • Micro-Learning',
      price: '$39 USD',
      icon: 'fa-database',
      color: '#06b6d4',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
      learnings: [
        'Extracción masiva de datos y contactos públicos de la nube de internet.',
        'Limpieza y normalización de Excel/CSVs caóticos en segundos con prompts de datos.',
        'Conversión automática de cientos de PDFs y facturas a tablas estructuradas.',
        'Generación de gráficos y dashboards ejecutivos para toma rápida de decisiones.'
      ],
      includes: 'Plantillas de prompts de extracción masiva + Script listo en Google Sheets / Colab.'
    },
    {
      id: 'curso-huella-digital',
      title: 'Borrado de Huella Digital & Autodefensa frente a la IA',
      tagline: 'Cómo desindexar tus datos privados de Google, solicitar eliminación en bases de datos de brokers y proteger a tu familia contra estafas de voz clonada.',
      category: 'Privacidad & Seguridad',
      duration: '60 min • Taller Práctico',
      price: '$29 USD',
      icon: 'fa-shield-halved',
      color: '#3b82f6',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80',
      learnings: [
        'Cómo realizar una auditoría personal para ver qué datos tuyos están expuestos.',
        'Procedimiento legal y técnico para desindexar enlaces en Google (Derecho al Olvido).',
        'Modelos de cartas para solicitar la eliminación en más de 50 Data Brokers.',
        'Configuración de contraseñas blindadas, alias de correo y autenticación segura.'
      ],
      includes: 'Modelos de cartas legales de remoción + Checklist de blindaje de cuentas.'
    },
    {
      id: 'curso-modelo-ecommerce',
      title: 'Crea tu Propia Modelo / Influencer IA para E-Commerce sin Saber Programar',
      tagline: 'Flujo exacto para generar una modelo sintética con rostro consistente que vista las prendas o sostenga los productos de tu marca usando Flux y ComfyUI.',
      category: 'Modelado IA & E-Commerce',
      duration: '120 min • Masterclass',
      price: '$49 USD',
      icon: 'fa-bag-shopping',
      color: 'var(--pink)',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80',
      learnings: [
        'Creación de identidad facial fija que no cambie entre distintas fotos.',
        'Técnicas de Inpainting para colocar la ropa real de tu tienda en la modelo IA.',
        'Iluminación de estudio profesional y prompts fotográficos fotorrealistas.',
        'Exportación en 4K optimizada para anuncios de Instagram y catálogos web.'
      ],
      includes: '3 Workflows de ComfyUI descargables + Pack de 25 prompts maestros de estudio.'
    },
    {
      id: 'curso-clon-ceo',
      title: 'Clones de Video y Marca Personal para Profesionales & LinkedIn B2B',
      tagline: 'Cómo clonar tu voz y rostro con IA en 2 minutos para producir 20 videos al mes en minutos, posicionándote como referente de tu sector sin pasar horas grabando.',
      category: 'Video IA & Marca Personal',
      duration: '75 min • Taller Práctico',
      price: '$35 USD',
      icon: 'fa-video',
      color: 'var(--purple)',
      image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=700&q=80',
      learnings: [
        'Cómo grabar la muestra de video y audio perfecta para una clonación impecable.',
        'Herramientas actuales de clonación de voz y animación labial (HeyGen / LivePortrait).',
        'Generación de guiones magnéticos para LinkedIn con ChatGPT y Claude.',
        'Automatización del montaje con subtítulos dinámicos en segundos.'
      ],
      includes: '15 Plantillas de guiones virales B2B + Preset de subtítulos dinámicos.'
    },
    {
      id: 'curso-safe-vibe-coding',
      title: 'Safe Vibe Coding: Construye Micro-Páginas y Cotizadores en 24 Horas',
      tagline: 'Cómo usar asistentes de IA para programar mini-páginas de venta, calculadoras de cotización y formularios inteligentes sin dependencias pesadas ni fallos de seguridad.',
      category: 'Desarrollo Rápido & IA',
      duration: '90 min • Hands-on',
      price: '$45 USD',
      icon: 'fa-code',
      color: '#10b981',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=700&q=80',
      learnings: [
        'Metodología Safe Vibe Coding: cómo programar con IA sin generar código basura.',
        'Construcción de cotizadores interactivos que aumentan la conversión.',
        'Protección de datos y cumplimiento RGPD europeo en formularios web.',
        'Despliegue gratuito y ultra-rápido en servidores seguros en menos de 1 hora.'
      ],
      includes: 'Boilerplate de código limpio en HTML/JS + Guía de despliegue paso a paso.'
    }
  ];

  container.innerHTML = `
    <div class="breadcrumb-bar" style="margin-bottom: 1.5rem;">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">Cursos & Talleres Prácticos</span>
      </div>
      <a href="#home" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Inicio</a>
    </div>

    <!-- Header Section -->
    <div style="text-align: center; max-width: 820px; margin: 0 auto 3rem auto;">
      <span class="detail-badge" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border-color: rgba(245, 158, 11, 0.3); font-size: 0.8rem;">
        <i class="fa-solid fa-graduation-cap"></i> MICRO-LEARNING DE IMPACTO INMEDIATO
      </span>
      <h1 style="font-family: var(--font-heading); font-size: 2.6rem; color: #fff; margin: 1rem 0 0.75rem 0; letter-spacing: -0.5px;">
        Cursos Cortos & Habilidades Directas
      </h1>
      <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7; margin: 0 auto;">
        Cero teoría de relleno. Aprendizajes prácticos de 60 a 120 minutos diseñados para implementar en el día y <strong>capturar la enorme masa de personas que buscan soluciones en internet</strong> todos los días.
      </p>
      <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
        <span class="product-pill product-pill-green"><i class="fa-solid fa-bolt"></i> 100% Práctico & Directo al Grano</span>
        <span class="product-pill product-pill-cyan"><i class="fa-solid fa-file-arrow-down"></i> Plantillas & Workflows Incluidos</span>
        <span class="product-pill product-pill-purple"><i class="fa-solid fa-unlock"></i> Acceso Inmediato de por Vida</span>
      </div>
    </div>

    <!-- Courses Grid -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem; margin-bottom: 3.5rem;">
      ${courses.map(c => `
        <div class="glass-card" style="border: 1px solid rgba(255,255,255,0.1); padding: 0 0 1.75rem 0; display: flex; flex-direction: column; position: relative; overflow: hidden;">
          
          <div style="position: relative; height: 180px; width: 100%; overflow: hidden;">
            <img src="${c.image}" alt="${c.title}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85);" loading="lazy">
            <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,12,22,0.15) 0%, rgba(10,12,22,0.95) 100%);"></div>
            <span class="detail-badge" style="position: absolute; top: 1rem; right: 1rem; background: rgba(10,12,22,0.75); backdrop-filter: blur(8px); color: #cbd5e1; border-color: rgba(255,255,255,0.2); font-size: 0.72rem;">
              ${c.duration}
            </span>
            <div style="position: absolute; bottom: 0.75rem; left: 1.25rem; width: 44px; height: 44px; border-radius: 12px; background: rgba(10,12,22,0.85); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.15); color: ${c.color}; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
              <i class="fa-solid ${c.icon}"></i>
            </div>
          </div>

          <div style="padding: 1rem 1.75rem 0 1.75rem; display: flex; flex-direction: column; flex-grow: 1;">
            <span style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.5px; color: ${c.color}; font-weight: 700; margin-bottom: 0.4rem;">
              ${c.category}
            </span>
            <h3 style="color: #fff; font-size: 1.25rem; line-height: 1.4; margin-bottom: 0.75rem;">
              ${c.title}
            </h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.25rem;">
              ${c.tagline}
            </p>

            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem; flex-grow: 1;">
              <div style="font-size: 0.76rem; text-transform: uppercase; color: #94a3b8; font-weight: 600; margin-bottom: 0.5rem;">
                <i class="fa-solid fa-bullseye" style="color: ${c.color};"></i> Qué vas a saber hacer:
              </div>
              <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.82rem; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem;">
                ${c.learnings.map(l => `<li><i class="fa-solid fa-check" style="color: #10b981; margin-right: 0.35rem;"></i> ${l}</li>`).join('')}
              </ul>
            </div>

            <div style="font-size: 0.8rem; color: #94a3b8; margin-bottom: 1.25rem;">
              <i class="fa-solid fa-download" style="color: ${c.color}; margin-right: 0.35rem;"></i> <strong>Incluye:</strong> ${c.includes}
            </div>

            <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Acceso completo</span>
                <span style="font-size: 1.4rem; font-weight: 700; color: #fff;">${c.price}</span>
              </div>
              <button onclick="handleCourseEnrollment('${c.title.replace(/'/g, "\\'")}', '${c.price}')" class="btn btn-primary btn-sm" style="padding: 0.55rem 1.1rem; font-size: 0.85rem;">
                <i class="fa-solid fa-bolt"></i> Inscribirme Ahora
              </button>
            </div>
          </div>

        </div>
      `).join('')}
    </div>

    <!-- Need customized training box -->
    <div class="glass-card" style="text-align: center; padding: 2.5rem; border: 1px dashed rgba(245, 158, 11, 0.4); max-width: 750px; margin: 0 auto;">
      <h3 style="color: #fff; font-size: 1.4rem; margin-bottom: 0.5rem;">¿Buscas capacitación privada para tu equipo o empresa?</h3>
      <p style="color: var(--text-muted); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.25rem;">
        Diseñamos talleres in-company en vivo de 2 a 4 horas sobre implementación de IA, Safe Vibe Coding y seguridad para equipos comerciales o de desarrollo.
      </p>
      <a href="#empresas" class="btn btn-secondary">
        <i class="fa-solid fa-handshake"></i> Solicitar Taller Corporativo In-Company
      </a>
    </div>
  `;
}

function handleCourseEnrollment(courseTitle, price) {
  const subject = encodeURIComponent(`Inscripción a Curso: ${courseTitle}`);
  const body = encodeURIComponent(
    `Hola equipo de Los Manejadores,\n\n` +
    `Deseo inscribirme al curso: ${courseTitle} (${price}).\n\n` +
    `Por favor envíenme el enlace de pago seguro y las credenciales de acceso inmediato al contenido y materiales descargables.\n\n` +
    `Muchas gracias.`
  );
  alert(`¡Excelente elección! Te abrimos tu cliente de correo para confirmar tu inscripción a «${courseTitle}» y enviarte el acceso inmediato.`);
  window.location.href = `mailto:cursos@losmanejadores.com?subject=${subject}&body=${body}`;
}

// ============================================================================
// RENDER: VERSIÓN COMERCIAL & DEMOSTRACIÓN DE PRODUCTO PARA CLIENTES
// ============================================================================
function renderCommercialPage() {
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  container.innerHTML = `
    <div class="breadcrumb-bar">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">Versión Comercial • Demostración de Producto para Clientes & Marcas</span>
      </div>
      <a href="#home" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Inicio</a>
    </div>

    <!-- Hero Comercial -->
    <div class="section-header" style="text-align: center; max-width: 900px; margin: 0 auto 3rem auto;">
      <span class="section-subtitle" style="color: var(--cyan);"><i class="fa-solid fa-briefcase"></i> SHOWCASE COMERCIAL • MANEJADORES B2B</span>
      <h1 class="section-title" style="font-size: 2.8rem; margin-top: 0.5rem;">
        Talento Virtual & Fábrica de Contenido para tu Marca
      </h1>
      <p class="section-description" style="margin-top: 0.85rem; line-height: 1.7; font-size: 1.05rem;">
        Desarrollamos influencers virtuales con consistencia fotográfica 4K, producción automatizada de video corto para TikTok/Reels y canales de YouTube llave en mano. 
        <strong>Hasta un 80% menos costes</strong> que el talento humano tradicional, disponibilidad 24/7 y primera entrega en 48 horas.
      </p>
      
      <div style="display: flex; justify-content: center; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap;">
        <a href="#commercial-simulator" class="btn btn-primary" style="background: var(--primary-gradient); border: none;">
          <i class="fa-solid fa-calculator"></i> Probar Simulador de Campaña & ROI
        </a>
        <a href="#commercial-roster" class="btn btn-secondary">
          <i class="fa-solid fa-users"></i> Catálogo de Talentos Listos
        </a>
        <a href="#commercial-plans" class="btn btn-secondary">
          <i class="fa-solid fa-tags"></i> Planes y Precios
        </a>
        <button class="btn btn-secondary" onclick="toggleCommercialDeck()">
          <i class="fa-solid fa-file-powerpoint"></i> Pitch Deck (10 Diapositivas)
        </button>
      </div>
    </div>

    <!-- BLOQUE 1: LAS 4 SOLUCIONES COMERCIALES CLAVE -->
    <section class="section" style="padding-top: 0; margin-bottom: 3.5rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
        <span class="section-subtitle" style="color: var(--purple);"><i class="fa-solid fa-layer-group"></i> Portafolio de Productos</span>
        <h2 class="section-title" style="font-size: 2rem;">¿Qué Puede Hacer Manejadores por tu Empresa?</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 1.5rem;">
        
        <!-- Solución 1 -->
        <div class="glass-card" style="padding: 1.75rem; border-color: rgba(6, 182, 212, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(6, 182, 212, 0.15); color: var(--cyan); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1rem;">
              <i class="fa-solid fa-user-astronaut"></i>
            </div>
            <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">Embajador Virtual Exclusivo</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6;">
              Diseñamos la cara visible, tono de voz y vestuario corporativo con tu logo. Un activo digital perpetuo de tu marca sin riesgo de huelgas ni cancelaciones.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; margin-top: 0.75rem; line-height: 1.6;">
              <li>Consistencia facial absoluta en cualquier pose</li>
              <li>Voz clonada en español, inglés o multilingüe</li>
              <li>Cesión total de derechos de propiedad intelectual</li>
            </ul>
          </div>
          <button onclick="prefillCommercialInquiry('Embajador Virtual Exclusivo')" class="btn btn-secondary btn-sm" style="margin-top: 1.25rem; width: 100%; justify-content: center; color: var(--cyan); border-color: rgba(6, 182, 212, 0.4);">
            Solicitar Embajador Propio
          </button>
        </div>

        <!-- Solución 2 -->
        <div class="glass-card" style="padding: 1.75rem; border-color: rgba(139, 92, 246, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(139, 92, 246, 0.15); color: var(--purple); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1rem;">
              <i class="fa-solid fa-video"></i>
            </div>
            <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">Fábrica de Reels & TikTok UGC</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6;">
              Packs mensuales de 15 a 50 videos verticales con ganchos de alta retención. Promociona tus productos o servicios con estilo orgánico y testimonios creíbles.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; margin-top: 0.75rem; line-height: 1.6;">
              <li>Guiones probados para comercio y apps</li>
              <li>Subtítulos animados automáticos de alto impacto</li>
              <li>Entrega mensual continua sin retrasos de rodaje</li>
            </ul>
          </div>
          <button onclick="prefillCommercialInquiry('Pack Reels y TikTok UGC')" class="btn btn-secondary btn-sm" style="margin-top: 1.25rem; width: 100%; justify-content: center; color: var(--purple); border-color: rgba(139, 92, 246, 0.4);">
            Contratar Pack de Contenido
          </button>
        </div>

        <!-- Solución 3 -->
        <div class="glass-card" style="padding: 1.75rem; border-color: rgba(239, 68, 68, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(239, 68, 68, 0.15); color: #ef4444; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1rem;">
              <i class="fa-brands fa-youtube"></i>
            </div>
            <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">Canal de YouTube Llave en Mano</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6;">
              Desarrollamos y gestionamos un canal educativo o de nicho para tu industria. Construye autoridad en Google, genera leads B2B y monetiza vía AdSense.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; margin-top: 0.75rem; line-height: 1.6;">
              <li>Investigación de palabras clave con alto RPM</li>
              <li>Guiones persuasivos con IA y locución natural</li>
              <li>Miniaturas 4K optimizadas para un CTR superior al 8%</li>
            </ul>
          </div>
          <button onclick="prefillCommercialInquiry('Canal YouTube Corporativo')" class="btn btn-secondary btn-sm" style="margin-top: 1.25rem; width: 100%; justify-content: center; color: #ef4444; border-color: rgba(239, 68, 68, 0.4);">
            Lanzar Canal de YouTube
          </button>
        </div>

        <!-- Solución 4 -->
        <div class="glass-card" style="padding: 1.75rem; border-color: rgba(16, 185, 129, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(16, 185, 129, 0.15); color: var(--green); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1rem;">
              <i class="fa-solid fa-comments-dollar"></i>
            </div>
            <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">Reactivación & Automatización</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6;">
              Automatizamos el seguimiento de clientes por WhatsApp y respondemos el 100% de reseñas en Google Maps con SEO local para atraer clientes de tu zona en 48h.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; margin-top: 0.75rem; line-height: 1.6;">
              <li>Reactivación de bases de datos inactivas sin pauta</li>
              <li>Respuestas con IA a Google Reviews en 60 segundos</li>
              <li>Embudos de calificación de prospectos directos</li>
            </ul>
          </div>
          <button onclick="prefillCommercialInquiry('Automatización WhatsApp y Maps')" class="btn btn-secondary btn-sm" style="margin-top: 1.25rem; width: 100%; justify-content: center; color: var(--green); border-color: rgba(16, 185, 129, 0.4);">
            Activar Funnel de Ventas
          </button>
        </div>

      </div>
    </section>

    <!-- BLOQUE 2: CATÁLOGO DE TALENTOS DISPONIBLES PARA PATROCINIO -->
    <section id="commercial-roster" class="section" style="padding-top: 0; margin-bottom: 3.5rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
        <span class="section-subtitle" style="color: var(--pink);"><i class="fa-solid fa-star"></i> Catálogo Activo</span>
        <h2 class="section-title" style="font-size: 2rem;">Modelos Virtuales Listos para Campañas Inmediatas</h2>
        <p class="section-description">Selecciona el perfil ideal para la audiencia de tu marca y solicita una demostración personalizada.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 1.25rem;">
        
        <!-- Laura Taeda -->
        <div class="glass-card" style="padding: 1.25rem; border-color: rgba(16, 185, 129, 0.4); display: flex; gap: 1rem; align-items: center;">
          <img src="laura_avatar.jpg" alt="Laura Taeda" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid var(--green);">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h4 style="color: #fff; font-size: 1rem; margin: 0;">Laura Taeda</h4>
              <span style="font-size: 0.7rem; color: var(--green); background: rgba(16, 185, 129, 0.15); padding: 0.15rem 0.4rem; border-radius: 4px;">5.8% Eng.</span>
            </div>
            <span style="font-size: 0.75rem; color: var(--cyan); display: block;">Fitness & Nutrición Basada en Ciencia</span>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0.25rem 0 0.5rem 0;">Ideal para suplementos, ropa deportiva, apps de bienestar y snacks saludables.</p>
            <button onclick="selectModelForQuote('Laura Taeda')" class="btn btn-secondary btn-sm" style="font-size: 0.72rem; padding: 0.2rem 0.6rem; color: var(--green);">
              Cotizar con Laura
            </button>
          </div>
        </div>

        <!-- Julia Schmidt -->
        <div class="glass-card" style="padding: 1.25rem; border-color: rgba(236, 72, 153, 0.4); display: flex; gap: 1rem; align-items: center;">
          <img src="julia_avatar.jpg" alt="Julia Schmidt" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid var(--pink);">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h4 style="color: #fff; font-size: 1rem; margin: 0;">Julia Schmidt</h4>
              <span style="font-size: 0.7rem; color: var(--pink); background: rgba(236, 72, 153, 0.15); padding: 0.15rem 0.4rem; border-radius: 4px;">6.1% Eng.</span>
            </div>
            <span style="font-size: 0.75rem; color: #ff70a6; display: block;">Dermocosmética & Clean Beauty</span>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0.25rem 0 0.5rem 0;">Perfecta para marcas de cosmética, clínicas estéticas, skincare y belleza limpia.</p>
            <button onclick="selectModelForQuote('Julia Schmidt')" class="btn btn-secondary btn-sm" style="font-size: 0.72rem; padding: 0.2rem 0.6rem; color: var(--pink);">
              Cotizar con Julia
            </button>
          </div>
        </div>

        <!-- Mateo Silva -->
        <div class="glass-card" style="padding: 1.25rem; border-color: rgba(6, 182, 212, 0.4); display: flex; gap: 1rem; align-items: center;">
          <img src="mateo_avatar.jpg" alt="Mateo Silva" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid var(--cyan);">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h4 style="color: #fff; font-size: 1rem; margin: 0;">Mateo Silva</h4>
              <span style="font-size: 0.7rem; color: var(--cyan); background: rgba(6, 182, 212, 0.15); padding: 0.15rem 0.4rem; border-radius: 4px;">7.2% Eng. (Top RPM)</span>
            </div>
            <span style="font-size: 0.75rem; color: var(--cyan); display: block;">Fintech, Inversiones & SaaS</span>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0.25rem 0 0.5rem 0;">Ideal para plataformas de trading, bancos digitales, apps de ahorro y fondos B2B.</p>
            <button onclick="selectModelForQuote('Mateo Silva')" class="btn btn-secondary btn-sm" style="font-size: 0.72rem; padding: 0.2rem 0.6rem; color: var(--cyan);">
              Cotizar con Mateo
            </button>
          </div>
        </div>

        <!-- Elena Daddario -->
        <div class="glass-card" style="padding: 1.25rem; border-color: rgba(96, 165, 250, 0.4); display: flex; gap: 1rem; align-items: center;">
          <img src="elena_avatar.png" alt="Elena Daddario" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid #60a5fa;">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h4 style="color: #fff; font-size: 1rem; margin: 0;">Elena Daddario</h4>
              <span style="font-size: 0.7rem; color: #60a5fa; background: rgba(96, 165, 250, 0.15); padding: 0.15rem 0.4rem; border-radius: 4px;">6.4% Eng.</span>
            </div>
            <span style="font-size: 0.75rem; color: #93c5fd; display: block;">Mindfulness & Psicología Consciente</span>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0.25rem 0 0.5rem 0;">Alineada con editoriales, apps de meditación, infusiones, té y moda sostenible.</p>
            <button onclick="selectModelForQuote('Elena Daddario')" class="btn btn-secondary btn-sm" style="font-size: 0.72rem; padding: 0.2rem 0.6rem; color: #60a5fa;">
              Cotizar con Elena
            </button>
          </div>
        </div>

        <!-- Camila Reyes -->
        <div class="glass-card" style="padding: 1.25rem; border-color: rgba(239, 68, 68, 0.4); display: flex; gap: 1rem; align-items: center;">
          <img src="camila_avatar.jpg" alt="Camila Reyes" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid #ef4444;">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h4 style="color: #fff; font-size: 1rem; margin: 0;">Camila Reyes</h4>
              <span style="font-size: 0.7rem; color: #f87171; background: rgba(239, 68, 68, 0.15); padding: 0.15rem 0.4rem; border-radius: 4px;">5.5% Eng.</span>
            </div>
            <span style="font-size: 0.75rem; color: #f87171; display: block;">Moda Latina & Entretenimiento Viral</span>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0.25rem 0 0.5rem 0;">Alta conversión para tiendas e-commerce, ropa femenina y contenido viral de TikTok.</p>
            <button onclick="selectModelForQuote('Camila Reyes')" class="btn btn-secondary btn-sm" style="font-size: 0.72rem; padding: 0.2rem 0.6rem; color: #f87171;">
              Cotizar con Camila
            </button>
          </div>
        </div>

        <!-- Alejandra Prototipo B2B -->
        <div class="glass-card" style="padding: 1.25rem; border-color: rgba(245, 158, 11, 0.4); display: flex; gap: 1rem; align-items: center;">
          <img src="alejandra_avatar.jpg" alt="Alejandra B2B" style="width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid #f59e0b;">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h4 style="color: #fff; font-size: 1rem; margin: 0;">Alejandra (B2B Custom)</h4>
              <span style="font-size: 0.7rem; color: #fbbf24; background: rgba(245, 158, 11, 0.15); padding: 0.15rem 0.4rem; border-radius: 4px;">100% Adaptable</span>
            </div>
            <span style="font-size: 0.75rem; color: #fde68a; display: block;">Embajadora Virtual Corporativa</span>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin: 0.25rem 0 0.5rem 0;">Prototipo diseñado para ser customizado con el rostro, uniforme y branding de tu empresa.</p>
            <button onclick="selectModelForQuote('Alejandra (B2B Custom)')" class="btn btn-secondary btn-sm" style="font-size: 0.72rem; padding: 0.2rem 0.6rem; color: #fbbf24;">
              Cotizar Modelo B2B
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- BLOQUE 3: SIMULADOR INTERACTIVO DE CAMPAÑA & CALCULADORA DE ROI -->
    <section id="commercial-simulator" class="section" style="padding-top: 0; margin-bottom: 3.5rem;">
      <div class="glass-card" style="padding: 2.5rem; border-color: rgba(6, 182, 212, 0.5); background: radial-gradient(circle at top right, rgba(6, 182, 212, 0.12) 0%, rgba(15, 18, 30, 0.98) 100%); border-radius: var(--radius-lg);">
        
        <div style="text-align: center; max-width: 750px; margin: 0 auto 2rem auto;">
          <span class="section-subtitle" style="color: var(--cyan);"><i class="fa-solid fa-calculator"></i> Cotizador en Tiempo Real</span>
          <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; margin: 0.5rem 0;">
            Simulador de Campaña & Retorno de Inversión (ROI)
          </h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            Ajusta los parámetros de tu empresa y calcula al instante el ahorro económico, volumen de publicaciones y alcance proyectado.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; align-items: center;">
          
          <!-- Controles del Simulador -->
          <div style="background: rgba(0,0,0,0.4); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
            
            <div style="margin-bottom: 1.25rem;">
              <label style="font-size: 0.85rem; color: #fff; font-weight: 600; display: block; margin-bottom: 0.4rem;">
                <i class="fa-solid fa-building" style="color: var(--cyan); margin-right: 0.35rem;"></i> Industria de tu Empresa:
              </label>
              <select id="sim-industry" onchange="updateCommercialSimulator()" class="form-input" style="background: #0d111e; color: #fff; font-size: 0.88rem;">
                <option value="ecommerce">E-Commerce & Retail de Consumo</option>
                <option value="belleza">Belleza, Estética & Skincare</option>
                <option value="fitness">Fitness, Salud & Suplementación</option>
                <option value="fintech">FinTech, Software SaaS & B2B</option>
                <option value="gastronomia">Gastronomía, Hotelería & Locales</option>
                <option value="educacion">Cursos, Infoproductos & Educación</option>
              </select>
            </div>

            <div style="margin-bottom: 1.25rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #fff; font-weight: 600; margin-bottom: 0.4rem;">
                <span><i class="fa-solid fa-film" style="color: var(--purple); margin-right: 0.35rem;"></i> Volumen Mensual de Videos:</span>
                <span id="sim-volume-label" style="color: var(--cyan); font-family: monospace;">25 Videos / Mes</span>
              </div>
              <input type="range" id="sim-volume" min="10" max="60" step="5" value="25" oninput="updateCommercialSimulator()" style="width: 100%; accent-color: var(--cyan);">
              <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-dim); margin-top: 0.2rem;">
                <span>10 (Piloto)</span>
                <span>25 (Escala)</span>
                <span>60 (Dominancia)</span>
              </div>
            </div>

            <div style="margin-bottom: 1.25rem;">
              <label style="font-size: 0.85rem; color: #fff; font-weight: 600; display: block; margin-bottom: 0.4rem;">
                <i class="fa-solid fa-calendar" style="color: var(--pink); margin-right: 0.35rem;"></i> Duración del Compromiso:
              </label>
              <select id="sim-duration" onchange="updateCommercialSimulator()" class="form-input" style="background: #0d111e; color: #fff; font-size: 0.88rem;">
                <option value="1">1 Mes (Prueba de Concepto Inicial)</option>
                <option value="3" selected>3 Meses (Campaña de Crecimiento - 15% Descuento)</option>
                <option value="6">6 Meses (Posicionamiento Total - 25% Descuento)</option>
              </select>
            </div>

            <div>
              <label style="font-size: 0.85rem; color: #fff; font-weight: 600; display: block; margin-bottom: 0.4rem;">
                <i class="fa-solid fa-user-tag" style="color: #fbbf24; margin-right: 0.35rem;"></i> Formato de Talento:
              </label>
              <select id="sim-talent-type" onchange="updateCommercialSimulator()" class="form-input" style="background: #0d111e; color: #fff; font-size: 0.88rem;">
                <option value="roster">Influencer de Catálogo (Laura, Julia, Mateo, etc.)</option>
                <option value="custom">Embajador Virtual 100% Exclusivo para mi Marca</option>
              </select>
            </div>

          </div>

          <!-- Resultados del Simulador -->
          <div style="background: rgba(18, 22, 36, 0.9); padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid rgba(6, 182, 212, 0.4);">
            <div style="font-size: 0.8rem; font-weight: 700; color: var(--cyan); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">
              Proyección Financiera & Ahorro Estimado
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem;">
              <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px;">
                <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Inversión en Manejadores:</span>
                <span id="sim-manejadores-cost" style="font-size: 1.6rem; font-weight: 800; color: var(--cyan); font-family: monospace;">$1,150 USD</span>
                <span style="font-size: 0.7rem; color: var(--text-dim); display: block;">Todo incluido / sin imprevistos</span>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px;">
                <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Costo Agencia Tradicional:</span>
                <span id="sim-traditional-cost" style="font-size: 1.6rem; font-weight: 800; color: #f87171; font-family: monospace; text-decoration: line-through;">$4,800 USD</span>
                <span style="font-size: 0.7rem; color: #f87171; display: block;">Rodaje, actores y agencias</span>
              </div>
            </div>

            <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); padding: 0.9rem; border-radius: 8px; margin-bottom: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span style="font-size: 0.8rem; color: var(--green); font-weight: 700; display: block;">Ahorro Neto Directo:</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Dinero ahorrado en tu presupuesto de marketing</span>
              </div>
              <span id="sim-savings-percent" style="font-size: 1.5rem; font-weight: 900; color: var(--green); font-family: monospace;">-76%</span>
            </div>

            <div style="border-top: 1px solid var(--border-glass); padding-top: 1rem; margin-bottom: 1.25rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.35rem;">
                <span style="color: var(--text-muted);">Alcance Orgánico Proyectado:</span>
                <strong id="sim-reach-label" style="color: #fff;">250k - 600k Reproducciones</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.35rem;">
                <span style="color: var(--text-muted);">Tiempo de Primera Entrega:</span>
                <strong style="color: var(--cyan);">Menos de 48 horas</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem;">
                <span style="color: var(--text-muted);">Derechos Comerciales:</span>
                <strong style="color: var(--green);">100% Libres de regalías</strong>
              </div>
            </div>

            <button onclick="applySimulationToQuote()" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 0.95rem; padding: 0.85rem; background: var(--primary-gradient); border: none;">
              <i class="fa-solid fa-paper-plane"></i> Solicitar Propuesta con Esta Configuración
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- BLOQUE 4: TABLA COMPARATIVA DIRECTA -->
    <section class="section" style="padding-top: 0; margin-bottom: 3.5rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
        <span class="section-subtitle" style="color: var(--cyan);"><i class="fa-solid fa-scale-balanced"></i> Análisis Comparativo</span>
        <h2 class="section-title" style="font-size: 2rem;">Manejadores vs. Agencias Tradicionales</h2>
      </div>

      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; background: rgba(18, 22, 36, 0.7); border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-glass); font-size: 0.88rem;">
          <thead>
            <tr style="background: rgba(0,0,0,0.5); text-align: left;">
              <th style="padding: 1rem 1.25rem; color: var(--text-muted);">Criterio Comercial</th>
              <th style="padding: 1rem 1.25rem; color: #f87171;"><i class="fa-solid fa-xmark"></i> Agencia Tradicional con Actores</th>
              <th style="padding: 1rem 1.25rem; color: var(--cyan); background: rgba(6, 182, 212, 0.08);"><i class="fa-solid fa-check"></i> Manejadores Virtual Studio</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 1rem 1.25rem; font-weight: 600; color: #fff;">Tiempo de Lanzamiento</td>
              <td style="padding: 1rem 1.25rem; color: var(--text-muted);">3 a 6 semanas (castings, pruebas, rodajes)</td>
              <td style="padding: 1rem 1.25rem; color: #fff; background: rgba(6, 182, 212, 0.04);"><strong>48 Horas</strong> (prototipo listo de inmediato)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 1rem 1.25rem; font-weight: 600; color: #fff;">Costes por Pieza de Video</td>
              <td style="padding: 1rem 1.25rem; color: var(--text-muted);">$250 a $600 USD por reel producido</td>
              <td style="padding: 1rem 1.25rem; color: #fff; background: rgba(6, 182, 212, 0.04);"><strong>$25 a $55 USD</strong> (reducción del 80%)</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 1rem 1.25rem; font-weight: 600; color: #fff;">Disponibilidad & Agenda</td>
              <td style="padding: 1rem 1.25rem; color: var(--text-muted);">Limitada a horarios de estudio y agenda de actores</td>
              <td style="padding: 1rem 1.25rem; color: #fff; background: rgba(6, 182, 212, 0.04);"><strong>24/7/365</strong> sin fatiga ni indisponibilidad</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
              <td style="padding: 1rem 1.25rem; font-weight: 600; color: #fff;">Riesgo de Reputación</td>
              <td style="padding: 1rem 1.25rem; color: var(--text-muted);">Alto (escándalos personales, opiniones públicas)</td>
              <td style="padding: 1rem 1.25rem; color: #fff; background: rgba(6, 182, 212, 0.04);"><strong>0% de riesgo</strong> (100% controlado por guion)</td>
            </tr>
            <tr>
              <td style="padding: 1rem 1.25rem; font-weight: 600; color: #fff;">Propiedad de la Imagen</td>
              <td style="padding: 1rem 1.25rem; color: var(--text-muted);">Licencia temporal con cobros anuales recurrentes</td>
              <td style="padding: 1rem 1.25rem; color: #fff; background: rgba(6, 182, 212, 0.04);"><strong>IP Propietaria</strong> cedida a la marca en planes B2B</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- BLOQUE 5: PLANES COMERCIALES TRANSPARENTES -->
    <section id="commercial-plans" class="section" style="padding-top: 0; margin-bottom: 3.5rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
        <span class="section-subtitle" style="color: var(--purple);"><i class="fa-solid fa-tags"></i> Opciones de Contratación</span>
        <h2 class="section-title" style="font-size: 2rem;">Planes de Producción B2B</h2>
        <p class="section-description">Sin contratos de permanencia forzosa. Escala según los resultados de tu marca.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1.5rem;">
        
        <!-- Plan Starter -->
        <div class="glass-card" style="padding: 2rem; border-color: rgba(255,255,255,0.1); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Prueba de Concepto</span>
            <h3 style="color: #fff; font-size: 1.5rem; margin: 0.25rem 0 0.5rem 0;">Starter Piloto 48h</h3>
            <div style="font-size: 2rem; font-weight: 900; color: #fff; margin-bottom: 1rem; font-family: monospace;">
              $450 <span style="font-size: 0.9rem; font-weight: 400; color: var(--text-muted);">USD (Pago único)</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Ideal para validar el engagement de un influencer virtual con tu producto antes de escalar la pauta.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; line-height: 1.8;">
              <li><i class="fa-solid fa-check" style="color: var(--cyan); margin-right: 0.35rem;"></i> 3 Videos verticales 9:16 de alta conversión</li>
              <li><i class="fa-solid fa-check" style="color: var(--cyan); margin-right: 0.35rem;"></i> 1 Influencer de catálogo a elección</li>
              <li><i class="fa-solid fa-check" style="color: var(--cyan); margin-right: 0.35rem;"></i> Guion aprobado + locución en ElevenLabs</li>
              <li><i class="fa-solid fa-check" style="color: var(--cyan); margin-right: 0.35rem;"></i> Entrega completa en menos de 48 horas</li>
            </ul>
          </div>
          <button onclick="prefillCommercialInquiry('Plan Starter Piloto ($450 USD)')" class="btn btn-secondary" style="margin-top: 1.5rem; width: 100%; justify-content: center;">
            Contratar Piloto 48h
          </button>
        </div>

        <!-- Plan Pro Scale (Destacado) -->
        <div class="glass-card" style="padding: 2rem; border-color: rgba(6, 182, 212, 0.6); background: radial-gradient(circle at top, rgba(6, 182, 212, 0.15) 0%, rgba(18, 22, 36, 0.95) 100%); display: flex; flex-direction: column; justify-content: space-between; position: relative;">
          <div style="position: absolute; top: -12px; right: 20px; background: var(--primary-gradient); color: #fff; font-size: 0.72rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase;">
            Más Elegido por Empresas
          </div>
          <div>
            <span style="font-size: 0.75rem; color: var(--cyan); font-weight: 700; text-transform: uppercase;">Crecimiento Continuo</span>
            <h3 style="color: #fff; font-size: 1.5rem; margin: 0.25rem 0 0.5rem 0;">Pro Scale Mensual</h3>
            <div style="font-size: 2rem; font-weight: 900; color: var(--cyan); margin-bottom: 1rem; font-family: monospace;">
              $1,250 <span style="font-size: 0.9rem; font-weight: 400; color: var(--text-muted);">USD / mes</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Fábrica de contenido constante para dominar TikTok e Instagram Reels con publicación periódica.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-muted); padding-left: 1rem; line-height: 1.8;">
              <li><i class="fa-solid fa-check" style="color: var(--cyan); margin-right: 0.35rem;"></i> <strong>25 Videos mensuales</strong> listos para pauta</li>
              <li><i class="fa-solid fa-check" style="color: var(--cyan); margin-right: 0.35rem;"></i> Hasta 2 Influencers activos en paralelo</li>
              <li><i class="fa-solid fa-check" style="color: var(--cyan); margin-right: 0.35rem;"></i> Subtítulos dinámicos y ganchos A/B testing</li>
              <li><i class="fa-solid fa-check" style="color: var(--cyan); margin-right: 0.35rem;"></i> Sesión mensual de optimización estratégica</li>
            </ul>
          </div>
          <button onclick="prefillCommercialInquiry('Plan Pro Scale ($1,250 USD/mes)')" class="btn btn-primary" style="margin-top: 1.5rem; width: 100%; justify-content: center; background: var(--primary-gradient); border: none;">
            Comenzar Plan Scale
          </button>
        </div>

        <!-- Plan Enterprise -->
        <div class="glass-card" style="padding: 2rem; border-color: rgba(139, 92, 246, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--purple); font-weight: 700; text-transform: uppercase;">Marca Exclusiva</span>
            <h3 style="color: #fff; font-size: 1.5rem; margin: 0.25rem 0 0.5rem 0;">Enterprise Avatar Propio</h3>
            <div style="font-size: 2rem; font-weight: 900; color: #fff; margin-bottom: 1rem; font-family: monospace;">
              $3,500 <span style="font-size: 0.9rem; font-weight: 400; color: var(--text-muted);">USD</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Creación y cesión de un avatar virtual 100% exclusivo para tu empresa con soporte dedicado.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; line-height: 1.8;">
              <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> <strong>Diseño de rostro y personalidad exclusiva</strong></li>
              <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> Cesión notarial total de Propiedad Intelectual</li>
              <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> 40 Videos de contenido base de lanzamiento</li>
              <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> Canal privado de Slack/Telegram con dirección</li>
            </ul>
          </div>
          <button onclick="prefillCommercialInquiry('Plan Enterprise Avatar Propio ($3,500 USD)')" class="btn btn-secondary" style="margin-top: 1.5rem; width: 100%; justify-content: center;">
            Solicitar Plan Enterprise
          </button>
        </div>

      </div>
    </section>

    <!-- BLOQUE 6: PITCH DECK DE 10 DIAPOSITIVAS (COLLAPSIBLE / MODAL) -->
    <div id="commercial-pitch-deck-container" style="display: none; margin-bottom: 4rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 1.5rem;">
        <span class="section-subtitle" style="color: var(--purple);"><i class="fa-solid fa-chart-pie"></i> SÍNTESIS ESTRATÉGICA</span>
        <h2 class="section-title" style="font-size: 2rem;">Pitch Deck Ejecutivo (10 Diapositivas)</h2>
      </div>

      <!-- Pitch Deck Slider Container -->
      <div class="pitch-container">
        <!-- Slide 1 -->
        <div class="pitch-slide active-slide" data-slide="1">
          <span class="slide-num">DIAPOSITIVA 1 DE 10 • PORTADA</span>
          <h3 class="slide-title">Manejadores — Creative AI Studio</h3>
          <p class="slide-text">Conectamos talentos digitales con el mundo mediante IA generativa, narrativa de alto enganche y monetización estructurada.</p>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--cyan);"><i class="fa-solid fa-earth-americas"></i> Operaciones Estratégicas: Alemania (CET), Canadá (EST) y Chile (CLT)</div>
        </div>

        <!-- Slide 2 -->
        <div class="pitch-slide" data-slide="2">
          <span class="slide-num">DIAPOSITIVA 2 DE 10 • EL PROBLEMA</span>
          <h3 class="slide-title">El Cuello de Botella de los Creadores & Agencias</h3>
          <p class="slide-text">El 95% de los creadores y marcas sufren saturación operativa: costos de producción prohibitivos ($3,000+/mes por video tradicional), inconsistencia visual, cancelaciones de rodaje y agotamiento de agenda.</p>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-dim);">
            <em>TAM global de la economía de creadores excede $250B con 70% de ineficiencia en producción artesanal de contenido.</em>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="pitch-slide" data-slide="3">
          <span class="slide-num">DIAPOSITIVA 3 DE 10 • LA SOLUCIÓN</span>
          <h3 class="slide-title">Influencia Virtual Asistida por IA & Consistencia 4K</h3>
          <p class="slide-text">Creamos avatares hiperrealistas con consistencia facial absoluta y canales automatizados a 1/10 del costo tradicional y con una velocidad de iteración 10 veces mayor.</p>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--green);">
            <i class="fa-solid fa-circle-check"></i> Producción 24/7 sin dependencia física de agenda ni fatiga de rodaje.
          </div>
        </div>

        <!-- Slide 4 -->
        <div class="pitch-slide" data-slide="4">
          <span class="slide-num">DIAPOSITIVA 4 DE 10 • MODELO DE NEGOCIO</span>
          <h3 class="slide-title">Múltiples Embudos de Monetización Integrados</h3>
          <p class="slide-text">
            1. Suscripciones VIP recurrentes (Fanvue / OnlyFans: $12–$25 USD/mes).<br>
            2. YouTube Automatizado (AdSense de alto RPM + Patrocinios integrados).<br>
            3. E-Commerce Directo (Shopify, Gumroad, Cosmética limpia, Suplementación, E-books).<br>
            4. Soluciones B2B & Embajadores Virtuales para Empresas ($2,500 a $15,000 USD).
          </p>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-dim);">
            <em>Margen neto consolidado de agencia superior al 65%.</em>
          </div>
        </div>

        <!-- Slide 5 -->
        <div class="pitch-slide" data-slide="5">
          <span class="slide-num">DIAPOSITIVA 5 DE 10 • PRUEBA SOCIAL & PORTAFOLIO</span>
          <h3 class="slide-title">Roster de Talentos Validados</h3>
          <p class="slide-text">Julia Schmidt (Clean Beauty), Laura Taeda (Fitness & Nutrición), Mateo Silva (Fintech & Inversiones), Elena Daddario (Mindfulness), Camila Reyes (Moda Viral) y Damien Vance (Dark Romance).</p>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--pink);">
            <i class="fa-solid fa-chart-line"></i> Retención mensual superior al 70% con interacción automatizada.
          </div>
        </div>

        <!-- Slide 6 -->
        <div class="pitch-slide" data-slide="6">
          <span class="slide-num">DIAPOSITIVA 6 DE 10 • ARQUITECTURA TÉCNICA</span>
          <h3 class="slide-title">Pipeline Tecnológico Propietario de 7 Pasos</h3>
          <p class="slide-text">Desde la arquitectura de prompts con Gemini, consistencia LoRA con Flux y Motion Control en HeyGen/Kling, hasta orquestación autónoma de flujos.</p>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--cyan);">
            <i class="fa-solid fa-microchip"></i> Capacidad de generar hasta 500 piezas audiovisuales al mes por cluster.
          </div>
        </div>

        <!-- Slide 7 -->
        <div class="pitch-slide" data-slide="7">
          <span class="slide-num">DIAPOSITIVA 7 DE 10 • SEGURIDAD & COMPLIANCE</span>
          <h3 class="slide-title">Seguridad, KYC y Marco Legal Transfronterizo</h3>
          <p class="slide-text">Verificación KYC rigurosa, protección de propiedad intelectual, pasarelas seguras (Wise Business / Stripe) y cumplimiento normativo GDPR (UE) y PIPEDA (Canadá).</p>
        </div>

        <!-- Slide 8 -->
        <div class="pitch-slide" data-slide="8">
          <span class="slide-num">DIAPOSITIVA 8 DE 10 • PLAN FINANCIERO</span>
          <h3 class="slide-title">Metas Financieras & Expansión Trimestral</h3>
          <p class="slide-text">
            • Fase 1: 5 influencers activos en producción y primeros 500 suscriptores pagos.<br>
            • Fase 2: Expansión de tiendas e-commerce asociadas y 4 contratos B2B con empresas.<br>
            • Proyección Mes 6: $35,000 USD/mes con margen de contribución superior al 65%.
          </p>
        </div>

        <!-- Slide 9 -->
        <div class="pitch-slide" data-slide="9">
          <span class="slide-num">DIAPOSITIVA 9 DE 10 • EQUIPO FUNDADOR</span>
          <h3 class="slide-title">Sinergia Fundadora Multidisciplinaria</h3>
          <p class="slide-text">
            <strong>Daniel Santander (Alemania):</strong> Dirección de Arquitectura IA, LoRAs y Automatización.<br>
            <strong>Pancho Ipinza (Canadá):</strong> Dirección Creativa, Storytelling y Alianzas B2B.<br>
            <strong>Wladimir Gutierrez (Chile):</strong> Media Operations, Motion AI y Video Generativo.
          </p>
        </div>

        <!-- Slide 10 -->
        <div class="pitch-slide" data-slide="10">
          <span class="slide-num">DIAPOSITIVA 10 DE 10 • CALL TO ACTION</span>
          <h3 class="slide-title">Siguiente Paso: Construyamos Juntos</h3>
          <p class="slide-text">Únete como inversor estratégico, contrata una campaña de patrocinio con nuestros influencers o desarrolla el avatar virtual propio de tu marca.</p>
          <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#client-contact" class="btn btn-primary btn-sm"><i class="fa-solid fa-handshake"></i> Iniciar Conversación Comercial</a>
          </div>
        </div>

        <!-- Controls -->
        <div class="pitch-controls">
          <button class="btn btn-secondary" onclick="prevSlide()"><i class="fa-solid fa-chevron-left"></i> Anterior</button>
          <div class="pitch-dots" id="pitch-dots"></div>
          <button class="btn btn-primary" onclick="nextSlide()">Siguiente <i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </div>

    <!-- BLOQUE 7: OFICINAS Y FORMULARIO DE CONTACTO COMERCIAL DIRECTO -->
    <div class="clients-contact-section" id="client-contact" style="margin-top: 3rem;">
      <div style="text-align: center; max-width: 750px; margin: 0 auto 2.5rem auto;">
        <span class="detail-badge" style="background: rgba(6, 182, 212, 0.15); color: var(--cyan); border-color: rgba(6, 182, 212, 0.3); font-size: 0.75rem;">
          <i class="fa-solid fa-earth-americas"></i> COBERTURA TRANSNACIONAL
        </span>
        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; margin: 0.6rem 0 0.4rem 0;">
          Solicita una Propuesta Comercial para tu Marca
        </h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
          Coordinamos proyectos internacionales con empresas desde nuestros tres husos horarios en Europa y las Américas. 
          Te responderemos en menos de 24 horas con una propuesta personalizada.
        </p>
      </div>

      <!-- 3 Office Hub Cards -->
      <div class="contact-cards-grid">
        <div class="contact-card">
          <div style="font-size: 2.5rem; line-height: 1;">🇩🇪</div>
          <div>
            <h4 style="color: #fff; font-size: 1.1rem; margin-bottom: 0.2rem;">Alemania (Berlín)</h4>
            <div style="font-size: 0.8rem; color: var(--cyan); margin-bottom: 0.35rem;"><i class="fa-regular fa-clock"></i> CET (UTC+1)</div>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0;">Hub de Arquitectura de IA, LoRAs, Seguridad RGPD e Infraestructura de Servidores.</p>
          </div>
        </div>

        <div class="contact-card">
          <div style="font-size: 2.5rem; line-height: 1;">🇨🇦</div>
          <div>
            <h4 style="color: #fff; font-size: 1.1rem; margin-bottom: 0.2rem;">Canadá (Costa Este)</h4>
            <div style="font-size: 0.8rem; color: var(--pink); margin-bottom: 0.35rem;"><i class="fa-regular fa-clock"></i> EST (UTC-5)</div>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0;">Hub de Dirección Creativa, Relaciones Públicas, Audio Sintético y Alianzas Norteamérica.</p>
          </div>
        </div>

        <div class="contact-card">
          <div style="font-size: 2.5rem; line-height: 1;">🇨🇱</div>
          <div>
            <h4 style="color: #fff; font-size: 1.1rem; margin-bottom: 0.2rem;">Chile (Santiago)</h4>
            <div style="font-size: 0.8rem; color: var(--purple); margin-bottom: 0.35rem;"><i class="fa-regular fa-clock"></i> CLT (UTC-3)</div>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0;">Hub de Operaciones Audiovisuales, Motion AI, Video Generativo y Expansión Latam.</p>
          </div>
        </div>
      </div>

      <!-- Direct Contact & Inquiry Form -->
      <div class="glass-card" style="margin-top: 2rem; padding: 2.25rem; border-color: rgba(6, 182, 212, 0.4);">
        <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: #fff; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-paper-plane" style="color: var(--cyan);"></i> Envía tu Solicitud Comercial Directa
        </h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.75rem;">
          Recibe en menos de 24 horas tu presupuesto formal o agenda una videollamada de demostración en vivo.
        </p>

        <form onsubmit="handleClientsContactSubmit(event)">
          <div class="b2b-form-grid">
            <div class="b2b-form-group">
              <label>Nombre y Apellido *</label>
              <input type="text" id="client-name" placeholder="Tu nombre" required>
            </div>
            <div class="b2b-form-group">
              <label>Empresa o Marca *</label>
              <input type="text" id="client-company" placeholder="Nombre de tu negocio o agencia" required>
            </div>
            <div class="b2b-form-group">
              <label>Correo Electrónico *</label>
              <input type="email" id="client-email" placeholder="correo@empresa.com" required>
            </div>
            <div class="b2b-form-group">
              <label>Plan o Servicio de Interés *</label>
              <select id="client-type" required>
                <option value="Starter Piloto 48h ($450 USD)">Starter Piloto 48h ($450 USD)</option>
                <option value="Pro Scale Mensual ($1,250 USD/mes)" selected>Pro Scale Mensual ($1,250 USD/mes)</option>
                <option value="Enterprise Avatar Propio ($3,500 USD)">Enterprise Avatar Propio ($3,500 USD)</option>
                <option value="Campaña con Influencer Específico">Campaña con Influencer del Catálogo</option>
                <option value="Canal YouTube Corporativo">Canal YouTube Corporativo Llave en Mano</option>
                <option value="Inversión / Equity">Inversión de Capital / Alianza de Inversión</option>
              </select>
            </div>
          </div>

          <div class="b2b-form-group" style="margin-top: 1.25rem;">
            <label>Mensaje o Detalle del Proyecto *</label>
            <textarea id="client-message" rows="3" placeholder="Cuéntanos brevemente sobre tu producto, objetivos o dudas..." required></textarea>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-top: 1.75rem;">
            <button type="submit" class="btn btn-primary" style="padding: 0.8rem 1.8rem; background: var(--primary-gradient); border: none;">
              <i class="fa-solid fa-paper-plane"></i> Enviar Solicitud a Dirección Comercial
            </button>
            <div style="font-size: 0.82rem; color: var(--text-muted);">
              <i class="fa-solid fa-shield-halved" style="color: #10b981;"></i> Trato confidencial y propuesta en menos de 24 horas
            </div>
          </div>
        </form>
      </div>
    </div>
  `;

  // Initialize Pitch Deck Slider and Simulator
  setTimeout(() => {
    initPitchDeck();
    showSlide(1);
    updateCommercialSimulator();
  }, 40);
}

// Retrocompatibilidad para enlaces previos
function renderClientsPage() {
  renderCommercialPage();
}

function toggleCommercialDeck() {
  const deck = document.getElementById('commercial-pitch-deck-container');
  if (!deck) return;
  if (deck.style.display === 'none' || !deck.style.display) {
    deck.style.display = 'block';
    deck.scrollIntoView({ behavior: 'smooth' });
  } else {
    deck.style.display = 'none';
  }
}

function selectModelForQuote(modelName) {
  const typeSelect = document.getElementById('client-type');
  const msgArea = document.getElementById('client-message');
  const contactSec = document.getElementById('client-contact');

  if (typeSelect) typeSelect.value = 'Campaña con Influencer Específico';
  if (msgArea) msgArea.value = `Hola, estamos interesados en realizar una campaña comercial con ${modelName}. Deseamos cotizar opciones para nuestro producto.`;
  if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
}

function prefillCommercialInquiry(planOrService) {
  const typeSelect = document.getElementById('client-type');
  const msgArea = document.getElementById('client-message');
  const contactSec = document.getElementById('client-contact');

  if (typeSelect) {
    let matched = false;
    for (let opt of typeSelect.options) {
      if (opt.value.toLowerCase().includes(planOrService.toLowerCase())) {
        typeSelect.value = opt.value;
        matched = true;
        break;
      }
    }
    if (!matched) typeSelect.value = planOrService;
  }

  if (msgArea) msgArea.value = `Hola equipo de Manejadores, nos gustaría recibir información detallada y cotización para: ${planOrService}.`;
  if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
}

function updateCommercialSimulator() {
  const volEl = document.getElementById('sim-volume');
  const durEl = document.getElementById('sim-duration');
  const talentEl = document.getElementById('sim-talent-type');
  const volLabel = document.getElementById('sim-volume-label');
  const manejadoresCostEl = document.getElementById('sim-manejadores-cost');
  const traditionalCostEl = document.getElementById('sim-traditional-cost');
  const savingsPercentEl = document.getElementById('sim-savings-percent');
  const reachLabelEl = document.getElementById('sim-reach-label');

  if (!volEl) return;

  const volume = parseInt(volEl.value, 10);
  const durationMonths = parseInt(durEl ? durEl.value : 1, 10);
  const isCustom = talentEl && talentEl.value === 'custom';

  if (volLabel) volLabel.textContent = `${volume} Videos / Mes`;

  // Costo base por video en Manejadores: ~$45 USD
  let baseUnitCost = 45;
  if (volume >= 40) baseUnitCost = 35;
  else if (volume >= 25) baseUnitCost = 40;

  let monthlyCost = volume * baseUnitCost;
  if (isCustom) monthlyCost += 600; // Recargo de custodia de avatar exclusivo

  // Descuentos por duración
  let discount = 0;
  if (durationMonths === 3) discount = 0.15;
  else if (durationMonths === 6) discount = 0.25;

  const finalMonthlyCost = Math.round(monthlyCost * (1 - discount));
  
  // Costo tradicional promedio: $190 USD por video con actores, cámaras, edición y agencia
  const traditionalMonthlyCost = Math.round(volume * 190 + (isCustom ? 2500 : 800));

  const savingsPct = Math.round(((traditionalMonthlyCost - finalMonthlyCost) / traditionalMonthlyCost) * 100);

  if (manejadoresCostEl) manejadoresCostEl.textContent = `$${finalMonthlyCost.toLocaleString()} USD`;
  if (traditionalCostEl) traditionalCostEl.textContent = `$${traditionalMonthlyCost.toLocaleString()} USD`;
  if (savingsPercentEl) savingsPercentEl.textContent = `-${savingsPct}%`;

  const minReach = (volume * 12).toLocaleString();
  const maxReach = (volume * 35).toLocaleString();
  if (reachLabelEl) reachLabelEl.textContent = `${minReach}k - ${maxReach}k Visualizaciones`;
}

function applySimulationToQuote() {
  const volEl = document.getElementById('sim-volume');
  const indEl = document.getElementById('sim-industry');
  const talentEl = document.getElementById('sim-talent-type');
  const costEl = document.getElementById('sim-manejadores-cost');
  const msgArea = document.getElementById('client-message');
  const contactSec = document.getElementById('client-contact');

  const vol = volEl ? volEl.value : 25;
  const ind = indEl ? indEl.options[indEl.selectedIndex].text : 'General';
  const talent = talentEl && talentEl.value === 'custom' ? 'Embajador Virtual Exclusivo' : 'Influencer de Catálogo';
  const cost = costEl ? costEl.textContent : '';

  if (msgArea) {
    msgArea.value = `Hola equipo de Manejadores,\nHe configurado en el simulador una campaña para la industria «${ind}» con ${vol} videos/mes en formato «${talent}» (${cost}).\nPor favor contáctenme para coordinar la primera prueba piloto.`;
  }
  if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
}

// HELPERS PARA EL MANUAL DEL ADMINISTRADOR EN PANEL INTERNO
function filtrarManualAdmin(categoria, btn) {
  const allBtns = btn && btn.parentElement ? btn.parentElement.querySelectorAll('.archive-filter-btn') : [];
  allBtns.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const blocks = document.querySelectorAll('.manual-card-block');
  blocks.forEach(block => {
    if (categoria === 'todos' || block.getAttribute('data-module') === categoria) {
      block.style.display = 'block';
    } else {
      block.style.display = 'none';
    }
  });
}

function actualizarChecklistManual() {
  const checkboxes = document.querySelectorAll('.manual-chk');
  const checked = document.querySelectorAll('.manual-chk:checked').length;
  const statusEl = document.getElementById('manual-checklist-status');
  if (statusEl) {
    if (checked === checkboxes.length) {
      statusEl.style.color = '#10b981';
      statusEl.textContent = `🎉 ¡Todas las ${checked} tareas completadas hoy!`;
    } else {
      statusEl.style.color = 'var(--cyan)';
      statusEl.textContent = `${checked} de ${checkboxes.length} tareas completadas hoy`;
    }
  }
}

function handleClientsContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('client-name')?.value || '';
  const company = document.getElementById('client-company')?.value || '';
  alert(`¡Gracias ${name}! Hemos registrado tu solicitud para ${company}. El equipo fundador (Daniel, Pancho y Wladimir) se pondrá en contacto a la brevedad.`);
  e.target.reset();
}

// ============================================================================
// RENDER: MÚSICA • SECTOR COMERCIAL & PRODUCCIÓN SONORA PARA MARCAS
// ============================================================================
let activeCommercialAudio = null;

function renderMusicaPage() {
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  container.innerHTML = `
    <div class="breadcrumb-bar">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">Música • Producción Sonora & Audio Branding para Marcas</span>
      </div>
      <a href="#home" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Inicio</a>
    </div>

    <!-- Header Hero Comercial de Música -->
    <div class="section-header" style="text-align: center; max-width: 900px; margin: 0 auto 3rem auto;">
      <span class="section-subtitle" style="color: #fbbf24;"><i class="fa-solid fa-compact-disc"></i> SECTOR COMERCIAL • MÚSICA & AUDIO BRANDING</span>
      <h1 class="section-title" style="font-size: 2.8rem; margin-top: 0.5rem;">
        Música Original, Bandas Sonoras & Audio Branding para Clientes
      </h1>
      <p class="section-description" style="margin-top: 0.85rem; line-height: 1.7; font-size: 1.05rem;">
        Componemos y producimos música de alta fidelidad para videojuegos, campañas publicitarias, intros de YouTube, podcasts y series.
        Masters estéreo en 24-bit 48kHz, entrega de stems por instrumentos y <strong>licencia comercial perpetua 100% libre de reclamos de copyright (Royalty-Free)</strong> en menos de 48 horas.
      </p>

      <div style="display: flex; justify-content: center; gap: 0.75rem; margin-top: 1.5rem; flex-wrap: wrap;">
        <a href="#music-demos" class="btn btn-primary" style="background: linear-gradient(135deg, #f59e0b, #d97706); border: none;">
          <i class="fa-solid fa-headphones"></i> Escuchar Demos Comerciales
        </a>
        <a href="#music-simulator" class="btn btn-secondary">
          <i class="fa-solid fa-calculator"></i> Cotizador de Producción Musical
        </a>
        <a href="#music-plans" class="btn btn-secondary">
          <i class="fa-solid fa-tags"></i> Tarifas & Licencias
        </a>
        <a href="#music-contact" class="btn btn-secondary">
          <i class="fa-solid fa-envelope"></i> Solicitar Muestra en 48h
        </a>
      </div>
    </div>

    <!-- BLOQUE 1: LAS 4 LÍNEAS DE PRODUCCIÓN MUSICAL COMERCIAL -->
    <section class="section" style="padding-top: 0; margin-bottom: 3.5rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
        <span class="section-subtitle" style="color: var(--cyan);"><i class="fa-solid fa-layer-group"></i> Servicios de Producción Sonora</span>
        <h2 class="section-title" style="font-size: 2rem;">Soluciones Musicales a Medida de tu Proyecto</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 1.5rem;">
        
        <!-- Línea 1: Videojuegos & Cine -->
        <div class="glass-card" style="padding: 1.75rem; border-color: rgba(245, 158, 11, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(245, 158, 11, 0.15); color: #fbbf24; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1rem;">
              <i class="fa-solid fa-dragon"></i>
            </div>
            <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">Bandas Sonoras (OST) & Videojuegos</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6;">
              Música orquestal épica, dark fantasy y texturas híbridas diseñadas para bandas sonoras de videojuegos indie, cortometrajes y trailers cinematográficos.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; margin-top: 0.75rem; line-height: 1.6;">
              <li>Seamless loops (bucles sin fin para motores Unity/Unreal)</li>
              <li>Stems por capas de intensidad (exploración vs batalla)</li>
              <li>Afinación armónica 432Hz o 440Hz según estética</li>
            </ul>
          </div>
          <button onclick="prefillMusicQuote('Banda Sonora OST Videojuego')" class="btn btn-secondary btn-sm" style="margin-top: 1.25rem; width: 100%; justify-content: center; color: #fbbf24; border-color: rgba(245, 158, 11, 0.4);">
            Cotizar Banda Sonora
          </button>
        </div>

        <!-- Línea 2: Audio Branding & Jingles -->
        <div class="glass-card" style="padding: 1.75rem; border-color: rgba(6, 182, 212, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(6, 182, 212, 0.15); color: var(--cyan); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1rem;">
              <i class="fa-solid fa-bullhorn"></i>
            </div>
            <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">Audio Branding & Sound Logos</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6;">
              Diseñamos la firma acústica de tu marca (audio logos de 2 a 5 segundos), jingles publicitarios y sonidos de interfaz para apps móviles que maximizan el recuerdo de marca.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; margin-top: 0.75rem; line-height: 1.6;">
              <li>Identidad sonora exclusiva no reutilizable</li>
              <li>Formatos adaptados a spots de TV, radio y TikTok</li>
              <li>Manual de identidad y directrices de uso acústico</li>
            </ul>
          </div>
          <button onclick="prefillMusicQuote('Audio Branding & Sound Logo')" class="btn btn-secondary btn-sm" style="margin-top: 1.25rem; width: 100%; justify-content: center; color: var(--cyan); border-color: rgba(6, 182, 212, 0.4);">
            Cotizar Audio Branding
          </button>
        </div>

        <!-- Línea 3: Creadores & YouTube (Cero Copyright) -->
        <div class="glass-card" style="padding: 1.75rem; border-color: rgba(139, 92, 246, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(139, 92, 246, 0.15); color: var(--purple); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1rem;">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">Música para Canales (Cero Content ID)</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6;">
              Packs musicales exclusivos de fondo (lo-fi hip hop, ambient textural y synth retro) con garantía legal contra desmonetizaciones o reclamos de derechos en YouTube y Twitch.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; margin-top: 0.75rem; line-height: 1.6;">
              <li>Cero reclamaciones por Content ID garantizadas</li>
              <li>Pistas de intro, outro, transiciones y fondos largos</li>
              <li>Licencia perpetua sin renovación mensual obligatoria</li>
            </ul>
          </div>
          <button onclick="prefillMusicQuote('Pack Música para YouTube / Canales')" class="btn btn-secondary btn-sm" style="margin-top: 1.25rem; width: 100%; justify-content: center; color: var(--purple); border-color: rgba(139, 92, 246, 0.4);">
            Solicitar Pack Creador
          </button>
        </div>

        <!-- Línea 4: Artistas Virtuales (Voz Lírica e Hiperrealista) -->
        <div class="glass-card" style="padding: 1.75rem; border-color: rgba(236, 72, 153, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="width: 50px; height: 50px; border-radius: 12px; background: rgba(236, 72, 153, 0.15); color: #ec4899; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 1rem;">
              <i class="fa-solid fa-microphone-lines"></i>
            </div>
            <h3 style="color: #fff; font-size: 1.25rem; margin-bottom: 0.5rem;">Canciones con Vocalistas Virtuales</h3>
            <p style="color: var(--text-muted); font-size: 0.88rem; line-height: 1.6;">
              Producimos temas completos integrando a nuestras artistas virtuales consagradas: la voz lírica de <strong>Freja Lindholm</strong> (dark fantasy/arcano) o el ritmo popular de <strong>Maite Valenzuela</strong>.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; margin-top: 0.75rem; line-height: 1.6;">
              <li>Letras en español, inglés o latín litúrgico místico</li>
              <li>Mezcla profesional con calidad discográfica en streaming</li>
              <li>Integración del avatar en videos musicales y visualizers</li>
            </ul>
          </div>
          <button onclick="prefillMusicQuote('Canción Completa con Vocalista Virtual')" class="btn btn-secondary btn-sm" style="margin-top: 1.25rem; width: 100%; justify-content: center; color: #ec4899; border-color: rgba(236, 72, 153, 0.4);">
            Contratar Vocalista Virtual
          </button>
        </div>

      </div>
    </section>

    <!-- BLOQUE 2: SHOWCASE INTERACTIVO DE DEMOS SONORAS (PLAYER) -->
    <section id="music-demos" class="section" style="padding-top: 0; margin-bottom: 3.5rem;">
      <div class="glass-card" style="padding: 2.5rem; border-color: rgba(255, 183, 3, 0.5); background: radial-gradient(circle at top left, rgba(255, 183, 3, 0.1) 0%, rgba(15, 18, 30, 0.98) 100%); border-radius: var(--radius-lg);">
        
        <div style="text-align: center; max-width: 750px; margin: 0 auto 2rem auto;">
          <span class="section-subtitle" style="color: #fbbf24;"><i class="fa-solid fa-headphones"></i> Escucha Activa</span>
          <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; margin: 0.5rem 0;">
            Muestras & Demos Sonoras Comerciales
          </h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            Presiona reproducir para escuchar maquetas sintetizadas en vivo directamente en tu navegador o solicita muestras personalizadas en 48 horas.
          </p>
        </div>

        <!-- Contenedor del Reproductor de Demos -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
          
          <!-- Pista 1 -->
          <div class="glass-card music-demo-card" id="demo-card-dragon" style="padding: 1.25rem; border-color: rgba(245, 158, 11, 0.3); background: rgba(10, 12, 22, 0.8);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
              <div>
                <span style="font-size: 0.72rem; color: #fbbf24; font-weight: 700; text-transform: uppercase;">Dark Fantasy • Épica</span>
                <h4 style="color: #fff; font-size: 1.05rem; margin: 0.2rem 0;">El Dragón Astral</h4>
                <span style="font-size: 0.75rem; color: var(--text-dim); font-family: monospace;">D Dorian • 74 BPM • Cuerdas & Coro</span>
              </div>
              <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(245, 158, 11, 0.2); color: #fbbf24; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">
                <i class="fa-solid fa-music"></i>
              </div>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 1rem;">
              Arreglo para trailers cinematográficos, batallas de videojuegos y narrativas místicas. Cuerdas oscuras y coro litúrgico.
            </p>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <button onclick="playMusicCommercialDemo('dragon', this)" class="btn btn-primary btn-sm btn-play-demo" style="flex: 1; justify-content: center; font-size: 0.8rem; background: #f59e0b; border: none; color: #000; font-weight: 700;">
                <i class="fa-solid fa-play"></i> Escuchar Demo
              </button>
              <button onclick="prefillMusicQuote('Estilo El Dragón Astral (Dark Fantasy)')" class="btn btn-secondary btn-sm" title="Cotizar estilo similar" style="font-size: 0.8rem; padding: 0.4rem 0.6rem;">
                <i class="fa-solid fa-tag"></i>
              </button>
            </div>
          </div>

          <!-- Pista 2 -->
          <div class="glass-card music-demo-card" id="demo-card-cyber" style="padding: 1.25rem; border-color: rgba(6, 182, 212, 0.3); background: rgba(10, 12, 22, 0.8);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
              <div>
                <span style="font-size: 0.72rem; color: var(--cyan); font-weight: 700; text-transform: uppercase;">Cyberpunk • Tech Beat</span>
                <h4 style="color: #fff; font-size: 1.05rem; margin: 0.2rem 0;">Neon Horizon 2088</h4>
                <span style="font-size: 0.75rem; color: var(--text-dim); font-family: monospace;">A Minor • 110 BPM • Analógico</span>
              </div>
              <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(6, 182, 212, 0.2); color: var(--cyan); display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">
                <i class="fa-solid fa-bolt"></i>
              </div>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 1rem;">
              Sintetizadores analógicos retro y bajos contundentes. Ideal para lanzamientos de productos tecnológicos y videojuegos futuristas.
            </p>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <button onclick="playMusicCommercialDemo('cyber', this)" class="btn btn-primary btn-sm btn-play-demo" style="flex: 1; justify-content: center; font-size: 0.8rem; background: var(--cyan); border: none; color: #000; font-weight: 700;">
                <i class="fa-solid fa-play"></i> Escuchar Demo
              </button>
              <button onclick="prefillMusicQuote('Estilo Neon Horizon (Cyberpunk Synthwave)')" class="btn btn-secondary btn-sm" title="Cotizar estilo similar" style="font-size: 0.8rem; padding: 0.4rem 0.6rem;">
                <i class="fa-solid fa-tag"></i>
              </button>
            </div>
          </div>

          <!-- Pista 3 -->
          <div class="glass-card music-demo-card" id="demo-card-acoustic" style="padding: 1.25rem; border-color: rgba(16, 185, 129, 0.3); background: rgba(10, 12, 22, 0.8);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
              <div>
                <span style="font-size: 0.72rem; color: var(--green); font-weight: 700; text-transform: uppercase;">Corporate • Clean Sound</span>
                <h4 style="color: #fff; font-size: 1.05rem; margin: 0.2rem 0;">Minimal Brand Pulse</h4>
                <span style="font-size: 0.75rem; color: var(--text-dim); font-family: monospace;">C Major • 120 BPM • Piano & Atmos</span>
              </div>
              <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(16, 185, 129, 0.2); color: var(--green); display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">
                <i class="fa-solid fa-building"></i>
              </div>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 1rem;">
              Identidad sonora corporativa moderna y optimista. Perfecta para spots de marcas B2B, SaaS, banca y startups.
            </p>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <button onclick="playMusicCommercialDemo('acoustic', this)" class="btn btn-primary btn-sm btn-play-demo" style="flex: 1; justify-content: center; font-size: 0.8rem; background: var(--green); border: none; color: #000; font-weight: 700;">
                <i class="fa-solid fa-play"></i> Escuchar Demo
              </button>
              <button onclick="prefillMusicQuote('Estilo Minimal Brand Pulse (Corporate Tech)')" class="btn btn-secondary btn-sm" title="Cotizar estilo similar" style="font-size: 0.8rem; padding: 0.4rem 0.6rem;">
                <i class="fa-solid fa-tag"></i>
              </button>
            </div>
          </div>

          <!-- Pista 4 -->
          <div class="glass-card music-demo-card" id="demo-card-lofi" style="padding: 1.25rem; border-color: rgba(139, 92, 246, 0.3); background: rgba(10, 12, 22, 0.8);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
              <div>
                <span style="font-size: 0.72rem; color: var(--purple); font-weight: 700; text-transform: uppercase;">Lo-Fi • YouTube Sanctuary</span>
                <h4 style="color: #fff; font-size: 1.05rem; margin: 0.2rem 0;">Midnight Rain Sanctuary</h4>
                <span style="font-size: 0.75rem; color: var(--text-dim); font-family: monospace;">F Minor • 72 BPM • Vinilo & Rhodes</span>
              </div>
              <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(139, 92, 246, 0.2); color: var(--purple); display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">
                <i class="fa-solid fa-cloud-rain"></i>
              </div>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 1rem;">
              Base instrumental relajante sin copyright. Diseñada para mantener la retención de audiencia en podcasts y videos largos de YouTube.
            </p>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <button onclick="playMusicCommercialDemo('lofi', this)" class="btn btn-primary btn-sm btn-play-demo" style="flex: 1; justify-content: center; font-size: 0.8rem; background: var(--purple); border: none; color: #fff; font-weight: 700;">
                <i class="fa-solid fa-play"></i> Escuchar Demo
              </button>
              <button onclick="prefillMusicQuote('Estilo Midnight Rain (Lo-Fi YouTube/Podcast)')" class="btn btn-secondary btn-sm" title="Cotizar estilo similar" style="font-size: 0.8rem; padding: 0.4rem 0.6rem;">
                <i class="fa-solid fa-tag"></i>
              </button>
            </div>
          </div>

        </div>

        <!-- Indicador de Reproducción Activa -->
        <div id="music-player-status-bar" style="margin-top: 1.5rem; background: rgba(0,0,0,0.5); padding: 0.75rem 1.25rem; border-radius: 30px; display: flex; justify-content: space-between; align-items: center; border: 1px solid var(--border-glass);">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div id="music-status-dot" style="width: 10px; height: 10px; border-radius: 50%; background: #6b7280;"></div>
            <span id="music-status-text" style="font-size: 0.82rem; color: var(--text-muted);">Haz clic en cualquier demo para escuchar</span>
          </div>
          <button onclick="stopMusicCommercialDemo()" class="btn btn-secondary btn-sm" style="font-size: 0.72rem; padding: 0.2rem 0.6rem; color: #f87171;">
            <i class="fa-solid fa-stop"></i> Detener
          </button>
        </div>

      </div>
    </section>

    <!-- BLOQUE 3: SIMULADOR DE PRODUCCIÓN MUSICAL & COTIZADOR -->
    <section id="music-simulator" class="section" style="padding-top: 0; margin-bottom: 3.5rem;">
      <div class="glass-card" style="padding: 2.5rem; border-color: rgba(245, 158, 11, 0.4); background: radial-gradient(circle at top right, rgba(245, 158, 11, 0.12) 0%, rgba(15, 18, 30, 0.98) 100%); border-radius: var(--radius-lg);">
        
        <div style="text-align: center; max-width: 750px; margin: 0 auto 2rem auto;">
          <span class="section-subtitle" style="color: #fbbf24;"><i class="fa-solid fa-calculator"></i> Cotizador Transparente</span>
          <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; margin: 0.5rem 0;">
            Simulador de Producción Musical & Presupuesto
          </h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            Selecciona el tipo de obra sonora que necesitas y calcula al instante la inversión, ahorro y entregables.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; align-items: center;">
          
          <!-- Controles del Simulador Musical -->
          <div style="background: rgba(0,0,0,0.4); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-glass);">
            
            <div style="margin-bottom: 1.25rem;">
              <label style="font-size: 0.85rem; color: #fff; font-weight: 600; display: block; margin-bottom: 0.4rem;">
                <i class="fa-solid fa-compact-disc" style="color: #fbbf24; margin-right: 0.35rem;"></i> Tipo de Proyecto Sonoro:
              </label>
              <select id="sim-music-type" onchange="updateMusicSimulator()" class="form-input" style="background: #0d111e; color: #fff; font-size: 0.88rem;">
                <option value="ost">Banda Sonora Original (OST Videojuego o Serie)</option>
                <option value="single" selected>Track Comercial Único / Jingle Publicitario</option>
                <option value="podcast">Pack de Identidad para YouTube / Podcast (5 Tracks)</option>
                <option value="vocal">Canción Completa con Artista Virtual (Freja / Maite)</option>
              </select>
            </div>

            <div style="margin-bottom: 1.25rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #fff; font-weight: 600; margin-bottom: 0.4rem;">
                <span><i class="fa-solid fa-sliders" style="color: var(--cyan); margin-right: 0.35rem;"></i> Cantidad de Pistas / Duración:</span>
                <span id="sim-music-tracks-label" style="color: #fbbf24; font-family: monospace;">1 Pista Maestra (Hasta 3 min)</span>
              </div>
              <input type="range" id="sim-music-tracks" min="1" max="10" value="1" oninput="updateMusicSimulator()" style="width: 100%; accent-color: #fbbf24;">
              <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-dim); margin-top: 0.2rem;">
                <span>1 Track (Single)</span>
                <span>5 Tracks (EP / Pack)</span>
                <span>10 Tracks (OST Álbum)</span>
              </div>
            </div>

            <div style="margin-bottom: 1.25rem;">
              <label style="font-size: 0.85rem; color: #fff; font-weight: 600; display: block; margin-bottom: 0.4rem;">
                <i class="fa-solid fa-file-contract" style="color: var(--purple); margin-right: 0.35rem;"></i> Alcance de Licencia Comercial:
              </label>
              <select id="sim-music-license" onchange="updateMusicSimulator()" class="form-input" style="background: #0d111e; color: #fff; font-size: 0.88rem;">
                <option value="digital" selected>Digital Mundial (Redes Sociales, Web, YouTube)</option>
                <option value="game">Videojuego Comercial / App Móvil (Monetizable)</option>
                <option value="broadcast">Televisión, Cine & Streaming Masivo</option>
              </select>
            </div>

            <div>
              <label style="font-size: 0.85rem; color: #fff; font-weight: 600; display: block; margin-bottom: 0.4rem;">
                <i class="fa-solid fa-layer-group" style="color: var(--green); margin-right: 0.35rem;"></i> Entregables Adicionales:
              </label>
              <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.8rem; color: var(--text-muted);">
                <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
                  <input type="checkbox" id="sim-chk-stems" checked onchange="updateMusicSimulator()" style="accent-color: #fbbf24;">
                  <span>Incluir Stems Separados (Batería, Bajo, Melodías)</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.4rem; cursor: pointer;">
                  <input type="checkbox" id="sim-chk-loops" checked onchange="updateMusicSimulator()" style="accent-color: #fbbf24;">
                  <span>Versiones Loop sin fin (Seamless loops)</span>
                </label>
              </div>
            </div>

          </div>

          <!-- Resultados de Cotización Musical -->
          <div style="background: rgba(18, 22, 36, 0.9); padding: 1.75rem; border-radius: var(--radius-md); border: 1px solid rgba(245, 158, 11, 0.4);">
            <div style="font-size: 0.8rem; font-weight: 700; color: #fbbf24; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">
              Presupuesto & Entregables de Producción
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem;">
              <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px;">
                <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Inversión en Manejadores:</span>
                <span id="sim-music-cost" style="font-size: 1.6rem; font-weight: 800; color: #fbbf24; font-family: monospace;">$180 USD</span>
                <span style="font-size: 0.7rem; color: var(--text-dim); display: block;">Todo incluido / Royalty-Free</span>
              </div>
              <div style="background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px;">
                <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">Costo Estudio Tradicional:</span>
                <span id="sim-music-traditional" style="font-size: 1.6rem; font-weight: 800; color: #f87171; font-family: monospace; text-decoration: line-through;">$950 USD</span>
                <span style="font-size: 0.7rem; color: #f87171; display: block;">Compositor + horas de estudio</span>
              </div>
            </div>

            <div style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); padding: 0.9rem; border-radius: 8px; margin-bottom: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span style="font-size: 0.8rem; color: var(--green); font-weight: 700; display: block;">Ahorro Directo Garantizado:</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">Reducción de coste sin sacrificar masterización profesional</span>
              </div>
              <span id="sim-music-savings" style="font-size: 1.5rem; font-weight: 900; color: var(--green); font-family: monospace;">-81%</span>
            </div>

            <div style="border-top: 1px solid var(--border-glass); padding-top: 1rem; margin-bottom: 1.25rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.35rem;">
                <span style="color: var(--text-muted);">Formato de Master:</span>
                <strong style="color: #fff;">WAV 24-bit 48kHz sin compresión</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.35rem;">
                <span style="color: var(--text-muted);">Tiempo de Entrega:</span>
                <strong style="color: var(--cyan);">48 a 72 Horas</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.82rem;">
                <span style="color: var(--text-muted);">Regalías Futuras:</span>
                <strong style="color: var(--green);">0% (100% tuyas a perpetuidad)</strong>
              </div>
            </div>

            <button onclick="applyMusicSimulationToQuote()" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 0.95rem; padding: 0.85rem; background: linear-gradient(135deg, #f59e0b, #d97706); border: none; color: #000; font-weight: 700;">
              <i class="fa-solid fa-paper-plane"></i> Solicitar Esta Producción Sonora
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- BLOQUE 4: PLANES Y TARIFAS DE MÚSICA -->
    <section id="music-plans" class="section" style="padding-top: 0; margin-bottom: 3.5rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 2rem;">
        <span class="section-subtitle" style="color: #fbbf24;"><i class="fa-solid fa-tags"></i> Precios Transparentes</span>
        <h2 class="section-title" style="font-size: 2rem;">Tarifas de Producción Musical para Marcas</h2>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 1.5rem;">
        
        <!-- Tarifa 1 -->
        <div class="glass-card" style="padding: 2rem; border-color: rgba(255,255,255,0.1); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Pista Individual</span>
            <h3 style="color: #fff; font-size: 1.5rem; margin: 0.25rem 0 0.5rem 0;">Single Comercial / Jingle</h3>
            <div style="font-size: 2rem; font-weight: 900; color: #fff; margin-bottom: 1rem; font-family: monospace;">
              $180 <span style="font-size: 0.9rem; font-weight: 400; color: var(--text-muted);">USD</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Un tema original de hasta 3 minutos para spots publicitarios, videos de producto o identidad acústica de marca.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; line-height: 1.8;">
              <li><i class="fa-solid fa-check" style="color: #fbbf24; margin-right: 0.35rem;"></i> Master estéreo en WAV 24-bit 48kHz</li>
              <li><i class="fa-solid fa-check" style="color: #fbbf24; margin-right: 0.35rem;"></i> 2 Rondas de ajustes y ecualización</li>
              <li><i class="fa-solid fa-check" style="color: #fbbf24; margin-right: 0.35rem;"></i> Licencia comercial perpetua mundial</li>
              <li><i class="fa-solid fa-check" style="color: #fbbf24; margin-right: 0.35rem;"></i> Entrega en 48 horas garantizada</li>
            </ul>
          </div>
          <button onclick="prefillMusicQuote('Plan Single Comercial ($180 USD)')" class="btn btn-secondary" style="margin-top: 1.5rem; width: 100%; justify-content: center;">
            Contratar Single Comercial
          </button>
        </div>

        <!-- Tarifa 2 (Destacado) -->
        <div class="glass-card" style="padding: 2rem; border-color: rgba(245, 158, 11, 0.6); background: radial-gradient(circle at top, rgba(245, 158, 11, 0.15) 0%, rgba(18, 22, 36, 0.95) 100%); display: flex; flex-direction: column; justify-content: space-between; position: relative;">
          <div style="position: absolute; top: -12px; right: 20px; background: linear-gradient(135deg, #f59e0b, #d97706); color: #000; font-size: 0.72rem; font-weight: 800; padding: 0.25rem 0.75rem; border-radius: 20px; text-transform: uppercase;">
            Más Popular Creadores
          </div>
          <div>
            <span style="font-size: 0.75rem; color: #fbbf24; font-weight: 700; text-transform: uppercase;">Canales & Podcasts</span>
            <h3 style="color: #fff; font-size: 1.5rem; margin: 0.25rem 0 0.5rem 0;">Pack Creador (5 Tracks)</h3>
            <div style="font-size: 2rem; font-weight: 900; color: #fbbf24; margin-bottom: 1rem; font-family: monospace;">
              $450 <span style="font-size: 0.9rem; font-weight: 400; color: var(--text-muted);">USD</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Set completo de audio para canales de YouTube o podcasts: intro, outro de alto impacto y 3 fondos temáticos sin copyright.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-muted); padding-left: 1rem; line-height: 1.8;">
              <li><i class="fa-solid fa-check" style="color: #fbbf24; margin-right: 0.35rem;"></i> <strong>5 Pistas exclusivas sin copyright</strong></li>
              <li><i class="fa-solid fa-check" style="color: #fbbf24; margin-right: 0.35rem;"></i> Intro de 15s + Outro + 3 Fondos largos</li>
              <li><i class="fa-solid fa-check" style="color: #fbbf24; margin-right: 0.35rem;"></i> Stems separados para edición flexible</li>
              <li><i class="fa-solid fa-check" style="color: #fbbf24; margin-right: 0.35rem;"></i> Blindaje total contra reclamos de YouTube</li>
            </ul>
          </div>
          <button onclick="prefillMusicQuote('Plan Pack Creador 5 Tracks ($450 USD)')" class="btn btn-primary" style="margin-top: 1.5rem; width: 100%; justify-content: center; background: linear-gradient(135deg, #f59e0b, #d97706); border: none; color: #000; font-weight: 700;">
            Comenzar Pack Creador
          </button>
        </div>

        <!-- Tarifa 3 -->
        <div class="glass-card" style="padding: 2rem; border-color: rgba(139, 92, 246, 0.4); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <span style="font-size: 0.75rem; color: var(--purple); font-weight: 700; text-transform: uppercase;">Videojuegos & Series</span>
            <h3 style="color: #fff; font-size: 1.5rem; margin: 0.25rem 0 0.5rem 0;">Banda Sonora Completa (OST)</h3>
            <div style="font-size: 2rem; font-weight: 900; color: #fff; margin-bottom: 1rem; font-family: monospace;">
              $1,200 <span style="font-size: 0.9rem; font-weight: 400; color: var(--text-muted);">USD</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Score temático integral de hasta 10 pistas para videojuegos indie, sagas audiovisuales o producciones de streaming.
            </p>
            <ul style="font-size: 0.82rem; color: var(--text-dim); padding-left: 1rem; line-height: 1.8;">
              <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> <strong>Hasta 10 Pistas temáticas originales</strong></li>
              <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> Seamless loops interactivos listos para Unity</li>
              <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> Entrega completa de stems multitrack</li>
              <li><i class="fa-solid fa-check" style="color: var(--purple); margin-right: 0.35rem;"></i> Cesión total de derechos comerciales</li>
            </ul>
          </div>
          <button onclick="prefillMusicQuote('Plan Banda Sonora Completa OST ($1,200 USD)')" class="btn btn-secondary" style="margin-top: 1.5rem; width: 100%; justify-content: center;">
            Encargar Banda Sonora
          </button>
        </div>

      </div>
    </section>

    <!-- BLOQUE 5: FORMULARIO DE CONTACTO PARA ENCARGOS MUSICALES -->
    <div class="clients-contact-section" id="music-contact" style="margin-top: 3rem;">
      <div style="text-align: center; max-width: 750px; margin: 0 auto 2.5rem auto;">
        <span class="detail-badge" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border-color: rgba(245, 158, 11, 0.3); font-size: 0.75rem;">
          <i class="fa-solid fa-sliders"></i> PRODUCCIÓN SONORA A MEDIDA
        </span>
        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; margin: 0.6rem 0 0.4rem 0;">
          Solicita tu Maqueta o Presupuesto Musical
        </h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
          Cuéntanos sobre tu videojuego, marca, canal o serie. Te enviaremos una propuesta formal con referencias y primera muestra en 48 horas.
        </p>
      </div>

      <div class="glass-card" style="margin-top: 2rem; padding: 2.25rem; border-color: rgba(245, 158, 11, 0.4);">
        <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: #fff; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-music" style="color: #fbbf24;"></i> Encargo de Producción Musical
        </h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.75rem;">
          Trato directo y confidencial con el equipo de producción sonora de Manejadores.
        </p>

        <form onsubmit="handleMusicContactSubmit(event)">
          <div class="b2b-form-grid">
            <div class="b2b-form-group">
              <label>Nombre y Apellido *</label>
              <input type="text" id="music-client-name" placeholder="Tu nombre" required>
            </div>
            <div class="b2b-form-group">
              <label>Marca, Estudio o Canal *</label>
              <input type="text" id="music-client-company" placeholder="Nombre de tu proyecto o empresa" required>
            </div>
            <div class="b2b-form-group">
              <label>Correo Electrónico *</label>
              <input type="email" id="music-client-email" placeholder="correo@proyecto.com" required>
            </div>
            <div class="b2b-form-group">
              <label>Tipo de Encargo Musical *</label>
              <select id="music-client-type" required>
                <option value="Single Comercial / Jingle ($180 USD)">Single Comercial / Jingle ($180 USD)</option>
                <option value="Pack Creador 5 Tracks ($450 USD)" selected>Pack Creador / Podcast 5 Tracks ($450 USD)</option>
                <option value="Banda Sonora Completa OST ($1,200 USD)">Banda Sonora Completa OST Videojuego ($1,200 USD)</option>
                <option value="Audio Branding & Sound Logo">Audio Branding & Sound Logo Corporativo</option>
                <option value="Canción con Vocalista Virtual">Canción Completa con Vocalista Virtual (Freja / Maite)</option>
              </select>
            </div>
          </div>

          <div class="b2b-form-group" style="margin-top: 1.25rem;">
            <label>Detalle del Estilo Musical Deseado & Referencias *</label>
            <textarea id="music-client-message" rows="3" placeholder="Describe el ambiente sonoro, tempo aproximado (BPM), instrumentos que imaginas o enlaces de referencia..." required></textarea>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-top: 1.75rem;">
            <button type="submit" class="btn btn-primary" style="padding: 0.8rem 1.8rem; background: linear-gradient(135deg, #f59e0b, #d97706); border: none; color: #000; font-weight: 700;">
              <i class="fa-solid fa-paper-plane"></i> Enviar Solicitud Musical
            </button>
            <div style="font-size: 0.82rem; color: var(--text-muted);">
              <i class="fa-solid fa-shield-halved" style="color: #10b981;"></i> Propuesta y primera maqueta en 48 horas
            </div>
          </div>
        </form>
      </div>
    </div>
  `;

  // Inicializar simulador musical
  setTimeout(() => {
    updateMusicSimulator();
  }, 40);
}

// ============================================================================
// HELPERS DEL REPRODUCTOR Y COTIZADOR MUSICAL
// ============================================================================

function stopMusicCommercialDemo() {
  if (activeCommercialAudio) {
    try {
      activeCommercialAudio.stop();
      if (activeCommercialAudio.context) {
        activeCommercialAudio.context.close();
      }
    } catch (e) {}
    activeCommercialAudio = null;
  }

  const allBtns = document.querySelectorAll('.btn-play-demo');
  allBtns.forEach(b => {
    b.innerHTML = '<i class="fa-solid fa-play"></i> Escuchar Demo';
  });

  const dot = document.getElementById('music-status-dot');
  const text = document.getElementById('music-status-text');
  if (dot) dot.style.background = '#6b7280';
  if (text) text.textContent = 'Reproducción detenida. Haz clic en cualquier demo para escuchar.';
}

function playMusicCommercialDemo(demoId, btn) {
  // Si ya estaba sonando este botón, detener
  if (activeCommercialAudio && activeCommercialAudio.id === demoId) {
    stopMusicCommercialDemo();
    return;
  }

  stopMusicCommercialDemo();

  // Caso especial: El Dragón Astral reproduce el master de audio real del pipeline de Freja
  if (demoId === 'dragon') {
    try {
      const realAudio = new Audio('puerta_1_dragon_astral.m4a');
      realAudio.volume = 0.85;
      realAudio.play().then(() => {
        activeCommercialAudio = {
          id: 'dragon',
          stop: () => {
            try { realAudio.pause(); realAudio.currentTime = 0; } catch(e){}
          }
        };
        if (btn) btn.innerHTML = '<i class="fa-solid fa-stop"></i> Detener Pista';
        const dot = document.getElementById('music-status-dot');
        const text = document.getElementById('music-status-text');
        if (dot) dot.style.background = '#fbbf24';
        if (text) text.textContent = '🔊 Reproduciendo Master Oficial: «Puerta 1: El Despertar del Dragón Astral» (Freja Lindholm & Arcano)';
        realAudio.onended = () => { stopMusicCommercialDemo(); };
      }).catch(err => {
        console.warn("Autoplay bloqueado o archivo inaccesible, usando sintetizador:", err);
        fallbackSynthesizeDemo(demoId, btn);
      });
      return;
    } catch(e) {
      fallbackSynthesizeDemo(demoId, btn);
      return;
    }
  }

  fallbackSynthesizeDemo(demoId, btn);
}

function fallbackSynthesizeDemo(demoId, btn) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.25, ctx.currentTime);
    masterGain.connect(ctx.destination);

    let chordFrequencies = [];
    let label = '';

    if (demoId === 'dragon') {
      chordFrequencies = [146.83, 174.61, 220.00, 261.63, 329.63];
      label = 'Reproduciendo: «El Dragón Astral» (Dark Fantasy • D Dorian)';
    } else if (demoId === 'cyber') {
      chordFrequencies = [110.00, 130.81, 164.81, 196.00, 246.94];
      label = 'Reproduciendo: «Neon Horizon 2088» (Cyberpunk Synthwave)';
    } else if (demoId === 'acoustic') {
      // C Major Corporate: C3, E3, G3, B3, D4
      chordFrequencies = [130.81, 164.81, 196.00, 246.94, 293.66];
      label = 'Reproduciendo: «Minimal Brand Pulse» (Audio Branding Tech)';
    } else {
      // F Minor Lo-Fi: F2, Ab2, C3, Eb3, G3
      chordFrequencies = [87.31, 103.83, 130.81, 155.56, 196.00];
      label = 'Reproduciendo: «Midnight Rain Sanctuary» (Lo-Fi YouTube Ambient)';
    }

    const oscillators = [];

    chordFrequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = demoId === 'cyber' ? 'sawtooth' : (demoId === 'dragon' ? 'triangle' : 'sine');
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Ligero detune para dar riqueza espacial analógica
      osc.detune.setValueAtTime((idx - 2) * 4, ctx.currentTime);

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18 / chordFrequencies.length, ctx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start();
      oscillators.push(osc);
    });

    activeCommercialAudio = {
      id: demoId,
      context: ctx,
      stop: () => {
        oscillators.forEach(o => {
          try { o.stop(); } catch(e){}
        });
      }
    };

    if (btn) btn.innerHTML = '<i class="fa-solid fa-stop"></i> Detener Demo';

    const dot = document.getElementById('music-status-dot');
    const text = document.getElementById('music-status-text');
    if (dot) dot.style.background = '#10b981';
    if (text) text.textContent = `🔊 ${label}`;

    // Auto-detener después de 20 segundos para no saturar
    setTimeout(() => {
      if (activeCommercialAudio && activeCommercialAudio.id === demoId) {
        stopMusicCommercialDemo();
      }
    }, 20000);

  } catch(err) {
    console.error("Error al reproducir audio demo:", err);
  }
}

function updateMusicSimulator() {
  const typeEl = document.getElementById('sim-music-type');
  const tracksEl = document.getElementById('sim-music-tracks');
  const licenseEl = document.getElementById('sim-music-license');
  const tracksLabel = document.getElementById('sim-music-tracks-label');
  const costEl = document.getElementById('sim-music-cost');
  const tradEl = document.getElementById('sim-music-traditional');
  const savingsEl = document.getElementById('sim-music-savings');
  const stemsChk = document.getElementById('sim-chk-stems');

  if (!tracksEl) return;

  const tracks = parseInt(tracksEl.value, 10);
  const type = typeEl ? typeEl.value : 'single';
  const license = licenseEl ? licenseEl.value : 'digital';
  const hasStems = stemsChk ? stemsChk.checked : true;

  if (tracksLabel) {
    if (tracks === 1) tracksLabel.textContent = '1 Pista Maestra (Hasta 3 min)';
    else tracksLabel.textContent = `${tracks} Pistas Maestras (Pack Completo)`;
  }

  // Tarifa base por pista según escala
  let unitCost = 180;
  if (tracks >= 8) unitCost = 120;
  else if (tracks >= 4) unitCost = 145;

  let totalCost = tracks * unitCost;

  if (type === 'vocal') totalCost += 120 * tracks; // Recargo de vocalista virtual lírica
  if (license === 'broadcast') totalCost += 250;
  if (!hasStems) totalCost -= (tracks * 15);

  const finalCost = Math.max(150, Math.round(totalCost));
  const traditionalCost = Math.round(finalCost * 4.6);
  const savingsPct = Math.round(((traditionalCost - finalCost) / traditionalCost) * 100);

  if (costEl) costEl.textContent = `$${finalCost.toLocaleString()} USD`;
  if (tradEl) tradEl.textContent = `$${traditionalCost.toLocaleString()} USD`;
  if (savingsEl) savingsEl.textContent = `-${savingsPct}%`;
}

function prefillMusicQuote(serviceOrStyle) {
  const typeSelect = document.getElementById('music-client-type');
  const msgArea = document.getElementById('music-client-message');
  const contactSec = document.getElementById('music-contact');

  if (typeSelect) {
    for (let opt of typeSelect.options) {
      if (opt.value.toLowerCase().includes(serviceOrStyle.toLowerCase())) {
        typeSelect.value = opt.value;
        break;
      }
    }
  }

  if (msgArea) {
    msgArea.value = `Hola equipo de Música de Manejadores,\nNos interesa cotizar producción sonora orientada al estilo: «${serviceOrStyle}».\nPor favor envíennos opciones de presupuesto y entrega de maqueta.`;
  }

  if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
}

function applyMusicSimulationToQuote() {
  const typeEl = document.getElementById('sim-music-type');
  const tracksEl = document.getElementById('sim-music-tracks');
  const costEl = document.getElementById('sim-music-cost');
  const msgArea = document.getElementById('music-client-message');
  const contactSec = document.getElementById('music-contact');

  const tracks = tracksEl ? tracksEl.value : 1;
  const typeName = typeEl ? typeEl.options[typeEl.selectedIndex].text : 'Producción Musical';
  const cost = costEl ? costEl.textContent : '';

  if (msgArea) {
    msgArea.value = `Hola equipo de Música de Manejadores,\nHe configurado en el cotizador el proyecto «${typeName}» con ${tracks} pista(s) (${cost}).\nQuisiera coordinar la producción y entrega de la primera maqueta en 48 horas.`;
  }
  if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
}

function handleMusicContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('music-client-name')?.value || '';
  const project = document.getElementById('music-client-company')?.value || '';
  alert(`¡Gracias ${name}! Hemos recibido tu solicitud para ${project}. El equipo de producción sonora de Manejadores preparará tu propuesta y maqueta a la brevedad.`);
  e.target.reset();
}

// RENDER: LOGO PROPOSALS SHOWCASE PAGE
function renderLogosPage() {
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  container.innerHTML = `
    <div class="breadcrumb-bar">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">Propuestas de Logo</span>
      </div>
      <a href="#home" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Inicio</a>
    </div>

    <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem auto;">
      <span class="section-subtitle" style="color: var(--pink);"><i class="fa-solid fa-palette"></i> Sistema de Identidad Visual</span>
      <h1 style="font-family: var(--font-heading); font-size: 2.8rem; font-weight: 900; margin: 0.5rem 0 1rem 0;">
        Propuestas de Logo — Los Manejadores
      </h1>
      <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7;">
        Según el pliego de requerimientos, proponemos 3 conceptos gráficos de isotipos modulares pensados para creadores y productores. Selecciona tu opción favorita para aplicarla dinámicamente en todo el sitio web.
      </p>
    </div>

    <!-- Grid of Logo Proposals -->
    <div class="logo-selector-grid">
      ${Object.values(logoProposals).map(proposal => `
        <div class="logo-option-card ${proposal.id === currentLogoKey ? 'selected-logo' : ''}" data-logo-id="${proposal.id}">
          <div class="logo-preview-box">
            ${proposal.svg}
          </div>

          <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 0.25rem;">${proposal.title}</h3>
          <span style="color: var(--cyan); font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem;">${proposal.subtitle}</span>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.6;">${proposal.desc}</p>

          <!-- Avatar Preview Test -->
          <div class="avatar-preview-row">
            <div class="avatar-32" title="Avatar 32px (Twitter/IG)">
              ${proposal.navSvg}
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">Avatar 32px</span>
            <div class="avatar-64" title="Avatar 64px (YouTube Channel)">
              ${proposal.navSvg}
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">Avatar 64px</span>
          </div>

          <button class="btn ${proposal.id === currentLogoKey ? 'btn-primary' : 'btn-secondary'}" onclick="applyLogo('${proposal.id}')" style="margin-top: 1.5rem; width: 100%; justify-content: center;">
            <i class="fa-solid ${proposal.id === currentLogoKey ? 'fa-circle-check' : 'fa-hand-pointer'}"></i>
            ${proposal.id === currentLogoKey ? 'Logo Activo' : 'Seleccionar este Logo'}
          </button>
        </div>
      `).join('')}
    </div>

    <!-- Logo Concept Render Artwork Banner -->
    <div class="glass-card" style="margin-top: 4rem; padding: 2.5rem;">
      <h3 style="font-family: var(--font-heading); font-size: 1.6rem; margin-bottom: 1rem;"><i class="fa-solid fa-wand-magic-sparkles" style="color: var(--purple);"></i> Render 3D Neón del Isotipo Recomendado</h3>
      <p style="color: var(--text-muted); margin-bottom: 2rem;">Visualización realista del isotipo "El Play Modular" integrado con iluminación ambiental en tonos violeta y cian:</p>
      <img src="logo_banner.jpg" alt="Render 3D de Logo" style="width: 100%; border-radius: var(--radius-md); border: 1px solid var(--border-highlight); box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
    </div>
  `;
}

// Helper: Tab Switcher
function switchTab(btnEl, tabId) {
  const nav = btnEl.parentElement;
  nav.querySelectorAll('.tab-btn, .cockpit-tab-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');

  const container = nav.parentElement;
  container.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add('active');
}

// --- 5. GANTT CHART DATA MODEL & CONTROL ---
const initialGanttTasks = [
  { id: 1, name: "Pagar servicios de Highsfield + setup operativo", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 1", assignee: "Alemania / Canadá", completed: false },
  { id: 2, name: "Crear y optimizar perfiles @LosManejadores en X, LinkedIn e Instagram", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 1", assignee: "Canadá", completed: false },
  { id: 3, name: "Publicar Manifiesto de Marca y Carrusel de 3 Servicios", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 1", assignee: "Alemania", completed: false },
  { id: 4, name: "Legal & Estructura: Registro corporativo y contratos entre socios", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 1", assignee: "Alemania", completed: false },
  { id: 5, name: "Contactar 10 influencers targets (Chile/Alemania) + pitch estándar", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 2", assignee: "Canadá", completed: false },
  { id: 6, name: "Cerrar al menos 2 colaboraciones iniciales (revenue share)", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 2", assignee: "Canadá", completed: false },
  { id: 7, name: "Definir concepto y 5 títulos iniciales para los 3 Canales de YouTube", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 2", assignee: "Alemania", completed: false },
  { id: 8, name: "Configuración de pasarelas de pago (Stripe / Crypto / Wise Business)", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 2", assignee: "Alemania", completed: false },

  { id: 9, name: "Publicar caso de estudio 'Kira Voss' como prueba social (PDF + Landing)", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 3", assignee: "Equipo", completed: false },
  { id: 10, name: "Desarrollo y publicación de Landing Page minimal con formulario CTA", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 3", assignee: "Alemania", completed: false },
  { id: 11, name: "Consagrar rostros y fichas técnicas: Elena (Daniel), Julia (Pancho Ipinza) y Laura (Wladimir Gutierrez)", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 4", assignee: "Daniel / Pancho Ipinza / Wladimir", completed: true },
  { id: 12, name: "Generación de pack base de 50 fotos HD en alta resolución para Elena, Julia y Laura", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 4", assignee: "Daniel / Pancho / Wladimir", completed: false },
  { id: 13, name: "Lanzamiento progresivo de contenido Soft en Twitter/X e Instagram", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 5", assignee: "Canadá", completed: false },
  { id: 14, name: "Creación y verificación KYC de cuentas en Fanvue / OnlyFans", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 6", assignee: "Alemania", completed: false },
  { id: 15, name: "Activación del embudo de tráfico Nivel 1 -> Nivel 2 Spicy", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 7", assignee: "Canadá", completed: false },
  { id: 16, name: "Optimización de ingresos iniciales y conversión de primeros 50 suscriptores", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 8", assignee: "Alemania / Canadá", completed: false },

  { id: 17, name: "Lanzamiento del Canal 1 de YouTube: 'Los viajes en el tiempo de Sofía'", phase: "phase-2", phaseLabel: "Fase 2: Escalabilidad", week: "Semana 9", assignee: "Alemania", completed: false },
  { id: 18, name: "Lanzamiento del Canal 2: 'Los Gemelos Arcanotech' (Solarpunk vs Cyberpunk)", phase: "phase-2", phaseLabel: "Fase 2: Escalabilidad", week: "Semana 10", assignee: "Alemania", completed: false },
  { id: 19, name: "Estructuración de paquetes de Asesoría Comunicacional (Tiers de precios)", phase: "phase-2", phaseLabel: "Fase 2: Escalabilidad", week: "Semana 11", assignee: "Canadá", completed: false },
  { id: 20, name: "Campaña de outreach B2B para captación de primeros 3 clientes ejecutivos", phase: "phase-2", phaseLabel: "Fase 2: Escalabilidad", week: "Semana 12", assignee: "Canadá", completed: false },
  { id: 21, name: "Despliegue multicanal de Laura Taeda (NutriGeek) y expansión de Julia Beauty", phase: "phase-2", phaseLabel: "Fase 2: Escalabilidad", week: "Semana 13", assignee: "Alemania / Canadá", completed: false },

  { id: 22, name: "Sistematización y automatización de la publicación diaria con herramientas IA", phase: "phase-3", phaseLabel: "Fase 3: Consolidación", week: "Semana 14", assignee: "Alemania", completed: false },
  { id: 23, name: "Revisión de métricas LTV, CAC y tasa de retención de suscriptores", phase: "phase-3", phaseLabel: "Fase 3: Consolidación", week: "Semana 15", assignee: "Alemania / Canadá", completed: false },
  { id: 24, name: "Planificación de expansión trimestral Q2 y escalamiento a 5 influencers activos", phase: "phase-3", phaseLabel: "Fase 3: Consolidación", week: "Semana 16", assignee: "Alemania / Canadá", completed: false }
];

let ganttTasks = [];
let currentGanttFilter = 'all';

function initGanttData() {
  // Check if a shared state parameter is present in URL
  const urlParams = new URLSearchParams(window.location.search);
  const sharedState = urlParams.get('state');

  if (sharedState) {
    try {
      const completedIds = JSON.parse(atob(sharedState));
      if (Array.isArray(completedIds)) {
        ganttTasks = JSON.parse(JSON.stringify(initialGanttTasks));
        ganttTasks.forEach(t => {
          t.completed = completedIds.includes(t.id);
        });
        saveGanttData();
        renderGanttTable();
        return;
      }
    } catch (e) {
      console.warn("No se pudo cargar el estado compartido de Gantt:", e);
    }
  }

  const saved = localStorage.getItem('los_manejadores_gantt_v1');
  if (saved) {
    try { ganttTasks = JSON.parse(saved); }
    catch (e) { ganttTasks = JSON.parse(JSON.stringify(initialGanttTasks)); }
  } else {
    ganttTasks = JSON.parse(JSON.stringify(initialGanttTasks));
  }
  renderGanttTable();
}

function saveGanttData() {
  localStorage.setItem('los_manejadores_gantt_v1', JSON.stringify(ganttTasks));
}

function resetGanttData() {
  if (confirm("¿Estás seguro de que deseas reiniciar el avance de la Carta Gantt a cero?")) {
    ganttTasks = JSON.parse(JSON.stringify(initialGanttTasks));
    saveGanttData();
    renderGanttTable();
  }
}

function exportGanttJSON() {
  const exportPayload = {
    project: "Manejadores",
    dossierVersion: "2026.1",
    exportedAt: new Date().toISOString(),
    completedCount: ganttTasks.filter(t => t.completed).length,
    totalTasks: ganttTasks.length,
    tasks: ganttTasks
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `los_manejadores_gantt_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function triggerImportGantt() {
  const fileInput = document.getElementById('gantt-import-input');
  if (fileInput) fileInput.click();
}

function importGanttJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed && Array.isArray(parsed.tasks)) {
        ganttTasks = parsed.tasks;
      } else if (Array.isArray(parsed)) {
        ganttTasks = parsed;
      } else {
        alert("El archivo no contiene una estructura válida de Carta Gantt.");
        return;
      }
      saveGanttData();
      renderGanttTable(currentGanttFilter);
      alert("¡Carta Gantt importada y sincronizada con éxito entre miembros del equipo!");
    } catch (err) {
      alert("Error al leer el archivo JSON: " + err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function shareGanttLink() {
  const completedIds = ganttTasks.filter(t => t.completed).map(t => t.id);
  const stateStr = btoa(JSON.stringify(completedIds));
  const url = new URL(window.location.href);
  url.hash = '#gantt';
  url.searchParams.set('state', stateStr);

  navigator.clipboard.writeText(url.toString()).then(() => {
    alert("¡Enlace sincronizado copiado al portapapeles!\n\nCualquier miembro del equipo que abra este enlace cargará exactamente este avance de la Carta Gantt.");
  }).catch(() => {
    prompt("Copia este enlace para compartir el avance del equipo:", url.toString());
  });
}

function renderGanttTable(filter = currentGanttFilter) {
  currentGanttFilter = filter;
  const tbody = document.getElementById('gantt-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  let filtered = ganttTasks;
  if (filter !== 'all') filtered = ganttTasks.filter(t => t.phase === filter);

  filtered.forEach(task => {
    const tr = document.createElement('tr');
    if (task.completed) tr.classList.add('task-completed');

    tr.innerHTML = `
      <td>
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
      </td>
      <td class="task-name">${task.name}</td>
      <td><span class="badge-phase ${task.phase}">${task.phaseLabel}</span></td>
      <td style="color: var(--text-muted); font-size: 0.85rem; font-weight: 500;">${task.week}</td>
      <td style="color: var(--cyan); font-size: 0.85rem; font-weight: 600;"><i class="fa-solid fa-user"></i> ${task.assignee}</td>
    `;
    tbody.appendChild(tr);
  });

  updateProgressStats();
}

function toggleTask(taskId) {
  const task = ganttTasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    saveGanttData();
    renderGanttTable(currentGanttFilter);
  }
}

function filterGantt(filterName) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick').includes(filterName)) btn.classList.add('active');
  });
  renderGanttTable(filterName);
}

function updateProgressStats() {
  const total = ganttTasks.length;
  const completedCount = ganttTasks.filter(t => t.completed).length;
  const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  const bar = document.getElementById('gantt-progress-bar');
  const txt = document.getElementById('gantt-progress-text');
  const countTxt = document.getElementById('gantt-tasks-count');

  if (bar) bar.style.width = `${percent}%`;
  if (txt) txt.textContent = `${percent}%`;
  if (countTxt) countTxt.textContent = `${completedCount} / ${total}`;
}

// --- 6. VIEW SWITCHER FOR TEAM DASHBOARD & INFINITE ARCHIVE ---
function switchView(mode) {
  if (mode === 'team') {
    showTeamView('members');
  } else if (mode === 'archive') {
    showArchiveView('lore');
  } else {
    window.location.hash = '#home';
    showPublicView();
  }
}

// --- INFINITE ARCHIVE LOGIC & CONTROLS ---

function showArchiveView(subtab = 'lore') {
  const dynamicView = document.getElementById('view-dynamic');
  const publicView = document.getElementById('view-public');
  const teamView = document.getElementById('view-team');
  const archiveView = document.getElementById('view-archive');

  if (dynamicView) dynamicView.style.display = 'none';
  if (publicView) publicView.style.display = 'none';
  if (teamView) teamView.style.display = 'none';

  if (archiveView) {
    archiveView.style.display = 'block';
    archiveView.classList.add('active-view');
  }

  switchArchiveTab(subtab);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchArchiveTab(tab) {
  const btnLore = document.getElementById('btn-archive-tab-lore');
  const btnAudio = document.getElementById('btn-archive-tab-audio');
  const btnPipeline = document.getElementById('btn-archive-tab-pipeline');

  const paneLore = document.getElementById('archive-pane-lore');
  const paneAudio = document.getElementById('archive-pane-audio');
  const panePipeline = document.getElementById('archive-pane-pipeline');

  if (btnLore) btnLore.classList.toggle('active', tab === 'lore');
  if (btnAudio) btnAudio.classList.toggle('active', tab === 'audio');
  if (btnPipeline) btnPipeline.classList.toggle('active', tab === 'pipeline');

  if (paneLore) paneLore.style.display = tab === 'lore' ? 'block' : 'none';
  if (paneAudio) paneAudio.style.display = tab === 'audio' ? 'block' : 'none';
  if (panePipeline) panePipeline.style.display = tab === 'pipeline' ? 'block' : 'none';
}

const ARCHIVE_SCENES_DATA = {
  1: {
    img: 'arcano_tower_window.jpg',
    badge: 'Capítulo I • La Torre sobre las Cenizas',
    title: 'Aurelius Chronovoid en la Ventana de la Aguja',
    desc: 'Desde la aguja más alta de la fortaleza de Kar-Kaelum, Aurelius contempla la ciudadela deshecha por las Guerras de la Ruptura. El cielo se funde con el espacio profundo: estrellas frías, una nebulosa violeta y polvo cósmico lila que titila suspendido en el aire con destellos chillwave y cian neonwave. El astrolabio de bronce y piedra oscura que pende de su pecho registra cada vibración del multiverso.',
    quote: '"Las guerras desgarraron los continentes de carne y piedra, pero el sonido de las estrellas es inmortal. Aquí aguardo con Umbraxion hasta que el tiempo decida recomenzar."'
  },
  2: {
    img: 'arcano_reading.jpg',
    badge: 'Capítulo II • El Manuscrito de las Eras',
    title: 'El Estudio de Historias bajo la Llama Eterna',
    desc: 'En la calidez silenciosa de su biblioteca personal, rodeado de muros de piedra milenaria y polvo lila bioluminiscente, Aurelius descifra los códices rescatados de los imperios caídos. La llama de una sola vela dorada baila sobre el cuero ajado mientras su mano anota los acordes de civilizaciones que ya no existen.',
    quote: '"Un libro no es tinta muerta; es una partitura del alma. Mientras alguien lea sus historias, sus mundos siguen latiendo en la penumbra."'
  },
  3: {
    img: 'arcano_dragon.jpg',
    badge: 'Capítulo III • La Bestia del Vacío',
    title: 'El Vínculo con Umbraxion en el Gran Salón',
    desc: 'En el centro del salón abovedado de columnas ciclópeas, Umbraxion reposa con sus alas plegadas y sus escamas de obsidiana reflejando la luz de las estrellas. Aurelius posa con ternura su palma sobre el hocico del dragón negro, cuya respiración rítmica y profunda genera una vibración subsónica que disipa el estrés y protege la torre.',
    quote: '"No temas a la oscuridad si camina a tu lado. Umbraxion nació del vacío primordial, y en su pecho late la calma de un millón de noches serenas."'
  }
};

function selectArchiveScene(index) {
  const scene = ARCHIVE_SCENES_DATA[index];
  if (!scene) return;

  const imgEl = document.getElementById('archive-current-scene-img');
  const badgeEl = document.getElementById('archive-scene-badge');
  const titleEl = document.getElementById('archive-scene-title');
  const descEl = document.getElementById('archive-scene-desc');
  const quoteEl = document.getElementById('archive-scene-quote');

  if (imgEl) {
    imgEl.style.opacity = '0.2';
    setTimeout(() => {
      imgEl.src = scene.img;
      imgEl.style.opacity = '1';
    }, 200);
  }

  if (badgeEl) badgeEl.textContent = scene.badge;
  if (titleEl) titleEl.textContent = scene.title;
  if (descEl) descEl.textContent = scene.desc;
  if (quoteEl) quoteEl.textContent = scene.quote;

  for (let i = 1; i <= 3; i++) {
    const thumb = document.getElementById(`thumb-scene-${i}`);
    if (thumb) thumb.classList.toggle('active', i === index);
  }
}

function filterArchiveUniverse(category, btn) {
  const allBtns = document.querySelectorAll('.archive-filter-btn');
  allBtns.forEach((b) => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const cards = document.querySelectorAll('.archive-tome-card');
  cards.forEach((card) => {
    if (category === 'all' || card.dataset.universe === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function previewArchiveTrack(name, bpm, key) {
  const titleEl = document.getElementById('archive-player-title');
  const subEl = document.getElementById('archive-player-sub');
  const banner = document.getElementById('archive-audio-player-banner');

  if (titleEl) titleEl.textContent = name;
  if (subEl) subEl.textContent = `${bpm} BPM • ${key} • Simulación Activa (Sin Fatiga Auditiva)`;
  if (banner) {
    banner.style.boxShadow = '0 0 35px rgba(34,211,238,0.45)';
    setTimeout(() => {
      banner.style.boxShadow = '0 0 25px rgba(34,211,238,0.2)';
    }, 800);
  }
}

function copyArchiveYouTubeKit() {
  const preview = document.getElementById('archive-youtube-text-preview');
  if (preview) {
    navigator.clipboard.writeText(preview.value).then(() => {
      alert('✨ ¡Paquete de YouTube Studio copiado al portapapeles!\n(Título, Lore, Timestamps Pomodoro, Descargo Legal y 25 Tags)');
    }).catch(() => {
      preview.select();
      document.execCommand('copy');
      alert('✨ ¡Paquete de YouTube Studio copiado al portapapeles!');
    });
  }
}

// --- 7. PITCH DECK SLIDER LOGIC ---
let currentSlide = 1;
const totalSlides = 10;

function initPitchDeck() {
  const dotsContainer = document.getElementById('pitch-dots');
  if (!dotsContainer) return;

  dotsContainer.innerHTML = '';
  for (let i = 1; i <= totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = `dot ${i === 1 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }
}

function showSlide(index) {
  if (index < 1) index = totalSlides;
  if (index > totalSlides) index = 1;
  currentSlide = index;

  document.querySelectorAll('.pitch-slide').forEach(slide => {
    slide.classList.remove('active-slide');
    if (parseInt(slide.getAttribute('data-slide')) === currentSlide) {
      slide.classList.add('active-slide');
    }
  });

  document.querySelectorAll('.pitch-dots .dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx + 1 === currentSlide);
  });
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }
function goToSlide(n) { showSlide(n); }

// --- 8. COPY TO CLIPBOARD HELPER ---
function copyToClipboard(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const text = el.innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("¡Texto copiado al portapapeles con éxito!");
  }).catch(err => {
    console.error("Error al copiar texto:", err);
  });
}

// --- 9. DOM INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initGanttData();
  initPitchDeck();
  applyLogo(currentLogoKey);
  updateWorldClocks();
  updateAuthUI();
});

function copyFullPilotScript(influencerId) {
  const data = influencersData[influencerId];
  if (!data || !data.pilotScript) {
    alert('No hay guión piloto registrado para este influencer.');
    return;
  }
  const ps = data.pilotScript;
  let md = `# GUIÓN TÉCNICO PILOTO: ${ps.title}\n`;
  md += `**Influencer:** ${data.name} (@${influencerId})\n`;
  md += `**Duración:** ${ps.duration} | **Formato:** ${ps.format}\n`;
  md += `**Objetivo:** ${ps.objective}\n`;
  md += `**Banda Sonora / Ambiente:** ${ps.musicTrack}\n\n`;
  md += `--- ESCALETA TÉCNICA ESCENA POR ESCENA ---\n\n`;
  
  ps.scenes.forEach(s => {
    md += `### ESCENA ${s.num}: ${s.name} (${s.time})\n`;
    md += `- **Encuadre:** ${s.shotType}\n`;
    md += `- **Descripción Visual:** ${s.visual}\n`;
    md += `- **Prompt de Video (Kling 3.0 / Flux):** \`${s.klingPrompt}\`\n`;
    md += `- **Locución / Diálogo (ElevenLabs):** ${s.voice}\n`;
    md += `- **Indicación de Voz:** ${s.voiceNotes}\n`;
    md += `- **Diseño Sonoro & SFX:** ${s.audioCue}\n`;
    md += `- **Texto en Pantalla:** ${s.overlayText}\n\n`;
  });
  
  navigator.clipboard.writeText(md).then(() => {
    alert('✅ Guión técnico completo copiado al portapapeles en formato Markdown.');
  }).catch(err => {
    console.error('Error al copiar:', err);
  });
}

function copyPilotKlingPrompts(influencerId) {
  const data = influencersData[influencerId];
  if (!data || !data.pilotScript) return;
  const prompts = data.pilotScript.scenes.map(s => `// ESCENA ${s.num} (${s.time}):\n${s.klingPrompt}`).join('\n\n');
  navigator.clipboard.writeText(prompts).then(() => {
    alert('🎬 Prompts de Kling 3.0 copiados al portapapeles.');
  });
}


// ====================================================================
// EL CALDERO DE FREJA • MOTOR INTERNO DE PROMPTS (PANEL DE ADMINISTRADOR)
// ====================================================================
const adminCalderoPresets = {
  dragon: {
    modo: "D Dorian (Místico y Noble)",
    bpm: 74,
    clasica: "Danse Macabre (Camille Saint-Saëns) + Chillwave Dark Synth Arps",
    fusion: 50,
    espacio: "Cripta inundada de piedra húmeda con reverberación de 7 segundos",
    quiebre: "Corte súbito de toda la orquesta hacia un silencio absoluto con eco de campana disonante",
    frases: "«Per tenebras astra peto,\nCinis manet in secreto.\nOculis clausis deum video,\nSanguine portas aperio.»\n(A través de las tinieblas busco las estrellas, la ceniza permanece en secreto. Con ojos cerrados contemplo al dios, con sangre abro las puertas.)",
    bestiario: "Cuervo albino de tres ojos, raíces de tejo carbonizado",
    clima: "Nevada glacial cayendo sobre piedra volcánica aún incandescente",
    material: "Hierro frío de campana gótica, astillas de obsidiana y cera ardiente"
  },
  biblioteca: {
    modo: "A Aeolian (Melancolía y Lamento)",
    bpm: 68,
    clasica: "Lacrimosa del Réquiem de Mozart + Lofi Chillwave Tape Warmth",
    fusion: 40,
    espacio: "Gran biblioteca abovedada con techos de 20 metros colapsando en eco",
    quiebre: "Un suspiro de soprano solitario tras el estruendo de un pilar de piedra cayendo",
    frases: "«Ignis vorat veritatem, nox accipit animam»\n(El fuego devora la verdad, la noche acoge el alma)",
    bestiario: "Polillas de obsidiana, hojas de belladona marchita",
    clima: "Ventisca polar silenciosa con copos negros de hollín",
    material: "Pergamino reseco crujiendo al fuego, cuero curtido y brasa violeta"
  },
  portal: {
    modo: "E Phrygian (Tensión de Batalla y Hechizo)",
    bpm: 110,
    clasica: "La Consagración de la Primavera (Stravinsky) + Tambores Chamánicos & Modular Synth",
    fusion: 65,
    espacio: "Páramo abierto sin límites bajo un cielo combado con eco disperso",
    quiebre: "Aceleración rítmica insana interrumpida por un acorde modal suspendido en el vacío",
    frases: "«Porta patet, sed pretium sanguis est»\n(El umbral se abre, mas el precio es sangre)",
    bestiario: "Lobo de escarcha con cuernos de ciervo, liquen carmesí",
    clima: "Tormenta de viento electromagnético con relámpagos sin trueno",
    material: "Roca basáltica agrietada, mercurio líquido y cuerdas tensadas al límite"
  },
  astrologo: {
    modo: "D Dorian (Místico y Noble)",
    bpm: 62,
    clasica: "Gymnopédie No. 1 (Erik Satie) en Re menor + Ambient Drone Cósmico",
    fusion: 75,
    espacio: "Cámara circular en la cúspide de una torre de piedra con eco íntimo",
    quiebre: "Una sola nota de campana de cristal que vibra hasta extinguirse en susurro",
    frases: "«Nox longa, stellae mutae, solus in turre»\n(Larga es la noche, mudas las estrellas, solo en la torre)",
    bestiario: "Lechuza de nieve ciega, musgo pálido sobre piedra",
    clima: "Niebla densa e inmóvil que congela las ventanas de la torre a medianoche",
    material: "Lente de telescopio empañada, latón envejecido y madera de roble centenario"
  },
  valquiria: {
    modo: "C Harmonic Minor (Gótico Dramático)",
    bpm: 78,
    clasica: "Cabalgata de las Valquirias (Wagner) desconstruida en Neoclásico Sombrío",
    fusion: 30,
    espacio: "Fiordo escarpado con reverberación natural rebotando en acantilados",
    quiebre: "Vocalise solista de Freja subiendo a registro sobreagudo sin ningún acompañamiento",
    frases: "«Valkyrja bíðr í skugga,\nSól tér sortna yfir foldu.»\n(La valquiria aguarda en la sombra, el sol se oscurece sobre la tierra.)",
    bestiario: "Águila gigante de escarcha, túmulo funerario de piedra negra",
    clima: "Viento aullante cortando la niebla en la cima de un glaciar",
    material: "Acero templado en nieve, runas grabadas en hueso de ballena"
  }
};

function updateAdminFusionLabel(val) {
  val = parseInt(val);
  const el = document.getElementById('adminCalderoFusionVal');
  if (!el) return;
  if (val < 35) el.innerText = `${val}% Gótico Sinfónico Puro`;
  else if (val <= 65) el.innerText = `${val}% Híbrido Dark Fantasy & Modular`;
  else el.innerText = `${val}% Chillwave Noir Synth Ambient`;
}

function applyAdminCalderoPreset(key) {
  if (!adminCalderoPresets[key]) return;
  const p = adminCalderoPresets[key];
  if (document.getElementById('adminCalderoModo')) document.getElementById('adminCalderoModo').value = p.modo;
  if (document.getElementById('adminCalderoBpm')) {
    document.getElementById('adminCalderoBpm').value = p.bpm;
    document.getElementById('adminCalderoBpmVal').innerText = `${p.bpm} BPM`;
  }
  if (document.getElementById('adminCalderoClasica')) document.getElementById('adminCalderoClasica').value = p.clasica;
  if (document.getElementById('adminCalderoFusion')) {
    document.getElementById('adminCalderoFusion').value = p.fusion;
    updateAdminFusionLabel(p.fusion);
  }
  if (document.getElementById('adminCalderoEspacio')) document.getElementById('adminCalderoEspacio').value = p.espacio;
  if (document.getElementById('adminCalderoQuiebre')) document.getElementById('adminCalderoQuiebre').value = p.quiebre;
  if (document.getElementById('adminCalderoFrases')) document.getElementById('adminCalderoFrases').value = p.frases;

  generarPromptsAdminCaldero();
}

function generarLetraSacraAdminCaldero() {
  const canticos = [
    "«Per tenebras astra peto,\nCinis manet in secreto.\nOculis clausis deum video,\nSanguine portas aperio.»\n(A través de las tinieblas busco las estrellas, la ceniza permanece en secreto. Con ojos cerrados contemplo al dios, con sangre abro las puertas.)",
    "«Silentium magnum in turre vetusta,\nTempus fugit sicut flumen in umbra.\nAudi vocem antiquorum,\nRegnum cadit sub sideribus.»\n(Gran silencio en la torre antigua, el tiempo huye cual río en la sombra. Escucha la voz de los antiguos, el reino cae bajo las estrellas.)",
    "«Valkyrja bíðr í skugga,\nSól tér sortna yfir foldu.\nEldur brennr, hjarta kólnar,\nMinning deyr í þögn.»\n(La valquiria aguarda en la sombra, el sol se oscurece sobre la tierra. El fuego arde, el corazón se enfría, la memoria muere en silencio.)",
    "«Porta patet, sed pretium sanguis est,\nIgnis vorat veritatem, nox accipit animam.»\n(El umbral se abre, mas el precio es sangre. El fuego devora la verdad, la noche acoge el alma.)"
  ];
  const pick = canticos[Math.floor(Math.random() * canticos.length)];
  const txt = document.getElementById('adminCalderoFrases');
  if (txt) {
    txt.value = pick;
    generarPromptsAdminCaldero();
  }
}

function generarPromptsAdminCaldero() {
  const modo = document.getElementById('adminCalderoModo') ? document.getElementById('adminCalderoModo').value : 'D Dorian';
  const bpm = document.getElementById('adminCalderoBpm') ? document.getElementById('adminCalderoBpm').value : 74;
  const clasica = document.getElementById('adminCalderoClasica') ? document.getElementById('adminCalderoClasica').value : 'Danse Macabre';
  const fusionVal = document.getElementById('adminCalderoFusion') ? parseInt(document.getElementById('adminCalderoFusion').value) : 50;
  const espacio = document.getElementById('adminCalderoEspacio') ? document.getElementById('adminCalderoEspacio').value : 'Cripta de piedra con 7s reverb';
  const quiebre = document.getElementById('adminCalderoQuiebre') ? document.getElementById('adminCalderoQuiebre').value : 'Corte súbito a silencio con campana disonante';
  const frases = document.getElementById('adminCalderoFrases') ? document.getElementById('adminCalderoFrases').value : 'Per tenebras astra peto';
  const isInstrumental = document.getElementById('adminCalderoChkInstr') ? document.getElementById('adminCalderoChkInstr').checked : false;
  const isLirico = document.getElementById('adminCalderoChkLirico') ? document.getElementById('adminCalderoChkLirico').checked : true;

  let fusionDesc = "";
  if (fusionVal < 35) fusionDesc = "pure acoustic gothic orchestration, visceral cello bowing, sacred choir";
  else if (fusionVal <= 65) fusionDesc = "dark fantasy hybrid, raw cellos layered with warm analog synth pads and modular sub-bass";
  else fusionDesc = "chillwave noir ambient, lush retro analog synthesizers, tape wow-and-flutter, slow deep sub-bass";

  let vocalStyle = isInstrumental ? "Instrumental only, no vocals, pure ambient score" : (isLirico ? "Ethereal dramatic soprano vocalise by Freja Lindholm, ancient choir chants in Latin, Nordic sacred resonance" : "Sparse whispered murmurs");

  // 1. Suno Style
  const sunoStyle = `Dark fantasy epic gothic orchestration, ${fusionDesc}, inspired by ${clasica}, ${bpm} BPM, harmonic mode ${modo}, raw acoustic textures (iron gothic bell, obsidian shards), cavernous hall reverb (${espacio}), ${vocalStyle}, solemn sorrowful arcane atmosphere.`;
  const sunoStyleEl = document.getElementById('adminPromptSunoStyle');
  if (sunoStyleEl) sunoStyleEl.value = sunoStyle;

  // 2. Suno Lyrics & Structure
  const firstLine = frases.split('\n')[0].replace(/[«»]/g, '');
  let lyricsStructure = "";
  if (isInstrumental) {
    lyricsStructure = `[Instrumental Opening: ${bpm} BPM, ambient drone and room decay of ${espacio}]\n[Solo Rustic Cello - Slow ${modo} motif inspired by ${clasica}]\n[Extended Ambient Drift: 2 minutes of sparse tape pads and ticking astrolabe]\n[Ritual Break: ${quiebre}]\n[Climax: Massive hybrid swell and sub-bass return]\n[End]`;
  } else {
    lyricsStructure = `[Intro: Atmospheric drone, cold wind, room sound of ${espacio}]\n[Verse 1 - Freja Soprano Solo: Gentle and wounded in ${modo}]\n${firstLine}\n\n[Pre-Chorus - Sacred Monks Choir swell]\nSilentium magnum in turre vetusta,\nTempus fugit sicut flumen in umbra...\n\n[Ritual Break: ${quiebre}]\n\n[Chorus: Full Gothic Choir and Valkyrie High Notes]\n«${firstLine}»\n(Invocación de los sellos astrales)\n\n[Outro: Whispered prayer fading into blizzard]\n[End]`;
  }
  const sunoLyricsEl = document.getElementById('adminPromptSunoLyrics');
  if (sunoLyricsEl) sunoLyricsEl.value = lyricsStructure;

  // 3. Udio Tags
  const udioPrompt = [
    "dark fantasy neoclassical",
    fusionDesc,
    `inspired by ${clasica}`,
    `${bpm} bpm`,
    modo,
    isInstrumental ? "instrumental" : "nordic soprano, latin choir",
    "dramatic slow tempo",
    "heavy room impulse response",
    `space: ${espacio}`,
    "organic cello friction, gothic solemnity, cinematic"
  ].join(", ");
  const udioEl = document.getElementById('adminPromptUdio');
  if (udioEl) udioEl.value = udioPrompt;

  // 4. Midjourney Prompt
  const mjPrompt = `Cinematic dark fantasy photography, medium wide shot of music producer Freja Lindholm with platinum blonde braided hair and velvet corset standing in an ancient gothic observatory, glowing runic sigils hovering, ethereal moonlight, 8k resolution, octane render, mood inspired by ${clasica} --ar 16:9 --style raw`;
  const mjEl = document.getElementById('adminPromptMj');
  if (mjEl) mjEl.value = mjPrompt;
}

function copiarPromptAdmin(targetId, btn) {
  const target = document.getElementById(targetId);
  if (!target) return;
  navigator.clipboard.writeText(target.value).then(() => {
    const original = btn.innerText;
    btn.innerText = '✅ Copiado';
    btn.style.color = '#00f5d4';
    setTimeout(() => {
      btn.innerText = original;
      btn.style.color = '';
    }, 2000);
  });
}

// ============================================================================
// FUNCIONES DE INTERACCIÓN LANDING: REPRODUCTOR FREJA & SECCIÓN COMERCIAL
// ============================================================================

// 1. Reproductor de Audio Real de Freja (Landing Showcase)
let landingAudioInitialized = false;

function initLandingAudioEvents() {
  const audio = document.getElementById('landing-freja-audio');
  if (!audio || landingAudioInitialized) return;
  landingAudioInitialized = true;

  audio.addEventListener('timeupdate', () => {
    const curTime = audio.currentTime;
    const durTime = audio.duration || 74.59;
    const progressPercent = (curTime / durTime) * 100;

    const bar = document.getElementById('landing-audio-progress-bar');
    if (bar) bar.style.width = `${progressPercent}%`;

    const curLabel = document.getElementById('landing-audio-cur');
    if (curLabel) curLabel.textContent = formatAudioSeconds(curTime);

    const durLabel = document.getElementById('landing-audio-dur');
    if (durLabel && !isNaN(audio.duration)) durLabel.textContent = formatAudioSeconds(audio.duration);
  });

  audio.addEventListener('ended', () => {
    const playIcon = document.getElementById('landing-play-icon');
    const playText = document.getElementById('landing-play-text');
    const waves = document.getElementById('landing-wave-container');
    if (playIcon) playIcon.className = 'fa-solid fa-play';
    if (playText) playText.textContent = 'Escuchar Canción Completa';
    if (waves) waves.classList.remove('is-playing');
  });
}

function formatAudioSeconds(sec) {
  if (isNaN(sec)) return '00:00';
  const mins = Math.floor(sec / 60);
  const secs = Math.floor(sec % 60);
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function toggleLandingFrejaAudio() {
  const audio = document.getElementById('landing-freja-audio');
  const playIcon = document.getElementById('landing-play-icon');
  const playText = document.getElementById('landing-play-text');
  const waves = document.getElementById('landing-wave-container');
  if (!audio) return;

  initLandingAudioEvents();
  stopMusicCommercialDemo();

  if (audio.paused) {
    audio.play().then(() => {
      if (playIcon) playIcon.className = 'fa-solid fa-pause';
      if (playText) playText.textContent = 'Pausar Canción';
      if (waves) waves.classList.add('is-playing');
    }).catch(err => {
      console.error("Error al reproducir audio de Freja:", err);
    });
  } else {
    audio.pause();
    if (playIcon) playIcon.className = 'fa-solid fa-play';
    if (playText) playText.textContent = 'Reanudar Canción';
    if (waves) waves.classList.remove('is-playing');
  }
}

function seekLandingAudio(e) {
  const audio = document.getElementById('landing-freja-audio');
  const wrap = document.getElementById('landing-audio-progress-wrap');
  if (!audio || !wrap) return;

  initLandingAudioEvents();
  const rect = wrap.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const width = rect.width;
  const dur = audio.duration || 74.59;
  const newTime = (clickX / width) * dur;
  audio.currentTime = newTime;
}

function toggleLandingAudioLoop() {
  const audio = document.getElementById('landing-freja-audio');
  const statusEl = document.getElementById('landing-loop-status');
  if (!audio) return;
  audio.loop = !audio.loop;
  if (statusEl) statusEl.textContent = audio.loop ? 'ON' : 'OFF';
}

function playLandingDemoTrack(trackId) {
  if (trackId === 'dragon') {
    toggleLandingFrejaAudio();
  } else {
    const audio = document.getElementById('landing-freja-audio');
    if (audio && !audio.paused) {
      audio.pause();
      const playIcon = document.getElementById('landing-play-icon');
      const playText = document.getElementById('landing-play-text');
      const waves = document.getElementById('landing-wave-container');
      if (playIcon) playIcon.className = 'fa-solid fa-play';
      if (playText) playText.textContent = 'Escuchar Canción Completa';
      if (waves) waves.classList.remove('is-playing');
    }
    playMusicCommercialDemo(trackId, null);
  }
}

// 2. Control de Pestañas Comerciales
function switchComercialTab(tab) {
  const btnServicios = document.getElementById('btn-com-servicios');
  const btnSimulador = document.getElementById('btn-com-simulador');
  const btnPitch = document.getElementById('btn-com-pitch');
  const btnComparativa = document.getElementById('btn-com-comparativa');

  const paneServicios = document.getElementById('com-pane-servicios');
  const paneSimulador = document.getElementById('com-pane-simulador');
  const panePitch = document.getElementById('com-pane-pitch');
  const paneComparativa = document.getElementById('com-pane-comparativa');

  [btnServicios, btnSimulador, btnPitch, btnComparativa].forEach(b => { if (b) b.classList.remove('active'); });
  [paneServicios, paneSimulador, panePitch, paneComparativa].forEach(p => { if (p) p.classList.remove('active-pane'); });

  if (tab === 'simulador') {
    if (btnSimulador) btnSimulador.classList.add('active');
    if (paneSimulador) paneSimulador.classList.add('active-pane');
    updateLandingCampaignSim();
  } else if (tab === 'pitch') {
    if (btnPitch) btnPitch.classList.add('active');
    if (panePitch) panePitch.classList.add('active-pane');
  } else if (tab === 'comparativa') {
    if (btnComparativa) btnComparativa.classList.add('active');
    if (paneComparativa) paneComparativa.classList.add('active-pane');
  } else {
    if (btnServicios) btnServicios.classList.add('active');
    if (paneServicios) paneServicios.classList.add('active-pane');
  }
}

// 3. Carrusel del Pitch Deck Ejecutivo (10 Slides)
let currentPitchSlide = 1;

function goToPitchSlide(n) {
  currentPitchSlide = n;
  for (let i = 1; i <= 10; i++) {
    const slide = document.getElementById(`pitch-slide-${i}`);
    if (slide) slide.classList.toggle('active-slide', i === n);
  }

  const counter = document.getElementById('pitch-slide-counter');
  if (counter) counter.textContent = `Slide ${n} / 10`;

  const dots = document.querySelectorAll('.pitch-nav-dot');
  dots.forEach((d, idx) => {
    d.classList.toggle('active', idx + 1 === n);
  });
}

function prevPitchSlide() {
  let target = currentPitchSlide - 1;
  if (target < 1) target = 10;
  goToPitchSlide(target);
}

function nextPitchSlide() {
  let target = currentPitchSlide + 1;
  if (target > 10) target = 1;
  goToPitchSlide(target);
}

// 4. Simulador de Campaña de la Landing
function updateLandingCampaignSim() {
  const reachEl = document.getElementById('land-sim-reach');
  const creatorsEl = document.getElementById('land-sim-creators');
  const formatEl = document.getElementById('land-sim-format');

  const reachLabel = document.getElementById('land-sim-reach-label');
  const creatorsLabel = document.getElementById('land-sim-creators-label');

  const costEl = document.getElementById('land-sim-cost');
  const tradEl = document.getElementById('land-sim-traditional');
  const savingsEl = document.getElementById('land-sim-savings');
  const cpmEl = document.getElementById('land-sim-cpm');
  const engEl = document.getElementById('land-sim-engagement');

  if (!reachEl || !creatorsEl) return;

  const reach = parseInt(reachEl.value, 10);
  const creators = parseInt(creatorsEl.value, 10);
  const format = formatEl ? formatEl.value : 'reels';

  if (reachLabel) reachLabel.textContent = `${reach.toLocaleString()} Views`;
  if (creatorsLabel) creatorsLabel.textContent = `${creators} ${creators === 1 ? 'Influencer' : 'Influencers'}`;

  let baseCpm = 2.80;
  let tradCpm = 11.00;

  if (format === 'ugc') {
    baseCpm = 2.40;
    tradCpm = 9.50;
  } else if (format === 'omnichannel') {
    baseCpm = 3.60;
    tradCpm = 14.50;
  }

  const agencyCost = Math.round((reach / 1000) * baseCpm + (creators * 80));
  const tradCost = Math.round((reach / 1000) * tradCpm + (creators * 450));
  const savingsPercent = Math.round(((tradCost - agencyCost) / tradCost) * 100);

  const estimatedCpm = ((agencyCost / reach) * 1000).toFixed(2);
  const engRate = (8.5 + (creators * 0.6) - (reach / 1000000) * 1.5).toFixed(1);

  if (costEl) costEl.textContent = `$${agencyCost.toLocaleString()} USD`;
  if (tradEl) tradEl.textContent = `$${tradCost.toLocaleString()} USD`;
  if (savingsEl) savingsEl.textContent = `-${savingsPercent}%`;
  if (cpmEl) cpmEl.textContent = `$${estimatedCpm} USD`;
  if (engEl) engEl.textContent = `${engRate}% (Alto)`;
}

function applyLandingSimToQuote() {
  const serviceSel = document.getElementById('land-b2b-service');
  const msgEl = document.getElementById('land-b2b-message');
  const reachEl = document.getElementById('land-sim-reach');
  const creatorsEl = document.getElementById('land-sim-creators');
  const costEl = document.getElementById('land-sim-cost');

  if (serviceSel) serviceSel.value = 'Influencer Marketing con Rostros IA';
  if (msgEl && reachEl && creatorsEl && costEl) {
    msgEl.value = `Cotización desde Simulador: Campaña de ${reachEl.value} visualizaciones con ${creatorsEl.value} influencers IA. Presupuesto estimado: ${costEl.textContent}. Por favor contactar para detalles de contratación.`;
  }

  const formSection = document.getElementById('land-b2b-name');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
    formSection.focus();
  }
}

function prefillLandingB2B(serviceName) {
  const serviceSel = document.getElementById('land-b2b-service');
  const formInput = document.getElementById('land-b2b-name');
  if (serviceSel) {
    serviceSel.value = serviceName;
  }
  if (formInput) {
    formInput.scrollIntoView({ behavior: 'smooth' });
    formInput.focus();
  }
}

function handleLandingB2BSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('land-b2b-name')?.value || '';
  const company = document.getElementById('land-b2b-company')?.value || '';
  const email = document.getElementById('land-b2b-email')?.value || '';
  const service = document.getElementById('land-b2b-service')?.value || '';

  alert(`¡Gracias, ${name}! Hemos recibido la solicitud para ${company} (${service}). Un director de cuentas de Manejadores te contactará a ${email} en menos de 24 horas.`);
  e.target.reset();
}

