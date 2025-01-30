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

Installation and Configuration

1️⃣ Clone the repository
git clone https://github.com/And3rjh12/MedSync  cd MedSyncFrom


2️⃣ Install dependencies
npm install

3️⃣ Configure Google Maps API Key
For the map screen to work properly, you need to add your Google Maps API key in src/Screen/MapScreen.tsx:

const googleMapsApiKey = 'YOUR_API_KEY_HERE';

4️⃣ Start the project
npx expo start

for Android:
npx expo start --android

for iOS:
npx expo start --ios


Features

-Login/Register
-Search for Doctors and Patients (Search)
-Appointment Scheduling (Appointment)
-Viewing Locations on Map (MapScreen)
-Navigation between Screens
