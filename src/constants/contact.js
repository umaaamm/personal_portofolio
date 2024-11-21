const title = 'Contact'
const subtitle = 'Get in touch'
const contact_title = 'Discuss with me'
const message = 'Write me '

const contact_info = [
  {
    key: 1,
    title: 'Email',
    id: 'umam.tekno@gmail.com',
    icon: 'bx-mail-send',
    link: `mailto:umam.tekno@gmail.com`
  },
  {
    key: 2,
    title: 'Whatsapp',
    id: '+6281290766692',
    icon: 'bxl-whatsapp',
    link: 'https://api.whatsapp.com/send?phone=6281290766692&text=Hallo, Umam'
  }
]

const form_title = 'Job Opportunity or Project'
const input_name = 'Name'
const input_email = 'Email'
const input_project = 'Job or project'

const contact_content = {
	title,
  subtitle,
  contact_title,
  contact_info,
  message,
  form_title,
  input_name,
  input_email,
  input_project
}

export default contact_content