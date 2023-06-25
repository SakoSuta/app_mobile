import axios from 'axios';
import { toastController, alertController } from "@ionic/vue";

    export async function ConnecteUserData() {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const response = await axios.get('http://localhost:3000/api/auth/me', {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          });
          return response.data;
        } catch (error: any) {
          if (error.response) {
            // Le token est expiré ou invalide
            localStorage.removeItem("token");
          }
        }
      }
    }

    export async function presentToast(message: any) {
        const toast = await toastController.create({
            message: message,
            duration: 1500,
            position: 'top',
          });

          await toast.present();
    }

    export async function presentLogoutAlert() {
        const alert = await alertController.create({
            header: 'Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                cssClass: 'secondary',
              },
              {
                text: 'Logout',
                handler: () => {
                  localStorage.removeItem("token");
                  window.location.href = '/home';
                },
              },
            ],
          });
    
          await alert.present();
    }
