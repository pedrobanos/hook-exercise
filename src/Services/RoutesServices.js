import http from "./BaseService";

export const getComments = () =>http.get('/comments')
export const getPosts = () => http.get('/posts')
export const getPhotos = () => http.get ('/photos')
export const getPostDetails = (id) => http.get(`/posts/${id}`)
export const getCommentDetails = (id) => http.get(`/comments/${id}`)
