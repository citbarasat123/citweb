import { useRouter } from "next/router";

const slug = () => {
  const dynamicRoute = useRouter();
  let pagename = dynamicRoute.query.slug;
  console.log(pagename);
  return <></>;
};

export default slug;
