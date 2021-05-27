# STFU Bakaláři
Taky tě štvou Bakaláři se svou skvělou a úžasnou funkcí automatického odhlašování kvůli bezpečnosti? Chtěl(a) by si nějaké řešení, které tě tohoto problému zbaví? Tak to jsi na správném místě!

# Užití
Tohle je web browser extension (rozšíření do prohlížeče). Stačí tedy rozšíření stáhnout, nastavit a nainstalovat.
### Jak stáhneš rozšíření?
Zklonuj přes `git clone` nebo si stáhni repozitář jako zip a rozbal.

### Jak rozšíření nastavíš?
Jelikož jsem línej a neudělal jsem nějaké pěkné nastavení, tak musíš tohle rozšíření nastavit tak, že upravíš zdroj, konkrétně [`manifest.json`](manifest.json). Zde na 15. řádce je klíč `matches`, ve kterém je array adres, bakalářů - tuto array si uprav tak, aby tam byla adresa/byly adresy Bakalářů, kde má tohle rozšíření fungovat.

### A teď jak nainstaluješ rozšíření?
Ve Chromu jdi na "adresu" `chrome://extensions/` a přidej/načti toto rozšíření. V ostatních prohlížečích netuším... eShrug Budeš muset googlit.

# Kompatibilita
Testováno pouze na Chromu, ale samotný extension nevyužívá žádné "browser-specific" API, takže pokud to do nějakého prohlížeče dostaneš, tak to bude pravděpodobně fungovat. Ano, "*pokud*". Problém totiž může nastat, že určité prohlížeče nemusí dovolit instalaci nepodepsaných/neschválených rozšíření (koukám se na tebe Firefoxi), ale reálně nevím, jestli tohle vůbec je pravda, protože je to založeno jen na nějakých textech, co jsem našel při tvoření tohoto rozšíření.

# Jak to funguje?
Celý kód jsou vlastně 3 řádky kódu v [`STFU Bakalari.js`](STFU%20Bakalari.js), s tím že ta podstatná je druhá, kde je prakticky napsáno, že každých 30 sekund udělej request na "sessionextend" endpoint a tím se prodlouží současná session. 1. a 2. řádka prakticky jen daný kód aktivují.

*Pozn.: Actually se session neprodlouží každých 30 sekund, jelikož session se může prodloužit až ve chvíli, kdy uplynulo přes polovinu její životnosti. Pokud tě zajímá víc, podívej se na můj projekt `Bakaláři API`, kde je i dokumentace i tomuto endpointu.*

*Pozn.: Možná tě zajímá, proč se samotný kód, který něco dělá, vkládá přes `<script>` tag (navíc ještě v IIFE), když se může napsat rovnou... Well - nemůže. Hlavní problém je ten, využívám proměnnou `appRoot`, další problém je ten, že využívám jQuerry, které se importuje v Bakalářích. Oba problémy by šly vyřešit, ale jelikož zápis toho samotného intervalu jsem měl za minutu hotový, tak jsem to už nechtěl měnit.*