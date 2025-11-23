## 💬 HA_Homedashboard Theme Datei 

Wenn Ihr das Dashobard über Hacs installiert habt, findet die eine fertig und gebrauchsfähige Kopie der Card im Ordner `www/community/HA_homedashboard/`.

Wenn Ihr genau die Farbgestaltung haben möchtet, wie auf den Vorschaubildern zu sehen, könnt ihr HACS für die Installation nutzen oder könnt euch die HA_Homedashboard Theme Yaml in euer HA 
impotieren. Dazu ladet ihr euch die Datei herunter und geht anschließend in den FileEditor bei Home Assistant. Dort fügt ihr die Datei in den config Ordner oder in den lokal Ordner.
Der Speicherort spielt eigentlich keine Rolle. Die Theme-Datei wird von HA automatisch erkannt. 

Das Theme ist in drei Stück aufgeteilt, das Haupttheme, grey-icon und temps. Grey-icon nutze ich manchmal um die Icon auf grau zu setzen und Temps um Standardtemeperaturwerte einzufärben.

Nachdem einfügen des Theme könnt ihr, wie gewohnt, unter Benutzereinstellungen das Theme auswählen. Es wird dann autormatisch übernommen und gespeichert. 
Wenn ihr auch das Hintergrundfoto nutzen möchtet, findet ihr es im Ordner images. Das müsst ihr dann händisch auf jeder Seite hinterlegen/hochladen.

Damit das Theme funktioniert müsst ihr in der configuration.yaml gleich am Anfang folgendes hinzufügen (Beispiel)
```yaml
frontend:
  themes: !include www/community/HA_homedashboard/HA_homedashboard_theme.yaml
```
