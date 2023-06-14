*INICIALIZAR PROYECTO DE NODE*
- Ejecutar en la terminar el comando: 
- npm init
- En la terminal se desplegara el asistente para configurar el archivo package.json

*INSTALAR LAS LIBRERIAS DE CYPRESS*
- Ejecutar en la terminal el comando:
- npm install cypress --save-dev

*INICIALIZAR EL CYPRESS - TEST RUNNER*
- Ejecutar en la terminal el comando:
- npx cypress open
- Del mismo modo se puede ajustar para abrirlo desde el package.json
- "scripts": {
-    "testCypress": "cypress open"
-  },
- En la consola ejecutamos el comando npm run [Nombre del escript]

*INICIALIZAR PRUEBAS SIN EL TEST RUNNER*
- "scripts": {
-    "testCypress-chrome": "cypress run --spec cypress/e2e/3-zero-bank/smoke-landingpage-sero-bank.cy.js --browser chrome"
-  },
- Luego en la consola se ejecuta el script: npm run testCypress-chrome

