import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


type ContactFormMailProps = {
  message: string;
  email: string;
};

export default function ContactFormMail({
  message,
  email,
}: ContactFormMailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message du portoflio robincombeau.work</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Vous avez reçu un nouveau message de votre portfolio :
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>L'adresse mail de l'expéditeur est : {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}