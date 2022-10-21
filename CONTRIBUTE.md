# Quellcode

## Schnittstellen

Contabo bietet unter https://api.contabo.com/ eine Schnittstelle an. Folgende Endpunkte werden verwendet:

| Endpunkt | Beschreibung |
| --- | --- |
| /v1/compute/instances | Liste aller Instant Server |
| /v1/compute/instances/audits | Liste aller Instant Server Audits |

## Authentifizierung

Die Authentifizierungsmöglichkeiten werden hier beschrieben: https://api.contabo.com/#section/Authentication

Für die App wird die Authentifizierung mit einem API Token verwendet. Dieser Token wird in der App gespeichert und bei jeder Anfrage an die Schnittstelle mitgeschickt.

## Datenbank

Die App speichert die Daten in einer SQLite Datenbank. Die Datenbank wird mit dem Paket [react-native-sqlite-storage]() verwaltet. Die Datenbank wird in der App im Ordner `db` gespeichert. Die Datenbank wird beim Start der App geladen und beim Beenden der App geschlossen.

Es verlassen keine Daten die App. Die Daten werden nur lokal in der App gespeichert.

### Tabellen

#### `servers`

| Spalte | Typ | Beschreibung |
| --- | --- | --- |
| id | INTEGER | Primärschlüssel |
| name | TEXT | Name des Servers |
| hostname | TEXT | Hostname des Servers |
| status | TEXT | Status des Servers |
| lastAudit | TEXT | Letzter Audit des Servers |
| lastAuditStatus | TEXT | Status des letzten Audits |
| lastAuditMessage | TEXT | Nachricht des letzten Audits |
| lastAuditDate | TEXT | Datum des letzten Audits |
| lastAuditTime | TEXT | Uhrzeit des letzten Audits |
| lastAuditDuration | TEXT | Dauer des letzten Audits |
| lastAuditDurationSeconds | INTEGER | Dauer des letzten Audits in Sekunden |
| lastAuditDurationMinutes | INTEGER | Dauer des letzten Audits in Minuten |

### `logs`

| Spalte | Typ | Beschreibung |
| --- | --- | --- |
| id | INTEGER | Primärschlüssel |
| serverId | INTEGER | Fremdschlüssel zu `servers.id` |
| date | TEXT | Datum des Logs |
| time | TEXT | Uhrzeit des Logs |
| message | TEXT | Nachricht des Logs |

## Screens

### `Home`

#### `HomeScreen`

Der `HomeScreen` zeigt eine Liste aller Server an. Die Liste wird aus der Datenbank geladen. Die Liste wird nach dem Datum des letzten Audits sortiert. Die Liste wird nach dem Status des letzten Audits gefiltert. Die Liste wird nach dem Status des Servers gefiltert.

#### `HomeScreenHeader`

Der `HomeScreenHeader` zeigt den Titel der App an. Der Titel der App ist `Contabo Audit App`. Der Titel der App ist in der App als Konstante `APP_TITLE` gespeichert.

#### `HomeScreenFooter`

Der `HomeScreenFooter` zeigt den Status der App an. Der Status der App ist `Aktualisieren`. Der Status der App wird in der App als Konstante `APP_STATUS` gespeichert.

### `Server`

#### `ServerScreen`

Der `ServerScreen` zeigt die Details eines Servers an. Die Details werden aus der Datenbank geladen. Die Details werden nach dem Datum des letzten Audits sortiert. Die Details werden nach dem Status des letzten Audits gefiltert. Die Details werden nach dem Status des Servers gefiltert.

#### `ServerScreenHeader`

Der `ServerScreenHeader` zeigt den Titel des Servers an. Der Titel des Servers ist `Servername`. Der Titel des Servers wird in der App als Konstante `SERVER_TITLE` gespeichert.

#### `ServerScreenFooter`

Der `ServerScreenFooter` zeigt den Status des Servers an. Der Status des Servers ist `Status`. Der Status des Servers wird in der App als Konstante `SERVER_STATUS` gespeichert.

### `Logs`

#### `LogsScreen`

Der `LogsScreen` zeigt die Logs eines Servers an. Die Logs werden aus der Datenbank geladen. Die Logs werden nach dem Datum des Logs sortiert. Die Logs werden nach dem Status des Logs gefiltert.

#### `LogsScreenHeader`

Der `LogsScreenHeader` zeigt den Titel des Servers an. Der Titel des Servers ist `Servername`. Der Titel des Servers wird in der App als Konstante `SERVER_TITLE` gespeichert.

#### `LogsScreenFooter`

Der `LogsScreenFooter` zeigt den Status des Servers an. Der Status des Servers ist `Status`. Der Status des Servers wird in der App als Konstante `SERVER_STATUS` gespeichert.

## Funktionen

### `getServers`

Die Funktion `getServers` holt sich die Liste aller Server von der Schnittstelle. Die Funktion `getServers` gibt die Liste der Server zurück.

### `getServerAudits`

Die Funktion `getServerAudits` holt sich die Liste aller Server Audits von der Schnittstelle. Die Funktion `getServerAudits` gibt die Liste der Server Audits zurück.

### `getServerLogs`

Die Funktion `getServerLogs` holt sich die Liste aller Server Logs von der Schnittstelle. Die Funktion `getServerLogs` gibt die Liste der Server Logs zurück.

## Komponenten

### `ServerList`

Der `ServerList` zeigt eine Liste aller Server an. Die Liste wird aus der Datenbank geladen. Die Liste wird nach dem Datum des letzten Audits sortiert. Die Liste wird nach dem Status des letzten Audits gefiltert. Die Liste wird nach dem Status des Servers gefiltert.

### `ServerListItem`

Der `ServerListItem` zeigt die Details eines Servers an. Die Details werden aus der Datenbank geladen. Die Details werden nach dem Datum des letzten Audits sortiert. Die Details werden nach dem Status des letzten Audits gefiltert. Die Details werden nach dem Status des Servers gefiltert.

### `ServerDetails`

Der `ServerDetails` zeigt die Details eines Servers an. Die Details werden aus der Datenbank geladen. Die Details werden nach dem Datum des letzten Audits sortiert. Die Details werden nach dem Status des letzten Audits gefiltert. Die Details werden nach dem Status des Servers gefiltert.

### `ServerLogs`

Der `ServerLogs` zeigt die Logs eines Servers an. Die Logs werden aus der Datenbank geladen. Die Logs werden nach dem Datum des Logs sortiert. Die Logs werden nach dem Status des Logs gefiltert.


