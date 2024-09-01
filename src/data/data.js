import bitmoji from "../images/avatar.png"
export const contactData = [
  {
    id: 0,
    name: "Email",
    value: {
      value: "mat.parizek@seznam.cz",
      type: "contact",
      href: "mailto:mat.parizek@seznam.cz"
    },
    icon: "email",
  },
  {
    id: 1,
    name: "Phone",
    value: {
      value: "+420 775 995 600",
      type: "contact",
      href: "tel:+420775995600"
    },
    icon: "phone",
  },
  {
    id: 2,
    name: "Birthday",
    value: {
      formatter: "2001-04-20",
      value: "April 20, 2001",
      type: "address"
    },
    icon: "birth",
  },
  {
    id: 3,
    name: "Address",
    value: {
      value: "Prague, Czech Republic",
      type: "address"
    },
    icon: "location",
  }
]

export const profileData =
{
  img: bitmoji,
  name: "Matej Parizek  ",
  job: "Software Developer"
}

export const socialData = [
  {
    id: 1,
    ref: "https://www.github.com/matej-parizek",
    icon: "github",
  },
  {
    id: 2,
    ref: "https://www.linkedin.com/in/matěj-pařízek-b33298293",
    icon: "linkedin",
  },
  {
    id: 3,
    ref: "https://www.instagram.com/matej.parizek/",
    icon: "instagram",
  },
]