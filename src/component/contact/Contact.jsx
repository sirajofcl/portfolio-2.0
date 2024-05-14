import {
  ContactBtn,
  ContactIcons,
  ContactContainer,
  Content,
} from "./Contact.styled";
import { Text, HrefLink, Line } from "../../library";
import { Whatsapp, Mail, Phone } from "../../assets";
export const Contact = () => {
  const contactIcons = [
    { id: 1, icon: <Mail />, link: "mailto:sirajatdesk@gmail.com", blank: "" },
    {
      id: 2,
      icon: <Whatsapp />,
      link: "https://wa.me/+923330662021",
      blank: "_blank",
    },
    { id: 3, icon: <Phone />, link: "tel:+923330662021", blank: "_blank" },
  ];
  //font-family: Noto Serif Georgian, serif;
  return (
    <ContactContainer>
        <Content>
          <Text weight="500" font="title" family="VT323">
            Get In Touch,
          </Text>
          <Text
            family="Inter"
            font="text"
            margin_bottom="20px"
            margin_top="8px"
          >
            Let's chat! My inbox is like a portal to possibility, waiting for
            your project ideas to whoosh through.
          </Text>
        </Content>
        <ContactIcons>
          {contactIcons.map((data) => (
            <ContactBtn key={data.id}>
              <HrefLink textColor="Dark50" href={data.link} target={data.blank}>
                {data.icon}
              </HrefLink>
            </ContactBtn>
          ))}
        </ContactIcons>
    </ContactContainer>
  );
};
