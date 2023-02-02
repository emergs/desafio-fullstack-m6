import { createContext } from "react";
import { IChildren } from "..";

interface IContactsContext {

}

export const ContactsContext = createContext<IContactsContext>({} as IContactsContext);

const ContactsProvider = ({ children }: IChildren) => {
  <ContactsContext.Provider value={{}}>
    {children}
  </ContactsContext.Provider>
}

export default ContactsProvider