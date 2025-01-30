MedSyncFrom

Description

MedSyncFrom is a mobile app developed with React Native and Expo, which facilitates the management of medical appointments. It allows users to register, log in, schedule appointments, search for doctors or patients, and view branches on an interactive map.


Technologies Used


* React Native

* Expo

* React Navigation (navigation management)

* Axios (requests HTTP)

* React Native Maps (interactive maps)

* Expo Location (geolocationn)

Project structure

MedSyncFrom/
│── src/
│   ├── Screen/
│   │   ├── LoginScreen.tsx
│   │   ├── RegisterScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── MapScreen.tsx
│   │   ├── appointment.tsx
│   │   ├── searchDoctor.tsx
│   │   ├── searchPatient.tsx
│   │   ├── styles/
│   │   │   ├── homeStyles.ts
│   │   │   ├── loginStyles.ts
│   │   │   ├── registerStyles.ts
│   │   │   ├── appointmentStyles.ts
│── App.tsx
│── package.json
│── app.json
│── tsconfig.json
│── README.md

Instalación y Configuración

1️⃣ Clonar el repositorio
git clone https://github.com/tu-usuario/MedSyncFrom.git
cd MedSyncFrom

2️⃣ Instalar dependencias
npm install

3️⃣ Configurar Google Maps API Key
Para que la pantalla de mapas funcione correctamente, debes agregar tu clave de API de Google Maps en src/Screen/MapScreen.tsx:

const googleMapsApiKey = 'TU_API_KEY_AQUI';

4️⃣ Iniciar el proyecto
npx expo start

Para Android:
npx expo start --android

Para iOS:
npx expo start --ios
