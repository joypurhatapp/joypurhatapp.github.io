importScripts("https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging.js");

// ✅ Firebase Configuration (তোমার Firebase থেকে নেওয়া)
const firebaseConfig = {
  apiKey: "AIzaSyAYdr7lRvraRKfbBcTuscFjpviP4qsXScU",
  authDomain: "dhaka-page-push-notification.firebaseapp.com",
  projectId: "dhaka-page-push-notification",
  storageBucket: "dhaka-page-push-notification.firebasestorage.app",
  messagingSenderId: "513949140029",
  appId: "1:513949140029:web:7b8a9045e5998e7bbc1654",
  measurementId: "G-2RSK00S9SM"
};

// ✅ Firebase Initialize
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ✅ Background Notification Handle (Browser বন্ধ থাকলে)
messaging.onBackgroundMessage(payload => {
  console.log("📩 Background Message Received:", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
