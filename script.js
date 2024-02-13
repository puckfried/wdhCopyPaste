const divStart = document.querySelector('.start')
const divIntro = document.querySelector('.intro')

const form = document.querySelector('form')
const textarea = document.querySelector('textarea')
const wrongBox = document.querySelector('.wrongBox')

const stopBtn = document.querySelector('form .startstopBtn')
const finishDiv = document.querySelector('.finished')
const highscoreContainer = document.querySelector('.hs-container')
const timeSpan = finishDiv.querySelector('.time')

const eingabe = 'Block 17: (Duplikat erforderlich) "Das Kopieren von Text oder Bildern ist eine grundlegende Funktion, die in fast jeder Software verfügbar ist. Durch die Nutzung der Tastaturkürzel STRG+C wird der Prozess nicht nur beschleunigt, sondern auch die Gefahr von Fehlern reduziert."\n\nBlock 8: "Webentwicklung umfasst das Erstellen und Pflegen von Websites. Sie beinhaltet sowohl den Webdesign-Aspekt als auch die Entwicklung von Webanwendungen, die für das Funktionieren und die Struktur der Website sorgen." \n\nBlock 4: "Ausschneiden und Einfügen, durchgeführt mit den Tastenkombinationen STRG+X und STRG+V, ermöglicht es Ihnen, Informationen schnell zu verlagern. Diese Technik ist besonders nützlich beim Bearbeiten von Dokumenten oder beim Organisieren von Dateien auf Ihrem Computer."\n\nBlock 13: "Online-Marketing ist ein wesentlicher Bestandteil der Geschäftswelt. Es nutzt das Internet, um Werbebotschaften an Verbraucher zu übermitteln, einschließlich E-Mail-Marketing, Social Media-Marketing und Suchmaschinenmarketing."\n\nBlock 2: (Duplikat erforderlich) "Die Beherrschung von Tastaturkürzeln kann Ihre Effizienz erheblich steigern. Viele alltägliche Aufgaben können schneller ausgeführt werden, ohne die Notwendigkeit, die Hände von der Tastatur zu nehmen und zur Maus zu wechseln."\n\nBlock 11: "Die Fähigkeit, Inhalte zu kopieren und einzufügen, ist nicht nur auf Text beschränkt. Bilder, Dateien und sogar Ordner können ebenfalls auf diese Weise manipuliert werden, was die Verwaltung digitaler Ressourcen vereinfacht."\n\nBlock 9: "Die Sicherheit bei der Webentwicklung ist von höchster Wichtigkeit. Entwickler müssen sich fortlaufend über die neuesten Sicherheitsrisiken informieren, um sicherzustellen, dass ihre Websites und Anwendungen vor Bedrohungen geschützt sind."\n\nBlock 15: (Duplikat erforderlich) "Effektives Online-Marketing erfordert ein Verständnis für die Zielgruppe. Analysetools können dabei helfen, die Präferenzen und das Verhalten der Nutzer zu verstehen, um Marketingstrategien entsprechend anzupassen."\n\nBlock 20: "Kopieren und Einfügen kann auch zum Organisieren von Daten in Tabellenkalkulationen verwendet werden. Es ist ein wesentliches Werkzeug für die Datenanalyse, da es die Neuformatierung und Manipulation großer Datensätze erleichtert."\n\nBlock 1: "Ein tiefes Verständnis der Tastaturkürzel geht über die allgemeinen Befehle wie Kopieren und Einfügen hinaus. Viele Programme bieten eine Vielzahl von Kürzeln, um spezifische Funktionen schnell auszuführen."\n\nBlock 19: (Duplikat erforderlich) "Webentwicklung erfordert Kenntnisse in verschiedenen Bereichen, darunter Grafikdesign, Programmierung, Benutzererfahrung und Suchmaschinenoptimierung, um nur einige zu nennen."\n\nBlock 14: "Onlinemarketing-Strategien müssen sich ständig weiterentwickeln, um mit den Veränderungen in der digitalen Landschaft Schritt zu halten. Dies erfordert kontinuierliche Lern- und Anpassungsfähigkeit."\n\nBlock 3: "Die Verwendung von Tastaturkürzeln ist nicht nur eine Frage der Geschwindigkeit, sondern auch der Ergonomie. Die Reduzierung der Notwendigkeit, zwischen Tastatur und Maus zu wechseln, kann das Risiko von wiederholungsbedingten Belastungsverletzungen verringern."\n\nBlock 6: (Duplikat erforderlich) "In der Webentwicklung ist die Anpassungsfähigkeit an verschiedene Bildschirmgrößen und Geräte, bekannt als Responsive Design, entscheidend, um sicherzustellen, dass Websites auf allen Geräten gut aussehen und funktionieren."\n\nBlock 10: "Effektives Onlinemarketing kann dazu beitragen, dass Unternehmen ein breiteres Publikum erreichen. Die Nutzung digitaler Kanäle ermöglicht es, zielgerichtete und personalisierte Botschaften zu übermitteln, die die Kundenbindung fördern können."\n\nBlock 7: "Die Prinzipien des guten Webdesigns gehen über Ästhetik hinaus. Sie umfassen Benutzerfreundlichkeit, Zugänglichkeit und eine klare Navigation, um eine positive Benutzererfahrung zu gewährleisten."\n\nBlock 5: "Das Erlernen und Nutzen von Tastaturkürzeln für das Kopieren und Einfügen kann Anfängern helfen, sich schneller und effizienter an die Computerarbeit zu gewöhnen und so ihre Produktivität zu steigern."\n\nBlock 16: "Die Messung des Erfolgs von Online-Marketingkampagnen ist entscheidend. Durch die Analyse von Daten wie Klicks, Konversionen und Engagement können Marketer die Wirksamkeit ihrer Strategien bewerten und verbessern."\n\nBlock 12: "Tastaturkürzel können individuell angepasst werden. Viele Programme erlauben es Benutzern, ihre eigenen Kürzel zu erstellen, um ihre Arbeitsabläufe weiter zu optimieren und zu personalisieren."\n\nBlock 18: "Das Konzept des Responsive Design in der Webentwicklung gewährleistet, dass eine Website auf allen Geräten, von Desktops bis hin zu Smartphones, korrekt dargestellt wird. Dies erfordert ein tiefes Verständnis von flexiblen Layouts, Bildern und CSS-Abfragen."'

