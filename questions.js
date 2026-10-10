/* Banque de questions 1BAC SM (partagée par Math Arena et le défi du jour).
   Format : add("Chapitre",[ ["question",["bonne réponse","faux 1","faux 2","faux 3"],"explication"], ... ]);
   La bonne réponse est toujours en premier. Maths en LaTeX entre $...$ */
window.QB=(function(){const B={};const add=(c,l)=>B[c]=l;


add("Logique",[
["Négation de « $\\forall x\\in \\mathbb{R}, \\exists y\\in \\mathbb{R}, x+y=0$ » ?",["$\\exists x\\in \\mathbb{R}, \\forall y\\in \\mathbb{R}, x+y\\ne 0$","$\\forall x\\in \\mathbb{R}, \\exists y\\in \\mathbb{R}, x+y\\ne 0$","$\\exists x\\in \\mathbb{R}, \\exists y\\in \\mathbb{R}, x+y\\ne 0$","$\\forall x\\in \\mathbb{R}, \\forall y\\in \\mathbb{R}, x+y\\ne 0$"],"On change chaque quantificateur (on échange $\\forall$ et $\\exists )$ puis on nie la propriété finale."],
["Pour montrer « $n^{2}$ pair $\\Rightarrow n$ pair » par contraposée, on montre :",["$n$ impair $\\Rightarrow n^{2}$ impair","$n$ pair $\\Rightarrow n^{2}$ pair","$n^{2}$ impair $\\Rightarrow n$ impair","$n^{2}$ pair $\\Rightarrow n$ impair"],"La contraposée de $P\\Rightarrow Q$ est non $Q \\Rightarrow$ non $P$."],
["Quelle proposition est vraie ?",["$\\exists x\\in \\mathbb{R}, x^{2} < x$","$\\forall x\\in \\mathbb{R}, x^{2} \\ge x$","$\\forall x\\in \\mathbb{R}, x^{2} > 0$","$\\exists x\\in \\mathbb{R}, x^{2} < 0$"],"Pour $x = \\frac{1}{2} : x^{2} = \\frac{1}{4} < \\frac{1}{2}$. Les autres sont fausses $(x = 0$ ou $x = \\frac{1}{2}$ comme contre-exemples)."],
["En prouvant par l'absurde que $\\sqrt{2}$ est irrationnel $(\\sqrt{2} = p/q$ irréductible), on aboutit à :",["$p$ et $q$ sont tous les deux pairs","$p$ et $q$ sont tous les deux impairs","$p = q$","$q = 0$"],"$p^{2} = 2q^{2}$ donne $p$ pair, puis $q$ pair : contradiction avec l'irréductibilité."],
["Négation de « $\\forall \\varepsilon >0, \\exists N\\in \\mathbb{N}, \\forall n\\ge N, |u_{n}|<\\varepsilon$ » ?",["$\\exists \\varepsilon >0, \\forall N\\in \\mathbb{N}, \\exists n\\ge N, |u_{n}|\\ge \\varepsilon$","$\\forall \\varepsilon >0, \\exists N\\in \\mathbb{N}, \\exists n\\ge N, |u_{n}|\\ge \\varepsilon$","$\\exists \\varepsilon >0, \\exists N\\in \\mathbb{N}, \\forall n\\ge N, |u_{n}|\\ge \\varepsilon$","$\\exists \\varepsilon \\le 0, \\forall N\\in \\mathbb{N}, \\exists n\\ge N, |u_{n}|<\\varepsilon$"],"Les quantificateurs s'inversent, et « $<$ » devient « $\\ge$ »."],
["L'implication $P \\Rightarrow Q$ est fausse seulement si :",["$P$ est vraie et $Q$ est fausse","$P$ est fausse et $Q$ est vraie","$P$ et $Q$ sont fausses","$P$ et $Q$ sont vraies"],"Une implication n'est fausse que dans ce seul cas."]]);

add("Trigonométrie",[
["$\\cos (\\pi /12) =$ ?",["$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$","$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$","$\\frac{\\sqrt{3}+1}{4}$","$\\sqrt{3}/2$"],"$\\cos (\\pi /4 - \\pi /6) = \\cos (\\pi /4)\\cos (\\pi /6) + \\sin (\\pi /4)\\sin (\\pi /6) = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$."],
["Solutions de $2\\cos x - 1 = 0$ dans $[0, 2\\pi [$ :",["$\\pi /3$ et $5\\pi /3$","$\\pi /6$ et $11\\pi /6$","$\\pi /3$ et $2\\pi /3$","$\\pi /6$ et $5\\pi /6$"],"$\\cos x = \\frac{1}{2} = \\cos (\\pi /3)$, donc $x = \\pm \\pi /3 + 2k\\pi$."],
["$\\sin (3x) =$ ?",["$3\\sin x - 4\\sin ^{3}x$","$4\\sin ^{3}x - 3\\sin x$","$3\\sin x + 4\\sin ^{3}x$","$3\\sin x \\cos x$"],"$\\sin (2x+x) = \\sin 2x\\cdot \\cos x + \\cos 2x\\cdot \\sin x$, puis on simplifie."],
["$\\tan (\\pi /8) =$ ?",["$\\sqrt{2} - 1$","$\\sqrt{2} + 1$","$\\frac{1}{2}$","$\\frac{\\sqrt{2}-1}{2}$"],"$\\tan (2a) = 2t/(1-t^{2})$ avec $2a = \\pi /4$ donne $t^{2} + 2t - 1 = 0$ et $t > 0$."],
["$\\cos x + \\sqrt{3} \\sin x =$ ?",["$2\\cos (x - \\pi /3)$","$2\\cos (x + \\pi /3)$","$2\\sin (x - \\pi /3)$","$2\\cos (x - \\pi /6)$"],"$2\\cos (x-\\pi /3) = 2(\\cos x\\cdot \\frac{1}{2} + \\sin x\\cdot \\sqrt{3}/2) = \\cos x + \\sqrt{3} \\sin x$."],
["Solutions de $\\sin x = \\sin (\\pi /5)$ dans $\\mathbb{R}$ :",["$\\pi /5 + 2k\\pi$ ou $4\\pi /5 + 2k\\pi$","$\\pi /5 + 2k\\pi$ ou $-\\pi /5 + 2k\\pi$","$\\pi /5 + k\\pi$","$\\pi /5 + 2k\\pi$ ou $6\\pi /5 + 2k\\pi$"],"$\\sin a = \\sin b \\Leftrightarrow a = b + 2k\\pi$ ou $a = \\pi - b + 2k\\pi$."]]);

add("Suites",[
["$u_{0} = 1$ et $u_{n+1} = 2u_{n} + 3$. Alors $u_{n} =$ ?",["$2^{n+2} - 3$","$2^{n+1} - 1$","$3\\cdot 2^{n} - 2$","$2^{n} + 3$"],"$v_{n} = u_{n} + 3$ est géométrique de raison $2$ et $v_{0} = 4$, donc $u_{n} = 4\\cdot 2^{n} - 3$."],
["Suite géométrique de raison $\\frac{1}{2}$ et $u_{0} = 8$. Somme $u_{0} +$ … $+ u_{9} =$ ?",["$16 - \\frac{1}{64}$","$8 - \\frac{1}{64}$","$16 - \\frac{1}{1024}$","$16 - \\frac{1}{32}$"],"$S = 8\\cdot (1 - (\\frac{1}{2})^{10})/(\\frac{1}{2}) = 16(1 - \\frac{1}{1024}) = 16 - \\frac{1}{64}$."],
["$u_{n} = \\frac{2n+1}{n+3}$. La suite est :",["croissante et majorée par $2$","décroissante","croissante et non majorée","non monotone"],"$u_{n+1} - u_{n} = 5/((n+4)(n+3)) > 0$ et $u_{n} = 2 - 5/(n+3) < 2$."],
["Suite arithmétique avec $u_{3} = 7$ et $u_{8} = 22$. Alors $u_{20} =$ ?",["$58$","$61$","$55$","$62$"],"Raison $r = \\frac{22-7}{5} = 3, u_{0} = -2$, donc $u_{20} = -2 + 60 = 58$."],
["$u_{0} = 0$ et $u_{n+1} = \\sqrt{u_{n} + 2}$. La limite est :",["$2$","$1$","$\\sqrt{2}$","$-1$"],"La limite $ℓ$ vérifie $ℓ^{2} = ℓ + 2$ avec $ℓ \\ge 0$, donc $ℓ = 2$."],
["$\\sum k^{2}$ pour $k = 1$ à $n$ vaut :",["$n(n+1)\\frac{2n+1}{6}$","$n\\frac{n+1}{2}$","$n^{2}(n+1)^{2}/4$","$n(n+1)\\frac{n+2}{6}$"],"Vérification avec $n = 3 : 1+4+9 = 14 = 3\\cdot 4\\cdot \\frac{7}{6}$."]]);

add("Dérivation",[
["$f(x) = x/(x^{2}+1). f'(x) =$ ?",["$(1 - x^{2})/(x^{2}+1)^{2}$","$(1 + x^{2})/(x^{2}+1)^{2}$","$(x^{2} - 1)/(x^{2}+1)^{2}$","$1/(2x)$"],"$(u/v)' = (u'v - uv')/v^{2} = ((x^{2}+1) - 2x^{2})/(x^{2}+1)^{2}$."],
["$f(x) = \\sqrt{x^{2}+1}. f'(x) =$ ?",["$x/\\sqrt{x^{2}+1}$","$1/(2\\sqrt{x^{2}+1})$","$2x/\\sqrt{x^{2}+1}$","$x\\sqrt{x^{2}+1}$"],"$(\\sqrt{u})' = u'/(2\\sqrt{u}) = 2x/(2\\sqrt{x^{2}+1})$."],
["$f(x) = \\sin ^{2}x. f'(x) =$ ?",["$\\sin 2x$","$2\\sin x$","$\\cos ^{2}x$","$2\\cos ^{2}x$"],"$(u^{2})' = 2u'u = 2 \\sin x \\cos x = \\sin 2x$."],
["Tangente à $f(x) = x^{3} - 3x + 1$ en $x = 2$ :",["$y = 9x - 15$","$y = 9x + 3$","$y = 3x - 3$","$y = 9x - 3$"],"$f(2) = 3$ et $f'(2) = 9$, donc $y = 9(x - 2) + 3$."],
["$f(x) = x^{3} - 3x^{2}. f$ est décroissante sur :",["$[0, 2]$","$]-\\infty , 0]$","$[2, +\\infty [$","$\\mathbb{R}$"],"$f'(x) = 3x(x - 2) \\le 0$ sur $[0, 2]$."],
["$\\lim x\\to 0$ de $\\sin (3x)/x =$ ?",["$3$","$1$","$0$","$+\\infty$"],"C'est le nombre dérivé de $x \\mapsto \\sin (3x)$ en $0$, soit $3\\cos (0) = 3$."]]);

add("Limites",[
["$\\lim x\\to +\\infty$ de $(\\sqrt{x^{2}+x} - x) =$ ?",["$\\frac{1}{2}$","$0$","$1$","$+\\infty$"],"Quantité conjuguée : $x/(\\sqrt{x^{2}+x}+x) \\to \\frac{1}{2}$."],
["$\\lim x\\to 1$ de $\\frac{x^{3}-1}{x^{2}-1} =$ ?",["$\\frac{3}{2}$","$1$","$2$","$0$"],"$(x-1)(x^{2}+x+1)/((x-1)(x+1)) \\to \\frac{3}{2}$."],
["$\\lim x\\to 0$ de $(1 - \\cos x)/x^{2} =$ ?",["$\\frac{1}{2}$","$1$","$0$","$2$"],"$1 - \\cos x = 2\\sin ^{2}(x/2)$, donc la limite vaut $2\\cdot (\\frac{1}{4}) = \\frac{1}{2}$."],
["$\\lim x\\to +\\infty$ de $x\\cdot \\sin (1/x) =$ ?",["$1$","$0$","$+\\infty$","n'existe pas"],"On pose $t = 1/x \\to 0$ et $\\sin t / t \\to 1$."],
["$\\lim x\\to 0^{+}$ de $x\\cdot E(1/x)$ (où $E$ est la partie entière) $=$ ?",["$1$","$0$","$+\\infty$","n'existe pas"],"$1/x - 1 < E(1/x) \\le 1/x$, donc $1 - x < x\\cdot E(1/x) \\le 1$ : théorème des gendarmes."],
["$\\lim x\\to -\\infty$ de $(\\sqrt{x^{2}+1} + x) =$ ?",["$0$","$1$","$-\\infty$","$\\frac{1}{2}$"],"$\\sqrt{x^{2}+1} + x = 1/(\\sqrt{x^{2}+1} - x) \\to 0$ car le dénominateur tend vers $+\\infty$."]]);

add("Produit scalaire",[
["$AB = 3, AC = 4$ et l'angle en $A$ mesure $60^{\\circ}$. Que vaut $\\overrightarrow{AB}\\cdot \\overrightarrow{AC}$ ?",["$6$","$12$","$6\\sqrt{3}$","$7$"],"$AB\\cdot AC\\cdot \\cos 60^{\\circ} = 3\\times 4\\times \\frac{1}{2} = 6$."],
["Théorème de la médiane $(I$ milieu de $[AB]) : MA^{2} + MB^{2} =$ ?",["$2MI^{2} + AB^{2}/2$","$2MI^{2} + AB^{2}$","$MI^{2} + AB^{2}/2$","$4MI^{2} + AB^{2}/2$"],"On développe avec $\\overrightarrow{MA} = \\overrightarrow{MI} + \\overrightarrow{IA}$ et $\\overrightarrow{MB} = \\overrightarrow{MI} + \\overrightarrow{IB}$, avec $\\overrightarrow{IB} = -\\overrightarrow{IA}$."],
["L'ensemble des points $M$ tels que $\\overrightarrow{MA}\\cdot \\overrightarrow{MB} = 0$ est :",["le cercle de diamètre $[AB]$","la médiatrice de $[AB]$","la droite $(AB)$","le cercle de centre $A$ passant par $B$"],"$\\overrightarrow{MA}\\cdot \\overrightarrow{MB} = 0$ signifie que l'angle $AMB$ est droit (ou $M = A, M = B)$."],
["$\\Vert u\\Vert = 2, \\Vert v\\Vert = 3, u\\cdot v = -3$. Alors $\\Vert u - v\\Vert =$ ?",["$\\sqrt{19}$","$\\sqrt{7}$","$\\sqrt{13}$","$5$"],"$\\Vert u - v\\Vert ^{2} = 4 + 9 - 2(-3) = 19$."],
["Distance du point $(1, 2)$ à la droite $3x - 4y + 2 = 0$ :",["$\\frac{3}{5}$","$3$","$1$","$\\frac{5}{3}$"],"$|3 - 8 + 2| / \\sqrt{9+16} = \\frac{3}{5}$."],
["Rayon du cercle $x^{2} + y^{2} - 2x + 4y - 4 = 0$ :",["$3$","$2$","$\\sqrt{5}$","$9$"],"$(x-1)^{2} + (y+2)^{2} = 9$, centre $(1, -2)$, rayon $3$."]]);

add("Dénombrement",[
["Nombre d'anagrammes du mot « ANASS » :",["$30$","$120$","$60$","$24$"],"$5!/(2!\\cdot 2!) = \\frac{120}{4} = 30$ (deux $A$ et deux $S$ identiques)."],
["Urne : $5$ boules rouges et $4$ vertes. On tire $3$ boules simultanément. Combien de tirages contiennent au moins une verte ?",["$74$","$84$","$64$","$80$"],"Total $C(9,3) = 84$, moins les tirages tout rouge $C(5,3) = 10 : 74$."],
["Nombres à $3$ chiffres distincts formés avec $1, 2, 3, 4, 5$ :",["$60$","$125$","$10$","$120$"],"$A(5,3) = 5\\times 4\\times 3 = 60$."],
["$C(n, 2) = 45$. Alors $n =$ ?",["$10$","$9$","$11$","$12$"],"$n\\frac{n-1}{2} = 45$ donne $n^{2} - n - 90 = 0$, donc $n = 10$."],
["$5$ personnes sur $5$ chaises alignées. Deux d'entre elles veulent être côte à côte. Combien de façons ?",["$48$","$24$","$96$","$120$"],"On colle les deux : $4$! placements $\\times 2$ ordres internes $= 48$."],
["Nombre de parties (sous-ensembles) d'un ensemble à $6$ éléments :",["$64$","$36$","$720$","$32$"],"$\\sum C(6, k) = 2^{6} = 64$."]]);

add("Ensembles et applications",[
["$f : \\mathbb{R} \\to \\mathbb{R}, x \\mapsto x^{2}$. Cette application est :",["ni injective ni surjective","bijective","injective non surjective","surjective non injective"],"$f(-1) = f(1)$ donc pas injective, et $-1$ n'a aucun antécédent donc pas surjective."],
["$f : \\mathbb{R} \\to \\mathbb{R}, x \\mapsto 2x + 1$ est bijective. Sa réciproque est :",["$f^{-1}(x) = \\frac{x - 1}{2}$","$f^{-1}(x) = \\frac{x + 1}{2}$","$f^{-1}(x) = 2x - 1$","$f^{-1}(x) = 1/(2x + 1)$"],"On résout $y = 2x + 1$ pour $x : x = \\frac{y - 1}{2}$."],
["Nombre de parties de $E = {1, 2, 3}$ :",["$8$","$6$","$9$","$3$"],"Un ensemble à $n$ éléments possède $2^{n}$ parties : $2^{3} = 8$."],
["Le complémentaire de $A \\cup B$ est :",["$A^{c} \\cap B^{c}$","$A^{c} \\cup B^{c}$","$A^{c} \\cap B$","$A \\cap B$"],"Lois de De Morgan : $(A \\cup B)^{c} = A^{c} \\cap B^{c}$."],
["$f : \\mathbb{N} \\to \\mathbb{N}, n \\mapsto n + 1$ est :",["injective non surjective","bijective","surjective non injective","ni injective ni surjective"],"$0$ n'a pas d'antécédent dans $\\mathbb{N}$, mais $f(a) = f(b)$ entraîne $a = b$."],
["Pour toute application $f$, on a toujours :",["$f(A \\cap B) \\subset f(A) \\cap f(B)$","$f(A \\cap B) = f(A) \\cap f(B)$","$f(A) \\cap f(B) \\subset f(A \\cap B)$","$f(A \\cup B) \\subset f(A) \\cap f(B)$"],"L'égalité n'est vraie que si $f$ est injective."]]);

add("Généralités sur les fonctions",[
["Ensemble de définition de $f(x) = \\sqrt{x - 1}/(x - 3)$ :",["$[1, 3[ \\cup ]3, +\\infty [$","$]1, +\\infty [$","$[1, +\\infty [$","$]1, 3[ \\cup ]3, +\\infty [$"],"Il faut $x - 1 \\ge 0$ et $x \\ne 3$."],
["$f(x) = x^{3} + x$ est :",["impaire","paire","ni paire ni impaire","périodique"],"$f(-x) = -x^{3} - x = -f(x)$, et le domaine est symétrique."],
["Période de $f(x) = \\cos (2x)$ :",["$\\pi$","$2\\pi$","$\\pi /2$","$4\\pi$"],"$\\cos (2(x + \\pi )) = \\cos (2x + 2\\pi ) = \\cos (2x)$."],
["$f(x) = x + 1$ et $g(x) = x^{2}$. Alors $(g\\circ f)(x) =$ ?",["$(x + 1)^{2}$","$x^{2} + 1$","$x^{2} + x$","$x + 1$"],"$(g\\circ f)(x) = g(f(x)) = (x + 1)^{2}$."],
["$f(x) = x^{2} - 4x + 3$ admet :",["un minimum égal à $-1$ en $x = 2$","un maximum égal à $-1$ en $x = 2$","un minimum égal à $3$ en $x = 0$","un minimum égal à $-1$ en $x = -2$"],"$f(x) = (x - 2)^{2} - 1$."],
["La courbe d'une fonction paire est symétrique par rapport :",["à l'axe des ordonnées","à l'axe des abscisses","à l'origine","à la droite $y = x$"],"$f(-x) = f(x)$ : les points $M(x, y)$ et $M'(-x, y)$ sont symétriques par rapport à (Oy)."]]);

add("Étude de fonctions",[
["$f(x) = \\frac{2x + 1}{x - 1}$. Asymptotes :",["$x = 1$ et $y = 2$","$x = -1$ et $y = 2$","$x = 1$ et $y = 1$","$x = 2$ et $y = \\frac{1}{2}$"],"Dénominateur nul en $1$, et $\\lim f(x) = 2$ en $\\pm \\infty$."],
["$f(x) = x + 1/x$ sur $]0, +\\infty [$ admet un minimum égal à :",["$2$, atteint en $x = 1$","$1$, atteint en $x = 1$","$2$, atteint en $x = 2$","$0$"],"$f'(x) = 1 - 1/x^{2}$ s'annule en $1$ et $f(1) = 2$."],
["$f(x) = x^{3} - 3x$. Extremum local :",["maximum égal à $2$ en $x = -1$","minimum égal à $2$ en $x = -1$","maximum égal à $-2$ en $x = -1$","maximum égal à $2$ en $x = 1$"],"$f'(x) = 3(x^{2} - 1)$ change de $+$ à $-$ en $-1$, et $f(-1) = 2$."],
["$f(x) = x^{3} - 3x + 1$. Point d'inflexion en :",["$x = 0$","$x = 1$","$x = -1$","il n'y en a pas"],"$f''(x) = 6x$ change de signe en $0$."],
["$f(x) = x^{2}/(x - 1)$. Asymptote oblique :",["$y = x + 1$","$y = x$","$y = x - 1$","$y = 2x + 1$"],"$x^{2}/(x - 1) = x + 1 + 1/(x - 1)$."],
["Nombre de solutions réelles de $x^{3} - 3x + 1 = 0$ :",["$3$","$1$","$2$","$0$"],"$f(-2) < 0, f(-1) > 0, f(1) < 0, f(2) > 0$ : trois changements de signe."]]);

add("Barycentre",[
["$G$ barycentre de $(A, 2)$ et $(B, 3)$. Alors $\\overrightarrow{AG} =$ ?",["$(\\frac{3}{5})\\cdot \\overrightarrow{AB}$","$(\\frac{2}{5})\\cdot \\overrightarrow{AB}$","$(\\frac{2}{3})\\cdot \\overrightarrow{AB}$","$(\\frac{3}{2})\\cdot \\overrightarrow{AB}$"],"$\\overrightarrow{AG} = (\\beta /(\\alpha +\\beta ))\\cdot \\overrightarrow{AB} = \\frac{3}{5} \\overrightarrow{AB}$."],
["$G$ barycentre de $(A, \\alpha )$ et $(B, \\beta )$ avec $\\alpha + \\beta \\ne 0$. Pour tout point $M$ :",["$\\alpha \\cdot \\overrightarrow{MA} + \\beta \\cdot \\overrightarrow{MB} = (\\alpha + \\beta )\\cdot \\overrightarrow{MG}$","$\\alpha \\cdot \\overrightarrow{MA} + \\beta \\cdot \\overrightarrow{MB} = \\overrightarrow{MG}$","$\\alpha \\cdot \\overrightarrow{MA} - \\beta \\cdot \\overrightarrow{MB} = (\\alpha - \\beta )\\cdot \\overrightarrow{MG}$","$\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\cdot \\overrightarrow{MG}$"],"C'est la propriété caractéristique du barycentre."],
["$A(1, 2), B(5, -2)$ et $G$ barycentre de $(A, 3), (B, 1)$. Alors $G a$ pour coordonnées :",["$(2, 1)$","$(3, 0)$","$(4, -1)$","$(1,5 ; 1,5)$"],"$x = \\frac{3\\cdot 1 + 5}{4} = 2$ et $y = \\frac{3\\cdot 2 - 2}{4} = 1$."],
["Dans $ABC, G$ est le centre de gravité et $I$ le milieu de $[BC]$. Alors $\\overrightarrow{AG} =$ ?",["$(\\frac{2}{3})\\cdot \\overrightarrow{AI}$","$(\\frac{1}{3})\\cdot \\overrightarrow{AI}$","$(\\frac{1}{2})\\cdot \\overrightarrow{AI}$","$(\\frac{3}{4})\\cdot \\overrightarrow{AI}$"],"$G$ barycentre de $(A,1),(B,1),(C,1)$ donc de $(A,1),(I,2)$."],
["$I$ milieu de $[AB], AB = 6$. L'ensemble des points $M$ tels que $\\Vert \\overrightarrow{MA} + \\overrightarrow{MB}\\Vert = 4$ est :",["le cercle de centre $I$ et de rayon $2$","le cercle de centre $I$ et de rayon $4$","une droite","le cercle de centre $A$ et de rayon $2$"],"$\\overrightarrow{MA} + \\overrightarrow{MB} = 2\\cdot \\overrightarrow{MI}$, donc $MI = 2$."],
["Le barycentre de $(A, \\alpha )$ et $(B, \\beta )$ existe si et seulement si :",["$\\alpha + \\beta \\ne 0$","$\\alpha \\ne \\beta$","$\\alpha > 0$ et $\\beta > 0$","$\\alpha \\cdot \\beta \\ne 0$"],"Il faut que la somme des coefficients soit non nulle."]]);

add("Rotation",[
["Repère orthonormé direct. L'image de $A(3, 1)$ par la rotation de centre $O$ et d'angle $\\pi /2$ est :",["$(-1, 3)$","$(1, -3)$","$(3, -1)$","$(-3, 1)$"],"$(x, y) \\mapsto (-y, x)$ pour un quart de tour direct."],
["Composée de deux rotations de même centre $O$ et d'angles $\\theta$ et $\\theta '$ :",["rotation de centre $O$ et d'angle $\\theta + \\theta '$","rotation d'angle $\\theta \\cdot \\theta '$","une translation","une symétrie axiale"],"Les angles s'additionnent."],
["Une rotation conserve :",["les distances et les angles orientés","les distances seulement","les aires mais pas les distances","les directions des droites"],"C'est un déplacement : isométrie directe."],
["$r$ est la rotation de centre $O$ et d'angle $2\\pi /3$. Que vaut $r\\circ r\\circ r$ ?",["l'identité","la rotation d'angle $\\pi$","une symétrie centrale","la rotation d'angle $2\\pi /3$"],"Angle total $= 3 \\times 2\\pi /3 = 2\\pi$."],
["$ABC$ est équilatéral direct. La rotation qui envoie $B$ sur $C$ est celle de :",["centre $A$ et d'angle $\\pi /3$","centre $A$ et d'angle $-\\pi /3$","centre $B$ et d'angle $\\pi /3$","centre $C$ et d'angle $2\\pi /3$"],"$AB = AC$ et $(\\overrightarrow{AB}, \\overrightarrow{AC}) = \\pi /3$."],
["La symétrie centrale de centre $O$ est la rotation de centre $O$ et d'angle :",["$\\pi$","$\\pi /2$","$0$","$3\\pi /2$"],"Un demi-tour."]]);

add("Géométrie dans l'espace",[
["Combien de plans passent par trois points non alignés ?",["un seul","aucun","deux","une infinité"],"Trois points non alignés déterminent un unique plan."],
["Deux plans de l'espace non parallèles se coupent suivant :",["une droite","un point","un plan","l'ensemble vide"],"Leur intersection est une droite."],
["Repère orthonormé. $A(1, 2, 3)$ et $B(3, 0, 2). AB =$ ?",["$3$","$9$","$\\sqrt{5}$","$2\\sqrt{2}$"],"$AB^{2} = 4 + 4 + 1 = 9$."],
["$u(1, 2, -1)$ et $v(2, -1, 0)$ sont :",["orthogonaux","colinéaires","égaux","opposés"],"$u\\cdot v = 2 - 2 + 0 = 0$."],
["Plan d'équation $x + 2y - z = 0$. Un vecteur normal est :",["$(1, 2, -1)$","$(1, 2, 1)$","$(-1, 2, 1)$","$(2, 1, -1)$"],"Les coefficients de $x, y, z$ donnent un vecteur normal."],
["Une droite orthogonale à deux droites sécantes d'un plan $P$ est :",["orthogonale au plan $P$","parallèle à $P$","incluse dans $P$","sécante à $P$ sans lui être orthogonale"],"C'est le critère d'orthogonalité droite-plan."]]);

add("Arithmétique dans ℤ",[
["$\\operatorname{PGCD}(84, 36) =$ ?",["$12$","$6$","$18$","$4$"],"$84 = 2\\times 36 + 12$ et $36 = 3\\times 12$ : le dernier reste non nul est $12$."],
["Reste de la division de $2^{10}$ par $7$ :",["$2$","$1$","$4$","$3$"],"$2^{3} = 8 \\equiv 1$ (mod $7)$, donc $2^{10} = (2^{3})^{3}\\cdot 2 \\equiv 2$."],
["$\\operatorname{PGCD}(n, n + 1)$ pour tout $n \\in \\mathbb{N}*$ :",["$1$","$n$","$2$","$n + 1$"],"Un diviseur commun divise $(n + 1) - n = 1$."],
["Nombre de diviseurs positifs de $36$ :",["$9$","$8$","$6$","$12$"],"$36 = 2^{2}\\cdot 3^{2}$, donc $(2+1)(2+1) = 9$."],
["Pour tout entier $n, n(n + 1)$ est :",["pair","impair","multiple de $3$","multiple de $4$"],"L'un des deux entiers consécutifs est pair."],
["Reste de la division de $7^{2026}$ par $5$ :",["$4$","$1$","$2$","$3$"],"$7 \\equiv 2$ (mod $5), 2^{4} \\equiv 1$, et $2026 = 4\\times 506 + 2$, donc $2^{2} = 4$."]]);

add("Équations et inéquations",[
["Solutions de $x^{2} - 5x + 6 \\le 0$ :",["$[2, 3]$","$]-\\infty , 2] \\cup [3, +\\infty [$","$]2, 3[$","$[-3, -2]$"],"$(x - 2)(x - 3) \\le 0$ entre les racines."],
["$2x^{2} - 6x + 4 = 0$. Somme et produit des racines :",["somme $3$, produit $2$","somme $6$, produit $4$","somme $-3$, produit $2$","somme $3$, produit $4$"],"$S = -b/a = 3$ et $P = c/a = 2$."],
["$x^{2} - 2mx + m + 2 = 0$ admet une racine double si :",["$m = -1$ ou $m = 2$","$m = 1$ ou $m = -2$","$m = 2$ seulement","$m = -2$ ou $m = -1$"],"Δ $= 4(m^{2} - m - 2) = 4(m - 2)(m + 1) = 0$."],
["Solutions de $|2x - 1| < 3$ :",["$]-1, 2[$","$]-2, 4[$","$]-1, 1[$","$]-\\infty , -1[ \\cup ]2, +\\infty [$"],"$-3 < 2x - 1 < 3$ donne $-1 < x < 2$."],
["Solution de $\\sqrt{x + 2} = x$ :",["$x = 2$","$x = -1$","$x = 2$ et $x = -1$","aucune solution"],"$x^{2} - x - 2 = 0$ donne $x = 2$ ou $x = -1$, mais $x$ doit être $\\ge 0$."],
["$x + y = 5$ et xy $= 6$. Les couples solutions sont :",["$(2, 3)$ et $(3, 2)$","$(1, 6)$ et $(6, 1)$","$(-2, -3)$","$(4, 1)$ et $(1, 4)$"],"$x$ et $y$ sont les racines de $t^{2} - 5t + 6 = 0$."]]);
return B})();
