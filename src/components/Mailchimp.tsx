"use client";

import { mailchimp } from "@/app/resources";
import { Button, Flex, Heading, Input, Text, Background, Column } from "@/once-ui/components";
import { opacity, SpacingToken } from "@/once-ui/types";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

type NewsletterProps = {
  display: boolean;
  title: string | JSX.Element;
  description: string | JSX.Element;
};

export const Mailchimp = ({ newsletter }: { newsletter: NewsletterProps }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      return true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const debouncedHandleChange = debounce(handleChange, 2000);

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Background
             position="absolute"
             mask={{
              cursor: mailchimp.effects.mask.cursor,
              x: mailchimp.effects.mask.x,
              y: mailchimp.effects.mask.y,
              radius: mailchimp.effects.mask.radius,
            }}
            gradient={{
              display: mailchimp.effects.gradient.display,
              x: mailchimp.effects.gradient.x,
              y: mailchimp.effects.gradient.y,
              width: mailchimp.effects.gradient.width,
              height: mailchimp.effects.gradient.height,
              tilt: mailchimp.effects.gradient.tilt,
              colorStart: mailchimp.effects.gradient.colorStart,
              colorEnd: mailchimp.effects.gradient.colorEnd,
              opacity: mailchimp.effects.gradient.opacity as
                | 0
                | 10
                | 20
                | 30
                | 40
                | 50
                | 60
                | 70
                | 80
                | 90
                | 100,
            }}
            dots={{
              display: mailchimp.effects.dots.display,
              color: mailchimp.effects.dots.color,
              size: mailchimp.effects.dots.size as any,
              opacity: mailchimp.effects.dots.opacity as any,
            }}
            grid={{
              display: mailchimp.effects.grid.display,
              color: mailchimp.effects.grid.color,
              width: mailchimp.effects.grid.width as any,
              height: mailchimp.effects.grid.height as any,
              opacity: mailchimp.effects.grid.opacity as any,
            }}
            lines={{
              display: mailchimp.effects.lines.display,
              opacity: mailchimp.effects.lines.opacity as any,
            }}
          />
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {"Ready to Bring Ideas to Life?"}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
        variant="body-strong-l"
      >
        {"Let’s create something remarkable together. Reach out for further details and collaboration."}
      </Text>
      
    </Column>
  );
};