// const solution = 'Block 1: "Ein tiefes Verständnis der Tastaturkürzel geht über die allgemeinen Befehle wie Kopieren und Einfügen hinaus. Viele Programme bieten eine Vielzahl von Kürzeln, um spezifische Funktionen schnell auszuführen."\n\nBlock 2: (Duplikat erforderlich) "Die Beherrschung von Tastaturkürzeln kann Ihre Effizienz erheblich steigern. Viele alltägliche Aufgaben können schneller ausgeführt werden, ohne die Notwendigkeit, die Hände von der Tastatur zu nehmen und zur Maus zu wechseln."\n\nBlock 2: (Duplikat erforderlich) "Die Beherrschung von Tastaturkürzeln kann Ihre Effizienz erheblich steigern. Viele alltägliche Aufgaben können schneller ausgeführt werden, ohne die Notwendigkeit, die Hände von der Tastatur zu nehmen und zur Maus zu wechseln."\n\nBlock 3: "Die Verwendung von Tastaturkürzeln ist nicht nur eine Frage der Geschwindigkeit, sondern auch der Ergonomie. Die Reduzierung der Notwendigkeit, zwischen Tastatur und Maus zu wechseln, kann das Risiko von wiederholungsbedingten Belastungsverletzungen verringern."\n\nBlock 4: "Ausschneiden und Einfügen, durchgeführt mit den Tastenkombinationen STRG+X und STRG+V, ermöglicht es Ihnen, Informationen schnell zu verlagern. Diese Technik ist besonders nützlich beim Bearbeiten von Dokumenten oder beim Organisieren von Dateien auf Ihrem Computer."\n\nBlock 5: "Das Erlernen und Nutzen von Tastaturkürzeln für das Kopieren und Einfügen kann Anfängern helfen, sich schneller und effizienter an die Computerarbeit zu gewöhnen und so ihre Produktivität zu steigern."\n\nBlock 6: (Duplikat erforderlich) "In der Webentwicklung ist die Anpassungsfähigkeit an verschiedene Bildschirmgrößen und Geräte, bekannt als Responsive Design, entscheidend, um sicherzustellen, dass Websites auf allen Geräten gut aussehen und funktionieren."\n\nBlock 6: (Duplikat erforderlich) "In der Webentwicklung ist die Anpassungsfähigkeit an verschiedene Bildschirmgrößen und Geräte, bekannt als Responsive Design, entscheidend, um sicherzustellen, dass Websites auf allen Geräten gut aussehen und funktionieren."\n\nBlock 7: "Die Prinzipien des guten Webdesigns gehen über Ästhetik hinaus. Sie umfassen Benutzerfreundlichkeit, Zugänglichkeit und eine klare Navigation, um eine positive Benutzererfahrung zu gewährleisten."\n\nBlock 8: "Webentwicklung umfasst das Erstellen und Pflegen von Websites. Sie beinhaltet sowohl den Webdesign-Aspekt als auch die Entwicklung von Webanwendungen, die für das Funktionieren und die Struktur der Website sorgen." \n\nBlock 9: "Die Sicherheit bei der Webentwicklung ist von höchster Wichtigkeit. Entwickler müssen sich fortlaufend über die neuesten Sicherheitsrisiken informieren, um sicherzustellen, dass ihre Websites und Anwendungen vor Bedrohungen geschützt sind."\n\nBlock 10: "Effektives Onlinemarketing kann dazu beitragen, dass Unternehmen ein breiteres Publikum erreichen. Die Nutzung digitaler Kanäle ermöglicht es, zielgerichtete und personalisierte Botschaften zu übermitteln, die die Kundenbindung fördern können."\n\nBlock 11: "Die Fähigkeit, Inhalte zu kopieren und einzufügen, ist nicht nur auf Text beschränkt. Bilder, Dateien und sogar Ordner können ebenfalls auf diese Weise manipuliert werden, was die Verwaltung digitaler Ressourcen vereinfacht."\n\nBlock 12: "Tastaturkürzel können individuell angepasst werden. Viele Programme erlauben es Benutzern, ihre eigenen Kürzel zu erstellen, um ihre Arbeitsabläufe weiter zu optimieren und zu personalisieren."\n\nBlock 13: "Online-Marketing ist ein wesentlicher Bestandteil der Geschäftswelt. Es nutzt das Internet, um Werbebotschaften an Verbraucher zu übermitteln, einschließlich E-Mail-Marketing, Social Media-Marketing und Suchmaschinenmarketing."\n\nBlock 14: "Onlinemarketing-Strategien müssen sich ständig weiterentwickeln, um mit den Veränderungen in der digitalen Landschaft Schritt zu halten. Dies erfordert kontinuierliche Lern- und Anpassungsfähigkeit."\n\nBlock 15: (Duplikat erforderlich) "Effektives Online-Marketing erfordert ein Verständnis für die Zielgruppe. Analysetools können dabei helfen, die Präferenzen und das Verhalten der Nutzer zu verstehen, um Marketingstrategien entsprechend anzupassen."\n\nBlock 15: (Duplikat erforderlich) "Effektives Online-Marketing erfordert ein Verständnis für die Zielgruppe. Analysetools können dabei helfen, die Präferenzen und das Verhalten der Nutzer zu verstehen, um Marketingstrategien entsprechend anzupassen."\n\nBlock 16: "Die Messung des Erfolgs von Online-Marketingkampagnen ist entscheidend. Durch die Analyse von Daten wie Klicks, Konversionen und Engagement können Marketer die Wirksamkeit ihrer Strategien bewerten und verbessern."\n\nBlock 17: (Duplikat erforderlich) "Das Kopieren von Text oder Bildern ist eine grundlegende Funktion, die in fast jeder Software verfügbar ist. Durch die Nutzung der Tastaturkürzel STRG+C wird der Prozess nicht nur beschleunigt, sondern auch die Gefahr von Fehlern reduziert."\n\nBlock 17: (Duplikat erforderlich) "Das Kopieren von Text oder Bildern ist eine grundlegende Funktion, die in fast jeder Software verfügbar ist. Durch die Nutzung der Tastaturkürzel STRG+C wird der Prozess nicht nur beschleunigt, sondern auch die Gefahr von Fehlern reduziert."\n\nBlock 18: "Das Konzept des Responsive Design in der Webentwicklung gewährleistet, dass eine Website auf allen Geräten, von Desktops bis hin zu Smartphones, korrekt dargestellt wird. Dies erfordert ein tiefes Verständnis von flexiblen Layouts, Bildern und CSS-Abfragen."\n\nBlock 19: (Duplikat erforderlich) "Webentwicklung erfordert Kenntnisse in verschiedenen Bereichen, darunter Grafikdesign, Programmierung, Benutzererfahrung und Suchmaschinenoptimierung, um nur einige zu nennen."\n\nBlock 20: "Kopieren und Einfügen kann auch zum Organisieren von Daten in Tabellenkalkulationen verwendet werden. Es ist ein wesentliches Werkzeug für die Datenanalyse, da es die Neuformatierung und Manipulation großer Datensätze erleichtert."'



