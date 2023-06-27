Hej!

Här kommer en README för mitt kodtest. API:et är skrivet i Node.js och typescript och kan kräva några dependencies för att fungera. Visual Studio Code har används som IDE i detta projekt.

1. Säkerställ att npm och Node.js är installerat på datorn. Om dessa inte finns kan de laddas ner från https://nodejs.org
   För att kontrollera om npm och Node.js är installerat kan följande kommandon köras individuellt i terminalen: `npm -v` , `node -v` . Npm versionen ska vara 9.5.0 och Node.js versionen v.18.15.0

2. Navigera till root-mappen för projektet i terminalen.

3. I terminalen, skriv följande kommando för att installera övrig projekt dependencies: `npm install`
   Då installeras dependencies som specificierats i package.json filen.

4. När installationen är färdig ska du kunna se en mapp som heter "node_modules" i root mappen för projeket. Denna mapp innehåller alla installerade dependencies.

Nu bör allt som krävs vara installerat och programmet kan köras på din dator.

5. För att köra applikationen, gå till root mappen för projektet i terminalen och kör kommandot: `npm start`
   Applikationen körs nu på localhost:8000

Observera att porten till localhost ligger i en .env fil. Om denna fil inte finns i ditt projekt, öppna vs code och skapa en ny fil som heter .env i root mappen. Där kan du specificera en port som ska användas av localhost, exempelvis `PORT=8000`

== Hur man testar API-anropet ==

1. Öppna postman
2. Skapa en ny kollektion och välj att den ska köras som "POST"
3. I adressfältet fyller du i: localhost:8000/api/count
4. Gå till fliken "Body"
5. Bocka i "raw" och välj "JSON" som finns på samma rad
6. I fältet skriver du meningen som ska användas i API-anropet. Exempel: `{"sentence": "Kalle Lisa Pelle Pelle"}`
7. När en mening har fyllts i klicka på "send" uppe i högra hörnet. Då ska ett svar visas i fältet som finns i den nedre delen av programmet
