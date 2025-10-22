export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface GalleryItem {
  title: string;
  description: string;
  medium: string;
  image: string;
}

export interface KeyValue {
  title: string;
  description: string;
}

export const homeNavLinks: NavLink[] = [
  { label: 'Inicio', href: '#top' },
  { label: 'Carta', href: '#bienvenida' },
  { label: 'Crew', href: '#crew' },
  { label: 'Estilo', href: '#estilo' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Ritual', href: '#ritual' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
];

export const globalNavLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Carta', href: '/#bienvenida' },
  { label: 'Crew', href: '/crew' },
  { label: 'Estilo', href: '/about#estilo' },
  { label: 'Modalidades', href: '/about#modalidades' },
  { label: 'Ritual', href: '/about#ritual' },
  { label: 'Portafolio', href: '/portfolio' },
  { label: 'Contacto', href: '/#contacto' },
];

export const heroStrip = [
  {
    src: 'https://images.unsplash.com/photo-1544645451-0577c768cc5f?auto=format&fit=crop&w=500&q=80',
    alt: 'Detalle de aguja tatuando blackwork',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80',
    alt: 'Sombras y gradientes en tatuaje de alto contraste',
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=80',
    alt: 'Detalle de tatuaje de cobertura completa',
  },
  {
    src: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd1?auto=format&fit=crop&w=500&q=80',
    alt: 'Blackwork geométrico con narrativa mística',
  },
];

export const letterParagraphs = [
  'Esto no es una promoción, es una llamada para quienes ya saben que el arte no se consume: se vive.',
  'Me llamo Omar. Me han dicho K-iser, Omaró, El Oscuro, hermano, vecino, amigo.',
  'Soy un artista neoespartano, formado por el fuego lento del Caribe, la filosofía de mis viejos y la necesidad de dar forma a lo que no se nombra.',
  'Crecí en una casa donde se pintaba y se tocaba con gotas del alma. Mi madre, música y pintora; mi padre y mi abuelo, maestros de paciencia y asombro.',
  'A los 14 me tatúe por primera vez. Desde entonces, no he parado de crear. Fui vocalista de metal melódico, hice pintura, serigrafía, diseño gráfico, escritura.',
  'En 2021 migré a Colombia. Empecé de cero. Encontré una comunidad que abrazó lo que traía. Ahí recordé: el arte salva cuando se comparte con respeto.',
  'Hoy, mi vida gira en torno al tatuaje. No como moda. No como adorno. Como ritual, como lenguaje antiguo, como espejo.',
  'Cada sesión revela lo que ya llevabas dentro. Yo solo trazo. Tú lo reconoces. Si estás aquí, no es por casualidad. Es porque tu piel ya sabe lo que quiere.',
];

export const crewValues: KeyValue[] = [
  {
    title: 'Tripulación del Sol Invertido',
    description:
      'No es un grupo, es familia extendida. Artistas, caminantes y buscadores que convierten cada tatuaje en brújula y memoria.',
  },
  {
    title: 'Espacio seguro',
    description:
      'Sin violencia ni prisa. Conversamos, respiramos y trazamos con respeto absoluto por el cuerpo y la historia de cada persona.',
  },
  {
    title: 'Comunidad viva',
    description:
      'Te invitamos a compartir procesos, bocetos y sueños en nuestro canal privado. La travesía se construye juntos.',
  },
];

export const styleHighlights: KeyValue[] = [
  {
    title: 'Blackwork ritual',
    description:
      'Texturas densas, gradientes a mano y simbolismo oscuro que celebran el misterio como territorio de sanación.',
  },
  {
    title: 'Tradicional japonés re-interpretado',
    description:
      'Fieras, máscaras y flora reinterpretadas con narrativa propia, combinando disciplina ancestral y voz caribeña.',
  },
  {
    title: 'Psico-horror poético',
    description:
      'Criaturas abisales, mitos y fobias convertidas en tatuajes que despiertan preguntas y protegen al portador.',
  },
];

