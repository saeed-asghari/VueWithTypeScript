import http from "@/http-common";

class PostsService {
  getAll(): Promise<any> {
    return http.get("/posts");
  }

  get(id: any): Promise<any> {
    return http.get(`/posts/${id}`);
  }

  create(data: any): Promise<any> {
    return http.post("/posts", data);
  }

  update(id: any, data: any): Promise<any> {
    return http.put(`/posts/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return http.delete(`/posts/${id}`);
  }

  deleteAll(): Promise<any> {
    return http.delete(`/posts`);
  }


}

export default new PostsService();