
import { toast } from 'react-toastify';

import config from '~/constants/config';

const storage = {
   ///--Clear localStorage
   clearAll: () => {
      return localStorage.clear();
   },

   ///--Set localStorage
   setAccessToken: (access_token: string) => {
      return localStorage.setItem(config.KEY_STORAGE_ACCESS_TOKEN, access_token);
   },
   setRefreshToken: (refresh_token: string) => {
      return localStorage.setItem(config.KEY_STORAGE_REFRESH_TOKEN, refresh_token);
   },
   setGroupRole: (group_role: string) => {
      return localStorage.setItem(config.KEY_STORAGE_GROUP_ROLE, group_role);
   },
   setMenuRole: (menu_role: string) => {
      return localStorage.setItem(config.KEY_STORAGE_MENU_ROLE, menu_role);
   },
   setSetRole: (set_role: string) => {
      return localStorage.setItem(config.KEY_STORAGE_SET_ROLE, set_role);
   },
   setProfile: (profile: string) => {
      return localStorage.setItem(config.KEY_STORAGE_PROFILE, profile);
   },
   setCurrentUrl: (current_url: string) => {
      return localStorage.setItem(config.KEY_STORAGE_CURRENT_URL, current_url);
   },
   setCurrentPageLv1: (current_page_lv1: string) => {
      return localStorage.setItem(config.KEY_STORAGE_CURRENT_PAGE_LV1, current_page_lv1);
   },
   setCurrentPageLv2: (current_page_lv2: string) => {
      return localStorage.setItem(config.KEY_STORAGE_CURRENT_PAGE_LV2, current_page_lv2);
   },
   setCurrentControllerName: (current_controller_name: string) => {
      return localStorage.setItem(config.KEY_STORAGE_CURRENT_CONTROLLER_NAME, current_controller_name);
   },


   ///--Get localStorage
   getAccessToken: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_ACCESS_TOKEN) || "";
         return result;
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getRefreshToken: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_REFRESH_TOKEN) || "";
         return result;
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getGroupRole: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_GROUP_ROLE) || "";
         return result;
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getMenuRole: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_MENU_ROLE) || "";
         return result;
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getSetRole: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_SET_ROLE) || "";
         return result;
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getProfile: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_PROFILE) || "";
         return result;
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getCurrentUrl: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_CURRENT_URL) || "";
         return result;
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getCurrentPageLv1: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_CURRENT_PAGE_LV1) || "";
         return result;
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getCurrentPageLv2: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_CURRENT_PAGE_LV2) || "";
         return result;
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
   getCurrentControllerName: () => {
      try {
         const result = localStorage.getItem(config.KEY_STORAGE_CURRENT_CONTROLLER_NAME) || "";
         return result;
      } catch (error) {
         toast.error("Lỗi xác thực tài khoản. Vui lòng đăng nhập lại!");
         return "";
      }
   },
}

export default storage;