export const modalities = [
  {
    mode: 'Domicilio',
    space: 'Profesional y técnico',
    experience: 'Tu espacio, tus reglas, montaje higienizado y portátil.',
    contribution: '$120K por hora de máquina',
    note: 'Ideal si buscas intimidad total o movilidad limitada.',
  },
  {
    mode: 'Home estudio',
    space: 'Guarida artesanal',
    experience: 'Ambiente old school, íntimo, cálido y cuidado con música y té caribeño.',
    contribution: '$100K por hora de máquina',
    note: 'Incluye sesión fotográfica básica para tu archivo personal.',
  },
  {
    mode: 'Diseño personalizado',
    space: 'Laboratorio creativo',
    experience: 'Proceso de co-creación, investigación simbólica y bocetos iterativos.',
    contribution: 'Valor acordado según complejidad',
    note: 'Si eliges un flash existente, solo cancelas materiales.',
  },
];

export const ritualSteps = [
  {
    title: 'Escucha profunda',
    description: 'Conversamos tu historia, símbolos y límites. Afinamos intención y referencias antes de trazar.',
  },
  {
    title: 'Diseño y oráculo',
    description: 'Te comparto bocetos, variaciones y lectura simbólica. Ajustamos hasta sentir que la pieza respira contigo.',
  },
  {
    title: 'Ritual de tatuaje',
    description: 'Preparamos el espacio, respiramos y trabajamos con pausas conscientes. Cada línea se protege y honra.',
  },
  {
    title: 'Cuidado y acompañamiento',
    description: 'Recibes guía de sanación, playlist y seguimiento. El tatuaje continúa revelándose en comunidad.',
  },
];

export const portfolioHighlights: GalleryItem[] = [
  {
    title: 'All Blue Guardian',
    description: 'Espalda completa que honra guardianes oceánicos en blackwork y dotwork.',
    medium: 'Tatuaje · Blackwork/Dotwork',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Leviatán Interior',
    description: 'Sleeve con bestiario marino y narrativa horishi en sombras profundas.',
    medium: 'Tatuaje · Blackwork',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Sueño del Guardián',
    description: 'Microrealismo en antebrazo con águila protectora y sombras suaves.',
    medium: 'Tatuaje · Microrealismo',
    image: 'https://images.unsplash.com/photo-1544640808-32ca72ac7f37?auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Flor de ceniza',
    description: 'Floral ornamental sobre columna con líneas finas y degradados en gris.',
    medium: 'Tatuaje · Línea fina',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Llama ancestral',
    description: 'Pecho completo con patrones ígneos y puntillismo ceremonial.',
    medium: 'Tatuaje · Dotwork',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Tótem doble',
    description: 'Dorso con máscaras guardianas y contrastes de sombras manuales.',
    medium: 'Tatuaje · Blackwork',
    image: 'https://images.unsplash.com/photo-1576176539991-0bd9648a1e8e?auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Bestiario florido',
    description: 'Pierna completa con criatura mítica y botánica en black & grey.',
    medium: 'Tatuaje · Black & Grey',
    image: 'https://images.unsplash.com/photo-1576919228236-a097c32a5cd1?auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Islas en bruma',
    description: 'Espalda completa con olas, nubes y carpas en tradición japonesa.',
    medium: 'Tatuaje · Horishi',
    image: 'https://images.unsplash.com/photo-1604200213928-3caf81c75bfa?auto=format&fit=crop&w=880&q=80',
  },
  {
    title: 'Guardia de cenizas',
    description: 'Mano tatuada con símbolos de resguardo y textura de carbón.',
    medium: 'Tatuaje · Blackwork',
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=880&q=80',
  },
];

export const lineage = [
  '@Irene.mendoza55',
  '@eliasfernandeztattoos',
  '@emitatoo',
  '@guerreros',
  '@vultureking',
  '@ademir_drummer',
];

export const socialLinks = [
  { label: 'WhatsApp', icon: '📱', href: 'https://wa.me/573001112233', external: true },
  { label: 'Instagram', icon: '📸', href: 'https://instagram.com/omarotattoo', external: true },
  { label: 'YouTube', icon: '▶️', href: 'https://youtube.com', external: true },
  { label: 'Correo', icon: '✉️', href: 'mailto:ritual@omarotattoo.com' },
];
