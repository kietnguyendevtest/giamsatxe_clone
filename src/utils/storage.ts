import CryptoJS from 'crypto-js';
import { toast } from 'react-toastify';

import config from '~/constants/config';

const storage = {
   ///--Clear localStorage
   clearAll: () => {
      return localStorage.clear();
   },

   ///--Set localStorage
   setAccessToken: (access_token: string) => {
      return localStorage.setItem(config.KEY_STORAGE_ACCESS_TOKEN, CryptoJS.Rabbit.encrypt(access_token, config.SECRET_ENCRYPTION).toString());
   },
   setRefreshToken: (refresh_token: string) => {
      return localStorage.setItem(config.KEY_STORAGE_REFRESH_TOKEN, CryptoJS.Rabbit.encrypt(refresh_token, config.SECRET_ENCRYPTION).toString());
   },
   setGroupRole: (group_role: string) => {
      return localStorage.setItem(config.KEY_STORAGE_GROUP_ROLE, CryptoJS.Rabbit.encrypt(group_role, config.SECRET_ENCRYPTION).toString());
   },
   setMenuRole: (menu_role: string) => {
      return localStorage.setItem(config.KEY_STORAGE_MENU_ROLE, CryptoJS.Rabbit.encrypt(menu_role, config.SECRET_ENCRYPTION).toString());
   },
   setSetRole: (set_role: string) => {
      return localStorage.setItem(config.KEY_STORAGE_SET_ROLE, CryptoJS.Rabbit.encrypt(set_role, config.SECRET_ENCRYPTION).toString());
   },
   setProfile: (profile: string) => {
      return localStorage.setItem(config.KEY_STORAGE_PROFILE, CryptoJS.Rabbit.encrypt(profile, config.SECRET_ENCRYPTION).toString());
   },
   // setCurrentUrl: (current_url: string) => {
   //    return localStorage.setItem(config.KEY_STORAGE_CURRENT_URL, CryptoJS.Rabbit.encrypt(current_url, config.SECRET_ENCRYPTION).toString());
   // },
   setCurrentPage: (current_page: string) => {
      return localStorage.setItem(config.KEY_STORAGE_CURRENT_PAGE, CryptoJS.Rabbit.encrypt(current_page, config.SECRET_ENCRYPTION).toString());
   },
   // setCurrentControllerName: (current_controller_name: string) => {
   //    return localStorage.setItem(config.KEY_STORAGE_CURRENT_CONTROLLER_NAME, CryptoJS.Rabbit.encrypt(current_controller_name, config.SECRET_ENCRYPTION).toString());
   // },

   ///--Get localStorage
   getAccessToken: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_ACCESS_TOKEN) || "";
         return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getRefreshToken: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_REFRESH_TOKEN) || "";
         return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getGroupRole: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_GROUP_ROLE) || "";
         return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getMenuRole: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_MENU_ROLE) || "";
         return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getSetRole: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_SET_ROLE) || "";
         return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getProfile: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_PROFILE) || "";
         return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   // getCurrentUrl: () => {
   //    try {
   //       const result = localStorage.getItem(config.KEY_STORAGE_CURRENT_URL) || "";
   //       return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
   //    } catch (error) {
   //       toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
   //       return "";
   //    }
   // },
   getCurrentPage: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_CURRENT_PAGE) || "";
         return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   // getCurrentControllerName: () => {
   //    try {
   //       const result = localStorage.getItem(config.KEY_STORAGE_CURRENT_CONTROLLER_NAME) || "";
   //       return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
   //    } catch (error) {
   //       toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
   //       return "";
   //    }
   // },
}

export default storage;