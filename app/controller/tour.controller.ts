import { client } from "@/lib/sanity";

export const getTours = async (
  packageName: string,
  params = {} as { destination?: string; duration?: string; tourType?: string },
) => {
  const newParams = { ...params } as any;

  const filters = [`_type == "tourPackage"`, `tour->name == $packageName`];

  if (params.destination && params.destination !== "Any Destination") {
    filters.push(`location match $destination`);
    newParams.destination = `*${params.destination}*`;
  }

  if (params.tourType && params.tourType !== "Any Type") {
    filters.push(`$tourType in tags`);
    newParams.tourType = params.tourType;
  }

  if (params.duration && params.duration !== "Any Duration") {
    // Extract the lower and upper bounds from the string "1 - 3 Days"
    const durationRegex = /(\d+) - (\d+) Days/;
    const durationMatch = durationRegex.exec(params.duration);

    if (!durationMatch) {
      throw new Error("Invalid duration format");
    }

    const lowerBound = parseInt(durationMatch[1]);
    const upperBound = parseInt(durationMatch[2]);

    if (isNaN(lowerBound) || isNaN(upperBound)) {
      throw new Error("Invalid duration format");
    }

    if (lowerBound > upperBound) {
      throw new Error("Invalid duration format");
    }

    filters.push(`durationInDays >= $lowerBound`);
    filters.push(`durationInDays <= $upperBound`);

    newParams.lowerBound = lowerBound;
    newParams.upperBound = upperBound;
  }

  const tours = await client.fetch(
    `*[${filters.join(" && ")}]{
      ...,
      "coverImage": coverImage.asset->url,
    }`,
    {
      packageName,
      ...newParams,
    },
  );

  return tours;
};

export const getTour = async (slug: string) => {
  const tour = await client.fetch(
    `*[_type == "tourPackage" && slug.current == $slug][0]{
    ...,
    "coverImage": coverImage.asset->url,
    tour->{...}
  }`,
    {
      slug,
    },
  );

  return tour;
};
