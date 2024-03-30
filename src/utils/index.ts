import axios, { AxiosError } from 'axios'
import HttpStatusCode from '~/constants/http-status-code-enum'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
   return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
   return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export function isAxiosUnauthorizedError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
   return isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized
}

/*===== Local Storage =====*/
export const LocalStorageEventTarget = new EventTarget()

export const setAccessTokenToLS = (access_token: string) => {
   localStorage.setItem('access_token', access_token)
}

export const setRefreshTokenToLS = (refresh_token: string) => {
   localStorage.setItem('refresh_token', refresh_token)
}

export const clearLS = () => {
   localStorage.removeItem('access_token')
   localStorage.removeItem('refresh_token')

   const clearLSEvent = new Event('clearLS')
   LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}

export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''

export const getRefreshTokenFromLS = () => localStorage.getItem('refresh_token') || ''