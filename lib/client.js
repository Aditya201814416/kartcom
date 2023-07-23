import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId:'lhvn5atl',
    dataset:'production',
    apiVersion:'2023-07-12',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_KEY
})


const builder = imageUrlBuilder(client);

export const urlFor =(source)=> builder.image(source);