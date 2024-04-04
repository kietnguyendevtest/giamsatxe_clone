import CryptoJS from 'crypto-js';

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

   ///--Get localStorage
   getAccessToken: () => {
      const result = localStorage.getItem(config.KEY_STORAGE_ACCESS_TOKEN) || "";
      return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
   },
   getRefreshToken: () => {
      const result = localStorage.getItem(config.KEY_STORAGE_REFRESH_TOKEN) || "";
      return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
   },
   getGroupRole: () => {
      const result = localStorage.getItem(config.KEY_STORAGE_GROUP_ROLE) || "";
      return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
   },
   getMenuRole: () => {
      const result = localStorage.getItem(config.KEY_STORAGE_MENU_ROLE) || "";
      return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
   },
   getSetRole: () => {
      const result = localStorage.getItem(config.KEY_STORAGE_SET_ROLE) || "";
      return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
   },
   getProfile: () => {
      const result = localStorage.getItem(config.KEY_STORAGE_PROFILE) || "";
      return CryptoJS.Rabbit.decrypt(result, config.SECRET_ENCRYPTION).toString(CryptoJS.enc.Utf8);
   },
}

export default storage;