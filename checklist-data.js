// checklist-data.js
// Inhalte der täglichen Mobilkran-Kontrolle

const dailyMobileCraneCheck = {
  id: "daily-mobile-crane-check",
  title: "Tägliche Kontrolle Mobilkran",
  version: "2025-11-01",
  sections: [
    {
      id: "allgemeiner-zustand",
      title: "1. Allgemeiner Zustand",
      items: [
        {
          id: "sichtpruefung-fahrzeug",
          label: "Fahrzeug auf sichtbare Schäden und Leckagen geprüft",
          type: "boolean",
          required: true,
          hasComment: true
        },
        {
          id: "trittflaechen-spiegel-scheiben",
          label: "Trittflächen, Spiegel und Scheiben unbeschädigt und sauber",
          type: "boolean",
          required: true
        },
        {
          id: "fahrerhaus-ordnung",
          label:
            "Fahrerhaus und Oberwagen frei von losen Gegenständen (rutsch- und stolperfrei)",
          type: "boolean",
          required: true
        }
      ]
    },
    {
      id: "bereifung-fahrwerk",
      title: "2. Bereifung / Fahrwerk",
      items: [
        {
          id: "reifen-zustand",
          label:
            "Reifen auf Beschädigungen, Risse, Schnitte und ungleichmäßige Abnutzung geprüft",
          type: "boolean",
          required: true,
          hasComment: true
        },
        {
          id: "reifendruck",
          label: "Reifendruck plausibel / laut Herstellerangabe",
          type: "boolean"
        },
        {
          id: "radmuttern",
          label: "Radmuttern visuell kontrolliert",
          type: "boolean",
          required: true
        },
        {
          id: "unterlegkeile",
          label: "Unterlegkeile vorhanden und einsatzbereit",
          type: "boolean",
          required: true
        }
      ]
    },
    {
      id: "stuetzen",
      title: "3. Stützen / Abstützsystem",
      items: [
        {
          id: "stuetzen-zustand",
          label:
            "Stützen auf Risse, Deformationen und offensichtliche Schäden geprüft",
          type: "boolean",
          required: true,
          hasComment: true
        },
        {
          id: "stuetzteller",
          label: "Stützteller vorhanden und unbeschädigt",
          type: "boolean",
          required: true
        },
        {
          id: "stuetz-zylinder-dicht",
          label: "Abstützzylinder auf Dichtigkeit geprüft",
          type: "boolean",
          required: true
        },
        {
          id: "stuetzen-funktionstest",
          label:
            "Funktionstest Stützen: kurzes Aus- und Einfahren ohne Last durchgeführt",
          type: "boolean"
        },
        {
          id: "neigungssensor",
          label: "Neigungssensor / Überwachungssystem ohne Fehlermeldung",
          type: "boolean"
        }
      ]
    },
    {
      id: "oberwagen-ausleger",
      title: "4. Oberwagen / Ausleger",
      items: [
        {
          id: "auslegersegmente",
          label:
            "Auslegersegmente ohne sichtbare Risse, Dellen oder Deformationen",
          type: "boolean",
          required: true,
          hasComment: true
        },
        {
          id: "bolzen-splinte",
          label:
            "Bolzen, Sicherungssplinte und Verriegelungen vorhanden und gesichert",
          type: "boolean",
          required: true
        },
        {
          id: "teleskopfunktion-kurztest",
          label: "Kurztest Teleskopfunktion durchgeführt",
          type: "boolean"
        },
        {
          id: "windmessgeraet",
          label: "Windmessgerät (Anemometer) vorhanden und betriebsbereit",
          type: "boolean"
        },
        {
          id: "drehwerk-geraeusch",
          label: "Drehwerk ohne ungewöhnliche Geräusche / Blockierungen",
          type: "boolean"
        }
      ]
    },
    {
      id: "hubwerk-lastaufnahmemittel",
      title: "5. Hubwerk / Lastaufnahmemittel",
      items: [
        {
          id: "seil-zustand",
          label:
            "Kranseil(e) auf Drahtbrüche, Korrosion, Kinken und Litzenablösungen geprüft",
          type: "boolean",
          required: true,
          hasComment: true
        },
        {
          id: "hakenflasche",
          label:
            "Hakenflasche: Sicherheitslasche intakt und leichtgängig; Tragfähigkeitsschild lesbar",
          type: "boolean",
          required: true
        },
        {
          id: "anschlagmittel-zustand",
          label:
            "Anschlagmittel (Ketten, Gurte, Schäkel) optisch geprüft und gekennzeichnet",
          type: "boolean",
          required: true
        },
        {
          id: "trommelwicklung",
          label: "Seilwicklung auf der Trommel ordnungsgemäß",
          type: "boolean"
        }
      ]
    },
    {
      id: "hydrauliksystem",
      title: "6. Hydrauliksystem",
      items: [
        {
          id: "hydraulik-leckagen",
          label:
            "Hydraulikleitungen und -komponenten auf Undichtigkeiten geprüft",
          type: "boolean",
          required: true,
          hasComment: true
        },
        {
          id: "hydraulikoel-stand",
          label: "Hydraulikölstand im Sollbereich",
          type: "boolean",
          required: true
        },
        {
          id: "schlaeuche-scheuerstellen",
          label:
            "Schläuche ohne Scheuerstellen oder sichtbare Blasenbildung",
          type: "boolean"
        },
        {
          id: "hydraulikfilter-anzeige",
          label: "Hydraulikfilter-Anzeigen kontrolliert",
          type: "boolean"
        }
      ]
    },
    {
      id: "elektrik-elektronik",
      title: "7. Elektrik / Elektronik",
      items: [
        {
          id: "kransteuerung-selbsttest",
          label:
            "Kransteuerung (LMI/LICCON/AML etc.) gestartet, Selbsttest ohne Fehlermeldung",
          type: "boolean",
          required: true,
          hasComment: true
        },
        {
          id: "beleuchtung",
          label:
            "Fahr- und Arbeitsbeleuchtung sowie Rundumkennleuchten funktionsfähig",
          type: "boolean",
          required: true
        },
        {
          id: "warnsummer-horn",
          label: "Warnsummer und Horn funktionsfähig",
          type: "boolean"
        },
        {
          id: "rueckfahrkamera-sensoren",
          label:
            "Rückfahrkamera / -sensoren funktionsfähig (falls vorhanden)",
          type: "boolean"
        },
        {
          id: "funkfernsteuerung",
          label:
            "Funkfernsteuerung (falls vorhanden): Akku geladen, Test der Funktionen durchgeführt",
          type: "boolean"
        }
      ]
    },
    {
      id: "sicherheitseinrichtungen",
      title: "8. Sicherheitseinrichtungen",
      items: [
        {
