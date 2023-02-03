import { createContext } from "react";
import { IChildren } from "..";

interface IContactsContext {

}

export interface IContacts {
  id: string,
  name: string,
  email: string,
  phone: string,
  createdAt: Date
}

export const ContactsContext = createContext<IContactsContext>({} as IContactsContext);

const ContactsProvider = ({ children }: IChildren) => {
  <ContactsContext.Provider value={{}}>
    {children}
  </ContactsContext.Provider>
}

export default ContactsProvider