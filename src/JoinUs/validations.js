import { object, string} from 'yup';

 const require_message = 'Bu alan zorunludur.';

const contactSchema = object({
  fullName: string().required(require_message),
  number: string().required(require_message),
  message: string().min(3, "min 3 karakter giriniz").required (require_message),
  });

export default contactSchema;