import { setLocalStorageItem, getStorageValue } from "@/shared/local_storage_store"


export class AuthStorageHelper{
    static token = 'token'
    static restaurantName = 'restaurantName'
    static email = 'email'
    static phoneNumber = 'phoneNumber'
    static managersFullName = 'managersFullName'

    static storeUserDetails(data) {
        const token = data['token']
        const restaurantName = data['restaurantName']
        const email = data['email']
        const phoneNumber = data['phoneNumber']
        const managersFullName = data['managersFullName']

        setLocalStorageItem(AuthStorageHelper.token, token)
        setLocalStorageItem(AuthStorageHelper.restaurantName, restaurantName)
        setLocalStorageItem(AuthStorageHelper.email, email)
        setLocalStorageItem(AuthStorageHelper.phoneNumber, phoneNumber)
        setLocalStorageItem(AuthStorageHelper.managersFullName, managersFullName)

    }

    static getUserDetails() {
         const token = getStorageValue(AuthStorageHelper.token)
         const restaturantName = getStorageValue(AuthStorageHelper.restaurantName)
         const email = getStorageValue(AuthStorageHelper.email)
         const phoneNumber = getStorageValue(AuthStorageHelper.phoneNumber)
         const managersFullName = getStorageValue(AuthStorageHelper.managersFullName)

         return {
             'token': token,
             'restaurantName': restaturantName,
             'email': email,
             'phoneNumber': phoneNumber,
             'managersFullName': managersFullName
         }
    }

    static clearStorage(){
        localStorage.clear();
    }

}