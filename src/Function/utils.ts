import axios from 'axios';
import { toastController, alertController } from "@ionic/vue";

    export async function ConnecteUserData() {
        try {
            const response = await axios.get('http://localhost:3000/api/auth/me', {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error(error);
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
