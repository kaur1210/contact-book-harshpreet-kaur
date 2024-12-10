const STORAGE_KEY = "contacts";

export const GetAllContacts = () => {
  const contacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
  return contacts || [];
};


export const SaveNewContacts = (contacts) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};


export const getContactById = (id) => GetAllContacts().find((contact) => contact.id === id);
