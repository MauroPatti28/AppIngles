﻿const businessBeginnerWords = [
  { word: "market", definition: "mercado", example: "The market is growing.", frequency: "high", wordType: "noun" },
  { word: "profit", definition: "beneficio", example: "The profit margin is increasing.", frequency: "high", wordType: "noun" },
  { word: "investment", definition: "inversión", example: "Investment is key to growth.", frequency: "high", wordType: "noun" },
  { word: "strategy", definition: "estrategia", example: "We need a new strategy.", frequency: "high", wordType: "noun" },
  { word: "client", definition: "cliente", example: "The client is always right.", frequency: "high", wordType: "noun" },
  { word: "budget", definition: "presupuesto", example: "We must stick to the budget.", frequency: "high", wordType: "noun" },
  { word: "revenue", definition: "ingresos", example: "Revenue increased this quarter.", frequency: "high", wordType: "noun" },
  { word: "expenses", definition: "gastos", example: "Cut unnecessary expenses.", frequency: "high", wordType: "noun" },
  { word: "negotiation", definition: "negociación", example: "Negotiation skills are essential.", frequency: "medium", wordType: "noun" },
  { word: "contract", definition: "contrato", example: "Sign the contract.", frequency: "high", wordType: "noun" },
  { word: "supplier", definition: "proveedor", example: "Find a reliable supplier.", frequency: "medium", wordType: "noun" },
  { word: "brand", definition: "marca", example: "Build a strong brand.", frequency: "high", wordType: "noun" },
  { word: "competitor", definition: "competidor", example: "Analyze your competitors.", frequency: "high", wordType: "noun" },
  { word: "deadline", definition: "fecha límite", example: "Meet the deadline.", frequency: "high", wordType: "noun" },
  { word: "efficiency", definition: "eficiencia", example: "Improve efficiency.", frequency: "medium", wordType: "noun" },
  { word: "entrepreneur", definition: "emprendedor", example: "She is a successful entrepreneur.", frequency: "medium", wordType: "noun" },
  { word: "innovation", definition: "innovación", example: "Innovation drives success.", frequency: "high", wordType: "noun" },
  { word: "leadership", definition: "liderazgo", example: "Good leadership inspires.", frequency: "high", wordType: "noun" },
  { word: "management", definition: "gestión", example: "Effective management is key.", frequency: "high", wordType: "noun" },
  { word: "meeting", definition: "reunión", example: "Schedule a meeting.", frequency: "high", wordType: "noun" },
  { word: "network", definition: "red de contactos", example: "Expand your network.", frequency: "high", wordType: "noun" },
  { word: "opportunity", definition: "oportunidad", example: "Seize the opportunity.", frequency: "high", wordType: "noun" },
  { word: "partnership", definition: "asociación", example: "Form a partnership.", frequency: "medium", wordType: "noun" },
  { word: "product", definition: "producto", example: "Launch a new product.", frequency: "high", wordType: "noun" },
  { word: "quality", definition: "calidad", example: "Ensure high quality.", frequency: "high", wordType: "noun" },
  { word: "risk", definition: "riesgo", example: "Assess the risk.", frequency: "high", wordType: "noun" },
  { word: "salary", definition: "salario", example: "Negotiate your salary.", frequency: "high", wordType: "noun" },
  { word: "startup", definition: "empresa emergente", example: "Join a startup.", frequency: "medium", wordType: "noun" },
  { word: "tax", definition: "impuesto", example: "Pay your taxes.", frequency: "high", wordType: "noun" },
  { word: "value", definition: "valor", example: "Deliver value to customers.", frequency: "high", wordType: "noun" },
  { word: "warehouse", definition: "almacén", example: "Store goods in the warehouse.", frequency: "medium", wordType: "noun" },
  { word: "wholesale", definition: "al por mayor", example: "Buy wholesale.", frequency: "medium", wordType: "noun" },
  { word: "yield", definition: "rendimiento", example: "Maximize yield.", frequency: "medium", wordType: "noun" },
  { word: "advertise", definition: "anunciar", example: "Advertise your business.", frequency: "high", wordType: "verb" },
  { word: "analyze", definition: "analizar", example: "Analyze market trends.", frequency: "high", wordType: "verb" },
  { word: "approve", definition: "aprobar", example: "Approve the proposal.", frequency: "medium", wordType: "verb" },
  { word: "borrow", definition: "pedir prestado", example: "Borrow capital.", frequency: "medium", wordType: "verb" },
  { word: "calculate", definition: "calcular", example: "Calculate costs.", frequency: "high", wordType: "verb" },
  { word: "compete", definition: "competir", example: "Compete fairly.", frequency: "high", wordType: "verb" },
  { word: "deliver", definition: "entregar", example: "Deliver on time.", frequency: "high", wordType: "verb" },
  { word: "earn", definition: "ganar", example: "Earn profits.", frequency: "high", wordType: "verb" },
  { word: "export", definition: "exportar", example: "Export goods.", frequency: "medium", wordType: "verb" },
  { word: "finance", definition: "financiar", example: "Finance the project.", frequency: "high", wordType: "verb" },
  { word: "hire", definition: "contratar", example: "Hire new employees.", frequency: "high", wordType: "verb" },
  { word: "import", definition: "importar", example: "Import materials.", frequency: "medium", wordType: "verb" },
  { word: "invest", definition: "invertir", example: "Invest wisely.", frequency: "high", wordType: "verb" },
  { word: "launch", definition: "lanzar", example: "Launch a campaign.", frequency: "high", wordType: "verb" },
  { word: "manage", definition: "gestionar", example: "Manage a team.", frequency: "high", wordType: "verb" },
  { word: "negotiate", definition: "negociar", example: "Negotiate a deal.", frequency: "high", wordType: "verb" },
  { word: "operate", definition: "operar", example: "Operate efficiently.", frequency: "high", wordType: "verb" },
  { word: "promote", definition: "promocionar", example: "Promote the brand.", frequency: "high", wordType: "verb" },
  { word: "purchase", definition: "comprar", example: "Purchase supplies.", frequency: "high", wordType: "verb" },
  { word: "qualify", definition: "calificar", example: "Qualify for a loan.", frequency: "medium", wordType: "verb" },
  { word: "reduce", definition: "reducir", example: "Reduce costs.", frequency: "high", wordType: "verb" },
  { word: "sell", definition: "vender", example: "Sell products.", frequency: "high", wordType: "verb" },
  { word: "target", definition: "objetivo", example: "Target new customers.", frequency: "high", wordType: "verb" },
  { word: "trade", definition: "comerciar", example: "Trade internationally.", frequency: "medium", wordType: "verb" },
  { word: "upsell", definition: "vender adicionales", example: "Upsell to clients.", frequency: "medium", wordType: "verb" },
  { word: "validate", definition: "validar", example: "Validate the idea.", frequency: "medium", wordType: "verb" },
  { word: "win", definition: "ganar", example: "Win a contract.", frequency: "high", wordType: "verb" },
  { word: "affordable", definition: "asequible", example: "Affordable prices.", frequency: "high", wordType: "adjective" },
  { word: "competitive", definition: "competitivo", example: "Competitive advantage.", frequency: "high", wordType: "adjective" },
  { word: "efficient", definition: "eficiente", example: "Efficient process.", frequency: "high", wordType: "adjective" },
  { word: "flexible", definition: "flexible", example: "Flexible schedule.", frequency: "medium", wordType: "adjective" },
  { word: "global", definition: "global", example: "Global market.", frequency: "high", wordType: "adjective" },
  { word: "innovative", definition: "innovador", example: "Innovative solution.", frequency: "high", wordType: "adjective" },
  { word: "lucrative", definition: "lucrativo", example: "Lucrative business.", frequency: "medium", wordType: "adjective" },
  { word: "profitable", definition: "rentable", example: "Profitable company.", frequency: "high", wordType: "adjective" },
  { word: "reliable", definition: "confiable", example: "Reliable supplier.", frequency: "high", wordType: "adjective" },
  { word: "scalable", definition: "escalable", example: "Scalable model.", frequency: "medium", wordType: "adjective" },
  { word: "transparent", definition: "transparente", example: "Transparent policies.", frequency: "medium", wordType: "adjective" },
  { word: "valuable", definition: "valioso", example: "Valuable asset.", frequency: "high", wordType: "adjective" },
  { word: "agreement", definition: "acuerdo", example: "Sign the agreement.", frequency: "high", wordType: "noun" },
  { word: "balance", definition: "balance", example: "Check the balance sheet.", frequency: "high", wordType: "noun" },
  { word: "capital", definition: "capital", example: "Raise capital.", frequency: "high", wordType: "noun" },
  { word: "dividend", definition: "dividendo", example: "Receive dividends.", frequency: "medium", wordType: "noun" },
  { word: "equity", definition: "patrimonio", example: "Company equity.", frequency: "medium", wordType: "noun" },
  { word: "feedback", definition: "retroalimentación", example: "Get customer feedback.", frequency: "high", wordType: "noun" },
  { word: "growth", definition: "crecimiento", example: "Business growth.", frequency: "high", wordType: "noun" },
  { word: "inventory", definition: "inventario", example: "Manage inventory.", frequency: "medium", wordType: "noun" },
  { word: "loan", definition: "préstamo", example: "Apply for a loan.", frequency: "high", wordType: "noun" },
  { word: "margin", definition: "margen", example: "Profit margin.", frequency: "high", wordType: "noun" },
  { word: "overhead", definition: "gastos generales", example: "Reduce overhead.", frequency: "medium", wordType: "noun" },
  { word: "portfolio", definition: "portafolio", example: "Investment portfolio.", frequency: "medium", wordType: "noun" },
  { word: "quarter", definition: "trimestre", example: "Q3 results.", frequency: "high", wordType: "noun" },
  { word: "retail", definition: "venta al por menor", example: "Retail business.", frequency: "high", wordType: "noun" },
  { word: "stakeholder", definition: "parte interesada", example: "Meet stakeholders.", frequency: "medium", wordType: "noun" },
  { word: "turnover", definition: "rotación", example: "Employee turnover.", frequency: "medium", wordType: "noun" },
  { word: "venture", definition: "empresa", example: "New venture.", frequency: "medium", wordType: "noun" },
  { word: "workforce", definition: "fuerza laboral", example: "Skilled workforce.", frequency: "high", wordType: "noun" },
  { word: "benchmark", definition: "punto de referencia", example: "Set a benchmark.", frequency: "medium", wordType: "noun" },
  { word: "cashflow", definition: "flujo de caja", example: "Positive cashflow.", frequency: "high", wordType: "noun" },
  { word: "deadline", definition: "fecha límite", example: "Meet the deadline.", frequency: "high", wordType: "noun" },
  { word: "e-commerce", definition: "comercio electrónico", example: "Expand e-commerce.", frequency: "high", wordType: "noun" },
  { word: "freelancer", definition: "trabajador independiente", example: "Hire a freelancer.", frequency: "medium", wordType: "noun" },
  { word: "gig economy", definition: "economía colaborativa", example: "Join the gig economy.", frequency: "medium", wordType: "noun" },
  { word: "outsource", definition: "subcontratar", example: "Outsource tasks.", frequency: "medium", wordType: "verb" },
  { word: "pivot", definition: "cambiar de estrategia", example: "Pivot the business.", frequency: "medium", wordType: "verb" },
  { word: "streamline", definition: "optimizar", example: "Streamline operations.", frequency: "medium", wordType: "verb" },
];

export default businessBeginnerWords;