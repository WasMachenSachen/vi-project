# Ordnungsruf Explorer - Im Modul Visualisierung

## Basic Info

<!-- The project title, your names, e-mail addresses, student
number, a link to the project URL (this link should provide all
files of your project). -->

| Name           | E-Mail                     | Matrikelnummer |
|----------------|----------------------------|----------------|
| Yannic Brügger |                            |                |
| Jan Koll       | jan.koll@smail.th-koeln.de | 11125790       |
| Sven Linßen    | sven.linssen@th-koeln.de   | 11089166       |
| Tim Loges      |                            |                |

**Projekt Link** https://github.com/WasMachenSachen/vi-project


## Background and Motivation

<!-- Discuss your motivations and reasons for choosing this project,
especially any background or research interests that may have
influenced your decision. -->

Der Ordnungsruf Explorer ist als Idee aufgekommen, als die letzte Wahl des Deutschen Bundestages erst wenige Wochen in der Vergangenheit lag. Zur gleichen Zeit ist ein YouTube Format, *Best of Bundestag*, populär geworden. In diesem Format werden vermeidlich lustige oder obskure Szenen aus dem Bundestag zusammengeschnitten. Unter anderem gibt es eine Reihe, die speziell Ordnungsrufe zeigt. Ordnungsrufe werden Abgeordneten durch den/die Bundespräsident:in erteilt, wenn diese sich nicht korrekt verhalten, z.B. durch das Äußern einer unangemessenen Aussage.

Uns als Projekt-Team hat sich dabei die Frage gestellt, ob es im Vergleich zu vergangenen Legislaturperioden gleich viele, mehr oder weniger Rufe erteilt werden und ob die Parteien im Schnitt unterschiedlich viele erhalten. Es gibt vom Bundestag zwei Veröffentlichungen ([WP01-11](https://www.bundestag.de/resource/blob/273012/c5607fa52b61d592861c017ce0e70c55/Kapitel_23_Statistische_Gesamt__bersicht_1______11__Wahlperiode-pdf-data.pdf) [WP12-19](https://www.bundestag.de/resource/blob/196296/4b2ee134475f75e677cdf679caff93a8/Kapitel_07_16_Ordnungsma__nahmen-data.pdf)), aus denen man zwar die Anzahl der Rufe pro Legislaturperiode entnehmen kann, aber nicht die Verteilung auf Parteien oder spezifischere Zeitabschnitte.

Um einen besseren Überblick der Verteilung der Ordnungsrufe zu bekommen, ist die Idee entstanden, diese mittels einer interaktiven Visualisierung abzubilden. Dadurch könnten möglicherweise Erkenntnisse darüber getroffen werden, wie das Verhältnis von Parteisitzen und Rufen zueinander steht. Oder welche Parteien besonders "laut" sind.


## Related Work

<!-- Anything that inspired you, such as a paper, a web site,
visualisations we discussed in class, etc. -->

Für den Deutschen Bundestag ist uns keine Anwendung mit ähnlicher Funktion bekannt. Neben den bereits erwähnten Veröffentlichen des Bundestags über die Ordnungsrufe pro Wahlperiode ([WP01-11](https://www.bundestag.de/resource/blob/273012/c5607fa52b61d592861c017ce0e70c55/Kapitel_23_Statistische_Gesamt__bersicht_1______11__Wahlperiode-pdf-data.pdf) [WP12-19](https://www.bundestag.de/resource/blob/196296/4b2ee134475f75e677cdf679caff93a8/Kapitel_07_16_Ordnungsma__nahmen-data.pdf)), bietet der Bundestag eine [API Schnittstelle](https://dip.bundestag.de/über-dip/hilfe/api) an. Mittels dieser API lassen sich zwar auch Ordnung rufe Filtern, diese sind allerdings sehr unvollständig (kleiner 30 Treffer).


## Project Objectives and Goals

<!-- Provide the primary questions you are trying to answer with your visualisation.
What would you like to learn and accomplish? List the benefits. -->


## Tasks

<!-- Describe in detail which data manipulations (sort, filter,..) and visual
manipulations (zoom, selection,...) you would want to implement and how these
support the goals. -->


## Data

<!-- From where and how are you collecting your data? If appropriate, provide a link
to your data sources. -->

Die verwendeten Daten stammen aus der vom Bundestag bereitgestellten [API](https://dip.bundestag.de/über-dip/hilfe/api), für die wir auf Anfrage einen Zugang bekommen haben. Wie erwähnt gibt es eine Möglichkeit nach Rufen zu filtern, dabei wird allerdings nur ein Bruchteil dieser ausgegeben. 

Um alle Rufe zu erfassen, wurden mittels eines eigenen Programms alle Transkripte durchlaufen und nach passenden Textpassagen gesucht. Da diese nicht immer eindeutig als Ordnungsruf an eine bestimmte Person identifizierbar sind, musste zusätzlich eine Liste aller jemals Abgeordneten aus der API geholt werden, um diesen Rufe zuzuordnen. 

> Bei diesem Verfahren kommt es mit hoher Wahrscheinlichkeiten zu Ungenauigkeiten, die nur mittels manueller Überprüfung behoben werden könnten. Aufgrund der großen Datenmenge (879 Treffer) wurde sich bewusst dazu entschieden dies für den MVP zu vernachlässigen und somit eine (hoffentlich) minimale Ungenauigkeit in Kauf zu nehmen. Eine präzisere Alternative hätte ein Textmining-Algorithmus bieten können, dessen Implementierung jedoch im Rahmen des Projektes als zu aufwändig eingeschätzt wurde.


## Data Processing

<!-- Do you expect to do substantial data cleanup? What quantities do you plan to
derive from your data? How would data processing be implemented? -->

Um die Textpassagen mit den Abgeordneten zu mappen, wurde mit einem Python Script nach dem Nachnamen der jeweiligen Abgeordneten die zum Zeitpunkt der Erstellung der Textpassage im Bundestag saßen gesucht. Falls ein Name in einer Textpassage vorhanden war, wurde die jeweilige Person als zur Ordnung gerufend eingetragen. Übrige Zeilen mit leeren Textpassagen wurden gelöscht.

Zudem wurde in weiten Teilen mit Openrefine gearbeitet um den Datensatz zu strukturieren. Präsidenten wurden nach dem Datum der Erstellung der Textpassagen nachträglich eingetragen (Quelle: https://www.bundestag.de/parlament/geschichte/bundestagspraesidenten_seit_1949). Die Parteiangehörigkeit der zur Ordnung gerufenden war zu dem im selben Textfeld und wurde herausextrahiert in eine neue Spalte. Datumseinträge ließen sich zudem mit Openrefine normen.

Die entstandene Excel-Datei wurde daraufhin mit einem weiteren Python-Skript in ein zuvor vereinbartes JSON-Format gebracht.


## Visualisation Design

<!-- How will you display your data? Provide some general ideas that you
have for the visualisation design. Develop three alternative prototype
designs for your visualisation. Create one final design that
incorporates the best of your three designs. Describe your designs
and justify your choices of visual encodings. We recommend you use
the Five Design Sheet Methodology (fds.design) -->


## Must-Have Features

<!-- List the features without which you would consider your project to be a
failure. -->


## Optional Features

<!-- List the features which you consider to be nice to have, but not critical. -->
