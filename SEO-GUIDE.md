# Guide SEO - Quiz de Naturalisation Neuchâtel

## ✅ Optimisations Implémentées

### 1. **Meta Tags**
- ✅ Title optimisé avec emoji et mots-clés
- ✅ Meta description descriptive (160 caractères max)
- ✅ Keywords pertinents
- ✅ Canonical URL
- ✅ Language et locale (fr-CH)
- ✅ Robots meta (index, follow)

### 2. **Open Graph (Facebook/LinkedIn)**
- ✅ og:type, og:url, og:title
- ✅ og:description, og:image
- ✅ og:locale (fr_CH)

### 3. **Twitter Cards**
- ✅ Summary large image
- ✅ Title, description, image

### 4. **Structured Data (JSON-LD)**
- ✅ EducationalApplication schema
- ✅ Quiz schema
- ✅ WebApplication schema
- ✅ Rich snippets compatibles

### 5. **Geo Targeting**
- ✅ Geo tags pour Neuchâtel, Suisse
- ✅ Coordonnées GPS

### 6. **Technical SEO**
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ HTML lang="fr-CH"
- ✅ Semantic HTML
- ✅ Mobile responsive
- ✅ Fast loading

---

## 🚀 Prochaines Étapes

### 1. **Créer une image OG**
Créer `/public/og-image.png` (1200x630px):
- Fond rouge suisse
- Croix blanche
- Texte: "Quiz de Naturalisation Suisse"
- Canton de Neuchâtel

### 2. **Remplacer les URLs**
Dans `index.astro`, remplacer **"https://votre-domaine.com/"** avec votre vrai domaine:
```bash
# Chercher et remplacer
votre-domaine.com → votre-domaine-reel.com
```

### 3. **Google Search Console**
1. Aller sur https://search.google.com/search-console
2. Ajouter votre propriété
3. Vérifier le domaine
4. Soumettre le sitemap: `https://votre-domaine.com/sitemap.xml`

### 4. **Google Analytics (optionnel)**
Ajouter dans `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 5. **Performance**
- ✅ Utiliser un CDN (Cloudflare, Vercel)
- ✅ Compresser les images
- ✅ Minifier JS/CSS (fait par Astro)
- ✅ Enable caching

### 6. **Content Marketing**
- Créer une page FAQ
- Ajouter un blog avec articles:
  - "Comment réussir la naturalisation suisse"
  - "10 questions fréquentes naturalisation Neuchâtel"
  - "Histoire de la Suisse en 5 minutes"
- Créer des backlinks

### 7. **Local SEO**
- S'inscrire sur Google My Business (si applicable)
- Ajouter sur annuaires suisses
- Créer profil sur forums d'expatriés

---

## 📊 KPIs à Surveiller

1. **Position sur Google**
   - "quiz naturalisation neuchâtel"
   - "test naturalisation suisse"
   - "préparation naturalisation neuchâtel"

2. **Métriques**
   - Impressions
   - Clics
   - CTR (Click Through Rate)
   - Position moyenne

3. **Core Web Vitals**
   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1

---

## 🔍 Outils SEO Recommandés

### Gratuits
- **Google Search Console** - Monitoring
- **Google Analytics** - Traffic analysis
- **Lighthouse** (Chrome DevTools) - Performance
- **Schema.org Validator** - Test structured data
- **Facebook Sharing Debugger** - Test OG tags

### Payants (optionnels)
- **Ahrefs** - Backlinks analysis
- **SEMrush** - Keyword research
- **Moz** - SEO tracking

---

## 📝 Checklist SEO

- [x] Meta tags optimisés
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Structured data (JSON-LD)
- [x] robots.txt
- [x] sitemap.xml
- [x] HTML sémantique
- [x] Mobile responsive
- [ ] Image OG créée
- [ ] Domaine configuré
- [ ] Google Search Console setup
- [ ] Performance optimisée (Lighthouse score > 90)
- [ ] Backlinks créés
- [ ] Content marketing

---

## 💡 Tips SEO

1. **Mots-clés longue traîne**
   - "quiz naturalisation canton neuchâtel gratuit"
   - "questions test naturalisation suisse 2025"
   - "comment préparer naturalisation neuchâtel"

2. **CTR Optimization**
   - Utiliser emojis dans le title (🇨🇭 ✓)
   - Description action-oriented
   - Rich snippets (FAQ, How-to)

3. **User Signals**
   - Temps sur page > 2 minutes
   - Bounce rate < 50%
   - Pages par session > 1.5

---

## 🌍 International SEO (futur)

Si vous voulez cibler d'autres cantons:
- Créer `/canton/geneve`, `/canton/vaud`, etc.
- Utiliser hreflang tags
- Adapter le contenu par région
