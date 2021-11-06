interface LinkDescription {
  href: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS'
  rel: string
}

interface PayerAddressInformation {
  address_line_1: string
  address_line_2?: string
  admin_area_1?: string
  admin_area_2: string
  country_code: string
}

interface PayerNameInformation {
  given_name: string
  surname: string
}

interface PayerPhoneInformation {
  phone_number: {
    national_number: string
  }
}

interface PayerInformation {
  email_address: string
  payer_id: string
  address: PayerAddressInformation
  name: PayerNameInformation
  phone: PayerPhoneInformation
}

export interface SuccessTransactionDetail {
  create_time: string
  id: string
  intent: 'CAPTURE' | 'AUTHORIZE'
  links: Array<LinkDescription>
  payer: PayerInformation
  status: 'CREATED' | 'SAVED' | 'APPROVED' | 'VOIDED' | 'COMPLETED' | 'PAYER_ACTION_REQUIRED'
}
