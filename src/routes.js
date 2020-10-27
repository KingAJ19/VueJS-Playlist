import showBlogs from './components/showBlogs.vue';
import plusBlog from './components/plusBlog.vue';
import singleBlog from './components/singleBlog.vue';


export default [
    {path: '/', component: showBlogs },
    {path: '/add', component: plusBlog},
    {path: '/blog/:id', component: singleBlog}
]