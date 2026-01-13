/*
 * HA_homedashboard - Info & Placeholder
 * =====================================
 *
 * Diese Datei dient primär als Anker für HACS, damit YAML-Dateien installiert werden.
 * Falls ein User diese Ressource versehentlich als Karte in Lovelace einbindet,
 * wird ein informativer Hinweis angezeigt.
 */

console.info(
    "%c HA_homedashboard %c Assets erfolgreich geladen ",
    "color: white; background: #03a9f4; font-weight: 700; padding: 2px 5px; border-radius: 3px 0 0 3px;",
    "color: #03a9f4; background: white; font-weight: 700; padding: 2px 5px; border: 1px solid #03a9f4; border-radius: 0 3px 3px 0;"
);

class HAHomedashboardInfo extends HTMLElement {
    
    // Wird aufgerufen, wenn Home Assistant die Konfiguration setzt
    setConfig(config) {
        this._config = config;
        this.render();
    }

    // Damit Home Assistant weiß, dass es funktioniert
    getCardSize() {
        return 1;
    }

    render() {
        this.innerHTML = `
            <ha-card header="HA_homedashboard Info">
                <div style="padding: 16px; color: var(--primary-text-color);">
                    <b>Dies ist keine funktionale Karte!</b><br><br>
                    Dieses Paket enthält YAML-Dateien und Vorlagen für dein Dashboard.<br>
                    Bitte lies die <a href="https://github.com/jayjojayson/HA_homedashboard" target="_blank">Dokumentation auf GitHub</a>, 
                    um zu erfahren, wie du die YAML-Dateien per <code>!include</code> einbindest.
                </div>
            </ha-card>
        `;
    }
}

// Registriert das Element, damit HA es kennt (verhindert rote Fehlerboxen)
customElements.define("ha-homedashboard-info", HAHomedashboardInfo);
