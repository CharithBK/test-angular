import { environment } from "./environments/environment";

export namespace AppConfig {
    console.log("DB OK");
    export const firebase = environment.firebaseConfig;


}