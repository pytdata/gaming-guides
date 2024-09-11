// import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ params }){
    if (params.slug) {
        // await new Promise((resolve) => setTimeout(resolve, 1000));
        const id = params.slug;

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const guide = await res.json()

        if (res.ok) {
            return{
                guide
            }
        }
    
        redirect(307, '/guides')
    }

    // error(404, 'Not found');
}