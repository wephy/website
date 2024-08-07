import { useLoaderData } from "@remix-run/react";

export function clientLoader() {
    return { message: "I'm the blah" };
}

export default function Blah() {
    const loader = useLoaderData<typeof clientLoader>();
    return <h1>{loader.message}</h1>
}