let solved = 0
let startTime



function submitForm(e){
    e.preventDefault()
}

// Funktion, um Mausereignisse zu deaktivieren
function disableMouseEvents(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

function setFocusAtStart(event) {
    textarea.selectionStart = 0;
    textarea.selectionEnd = 0;
}

function start(){
// Startet das erste Spiel, Intro ausgeblendet, Formular eingeblendet, der Timer gesetzt
    divStart.classList.add("hide")
    divIntro.classList.add("hide")
    form.classList.remove('hide')
    startTime = Date.now()
    textarea.value=eingabe
}


function stop(){
// Beendet Spiel, Timer gestoppt, Formular ausgeblendet, Zeit angezeigt
   if (!ueberpruefeReihenfolge(textarea.value)) {
    showWrongBox()
   }else {
    form.classList.add('hide')
    finishDiv.classList.remove('hide')
    stopTime=Math.trunc((Date.now()-startTime)/1000)
    timeSpan.textContent=`${stopTime} s` 
    let highH3 = finishDiv.querySelector('h3')
    if (compareHighscore(stopTime)){
       highH3.classList.remove('hide') 
    } else {
        highH3.classList.add('hide') 
    }
   }
    
}

function startAgain(){
// Neues Spiel, Formular zurückgesetzt und eingeblendet, Timer erneut gestartet
   
    finishDiv.classList.add('hide')
    divStart.classList.remove('hide')
    divIntro.classList.remove('hide')

    startTime=Date.now()
    displayHighscore()
}

function ueberpruefeReihenfolge(eingabe) {
    // Zerlegt den Eingabestring in Blöcke
    const blockRegex = /Block (\d+): (\(Duplikat erforderlich\) )?".+?"?\n*/g;
    let match;
    const bloecke = [];
    while ((match = blockRegex.exec(eingabe)) !== null) {
        bloecke.push({ nummer: parseInt(match[1]), duplikat: !!match[2] });
    }
    // console.log('Bloecke aus Eingabe: ', bloecke)
    // Sortiere die Blöcke nach ihrer Nummer und behandle Duplikate
     const sortierteUndDuplizierteBloecke = bloecke
        //  .sort((a, b) => a.nummer - b.nummer)
        .reduce((akk, block) => {
            akk.push(block.nummer);
            // if (block.duplikat) {
            //     akk.push(block.nummer); // Füge das Duplikat hinzu
            // }
            return akk;
        }, []);

    // Erwartete Reihenfolge 
    const erwarteteReihenfolge = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 17, 17, 18, 19, 19, 20]; // Beispielreihenfolge

    console.log(sortierteUndDuplizierteBloecke)
    // Überprüfung, ob die Reihenfolge und Duplikate korrekt sind
    const istKorrekt = JSON.stringify(sortierteUndDuplizierteBloecke) === JSON.stringify(erwarteteReihenfolge);

    return istKorrekt;
}

function showWrongBox(){
    wrongBox.classList.remove('hide')
    setTimeout(() => wrongBox.classList.add('hide'), 3000)
}

// Highscore functions
function getHighscore(){
   return localStorage.getItem('highscore')
}

function setHighscore(newScore){
    localStorage.setItem('highscore', newScore)
}

function compareHighscore(newScore){
    let highscore = getHighscore()
    if (!highscore) {
        setHighscore(newScore)
        return true
    } else {
        if (highscore<newScore){
            return false
        } else {
            setHighscore(newScore)
            return true
        }
    }
}

function displayHighscore(){
    let highscore = getHighscore()
    if (highscore){
        highscoreContainer.classList.remove('hide')
        highscoreContainer.querySelector('#score').textContent=highscore
    }
}

// Beim Spielstart
displayHighscore()

textarea.addEventListener('mousedown', disableMouseEvents);
textarea.addEventListener('contextmenu', disableMouseEvents);
textarea.addEventListener('focus', setFocusAtStart);
// textarea.addEventListener('change', () => überprüfeReihenfolge(eingabe) ? console.log('super') : console.log('wrong'))


