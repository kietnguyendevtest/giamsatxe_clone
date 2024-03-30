export interface Account {
    Id?: string,
    UserName: string,
    VaiTro?: string,
    VaiTroId?: string,
    SoDienThoai?: string,
    Email: string,
    HoLot?: string,
    Ten?: string,
    NgaySinh?: string,
    GioiTinh?: number,
    Token?: string,
    RefreshToken?: string,
    IsAD?: boolean,
}

export interface Accounts {
    PageIndex: 0,
    TotalRow: 24,
    Data: Account[]
}