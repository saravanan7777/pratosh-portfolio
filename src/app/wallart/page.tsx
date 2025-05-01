import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, wallart } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";
import { Wallart } from "@/components/work/wallart";

export async function generateMetadata() {
  return Meta.generate({
    title: wallart.title,
    description: wallart.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(wallart.title)}`,
    path: wallart.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={wallart.path}
        title={wallart.title}
        description={wallart.description}
        image={`${baseURL}/og?title=${encodeURIComponent(wallart.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Wallart />
    </Column>
  );
}
