export type SearcPageProps = {
  searchParams: Promise<{
    destination?: string;
    duration?: string;
    tourType?: string;
  }>;
};
