## 💬 HA_Homedashboard Theme Datei 

Wenn Ihr das Dashobard über Hacs installiert habt, findet die Hintgrund Datei im Ordner `www/community/HA_homedashboard/`. Einfach Codebeispiel in der configruation.yaml oben hinzufügen und ihr
könnt im Anschluss unter Einstellungen (Person) das Theme ganz normal auswählen.

<img width="75%" alt="HA_homedashboard_theme" src="https://raw.githubusercontent.com/jayjojayson/HA_homedashboard/main/docs/images/HA_homedashboard_theme.png" />


Wenn Ihr genau die Farbgestaltung haben möchtet, wie auf den Vorschaubildern zu sehen, könnt ihr HACS für die Installation nutzen oder könnt euch die HA_Homedashboard Theme Yaml in euer HA 
impotieren. Dazu ladet ihr euch die Datei herunter und geht anschließend in den FileEditor bei Home Assistant. Dort fügt ihr die Datei in den config Ordner oder in den lokal Ordner.
Der Speicherort spielt eigentlich keine Rolle. Die Theme-Datei wird von HA automatisch erkannt. 

Das Theme ist in drei Stücke aufgeteilt, das Haupttheme, grey-icon und temps. Grey-icon nutze ich manchmal um die Icon auf grau zu setzen und Temps um Standardtemeperaturwerte einzufärben.

Damit das Theme funktioniert müsst ihr in der configuration.yaml gleich am Anfang folgendes hinzufügen (Beispiel)
```yaml
frontend:
  themes: !include www/community/HA_homedashboard/HA_homedashboard_theme.yaml
```

Nachdem einfügen des Themes könnt ihr, wie gewohnt, unter Benutzereinstellungen das Theme auswählen. Es wird dann autormatisch übernommen und gespeichert. 
Wenn ihr auch das Hintergrundfoto nutzen möchtet, findet ihr es im Ordner images oder wird über Hacs mit installiert und liegt im Ordner `www/community/HA_homedashboard/`.
Das müsst ihr dann händisch auf jeder Seite als Hintergrund hinterlegen/hochladen oder Link zum Pfadordner hinterlegen.