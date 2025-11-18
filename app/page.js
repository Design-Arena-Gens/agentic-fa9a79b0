'use client';

export default function Home() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <svg width="600" height="700" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Cuerpo principal - beige */}
        <ellipse cx="300" cy="400" rx="120" ry="150" fill="#F5F5DC" filter="url(#shadow)"/>

        {/* Cabeza - crema */}
        <circle cx="300" cy="250" r="100" fill="#FFFDD0" filter="url(#shadow)"/>

        {/* Orejas */}
        <path d="M 230 180 L 210 130 L 260 160 Z" fill="#E8E8E8" filter="url(#shadow)"/>
        <path d="M 370 180 L 390 130 L 340 160 Z" fill="#E8E8E8" filter="url(#shadow)"/>
        <path d="M 235 175 L 225 145 L 255 165 Z" fill="#FFB6C1" opacity="0.6"/>
        <path d="M 365 175 L 375 145 L 345 165 Z" fill="#FFB6C1" opacity="0.6"/>

        {/* Manchas negras en la cabeza */}
        <ellipse cx="260" cy="220" rx="25" ry="20" fill="#2C2C2C" opacity="0.8"/>
        <ellipse cx="350" cy="235" rx="20" ry="25" fill="#2C2C2C" opacity="0.8"/>

        {/* Manchas grises en el cuerpo */}
        <ellipse cx="250" cy="370" rx="35" ry="40" fill="#A9A9A9" opacity="0.7"/>
        <ellipse cx="340" cy="420" rx="30" ry="35" fill="#808080" opacity="0.6"/>

        {/* Mancha beige oscura */}
        <ellipse cx="300" cy="460" rx="40" ry="30" fill="#D2B48C" opacity="0.5"/>

        {/* Ojos alegres */}
        <ellipse cx="270" cy="240" rx="18" ry="22" fill="#2C2C2C"/>
        <ellipse cx="330" cy="240" rx="18" ry="22" fill="#2C2C2C"/>
        <ellipse cx="273" cy="235" rx="8" ry="10" fill="#4A9D4A"/>
        <ellipse cx="333" cy="235" rx="8" ry="10" fill="#4A9D4A"/>
        <circle cx="276" cy="233" r="4" fill="#ffffff"/>
        <circle cx="336" cy="233" r="4" fill="#ffffff"/>

        {/* Cejas expresivas */}
        <path d="M 250 220 Q 260 215 270 218" stroke="#2C2C2C" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M 330 218 Q 340 215 350 220" stroke="#2C2C2C" strokeWidth="3" fill="none" strokeLinecap="round"/>

        {/* Nariz */}
        <path d="M 300 260 L 295 270 L 305 270 Z" fill="#FFB6C1"/>

        {/* Boca sonriente */}
        <path d="M 300 270 Q 285 280 275 275" stroke="#2C2C2C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M 300 270 Q 315 280 325 275" stroke="#2C2C2C" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

        {/* Bigotes */}
        <line x1="220" y1="255" x2="170" y2="250" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="220" y1="265" x2="170" y2="270" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="220" y1="275" x2="170" y2="285" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="380" y1="255" x2="430" y2="250" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="380" y1="265" x2="430" y2="270" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="380" y1="275" x2="430" y2="285" stroke="#2C2C2C" strokeWidth="2" strokeLinecap="round"/>

        {/* Patas delanteras */}
        <rect x="255" y="520" width="35" height="90" rx="17" fill="#E8E8E8" filter="url(#shadow)"/>
        <rect x="310" y="520" width="35" height="90" rx="17" fill="#F5F5DC" filter="url(#shadow)"/>

        {/* Manchas en patas */}
        <ellipse cx="272" cy="560" rx="12" ry="20" fill="#2C2C2C" opacity="0.7"/>
        <ellipse cx="327" cy="580" rx="10" ry="15" fill="#A9A9A9" opacity="0.6"/>

        {/* Patas traseras (parcialmente visibles) */}
        <ellipse cx="230" cy="530" rx="30" ry="45" fill="#D2B48C" opacity="0.8" filter="url(#shadow)"/>
        <ellipse cx="370" cy="530" rx="30" ry="45" fill="#E8E8E8" opacity="0.8" filter="url(#shadow)"/>

        {/* Cola elegante con curva */}
        <path d="M 180 420 Q 120 380 100 320 Q 90 280 110 250"
              stroke="#A9A9A9"
              strokeWidth="28"
              fill="none"
              strokeLinecap="round"
              filter="url(#shadow)"/>
        <path d="M 185 415 Q 130 385 115 330 Q 108 295 122 265"
              stroke="#FFFDD0"
              strokeWidth="20"
              fill="none"
              strokeLinecap="round"/>

        {/* Manchas en la cola */}
        <ellipse cx="140" cy="360" rx="15" ry="12" fill="#2C2C2C" opacity="0.7" transform="rotate(-35 140 360)"/>
        <ellipse cx="115" cy="300" rx="12" ry="10" fill="#808080" opacity="0.6" transform="rotate(-55 115 300)"/>

        {/* Detalles de pelaje (líneas sutiles) */}
        <path d="M 280 330 Q 285 340 290 350" stroke="#D2B48C" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <path d="M 310 330 Q 315 340 320 350" stroke="#D2B48C" strokeWidth="1.5" fill="none" opacity="0.4"/>
        <path d="M 295 345 Q 300 355 305 365" stroke="#D2B48C" strokeWidth="1.5" fill="none" opacity="0.4"/>

        {/* Patas delanteras - deditos */}
        <ellipse cx="265" cy="605" rx="15" ry="8" fill="#2C2C2C" opacity="0.3"/>
        <ellipse cx="327" cy="605" rx="15" ry="8" fill="#2C2C2C" opacity="0.3"/>

        {/* Mancha blanca en el pecho */}
        <ellipse cx="300" cy="360" rx="30" ry="35" fill="#FFFFFF" opacity="0.9"/>

        {/* Detalles adicionales de manchas */}
        <circle cx="285" cy="440" r="12" fill="#696969" opacity="0.5"/>
        <circle cx="320" cy="385" r="10" fill="#DCDCDC" opacity="0.6"/>
        <ellipse cx="265" cy="410" rx="18" ry="15" fill="#F5F5DC" opacity="0.7"/>
      </svg>
    </div>
  )
}
