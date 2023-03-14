import  axios from "axios";
import { API_BASE_URL } from "./config";

axios.defaults.baseURL = API_BASE_URL;    //როცა axios დავწერთ '/login' რომ მიწერია წინ დაუწერს Api_B_URL-ს. ეს ჩანაწერი გვიმარტიწვებს
                                          //  ყოველ ჯერზე რომ(`${API_BASE_URL}/login`) არ ვწეროთ
export const loginAsync = async (data) => {
    try {
        const response = await axios.post('/login', data);  
        console.log('resp', response);                   //response არის axios-ის ობიექტი და ამ axios ობიექტში გვაინტერესებს data:token
        return response.data
    } catch (err) {
        console.log('__loginAsyncError__', err);
        return null;
    } 
};

export const registerAsync = async (data) => {
    try {
        const response = await axios.post('/register', data);  
        console.log('resp', response);                  
        return response.data
    } catch (err) {
        console.log('__loginAsyncError__', err);
        return null;
    } 
};