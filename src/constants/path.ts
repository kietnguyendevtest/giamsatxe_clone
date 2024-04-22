const path = {
  home: '/',
  login: '/login',
  change_password: '/change-password',

  ///--Common
  auth__group_role: '/nhom-quyen',
  auth__menu_role: '/menu',
  auth__setting_role: '/vai-tro',
  auth__accounts: '/tai-khoan',
  // auth__group_role2: '/common/auth/group-role',
  // auth__menu_role2: '/common/auth/menu-role',
  // auth__setting_role2: '/common/auth/setting-role',
  // auth__accounts2: '/common/auth/accounts',

  ///--Kcs App
  khcnss__kcs_app__security__vehicle_in: '/khcnss/kcs-app/security/vehicle-in',
  khcnss__kcs_app__security__vehicle_out: '/khcnss/kcs-app/security/vehicle-out',
  khcnss__kcs_app__kcs__scan_card: '/khcnss/kcs-app/kcs/scan-card',

} as const

export default path;
