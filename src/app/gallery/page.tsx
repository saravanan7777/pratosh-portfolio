import { Flex, Heading, RevealFx } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    
    <Flex maxWidth="l" direction="column">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`${baseURL}/og?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <RevealFx fillWidth  >
      <Heading
      wrap="balance"
      variant="display-strong-m"
      style={{ textAlign: "center", paddingBottom: "2rem" }}
    >
      {"Walls That Speak — A Wall Art Collection"}
    </Heading>
    </RevealFx>
    <RevealFx delay={1} fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
      <MasonryGrid />
    </RevealFx>
    </Flex>
   
  );
}
