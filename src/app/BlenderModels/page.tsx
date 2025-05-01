import { Column } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, BlenderModels } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";
import { Blender } from "@/components/work/Blender";

export async function generateMetadata() {
  return Meta.generate({
    title: BlenderModels.title,
    description: BlenderModels.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(BlenderModels.title)}`,
    path: BlenderModels.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={BlenderModels.path}
        title={BlenderModels.title}
        description={BlenderModels.description}
        image={`${baseURL}/og?title=${encodeURIComponent(BlenderModels.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      < Blender/>
    </Column>
  );
}
