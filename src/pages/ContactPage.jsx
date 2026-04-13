import { Stack, Heading, Text, Link } from "@chakra-ui/react";

export const ContactPage = () => {
  return (
    <Stack gap={6} maxW={"2xl"}>
      <Heading>Contact</Heading>

      <Text>
        if you&apos;d like to work together or have a question, feel free to
        reach out.
      </Text>

      <Text>
        Email: <Link color={"blue.500"}>jhonnyquebrada@gmail.com</Link>
      </Text>

      <Text>
        GitHub:{" "}
        <Link
          href="https://github.com/JQnetherlands"
          target="_blank"
          color={"blue.500"}
        >
          github.com/JQnetherlands
        </Link>
      </Text>

      {/* <Text>
        LinkedIn: <Link color={"blue.500"}>linkedin.com/in/yourprofile</Link>
      </Text> */}
    </Stack>
  );
};
