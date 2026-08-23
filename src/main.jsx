import React from 'react';
import ReactDOM from 'react-dom/client';
import ShinyText from './ShinyText';

// Mount ShinyText into hero badge
const heroBadgeEl = document.getElementById('shiny-hero-badge');
if (heroBadgeEl) {
  ReactDOM.createRoot(heroBadgeEl).render(
    <React.StrictMode>
      <ShinyText
        text="✨ Authentic Indo-Chinese Cuisine"
        speed={2.5}
        delay={0}
        color="#FFB77B"
        shineColor="#FFFFFF"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
      />
    </React.StrictMode>
  );
}

// Mount ShinyText into dedicated showcase container
const shinyDemoEl = document.getElementById('shiny-text-demo');
if (shinyDemoEl) {
  ReactDOM.createRoot(shinyDemoEl).render(
    <React.StrictMode>
      <ShinyText
        text="✨ Shiny Text Effect"
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
      />
    </React.StrictMode>
  );
}
