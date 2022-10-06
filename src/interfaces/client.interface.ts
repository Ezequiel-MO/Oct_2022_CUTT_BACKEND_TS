export interface IClient {
  firstName: string
  familyName: string
  email: string
  phone?: string
  country: string
  quoteLanguage: 'EN' | 'ES' | 'FR' | 'DE'
  clientCompany: string
}
