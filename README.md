# AutoMagic 33 — Guide de mise en ligne

## Structure des fichiers

```
automagic33/
├── index.html           ← Page d'accueil (Hero)
├── qui-sommes-nous.html ← Page "Qui sommes-nous"
├── infos.html           ← Page "Infos service"
├── tarifs.html          ← Page "Tarifs & formules"
├── contact.html         ← Page "Contact"
├── 404.html             ← Page d'erreur personnalisée
├── styles.css           ← Tout le CSS (partagé)
├── main.js              ← Scripts partagés (menu, animations)
├── robots.txt           ← Instructions pour les moteurs de recherche
├── sitemap.xml          ← Plan du site pour Google
└── .htaccess            ← Configuration serveur Apache
```

---

## Mise en ligne

### Option 1 — OVH / Infomaniak / cPanel (hébergement mutualisé)
1. Connectez-vous à votre hébergement via FTP (FileZilla, Cyberduck…)
2. Déposez **tous les fichiers** dans le dossier `public_html/` (ou `www/`)
3. Votre site est en ligne !

### Option 2 — Netlify (gratuit, recommandé pour débuter)
1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `automagic33/` sur le tableau de bord Netlify
3. Le site est en ligne en quelques secondes
4. La page 404 fonctionne automatiquement sur Netlify

### Option 3 — GitHub Pages (gratuit)
1. Créez un dépôt GitHub public
2. Uploadez tous les fichiers à la racine du dépôt
3. Dans Settings → Pages → Branch: main
4. La page 404 fonctionne automatiquement

---

## ⚠️ À personnaliser avant la mise en ligne

### 1. Votre domaine dans `sitemap.xml` et `index.html`
Remplacez `https://automagic33.fr` par votre vrai domaine dans :
- `sitemap.xml` (toutes les `<loc>`)
- `index.html` (balises `canonical` et `og:url`)
- `robots.txt` (ligne `Sitemap:`)
- Chaque page HTML (balises `<link rel="canonical">`)

### 2. HTTPS dans `.htaccess`
Une fois un certificat SSL installé (souvent gratuit via Let's Encrypt chez votre hébergeur),
décommentez les lignes de redirection HTTP → HTTPS dans `.htaccess`.

---

## SEO — Ce qui est déjà inclus

✅ Balises `<title>` et `<meta description>` optimisées par page
✅ Balises Open Graph (partage sur réseaux sociaux)
✅ Données structurées Schema.org (fiche LocalBusiness) sur `index.html`
✅ `sitemap.xml` pour Google Search Console
✅ `robots.txt`
✅ Balises `canonical` sur chaque page

### Étapes supplémentaires recommandées
1. **Google Search Console** : inscrivez votre domaine et soumettez votre `sitemap.xml`
2. **Google Business Profile** : vérifiez/complétez votre fiche Google Maps existante
3. **Favicon** : ajoutez un fichier `favicon.ico` à la racine (un 'AM' doré sur fond noir par exemple)

---

## Corrections responsive effectuées

- **"Qui sommes-nous"** : les 4 stat-cards passent en colonne unique sur mobile (≤600px), espacement corrigé
- **"Infos"** : la grille force 1 colonne sur mobile, 2 colonnes sur tablette
- Les onglets tarifs scrollent horizontalement sur mobile sans créer de débordement
- Breakpoints ajoutés pour très petits écrans (≤380px)
