import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;
const ContactForm = styled.div`
  width: 100%;
  max-width: 700px; /* Increased from 600px */
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 40px; /* Slightly more padding */
  border-radius: 16px; /* Slightly larger corners */
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 30px;
  margin-top: 22px;
  gap: 16px;
`;

const ContactInputMessage = styled.textarea`
  width: 100%; /* ensures alignment with other inputs */
  min-height: 120px; /* makes it a bit bigger vertically */
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: none; /* prevents awkward resizing */
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const slideInVariants = (direction = "left", distance = 100) => ({
  hidden: { x: direction === "right" ? -distance : direction === "right" ? distance : 0, y: direction === "bottom" ? distance : 0, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
});

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tox7kqs",
        "template_nv7k7mj",
        form.current,
        "SybVGsYS52j2TfLbi"
      )
      .then(
        (result) => {
          alert("✅ Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <motion.div
          variants={slideInVariants("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Title>Contact</Title>
        </motion.div>

        <motion.div
          variants={slideInVariants("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Desc style={{ marginBottom: "50px" }}>
            Feel free to reach out to me for any questions or opportunities!
          </Desc>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1.5, ease: "easeOut", staggerChildren: 0.15 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <motion.div variants={slideInVariants("bottom")}>
              <ContactTitle> Get in Touch 🛎️</ContactTitle>
            </motion.div>
            <motion.div variants={slideInVariants("bottom")}>
              <ContactInput placeholder="Your Email" name="from_email" required />
            </motion.div>
            <motion.div variants={slideInVariants("bottom")}>
              <ContactInput placeholder="Your Name" name="from_name" required />
            </motion.div>
            <motion.div variants={slideInVariants("bottom")}>
              <ContactInput placeholder="Subject" name="subject" required />
            </motion.div>
            <motion.div variants={slideInVariants("bottom")}>
              <ContactInputMessage
                placeholder="Message"
                name="message"
                rows={4}
                required
              />
            </motion.div>
            <motion.div variants={slideInVariants("bottom")}>
              <ContactButton type="submit" value="Send" />
            </motion.div>
          </ContactForm>
        </motion.div>
      </Wrapper>
    </Container>
  );
};


export default Contact;